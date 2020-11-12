import axios from 'axios'
export const state = () => ({})

export const getters = {}
export const mutations = {
  SET_Employees(state, employees) {
    state.employees = employees
  },
  SET_Locations(state, locations) {
    state.locations = locations
  },
}
export const actions = {
  loadLocations({ commit }) {
    axios
      .get('https://5fa909b5c9b4e90016e69eb7.mockapi.io/Location')
      .then((response) => response.data)
      .then((locations) => {
        console.log(locations)
        commit('SET_Locations', locations)
      })
  },
  loadEmployees({ commit }) {
    axios
      .get('https://5fa909b5c9b4e90016e69eb7.mockapi.io/Employees')
      .then((response) => response.data)
      .then((employees) => {
        console.log(employees)
        commit('SET_Employees', employees)
      })
  },
}
