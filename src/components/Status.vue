<template>
  <section class="app__status">
    <div class="status__content" v-if="this.getReservedPlaceID !== null">
      <div class="title">
        <h1>Ваше место</h1>
        <hr />
      </div>
      <div class="information">
        <h1 class="place__number">A-{{ this.getReservedPlaceID }}</h1>
        <h2 class="place__time">20:00</h2>
        <p>Времени до нового бронирования</p>
      </div>
      <div class="code">
        <img
          :src="`http://qrcoder.ru/code/?${this.getReservedPlaceID}&4&0`"
          width="116"
          height="116"
          border="0"
          title="QR код"
        />
        <p>Покажите этот код на парковочном месте</p>
      </div>
    </div>
    <div class="status__error" v-else>
      <h1>К сожалению, вы не забронировали еще ни одного места!</h1>
    </div>
    <div
      class="cancelBTN"
      v-if="this.getPageSize === 'desktop' && this.getReservedPlaceID !== null"
      v-on:click="cancelActions"
    >
      Отменить
    </div>
    <div class="delimiter" v-if="this.getPageSize === 'mobile'"></div>
  </section>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["getPageSize", "getReservedPlaceID"])
  },
  methods: {
    ...mapMutations(["updatePlaces", "setReserved"]),
    ...mapActions(["fetchupdatePlaces"]),
    cancelActions: function() {
      let dataobj = [this.getReservedPlaceID, false, false];
      this.fetchupdatePlaces(dataobj);
      this.updatePlaces(dataobj);
      this.setReserved(null);
    }
  }
};
</script>

<style lang="scss" scoped>
.app__status {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .status__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    margin: 0 auto;
    margin-top: 10rem;
    width: 47rem;
    height: 80rem;
    background: white;
    box-shadow: 0rem 0.9rem 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 1.8rem;
    .title {
      width: inherit;
      margin-top: 1rem;
      text-align: center;
      h1 {
        font-family: DroidSans;
        font-style: normal;
        font-weight: bold;
        font-size: 4.5rem;
        line-height: 6rem;
        letter-spacing: -0.01em;
        color: #0392a6;
      }
      hr {
        width: inherit;
        height: 0.5rem;
        background: #0392a6;
      }
    }
    .information {
      margin-top: 1rem;
      text-align: center;
      width: inherit;
      h1 {
        font-family: DroidSans;
        font-style: normal;
        font-weight: bold;
        font-size: 9rem;
        line-height: 12rem;
        letter-spacing: -0.01em;
        color: #047989;
      }
      h2 {
        margin-top: 5rem;
        font-family: DroidSans;
        font-style: normal;
        font-weight: bold;
        font-size: 10rem;
        line-height: 11rem;
        letter-spacing: -0.01em;
        color: #0392a6;
      }
      p {
        margin: 0 auto;
        margin-top: 1.5rem;
        width: 40rem;
        font-family: DroidSans;
        font-style: normal;
        font-size: 2.5rem;
        line-height: 3rem;
        letter-spacing: -0.01em;
        color: #047989;
      }
    }
    .code {
      margin-top: 3rem;
      display: flex;
      flex-direction: column;
      align-self: center;
      text-align: center;
      img {
        margin: 0 auto;
        width: 22rem;
        height: 22rem;
        border-radius: 5rem;
      }
      p {
        font-family: DroidSans;
        font-style: normal;
        font-weight: normal;
        font-size: 1.5rem;
        line-height: 112.99%;
        text-align: center;
        letter-spacing: 0.09em;
        color: #000000;
      }
    }
  }
  .status__error {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    text-align: center;
    h1 {
      font-family: DroidSans;
      font-size: 5rem;
    }
  }
  .cancelBTN {
    margin: 0 auto;
    padding-top: 1rem;
    margin-top: 2rem;
    text-align: center;
    width: 20rem;
    height: 4.5rem;
    background: #d11a01;
    border-radius: 0.8rem;
    font-family: DroidSans;
    font-style: normal;
    font-weight: bold;
    font-size: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
    letter-spacing: -0.01em;
    color: #ffffff;
    box-sizing: border-box;
    transition: 0.2s;
    &:hover {
      cursor: pointer;
      background: #ff361b;
    }
  }
  .delimiter {
    width: 100%;
    height: 20rem;
  }
}
@media (min-width: 0px) and (max-width: 374px) {
  .app__status {
    .status__content {
      margin-top: 1rem;
      width: 25rem;
      height: 45rem;
      .title {
        h1 {
          font-size: 3.5rem;
        }
      }
      .information {
        h1 {
          font-size: 6rem;
          line-height: 6rem;
        }
        h2 {
          margin-top: 0rem;
          font-size: 5rem;
          line-height: 8rem;
        }
        p {
          margin: 0 auto;
          margin-top: 0rem;
          width: 20rem;
          font-size: 1.5rem;
          line-height: 2rem;
        }
      }
      .code {
        img {
          width: 10rem;
          height: 10rem;
        }
        p {
          font-size: 1rem;
          width: 20rem;
        }
      }
    }
    .status__error {
      h1 {
        font-size: 2rem;
      }
    }
  }
}

@media (min-width: 375px) and (max-width: 424px) {
  .app__status {
    .status__content {
      margin-top: 2rem;
      width: 30rem;
      height: 50rem;
      .title {
        h1 {
          font-size: 3.5rem;
        }
      }
      .information {
        h1 {
          font-size: 6rem;
          line-height: 6rem;
        }
        h2 {
          margin-top: 0rem;
          font-size: 5rem;
          line-height: 8rem;
        }
        p {
          margin: 0 auto;
          margin-top: 0rem;
          width: 20rem;
          font-size: 1.5rem;
          line-height: 2rem;
        }
      }
      .code {
        img {
          width: 15rem;
          height: 15rem;
        }
        p {
          font-size: 1rem;
          width: 20rem;
        }
      }
    }
    .status__error {
      h1 {
        font-size: 2rem;
      }
    }
  }
}

@media (min-width: 425px) and (max-width: 767px) {
  .app__status {
    .status__content {
      margin-top: 2rem;
      width: 30rem;
      height: 50rem;
      .title {
        h1 {
          font-size: 3.5rem;
        }
      }
      .information {
        h1 {
          font-size: 6rem;
          line-height: 6rem;
        }
        h2 {
          margin-top: 0rem;
          font-size: 5rem;
          line-height: 8rem;
        }
        p {
          margin: 0 auto;
          margin-top: 0rem;
          width: 20rem;
          font-size: 1.5rem;
          line-height: 2rem;
        }
      }
      .code {
        img {
          width: 15rem;
          height: 15rem;
        }
        p {
          font-size: 1rem;
          width: 20rem;
        }
      }
    }
    .status__error {
      h1 {
        font-size: 2rem;
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .app__status {
    .status__content {
      margin-top: 12rem;
      width: 35rem;
      height: 60rem;
      .title {
        h1 {
          font-size: 5rem;
        }
      }
      .information {
        margin-top: 5rem;
        h1 {
          font-size: 8rem;
          line-height: 8rem;
        }
        h2 {
          margin-top: 2rem;
          font-size: 5rem;
          line-height: 8rem;
        }
        p {
          margin: 0 auto;
          margin-top: 0rem;
          width: 25rem;
          font-size: 1.5rem;
          line-height: 2rem;
        }
      }
      .code {
        img {
          width: 20rem;
          height: 20rem;
        }
        p {
          font-size: 1rem;
          width: 20rem;
        }
      }
    }
    .status__error {
      h1 {
        font-size: 3rem;
      }
    }
  }
}
</style>
