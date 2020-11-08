<template>
  <div>
    <div class="box">
      <div class="input img">
        <input
          v-model="search"
          type="text"
          placeholder="...React"
          class="input__field"
        />
      </div>
      <div
        v-for="(row, index) in filteredBlogs"
        :key="`employee-${index}`"
        class="employees"
      >
        <div class="info">
          <h2>{{ row.username }}</h2>
          <p>Ala@novicell.dk</p>
        </div>
        <div class="location">
          <img src="~assets/location.svg" class="location-svg" />
          <p class="location__city"></p>
        </div>
        <div class="team">
          <img src="~assets/suitcase.svg" class="location-svg" />
          <p class="team__name"></p>
        </div>
        <div class="hours">
          <img src="~assets/wall-clock.svg" class="location-svg" />
          <p class="hours__number">120</p>
        </div>
        <div class="chevron">
          <p>&rsaquo;</p>
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
    }
  },
  //   When mounted post registrations from store
  // computed: ,
  // mix this into the outer object with the object spread operator
  mounted() {
    this.$store.dispatch('loadEmployees')
  },
  computed: {
    // employees() {
    // return this.$store.state.employees
    // },
    filteredBlogs() {
      const keyword = this.search.toLowerCase()
      if (!keyword.length) return this.employees
      return this.employees.filter((row) =>
        row.username.toLowerCase().includes(keyword)
      )
    },
    ...mapState(['employees']),
  },
}
</script>

<style>
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
.info {
  max-width: 10%;
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
  max-width: 9%;
  margin-right: 5em;
}
.chevron {
  transform: rotate(90deg);
  font-size: 2.2em;
}
</style>
