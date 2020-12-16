<template>
  <div v-show="employees.length > 0" class="fadeInRight">
    <div class="filter">
      <div class="container-filter">
        <img src="~assets/location.svg" class="filter__location-icon" />
        Location
      </div>
      <div class="checkboxes">
        <div v-for="city  in cities" :key="city">
          <div class="checkboxes__container">
            <label class="container"
              >{{ city }}
              <input
                v-model="checkedLocation"
                type="checkbox"
                :value="city"
                class="filter__input checkbox"
                @change="Addchecked()" /><span class="checkmark"></span
            ></label>
          </div>
        </div>
      </div>
    </div>
    <div class="team-filter">
      <div class="container-team-filter">
        <img src="~assets/suitcase.svg" class="filter__location-icon" />
        Team
      </div>
      <div class="checkboxes">
        <div v-for="team in teams" :key="team">
          <div class="checkboxes__container">
            <label class="container"
              >{{ team }}
              <input
                v-model="checkedTeam"
                type="checkbox"
                :value="team"
                class="filter__input checkbox"
                @change="AddcheckedTeam()" /><span class="checkmark"></span
            ></label>
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
      checkedLocation: [],
      checkedTeam: [],
      cities: ['Aarhus', 'London', 'Amsterdam', 'Oslo', 'Madrid', 'Barcelona'],
      teams: [
        'Front-end',
        'Umbraco',
        'Sitecore',
        'Data value',
        'Business Intelligence',
        'Dynamic Web',
        'Custom Solutions',
      ],
    }
  },
  computed: {
    ...mapState(['employees']),
  },
  methods: {
    Addchecked() {
      this.$store.dispatch('handleFilter', this.checkedLocation)
    },
    AddcheckedTeam() {
      this.$store.dispatch('handleTeam', this.checkedTeam)
    },
  },
}
</script>

<style scoped>
.location-svg,
.filter__location-icon {
  height: 20px;
  width: 20px;
}
.fadeInRight {
  animation: fadeIn ease 5s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.checkboxes {
  background: var(--color-white);
  max-height: 11em;
  overflow-y: scroll;
  margin-left: 0.2%;
  border-radius: 0 0 4px 4px;
  box-shadow: 0px 3px 5px #00000029;
}
.checkboxes__container {
  margin-top: 0.4em;
}
.checkbox {
  background: var(--color-white-truffle);
}
.checkboxes::-webkit-scrollbar {
  width: 8px;
}
.checkboxes::-webkit-scrollbar-thumb {
  border-radius: 20px;
  border: 3px solid var(--color-taupe-gray);
  background: var(--color-taupe-gray);
}
.filter__checkboxes > div {
  padding: 1em 0;
}
.filter {
  background-color: var(--color-white-truffle);
  position: absolute;
  top: 64%;
  right: 2%;
  width: 15vw;
  margin: 1%;
  z-index: 1;
}
.team-filter {
  background-color: var(--color-white-truffle);
  position: absolute;
  top: 90%;
  right: 2%;
  width: 15vw;
  margin: 1%;
  z-index: 1;
}
.container-filter,
.container-team-filter {
  background: var(--color-white);
  box-shadow: 0px 3px 5px #00000029;
  border: 1px solid #00000029;
  padding: 4px;
  color: var(--color-pepper);
  font-size: 20px;
}
.filter__location-icon {
  height: 18px;
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
  user-select: none;
  background: var(--color-white);
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
  top: 3px;
  left: 8px;
  height: 20px;
  width: 20px;
  border: 1px solid var(--color-taupe-gray);
  border-radius: 5px;
}
/* When the checkbox is checked, add a blue background */
.container .filter__input:checked ~ .checkmark {
  background-color: var(--color-spearmint);
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
  left: 6px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid var(--color-white);
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
