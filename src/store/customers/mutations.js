export default{
    registerCustomer(state , payload){
        state.customersList.push(payload);
    },
    addNewCustomer(state,payload){
        state.customersList.push(payload);
    },
    updateCustomer(state,payload){
        const index = state.customersList.filter(customer => customer.email === payload.email);
        if (index !== -1) {
            state.customersList[index]=this.updateCustomer;
        }
    },
    setCustomers(state, payload){
        state.customersList = payload;
    },
    deleteCustomer(state,payload){
        state.customersList = state.customersList.filter(customer => customer.email !== payload);
    },
    setLoggedUser(state,payload){
        state.loggedUser = payload;
        localStorage.setItem("LoggedCustomer",JSON.stringify(payload))
    }
}