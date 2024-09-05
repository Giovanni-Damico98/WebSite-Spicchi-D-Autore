// Attendi che la pagina sia completamente caricata prima di avviare l'animazione del logo
const logoDiv = document.getElementById("logo-div");
const leftHrefDiv = document.getElementById("left-href");
const rightHrefDiv = document.getElementById("right-href");

setTimeout(() => {
  logoDiv.classList.add("animate");
  leftHrefDiv.classList.add("animate");
  rightHrefDiv.classList.add("animate");
}, 100); // 100ms di ritardo per un effetto più fluido

// MOBILE
const mobileRightHref = document.getElementById("mobile-right-href");
const mobileLeftHref = document.getElementById("mobile-left-href");
const mobileLogo = document.getElementById("mobile-logo");
setTimeout(() => {
  mobileLogo.classList.add("animate");
  mobileRightHref.classList.add("animate");
  mobileLeftHref.classList.add("animate");
}, 100); // 100ms di ritardo per un effetto più fluido
