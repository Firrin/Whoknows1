<template>
  <div class="container">
    <WkHeader />
    <WkEmployees />
    <WkFilter />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  font-family: var(--base-font-family);
  background-color: var(--color-platinum);
  height: 100vh;
}
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
  display: flex;
  justify-content: center;
}
.icon {
  padding: 10px;
  min-width: 40px;
}
.input__field {
  width: 25%;
  padding: 10px;
  background-color: #fff;
  border-radius: 20px;
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
