import { useState, useEffect } from "react";

export const useWindowWidthSize = () => {
  const [windowWidthSize, setWindowWidthSize] = useState(0);

  useEffect(() => {
    const watchResize = () => {
      setWindowWidthSize(window.innerWidth);
    }

    window.addEventListener("resize", watchResize);

    return () => {
      window.removeEventListener("resize", watchResize);
    }
  }, [windowWidthSize]);

  return windowWidthSize;
}