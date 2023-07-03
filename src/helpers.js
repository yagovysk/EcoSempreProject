import { useEffect, useState } from "react";
import throttle from "lodash.throttle";
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

export function useClickAway(ref, callback) {
  useEffect(() => {
    if (!ref.current) return;

    function handleClickAway(e) {
      const currentEl = ref.current;
      const node = e.target;

      if (currentEl.contains(node)) return;
      callback();
    }

    document.addEventListener("click", handleClickAway);

    return () => {
      document.removeEventListener("click", handleClickAway);
    };
  }, [ref]);
}

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState(window.innerWidth);

  useEffect(() => {
    const calcWindowWidth = throttle(() => {
      setBreakpoint(window.innerWidth);
    }, 200);

    window.addEventListener("resize", calcWindowWidth);

    return () => window.removeEventListener("resize", calcWindowWidth);
  }, []);

  return breakpoint;
}

export function scrollToTop() {
  window.scrollBy(0, document.body.offsetHeight * -1);
}

export function handleKeyboardTrap(e, callback, firstTabStop, lastTabStop) {
  if (e.key === "Escape") {
    callback();
    return;
  }

  if (e.key === "Tab") {
    if (e.shiftKey) {
      if (document.activeElement === firstTabStop) {
        e.preventDefault();
        lastTabStop.focus();
      }
    } else {
      if (document.activeElement === lastTabStop) {
        e.preventDefault();
        firstTabStop.focus();
      }
    }
  }
}
