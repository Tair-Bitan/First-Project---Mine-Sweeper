console.log('09-sorts');

// Finding in an array normally cost O(N)
// N = 1000 
// Regular Find with loop: O(1000)
// Binary Search: 1024 => 512 => 256 => 128 => 64 => 32 => 16 => 8 => 4 => 2    => 2 ** 10




var list = [2, 5, 8, 9, 13, 45, 67, 99];
var num = 67;

console.log(list);
console.log('Looking for: ', num);

var idx = binarySearch(list, num);
console.log('Found AT idx: ', idx);

idx = binarySearchRecursion(list, num, 0, list.length - 1)
console.log('Found AT idx: ', idx);

// values is a sorted array
// O(Log2N)  N==1024   Log2 1024 === 10
function binarySearch(items, item) {
    // initial values for start, middle and end
    var leftIdx = 0
    var rightIdx = items.length - 1
    var middleIdx = Math.floor((leftIdx + rightIdx) / 2)
    // While the middle is not what we're looking for and the list does not have a single item
    while (leftIdx <= rightIdx) {
        if (items[middleIdx] === item) return middleIdx;

        if (item < items[middleIdx]) {
            rightIdx = middleIdx - 1
        } else {
            leftIdx = middleIdx + 1
        }

        // recalculate middle on every iteration
        middleIdx = Math.floor((leftIdx + rightIdx) / 2)
    }
    return -1
}


function binarySearchRecursion(items, item, left, right) {
    if (left > right) {
        return -1;
    }
    var middle = Math.floor((right + left) / 2);
    if (items[middle] === item) {
        return middle;
    } else if (items[middle] > item) {
        return binarySearchRecursion(items, item, left, middle - 1);
    } else {
        return binarySearchRecursion(items, item, middle + 1, right);
    }
}