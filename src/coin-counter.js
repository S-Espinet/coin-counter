export default function coinCounter(amount) {
  if (isNaN(amount) === true || amount < 0) {
    return;
  }
  const output = {"quarters": 0, "dimes": 0, "nickels": 0, "pennies": 0};
  return coinCounterRecurse(amount, output);
}

function coinCounterRecurse(amount, output) {
  amount = amount.toFixed(2);
  if (amount === 0){
    return output;
  }else if (amount >= .25) {
    const q = parseInt(amount/.25);
    output.quarters = q;
    return coinCounterRecurse(amount - (q * .25), output);
  }else if (amount >= .10) {
    const d = parseInt(amount/.10);
    output.dimes = d;
    return coinCounterRecurse(amount - (d * .10), output);
  }else if (amount >= .05) {
    const n = parseInt(amount/.05);
    output.nickels = n;
    return coinCounterRecurse(amount - (n * .05), output);
  }else if (amount >= .01) {
    const p = parseInt(amount/.01);
    output.pennies = p;
    return coinCounterRecurse(amount - (p * .01), output);
  }else {
    return output;
  }
}