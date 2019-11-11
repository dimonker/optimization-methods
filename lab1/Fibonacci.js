const func = (x => Math.pow(x-2, 2));
let a1,b1;
a1 = -2;
b1 = 20;
const eps = 0.05;
const forN = b1 - a1 / eps; // 440.
const n = findN();

//Функция для нахождения количества итераций.
function findN(){
    let i = 0;
    while(numbersFibo(i) < forN)
    {
        i++;
    }
    return i;
}
//Функция для вычисления результата исходной функции.
function resFunction(x){
    return func(x);
}

//Функция для нахождения числа Фибоначчи для n.
function numbersFibo(n){
    let Fn;
    const sqrt = Math.sqrt(5);
    if (n <= 1)
    {
        return n;
    }
    else{
        x1 = (1 + sqrt) / 2;
        y1 = (1 - sqrt) / 2;
        Fn = 1 / sqrt * ((Math.pow(x1, n)) - (Math.pow(y1, n)));
        return Fn;
    }
}
//Функция для сравнения результатов исходной функции с лямдой и U.
function comparison(k){
    return (resFunction(findLyamda(k)) > resFunction(findU(k)))
}
//Функция для нахождения Lymda(n).
function findLyamda(k){
    let nforLymbda = n-k;
    let lyamda = a1 + numbersFibo(nforLymbda-1)/numbersFibo(n+1) * (b1 - a1);
    return lyamda;
}
//Функция для нахождения U(n).
function findU(k){
    let nForU = n - k;
    let u = a1 + numbersFibo(nForU)/numbersFibo(nForU+1) * (b1 - a1);
    return u;
}

//Основная функция.
function methodFibo(){
    let k = 1;
    while(k < n){
        k++;
        if (comparison(k)){
            a1 = findLyamda(k);
            console.log("a" + k + "= "  + a1);
        }else{
            b1 = findU(k);
            console.log("b" + k + "= " + b1);
        }
    }
    let xMin = (a1 + b1) / 2;
    console.log("Итоговая граница a = " + a1);
    console.log("Итоговая граница b = " + b1);
    console.log('Хмин = ' + xMin);
    console.log('F(min) = ' + resFunction(xMin));
}

methodFibo();
