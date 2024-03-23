"use client";
import React, { useState, useLayoutEffect } from "react";

export default function ResponsiveContainer({ minWidth, maxWidth, children }) {
  const [isWideScreen, setIsWideScreen] = useState(true);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (maxWidth) {
        setIsWideScreen(window.innerWidth <= maxWidth);
      }

      if (minWidth) {
        setIsWideScreen(window.innerWidth > minWidth);
      }
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [maxWidth]); // Include maxWidth as a dependency for useEffect

  return <>{isWideScreen && children}</>;
}
