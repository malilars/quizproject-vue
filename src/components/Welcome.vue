<template>
  <div class="welcome">
    <div class="row">
      <h4>Welcome to The Quiz app! </h4>
        <p>Here you can create your own customized movie quiz and share it with your friends. You can also take a quiz to see how you stant agains the rest. </p>
          <p>Let the competition begin!</p >
      <router-link to = '/quiz-options'>
      <button class="btn btn-success">Create Quiz</button>
      </router-link>
      <router-link to = '/take-quiz'>
      <button class="btn btn-success"> Take a Quiz</button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        usr: null,
      }
    }
  }
</script>

<style>
.welcome{
 text-align: center
} 
</style>
