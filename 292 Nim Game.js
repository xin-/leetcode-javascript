/**
 * You are playing the following Nim Game with your friend:
 * There is a heap of stones on the table, each time one of
 * you take turns to remove 1 to 3 stones. The one who removes
 * the last stone will be the winner. You will take the first
 * turn to remove the stones.
 * Both of you are very clever and have optimal strategies
 * for the game. Write a function to determine whether you
 * can win the game given the number of stones in the heap.
 * 你和你的朋友，两个人一起玩 Nim游戏：桌子上有一堆石头，每次你们轮流
 * 拿掉 1 - 3 块石头。 拿掉最后一块石头的人就是获胜者。你作为先手。
 * 你们是聪明人，每一步都是最优解。 编写一个函数，来判断你是否可以在
 * 给定石头数量的情况下赢得游戏。
 */

/**
 * Example:
 * Input: 4
 * Output: false
 */

/**
 * @param {number} n
 * @return {boolean}
 */
const canWinNim = (n) => n % 4 !== 0

console.log(canWinNim(4))
