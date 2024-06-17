const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnclose = document.querySelector(".close-modal");
const btnopen = document.querySelectorAll(".show-modal");
console.log(btnopen);
for (let i = 0; i < btnopen.length; i++) {
  btnopen[i].addEventListener("click", function () {
    console.log("Button Clicked..");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

// btnclose.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

// overlay.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

const closemodal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnclose.addEventListener("click", closemodal);
overlay.addEventListener("click", closemodal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape") {
    // if (!modal.classList.contains("hidden")) {
    //   closemodal();
    // }
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
