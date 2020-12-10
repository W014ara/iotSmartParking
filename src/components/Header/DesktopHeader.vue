<template>
  <div class="desktop-content">
    <router-link :to="{ name: 'home' }">
      <img
        src="../../resource/img/header/desktopLogo.svg"
        alt=""
        class="logo"
      />
    </router-link>
    <nav class="navigation">
      <router-link :to="{ name: 'place' }" class="place">
        Свободные места
      </router-link>
      <router-link :to="{ name: 'status' }" class="status">
        Статус бронирования
      </router-link>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.desktop-content {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  background: url("../../resource/img/header/desktopBackground.png") no-repeat;
  background-size: cover;
  .navigation {
    margin-top: 3rem;
    margin-left: 12rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: nowrap;
    font-family: DroidSans;
    font-style: normal;
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 69.49%;
    a {
      height: 2rem;
      color: white;
      text-decoration: none;
      transition: 0.1s;
      &:active {
        color: white;
      }
      &:hover {
        border-bottom: 0.3rem solid white;
      }
    }
  }
}
@media (min-width: 1024px) and (max-width: 1279px) {
  .desktop-content {
    .logo {
      width: 42rem;
      height: 9rem;
    }
    .navigation {
      width: 40rem;
    }
  }
}

@media (min-width: 1280px) and (max-width: 1649px) {
  .desktop-content {
    .logo {
      width: 42rem;
      height: 9rem;
    }
    .navigation {
      width: 50rem;
    }
  }
}

@media (min-width: 1650px) and (max-width: 1800px) {
  .desktop-content {
    .logo {
      width: 42rem;
      height: 9rem;
    }
    .navigation {
      width: 47rem;
      margin-top: 5rem;
      margin-left: 66rem;
    }
  }
}

@media (min-width: 1801px) and (max-width: 2500px) {
  .desktop-content {
    .logo {
      width: 42rem;
      height: 9rem;
    }
    .navigation {
      width: 47rem;
      margin-top: 4rem;
      margin-left: 76rem;
    }
  }
}

@media (min-width: 2501px) and (max-width: 3799px) {
  .desktop-content {
    .logo {
      width: 42rem;
      height: 9rem;
    }
    .navigation {
      font-size: 2rem;
      width: 47rem;
      margin-top: 4rem;
      margin-left: 140rem;
    }
  }
}

@media (min-width: 3800px) {
}
</style>
