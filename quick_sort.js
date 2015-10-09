'use strict';
/* quick sort */
function quick_sort(arr){
    if(arr.length === 0){
        return [];
    }
    var left = [], right = [];
    var pivot = arr[0];
    var i;
    for(i = 1; i < arr.length; i++){
        arr[i] < arr[0] ? left.push(arr[i]) : right.push(arr[i]);
    }
    return quick_sort(left).concat(pivot, quick_sort(right));
}
console.log(quick_sort([5,1,4,2,8]));
