import Cookies from 'js-cookie';

// To parse anything we get returned from the library js-cookie
// set or get function
// Parsed to convert fron the string to an Object (get)=obtain
// Stringify to convert from the object to a JSON string (set)=create

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
