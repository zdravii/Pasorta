import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations"

export default {
    namespaced:true,
    state(){
        return {
            customersList : [
                {
                    name : "Ilija",
                    surname : "Mlanovic",
                    email : "ilija.milanovic@gmail.com",
                    password : "Abcd!",
                    role : "customer"
                },
                {
                    name : "Jana",
                    surname : "Stevanovic",
                    email : "jana.stevanovic@gmail.com",
                    password : "Abvg!",
                    role : "admin"
                }
            ],
            loggedUser :  null
        }
    },
    mutations,
    getters,
    actions
}