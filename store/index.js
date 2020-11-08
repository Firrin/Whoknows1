import axios from 'axios'
export const state = () => ({})

export const getters = {
  filteredBlogs() {
    return state.employees.filter((row) => {
      return row.username.toLowerCase().match(this.search)
    })
  },
}

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
