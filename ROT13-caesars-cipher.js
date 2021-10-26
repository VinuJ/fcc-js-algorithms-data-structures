function rot13(str) {
  // Define a replacer function
  function replacer(match) {
    // Get ASCII code, find remainder when divided by 65 (ASCII code for 'A' is 65) then subtract 13 to perform the shift
    let index = ((match.charCodeAt(0) % 65) - 13)

    // If index is negative then ASCII code must be found by subtracting from the end of the alphabet, (ASCII code for 'Z' is 90)
    if (index < 0) { 
      return String.fromCharCode(91+index)
    } else {
      return String.fromCharCode(match.charCodeAt(0) - 13)
    }
  }

  // Use the replacer function to replace all A-z characters in the string
  return str.replace(/[A-z]/g, replacer)
}

// Returns 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.'
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")

