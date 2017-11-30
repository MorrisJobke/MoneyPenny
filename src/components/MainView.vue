<template>
  <div>
    <add-expense/>
    <hr>
    <list-expenses/>
  </div>
</template>

<script>
import AddExpense from '@/components/AddExpense'
import ListExpenses from '@/components/ListExpenses'

export default {
  name: 'MainView',
  components: { AddExpense, ListExpenses }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
