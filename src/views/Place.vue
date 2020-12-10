<template>
  <section class="app__places">
    <div class="description">
      <h1>
        Нажми на нужное место для резервирования
      </h1>
    </div>
    <div class="places">
      <div
        v-bind:class="{
          block: item.occupied === true,
          'block reserved': item.occupied === false
        }"
        v-for="item in this.getPlaces"
        :key="item.id"
        v-bind:id="item.id"
        v-on:click.prevent="getCurrentPlace($event)"
      >
        <h1 v-if="item.occupied === true">{{ item.id }}</h1>
        <div class="occupiedCar" v-else></div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["getPlaces", "getReservedPlaceID"]),
  },
  methods: {
    ...mapMutations(["updatePlaces"]),
    ...mapActions(["fetchPlaces", "fetchupdatePlaces"]),
    getCurrentPlace(event){
      if(this.getReservedPlaceID){
        alert(`Вы уже заняли свое место под номером: ${this.getReservedPlaceID}`)
      }else{
        let currentid = +event.currentTarget.getAttribute('id');
        let currentClassName = +event.currentTarget.getAttribute('class').split(" ");
        if(currentClassName[1] === undefined){
          let dataobj = [currentid, false, true];
          this.fetchupdatePlaces(dataobj);
          this.updatePlaces(dataobj);
          this.$router.push({path: 'status'});
        }
      }
    }
  },
  mounted(){
    this.fetchPlaces()
  }
};
</script>

<style lang="scss" scoped>
.app__places {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .description {
    width: 23rem;
    margin: 0 auto;
    margin-top: 1rem;
    text-align: center;
    h1 {
      font-family: DroidSans;
      font-style: normal;
      font-weight: bold;
      font-size: 2.5rem;
      line-height: 2.5rem;
      letter-spacing: 0.015em;
      color: #015f6c;
    }
    &:hover {
      cursor: default;
    }
  }
  .places {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1.5rem;
    margin: 0 auto;
    margin-top: 2rem;
    width: 29rem;
    height: 35rem;
    background: #0392a6;
    border: 0.3rem solid #047989;
    box-sizing: border-box;
    border-radius: 1.5rem;
    .block {
      margin: 0rem 0.5rem 0rem 0.5rem;
      width: 2.6rem;
      height: 5.5rem;
      background: #00fff0;
      border-radius: 0.4rem;
      text-align: center;
      font-family: DroidSans;
      font-style: normal;
      font-weight: bold;
      font-size: 2.5rem;
      line-height: 5.6rem;
      letter-spacing: -0.01em;
      color: #047989;
      box-sizing: border-box;
      transition: 0.2s;
      &:hover {
        cursor: pointer;
        background: #01b8d1;
      }
      &.reserved {
        background: red;
        &:hover {
          cursor: default;
        }
      }
      @media (min-width: 0px) and (max-width: 1023px) {
        .occupiedCar {
          background: url("../resource/img/places/caroccupied-desktop.png")
            no-repeat;
          background-size: cover;
          width: 3rem;
          height: 5rem;
          margin-left: -0.2rem;
        }
      }
    }
  }
  .reserve-btn {
    margin: 0 auto;
    text-decoration: none;
    border: none;
    margin-top: 4rem;
    width: 36rem;
    height: 5rem;
    background: #047989;
    border-radius: 1.2rem;
    font-family: DroidSans;
    font-style: normal;
    font-weight: bold;
    font-size: 3rem;
    line-height: 3.5rem;
    text-align: center;
    letter-spacing: 0.015em;
    color: #ffffff;
    transition: 0.2s;
    &:hover {
      background: #00fff0;
      cursor: pointer;
    }
    &:active,
    &:focus {
      text-decoration: none;
      border: none;
      outline: none;
    }
  }
}

@media (min-width: 1024px) {
  .app__places {
    .description {
      width: 40rem;
      h1 {
        font-size: 4rem;
        line-height: 4rem;
      }
    }
  }
  .occupiedCar {
    background: url("../resource/img/places/caroccupied-desktop.png") no-repeat;
    background-size: cover;
    width: 6rem;
    height: 10rem;
    margin-top: -2rem;
    margin-left: -0.2rem;
  }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  .app__places {
    .places {
      padding: 5rem;
      width: 60rem;
      height: 75rem;
      background: #0392a6;
      border: 0.3rem solid #047989;
      border-radius: 4rem;
      .block {
        width: 5.5rem;
        height: 11rem;
        padding-top: 2.5rem;
        font-size: 4rem;
        background: #00fff0;
        border-radius: 0.4rem;
      }
    }
  }
}

@media (min-width: 1280px) and (max-width: 1649px) {
  .app__places {
    .places {
      padding: 5rem;
      width: 60rem;
      height: 75rem;
      background: #0392a6;
      border: 0.3rem solid #047989;
      border-radius: 4rem;
      .block {
        width: 5.5rem;
        height: 11rem;
        padding-top: 2.5rem;
        font-size: 4rem;
        background: #00fff0;
        border-radius: 0.4rem;
      }
    }
  }
}

@media (min-width: 1650px) and (max-width: 1800px) {
  .app__places {
    .places {
      padding: 5rem;
      width: 60rem;
      height: 75rem;
      background: #0392a6;
      border: 0.3rem solid #047989;
      border-radius: 4rem;
      .block {
        width: 5.5rem;
        height: 11rem;
        padding-top: 2.5rem;
        font-size: 4rem;
        background: #00fff0;
        border-radius: 0.4rem;
      }
    }
  }
}

@media (min-width: 1801px) and (max-width: 2500px) {
  .app__places {
    .places {
      padding: 5rem;
      width: 60rem;
      height: 75rem;
      background: #0392a6;
      border: 0.3rem solid #047989;
      border-radius: 4rem;
      .block {
        width: 5.5rem;
        height: 11rem;
        padding-top: 2.5rem;
        font-size: 4rem;
        background: #00fff0;
        border-radius: 0.4rem;
      }
    }
  }
}

@media (min-width: 2501px) and (max-width: 3799px) {
  .app__places {
    .places {
      margin-top: 20rem;
      padding: 5rem;
      width: 60rem;
      height: 75rem;
      background: #0392a6;
      border: 0.3rem solid #047989;
      border-radius: 4rem;
      .block {
        width: 5.5rem;
        height: 11rem;
        padding-top: 2.5rem;
        font-size: 4rem;
        background: #00fff0;
        border-radius: 0.4rem;
      }
    }
  }
}
</style>
