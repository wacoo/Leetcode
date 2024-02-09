var removeDuplicates = function(nums) {
    let neww = true;
    let count = 1;
    let s = 0;
    let f = 1;
    while (f < nums.length) {        
        if (nums[f] === nums[s]) {
            count += 1;
            if (count <= 2) {
                s += 1;
                nums[s] = nums[f];
            }
        } else {
            count = 1;
            s += 1;
            nums[s] = nums[f];
        }
        f += 1;
    }

    console.log(nums, s + 1);
};

removeDuplicates([1, 1, 1, 2, 2, 2, 3, 3, 3]);