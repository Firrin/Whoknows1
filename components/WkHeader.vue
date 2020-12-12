<template>
  <div>
    <div class="banner">
      <img src="~assets/Novicell-logo.png" alt="" class="header__logo" />
      <p class="banner__headline">Who Knows?</p>
      <p class="banner__tagline">Find Novicells most experienced employee</p>
      <div class="input img">
        <form>
          <input
            v-model.lazy="search"
            type="text"
            placeholder="...React"
            class="input__field"
          />
          <input
            type="submit"
            value=""
            class="input__button"
            @click.prevent="sendQuery()"
          />
        </form>
      </div>
    </div>
    <div v-show="employees.length > 0" class="resultNumber">
      <span></span>
      <div class="resultNumber__text">
        We found <span>{{ employees.length }} wise guys</span>, from your search
        on <span>{{ search }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      search: '',
    }
  },
  computed: {
    ...mapState(['employees', 'locations', 'filters']),
  },
  methods: {
    sendQuery() {
      this.$store.dispatch('loadEmployees', this.search)
    },
  },
}
</script>

<style scoped>
.resultNumber {
  background-color: var(--color-spearmint);
  padding: 0.3em;
  box-shadow: 1px 1px 16px 20px var(--color-spearmint);
  border-radius: 9px;
  width: 37%;
  margin: 1em auto 4em auto;
  display: flex;
  justify-content: center;
}
.resultNumber__text {
  font-size: 20px;
}
.resultNumber span {
  font-weight: bold;
}

.banner {
  background: rgb(200, 0, 70);
  background: linear-gradient(
    180deg,
    var(--color-red) 0%,
    rgba(100, 0, 35, 1) 100%
  );
  padding-bottom: 5em;
  margin-bottom: 5em;
  text-align: center;
  color: var(--color-white);
}
.banner__headline {
  padding-top: 3em;
  font-size: 44px;
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-weight: bold;
  font-family: Averta;
}
.banner__tagline {
  font-size: 22px;
  margin-block-start: 0em;
  margin-block-end: 0.5em;
  font-family: Averta;
}
.header__logo {
  height: 64px;
  position: absolute;
  top: 2%;
  left: 2%;
}
.header {
  display: block;
  background-color: var(--color-red);
}
.container {
  background: var(--color-platium);
}
.input img {
  position: absolute;
}
.input {
  width: 100%;
  margin-bottom: 10px;
  display: inline-block;
}
.input__field {
  width: 100%;
  padding: 10px;
  background-color: var(--color-white);
  border-radius: 20px;
  border: 0;
  height: 23px;
}
.input--search {
  display: inline-flex;
}
.input__button {
  position: absolute;
  right: 0;
  top: 17%;
  height: 30px;
  width: 30px;
  border: 0;
  background-color: var(--color-white);
  background: url(~assets/search.svg) no-repeat right center;
}
.input {
  width: 30%;
  position: relative;
}
.beforeSearch {
  background-color: var(--color-platinum);
  height: 100%;
  margin-bottom: 100vh;
}
</style>
