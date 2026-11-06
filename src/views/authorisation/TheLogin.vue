<template>
    <div id="LoginForm" class="col-lg-8 mx-auto mt-5">
        <form>
            <div class="form-group">
                <label for="emailLog">Email address</label>
                <input v-model="loginData.email.value" type="email" class="form-control" id="emailLog" aria-describedby="emailHelp" placeholder="Unesite email">
            </div>
            <div class="form-group">
                <label for="sifraLog">Password</label>
                <input v-model="loginData.password.value" type="password" class="form-control" id="sifraLog" placeholder="Unesite šifru">
            </div>
            <button @click.prevent="loginCustomer" type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>
<script>
    export default{
        data (){
            return{
                loginData : {
                    email : {
                        value : "",
                        errorMsg : "",
                        isError : false
                    },
                    password : {
                        value : "",
                        errorMsg : "",
                        isError : false
                    }
                },
                status : false
            }
        },
        methods : {
            loginCustomer(){
                const customer = this.$store.state.customers.customersList.find(
                    (customer) => customer.email === this.loginData.email.value && customer.password === this.loginData.password.value
                );

                if(customer){
                    this.$store.dispatch("customers/loginUser",customer);
                    alert('Uspešno ste se ulogovali.');
                    this.$router.push('/');
                }
                else{
                    alert('Email ili lozinka nisu ispravni.');
                }
            }
        }
    }
</script>
<style>

</style>