import React, { useEffect, useRef, useState } from 'react';

export default function useDragDivider(plane) {
  const [width, setWidth] = useState(50);
  const dragging = useRef(false);
  const dividerPosition = useRef(null);

  const onMouseDown = (e) => {
    dragging.current = true;
    dividerPosition.current = e.clientX;
  };

  useEffect(() => {
    const onMouseUp = () => {
      dragging.current = false;
    };

    const onMouseMove = (e) => {
      if (dragging.current) {
        const percentageChange = ((e.clientX - dividerPosition.current) / window.innerWidth) * 100;
        setWidth((prevWidth) => prevWidth + percentageChange);
        dividerPosition.current = e.clientX;
      }
    };

    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    document.getElementById(plane).style.width = `${width}%`;
  }, [width, plane]);

  return onMouseDown;
}
