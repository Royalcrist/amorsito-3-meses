import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import ConfettiComponent from "./ConfettiComponent";

const MiddleFingerConfetti = ({ active }: { active: boolean }) => {
  const [middleFinger, setMiddleFinger] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const scalar = 2;
      const middleFingerShape = confetti.shapeFromText({ text: "🖕", scalar });
      setMiddleFinger(middleFingerShape);
    }
  }, []);

  const confettiOptions = {
    particleCount: 360,
    ticks: 60,
    spread: 70,
    origin: { y: 0.6 },
    shapes: [middleFinger],
    scalar: 3,
    startVelocity: 30,
    gravity: 0.6,
    dragFriction: 0.1,
  };

  return (
    <ConfettiComponent active={active} confettiOptions={confettiOptions} />
  );
};

export default MiddleFingerConfetti;
