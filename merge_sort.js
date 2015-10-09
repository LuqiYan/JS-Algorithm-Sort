'use strict';
/* merge sort */
function merge_sort(arr){
    var mid = Math.floor(arr.length /2);
    var sort_result = [];
    if(arr.length === 1){
        return arr;
    }
    function sort(left, right){
        while(left.length && right.length){
            sort_result.push(left[0] < right[0] ? left.shift() : right.shift());
        }
        return sort_result.concat(left).concat(right);
    }
    return sort(merge_sort(arr.slice(0,mid)), merge_sort(arr.slice(mid)));
}
console.log(merge_sort([5,1,4,2,8]));
console.log(merge_sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));