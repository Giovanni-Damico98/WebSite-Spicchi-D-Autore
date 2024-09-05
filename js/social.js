console.log("JSOK");
const backButtonDiv = document.getElementById("back-button-div");
const facebook = document.getElementById("facebook");
const instagram = document.getElementById("instagram");
const tiktok = document.getElementById("tiktok");

setTimeout(() => {
  backButtonDiv.classList.add("animate");
  facebook.classList.add("animate");
  instagram.classList.add("animate");
  tiktok.classList.add("animate");
}, 1); // 100ms di ritardo per un effetto più fluido
