export default {
  state: {
    places: []
  },
  actions: {
    async fetchPlaces(ctx) {
      const response = await fetch(
        "https://b70ac5186730.ngrok.io/api/v1/parking"
      );
      const res = await response.json();
      ctx.commit("updatePlaces", res);
    },

    async reservePlace(ctx, param) {
      await fetch(`https://b70ac5186730.ngrok.io/api/v1/parking/${param}`);
    }
  },
  mutations: {
    updatePlaces(state, result) {
      state.places = result;
    }
  },

  getters: {
    getPlaces(state) {
      return state.places;
    }
  }
};
