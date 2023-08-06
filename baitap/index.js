//cho một số N, kiểm tra xem số đó có phải số nguyên tố hay không

let n = 1;

let check = kiemTraSNT(n);
if(check){
    console.log(n + " là số nguyên tố");
}else{
    console.log(n + " không phải số nguyên tố");
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