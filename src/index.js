module.exports = function reverse (n) {
  let arr = n.toString().split("");
  arr.reverse();
  while(arr[0] === 0) {
    arr.shift();
  }
  let str = arr.join("");
  return Number.parseInt(str)
}
