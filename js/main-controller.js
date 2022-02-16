'use strict'

var gElCanvas;
var gCtx;
let MEME = getMeme();


function init() {
    gElCanvas = document.querySelector('.my-canvas');
    gCtx = gElCanvas.getContext('2d');
    renderImages();
    getRandomSentence();
    addListeners();
}


function onImgClick(elImg) {

    var memeId = getImageByData(elImg);
    MEME.selectedImgId = memeId.id;

    const elGallery = document.querySelector('.gallery-container');
    // elGallery.style.visibility = 'hidden';

    //to do clear placeholder

    gElCanvas.removeAttribute("hidden");
    renderMeme(elImg);
    renderCanvas(elImg)
}

function renderMeme(elImg) {
    MEME.selectedImgId = elImg.id;


}
function renderCanvas() {

    // const img = document.querySelector(`.img${}`);

    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height);

}



function renderMeme(elImg) {
    createMeme(elImg)
}

function renderSentence() {
    const line = getRandomSentence()

    gCtx.fillStyle = "#080808";
    gCtx.font = "3.125em Arial";
    gCtx.fillText(line, 50, 50);
}


function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
}


function drawText() {

    var text = document.querySelector('.meme-line').value;
    // gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    // renderCanvas()
    // gCtx.strokeText = "#080808";
    gCtx.font = "3.125em Arial";
    gCtx.fillText(text, 50, 50);
}


// function renderCanvas() {

//     gCtx.save();
//     gCtx.fillRect(img, gElCanvas.width, gElCanvas.height);
//     gCtx.restore();
// }


function addListeners() {
    var elInput = document.querySelector('.meme-line');

    // gElCanvas.addEventListener('mousemove', onMove)
    // gElCanvas.addEventListener('mousedown', onDown)
    // gElCanvas.addEventListener('mouseup', onUp)
    elInput.addEventListener("keyup", drawText, true);

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
