// MovableResizableComponent.js
"use client"
import React, { useState } from 'react';
import styles from './MovableResizableComponent.css';

const MovableResizableComponent = () => {
  const [position, setPosition] = useState({ top: 200, left: 200 });
  const [size, setSize] = useState({ width: 100, height: 100 });

  const handleDrag = (e) => {
    setPosition({
      top: e.clientY,
      left: e.clientX,
    });
  };

  const handleResize = (e) => {
    setSize({
      width: e.clientX - position.left,
      height: e.clientY - position.top,
    });
  };

  return (
    <div
      className={styles.container}
      style={{
        top: position.top + 'px',
        left: position.left + 'px',
        width: size.width + 'px',
        height: size.height + 'px',
      }}
      onMouseMove={handleDrag}
    >
      <div
        className={styles.inner}
        onMouseMove={handleResize}
      ></div>
    </div>
  );
};

export default MovableResizableComponent;
