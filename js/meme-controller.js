'use strict'

var gElCanvas;
var gCtx;
const MEME = getMeme();


function init() {
    gElCanvas = document.querySelector('.my-canvas');
    gCtx = gElCanvas.getContext('2d');
    renderImages();
    addListeners();
}


function renderMeme(id) {

    MEME.selectedImgId = id;
    let text = MEME.lines[MEME.selectedLineIdx].text;
    const elImg = document.querySelector(`.image-${MEME.selectedImgId}`);
    if (!elImg) return;
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height);
    drawText(text);

}

function drawText(text) {
    // gCtx.font = '48px serif';
    // gCtx.fillText(text, x, y);
    let line = MEME.lines[MEME.selectedLineIdx];
    gCtx.save();
    gCtx.lineWidth = 1
    gCtx.textAlign = line.align;
    gCtx.strokeStyle = line.strokeColor;
    gCtx.fillStyle = line.color;
    gCtx.font = `${line.size}px ${line.font}`
    gCtx.fillText(text, line.location.x, line.location.y);
    gCtx.strokeText(text, line.location.x, line.location.y);
    gCtx.restore()
}

function onInsertText() {
    let textInput = document.querySelector(`.meme-line-${MEME.selectedLineIdx}`).value;
    setLineText(textInput);
    drawText(textInput);
    renderMeme(MEME.selectedImgId);
}

function onFontColorChange(val) {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    setFontColor(val);
    setStrokeColor(val);
    renderMeme(MEME.selectedImgId);
}

function onFontSizeInc() {
    setFontSizeInc()
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    renderMeme(MEME.selectedImgId);

}

function onFontSizeDec() {
    setFontSizeDec();
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    renderMeme(MEME.selectedImgId);
}

function onTextLocation(pos) {
    setLocation(pos);
}

function onClearCanvas() {
    let currInput = document.querySelector(`.meme-line-${MEME.selectedLineIdx}`);
    currInput.value = '';
    renderMeme(MEME.selectedImgId)
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
}


function addListeners() {
    var elInput = document.querySelector(`.meme-line-${MEME.selectedLineIdx}`);

    // gElCanvas.addEventListener('mousemove', onMove)
    // gElCanvas.addEventListener('mousedown', onDown)
    // gElCanvas.addEventListener('mouseup', onUp)
    elInput.addEventListener("keyup", onInsertText);

    // window.addEventListener('resize', () => {
    //     resizeCanvas()
    //     renderCanvas()
    // })
}

/////////////////////////////////////////////////////////////////////////////////

function onSwitchText() {
    if (MEME.selectedLineIdx === MEME.lines.length - 1) MEME.selectedLineIdx = 0;
    else MEME.selectedLineIdx++;
    let currInput = document.querySelector(`.meme-line-${MEME.selectedLineIdx}`);
    currInput.focus()
}

function onAddLine() {
    if (MEME.selectedLineIdx === 1) return;

    getNewLine();
    const elInput = document.querySelector('.editor');
    let strHTML = `<input name="INPUT" class="meme-line-1 line" type="text" placeholder="Enter your line">`;

    elInput.innerHTML += strHTML;
    gCtx.save();
    renderMeme(MEME.selectedImgId);
}

function onRemoveLine() {
    removeLine();
    renderMeme(MEME.selectedImgId);
}
