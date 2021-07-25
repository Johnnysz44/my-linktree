
const setupButton = document.getElementById("setup-button");
const goBackButton = document.getElementById("go-back-button");

setupButton.addEventListener("click", showContent);
goBackButton.addEventListener("click", hideContent);

function showContent() {
  document.getElementById("secondary-content").classList.remove("hide");
  document.getElementById("secondary-content").classList.add("show");
}

function hideContent() {
  document.getElementById("secondary-content").classList.remove("show");
  document.getElementById("secondary-content").classList.add("hide");
}
