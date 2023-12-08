import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'


const baseUrl = 'https://moviesproject.dapow.online'


export const useSessionStore = defineStore('session', {
  state : () => {
    return {
      isLogin : false,
      loginUser : []
    }
  },

  actions : {
    // post pub/login
    async login(payload) {
      try {
        const res = await axios.post(`${baseUrl}/pub/login`, {
          email : payload.email,
          password : payload.password
        })
        // console.log(res)
        localStorage.setItem('access_token', res.data.access_token)
  
        this.isLogin = true
        this.loginUser = res.data

  
        this.router.push('/')

        Swal.fire(
          'Success !',
          `Welcome back ${res.data.name}!`,
          'success'
        )

      } catch (error) {
        console.log(error)

        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: error.responseJSON,
          confirmButtonText: 'Try Again',
        })
      }
    },

    async register(response) {
      try {
        await axios.post(`${baseUrl}/pub/register`, {
          username : response.username,
          email : response.email,
          password : response.password,
          phoneNumber : response.phoneNumber,
          address : response.address
        })

        this.router.push('/login')

        Swal.fire(
          'Success to register!',
        )

      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: error.responseJSON,
          confirmButtonText: 'Try Again',
        })
      }
    },

    async loginGoogle(response) {
      try {
        const { data } = await axios({
          url: `${baseUrl}/pub/google-login`,
          method: 'post',
          headers: {
            google_token: response.credential
          }
        })

        console.log(data)
        localStorage.setItem('access_token', data)
        this.isLogin = true
        this.router.push('/')

        Swal.fire({
          icon: 'success',
          title: 'Success Logged in!',
          text : `Welcome back !`,
          showConfirmButton: false,
          timer: 1500
        })

      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: error,
          confirmButtonText: 'Try Again',
      })
      }
    },

    async logout() {
      try {
        localStorage.clear()

        this.isLogin = false

        Swal.fire(
          'Success to logout!',
        )
      } catch (error) {
        console.log(error)
      }
    }
  }
})
