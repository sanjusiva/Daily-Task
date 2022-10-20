
/*
if a=10,b=10,then print 20 after 1sec

function add(a, b) {
    setTimeout(() => { return a + b }, 1000);
   }

*/

function add(a, b) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(a + b), 1000);
    })
}
add(10, 10).then((v)=>console.log(v));
