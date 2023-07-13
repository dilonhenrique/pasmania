import { useEffect, useLayoutEffect, useState } from "react";

// Restrict value to be between the range [0, value]
const clamp = (value: number) => Math.max(0, value);

// Check if number is between two values
const isBetween = (value: number, floor: number, ceil: number) =>
  value >= floor && value <= ceil;

export default function useActiveMenu(ids: string[], offset: number = 0) {
  const [activeId, setActiveId] = useState("");

  useLayoutEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));

      const newActiveId = position?.id || "";
      setActiveId(newActiveId);
    };

    listener();

    window.addEventListener("resize", listener, { passive: true });
    window.addEventListener("scroll", listener, { passive: true });

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, [ids, offset]);

  useEffect(() => {
    if (activeId !== '') {
      const scroller = document.getElementById('scrollMenu');
      const activeButton = document.getElementById(`button-${activeId}`);
      if (!activeButton || !scroller) return;

      const rect = activeButton.getBoundingClientRect();
      const offset = scroller.offsetLeft + 20;

      scroller.scrollTo({
        behavior: 'smooth',
        left: clamp(rect.left + scroller.scrollLeft - offset),
      })
    }
  }, [activeId])

  return activeId;
};