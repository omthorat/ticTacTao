import React, { useEffect, useState } from "react";
import useThrottle from "../hooks/useThrottle";
const Throtled = () => {
  const [windowSize, SetWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleResize = () => {
    SetWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  const ThrotledEffect = useThrottle(handleResize, 1000);
  useEffect(() => {
    window.addEventListener("resize", ThrotledEffect);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      {windowSize.width}X{windowSize.height}
    </div>
  );
};

export default Throtled;
