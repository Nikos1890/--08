const sliderBtn = document.querySelectorAll('.products__slider__btn');
const sliderImg = document.querySelectorAll('.products__slider__img');

function slider() {
    for (let i = 0; i < sliderBtn.length; i++) {
        sliderBtn[i].addEventListener('click', () => {
            for (let j = 0; j < sliderImg.length; j++) {
                if (sliderBtn[i].dataset.slider === sliderImg[j].dataset.slider) {
                    sliderImg[j].classList.add('products__slider__img__active');
                    sliderBtn[j].classList.add('products__slider__btn__active');
                } else {
                    sliderImg[j].classList.remove('products__slider__img__active');
                    sliderBtn[j].classList.remove('products__slider__btn__active');
                }
            }
        })
    }
}

slider();