<template>
  <div>
    <h3>New expense</h3>
    <form v-on:submit.prevent="expense">
      <vue-numeric
        currency="€"
        separator=" "
        v-model="price"
        class="price"
      >
      </vue-numeric>
      <div class="category">
        <label
          class="radio"
          v-bind:class="category == 'home' ? 'active' : ''">
          <input type="radio" value="home" v-model="category"/>
          <i class="fa fa-home" aria-hidden="true"></i>
          <span class="info">Home</span>
        </label>
        <label
          class="radio"
          v-bind:class="category == 'transportation' ? 'active' : ''">
          <input type="radio" value="transportation" v-model="category" id="abc"/>
          <i class="fa fa-bus" aria-hidden="true"></i>
          <span class="info">Transportation</span>
        </label>
      </div>
      <input type="submit" value="Add expense"/>
    </form>
  </div>
</template>

<script>
import VueNumeric from 'vue-numeric'

export default {
  name: 'AddExpense',
  data () {
    return {
      price: 1000,
      category: 'transportation'
    }
  },
  components: { VueNumeric },
  methods: {
    expense: function (event) {
      this.$store.commit('addExpense', {
        price: this.price,
        category: this.category
      })
      this.price = 0
      this.category = 'home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

input[type="submit"],
input.price {
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
    background-color: rgba(214, 115, 13, 0.4);
    border-radius: 2px;
    cursor: pointer;
}
.category label .fa {
    font-size: 30px;
    line-height: 48px;
    padding: 0 4px;
}
.category label.active {
    background-color: rgba(214, 115, 13, 0.7);
}

.category .info {
    font-size: 8px;
    display: block;
    padding: 0 2px 4px 2px;
}
</style>
