<template>
    <div id="RegisterForm" class="col-lg-8 mx-auto mt-5">
        <form @submit.prevent="registerCustomer">
            <div class="form-group">
                <label for="ime">Ime</label>
                <input v-model="registerData.name.value" type="text" class="form-control" :class="{'is-invalid': registerData.name.isError}" id="ime" placeholder="Unesite ime">
                <div v-if="registerData.name.isError" class="is-invalid-text">{{registerData.name.errorMsg}}</div>
            </div>
            <div class="form-group">
                <label for="prezime">Prezime</label>
                <input v-model="registerData.surname.value" type="text" class="form-control" :class="{'is-invalid': registerData.surname.isError}" id="prezime" placeholder="Unesite prezime">
                <div v-if="registerData.surname.isError" class="is-invalid-text">{{registerData.surname.errorMsg}}</div>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input v-model="registerData.email.value" type="email" class="form-control" :class="{'is-invalid': registerData.email.isError}" id="email" aria-describedby="emailHelp" placeholder="Unesite email">
                <div v-if="registerData.email.isError" class="is-invalid-text">{{registerData.email.errorMsg}}</div>
            </div>
            <div class="form-group">
                <label for="sifra">Šifra</label>
                <input v-model="registerData.password.value" type="password" class="form-control" :class="{'is-invalid': registerData.password.isError}" id="sifra" placeholder="Unesite Šifru">
                <div v-if="registerData.password.isError" class="is-invalid-text">{{registerData.password.errorMsg}}</div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
</template>
<script>

export default {
    data (){
            return{
                registerData : {
                    name : {
                        value : "",
                        errorMsg : "",
                        isError : false
                    },
                    surname : {
                        value : "",
                        errorMsg : "",
                        isError : false
                    },
                    email : {
                        value : "",
                        errorMsg : "",
                        isError : false
                    },
                    password : {
                        value : "",
                        errorMsg : "",
                        isError : false
                    },
                    role : {
                        value : "customer"
                    }
                },
                status : false
            }
        },
    methods : {
        validateForm()
        {
            let isValid = true;
            const nameRegex = /^[A-ZŠĆĐŽ][a-zšđžć]{2,}$/
            const surnameRegex = /^[A-ZĐŠĆČ][a-zđšćč]{3,}$/
            const emailRegex =  /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
            const passwordRegex = /^[A-ZŠĆĐŽ][a-zšđžć]{2,}[.!?:@#$_&-+]$/;

            if(!nameRegex.test(this.registerData.name.value))
            {   
                this.registerData.name.isError = true;
                this.registerData.name.errorMsg = "Ime mora početi velikim slovom i sadržati minimum dva slova."
                isValid = false;
            }
            else{
                this.registerData.name.isError = false;
                this.registerData.name.errorMsg = "";
            }

            if(!surnameRegex.test(this.registerData.surname.value))
            {
                this.registerData.surname.isError = true;
                this.registerData.surname.errorMsg = "Prezime mora početi velikim slovom i sadržati minimum tri slova."
                isValid = false;
            }
            else{
                this.registerData.surname.isError = false;
                this.registerData.surname.errorMsg = "";
            }

            if(!emailRegex.test(this.registerData.email.value))
            {
                this.registerData.email.isError = true;
                this.registerData.email.errorMsg = "Email nije unet u pravilnom formatu."
                isValid = false;
            }
            else{
                this.registerData.email.isError = false;
                this.registerData.email.errorMsg = "";
            }

            if(!passwordRegex.test(this.registerData.password.value))
            {
                this.registerData.password.isError = true;
                this.registerData.password.errorMsg = "Šifra mora početi velikim slovom,imati najmanje dva mala i mora se zvaršavati nekim od simbola (.!?:@#$_&-+)."
                isValid = false;
            }
            else{
                this.registerData.password.isError = false;
                this.registerData.password.errorMsg = "";
            }

            return isValid;
        },
        registerCustomer(){
            if(this.validateForm()){
            this.$store.commit('customers/registerCustomer',{
                name : this.registerData.name.value,
                surname : this.registerData.surname.value,
                email : this.registerData.email.value,
                password : this.registerData.password.value,
                role : this.registerData.role.value
            })

            alert("registracija uspesna");

            this.resetForm();
        }
        },
        resetForm(){
            this.registerData.name.value = "";
            this.registerData.surname.value = "";
            this.registerData.email.value = "";
            this.registerData.password.value = "";

            this.registerData.name.isError = false;
            this.registerData.surname.isError = false;
            this.registerData.email.isError = false;
            this.registerData.password.isError = false;

            this.registerData.name.errorMsg = "";
            this.registerData.surname.errorMsg = "";
            this.registerData.email.errorMsg = "";
            this.registerData.password.errorMsg = "";
        }
    }
}

</script>
<style>

</style>