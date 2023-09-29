document.addEventListener('DOMContentLoaded', init);

function init(){
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const toyotaWindow = document.querySelector(".toyotaWindow");
const toyotaCars = toyotaWindow.querySelectorAll("img");
const toyotaBtn = document.getElementById("toyota");
const bmwBtn = document.getElementById("bmw");
const porscheBtn = document.getElementById("porsche");

toyotaCars.forEach((toyotaCars) => {
    toyotaCars.classList.add("hide");
});

toyotaCars[0].classList.remove("hide");

toyotaBtn.addEventListener("click", toyotaChange);
bmwBtn.addEventListener("click", bmwChange);
porscheBtn.addEventListener("click", porscheChange);
next.addEventListener("click", changeImg);
prev.addEventListener("click", changeImg);

}

function toyotaChange() {
    const carBrand = document.getElementById("carBrand")
    carBrand.innerHTML = "Toyota";
}

function bmwChange() {
    const carBrand = document.getElementById("carBrand")
    carBrand.innerHTML = "BMW";
}

function porscheChange() {
    const carBrand = document.getElementById("carBrand")
    carBrand.innerHTML = "Porsche";
}

function changeImg(e) {
    e.preventDefault();

    const toyotaWindow = document.querySelector(".toyotaWindow");
    const toyotaCars = toyotaWindow.querySelectorAll("img");
    let curImg = document.querySelector(".curImg");
    let nextImg = "";
    
    if(e.target.id === 'next') {
        nextImg = curImg.nextElementSibling;
    }

    curImg.classList.toggle("hide")
    curImg.classList.toggle("curImg")
    nextImg.classList.toggle("hide")
    nextImg.classList.toggle("curImg")

    console.log(nextImg)
}

