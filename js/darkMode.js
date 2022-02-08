const btn = document.querySelector(".mode");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  if (body.classList.contains("light-mode")) {
    btn.innerHTML = "&#9788;";
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
  } else {
    btn.innerHTML = "&#9790;";
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
  }
});
