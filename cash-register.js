/* 

  Cash register drawer function that accepts purchase price as the first argument (price), 
  payment as the second argument (cash),
  and cash-in-drawer (cid) as the third argument.

  cid is a 2D array listing available currency.
  
*/

function checkCashRegister(price, cash, cid) {

  // Calculate total cash-in-drawer
  let totalCid = 0.0

  cid.map(elem => {
    totalCid += elem[1]
  })

  totalCid = totalCid.toFixed(2) // Rounds floats to 2 d.p.
  
  // Calculate change
  let change = cash-price
  let changeCopy = cash-price

  // Return for if cash-in-drawer is the same as the change due
  if (totalCid == change) {
    return {status: "CLOSED", change: [...cid]}
  }

  // Creates modified cash-in-drawer array of format [amount, number of coins]
  let temp = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01]
  let labels = []
  cid.reverse()
  
  let modCid = cid.map((elem, index) => {
    labels.push(elem[0])
    elem[0] = temp[index]
    elem[1] = parseInt((elem[1] / temp[index]).toFixed())
    return elem;
  })
  
  // Create empty array 
  let changeArr = new Array(9).fill(0)

  // Calculates the change due in coins and bills, sorted highest to lowest
  for (let i = 0; i < modCid.length; i++) {
    let amount = modCid[i][0]
    let numberOf = modCid[i][1]

    if (change.toFixed(2) >= amount && numberOf > 0) {
      do {
        change -= amount
        changeArr[i]++
        numberOf--
      } while (change.toFixed(2) >= amount && numberOf > 0)
    }
  }
  
  change = change.toFixed(2)
  
  // Creating object to be returned with change due
  let changeObj = {}
  for (let i = 0; i < labels.length; i++) {
    changeObj[labels[i]] = changeArr[i]*modCid[i][0];
  }

  // Returns if cash-in-drawer is less than the change due, or if you cannot return the exact change
  if (totalCid < changeCopy || change > 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }

  // Removing the coins that are not used from the change array
  let finalChange = Object.entries(changeObj)
  for (let i = 0; i < finalChange.length; i++) {
    if (finalChange[i][1] == 0) {
      finalChange.splice(i, 1)
      i--
    }
  }
  
  // Returns change in highest to lowest order
  return {status: "OPEN", change: [...finalChange]}
}
  
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// Should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
