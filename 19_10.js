/*
Print the value of the roman letter

Input: XLVIII
Output: 48

Roman = {    "I": 1,    "V": 5,    "X": 10,    "L": 50,    "C": 100,    "D": 500,    "M": 1000   }

*/


const input='XII';
let val;
function conversion(input){
    let obj={"I": 1,"V": 5,"X": 10,"L": 50,"C": 100,"D": 500,"M": 1000};
    val=obj[input[0]];
    for(let i=1;i<input.length;i++){
        let previous=obj[input[i-1]];
        let current=obj[input[i]];
        if(previous>=current){
            val=val+current;
        }
        else{
            val=val-previous+(current-previous)
        }
    }
}
conversion(input)
console.log("final result: ",val);