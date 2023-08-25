const select = document.querySelector("select.lang");

select.addEventListener("change", Change);
// console.log("select", select);

function Change(event) {
  const current = event.target;
  if (current.value === "En") {
    window.location.href = "/Cars-Store/";
  } else if (current.value === "Ar") {
    window.location.href = "/Cars-Store/index.Ar.html";
  }
}
