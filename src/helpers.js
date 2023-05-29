import { useEffect, useState } from "react";

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
