let index = 1;
let sliderImages = ['./assets/images/banner1.jpg', './assets/images/banner8.jpg'];
let imageLength = sliderImages.length;
let imageId = document.getElementById('slider1');
handleChangeImage = function () {
    imageId.src = sliderImages[index];
    index++;
    if(index === imageLength) {
        index = 0;
    }
}
setInterval(handleChangeImage, 3000);
