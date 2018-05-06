<template>
    <div class="quiz">
        <div class="row">
            <div class="col-md-12">
                <p class="lead">On this page it will soon be possible for you to take quizzies that other users has created :) </p>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <!--<pre>{{ quizzes}}</pre>-->
                <div v-if="quizzes" class="row">
                    <div class="col-md-4" v-for="quiz in quizzes" :key="quiz._id">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                {{ quiz._id}}
                            </div>
                            <div class="panel-body">
                                <router-link :to="{ name: 'show-quiz', params: { id: quiz._id }}">Take Quiz</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <h3>Loading quizzes...</h3>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                quizzes: null
            }
        },
        mounted()
        {
            //Fetch all quizzes
            this.$http.get('https://movieapi-201312.appspot.com/quiz')
                .then(response => {
                    this.quizzes = response.body;
                });
        }
    }
</script>
<style>
.quiz{
    text-align: center
} 
</style>