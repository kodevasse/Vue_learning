import Vue from 'vue';
import Accordion from './components/Accordion.vue';

new Vue({
  el: '#app',

  components: {
    Accordion,
  },
  data: {
    price: 100,
    hidden: true,

    item: '',
    item1: '',
    items: ['item1', 'item2'],
    item1s: [
      { text: 'item11', checked: true },
      { text: 'item22', checked: false },
      { text: 'item22', checked: false },
    ],
    item2s: [
      { id: 1, title: 'Title 1', description: 'Description for tab 1.' },
      { id: 2, title: 'Title 2', description: 'Description for tab 2.' },
      { id: 3, title: 'Title 3', description: 'Description for tab 3.' },
    ],
  },
  methods: {
    moneyFormat: function(price) {
      return '$' + price + '.00';
    },
  },
  computed: {
    tax: function() {
      return this.price * 0.2;
    },
    taxFormatted: function() {
      return '$' + this.tax;
    },
    total: function() {
      return parseInt(this.price) + this.tax;
    },
  },
});
