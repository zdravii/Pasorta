export default { 
    loadCustomersFromLocalStorage({ commit }) {
        const customers = JSON.parse(localStorage.getItem('customers'));
        if (customers) {
          commit('setCustomers', customers);
        }
    },
    addNewCustomer({ commit }, customer) {
      commit('addNewCustomer', customer);
    },
    updateCustomer({commit},customer){
      commit('updateCustomer',customer);
    },
    deleteCustomer({commit},customer){
      commit('deleteCustomer',customer);
    },
    loginUser({commit},customer){
      commit("setLoggedUser",customer);
    },
    logoutUser({commit}){
      commit("setLoggedUser",null);
      localStorage.removeItem('LoggedCustomer');
    }
}