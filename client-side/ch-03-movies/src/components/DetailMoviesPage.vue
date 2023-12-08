<template>
<HeaderBar />
    <div id="layoutSidenav">
        <SideNav />
        <div id="layoutSidenav_content">
            <main>
                <header class="page-header page-header-dark bg-dark pb-10">
                    <div class="container-xl px-4">
                        <div class="page-header-content pt-4">
                            <div class="row align-items-center justify-content-between">
                                <div class="col-auto mt-4">
                                    <h1 class="page-header-title">
                                        <div class="page-header-icon"><i data-feather="filter"></i></div>
                                        Detail Movies
                                    </h1>
                                    <div class="page-header-subtitle">This is the Detail Page big data's where you can find the
                                        most popular movie in the world.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div class="container-xl px-4 mt-n10">
                    <div class="row">
                        <DetailCard :dataDetail="dataDetail" page = 'DetailMoviesPage'/>
                    </div>
                </div>
            </main>
            <FooterBar />
        </div>
    </div>
</template>

<script>
import DetailCard from './Card.vue';
import HeaderBar from './Header.vue';
import FooterBar from './Footer.vue';
import SideNav from './SideNav.vue';

import { mapActions, mapState } from 'pinia';
import { useMoviesStore } from '../stores/mainStores'

export default {
    components: {
        DetailCard,
        HeaderBar,
        FooterBar,
        SideNav,
    },
    methods: {
        ...mapActions(useMoviesStore, ['moviesDetail']),
    },
    computed: {
        ...mapState(useMoviesStore, ['dataDetail'])
    },
    created() {
        this.moviesDetail(this.$route.params.id) 
    }
    
}
</script>

<style></style>