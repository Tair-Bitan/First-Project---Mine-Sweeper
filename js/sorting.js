console.log('09-sorts');

// var vals = [34, 203, 3, 746, 200, 984, 198, 764, 9];
var vals = getLargeArray();


// var start = Date.now();
console.time('bubble sort');
bubbleSort(vals);
// var end = Date.now();
// console.log('Took me: ', end-start,  'ms');
console.timeEnd('bubble sort');


console.time('merge sort');
mergeSort(vals);
console.timeEnd('merge sort');

console.time('array sort');
// O(N LOGN)
vals.sort(numsComperator);
console.timeEnd('array sort');

// should return:
// POSITIVE if num1 > num2
// NEGATIVE if num1 < num2
// ZERO if num1 === num2
function numsComperator(num1, num2) {
    return num1 - num2;
}
// function playersComperator(p1, p2) {
//     return p1.score - p2.score;
// }


function getLargeArray() {
    var length = 60000
    var res = [];
    for (var i = 0; i < length; i++) res.push(length - i);
    return res;
}

// O(N**2)
// O(1000) => 1,000,000
function bubbleSort(items) {
    var swapped = true;
    while (swapped) {
        swapped = false;
        for (var i = 0; i < items.length - 1; i++) {
            if (items[i] > items[i + 1]) {
                var temp = items[i];
                items[i] = items[i + 1];
                items[i + 1] = temp;
                swapped = true;
            }
        }
    }
}

// O(N * LOG2N)
// N=== 1000 => 1000 * 10 === 10,000

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    var middle = parseInt(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle, arr.length);
    // N(LOG N)
    return merge(mergeSort(left), mergeSort(right));
}


// This function merges 2 sorted arrays into a single array
function merge(arr1, arr2) {
    var result = [];
    // while there are items in both arrays
    while (arr1.length && arr2.length) {
        // push the smaller
        if (arr1[0] <= arr2[0]) {
            result.push(arr1.shift());
        } else {
            result.push(arr2.shift());
        }
    }
    // Add the remaining items
    while (arr1.length) result.push(arr1.shift());
    while (arr2.length) result.push(arr2.shift());

    return result;
}

