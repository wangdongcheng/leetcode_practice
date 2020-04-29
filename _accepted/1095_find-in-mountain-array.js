// 1095. Find in Mountain Array
// (This problem is an interactive problem.)

// You may recall that an array A is a mountain array if and only if:

// A.length >= 3
// There exists some i with 0 < i < A.length - 1 such that:
// A[0] < A[1] < ... A[i-1] < A[i]
// A[i] > A[i+1] > ... > A[A.length - 1]
// Given a mountain array mountainArr, return the minimum index such that mountainArr.get(index) == target.  If such an index doesn't exist, return -1.

// You can't access the mountain array directly.  You may only access the array using a MountainArray interface:

// MountainArray.get(k) returns the element of the array at index k (0-indexed).
// MountainArray.length() returns the length of the array.
// Submissions making more than 100 calls to MountainArray.get will be judged Wrong Answer.  Also, any solutions that attempt to circumvent the judge will result in disqualification.

// Example 1:
// Input: array = [1,2,3,4,5,3,1], target = 3
// Output: 2
// Explanation: 3 exists in the array, at index=2 and index=5. Return the minimum index, which is 2.

// Example 2:
// Input: array = [0,1,2,4,2,1], target = 3
// Output: -1
// Explanation: 3 does not exist in the array, so we return -1.


// Constraints:

// 3 <= mountain_arr.length() <= 10000
// 0 <= target <= 10^9
// 0 <= mountain_arr.get(index) <= 10^9

// 三次二分查找：

// 找山峰
// 找山峰左边区间
// 找山峰右边区间
// 找山峰时，只要找到递增顺序不一致的下标索引即可：
// 因为山的形状是先增后降，因此有以下两种情况：

// 当中间点元素的值mountainArr.get(mid)大于mountainArr.get(mid + 1)意味着[mid,right]为递减区间，需要往左边搜索山峰，将right左移(即right = mid - 1)
// 当中间点元素的值mountainArr.get(mid)小于等于mountainArr.get(mid + 1)，意味着[left,mid + 1]为递增区间，需要往mid右边搜索山峰，将left右移(即right = mid - 1)

// 作者：django-r
// 链接：https://leetcode-cn.com/problems/find-in-mountain-array/solution/shuang-bai-san-ci-er-fen-cha-zhao-by-django-r/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

// tags: binary search

/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */
const log = str => {
    if (false) {
        console.log(str);
    }
}
const search = (mountainArr, start, end, target, mode) => { // mode 1: ascending, mode 2: descending
    let mid = 0;

    while (start <= end) {
        mid = start + Math.floor((end - start) / 2);
        const val = mountainArr.get(mid);
        if (target === val) {
            return mid;
        } else if (target > val) {
            if (mode === 1) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        } else if (target < val) {
            if (mode === 1) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }
    return -1;
};
/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
    // find peak
    let start = 0;
    let len = mountainArr.length(); log(`length: ${len}`);
    let end = len - 1;
    let mid = 0;

    while (start < end) {
        mid = start + Math.floor((end - start) / 2);
        log(`start: ${start}, end: ${end}, mid: ${mid}`);
        const midVal = mountainArr.get(mid);
        const midNx = mountainArr.get(mid + 1);
        log(`mid idx: ${mid}, mid value: ${midVal}, nxt: ${midNx}`);
        if (midVal < midNx) {
            start = mid + 1;
        } else if (midVal > midNx) {
            end = mid - 1;
        }
    }
    const peak = start;
    log(`peak index: ${peak}, value: ${mountainArr.get(peak)}`);
    let ans = search(mountainArr, 0, peak, target, 1);
    if (ans != -1) {
        return ans;
    } else {
        return search(mountainArr, peak, len - 1, target, 2);
    }
};