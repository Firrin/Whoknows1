import axios from 'axios'
export const state = () => ({})

export const getters = {}

export const mutations = {
  SET_Employees(state, employees) {
    state.employees = employees
  },
}

export const actions = {
  loadEmployees({ commit }) {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.data)
      .then((employees) => {
        console.log(employees)
        commit('SET_Employees', employees)
      })
  },
}
