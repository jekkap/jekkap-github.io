window.addEventListener('mousemove', function (e) {
    this.document.getElementById('x-value').textContent = e.x;
    this.document.getElementById('y-value').textContent = e.y;
});

function changeNight(fileName) {
    let background = document.querySelector("#day")
    background.classList.add('night');
}

function changeDay(fileName) {
    let background = document.querySelector("#day")
    background.classList.remove('night');
}

const heli = document.getElementById('helicopter')

document.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const newX = x - heli.width * 2;
    const newY = y - heli.width * 2;

    heli.style.transform = `translate(${newX}px, ${newY}px)`;
})