// Cho số nguyên n bất kỳ. 
// Viết chương trình in các số chẵn trong khoảng 1 đến n.
// Viết chương trình in các số nguyên tố trong khoảng 1 đến n

let n = 2;

console.log(checkEvenNum(n));
console.log(kiemTraSNT(n));


function checkEvenNum(n){
    return n % 2 === 0;
}

function kiemTraSNT(n){
    for (let i = 2; i < n; i++){
        if (n % i === 0){
            return false;
        }
    }
    if (n<2){
        return false;
    }
    return true;
} 