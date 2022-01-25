let input  = prompt("Введите цифру для подсчета факториала:   ");
let rezult = input.match(/\d+/g);

let s = 1;
function fact(rezult) {
    if (rezult === 0) return;
    s = s * rezult;
    fact(rezult - 1);
}

fact(rezult);
document.write(s);