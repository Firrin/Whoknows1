<template>
  <div class="filter">
    <div class="container-filter">
      <img src="~assets/location.svg" class="filter__location-icon" />
      Location
    </div>
    <div class="checkboxes">
      <div class="checkboxes__container">
        <label class="container"
          >Aarhus
          <input
            v-model="checkedLocation"
            type="checkbox"
            value="Aarhus"
            class="filter__input checkbox"
            @change="Addchecked()" /><span class="checkmark"></span
        ></label>
      </div>
      <div>
        <label class="container"
          >London
          <input
            v-model="checkedLocation"
            type="checkbox"
            value="London"
            class="filter__input checkbox"
            @change="Addchecked()" /><span class="checkmark"></span
        ></label>
      </div>
      <div>
        <label class="container"
          >København
          <input
            v-model="checkedLocation"
            type="checkbox"
            value="Copenhagen"
            class="filter__input checkbox"
            @change="Addchecked()" /><span class="checkmark"></span
        ></label>
      </div>
      <div>
        <label class="container"
          >Barcelona
          <input
            v-model="checkedLocation"
            type="checkbox"
            value="Barcelona"
            class="filter__input checkbox"
            @change="Addchecked()" /><span class="checkmark"></span
        ></label>
      </div>
      <div>
        <label class="container"
          >Oslo
          <input
            v-model="checkedLocation"
            type="checkbox"
            value="Oslo"
            class="filter__input checkbox"
            @change="Addchecked()" /><span class="checkmark"></span
        ></label>
      </div>
      <div>
        <label class="container"
          >Amsterdam
          <input
            v-model="checkedLocation"
            type="checkbox"
            value="Amsterdam"
            class="filter__input checkbox"
            @change="Addchecked()" /><span class="checkmark"></span
        ></label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedLocation: [],
    }
  },
  methods: {
    Addchecked() {
      this.$store.dispatch('handleFilter', this.checkedLocation)
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
.checkboxes {
  background: var(--color-white);
  max-height: 11em;
  overflow-y: scroll;
  margin-left: 0.2%;
  border-radius: 0 0 4px 4px;
}
.checkboxes__container {
  margin-top: 0.4em;
}
.checkbox {
  background: var(--color-white-truffle);
}
.checkboxes::-webkit-scrollbar {
  width: 8px; /* width of the entire scrollbar */
}
.checkboxes::-webkit-scrollbar-thumb {
  border-radius: 20px; /* roundness of the scroll thumb */
  border: 3px solid var(--color-taupe-gray); /* creates padding around scroll thumb */
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
.container-filter {
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

/* On mouse-over, add a grey background color */
.container:hover .filter__input ~ .checkmark {
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
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid var(--color-white);
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
