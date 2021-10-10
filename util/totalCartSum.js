// Unit function for test Cart Sun function
export function totalCartSum(arr) {
  return arr.reduce((acc, tour) => {
    return acc + tour.price * tour.amount;
  }, 0);
}

export const toursTotalPrice = function (a, b) {
  const multiply = a * b;
  return multiply;
};

// function sum(a, b) {
//   let add = a + b;
//   return add;
// }
// console.log(sum(5, 6));
// console.log(sum(3, 1));
