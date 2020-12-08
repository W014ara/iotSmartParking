<template>
  <div class="mobile-main">
    <img
      src="../../resource/img/home/mobile/balls-1.svg"
      alt=""
      class="balls-1"
    />
    <img
      src="../../resource/img/home/mobile/balls-2.svg"
      alt=""
      class="balls-2"
    />
    <div class="starterPoint">
      <p class="starterPoint__text">
        <span>Выбор парковки не проблема! </span><br /><br />
        Резервируй удобное место в 1 клик с нашим приложением!
      </p>
      <img
        src="../../resource/img/home/mobile/car-background.png"
        alt=""
        class="starterPoint__background"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mobile-main {
  position: relative;
  width: inherit;
  height: inherit;
  background: url("../../resource/img/home/mobile/text-background.svg") repeat-x;
  background-size: cover;
  .balls-1 {
    position: absolute;
    width: 14rem;
    height: 15rem;
    top: -5rem;
  }
  .balls-2 {
    position: absolute;
    width: 14rem;
    height: 15rem;
    bottom: 0rem;
    left: -2rem;
  }
  .starterPoint {
    .starterPoint__text {
      animation: show 3s ease-in-out;
      position: absolute;
      right: 1rem;
      top: 9rem;
      width: 26rem;
      font-family: DroidSans;
      font-style: normal;
      font-weight: normal;
      font-size: 2rem;
      line-height: 124.99%;
      text-align: right;
      color: #ffffff;
      text-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
      span {
        font-size: 3rem;
        font-weight: bold;
      }
      z-index: 2;
    }
    .starterPoint__background {
      margin-top: 1rem;
      position: absolute;
      right: 0;
      width: 38rem;
      height: 50rem;
    }
  }
}

@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@media (min-width: 375px) and (max-width: 424px) {
  .mobile-main {
    .starterPoint {
      .starterPoint__background {
        margin-top: 1rem;
        width: 44rem;
        height: 57rem;
      }
    }
  }
}
@media (min-width: 425px) and (max-width: 767px) {
  .mobile-main {
    .starterPoint {
      .starterPoint__background {
        margin-top: 1rem;
        width: 46rem;
        height: 63rem;
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .mobile-main {
    .balls-1 {
      width: 20rem;
      height: 23rem;
    }
    .balls-2 {
      width: 20rem;
      height: 19rem;
    }
    .starterPoint {
      .starterPoint__text {
        width: 28rem;
      }
      .starterPoint__background {
        margin-top: 1rem;
        width: 52rem;
        height: 67rem;
      }
    }
  }
}
</style>
