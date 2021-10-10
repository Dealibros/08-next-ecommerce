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

export function findAndDecreaseTour(tourId) {
  const cartTours = getParsedCookie('idfromTourSelected') || [];
  const tourFromCookie = cartTours.find((cookieObj) => cookieObj.id === tourId);
  tourFromCookie.amount -= 1;
  setParsedCookie('idfromTourSelected', cartTours);
  return cartTours;
}
// // // Unit: Test functions for removing info from cookie
export function decreaseTour(tourId) {
  findAndIncrementTour(tourId);
  const cartTours = getParsedCookie('idfromTourSelected') || [];
  setParsedCookie(cartTours);
}
