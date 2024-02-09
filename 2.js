var removeElement = function(nums, val) {
    let unmatched_tracker = 0;

    for (i = 0; i < nums.length; i += 1) {
        if (nums[i] != val) {
            nums[unmatched_tracker] = nums[i];
            unmatched_tracker += 1;
        }
    }
    return nums.slice(0, unmatched_tracker);
  };

console.log(removeElement([23, 11, 3, 4, 46, 3, 90, 3, 9, 10, 3], 3));
