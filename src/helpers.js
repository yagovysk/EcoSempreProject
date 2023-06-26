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

export function useGetData(endpoint, dependencies = []) {
  const [data, setData] = useState("");
  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get(endpoint);
        setData(response.data);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    }
    getData();
  }, dependencies);

  return data;
}

export function useClickAway(
  ref,
  callback,
  events = ["click"],
  notClickAway = false
) {
  useEffect(() => {
    if (notClickAway) return;
    if (!ref.current) return;

    function handleClickAway(e) {
      const currentEl = ref.current;
      const node = e.target;

      if (currentEl.contains(node)) return;
      callback();
    }

    events.forEach((event) => {
      document.addEventListener(event, handleClickAway);
    });

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, handleClickAway);
      });
    };
  }, [ref]);
}
