<template>
  <div class="quizOptions">
    <div class="row">
        <div class="col-md-6 col-md-push-3">

            <h3 class="heading">Quiz Details</h3>
            <div class="form-group">
                <label for="quiz-name">Name of The Quiz</label>
                <input type="text" class="form-control" id="quiz-name" v-model="quizName" required placeholder="Enter a name, like Movies from the 90s">
            </div>
            <div class="form-group">
                <label for="usr">Name of The Creator</label>
                <input type="text" class="form-control" id="usr" v-model="usr" placeholder="Whats your name?">
            </div>
            <div class="form-group">
                <label for="number">How many questions do you want in the quiz?</label>
                <input type="number" min="4" max="40" class="form-control" id="numberOfQuestions" v-model="numberOfQuestions">
                <p class=help-block>The number of questions must be between <code>4</code> and <code>40</code></p>
            </div>

            <h3 class="heading">Genres</h3>
            <p class="badge badge-movie" v-for="genre in genres" :key="genre.id" :class="{ 'selected': genre.selected }" @click="toggleSelected(genre)">
                {{ genre.name }}
            </p>
            <p class="help-block">Click on a genre to select it.</p>

            <h3 class="heading">Types</h3>
            <p class="badge badge-movie" v-for="theme in themes" :key="theme.id" :class="{ 'selected': theme.selected }" @click="toggleSelected(theme)">
                {{ theme.name }}
            </p>
            <p class="help-block">Click on a type to select it.</p>

            <h3 class="heading">Enter a Time Span for Movies</h3>
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="from">From Year:</label>
                    <input type="number" min="1920" max="2018" class="form-control" id="from" v-model="from" placeholder="1990">
                </div>
                <div class="form-group col-md-6">
                    <label for="to">To Year:</label>
                    <input type="number" min="1920" max="2018" class="form-control" id="to" v-model="to" placeholder="2018">
                </div>
            </div>

            <div class="generate-button">
                <button class="btn btn-danger btn-lg btn-block" @click="callApi" id="generate-button" :disabled="! formIsValid"> Generate Quiz</button>
            </div>

            <div class="mb-5"></div>
        </div>
    </div>
</div>  

</template>

<script>
  export default {
    props: ['model'],  
    data() {
      return {
          quizName: '',
          usr: '',    
          genres: [],
          from: '',
          to: '',
          themes: [], 
          numberOfQuestions: 4
      }
    },
    computed: {
        currentYear: function()
        {
            return (new Date()).getFullYear();
        },
        selectedTypes: function() {
            return this.themes.filter(function(type) {
                return type.selected === true;
            }).map(function(type) {
                return type.name;
            });
        },

        selectedGenres: function() {
            return this.genres.filter(function(genre) {
                return genre.selected === true;
            }).map(function(genre) {
                return genre.id;
            });
        },

        formIsValid: function()
        {
            return this.quizName !== '' &&
                this.usr !== '' &&
                this.numberOfQuestions !== '' &&
                this.from !== '' &&
                this.to !== '' &&
                this.selectedTypes.length > 0 &&
                this.selectedGenres.length > 0;   
        }
    },
    mounted() {
        this.genres = [
            {"id": 28,"name": "Action", selected: true},
            {"id": 12,"name": "Adventure", selected: true},
            {"id": 16, "name": "Animation", selected: false},
            {"id": 35, "name": "Comedy", selected: false},
            {"id": 80, "name": "Crime", selected: false},
            {"id": 99, "name": "Documentary", selected: false},
            {"id": 18,"name": "Drama", selected: false},
            {"id": 10751, "name": "Family", selected: false},
            {"id": 14, "name": "Fantasy", selected: false},
            {"id": 36, "name": "History", selected: false},
            {"id": 27, "name": "Horror", selected: false},
            {"id": 10402, "name": "Music", selected: false},
            {"id": 9648,"name": "Mystery", selected: false},
            {"id": 10749,"name": "Romance", selected: false},
            {"id": 878,"name": "Science Fiction", selected: false},
            {"id": 10770,"name": "TV Movie", selected: false},
            {"id": 53, "name": "Thriller", selected: false},
            {"id": 10752,"name": "War", selected: false},
            {"id": 37, "name": "Western", selected: false}
        ],
        // this.genres = [ {id: '1', name:'Romance'}, {id: '2', name: 'Thriller'}, {id: '3', name: 'Horror'}, {id: '4', name: 'Comedy'}, {id: '5', name: 'Documentary'}, {id: '6', name: 'Science Fiction'},{id: '7', name: 'Drama'},{id: '8', name: 'Porn'}];
        this.themes = [ 
            {id:'1', name: 'Actors', selected: false }, 
            {id:'2', name: 'Title', selected: false }, 
            {id:'3', name: 'Year', selected: false }, 
            {id:'4', name: 'Keywords', selected: false }
        ];
    },
    methods: {
        toggleSelected: function(item)
        {
            item.selected = ! item.selected;
        },
        callApi: function()
        {
           return fetch('https://movieapi-201312.appspot.com/quiz', {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({  
                    types: this.selectedTypes,
                    genre: this.selectedGenres,
                    year: [this.from, this.to],
                    numberOfQuestions: this.numberOfQuestions,
                    name: this.quizName,
                    author: this.usr
                })
            })
            .then(res => res.json())
            .then(res => {
                this.$router.push('/show-quiz/' + res._id);
            });  
        }
    }
  }
</script>
<style>
.generate-button{
 text-align: center
}
</style>
