# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
  hash = {}
  nums.each do |num, i|
    if hash[num] == nil
      hash[target - num] = i
    else
      return [hash[num], i]
    end
  end
end

puts "#{two_sum([3, 2, 4], 6)}"