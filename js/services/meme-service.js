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
        location: { x: 250, y: 150 }
    }]
}
const gCurrLine = gMeme.selectedLineIdx;

/////////////////////////////////////////////////////////////////////////

function getNewLine() {

    gMeme.lines.length === 0 ? gMeme.selectedLineIdx++ : gMeme.selectedLineIdx === 0;
    gMeme.lines.push({
        text: 'I want my BOBO',
        size: 32,
        lineWidth: 1,
        align: 'center',
        color: 'black',
        font: 'Arial',
        strokeColor: 'black',
        location: { x: 400, y: 400 }
    })
    gMeme.selectedLineIdx = gMeme.lines.length - 1;
    gIsSecondLine = true
}

function removeLine() {

    gMeme.lines.splice(gMeme.length - 1, 1);
    gMeme.selectedLineIdx--;
    var removeElement = document.querySelector('.meme-line-1');
    if (removeElement) removeElement.remove();
}

///////////////////////////////////////////////////////////////////////

function setLineText(textInput) {
    gMeme.lines[gMeme.selectedLineIdx].text = textInput;
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
}

function setFontColor(val) {
    gMeme.lines[gMeme.selectedLineIdx].color = val;
}

function setStrokeColor(val) {
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = val;
}

function setFontSizeInc() {
    gMeme.lines[gMeme.selectedLineIdx].size++;
}

function setFontSizeDec() {
    gMeme.lines[gMeme.selectedLineIdx].size--;
}

function setLocation(pos) {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    gMeme.lines[gMeme.selectedLineIdx].align = pos;
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
        url: `img/${gImageCounter++}.jpg`,
        // url: `../../img/${gImageCounter++}.jpg`,
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
