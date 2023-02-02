function isPalindrome(str) {
  let isPalindrome = false
  let arr = str.split('')
  let arr1 = []
  let arr2 = []
  for (let i = 0; i < Math.floor((arr.length) / 2); i++) {
    arr1.push(arr[i])
  }
  for (let i = arr.length - 1; i > Math.floor((arr.length) / 2); i--) {
    arr2.push(arr[i])
  }
  if (arr1.join() == arr2.join()) {
    isPalindrome = true
  }
  console.log(arr1)
  console.log(arr2)
  return isPalindrome
}

console.log(isPalindrome('220222022'))