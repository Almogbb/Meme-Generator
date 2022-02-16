'use strict'

var gElCanvas;
var gCtx;

function init() {
    gElCanvas = document.querySelector('.my-canvas');
    gCtx = gElCanvas.getContext('2d');
    renderImages();
    getRandomLine()
    addListeners()
}


// function randomMeme() {
//     drawImg2()
// }


// function drawImg2() {
//     const image = getImages();
//     let idx = Math.trunc(getRandomInt(0, image.length - 1));
//     var img = new Image();
//     img.onload = () => {
//         gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
//     };

//     img.src = `meme-imgs-square/${image[idx].url}.jpg`;
// }



// renderMeme()
// function renderMeme() {
//     let img = randomImage();
//     console.log(img);
//     gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
// }


function renderImages() {
    const images = getImages();

    let strHTML = images.map(image => {
        return `<div class="meme-option">
        <img data-img="${image.id}" class="image" src="/meme-imgs-square/${image.url}.jpg" onclick="onImgClick(this)">
    </div>`
    })
    const elDiv = document.querySelector('.meme-images');
    elDiv.innerHTML = strHTML.join('')
}

function onImgClick(elImg) {
    console.log(elImg);
    const elGallery = document.querySelector('.gallery-container');
    // elGallery.style.visibility = 'hidden';

    //to do clear placeholder

    gElCanvas.removeAttribute("hidden");
    renderMeme(elImg);

}

function renderMeme(elImg) {
    createMemes(elImg)
    // renderSelectedImg(elImg);
}
//maybe delete one
function renderSelectedImg(elImg) {
    setImage(elImg);
}

function renderLine() {
    const line = getRandomLine()

    gCtx.fillStyle = "#080808";
    gCtx.font = "3.125em Arial";
    gCtx.fillText(line, 50, 50);
}



function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
}




function draw() {

    var text = document.querySelector('.meme-line').value;
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    renderCanvas(elImg)
    gCtx.fillStyle = "#080808";
    gCtx.font = "3.125em Arial";
    gCtx.fillText(text, 50, 50);
}

function renderCanvas() {
    gCtx.save();
    gCtx.fillStyle = "#ede5ff";
    gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height);
    renderMeme();
    gCtx.restore();
}


function addListeners() {
    var elInput = document.querySelector('.meme-line');

    // gElCanvas.addEventListener('mousemove', onMove)
    // gElCanvas.addEventListener('mousedown', onDown)
    // gElCanvas.addEventListener('mouseup', onUp)
    elInput.addEventListener("keyup", draw, true);

    // window.addEventListener('resize', () => {
    //     resizeCanvas()
    //     renderCanvas()
    // })
}

// function addMouseListeners() {
//     gElCanvas.addEventListener('mousemove', onMove)
//     gElCanvas.addEventListener('mousedown', onDown)
//     gElCanvas.addEventListener('mouseup', onUp)
// }
