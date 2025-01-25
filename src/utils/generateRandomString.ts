export const generateRandomString = (length: number) => {
  const array = new Uint32Array(length / 2);
  window.crypto.getRandomValues(array);
  return Array.from(array, dec => ('0' + dec.toString(16)).slice(-2)).join('');
}