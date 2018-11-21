/**
 * Write a program that outputs the string representation of numbers
 * from 1 to n.
 * But for multiples of three it should output “Fizz” instead of the
 * number and for the multiples of five output “Buzz”. For numbers
 * which are multiples of both three and five output “FizzBuzz”.
 * 写一个程序，输出从 1 到 n 数字的字符串表示。
 * 1. 如果 n 是3的倍数，输出“Fizz”；
 * 2. 如果 n 是5的倍数，输出“Buzz”；
 * 3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。
 */

/**
 * Example:
 * n = 15,
 * Return:
 * [
 *   "1",
 *   "2",
 *   "Fizz",
 *   "4",
 *   "Buzz",
 *   "Fizz",
 *   "7",
 *   "8",
 *   "Fizz",
 *   "Buzz",
 *   "11",
 *   "Fizz",
 *   "13",
 *   "14",
 *   "FizzBuzz"
 * ]
 */

/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
  let obj = {
    t: 'Fizz',
    f: 'Buzz',
    tf: 'FizzBuzz',
  }
  let res = []
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      res.push(obj.tf)
    } else if (i % 5 === 0) {
      res.push(obj.f)
    } else if (i % 3 === 0) {
      res.push(obj.t)
    } else {
      res.push(i.toString())
    }
  }
  return res
}

console.log(fizzBuzz(15))
