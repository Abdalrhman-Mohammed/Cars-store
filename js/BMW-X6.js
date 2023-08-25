// تغير الصور

const options = document.querySelectorAll(".option");

options[0].classList.add("active");

options.forEach((elem) => {
  elem.addEventListener("click", addClass);
});

function addClass(event) {
  const current = event.target;
  options.forEach((elem) => {
    elem.classList.remove("active");
  });
  current.classList.add("active");
}
// تغيير بين السعر و الموصفات
const price = document.querySelector("#price"),
  table = document.querySelector("#table"),
  li = document.querySelectorAll(".tap");
li.forEach((el) => el.addEventListener("click", Switch));

li[0].classList.add("active-ta");
if (li[0].classList.contains("active-ta")) {
  price.style.display = "block ";
}
function Switch() {
  li.forEach((el) => el.classList.remove("active-ta"));

  this.classList.add("active-ta");
  if (this.getAttribute("data") === "price") {
    table.style.display = "none";
    price.style.display = "block";
  } else if (this.getAttribute("data") === "table") {
    price.style.display = "none";
    table.style.display = "block";
  }
}

// تغيير اللغات

const select = document.querySelector("select.lang");

select.addEventListener("change", Change);
// console.log("select", select);

function Change(event) {
  const current = event.target;
  if (current.value === "En") {
    window.location.href = "/BMW-X6.html";
  } else if (current.value === "Ar") {
    window.location.href = "/BMW-X6.Ar.html";
  }
}
