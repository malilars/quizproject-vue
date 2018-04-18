# quiz-project

> A Vue.js project

# Short description of your project
This is an application made for the persons who truly loves movies and claims to know everything about it. In this project we are building a quiz application where the user can generate their own movie quiz and share them with friends to compete and find out how much that they actually know about movies. 
The user generate a quiz by  setting different parameters e.g. selecting genres, time span, themes and number of questions. When the parameters are given and the button generate quiz is pressed the quiz appear on the screen - ready to be answered.  When the quiz is submitted the number of correct answers are shown and the quiz-id (for sharing with friends).
If a user wants to take a quiz she need to type in a quiz-id to compete with other friends. The user can also choose to take some of the most popular quizzes which are presented on the page. 

# What you have done
So far we have been setting up a basic layout for the quiz application and a back end where we have built our api which is making the api calls to the movie quiz database. We are making the api calls and have been formatting the data so that we can use it in the front end. 
It is now possible to generate a quiz based on the user's preferences and to answer the questions. 

# What you still plan to do
We need to handle different kinds of errors that can occur. 
We are going to work more on the layout to get a nicer design and to have more components put together.
We are going to make the page where the user can take quizzes that has been generated earlier
Store the quizzes in our database
Get the quizzes and display them on the page


# Your project file structure (short description/purpose of each file)
## Components
### Welcome.vue  
- This is the first page of the app where the user can choose if she wants to take a quiz or create one.

### QuizOptions.vue 
- The Vue component where the user can generate a quiz by selecting different parameters. These parameters are then used in the call to our api which is making the call to the movie database api.

### GenerateQuiz.vue
- The Component creating the quiz using the data fetched from the api.

### TakeQuiz.vue
- This is about to be the component where the user can take a already generated quiz. This is still to be done (like many other things atm).

## Data
### Model.js
- This is where we are storing data for a session to make it possible for components to share data from the api calls for example. At the moment there is only two methods getQuiz() and setQuiz() which are used for the fetched data.

## Router
### index.js
- This is where the routers are created

## App.vue
- The app component which is shown on every page.


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# quizproject-vue
