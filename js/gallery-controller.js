'use strict'

function renderImages() {
    var images = getImages();

    const strHTML = images.map(image => {
        return `<div class="meme-option">
        <img class="image image-${image.id}" src="${image.url}" onclick="onImgClick(${image.id})">
        </div>`
    })
    const elDiv = document.querySelector('.meme-images');

    elDiv.innerHTML = strHTML.join('');
}


function onImgClick(id) {
    const elGallery = document.querySelector('.gallery-container');
    elGallery.style.display = 'none';

    //to do clear placeholder

    const elEdit = document.querySelector('.edit-canvas');
    elEdit.style.display = 'block'

    renderMeme(id)
}

function onGallery() {
    const elGallery = document.querySelector('.gallery-container');
    elGallery.style.display = 'block';

    const elEdit = document.querySelector('.edit-canvas');
    elEdit.style.display = 'none'

    onClearCanvas();

}
