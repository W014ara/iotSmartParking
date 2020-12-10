<template>
  <section class="mobile__footer">
    <div
      class="cancelBTN"
      v-if="this.getPageSize === 'mobile' && this.getReservedPlaceID !== null"
      v-on:click="cancelActions"
    >
      <h1>
        Отменить бронирование
      </h1>
    </div>
    <router-link
      :to="{ name: `home` }"
      v-if="this.getPageUrl === `place` || this.getPageUrl === `status`"
    >
      <div class="backBTN">
        <h1>
          Вернуться на главную
        </h1>
      </div>
    </router-link>
    <router-link :to="{ name: urlChanger[0] }">
      <div class="startBTN">
        <h1>{{ this.urlChanger[1] }}</h1>
        <div class="startBTN__symbol"></div>
      </div>
    </router-link>
  </section>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["getPageSize", "getPageUrl", "getReservedPlaceID"]),
    urlChanger() {
      let url = this.getPageUrl;
      let result = [null, null];
      switch (url) {
        case "home":
          result[0] = "place";
          result[1] = "ПОЕХАЛИ";
          break;
        case "place":
          result[0] = "status";
          result[1] = "СТАТУС БРОНИ";
          break;
        case "status":
          result[0] = "place";
          result[1] = "СВОБОДНЫЕ МЕСТА";
          break;
        case "404":
          result[0] = "place";
          result[1] = "СВОБОДНЫЕ МЕСТА";
          break;
      }
      return result;
    }
  },
  methods: {
    ...mapMutations(["setNewUrl", "updatePlaces"]),
    ...mapActions(["fetchupdatePlaces"]),
    cancelActions: function() {
      let dataobj = [this.getReservedPlaceID, false, false];
      this.fetchupdatePlaces(dataobj);
      this.updatePlaces(dataobj);
    }
  },
  watch: {
    $route(to) {
      this.setNewUrl(to.name);
      console.log(this.getPageUrl);
    }
  }
};
</script>

<style lang="scss" scoped>
.mobile__footer {
  a {
    text-decoration: none;
    &:active {
      text-decoration: none;
    }
  }
  position: fixed;
  width: inherit;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  bottom: 0;
  .startBTN {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    width: inherit;
    padding-top: 0.8rem;
    height: 4rem;
    text-align: center;
    background: #01b8d1;
    transition: 0.2s;
    box-sizing: border-box;
    &:hover {
      background: #00e0ff;
    }
    h1 {
      margin-left: 1.5rem;
      font-family: DroidSans;
      font-style: normal;
      font-weight: bold;
      font-size: 2.5rem;
      line-height: 2.8rem;
      letter-spacing: -0.01em;
      color: #ffffff;
    }
    .startBTN__symbol {
      margin-left: 1rem;
      width: 2.8rem;
      height: 2.8rem;
      background: url("../../resource/img/footer/mobile/wheel.svg") no-repeat;
      background-size: cover;
    }
  }
  .backBTN {
    width: inherit;
    padding-top: 0.8rem;
    height: 4rem;
    background: #01b8d1;
    transition: 0.2s;
    box-sizing: border-box;
    &:hover {
      background: #00e0ff;
    }
    h1 {
      margin-top: -0.4rem;
      text-align: center;
      font-family: DroidSans;
      font-style: normal;
      font-weight: bold;
      font-size: 2.5rem;
      line-height: 2.8rem;
      letter-spacing: -0.01em;
      color: #ffffff;
    }
  }
  .cancelBTN {
    width: inherit;
    padding-top: 0.8rem;
    height: 4rem;
    background: #d11a01;
    transition: 0.2s;
    box-sizing: border-box;
    &:hover {
      background: #ff5a79;
    }
    h1 {
      margin-top: -0.4rem;
      text-align: center;
      font-family: DroidSans;
      font-style: normal;
      font-weight: bold;
      font-size: 2.5rem;
      line-height: 2.8rem;
      letter-spacing: -0.01em;
      color: #ffffff;
    }
  }
}
</style>
