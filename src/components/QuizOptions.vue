<template>
  <div class="quizOptions">
      <div class="row">
        <div class="col-md-12">
            <h3>Enter Quiz Details</h3>
            <div class="form-group">
                <label for="quiz-name">Name of The Quiz</label>
                <input type="text" class="form-control" id="quiz-name" v-model="quizName" required>
            </div>
        </div>
      </div>
      <div class="row">
          <div class="col-md-12">
            <div class="form-group">
                <label for="usr">Name of The Creator</label>
                <input type="text" class="form-control" id="usr" v-model="usr">
            </div>
          </div>
      </div>
      <div class="row">
            <hr>
            <div class="col-md-6">
                <h3> Select Preferred Genres </h3>
                <div class="form-group">
                    <label for="genre">Press Ctrl (windows)/Command (Mac) to choose multiple</label>
                    <select multiple class="form-control" name="genre" v-model="selectedGenres" >
                        <option v-for="genre in genres.genres" :id="genre.id" :key="genre.id" :value="genre.id">
                            {{ genre.name }}
                        </option> 
                    </select>
                </div>  
            </div>

            <div class="col-md-6">
                <h3>Enter a Time Span for Movies</h3>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="from">From Year:</label>
                        <input type="number" min="1920" max="2018" class="form-control" id="from" v-model="from">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="to">To Year:</label>
                        <input type="number" min="1920" max="2018" class="form-control" id="to" v-model="to">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <h3> Select Themes For Your Questions </h3>
                 <label for="themes">Select Minimum 1</label>
                <div class="checkbox" v-for="theme in themes" :id="theme.id" :key="theme.id">
                    <input type="checkbox" v-model="selectedThemes" :value="theme.name">
                    <label >
                        {{theme.name}}
                    </label>
                </div>
            </div>

            <div class="form-group col-md-6">
                <h3> Select Number of Questions </h3>
                <label for="number">Between 4 and 40</label>
                <input type="number" min="4" max="40" class="form-control" id="numberOfQuestions" v-model="numberOfQuestions">
            </div>

      </div>

      <div class="row">
        <div class="generate-button">
            <button class="btn btn-success" @click="callApi" id="generate-button"> Generate Quiz</button>
        </div>
      </div>
      <hr>
  </div>  

</template>

<script>
  import draggable from 'vuedraggable'

  export default {
    components: {
        draggable
    },
    props: ['model'],  
    data () {
      return {
          quizName: null,
          usr: null,    
          genres: "",
          decades: null,
          selectedGenres: [],
          from: null,
          to: null,
          themes: null, 
          selectedThemes: [],
          numberOfQuestions: null
      }
    },
    mounted() {
        this.genres = {
            "genres": [
                {"id": 28,"name": "Action"},
                {"id": 12,"name": "Adventure"},
                {"id": 16, "name": "Animation"},
                {"id": 35, "name": "Comedy"},
                {"id": 80, "name": "Crime"},
                {"id": 99, "name": "Documentary"},
                {"id": 18,"name": "Drama"},
                {"id": 10751, "name": "Family"},
                {"id": 14, "name": "Fantasy"},
                {"id": 36, "name": "History"},
                {"id": 27, "name": "Horror"},
                {"id": 10402, "name": "Music"},
                {"id": 9648,"name": "Mystery"},
                {"id": 10749,"name": "Romance"},
                {"id": 878,"name": "Science Fiction"},
                {"id": 10770,"name": "TV Movie"},
                {"id": 53, "name": "Thriller"},
                {"id": 10752,"name": "War"},
                {"id": 37, "name": "Western"}
            ]
        }
        // this.genres = [ {id: '1', name:'Romance'}, {id: '2', name: 'Thriller'}, {id: '3', name: 'Horror'}, {id: '4', name: 'Comedy'}, {id: '5', name: 'Documentary'}, {id: '6', name: 'Science Fiction'},{id: '7', name: 'Drama'},{id: '8', name: 'Porn'}];
        this.themes = [ 
            {id:'1', name: 'Actors'}, 
            {id:'2', name:'Title'}, 
            {id:'3', name:'Year'}, 
            {id:'4', name:'Keywords'}
        ];
    },
    methods: {

        callApi: function()
        {
           return fetch('https://movieapi-201312.appspot.com/quiz', {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                //body: JSON.stringify({a: 7, str: 'Some string: &=&'})
                body: JSON.stringify({  
                    types: this.selectedThemes,
                    genre: this.selectedGenres,
                    year: [this.from, this.to],
                    numberOfQuestions: this.numberOfQuestions,
                    name: this.quizName,
                    author: this.usr
                })
            })
            .then(res => res.json())
            .then(res => this.model.setQuiz(res))
            .then(res => this.$router.push('/generate-quiz'));  
        }
    }
  }
</script>
<style>
.generate-button{
 text-align: center
} 
</style>
