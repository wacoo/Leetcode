var rotate = function(nums, k) {
    for (let j = 0; j < k; j += 1) {
        let tmp =nums[0];
        for (let i = 0; i < nums.length; i += 1) {
            if (i === 0) {
                tmp = nums[i];
                nums[i] = nums[nums.length - 1];
            } 
            else {
                let tmp2 = tmp;
                tmp = nums[i];
                nums[i] = tmp2;
            }
        }

    }
    console.log(nums);
};

rotate([1,2,3,4,5,6], 4);