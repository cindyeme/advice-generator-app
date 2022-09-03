export const API_URL = "https://api.adviceslip.com/advice";

export const api = {
      method: 'GET',
      cache: 'no-store'
    }

export const getAdvice = async () => {
  const res = await fetch(API_URL).catch((err) => console.log(err));
  const data = await res.json();
  const adviceObj = data.slip;

  return adviceObj;
};
