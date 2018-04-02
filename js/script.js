var open = document.querySelector(".write-us-button");
var modal = document.querySelector(".modal-write-us");
var close = modal.querySelector(".modal-close");
var mapOpen = document.querySelector(".map");
var map = document.querySelector(".modal-map");
var mapClose = map.querySelector(".modal-close");
var userName = modal.querySelector("[name=user-name]");
var form = modal.querySelector("form");
var email = modal.querySelector("[name=email]");
var letter = modal.querySelector("[name=letter]");

open.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  userName.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  map.classList.remove("modal-show");
});

mapOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains("modal-show")) {
        modal.classList.remove("modal-show");
      }
    }
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  evt.preventDefault();
  if (map.classList.contains("modal-show")) {
    map.classList.remove("modal-show");
  }
}
});

form.addEventListener("submit", function (evt) {
    if (!userName.value || !email.value) {
      evt.preventDefault();
      modal.classList.remove("modal-error");
      modal.offsetWidth = modal.offsetWidth;
      modal.classList.add("modal-error");
    }
});