import { defineStore } from "pinia";
import axios from "axios"
import Swal from "sweetalert2";

const baseUrl = "https://moviesproject.dapow.online"

export const useMoviesStore = defineStore('movies', {
    state: () => {
        return {
            dataMovies: {},
            dataDetail: {},
            favoriteData: {},
            fetchFavoriteData: {},
            dataQrCode: {}
        }
    },

    actions: {
        async fetchMovies(page, genreId) {
            try {
                let options = `${baseUrl}/pub/movies`
                if (page > 0) {
                    options += `?page=${page}`
                }

                if (genreId) {
                    options += `&filter=${genreId}`
                }

                const { data } = await axios.get(options)
            
                this.dataMovies = data.content

            } catch (error) {
                console.log(error)
            }
        },
        async moviesDetail(id) {
            try {
                const { data } = await axios.get(`${baseUrl}/pub/movies/` + id)
                
                this.dataDetail = data.movies
                
            } catch (error) {
                console.log(error)
            }
        },
        async addFavorite(id) {
            try {
                const response = await axios({
                    url: `${baseUrl}/pub/favorite/` + id,
                    method: 'post',
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })

                this.favoriteData = response
                this.fetchFavorite()

                Swal.fire({
                    icon: 'success',
                    title: 'Successfully added to favorites',
                    text : `Please enjoy !`,
                    showConfirmButton: false,
                    timer: 1500
                })
                
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: 'Please login first to enjoy our features',
                    confirmButtonText: 'Try Again',
                })
            }
        },
        async fetchFavorite() {
            try {
                const { data } = await axios({
                    url: `${baseUrl}/pub/favorite`,
                    method: 'get',
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })

                this.fetchFavoriteData = data.favorite
            } catch (error) {
                console.log(error)
            }
        },
        async deleteFavorite(id) {
            try {
                const response = await axios({
                    url: `${baseUrl}/pub/favorite/` + id,
                    method: 'delete',
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })

                this.deleteDataFavorite = response
                this.fetchFavorite()

                Swal.fire({
                    icon: 'success',
                    title: 'Successfully remove from your favorites',
                    text : `Please enjoy !`,
                    showConfirmButton: false,
                    timer: 1500
                })

            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    confirmButtonText: 'Try Again',
                })
            }
        },
        async generateQrCode(url) {
            try {
                const { data } = await axios({
                    url: `${baseUrl}/pub/qr-code`,
                    method: 'post',
                    data: {
                        url
                    }
                })

                this.dataQrCode = data

            } catch (error) {
                console.log(error)
            }
        }
    }
})

