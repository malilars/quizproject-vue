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
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4>{{ answered.length+1 }} / {{ answered.length + response.quiz.length }} </h4>
                                <h3>{{ current.question}}</h3>
                            </div>
                            <div class="panel-body">
                                <h4>{{ current.type }}</h4>
                                <div v-for="alternative in current.alternatives" :key="alternative">
                                    <label>
                                        {{ alternative }}
                                        <input type="radio" :value="alternative" v-model="currentAnswer">
                                    </label>
                                </div>
                                <button class="btn btn-default" @click="post()">
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <h2>We are done!</h2>
                <p>
                    You got {{ score }} correct answers out of {{ answered.length }}! That is {{ Math.round(100 * (score / answered.length)) }}% correct answers.
                </p>

                <ul class="list-group">
                    <li v-for="question in answered" class="list-group-item" :class="{ 'list-group-item-success' : question.answer == question.correctAnswer, 'list-group-item-danger' : question.answer != question.correctAnswer }">
                        <p>
                            {{ question.question }}
                        </p>
                        <p>
                            <strong>Correct answer: {{ question.correctAnswer }}</strong>
                        </p>
                        <p>
                            <strong>Your answer: {{ question.answer }}</strong>
                        </p>
                    </li>
                </ul>
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
                var answered = this.response.quiz.shift();
                answered.answer = this.currentAnswer;
                this.answered.push(answered);

                if (this.current == null)
                {
                    alert("Nu är vi färdiga");
                }
            },
        },
        computed: {
            current: function()
            {
                if (this.response.quiz && this.response.quiz.length > 0)
                {
                    return this.response.quiz[0];
                }

                return null;
            },
            score: function()
            {
                if (this.answered.length == 0)
                {
                    return 0;
                }

                return this.answered.reduce(function(count, item) {

                    console.log(count);
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
</style>