import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import ShowQuiz from '@/components/ShowQuiz'
import QuizOptions from '@/components/QuizOptions'
import TakeQuiz from '@/components/TakeQuiz'
import { modelInstance } from "@/data/model";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
      props: {model : modelInstance}

    },
    {
      path: '/quiz-options',
      name: 'quiz-options',
      component: QuizOptions,
      props: {model : modelInstance}
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
