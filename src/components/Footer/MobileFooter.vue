<template>
  <section class="mobile__footer">
    <router-link :to="{ name: 'place' }">
      <div class="startBTN">
        <h1>ПОЕХАЛИ</h1>
        <div class="startBTN__symbol"></div>
      </div>
    </router-link>
  </section>
</template>

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
}
</style>
