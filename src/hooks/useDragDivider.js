import React, { useEffect, useRef, useState } from 'react';

export default function useDragDivider(plane) {
  const [width, setWidth] = useState(50);
  const dragging = useRef(false);
  const dividerPosition = useRef(null);

  const onMouseDown = (e) => {
    dragging.current = true;
    dividerPosition.current = (plane == "leftplane") ? e.clientX : e.clientY;
  };

  useEffect(() => {
    const onMouseUp = () => {
      dragging.current = false;
    };

    const onMouseMove = (e) => {
      if (dragging.current) {
        const percentageChange = ((((plane == "leftplane") ? e.clientX : e.clientY) - dividerPosition.current) / ((plane == "leftplane") ? window.innerWidth : window.innerHeight)) * 100;
        setWidth((prevWidth) => prevWidth + percentageChange);
        dividerPosition.current = (plane == "leftplane") ? e.clientX : e.clientY;
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
    (plane == "leftplane") ? document.getElementById(plane).style.width = `${width}%` : document.getElementById(plane).style.height = `${width}%`
  }, [width, plane]);

  return onMouseDown;
}
