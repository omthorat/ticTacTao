import React, { useEffect, useRef, useState } from "react";
const useThrottle = (value, dealy) => {
  const [throttledValue, SetThrottledValue] = useState(value);

  const lastExecutionTime = useRef(Date.now());
  useEffect(() => {
    const timeOut = setTimeout(() => {
      let currentTime = Date.now();
      let timeElapsed = currentTime - lastExecutionTime.current;
      if (timeElapsed >= dealy) {
        SetThrottledValue(value);
        lastExecutionTime.current = currentTime;
      }
    }, dealy - (Date.now() - lastExecutionTime.current));

    return () => {
      clearTimeout(timeOut);
    };
  }, [value, dealy]);
  return throttledValue;
};

export default useThrottle;
