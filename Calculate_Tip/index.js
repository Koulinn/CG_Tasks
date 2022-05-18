// This is the takeaway task from the Basic Programming Concepts session.

// We’re going to make a program to calculate a tip in a restaurant.

// Steps to follow:

// Create variables for the pre-tip total and the tip percentage
// Calculate the new total
// Output a sentence to the page - something like: "Your total bill, with tip, is £35.45"
// Now output the tip amount separately.
// Make sure the tip amount and output are rounded to 2 decimal places.

/**
 *
 * @param {Number} bill
 * @param {Number} payment
 * @param {Number} tipPercent
 * @returns
 */
const calcTip = (bill, payment, tipPercent) => {
  if (bill < payment) {
    return "The payment must be greater than the bill";
  }
  const addTip = bill * (tipPercent / 100 + 1);
  const change = (payment - addTip).toFixed(2);

  return {
    billTotal: bill.toFixed(2),
    change,
    msg: `The total is £ ${addTip} your change is ${change} `,
  };
};

console.log(calcTip(21, 28, 15.0));
