# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
    storage = {}
    nums.each_index do |i|
        if storage[nums[i]] == nil
            storage[target - nums[i]] = i + 1
        else
            return [storage[nums[i]], i + 1]
        end
    end
end