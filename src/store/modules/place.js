let BASE_URL = "https://gavnishe.tk/api/v1/parking";

export default {
  state: {
    places: [
      {
        id: 0,
        occupied: false
      },
      {
        id: 1,
        occupied: true
      },
      {
        id: 2,
        occupied: false
      },
      {
        id: 3,
        occupied: false
      },
      {
        id: 4,
        occupied: false
      },
      {
        id: 5,
        occupied: true
      },
      {
        id: 6,
        occupied: true
      },
      {
        id: 7,
        occupied: true
      },
      {
        id: 8,
        occupied: false
      },
      {
        id: 9,
        occupied: false
      },
      {
        id: 10,
        occupied: false
      },
      {
        id: 11,
        occupied: false
      },
      {
        id: 12,
        occupied: false
      },
      {
        id: 13,
        occupied: false
      },
      {
        id: 14,
        occupied: true
      },
      {
        id: 15,
        occupied: false
      },
      {
        id: 16,
        occupied: false
      },
      {
        id: 17,
        occupied: true
      },
      {
        id: 18,
        occupied: true
      },
      {
        id: 19,
        occupied: true
      },
      {
        id: 20,
        occupied: false
      }
    ],
    reservedPlace: null
  },
  actions: {
    async fetchPlaces(ctx) {
      const response = await fetch(BASE_URL, {
        method: "GET"
      });
      const res = await response.json();
      ctx.commit("createPlaces", res);
    },

    async fetchupdatePlaces(ctx, bodyData) {
      let fetchobj = {
        id: bodyData[0],
        occupied: bodyData[1]
      };
      await fetch(BASE_URL, {
        method: "PUT",
        body: JSON.stringify(fetchobj)
      });
    }
  },
  mutations: {
    updatePlaces(state, params) {
      let id = params[0];
      let reserved_status = params[1];
      let cancel = params[2];
      for (let elem of state.places) {
        if (elem.id === id) {
          elem.occupied = reserved_status;
          if (cancel === false) {
            state.reservedPlace = null;
          } else {
            state.reservedPlace = elem.id;
          }
        }
      }
    },
    setReserved(state) {
      state.reservedPlace = null;
    },
    createPlaces(state, result) {
      state.places = result;
    }
  },

  getters: {
    getPlaces(state) {
      return state.places;
    },
    getReservedPlaceID(state) {
      return state.reservedPlace;
    }
  }
};
