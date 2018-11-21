/**
 * Given an array A of non-negative integers, return an array
 * consisting of all the even elements of A, followed by all
 * the odd elements of A.
 * You may return any answer array that satisfies this condition.
 * 给定一个非负整数数组 A，返回一个由 A 的所有偶数元素组成的数组，
 * 后面跟 A 的所有奇数元素。
 * 你可以返回满足此条件的任何数组作为答案。
 */

/**
 * Example:
 * Input: [3,1,2,4]
 * Output: [2,4,3,1]
 * The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = (A) => {
  const odd = []
  const even = []
  A.forEach((num) => {
    if (num % 2 === 0) {
      even.push(num)
    } else {
      odd.push(num)
    }
  })
  return even.concat(odd)
}

console.log(sortArrayByParity([3, 1, 2, 4]))
