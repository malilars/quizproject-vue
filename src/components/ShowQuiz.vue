<template>
    <div class="quiz">

        <div v-if="! response">
            Loading...
        </div>
        <div v-else>

            <!-- while we have a question -->
            <div v-if="current">
                <div class="row text-center">
                    <div class="col-md-6 col-md-push-3">
                        <div class="question">
                            <h4>{{ answered.length+1 }} / {{ answered.length + response.quiz.length }} </h4>
                            <h3 class="heading">{{ current.question}}</h3>

                            <div v-for="alternative in current.alternatives" :key="alternative" class="alternatives">
                                <label>
                                    <input type="radio" :value="alternative" v-model="currentAnswer">
                                    {{ alternative }}
                                </label>
                            </div>

                            <button class="btn btn-danger btn-lg btn-block mb-5" @click="post()" :disabled="currentAnswer == ''">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <h1>We are done!</h1>
                <p class="lead">
                    You got {{ score }} correct answers out of {{ answered.length }}! That is {{ Math.round(100 * (score / answered.length)) }}% correct answers.
                </p>

                <div class="col-md-6 col-md-push-3">
                    <div v-for="question in answered" :key="question.question">
                        <h3 class="heading">
                            {{ question.question }}
                        </h3>
                        <div class="alert" :class="{ 'alert-success' : question.answer == question.correctAnswer, 'alert-danger' : question.answer != question.correctAnswer }">
                            <p>
                                <strong>Correct answer: {{ question.correctAnswer }}</strong>
                            </p>
                            <p>
                                <strong>Your answer: {{ question.answer }}</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                answer: [],
                currentAnswer: null,
                answered: [],
                response: null
            }
        },
        methods: {
            post: function()
            {
                //Put the "current" question as the answered
                var answered = this.response.quiz.shift();
                //Set the answer the user did on this question 
                //to be able to correct it later. Also clear
                //it to prepare for showing the next one.
                answered.answer = this.currentAnswer;
                this.currentAnswer = '';
                //Push this one to the answered array
                this.answered.push(answered);

                //If the current question is null, we're done here!
                if (this.current == null)
                {
                    //
                }
            },
        },
        computed: {
            /**
             * The Current Question.
             */
            current: function()
            {
                if (this.response.quiz && this.response.quiz.length > 0)
                {
                    return this.response.quiz[0];
                }

                return null;
            },
            /**
             * The accumulated score.
             */
            score: function()
            {
                if (this.answered.length == 0)
                {
                    return 0;
                }

                return this.answered.reduce(function(count, item) {
                    //If we have the correct answer
                    if (item.answer == item.correctAnswer)
                    {
                        return count + 1;
                    }
                    
                    return count;
                }, 0);

            }
        },
        mounted() {
            //fetch the quiz we want to look at
            this.$http.get('https://movieapi-201312.appspot.com/quiz')
                .then(response => {
                    //Since the api does not allow for "get by id",
                    //we fetch them all and filter here instead
                    this.response = response.body.filter((quiz) => {
                        return quiz._id == this.$route.params.id;
                    }).shift();
                });
        }
    }
</script>

<style>
    .quiz {
        text-align: center
    }
    .alternatives {
        text-align: left;
    }
    .alternatives label {
        margin-bottom: 25px;
        border-bottom: 1px solid #ffffff6b;
        padding-bottom: 10px;
        display: block;
    }
    .alternatives label input {
        margin-right: 10px;
    }
</style>