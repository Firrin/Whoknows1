<template>
  <div>
    <div class="header">
      <img src="~assets/Novicell-logo.png" alt="" class="header__logo" />
    </div>
    <div class="banner">
      <h1 class="banner__headline">Who Knows?</h1>
      <h3 class="banner__tagline">Find Novicells most experienced employee</h3>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.banner {
  background: rgb(200, 0, 70);
  background: linear-gradient(
    180deg,
    rgba(200, 0, 70, 1) 0%,
    rgba(100, 0, 35, 1) 100%,
    rgba(100, 0, 35, 1) 100%
  );
  margin-bottom: 1em;
  text-align: center;
  color: #fff;
}
.banner__headline {
  margin-top: 0;
}
.header__logo {
  height: 64px;
}
.header {
  display: block;
  background-color: rgb(200, 0, 70);
}
.container {
  background: #eaeaea;
}
.input img {
  position: absolute;
}
.input {
  width: 100%;
  margin-bottom: 10px;
}
.icon {
  padding: 10px;
  min-width: 40px;
}
.input__field {
  width: 25%;
  padding: 10px;
  background: url(~assets/search.svg) no-repeat right center;
  background-color: #fff;
  border-radius: 12px;
  /*
    display: inline-block;
    margin: auto;
    height: 3em;
    width: 25%;
    border-radius: 12px;
    */
}
.input--search {
  display: inline-flex;
}
</style>
