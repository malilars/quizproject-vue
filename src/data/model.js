  const QuizModel = function () {

    let quiz;

    this.setQuiz = function(quizFromApi)
    {       
        this.quiz = quizFromApi;
        console.log("Lyckades läggaa till quiz");
    };
    
    this.getQuiz = function(){

        console.log("Hämtar quiz från model");
        return this.quiz;
    };
  
  };
  
  export const modelInstance = new QuizModel();
  