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

<style>
.box {
  height: 100vh;
}
.employees {
  box-shadow: 0px 3px 5px #00000029;
  width: 60%;
  margin: 1em auto;
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-radius: 0.5em;
  padding: 1em 1em;
}
h1 {
  font-weight: normal;
}
.location,
.team,
.hours {
  width: 100%;
  display: flex;
  justify-content: center;
  vertical-align: middle;
}
.location__city,
.team__name,
.hours__number {
  align-items: center;
  display: flex;
}
.location-svg {
  width: 20px;
}
.hours {
  background: #c80046;
  padding: 5px 12px;
  border-radius: 15px;
  margin: auto;
  color: #fff;
  display: flex;
  max-width: 8%;
  margin-right: 5em;
}
.chevron {
  transform: rotate(90deg);
  font-size: 2.2em;
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
  background: url(~assets/search.svg) no-repeat right center;
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
