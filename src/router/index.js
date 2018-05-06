import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import ShowQuiz from '@/components/ShowQuiz'
import QuizOptions from '@/components/QuizOptions'
import TakeQuiz from '@/components/TakeQuiz'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/quiz-options',
      name: 'quiz-options',
      component: QuizOptions
    },
    {
      path: '/show-quiz/:id',
      name: 'show-quiz',
      component: ShowQuiz
    },
    {
      path:'/take-quiz',
      name: 'take-quiz',
      component: TakeQuiz,
    }
  ]
})
