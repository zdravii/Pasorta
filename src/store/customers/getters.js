export default {
    allCustomers: (state) => state.customersList,

    isAdmin : (state) => state.loggedUser?.role === 'admin',
    isLoggedIn : (state) => !!state.loggedUser
}