'use strict'

var gElCanvas;
var gCtx;
const MEME = getMeme();
const currLine = getCurrLine()

function init() {
    gElCanvas = document.querySelector('.my-canvas');
    gCtx = gElCanvas.getContext('2d');
    renderImages();

    addListeners();
}


function renderMeme(id) {

    let text = MEME.lines[currLine].text;
    console.log(text);
    MEME.selectedImgId = id;
    // console.log('currLine', currLine);
    const elImg = document.querySelector(`.image-${MEME.selectedImgId}`);

    drawText(text);
    if (!elImg) return;
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height);
    drawText(text);
}

function drawText(text) {
    // gCtx.font = '48px serif';
    // gCtx.fillText(text, x, y);
    let line = MEME.lines[currLine];
    gCtx.lineWidth = 1
    gCtx.textAlign = line.align;
    gCtx.strokeStyle = line.strokeColor;
    gCtx.fillStyle = line.color;
    gCtx.font = `${line.size}px ${line.font}`
    gCtx.fillText(text, line.location.x, line.location.y);
    gCtx.strokeText(text, line.location.x, line.location.y);
}

function onInsertText() {
    let textInput = document.querySelector(`.meme-line-${currLine}`).value;
    console.log(textInput);
    setLineText(textInput);
    drawText(MEME.lines[currLine].text)
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
    // drawText(MEME.lines[0].text);
}

function onFontSizeInc3D() {
    setFontSizeInc()
    // renderMeme(MEME.selectedImgId);
    drawText(MEME.lines[currLine].text);
}

function onFontSizeDec() {
    setFontSizeDec()
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    renderMeme(MEME.selectedImgId);
    // drawText(MEME.lines[0].text);
}

function onTextLocation(pos) {
    setLocation(pos)
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);

    let currInput = document.querySelector(`.meme-line-${currLine}`);
    // if (!currInput) return
    currInput.value = ''
    // document.querySelector('.meme-line2').value = '';
}




function addListeners() {
    var elInput = document.querySelector(`.meme-line-${currLine}`);

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
    let currInput = document.querySelector(`.meme-line-${currLine}`);
    currInput.focus()
    console.log('MEME.selectedLineIdx', MEME.selectedLineIdx);
    console.log('MEME', MEME)
    // console.log('currLine', currLine);
    // gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    // renderMeme(MEME.selectedImgId);

}




function onAddLine() {

    getNewLine();
    renderMeme(MEME.selectedImgId)
    // const elInput = document.querySelector('.editor');
    // const strHTML = `<input name="INPUT" class="meme-line-1 line" type="text" placeholder="Enter your line">`;

    // elInput.innerHTML += strHTML;
    // console.log('MEME', MEME);
    // onInsertText()
}

function onRemoveLine() {
    removeLine();

    console.log('MEME', MEME);
    // renderMemeImg();
}



// function reRenderCanvas() {
//     renderImgCanvas(meme.selectedImgId);
//     document.querySelector('[name="meme-text"]').value = meme.lines[meme.selectedLineIdx].txt;
//     meme.lines.forEach(line => {
//         writeText(line);
//     })
// }
/////////////////////////////////////////////////////////////////////////////////