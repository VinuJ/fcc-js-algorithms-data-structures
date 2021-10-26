/*
  The input may be of any valid US number format. The following are examples of valid formats for US numbers:
    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555
*/

function telephoneCheck(str) {
  // Regex expressions to check against aforementioned valid formats
  let regexChecks = [
    /^\d{3}-\d{3}-\d{4}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/,
    /^\(\d{3}\)\s\d{3}-\d{4}$/,
    /^\d{3}\s\d{3}\s\d{4}$/,
    /^\d{10}$/,
    /^1[\s-\(]*\d{3}[\s-\)]*\d{3}[\s-]\d{4}$/
  ]
  
  // The regex expressions do not deal with issues in inputs having unclosed brackets, thus the following function
  function hasEvenBrackets(str) {
    let open = str.match(/\(/g)
    let closed = str.match(/\)/g)
    
    if ((open == null) ^ (closed == null)) {
      return false
    } else if (open == null && closed == null) {
      return true;
    } else if (open.length == closed.length) {
      return true;
    } else {
      return false;
    }

  }
  
  // Iterate through the regex checks and if any tests return true, telephoneCheck(str) returns true
  for (let i = 0; i < regexChecks.length; i++) {
    
    if (hasEvenBrackets(str) && regexChecks[i].test(str) == true) {
      return true;
    }
  }
  
  return false;
  
}

telephoneCheck("1 (555) 555-5555") // Should return true
telephoneCheck("(555)555-5555") // Should return true
telephoneCheck("1 555)555-5555") // Should return false
telephoneCheck("10 (757) 622-7382") // Should return false
telephoneCheck("123**&!!asdf#") // Should return false
