<template>
    <div> 
        <h1> {{msg}} </h1>
            Email <input type="email" name="email" v-model="email" placeholder="email"> 
            Password <input type="password" name="password" v-model="password" placeholder="password"> 
            <br>
            <br>
            <button @click="register">      REGISTER       </button>

    </div>       
</template>

<script>
import Authservice from '@/services/Authservice'

export default  {
    data() {
        return {
            msg:  "Register Here",
            email: "",
            password: ""
        }
    }, 
    methods: {
        async register() {
            const response = await Authservice.register({
            email: this.email,
            password: this.password
            })
            console.log(response.data)
        }
    }
}
</script>