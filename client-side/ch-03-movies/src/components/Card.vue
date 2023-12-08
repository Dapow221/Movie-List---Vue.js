<template>
<div v-if="page === 'DetailMoviesPage'" class="card mb-3" style="max-width: 540rem; height: 20rem;">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="dataDetail.imgUrl" class="img-fluid rounded-start">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ dataDetail.title }}</h5>
        <p class="card-text">{{ dataDetail.synopsis }}</p>
        <div v-html="dataQrCode.data" style="width: 10rem; height: 10rem;" class="mb-2"></div>
        <button type="button" class="btn btn-dark" @click.prevent="handlerAdd( dataDetail.id )">Add to Favorite</button>
      </div>
    </div> 
  </div>
</div>

<div v-if="page === 'FavoritePage'" class="card mb-3" style="max-width: 540rem; height: 20rem;">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="favorite.Movie.imgUrl" class="img-fluid rounded-start">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ favorite.Movie.title }}</h5>
        <p class="card-text">{{ favorite.Movie.synopsis }}</p>
        <button type="button" class="btn btn-dark" @click.prevent="handlerDelete( favorite.id )">Remove to Your Favorite</button>
      </div>
    </div> 
  </div>
</div>
</template>

<script>
  import { mapActions, mapState } from 'pinia';
  import { useMoviesStore } from '../stores/mainStores';

  export default {
      data() {
        return {
          page: 'DetailMoviesPage'
        }
      },
      props: ['dataDetail', 'page', 'favorite'],
      methods: {
        ...mapActions(useMoviesStore, ['addFavorite', 'deleteFavorite', 'generateQrCode']),

        handlerAdd() {
          this.addFavorite(this.$route.params.id)
        },
        handlerDelete(id) {
          this.deleteFavorite(id)
        }
      },
      computed: {
        ...mapState(useMoviesStore, ['dataQrCode'])
      },
      created() {
          this.generateQrCode(window.location.href)
      }

  }
</script>

<style>

</style>