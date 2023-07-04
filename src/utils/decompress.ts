export const unpackToken = (token: string) => {
  if (!token) {
  return
  } else {
    const parts = token.split(".");
    const encodedPayload = parts[1];
    const decodedPayload = atob(encodedPayload);
    return JSON.parse(decodedPayload);
  }
};
