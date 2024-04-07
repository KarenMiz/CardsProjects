import { useEffect, useState } from "react";

export default function useCounter(initialValue = 0, step =1) {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter((prev) => prev + step);
  };

  const decrement = () => {
    setCounter((prev) => prev - step);
  };

  const resetCounter = () => {
    setCounter(initialValue);
  };
  useEffect(() => {

    if (counter % 7 === 0 || counter.toString().includes("7")) {
      console.log("BOOM");
    }

    return () => {
      console.log("count has unmounted");
    };
  }, [counter]);


  return { counter, increment, decrement, resetCounter};
}
