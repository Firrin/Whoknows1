<template>
  <div>
    <div
      v-for="(row, index) in employees"
      :key="`employee-${index}`"
      class="employees"
    >
      <div>
        <h2>Anders Larsen</h2>
        <p>Ala@novicell.dk</p>
      </div>
      <div class="location">
        <img src="~assets/location.svg" class="location-svg" />
        <p class="location__city">Aarhus</p>
      </div>
      <div class="team">
        <img src="~assets/suitcase.svg" class="location-svg" />
        <p class="team__name">Front-end</p>
      </div>
      <div class="hours">
        <img src="~assets/wall-clock.svg" class="location-svg" />
        <p class="hours__number">420</p>
      </div>
      <div class="chevron">
        <p>&rsaquo;</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  search: '',
  //   When mounted post registrations from store
  computed: mapState(['employees']),

  mounted() {
    this.$store.dispatch('loadEmployees')
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
  display: flex;
  justify-content: center;
  vertical-align: middle;
  margin-right: 5em;
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
}
.chevron {
  transform: rotate(90deg);
  font-size: 2.2em;
}
</style>
