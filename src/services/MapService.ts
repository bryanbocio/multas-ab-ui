import newRequest from "../Request";

export const getTrafficFine = async () => {
  return await newRequest
    .get("TrafficFine")
    .then((results) => results.data.data)
    .catch((err) => err);
};
