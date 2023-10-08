import { useEffect, useRef, useState } from "react";

export const useObserver = () => {
  const [isShowing, setIsShowing] = useState(false)
  const eleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries[0].isIntersecting ? setIsShowing(true) : setIsShowing(false);
    });
    observer.observe(eleRef.current);
  }, [isShowing]);

  return [isShowing, eleRef]
}