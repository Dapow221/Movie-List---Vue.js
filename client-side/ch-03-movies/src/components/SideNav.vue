<template>
    <!-- SIDE NAV -->
    <div id="layoutSidenav_nav">
        <nav class="sidenav shadow-right sidenav-dark">
            <div class="sidenav-menu">
                <div class="nav accordion" id="accordionSidenav">
                    <!-- Sidenav Menu Heading (Core)-->
                    <div class="sidenav-menu-heading">Core</div>

                    <a @click="switchPage('/')" class="nav-link collapsed" data-bs-toggle="collapse"
                        href=""
                        data-bs-target="#collapseDashboards" aria-expanded="false" aria-controls="collapseDashboards">
                        <div class="nav-link-icon"><i class="fa-solid fa-house fa-beat"></i></div>
                        Home
                    </a>

                    <!-- Sidenav Heading (Custom)-->
                    <div class="sidenav-menu-heading">Data</div>

                    <a @click="switchPage('/movies')" class="nav-link collapsed" data-bs-toggle="collapse"
                        href=""
                        data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                        <div class="nav-link-icon"><i class="fa-solid fa-film fa-beat-fade"></i></div>
                        Movies
                        <div class="sidenav-collapse-arrow"></div>
                    </a>

                    <div v-if="isLogin === true" class="sidenav-menu-heading">MY FAVORITE</div>

                    <a v-if="isLogin === true" @click="switchPage('/favorite')" class="nav-link collapsed" data-bs-toggle="collapse"
                        href=""
                        data-bs-target="#collapseComponents" aria-expanded="false" aria-controls="collapseComponents">
                        <div class="nav-link-icon"><i class="fa-solid fa-heart fa-beat"></i></div>
                        My Favorite
                    </a>

                    <div class="sidenav-menu-heading">ACCOUNT</div>

                    <a v-if="isLogin === false" @click="switchPage('/login')" class="nav-link collapsed"
                        data-bs-toggle="collapse" data-bs-target="#collapseComponents" aria-expanded="false"
                        href=""
                        aria-controls="collapseComponents">
                        <div class="nav-link-icon"><i class="fa-solid fa-right-to-bracket"></i></div>
                        Login
                    </a>
                    <a v-if="isLogin === false" @click="switchPage('/register')" class="nav-link collapsed"
                        data-bs-toggle="collapse" data-bs-target="#collapseComponents" aria-expanded="false"
                        href=""
                        aria-controls="collapseComponents">
                        <div class="nav-link-icon"><i class="fa-solid fa-users"></i></div>
                        Register
                    </a>
                    <a v-if="isLogin === true" class="nav-link collapsed" data-bs-toggle="collapse"
                        data-bs-target="#collapseComponents" aria-expanded="false" aria-controls="collapseComponents"
                        href="" @click="logoutHandler">
                        <div class="nav-link-icon"><i class="fa-solid fa-arrow-right-from-bracket"></i></div>
                        Logout
                    </a>
                </div>
            </div>

            <div class="sidenav-footer">
                <div class="sidenav-footer-content">
                    <div class="sidenav-footer-subtitle">Logged in as:</div>
                    <div class="sidenav-footer-title">{{ loginUser.name }} </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useSessionStore } from '../stores/sessionStores';

export default {
    computed: {
        ...mapState(useSessionStore, ['isLogin', 'loginUser'])
    },
    methods: {
        switchPage(value) {
            this.$router.push(value)
        },
        logoutHandler() {
            this.logout()
            this.$router.push('/')
            this.isLogin = false
        },

        ...mapActions(useSessionStore, ['logout'])
    },
    created() {
        if (localStorage.access_token) {
            this.isLogin = true
        }
    }

}
</script>

<style lang="scss" scoped></style>