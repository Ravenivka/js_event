
let i = 1;

function next(number) {
    if (number == 4) {
        return 1;
    }
    return number + 1;
}
function prev(number) {
    if (number == 1) {
        return 4;
    }
    return number - 1;
}

const left_button = document.querySelector('.left') ;
left_button.addEventListener('click', function(){
    i = prev(i);
    const link = '#carousel__slide' + i;
    window.location.href = link;
});

const right_button = document.querySelector('.right') ;
right_button.addEventListener('click', function(){
    i = next(i);
    const link = '#carousel__slide' + i;
    window.location.href = link;
});

const button_array = document.querySelectorAll('.carousel__navigation-button');

for (let j = 0; j < 4; j++) {
    const item = button_array[j];
    item.addEventListener('click', function() {
        i = j + 1;
    });
   
}

