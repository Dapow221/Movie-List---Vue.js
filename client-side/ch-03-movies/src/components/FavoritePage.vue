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
                                        Your Favorite
                                    </h1>
                                    <div class="page-header-subtitle">This is your favorite list big data's where you can find the
                                        most popular movie in the world.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div class="container-xl px-4 mt-n10">
                    <div class="row">
                        <FavoriteCard v-for="favorite in fetchFavoriteData" :key="favorite.id" :favorite="favorite" page = 'FavoritePage'/>
                    </div>
                </div>
            </main>
            <FooterBar />
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useMoviesStore } from '../stores/mainStores';

import FavoriteCard from './Card.vue';
import HeaderBar from './Header.vue';
import FooterBar from './Footer.vue';
import SideNav from './SideNav.vue';

export default {
    components: {
        FavoriteCard,
        HeaderBar,
        FooterBar,
        SideNav
    },
    computed: {
        ...mapState(useMoviesStore, ['fetchFavoriteData'])
    },
    methods: {
        ...mapActions(useMoviesStore, ['fetchFavorite']),
    },
    created() {
        this.fetchFavorite()
    }
}
</script>

<style lang="scss" scoped></style>