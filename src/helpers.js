import { useEffect, useState } from "react";
import api from "./api/posts";

export function useIncreaseNumber(n, duration, increase) {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const increaseNumberInterval = setInterval(() => {
      if (number < n) {
        setNumber(number + increase);
      }
    }, duration);

    return () => clearInterval(increaseNumberInterval);
  }, [number]);

  return number;
}

export function scrollToTop() {
  window.scrollBy(0, document.body.offsetHeight * -1);
}

export function useGetData(endpoint, setState, dependencies = []) {
  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get(endpoint);
        setState(response.data);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    }
    getData();
  }, dependencies);
}
