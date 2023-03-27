const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
dropdown.addEventListener("click", () => {
dropdown.querySelector(".dropdown-content").classList.toggle("show");
});
});

window.onclick = (e) => {
if (!e.target.matches(".dropdown")) {
const dropdowns = document.querySelectorAll(".dropdown-content");
dropdowns.forEach((dropdown) => {
if (dropdown.classList.contains("show")) {
dropdown.classList.remove("show");
}
});
}
};