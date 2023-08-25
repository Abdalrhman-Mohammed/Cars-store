const select = document.querySelector("select.lang");

select.addEventListener("change", Change);
// console.log("select", select);

function Change(event) {
  const current = event.target;
  if (current.value === "En") {
    window.location.href = "/Cars-store/";
  } else if (current.value === "Ar") {
    window.location.href = "/Cars-store/index.Ar.html";
  }
}
