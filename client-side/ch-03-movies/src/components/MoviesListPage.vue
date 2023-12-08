<template>
    <!-- HEADER -->
    <HeaderBar />

    <div id="layoutSidenav">
        <!-- SIDE NAV -->
        <SideNav />

        <!-- SIDE MAIN CONTENT -->
        <div id="layoutSidenav_content">
            <!-- MAIN CONTENT -->
            <main>
                <!-- HEADER MOVIES -->
                <header class="page-header page-header-dark bg-dark pb-10">
                    <div class="container-xl px-4">
                        <div class="page-header-content pt-4">
                            <div class="row align-items-center justify-content-between">
                                <div class="col-auto mt-4">
                                    <h1 class="page-header-title">
                                        <div class="page-header-icon"><i data-feather="filter"></i></div>
                                        Movies
                                    </h1>
                                    <div class="page-header-subtitle">This is the movies big data's where you can find the
                                        most popular movie in the world.</div>
                                </div>
                                <div class="col-12 col-xl-auto mb-3">
                                    <div class="dropdown">
                                        <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Filter by Genre
                                        </button>
                                        <select v-model="filterMovies" class="dropdown-menu" aria-labelledby="dropdownMenuButton1" @change="handlerFilterMovies()">
                                            <option class="dropdown-item" href="" value="1">Action</option>
                                            <option class="dropdown-item" href="" value="2">Comedy</option>
                                            <option class="dropdown-item" href="" value="3">Drama</option>
                                            <option class="dropdown-item" href="" value="4">Horror</option>
                                            <option class="dropdown-item" href="" value="5">Romance</option>
                                            <option class="dropdown-item" href="" value="6">Thriller</option>
                                            <option class="dropdown-item" href="" value="7">Science Fiction</option>
                                            <option class="dropdown-item" href="" value="8">Adventure</option>
                                            <option class="dropdown-item" href="" value="9">Fantasy</option>
                                            <option class="dropdown-item" href="" value="10">Animation</option>
                                            <option class="dropdown-item" href="" value="">All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div class="container-xl px-4 mt-n10">
                    <div class="row">
                        <MoviesCard v-for="movie in dataMovies" :key="movie.id" :movie="movie" />
                    </div>
                </div>


        </main>
            <nav aria-label="Page navigation example" style="display: flex; justify-content: center;">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous" @click.prevent="pagination('-')">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next" @click.prevent="pagination('+')">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <FooterBar />

        </div>
        <!-- MOVIES & SIDENAV CONTENT END -->
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useMoviesStore } from '../stores/mainStores';

import HeaderBar from './Header.vue';
import SideNav from './SideNav.vue';
import MoviesCard from './MoviesCard.vue'
import FooterBar from './Footer.vue';


export default {
    data() {
        return {
            pageCount: 1,
            filterMovies: ''
        }
    },
    components: {
        HeaderBar,
        SideNav,
        MoviesCard,
        FooterBar
    },
    methods: {
        ...mapActions(useMoviesStore, ['fetchMovies']),

        pagination(value) {
            if (value === '+') {
                this.pageCount += 1
            } else if (value === '-') {
                if (this.pageCount > 1) {
                    this.pageCount -= 1
                } 
            }
            this.fetchMovies(this.pageCount, this.filterMovies)
        },

        handlerFilterMovies() {
            this.pageCount = 1
            this.pagination()
        }
    },
    computed: {
        ...mapState(useMoviesStore, ['dataMovies'])
    },

    created() {
        this.fetchMovies(1)
    }

}
</script>

<style lang="scss" scoped></style>