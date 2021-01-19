import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Contact from './components/Contact.vue'
import Course from './components/Course.vue'
import Entering from './components/Entering.vue'
import Exam from './components/Exam.vue'
import Greeting from './components/Greeting.vue'
import Guideline from './components/Guideline.vue'
import Kleperin from './components/Kleperin.vue'
import Logic from './components/Logic.vue'
import Performance from './components/Performance.vue'
import Plan from './components/Plan.vue'
import Tweet from './components/Tweet.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: HelloWorld,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/course',
      name: 'course',
      component: Course,
    },
    {
      path: '/entering',
      name: 'entering',
      component: Entering,
    },
    {
      path: '/exam',
      name: 'exam',
      component: Exam,
    },
    {
      path: '/greeting',
      name: 'greeting',
      component: Greeting,
    },
    {
      path: '/guideline',
      name: 'guideline',
      component: Guideline,
    },
    {
      path: '/kleperin',
      name: 'kleperin',
      component: Kleperin,
    },
    {
      path: '/logic',
      name: 'logic',
      component: Logic,
    },
    {
      path: '/performance',
      name: 'performance',
      component: Performance,
    },
    {
      path: '/plan',
      name: 'plan',
      component: Plan,
    },
    {
      path: '/tweet',
      name: 'tweet',
      component: Tweet,
    },
  ],
})