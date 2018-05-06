<template>
  <div id="app" class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="jumbotron">
                <h1 class="text-center"><router-link to="/">The Quiz App</router-link></h1>
            </div>
        </div>
    </div>
    <router-view/>
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
  color: #2c3e50;
  margin-top: 60px;
    background: url('https://www.ashfordcastle.com/-/media/ttc/rch/ashford-castle/main-carousel/desktop/ash-cinema-03-1400x568.jpg?h=568&la=en&w=1400&hash=063A1FA50A24A246731D58A0ECDD48C91F6F1A21')

}
.jumbotron {
}
</style>
