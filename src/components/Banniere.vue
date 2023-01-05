<template>
    <div class="banner-container">
        <h1>986 111 offres d'emploi disponibles !</h1>
        <p>Rechercher des offres par planète ou par secteur d’activité.</p>
    </div>
</template>

<script>
    export default {
    name: "Banniere",
    };
</script>

<style>
    .banner-container {

    background-image: url(../assets/vadim-sadovski-2016-12-12-22-49-53.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    height: 400PX;
    padding: 50px;

    }

    h1, p {

    text-align: center;
    color: white;
    text-shadow: 1px 1px 1px #000;
    }
</style>