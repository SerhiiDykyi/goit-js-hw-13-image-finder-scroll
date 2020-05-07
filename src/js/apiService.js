export default {
  searchQuery: '',

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },
};
