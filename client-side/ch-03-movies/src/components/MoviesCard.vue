<template>
        <div class="col-lg-6 col-xl-3 mb-4">
            <RouterLink :to="'/movies/' + movie.id">
                <div class="card text-white bg-dark h-100">
                    <img :src="movie.imgUrl"
                        class="card-img-top">
                    <div class="card-body">
                        <p class="card-text">{{ movie.title }}</p>
                    </div>
                </div>
            </RouterLink>
        </div>
</template>

<script>
export default {
    props: ['movie']
}
</script>

<style></style>