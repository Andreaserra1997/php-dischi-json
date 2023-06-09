const { createApp } = Vue;

createApp({
  data() {
    return {
      albums: [],
    };
  },
  methods: {
    getCards() {
      axios
        .get("http://localhost/php-dischi-json/index.php")
        .then((response) => (this.albums = response.data));
    },
  },
  created() {
    this.getCards();
  },
}).mount("#app");
