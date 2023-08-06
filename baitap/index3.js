//cho một số nguyên N, in đảo ngược số nguyên đó

let n = 1234

let str = ''

while(n > 0){
    let soCuoi = n % 10;
    str += soCuoi;
    n = Math.floor(n / 10);
}

console.log(+str);