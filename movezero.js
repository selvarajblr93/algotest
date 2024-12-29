
function moveZeroes(nums) {
    let writePointer = 0;
    for (let readPointer = 0; readPointer < nums.length; readPointer++) {
        const val = nums[readPointer];
        nums[readPointer] = 0;
        if (val !== 0) {
            nums[writePointer] = val;
            writePointer++;
        }
    }

    console.log(nums)
}

moveZeroes([1,2,3,0,4,0,5]);
