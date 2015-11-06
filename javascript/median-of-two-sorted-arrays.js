/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var combinedNums = [];
    var pos1 = 0;
    var pos2 = 0;
    
    while (pos1 < nums1.length || pos2 < nums2.length) {
        if (pos1 !== nums1.length && pos2 !== nums2.length) {
            if (nums1[pos1] < nums2[pos2]) {
                combinedNums.push(nums1[pos1]);
                pos1++;
            } else if (nums1[pos1] > nums2[pos2]) {
                combinedNums.push(nums2[pos2]);
                pos2++;
            } else {
                combinedNums.push(nums1[pos1]);
                combinedNums.push(nums2[pos2]);
                pos1++;
                pos2++;
            }
        } else if (pos1 !== nums1.length) {
            combinedNums.push(nums1[pos1]);
            pos1++;
        } else {
            combinedNums.push(nums2[pos2]);
            pos2++;
        }
    }
    
    var middle = Math.round(combinedNums.length / 2 - 1);
    if (combinedNums.length % 2 === 0) {
        return (combinedNums[middle] + combinedNums[middle + 1]) / 2;
    } else {
        return combinedNums[middle];
    }
};