import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/about'
import Contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
