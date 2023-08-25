const select = document.querySelector("select.lang");

select.addEventListener("change", Change);
// console.log("select", select);

function Change(event) {
  const current = event.target;
  if (current.value === "En") {
    window.location.href = "/";
  } else if (current.value === "Ar") {
    window.location.href = "/index.Ar.html";
  }
}
