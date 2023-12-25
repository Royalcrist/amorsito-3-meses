import { useEffect } from "react";
import confetti from "canvas-confetti";

export interface ConfettiComponentProps {
  active: boolean;
  confettiOptions?: Parameters<typeof confetti>[0];
}

const ConfettiComponent = ({
  active,
  confettiOptions,
}: ConfettiComponentProps) => {
  useEffect(() => {
    if (active && typeof window !== "undefined") {
      confetti(confettiOptions);
    }
  }, [active, confettiOptions]);

  return null;
};

export default ConfettiComponent;
