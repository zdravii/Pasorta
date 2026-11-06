<template>
    <h1 class="mt-3">Admin Panel</h1>
    <h2 class="mt-5">Korisnici</h2>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 mx-auto">
                <table class="mx-auto">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="customer in allCustomers" :key="customer.email">
                            <td class="p-3">{{customer.name}} {{customer.surname}}</td>
                            <td class="p-3">{{customer.email}}</td>
                            <td>
                                <base-button class="m-2" @click="editCustomer(customer)">Izmeni</base-button>
                                <base-button class="m-2" @click="deleteCustomer(customer.email)">Izbriši</base-button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
<div v-if="selectedCustomer" class="container-fluid">
    <h3 class="mt-5">Izmeni korisnika</h3>
    <div class="row">
        <div class="col-lg-3 mx-auto mt-2">
            <input size="25" v-model="selectedCustomer.name" type="text" placeholder="Ime">
            <input size="25" v-model="selectedCustomer.surname" type="text" placeholder="Prezime">
            <input size="25" v-model="selectedCustomer.email" type="email" placeholder="Email">
            <input size="25" v-model="selectedCustomer.password" type="text" placeholder="Šifra">
        </div>
    </div>
    <div class="row justify-content-center mt-2 pb-3">
        <base-button @click="saveCustomer">Sačuvaj</base-button>
    </div>
</div>
    <h3 class="mt-5">Dodaj korisnika</h3>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-2 mx-auto mt-2">
                <input v-model="newCustomer.name" type="text" placeholder="Ime">
                <input v-model="newCustomer.surname" type="text" placeholder="Prezime">
                <input v-model="newCustomer.email" type="email" placeholder="Email">
                <input v-model="newCustomer.password" type="text" placeholder="Šifra">
            </div>
        </div>
        <div class="row justify-content-center mt-2 pb-3">
            <base-button @click="addCustomer">Dodaj</base-button>
        </div>
    </div>
</template>
<script>
import BaseButton from '@/components/userinterface/BaseButton.vue';

export default {
    components : {BaseButton},
    data(){
        return {
            newCustomer : {name : "",surname : "",email : "",password : ""},
            selectedCustomer : null
        }
    },
    computed : {
        allCustomers(){
            return this.$store.getters['customers/allCustomers']
        }
    },
    methods : {
        addCustomer(){
            this.$store.dispatch('customers/addNewCustomer',this.newCustomer);
            console.log(this.$store.state.customers.customersList);
            
            this.newCustomer = {name : "",surname : "",email : "",password : ""};
        },
        editCustomer(customer) {
            this.selectedCustomer = customer;
        },
        saveCustomer(){
            this.$store.dispatch('customers/updateCustomer',this.selectedCustomer);
            this.selectedCustomer = null;
        },
        deleteCustomer(email){
            this.$store.dispatch('customers/deleteCustomer',email);
        }
    }
}

</script>
<style>
td{
    border:1px solid black;
}
</style>