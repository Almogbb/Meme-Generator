'use strict'

const memesSentences = [
    'I never eat falafel',
    'DOMS DOMS EVERYWHERE',
    'Stop Using i in for loops',
    'Armed in knowledge',
    'Js error "Unexpected String"',
    'One does not simply write js',
    'I want to have fun again!!',
    'I want my BOBO',
    'May the force be with you',
    'I know JS',
    'everyone',
    'I like butter',
    'But if we could',
    'JS what is this?',
    'I lost all my hobbies',
];


var gImageCounter = 1;
var gImages;
var gIsSecondLine = false;
createImages()
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,

    lines: [{
        text: 'I like butter',
        size: 32,
        lineWidth: 1,
        align: 'center',
        color: 'red',
        font: 'Arial',
        strokeColor: 'black',
        location: { x: 150, y: 150 }
    }]
}
const gCurrLine = gMeme.selectedLineIdx;

/////////////////////////////////////////////////////////////////////////





function getNewLine() {
    if (gMeme.selectedLineIdx > 2) return;
    //position in gMeme
    const posY = gIsSecondLine ? (400) : (150);

    gMeme.lines.length === 0 ? gMeme.selectedLineIdx++ : gMeme.selectedLineIdx === 0;
    gMeme.lines.push({
        text: 'I want my BOBO',
        size: 32,
        lineWidth: 1,
        align: 'center',
        color: 'black',
        font: 'Arial',
        strokeColor: 'black',
        location: { x: 400, y: posY }
    })
    gMeme.selectedLineIdx = gMeme.lines.length - 1;
    gIsSecondLine = true
    // console.log(gMeme.selectedLineIdx);
    console.log(MEME);


}

function removeLine() {
    if (!gMeme.selectedLineIdx) return;

    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
    gMeme.selectedLineIdx--;
    var removeElement = document.querySelector('.meme-line2')
    if (removeElement) removeElement.remove();
    // console.log(gMeme.selectedLineIdx);
    // console.log(MEME);
}





///////////////////////////////////////////////////////////////////////




function setLineText(textInput) {
    gMeme.lines[gCurrLine].text = textInput;
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
}

function setFontColor(val) {
    gMeme.lines[gCurrLine].color = val;
}

function setStrokeColor(val) {
    gMeme.lines[gCurrLine].strokeColor = val;
}

function setFontSizeInc() {
    gMeme.lines[gCurrLine].size++;
}

function setFontSizeDec() {
    gMeme.lines[gCurrLine].size--;
}

function setLocation(pos) {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    gMeme.lines[gCurrLine].align = pos;
    renderMeme(gMeme.selectedImgId);
}

function createImages() {
    var images = [];

    for (let i = 0; i < 11; i++) {
        images.push(createImage())
    }
    gImages = images;
}

function createImage() {
    return {
        id: makeId(),
        url: `../../img/${gImageCounter++}.jpg`,
        // keywords: ['funny', 'dog']
    }
}

function getImages() {
    return gImages;
}

function getMeme() {
    return gMeme;
}
function getCurrLine() {
    return gCurrLine;
}
