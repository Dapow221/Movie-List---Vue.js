<template>
    <div id="layoutAuthentication" class="bg-dark">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container-xl px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-7">
                                <!-- Basic registration form-->
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header justify-content-center text-dark"><h3 class="fw-light my-4">Create Account</h3></div>
                                    <div class="card-body">

                                        <!-- REGISTER FORM -->
                                        <form @submit.prevent="register(response)">
                                            <!-- USERNAME -->
                                            <div class="mb-3">
                                                <label class="small mb-1" for="register-username">Username</label>
                                                <input class="form-control" id="register-username" type="text" placeholder="Enter Username"
                                                    v-model="response.username"
                                                />
                                            </div>

                                            <!-- EMAIL -->
                                            <div class="mb-3">
                                                <label class="small mb-1" for="register-email">Email</label>
                                                <input class="form-control" id="register-email" type="email" aria-describedby="emailHelp" placeholder="Enter email address"
                                                    v-model="response.email"
                                                />
                                            </div>

                                            <!-- PASSWORD -->
                                            <div class="mb-3">
                                                <label class="small mb-1" for="register-password">Password</label>
                                                <input class="form-control" id="register-password" type="password" placeholder="Enter password"
                                                    v-model="response.password"
                                                />
                                            </div>

                                            <!-- PHONE NUMBER -->
                                            <div class="mb-3">
                                                <label class="small mb-1" for="register-number">Phone Number</label>
                                                <input class="form-control" id="register-number" type="text" placeholder="Enter Phone Number"
                                                    v-model="response.phoneNumber"
                                                />
                                            </div>

                                            <!-- ADDRESS -->
                                            <div class="mb-3">
                                                <label class="small mb-1" for="register-address">Address</label>
                                                <input class="form-control" id="register-address" type="text" placeholder="Enter Address"
                                                    v-model="response.address"
                                                />
                                            </div>

                                            <!-- SUBMIT BUTTON -->
                                            <div class="d-flex align-items-center justify-content-between mb-0">
                                                <input class="btn btn-dark" type="submit" value="Create Account">
                                            </div>

                                        </form>
                                        <!-- REGISTER FORM END -->

                                    </div>
                                    <div class="card-footer text-center">
                                        <div class="small text-dark">
                                            Have an account? 
                                            <a href="" @click="switchLogin('/login')" style="color: red;"
                                            >Go to login</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <!-- FOOTER  -->
            <FooterBar/>
        </div>
</template>

<script>
    import { mapActions } from 'pinia'
    import { useSessionStore } from '../stores/sessionStores'

    import FooterBar from './Footer.vue'

    export default {
        data() {
            return {
                response : {
                    username: "",
                    email: "",
                    password: "",
                    phoneNumber: "",
                    address: ""
                }
            }
        },
        components : { FooterBar },
        methods : {
            ...mapActions(useSessionStore, ['register']),

            switchLogin(value) {
                this.$router.push(value)
            }
        }
    }
</script>

<style>

</style>