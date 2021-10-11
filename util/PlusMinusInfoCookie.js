import cookie from 'js-cookie';
import { getParsedCookie, setParsedCookie } from '../util/cookies';

export function findAndIncrementTour(tourId) {
  const cartTours = getParsedCookie('idfromTourSelected') || [];
  const tourFromCookie = cartTours.find((cookieObj) => cookieObj.id === tourId);
  tourFromCookie.amount += 1;
  setParsedCookie('idfromTourSelected', cartTours);
  return cartTours;
}

// // // Unit: Test functions for adding info from cookie
export function incrementTour(tourId) {
  findAndIncrementTour(tourId);
  const cartTours = getParsedCookie('idfromTourSelected') || [];
  setParsedCookie(cartTours);
}

export function decreaseTour(tourId) {
  const cartTours = getParsedCookie('idfromTourSelected') || [];
  const tourFromCookie = cartTours.find((cookieObj) => cookieObj.id === tourId);
  tourFromCookie.amount -= 1;

  setParsedCookie('idfromTourSelected', cartTours);
  return cartTours;
}
// // // Unit: Test functions for removing info from cookie

export function removeTour(tourId) {
  const cartTours = getParsedCookie('idfromTourSelected') || []; // shows the tours in cart
  console.log(cartTours);

  // The find() method returns the value of the first element in the provided array that satisfies the provided testing function
  const tourFromCookie = cartTours.find((p) => p.id === tourId); // grabs the tour to delete in which we clicked
  console.log(tourFromCookie);
  if (tourFromCookie) {
    const deleting = cartTours.splice(tourFromCookie, 1); //instead of 0
    console.log(cartTours);
    console.log(deleting);
  } else {
    return cartTours;
  }
  console.log(cartTours);
  setParsedCookie('idfromTourSelected', cartTours);
  return cartTours;
}
