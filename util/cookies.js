import Cookies from 'js-cookie';
import Tours from '../pages/tours';

// To parse anything we get returned from the library js-cookie
// set or get function
// getParsed to convert fron the string to an Object (get)=obtain
// setParsed Stringify to convert from the object to a JSON string (set)=create

export function getParsedCookie(key) {
  try {
    return JSON.parse(Cookies.get(key));
  } catch (err) {
    return undefined;
  }
}

export function setParsedCookie(key, value) {
  if (typeof window !== 'undefined') {
    Cookies.set(key, JSON.stringify(value));
  }
}

// ------------------------------------------------------------

// for amount from cookies page
export function findTourAndIncrementAmountCount(tours, tourId) {
  const tourFromCookie = tours.find((cookieObj) => cookieObj.id === tourId);

  tourFromCookie.amount += 1;
  return tourFromCookie;
}

export function CreateCookieArray(idfromTourSelectedArray, tourId) {
  // The some() method tests whether at least one element in the array passes the test implemented by the provided function. Returns true or Flase (Boolean).
  const isTourIdSelected = idfromTourSelectedArray.some((cookieObject) => {
    return cookieObject.id === tourId;
  });

  if (isTourIdSelected) {
    idfromTourSelectedArray.amount += 1;
    return idfromTourSelectedArray;
  } else {
    const idfromTourSelectedPlus = [
      ...idfromTourSelectedArray,
      { id: tourId, amount: 0 },
    ];
    return idfromTourSelectedPlus;
  }
}
