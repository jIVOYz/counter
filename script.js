let result = document.getElementById('result');
let integer = 0;

let add = document.getElementById('plus');
let remove = document.getElementById('minus');
let reset = document.getElementById('reset');

    add.addEventListener("click", function () {
        integer += 1;
        result.innerHTML = integer;
    });


    remove.addEventListener("click", function () {
        integer -= 1;
        result.innerHTML = integer;
    });

    reset.addEventListener("click", function () {
        integer = 0;
        result.innerHTML = integer;
    });

// Save Result 
