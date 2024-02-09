var merge = function (nums1, m, nums2, n) {
    let index2 = 0;
    for (let i = m; i < m + n; i += 1) {
        nums1[i] = nums2[index2];        
        console.log(m, nums1[i], nums2[index2])
        index2 += 1;
    }
    sort(nums1);
    console.log(nums1);
};
merge([1, 2, 3, 0,0,0], 3, [3,5,6], 3);

function sort(arr) {
    let swapped = false;
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < arr.length - 1 - i; j += 1) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }
}