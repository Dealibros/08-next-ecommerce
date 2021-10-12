// Unit function for test Cart Sun function
export function totalCartSum(arr) {
  return arr.reduce((acc, tour) => {
    return acc + parseFloat(tour.price) * tour.amount;
  }, 0);
}

export const toursTotalPrice = function (a, b) {
  const multiply = a * b;
  return multiply;
};
