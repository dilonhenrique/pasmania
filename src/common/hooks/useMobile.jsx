import { useEffect, useState } from "react";

export default function useMobile() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return width < 600;
}