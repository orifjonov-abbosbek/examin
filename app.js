var elIMG = document.querySelector(".site-nav-img")
var elLink = document.querySelectorAll(".site-nav-link")



elLink.forEach((el) => {
    el.addEventListener("click", () => {
        elIMG.style.display = "none"
    })
})