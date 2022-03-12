const inputs = document.querySelectorAll(".formapp__input");
const password = document.querySelector(".password__input");
const passwordToggle = document.querySelector(".formapp__input--aya");
const singBtn = document.querySelectorAll(".formapp__toggleBtn");
const main = document.querySelector("main");
const images = document.querySelectorAll(".image");
const bullets = document.querySelectorAll(".carousel__bullets span");

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.classList.add("active");
  });

  input.addEventListener("blur", () => {
    if (input.value != "") return;
    input.classList.remove("active");
  });
});

// ============= Show and Hidden the Password=============
passwordToggle.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    passwordToggle.classList.remove("fa-eye-slash");
    passwordToggle.classList.add("fa-eye");
  } else {
    password.type = "password";
    passwordToggle.classList.add("fa-eye-slash");
    passwordToggle.classList.remove("fa-eye");
  }
});

// ====================== Move forme ==========================
singBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("singUp__mode");
  });
});

// ======================= slider ==========================

function moveSlider() {
  let index = this.dataset.value;
  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".carousel__textGroup");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => {
    bull.classList.remove("active");
    this.classList.add("active");
  });
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});
