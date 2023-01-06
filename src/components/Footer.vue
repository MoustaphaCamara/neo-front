<template>
  <div class="footer-container">
    <img
      src="https://i.ibb.co/JrhTCp2/logo-neosettlers.png"
      alt="logo-footer"
      class="logo-footer"
    />
    <div>
      <ul class="info-container">
        <li class="info">About us</li>
        <li class="info">Newsletter</li>
        <li class="info">Investors</li>
        <li class="info">Career</li>
        <li class="info">Other projects</li>
        <li class="info">Contact</li>
      </ul>
      <ul class="term-container">
        <li class="term">Privacy Policy</li>
        <li class="term">Capitalism Statement</li>
        <li class="term">Personal Informations</li>
        <li class="term">Privacy Policy</li>
        <li class="term">Privacy Policy</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer-container {
  width: 100vw;
  height: auto;
  /* max-height: 25vh; */
  background: black;
  color: #bea684;
  padding: 16px;
  text-align: center;
}
.logo-footer {
  width: 100px;
  height: 100px;
}
.info-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 16px;
}
.info-container .info {
  text-transform: uppercase;
  font-weight: bolder;
}
</style>
