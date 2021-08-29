<template>
    <div class="card">
        <img :src="cardImage.url" :alt="cardImage.alt" class="card-img">
        <div class="card-heading">
            <h4>{{park.name}}</h4>
            <span class="gps-coords">
                {{park.latitude}} N {{park.longitude}} W
            </span>
        </div>
        <div class="card-content">
            <div class="card-subheading">
                <h5>Description</h5>
            </div>
            <div class="card-subcontent truncate" :title="park.description">
                {{park.description}}
            </div>
            <div class="card-subheading">
                <h5>Activities</h5>
            </div>
            <div class="card-subcontent">
                <ul>
                    <li v-for="activity of park.activities" :key="activity.id">{{activity.name}}</li>
                </ul>
            </div>
        </div>
        <div class="card-info">
            <div class="card-link">
                <a :href="park.url" target="_blank" class="btn">View More Information</a>
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