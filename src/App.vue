<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">The Quiz App</a>
        </div>
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/quiz-options">Create new quiz</router-link>
          </li>
          <li>
            <router-link to="/take-quiz">Show all quizzes</router-link>          
          </li>
        </ul>
      </div>
    </nav>
    <div id="app" class="container">
      <div class="row">
          <div class="col-md-12">
              <div class="splash">
                  <h1 class="text-center">The Quiz App</h1>
              </div>
          </div>
      </div>
      <router-view/>
    </div>
  </div>
</template>


<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #fff;
  margin-top: 60px;
}

.panel {
  color: #000;
}

body {
  background: url('./assets/bg-pattern.png'), linear-gradient(to left,#610a08,#dc2430);
}

nav.navbar {
  border-radius: 0px;
}
.splash h1 {
  color: #fff !important;
  font-size: 100px;
  letter-spacing: -10px;
}

.mb-5 {
    margin-bottom:5em;
}
h3.heading {
    background-color: rgba(0, 0, 0, 0.11);
    padding: 20px;
    margin-top: 50px;
    margin-bottom: 15px;
    border-top: 4px solid #610a084d;
    line-height: 1.4;
}

input[type=text].form-control, input[type=number].form-control {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #ffffff6b;
    border-radius: 0px;
    box-shadow: none;
    color: #fff;
}

select.form-control {
    background-color: transparent;
    color: #fff;
    border: none;
    box-shadow: none;
}
select.form-control option {
    border-bottom: 1px solid #ffffff6b;
}
input.form-control::placeholder {
    color: #ffffff6b;
}
.help-block {
    color: #ffffff6b;
}
.badge-movie {
    background-color: transparent;
    box-shadow: 2px 2px 5px #00000061;
    padding: 10px;
    margin-right: 10px;
    cursor: pointer;
}
.badge-movie.selected {
    background-color: #ffa500a1 !important;
}
.badge-movie:hover:not(.selected) {
    background-color: #00000061 !important;
}


</style>
