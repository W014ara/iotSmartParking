<template>
  <div class="error">
    <div class="content">
      <img src="../resource/img/404/sad-emoji.svg" alt="" />
      <h1>404</h1>
      <hr />
      <h2>Запрашиваемая страница не найдена</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error {
  .content {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    width: 31rem;
    text-align: center;
    color: rgba(1, 95, 108, 1);
    font-family: DroidSans;
    h1 {
      font-size: 8rem;
    }
    h2 {
      margin-top: 0.5rem;
      font-size: 4rem;
    }
  }
}
@media (min-width: 1801px) and (max-width: 2500px) {
  .error {
    .content {
      width: 41rem;
    }
  }
}

@media (min-width: 2501px) and (max-width: 3799px) {
  .error {
    .content {
      width: 41rem;
    }
  }
}
</style>
