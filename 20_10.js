/*
const arr = [10, 13, 15, 20, 35, 42, 57];
const search = 42;

search the given value from an array

use binary search
*/


const arr = [10, 13, 15, 20, 35, 42, 57];
const search = 42;
const length=arr.length;
const ans = check(arr, 0,length, search);
console.log(ans);

function check(arr, start,end, search) {
        let middle=Math.floor((start+end)/2);
        if (arr[middle] == search) {
            return middle;
        }
        else if (arr[middle] > search) {
            return check(arr, start, middle - 1, search)
        }
        else if(arr[middle] < search){
            return check(arr, middle + 1,end, search)
        }
        return "Not found"
}
