<template>
    <Header />
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
                                        <div class="page-header-icon"><i data-feather="activity"></i></div>
                                        Home
                                    </h1>
                                    <div class="page-header-subtitle">Overview and content summary</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <!-- Main page content-->
                <div class="container-xl px-4 mt-n10">
                    <div class="row">
                        <div class="col-xxl-4 col-xl-12 mb-4">
                            <div class="card h-100">
                                <div class="card-body h-100 p-5">
                                    <div class="row align-items-center">
                                        <div class="col-xl-8 col-xxl-12">
                                            <div class="text-center text-xl-start text-xxl-center mb-4 mb-xl-0 mb-xxl-4">
                                                <h1 class="text-dark">Welcome to Dapow Movies</h1>
                                                <p class="text-gray-700 mb-0">Dapow Movies is the world's most popular and
                                                    authoritative source for movie content. Find ratings for the latest and
                                                    most popular movie.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Example Colored Cards for Dashboard Demo-->
                    <div class="row">
                        <div class="col-lg-6 col-xl-3 mb-4">
                            <a href="#">
                                <div class="card bg-dark text-white h-100">
                                    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/0d05002119251179e11dac9cadeaf155.jpe"
                                        class="card-img-top">
                                    <div class="card-body">
                                        <p class="card-text">Bochi The Rock</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-6 col-xl-3 mb-4">
                            <a href="#">
                                <div class="card bg-dark text-white h-100">
                                    <img src="https://m.media-amazon.com/images/M/MV5BOTM5ZjA2YWMtYjY3Ny00ZDU1LTk1NjYtMzhjMGY5ZmZkMzgwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg"
                                        class="card-img-top">
                                    <div class="card-body">
                                        <p class="card-text">Tokyo Ghoul</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-6 col-xl-3 mb-4">
                            <a href="#">
                                <div class="card bg-dark text-white h-100">
                                    <img src="https://i.redd.it/32sx6cwh0t871.jpg" class="card-img-top">
                                    <div class="card-body">
                                        <p class="card-text">Angel Spoils me Rotten</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-6 col-xl-3 mb-4">
                            <a href="#">
                                <div class="card bg-dark text-white h-100">
                                    <img src="https://4.bp.blogspot.com/-Cuoev-XQu6A/TghgSgZzfTI/AAAAAAAABiY/qfEDvNtAslU/s1600/durarara-english-dubbed.png"
                                        class="card-img-top">
                                    <div class="card-body">
                                        <p class="card-text">Durarara</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <!-- FOOTER -->
            <FooterBar />
        </div>
    </div>
</template>

<script>
import SideNav from './SideNav.vue';
import FooterBar from './Footer.vue'
import Header from './Header.vue'

export default {
    components: {
        SideNav,
        FooterBar,
        Header
    }
}
</script>

<style></style>