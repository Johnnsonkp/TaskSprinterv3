import React, { useEffect, useState } from "react";

const TypeWriterEffect = ({ text, delay, infinite }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (infinite) {
      // ADD THIS CHECK
      setCurrentIndex(0);
      setCurrentText("");
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text]);

  return <span>{currentText}|</span>;
};

export default TypeWriterEffect;
