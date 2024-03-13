let posX = 0;
let posY = 0;

function moveBoneco(x, y) {
    document.getElementById(`pos-${posX}x${posY}`).innerHTML = "";
    posX += x;
    posY += y;
    posX = Math.min(Math.max(posX, 0), 9);
    posY = Math.min(Math.max(posY, 0), 9);
    document.getElementById(`pos-${posX}x${posY}`).innerHTML = '<img src="boneco.png" style="width: 100%; height: 100%;">';
}

document.getElementById("btn-up").addEventListener("click", () => moveBoneco(-1, 0));
document.getElementById("btn-left").addEventListener("click", () => moveBoneco(0, -1));
document.getElementById("btn-right").addEventListener("click", () => moveBoneco(0, 1));
document.getElementById("btn-down").addEventListener("click", () => moveBoneco(1, 0));
