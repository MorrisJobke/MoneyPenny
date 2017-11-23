import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddExpense from '@/components/AddExpense'
import ListExpenses from '@/components/ListExpenses'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/add',
      name: 'AddExpense',
      component: AddExpense
    },
    {
      path: '/list',
      name: 'ListExpenses',
      component: ListExpenses
    }
  ]
})
