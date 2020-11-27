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
  addNewFilter(state, payload) {
    //   state.locations.filters = state.locations.filters.concat(payload)
    state.locations.filters = payload
  },
}
export const actions = {
  loadEmployees(context, payload) {
    axios
      .get(
        `https://5fa909b5c9b4e90016e69eb7.mockapi.io/Employees?search=${payload}`
      )
      .then((response) => response.data)
      .then((employees) => {
        context.commit('SET_Employees', employees)
      })
  },

  handleFilter(context, payload) {
    console.log(payload)
    context.commit('addNewFilter', payload)
  },
}
