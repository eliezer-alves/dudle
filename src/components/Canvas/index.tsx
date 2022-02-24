import React, { useRef, useEffect, CanvasHTMLAttributes } from 'react'

type CanvasProps = CanvasHTMLAttributes<HTMLCanvasElement>;

export function Canvas({ ...props }: CanvasProps) {
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');  
      if (context != null) {
          context.beginPath();
          context.arc(50, 50, 50, 0, 2 * Math.PI);
          context.fill(); 
      }
    }
  }, [])
  
  return (
    <>
      <canvas ref={canvasRef} {...props}></canvas>
    </>
  );
}
