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
      <input v-model="checkedTeam" type="checkbox" value="Team 1" /><label
        for=""
        >Team</label
      >
      <div
        v-for="(row, index) in filteredProjects"
        :key="`employee-${index}`"
        @click="selected = row.id"
      >
        <div class="employees">
          <div class="info">
            <h2>{{ row.name }}</h2>
            <p>Ala@novicell.dk</p>
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
          <div class="chevron">
            <!--'' : '&lsaquo;' -->
            &rsaquo;
          </div>
        </div>
        <div class="hide projects" :class="{ show: row.id == selected }">
          <div>
            <div class="skills__project"></div>
            <div>Case</div>
            <div>JiraLink</div>
            <div>Hours</div>
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
  //   When mounted post registrations from store
  // computed: ,
  // mix this into the outer object with the object spread operator
  mounted() {
    this.$store.dispatch('loadEmployees', 'loadLocations')
  },
  methods: {},
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
      if (this.search.length > 0) {
        filterprojects = filterprojects.filter((row) =>
          row.name.toLowerCase().includes(this.search.toLowerCase())
        )
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
.employees {
  box-shadow: 0px 3px 5px #00000029;
  width: 60%;
  margin: 1em auto 0 auto;
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-radius: 0.5em;
  padding: 1em 1em;
}
h1 {
  font-weight: normal;
}
.hide {
  color: blue;
  display: none;
}
.show {
  color: red;
  background: rgb(218, 218, 218);
  border-radius: 0 0 0.5em 0.5em;
  padding: 1em 1em;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  transition: 1s ease-in all;
  margin: 0 auto;
  width: 60%;
}
.projects {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.message.content {
  padding: 20px;
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
.location-svg,
.filter__location-icon {
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
