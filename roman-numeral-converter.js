function convertToRoman(num) {
  // Copy of input number
  let numC = num;

  // Breaking the number into thousands, hundreds, tens and ones
  let thousands = Math.floor(numC / 1000)
  numC -= thousands*1000

  let hundreds = Math.floor(numC / 100)
  numC -= hundreds*100

  let tens = Math.floor(numC / 10)
  numC -= tens*10
  
  let ones = numC

  // Create four lookups: 1-9, 10-90 and 100-900, 1000-3000
  let onesLookup = {
    0: '',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX'
  }

  let tensLookup = {
    0: '',
    1: 'X',
    2: 'XX',
    3: 'XXX',
    4: 'XL',
    5: 'L',
    6: 'LX',
    7: 'LXX',
    8: 'LXXX',
    9: 'XC'
  }

  let hundredsLookup = {
    0: '',
    1: 'C',
    2: 'CC',
    3: 'CCC',
    4: 'CD',
    5: 'D',
    6: 'DC',
    7: 'DCC',
    8: 'DCCC',
    9: 'CM'
  }

  let thousandsLookup = {
    0: '',
    1: 'M',
    2: 'MM',
    3: 'MMM'
  }

  let numeral = [thousandsLookup[thousands], hundredsLookup[hundreds], tensLookup[tens], onesLookup[ones]].join("")
  
  return numeral;
  
}

convertToRoman(2014);
