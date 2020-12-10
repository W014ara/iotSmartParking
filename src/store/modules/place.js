export default {
  state: {
    places: [
      {
        id:0,
        "occupied":true
      },
      {
        id:1,
        "occupied":false
      },
      {
        id:2,
        "occupied":true
      },
      {
        id:3,
        "occupied":true
      },
      {
        id:4,
        "occupied":true
      },
      {
        id:5,
        "occupied":false
      },
      {
        id:6,
        "occupied":false
      },
      {
        id:7,
        "occupied":false
      },
      {
        id:8,
        "occupied":true
      },
      {
        id:9,
        "occupied":true
      },
      {
        id:10,
        "occupied":true
      },
      {
        id:11,
        "occupied":true
      },
      {
        id:12,
        "occupied":true
      },
      {
        id:13,
        "occupied":true
      },
      {
        id:14,
        "occupied":false
      },
      {
        id:15,
        "occupied":true
      },
      {
        id:16,
        "occupied":true
      },
      {
        id:17,
        "occupied":false
      },
      {
        id:18,
        "occupied":false
      },
      {
        id:19,
        "occupied":false
      },
      {
        id:20,
        "occupied":true
      }
    ],
    reservedPlace: null
  },
  actions:{
    async fetchPlaces(ctx) {
    const response = await fetch(
        "http://9681133dccd8.ngrok.io/api/v1/parking", {
          method: 'GET'
        }
        );
       const res = await response.json();
       ctx.commit("createPlaces", res);
     },

    async fetchupdatePlaces(ctx, bodyData){
      let fetchobj = {
        id: bodyData[0],
        "occupied": bodyData[1]
      }
      await fetch(
        `http://9681133dccd8.ngrok.io/api/v1/parking`, {
          method: 'PUT',
          body: JSON.stringify(fetchobj)
        }
        );
    }
  },
  mutations: {
    updatePlaces(state, params){
      let id = params[0];
      let reserved_status = params[1];
      let cancel = params[2];
      for(let elem of state.places){
        if (elem.id === id){
          elem.occupied = reserved_status;
          if(cancel === false){
            state.reservedPlace = null
          }else{
            state.reservedPlace = elem.id
          }
        }
      }
    },
    createPlaces(state,result){
      state.places = result;
    }
  },

  getters: {
    getPlaces(state) {
      return state.places;
    },
    getReservedPlaceID(state){
      return state.reservedPlace
    }
  }
};

  // actions: {
  //   async fetchPlaces(ctx) {
  //     const response = await fetch(
  //       "https://b70ac5186730.ngrok.io/api/v1/parking"
  //     );
  //     const res = await response.json();
  //     ctx.commit("updatePlaces", res);
  //   },

  //   async reservePlace(ctx, param) {
  //     await fetch(`https://b70ac5186730.ngrok.io/api/v1/parking/${param}`);
  //   }
  // },
  // mutations: {
  //   updatePlaces(state, result) {
  //     state.places = result;
  //   }
  // },
