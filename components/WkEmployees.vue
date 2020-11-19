<template>
  <div>
    <div class="banner">
      <img src="~assets/Novicell-logo.png" alt="" class="header__logo" />
      <p class="banner__headline">Who Knows?</p>
      <p class="banner__tagline">Find Novicells most experienced employee</p>
      <div class="input img">
        <input
          v-model="search"
          type="text"
          placeholder="...React"
          class="input__field"
        />
        <input type="button" @click="sendQuery()" />
      </div>
    </div>
    <div class="resultNumber">
      <span></span>
      <div class="resultNumber__text">
        We found <span>{{ employees.length }} wise guys</span>, from your search
        on <span>{{ search }}</span>
      </div>
    </div>
    <div class="box">
      <div v-for="(row, index) in filteredProjects" :key="`employee-${index}`">
        <div class="employees">
          <div class="avatar">
            <img :src="row.avatar" alt="" class="avatar-img" />
          </div>
          <div class="info">
            <div>
              <p class="info__name">{{ row.name }}</p>
              <p class="info__email">Ala@novicell.dk</p>
            </div>
          </div>
          <div class="location">
            <img src="~assets/location.svg" class="location-svg" />
            <p class="location__city">{{ row.Location }}</p>
          </div>
          <div class="team">
            <img src="~assets/suitcase.svg" class="location-svg" />
            <p class="team__name">{{ row.Team }}</p>
          </div>
          <div class="hours">
            <img src="~assets/wall-clock.svg" class="location-svg" />
            <p class="hours__number">120</p>
          </div>
          <div class="chevron" @click="selected = row.id">
            <!--'' : '&lsaquo;' -->
            <p>&rsaquo;</p>
          </div>
        </div>
        <div class="hide" :class="{ show: row.id == selected }">
          <div
            v-for="(skill, index) in row.Skills"
            :key="`skill-${index}`"
            class="skills"
          >
            <div class="skills__flex">
              <div class="skills__name"></div>
              <div class="skills__project"></div>
              <div class="skills__lastcommit"></div>
              <div class="skills_hours"></div>
            </div>
          </div>
        </div>
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
      checkedLocation: [],
      checkedTeam: [],
      selected: undefined,
    }
  },
  methods: {
    sendQuery() {
      this.$store.dispatch('loadEmployees', this.search)
    },
  },
  //   When mounted post registrations from store
  // computed: ,
  // mix this into the outer object with the object spread operator

  computed: {
    // employees() {
    // return this.$store.state.employees
    // },
    filteredProjects() {
      let filterprojects = this.employees
      if (this.locations.filters.length > 0) {
        filterprojects = filterprojects.filter((row) => {
          return this.locations.filters.includes(row.Location)
        })
      }
      if (this.checkedTeam.length > 0) {
        filterprojects = filterprojects.filter((row) => {
          return this.checkedTeam.includes(row.Team)
        })
      }
      return filterprojects
    },
    /*
    filteredid() {
      if (this.location) {
        return this.employees.filter((row) =>
          row.Location.toLowerCase().includes('location 1')
        )
      }
    },
    */
    // updatedArray = this.employees.filter((item) =>
    //  item.id !== updatedItem.id).concat[updatedItem],
    ...mapState(['employees', 'locations', 'filters']),
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
.employees {
  box-shadow: 0px 3px 5px #00000029;
  width: 60%;
  margin: 1em auto 0 auto;
  display: flex;
  background: #fff;
  border-radius: 0.5em;
}
.hide {
  display: none;
}
.show {
  color: red;
  background: rgb(218, 218, 218);
  border-radius: 0 0 0.5em 0.5em;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  transition: 1s ease-in all;
  margin: 0 auto;
  width: 60%;
  padding-bottom: 3em;
}
.chevronRotate {
  transform: rotate(180deg);
}
.projects {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.location,
.team,
.hours,
.avatar {
  width: 100%;
  display: flex;
}
.avatar-img {
  height: 70px;
  border-radius: 50%;
  margin-left: 2em;
}
.avatar {
  margin: 1em 0;
  width: 16%;
  padding-right: 15px;
}
.info {
  flex-basis: 100%;
}
.info__name {
  font-weight: 1000;
  font-size: 20px;
  margin: 0;
}
.info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.info__email {
  margin: 0;
}
.location__city,
.team__name,
.hours__number {
  align-items: center;
  display: flex;
}
.location-svg,
.filter__location-icon {
  width: 20px;
  margin-right: 4px;
}
.hours {
  background: #c80046;
  border-radius: 15px;
  margin: auto;
  color: #fff;
  display: flex;
  justify-content: center;
  max-width: 7%;
  max-height: 2em;
}
.chevron {
  transform: rotate(90deg);
  margin-left: 2em;
  margin-right: 2em;
  font-size: 2.2em;
}
.skills {
  width: 100%;
}
.skills__flex {
  display: flex;
  justify-content: space-evenly;
}
.banner {
  background: rgb(200, 0, 70);
  background: linear-gradient(
    180deg,
    rgba(200, 0, 70, 1) 0%,
    rgba(100, 0, 35, 1) 100%,
    rgba(100, 0, 35, 1) 100%
  );
  padding-bottom: 5em;
  margin-bottom: 5em;
  text-align: center;
  color: #fff;
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
  width: 30%;
  padding: 10px;
  background: url(~assets/search.svg) no-repeat right center;
  background-color: #fff;
  border-radius: 20px;
  border: 0;
  height: 23px;
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
