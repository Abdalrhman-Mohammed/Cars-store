// تغيير اللغات

const select = document.querySelector("select.lang");

select.addEventListener("change", Change);
// console.log("select", select);

function Change(event) {
  const current = event.target;
  if (current.value === "En") {
    window.location.href = "/contact.html";
  } else if (current.value === "Ar") {
    window.location.href = "/contact.Ar.html";
  }
}
