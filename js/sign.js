const signIn = document.querySelector("#login"),
  signUp = document.querySelector("#sign-up"),
  li = document.querySelectorAll(".tab");
li.forEach((el) => el.addEventListener("click", addClass));

li[0].classList.add("active");
if (li[0].classList.contains("active")) {
  signUp.style.display = "block ";
}
function addClass() {
  li.forEach((el) => el.classList.remove("active"));
  //   if()

  this.classList.add("active");
  if (this.getAttribute("data") === "sign-up") {
    signIn.style.display = "none ";
    signUp.style.display = "block ";
  } else if (this.getAttribute("data") === "sign-in") {
    signUp.style.display = "none";
    signIn.style.display = "block";
  }
}

// تغيير اللغات

const select = document.querySelector("select.lang");

select.addEventListener("change", Change);
// console.log("select", select);

function Change(event) {
  const current = event.target;
  if (current.value === "En") {
    window.location.href = "/Cars-Store/sign.html";
  } else if (current.value === "Ar") {
    window.location.href = "/Cars-Store/sign.Ar.html";
  }
}
