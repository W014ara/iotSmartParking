export default {
  state: {
    page__Size: "mobile",
    current_url: "home"
  },
  mutations: {
    changePageSize(state) {
      let width = window.screen.width;
      width >= 1024
        ? (state.page__Size = "desktop")
        : (state.page__Size = "mobile");
    },
    setNewUrl(state, url) {
      state.current_url = url;
    }
  },
  getters: {
    getPageSize(state) {
      return state.page__Size;
    },
    getPageUrl(state) {
      return state.current_url;
    }
  }
};
