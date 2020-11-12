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
      <div class="filter">
        <div class="container-filter">
          <h3 class="filter__title">
            <img src="~assets/location.svg" class="filter__location-icon" />
            Location
          </h3>
        </div>
        <div class="checkboxes">
          <div>
            <label class="container"
              >Aarhus
              <input
                v-model="checkedLocation"
                type="checkbox"
                value="Aarhus"
                class="filter__input checkbox" /><span class="checkmark"></span
            ></label>
          </div>
          <div>
            <label class="container"
              >London
              <input
                v-model="checkedLocation"
                type="checkbox"
                value="London"
                class="filter__input checkbox" /><span class="checkmark"></span
            ></label>
          </div>
          <div>
            <label class="container"
              >København
              <input
                v-model="checkedLocation"
                type="checkbox"
                value="Copenhagen"
                class="filter__input checkbox" /><span class="checkmark"></span
            ></label>
          </div>
          <div>
            <label class="container"
              >Barcelona
              <input
                v-model="checkedLocation"
                type="checkbox"
                value="Barcelona"
                class="filter__input checkbox" /><span class="checkmark"></span
            ></label>
          </div>
          <div>
            <label class="container"
              >Oslo
              <input
                v-model="checkedLocation"
                type="checkbox"
                value="Oslo"
                class="filter__input checkbox" /><span class="checkmark"></span
            ></label>
          </div>
          <div>
            <label class="container"
              >Amsterdam
              <input
                v-model="checkedLocation"
                type="checkbox"
                value="Amsterdam"
                class="filter__input checkbox" /><span class="checkmark"></span
            ></label>
          </div>
        </div>
      </div>
      <input v-model="checkedTeam" type="checkbox" value="Team 1" /><label
        for=""
        >Team</label
      >

      <div
        v-for="(row, index) in filteredProjects"
        :key="`employee-${index}`"
        class="employees"
      >
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
      checkedLocation: [],
      checkedTeam: [],
    }
  },
  //   When mounted post registrations from store
  // computed: ,
  // mix this into the outer object with the object spread operator
  mounted() {
    this.$store.dispatch('loadEmployees', 'loadLocations')
  },
  computed: {
    // employees() {
    // return this.$store.state.employees
    // },
    filteredProjects() {
      let filterprojects = this.employees
      if (this.checkedLocation.length > 0) {
        filterprojects = filterprojects.filter((row) => {
          return this.checkedLocation.includes(row.Location)
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
    ...mapState(['employees', 'locations']),
  },
}
</script>

<style scoped>
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
.checkboxes {
  background: #fff;
  max-width: 19.8%;
  max-height: 10em;
  overflow-y: scroll;
  margin-left: 0.2%;
  border-radius: 0 0 4px 4px;
}
.checkbox {
  background: #f2f2f2;
}
.checkboxes::-webkit-scrollbar {
  width: 8px; /* width of the entire scrollbar */
}
.checkboxes::-webkit-scrollbar-thumb {
  border-radius: 20px; /* roundness of the scroll thumb */
  border: 3px solid #909090; /* creates padding around scroll thumb */
  background: #909090;
}
.filter__checkboxes > div {
  padding: 1em 0;
}
.filter {
  margin-left: 2em;
  font-size: 16px;
}
.container-filter {
  background: #fff;
  max-width: 20%;
  box-shadow: 0px 3px 5px #00000029;
  border: 1px solid #00000029;
  padding: 4px;
  color: #232323;
}
.filter__location-icon {
  height: 15px;
}
.filter__input {
  margin: 0 10px;
}
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: #fff;
}
/* Hide the browser's default checkbox */
.container .filter__input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 8px;
  left: 8px;
  height: 20px;
  width: 20px;
  border: 1px solid grey;
  border-radius: 5px;
}

/* On mouse-over, add a grey background color */
.container:hover .filter__input ~ .checkmark {
}

/* When the checkbox is checked, add a blue background */
.container .filter__input:checked ~ .checkmark {
  background-color: green;
  border: none;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container .filter__input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
