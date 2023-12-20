"use client";

import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const ButtonArea = styled.div`
  display: flex;
  gap: 12px;
`;

export default function Home() {
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [localNumber, setLocalNumber] = useState(0);

  const onMouseActive = (setNumber: number) => {
    setLocalNumber((localNumber) => localNumber + setNumber);
    const id = setInterval(() => {
      setLocalNumber((localNumber) => localNumber + setNumber);
    }, 200);
    setIntervalId(id);
  };

  const handleRelease = () => {
    if (intervalId) clearInterval(intervalId);
    setIntervalId(null);
  };

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <main>
      <ButtonArea>
        <button
          onMouseDown={() => onMouseActive(-1)}
          onMouseUp={handleRelease}
          onMouseLeave={handleRelease}
        >
          -
        </button>
        <div>{localNumber}</div>
        <button
          onMouseDown={() => onMouseActive(+1)}
          onMouseUp={handleRelease}
          onMouseLeave={handleRelease}
        >
          +
        </button>
      </ButtonArea>
    </main>
  );
}
