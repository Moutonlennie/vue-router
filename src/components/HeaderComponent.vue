<script>
    export default {
        data() {
            return {
                mainHeading: "Welcome",
                subHeading: "Find you preferred sneakers now",
                buttonText: "Buy now"
            }
        },
        props: {
            mainTitle: String,
            subTitle: String
        },
        methods: {
            ProductPage() {
                this.$router.push('Product')
            }
        },
    }
</script>

<template>
    <header class="header">
        <div class="brand">
            <a href="#" class="logo">
                <i class="fas fa-shoe-prints"></i>
            </a>
            <div>
                <h1 class="main-name">{{ mainTitle }}</h1>
                <p class="sub-name">{{ subTitle }}</p>
            </div>
        </div>
        <div class="header-banner">
            <h1 class="main-heading">{{ mainHeading }}</h1>
            <h3 class="sub-heading">{{ subHeading }}</h3>
            <button type="button" class="main-button" v-on:click="ProductPage()">{{ buttonText }}</button>
        </div>
    </header>
</template>