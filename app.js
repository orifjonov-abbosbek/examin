
// var elNavItems = document.querySelectorAll(".sitenav__item");
// var elNavLinks = document.querySelectorAll(".sitenav__link");

// elNavLinks.forEach((link) => {
//     link.addEventListener("click", function(){
//         elNavItems.forEach(function(item){
//             item.classList.remove("sitenav__item--active");
//         })

//         link.parentElement.classList.add("sitenav__item--active");
//     })
// })


var elBtn = document.querySelector(".end-wrapper__request-link");
var elCloseBtn = document.querySelector(".modal-close");
var elModal = document.querySelector(".modal");


elBtn.addEventListener("click", function() {
    elModal.classList.add("modal-open");
    // elModal.style.display = "flex";
});

elCloseBtn.addEventListener("click", function() {
    elModal.classList.remove("modal-open");
});

window.onclick = function(e) {
    // console.log(e.target)
    if(e.target == elModal){
        elModal.classList.remove("modal-open");
    }
};