'use strict'
const memesSentences = [
    'I never eat falafel',
    'DOMS DOMS EVERYWHERE',
    'Stop Using i in for loops',
    'Armed in knowledge',
    'Js error "Unexpected String"',
    'One does not simply write js',
    'I`m a simple man i see vanilla JS, i click like!',
    'JS, HTML,CSS?? Even my momma can do that',
    'May the force be with you',
    'I know JS',
    'JS Where everything is made up and the rules dont matter',
    'Not sure if im good at programming or good at googling',
    'But if we could',
    'JS what is this?',
    'Write hello world , add to cv 7 years experienced',
];

var gImageCounter = 1;
var gImages;
// var gMemes;
createImages()

// var gImg = [{
//     id: 1,
//     url: '',
//     keywords: ['funny', 'dog']
// }]

var gMeme = {
    selectedImgId: 5,
    line: getRandomSentence(),

    lines: [{
        size: 16,
        align: 'center',
        color: 'red'
    }]
}

function createMeme(elImg) {
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height);
}

// function getImageById(elImg) {
//     console.log(elImg);
//     var image = gImages.find(image => image.id === elImg)

//     console.log(image);
//     return image;
// }

function getImageByData(elImg) {
    var img = gImages.find(image => image.id === elImg.dataset.img);

    return img;
}

function getRandomSentence() {
    let idx = Math.trunc(getRandomInt(1, memesSentences.length));
    return memesSentences[idx]
}


function getImgIdx() {
    let idx = Math.trunc(getRandomInt(0, gImages.length - 1));
    return idx;
}

// function randomImage() {
//     let idx = Math.trunc(getRandomInt(0, gImages.length - 1));
//     // const image = `<img src="/meme-imgs-square/${idx}.jpg"`
//     const image = `<img src="${gImages[idx].url}">`;
//     return image
//     // return memesSentences[idx]
// }

// function createMemes(id) {
//     let memes = [];

//     for (let i = 0; i < 1; i++) {
//         memes.push(createMeme(id))
//     }
//     gMemes = memes;
// }

// function createMeme(id) {

//     const meme = {
//         selectedImgId: id.id,
//         line: getRandomLine(),

//         lines: [{
//             size: 16,
//             align: 'left',
//             color: 'red'
//         }]
//     }
// }






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
        url: gImageCounter++
        // url: `/meme-imgs-square/${gImageCounter++}.jpg"`,
        // keywords: ['funny', 'dog']
    }
}

function setImage(elImg) {
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height);
}

function getImages() {
    return gImages;
}

function getMeme() {
    return gMeme;
}


////////////// FOR UPLOAD /////////////////////////

// function uploadImg() {
//     const imgDataUrl = gElCanvas.toDataURL("image/jpeg");

//     // A function to be called if request succeeds
//     function onSuccess(uploadedImgUrl) {
//         const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
//         console.log(encodedUploadedImgUrl);
//         document.querySelector('.user-msg').innerText = `Your photo is available here: ${uploadedImgUrl}`

//         document.querySelector('.share-container').innerHTML = `
//         <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
//            Share
//         </a>`
//     }

//     doUploadImg(imgDataUrl, onSuccess);
// }

// function doUploadImg(imgDataUrl, onSuccess) {

//     const formData = new FormData();
//     formData.append('img', imgDataUrl)

//     fetch('//ca-upload.com/here/upload.php', {
//         method: 'POST',
//         body: formData
//     })
//         .then(res => res.text())
//         .then((url) => {
//             console.log('Got back live url:', url);
//             onSuccess(url)
//         })
//         .catch((err) => {
//             console.error(err)
//         })
// }