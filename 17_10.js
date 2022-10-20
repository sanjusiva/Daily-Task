//Do a recursion to print the multiple of 2 for N numbers.

let n=5000;
let res=1;
function mul(n){
    if(n>0){
        res=(2*res);
        mul(n-1)
    }
}

mul(n)
console.log(res);