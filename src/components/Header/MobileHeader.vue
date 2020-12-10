<template>
  <div class="mobile-header">
    <router-link :to="{ name: 'home' }">
      <img
        src="../../resource/img/header/mobileLogo.svg"
        alt="fast parking"
        class="logo"
      />
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.mobile-header {
  background: url("../../resource/img/header/mobileBackground.png") no-repeat;
  background-size: cover;
  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  .logo {
    width: 13rem;
    height: 5rem;
  }
}

@media (min-width: 375px) and (max-width: 424px) {
  .mobile-header {
    height: 8rem;
    .logo {
      width: 18rem;
      height: 6rem;
    }
  }
}

@media (min-width: 425px) and (max-width: 767px) {
  .mobile-header {
    height: 9rem;
    .logo {
      width: 21rem;
      height: 9rem;
    }
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .mobile-header {
    height: 14rem;
    .logo {
      width: 30rem;
      height: 15rem;
    }
  }
}
</style>
