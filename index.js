//tinh tong cac so tu 0 den n
//tinh tong cac so nguyen to tu 0 den n
let n = 10;
let sum = 0;

for (let i = 0; i <= n; i++){
    if (kiemTraSNT(i)){
        sum = sum + i;
    }
    
}
console.log(sum);

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
