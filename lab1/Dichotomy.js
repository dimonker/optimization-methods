const func = Math.sin;
let a = -(Math.PI / 2);
let b = (Math.PI / 2);
const eps = 0.01;
const delta = eps / 4;
let counter = 0;

let [x1, x2] = [0, 0];

function dikhotomy() {
    /* 
    Пока интервал неопределенности не будет меньше 
    эпсилон, мы не закончим цикл вычисления интервала.
    */
    while (b - a > eps) {
        /*
        С каждым шагом заново вычисляем две точки 
        */
        x1 = (a + b) / 2 - delta;
        x2 = (a + b) / 2 + delta;     

        if (func(x1) > func(x2)) {
            a = x1; // Отбрасываем левую часть
        } else if (func(x1) <= func(x2)) {
            b = x2; // Отбрасываем правую часть
        }
        counter += 2;
    }
    /* 
    Выводим значение функции в 
    точке из полученного интервала 
    */
    console.log((a + b) / 2);
    console.log('Вычислений функции сделано: ' + counter);
    
}

dikhotomy();