<template>
  <div class="page__container">
    <div v-if="employees.length > 0">
      <div class="box">
        <div
          v-for="(row, index) in filteredEmployees"
          :key="`employee-${index}`"
        >
          <div class="employees">
            <div class="avatar">
              <img :src="row.avatar" alt="" class="avatar-img" />
            </div>
            <div class="info">
              <div>
                <p class="info__name">{{ row.name }}</p>
                <p class="info__email">{{ row.Email }}</p>
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
              <p class="hours__number">{{ row.Hours }}</p>
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
    <div v-else class="beforeSearch"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      checkedLocation: [],
      checkedTeam: [],
      selected: undefined,
    }
  },
  computed: {
    filteredEmployees() {
      let filterEmployees = this.employees
      if (this.locations.filters.length > 0) {
        filterEmployees = filterEmployees.filter((row) => {
          return this.locations.filters.includes(row.Location)
        })
      }
      return filterEmployees
    },
    ...mapState(['employees', 'locations', 'filters']),
  },
}
</script>

<style scoped>
.page__container {
  background-color: var(--color-platinum);
}
.employees {
  box-shadow: 0px 3px 5px #00000029;
  width: 60%;
  margin: 1em auto 0 auto;
  display: flex;
  background: var(--color-white);
  border-radius: 0.5em;
}
.hide {
  display: none;
}
.show {
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
  background: var(--color-red);
  border-radius: 15px;
  margin: auto;
  color: var(--color-white);
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
.icon {
  padding: 10px;
  min-width: 40px;
}
</style>
