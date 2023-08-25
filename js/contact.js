// تغيير اللغات

const select = document.querySelector("select.lang");

select.addEventListener("change", Change);
// console.log("select", select);

function Change(event) {
  const current = event.target;
  if (current.value === "En") {
    window.location.href = "/Cars-Store/contact.html";
  } else if (current.value === "Ar") {
    window.location.href = "/Cars-Store/contact.Ar.html";
  }
}
