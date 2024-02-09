var majorityElement = function(nums) {
    let counts = {};
    let max_idx = 0;
    let max = 0;
  
    for (let i= 0; i < nums.length; i += 1) {
            counts[nums[i]] = counts[nums[i]] ?? 0
            counts[nums[i]] += 1;

            if (counts[nums[i]] >  (nums.length/2)) {
                max = counts[nums[i]];
                max_idx = i;
            }
    }
    return nums[max_idx];
  };
  majorityElement([3,2,2,4,4,3,3,3,3,5]);
