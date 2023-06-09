import { useEffect, useState } from "react";
import styled from "styled-components";

export function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const size = 50;

  useEffect(() => {
    const positionElement = (e: MouseEvent) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;

      setMousePosition({ x: mouseX - size / 2, y: mouseY - size / 2 });

      console.log(mouseX, mouseY);
    };

    window.addEventListener("mousemove", positionElement);
  }, []);

  return <StCursor x={mousePosition.x} y={mousePosition.y} size={size} />;
}

const StCursor = styled.div<{ x: number; y: number; size: number }>`
  /* background-color: white; */
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
  position: absolute;
  backdrop-filter: invert(100%);
  z-index: 10;
`;
