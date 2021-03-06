
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
console.log(quick_sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));


/* selection sort */
function selection_sort(arr){
    var i, j, min, temp;
    for(i = 0; i < arr.length - 1; i++){
        min = i;
        for(j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(min !== i){
            temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}
console.log(selection_sort([5,1,4,2,8]));
console.log(selection_sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));


/* insertion sort */
function insertion_sort(arr){
    var i, j, temp;
    for(i = 0; i < arr.length; i ++){
        temp = arr[i];
        for(j = i - 1; j > -1 && arr[j] > temp; j--){
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    return arr;
}
console.log(insertion_sort([5,1,4,2,8]));
console.log(insertion_sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));


/* bubble sort */
function bubble_sort(arr){
    var i, temp;
    var swapped = true;
    while(swapped){
        swapped = false;
        for(i = 0; i < arr.length; i++){
            if(arr[i] > arr[i+1]){
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    }
    return arr;
}
console.log(bubble_sort([5,1,4,2,8]));
console.log(bubble_sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));


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