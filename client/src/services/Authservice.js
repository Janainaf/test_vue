import Api from '@/services/APi'

export default {
    register(credentials) {
        return Api().post('register', credentials)

    }

}

// Authservice.register({
//     email: "test@test.com",
//     password: "test"

// })