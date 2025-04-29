import React, { useState, useEffect } from "react";

const App = () => {
  const [position, setPosition] = useState({ x: 5, y: 0 });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        setPosition((prev) => ({ ...prev, x: Math.max(prev.x - 1, 0) }));
      } else if (e.key === "ArrowRight") {
        setPosition((prev) => ({ ...prev, x: Math.min(prev.x + 1, 9) }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => ({ ...prev, y: prev.y + 1 }));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: `${position.y * 20}px`,
        left: `${position.x * 20}px`,
        width: "20px",
        height: "20px",
        backgroundColor: "blue",
      }}
    />
  );
};

export default App;
