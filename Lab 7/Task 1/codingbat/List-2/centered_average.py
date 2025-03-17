def centered_average(nums):
    nums.sort()
    trimmed_nums = nums[1:-1]  
    return sum(trimmed_nums) // len(trimmed_nums)