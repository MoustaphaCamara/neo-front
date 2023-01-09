<template>
  <div class="footer-container">
    <img
      src="../assets/logo-neosettlers.png"
      alt="logo-footer"
      class="logo-footer"
    />
    <div class="footer">
      <ul class="info-container">
        <li class="info">About us</li>
        <li class="info">Newsletter</li>
        <li class="info">Investors</li>
        <li class="info">Career</li>
        <li class="info">Other projects</li>
        <li class="info">Contact</li>
      </ul>
      <div class="separator"></div>
      <ul class="term-container">
        <li class="term">Privacy Policy</li>
        <li class="term">Capitalism Statement</li>
        <li class="term">Personal Informations</li>
        <li class="term">Privacy Policy</li>
        <li class="term">Privacy Policy</li>
      </ul>
      <div class="separator"></div>
      <div class="social-container">
        <ul class="icons-container">
          <li><i class="icon fa-brands fa-facebook"></i></li>
          <li><i class="icon fa-brands fa-instagram"></i></li>
          <li><i class="icon fa-brands fa-linkedin"></i></li>
          <li><i class="icon fa-brands fa-twitter"></i></li>
        </ul>
      </div>
      <div class="separator"></div>
      <img
        src="https://www.elitedangerous.com/_nuxt/img/pegi-16-descriptors-elite-dangerous-odyssey.c10bd5c.svg"
        alt="pegi"
        class="pegi"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.footer-container {
  width: 100%;
  height: auto;
  /* max-height: 25vh; */
  background: black;
  color: var(--sable);
  padding: 16px;
  text-align: center;
}
.logo-footer {
  width: 100px;
  height: 100px;
}
.info-container,
.term-container {
  display: block;
  width: 30%;
  justify-content: space-between;
  padding: 16px;
}
.info,
.term {
  text-transform: uppercase;
  font-weight: bolder;
  transition: 0.5s ease;
  margin-top: 8px;
}
.info:hover,
.term:hover,
.icon:hover {
  color: var(--text-white);
  transform: scale(1.2);
  cursor: pointer;
}
.info:active,
.term:active,
.icon:active {
  transform: scale(2);
}
.social-container {
  width: 10%;
}

.icons-container {
  display: flex;
  justify-content: space-between;
}
.icon {
  font-size: 24px;
  transition: 0.3s ease;
}
.pegi {
  width: 100px;
  margin-left: 24px;
}
</style>
