<template>
  <div>
    <h3>Ausgaben</h3>
    <table v-for="month in months">
      <tr>
        <td class="month" colspan="4">{{ month.name }}</td>
      </tr>
      <tr v-for="(expense, index) in month.expenses" v-bind:title="expense.post_date | shortDate">
        <td class="date">{{ expense.post_date | onlyDay }}.</td>
        <td class="category"><i class="fa" v-bind:class="expense.category | mapCategory" v-bind:title="expense.category" aria-hidden="true"></i></td>
        <td class="text">{{ expense.description }}</td>
        <td class="amount">{{ expense.amount | euroize }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import categories from '../categories'

const mappedCategories = {}
categories.forEach(category => {
  mappedCategories[category.name] = category.icon
})

const monthNames = [
  'Januar',
  'Februar',
  'März',
  'April',
  'Mai',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'Dezember'
]

export default {
  name: 'ListExpenses',
  computed: {
    months () {
      let months = {}
      this.$store.state.expenses.reverse().forEach(expense => {
        const monthID = expense.post_date.substring(0, 7)
        const year = expense.post_date.substring(0, 4)
        const month = expense.post_date.substring(5, 7)

        if (months[monthID] === undefined) {
          months[monthID] = {
            'name': monthNames[parseInt(month) - 1] + ' ' + year,
            'expenses': []
          }
        }
        months[monthID].expenses.push(expense)
      })

      let orderedMonths = {}
      Object.keys(months).sort().reverse().forEach(key => {
        orderedMonths[key] = months[key]
      })

      return orderedMonths
    }
  },
  filters: {
    euroize: value => {
      return (value / 100).toFixed(2).toLocaleString('de-DE') + ' €'
    },
    mapCategory: value => {
      if (mappedCategories[value]) {
        return mappedCategories[value]
      }
      return ''
    },
    shortDate: value => {
      return value.substring(0, 10)
    },
    onlyDay: value => {
      return value.substring(8, 10)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  color: white;
}
td {
  padding: 4px 0;
}
.category {
  width: 26px;
  text-align: center;
}
.date {
  opacity: .6;
}
.text {
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 172px;
  max-width: 172px;
}
.amount {
  text-align: right;
  min-width: 70px;
}
.month {
  font-size: 10px;
  font-weight: 600;
}
</style>
