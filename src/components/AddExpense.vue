<template>
  <div>
    <h3>Neue Ausgabe</h3>
    <form v-on:submit.prevent="expense">
      <vue-numeric
        currency="€"
        separator=" "
        v-model="amount"
        class="amount"
      >
      </vue-numeric>
      <div class="category">
        <label
          v-for="c in categories"
          class="radio"
          v-bind:class="category == c.name ? 'active' : ''">
          <input type="radio" v-bind:value="c.name" v-model="category"/>
          <i class="fa" v-bind:class="c.icon" aria-hidden="true"></i>
          <span class="info">{{ c.name }}</span>
        </label>
      </div>
      <input type="submit" value="Ausgabe hinzufügen"/>
    </form>
  </div>
</template>

<script>
import VueNumeric from 'vue-numeric'
import categoryIcons from '../categories'

export default {
  name: 'AddExpense',
  data () {
    return {
      amount: 0,
      category: 'Haushalt'
    }
  },
  computed: {
    categories: () => {
      return categoryIcons
        .filter(
          c => !c.name.includes(' > ')
        )
    }
  },
  components: { VueNumeric },
  methods: {
    expense: function (event) {
      if (this.amount <= 0) {
        return
      }
      this.$store.commit('addExpense', {
        amount: (-1 * this.amount * 100).toFixed(0),
        category: this.category,
        post_date: '2017-01-10 16:00:00',
        enter_date: '2017-01-10 16:00:00',
        description: this.category
      })
      this.amount = 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  color: white;
}

input[type="submit"],
input.amount {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    font-size: 24px;
    font-weight: 300;
    padding: 5px 5px;
    border-radius: 3px;
    border: 1px solid rgba(128, 128, 128, 0.5);
    text-align: center;
    background-color: white;
}

input[type="submit"]:hover,
input[type="submit"]:active,
input[type="submit"]:focus {
    background-color: rgb(68, 137, 228);
    color: white;
    cursor: pointer;
}

.category {
    padding: 5px 0;
}

/* hide radio buttons */
.category input[type="radio"]{
    margin: 0;
    padding: 0;
    opacity: 0;
    height: 0;
    width: 0;
    float: left;
}

.category label {
    width: 61px;
    display: inline-block;
    text-align: center;
    color: white;
    background-color: #66A289;
    border-radius: 2px;
    cursor: pointer;
    margin: 10px 7px;
    user-select: none;
}
.category label .fa {
    font-size: 30px;
    line-height: 48px;
    padding: 0 4px;
}
.category label.active {
    background-color: #277553;
}

.category .info {
    font-size: 8px;
    display: block;
    padding: 0 2px 4px 2px;
    font-weight: 800;
}
</style>
