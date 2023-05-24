import { useEffect, useRef, useState } from "react";

export function useIncreaseNumber(n, duration) {
  const [number, setNumber] = useState(0);

  const increaseNumberInterval = useRef(null);
  useEffect(() => {
    increaseNumberInterval.current = setInterval(() => {
      if (number < n) {
        setNumber(number + 2);
      } else {
        clearInterval(increaseNumberInterval.current);
      }
    }, duration);

    return () => clearInterval(increaseNumberInterval.current);
  });

  return number;
}
