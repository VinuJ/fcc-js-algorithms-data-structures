function palindrome(str) {
  // Removing all non-alphanumeric characters and making string the same case
  let x = str.replace(/[^\w]|_/g, "").toUpperCase()
  
  // Check if string is equal to its split, reversed and rejoined form
  return (x == x.split("").reverse().join("")) ? true : false
}
