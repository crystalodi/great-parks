<template>
    <div class="card">
        <img :src="cardImage.url" :alt="cardImage.alt" class="card-img">
        <div class="card-title">
            <h4>{{park.name}}</h4>
        </div>
        <div class="card-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ipsa!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cum et tempore optio cumque laudantium aliquam nobis eveniet quibusdam ab.</p>
        </div>
        <div class="card-info">
            <div class="card-link">
                <a href="#">Visit Park</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: ["park"],
    data() {
        return {
            cardImage: {
                url: "",
                alt: ""
            }
        }
    },
    created () {
        this.cardImage = {
            url: this.park?.images[0].url,
            alt: this.park?.images[0].altText
        }
    },
}
</script>

<style lang="scss" scoped>
    @import "./card.scss";
</style>