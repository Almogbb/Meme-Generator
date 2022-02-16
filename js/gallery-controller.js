'use strict'


function renderImages() {
    const images = getImages();
    let strHTML = images.map(image => {
        return `<div class="meme-option">
        <img data-img="${image.id}" class="image image${image.id}" src="./meme-imgs-square/${image.url}.JPG" onclick="onImgClick(this)">
        </div>`
    })
    const elDiv = document.querySelector('.meme-images');

    elDiv.innerHTML = strHTML.join('')
    console.log(images);
}