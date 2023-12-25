import { useState } from "react";

const useRandomPosition = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const randomizePosition = () => {
    const top = Math.min(Math.random() * window.innerHeight, 100);
    const left = Math.min(Math.random() * window.innerWidth, 100);
    setPosition({ top, left });
  };

  return { position, randomizePosition };
};

export default useRandomPosition;
