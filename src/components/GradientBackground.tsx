import React, { useEffect, useRef, useState } from "react";

const GradientBackground = () => {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setCurX((prev) => prev + (tgX - prev) / 20);
      setCurY((prev) => prev + (tgY - prev) / 20);

      if (interactiveRef.current) {
        interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
    }, 1000 / 60);

    return () => clearInterval(moveInterval);
  }, [curX, curY, tgX, tgY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[linear-gradient(40deg,#080F16,#0e2c3d)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08),transparent_70%)] opacity-70" />
      <div
        className={`gradients-container h-full w-full ${isSafari ? "blur-2xl" : "blur-3xl"}`}
        style={{ willChange: 'transform' }}
      >
        <div className="absolute [background:radial-gradient(circle_at_center,_rgba(6,182,212,0.25)_0,_rgba(6,182,212,0)_70%)_no-repeat] [mix-blend-mode:plus-lighter] w-full h-full top-0 left-0 [transform-origin:center_center] animate-gradient-first" />
        <div className="absolute [background:radial-gradient(circle_at_center,_rgba(2,132,199,0.25)_0,_rgba(2,132,199,0)_70%)_no-repeat] [mix-blend-mode:plus-lighter] w-full h-full top-0 left-0 [transform-origin:calc(50%-400px)] animate-gradient-second" />
        <div className="absolute [background:radial-gradient(circle_at_center,_rgba(20,184,166,0.25)_0,_rgba(20,184,166,0)_70%)_no-repeat] [mix-blend-mode:plus-lighter] w-full h-full top-0 left-0 [transform-origin:calc(50%+400px)] animate-gradient-third" />
        <div className="absolute [background:radial-gradient(circle_at_center,_rgba(14,165,233,0.25)_0,_rgba(14,165,233,0)_70%)_no-repeat] [mix-blend-mode:plus-lighter] w-full h-full top-0 left-0 [transform-origin:calc(50%-200px)] animate-gradient-fourth" />

        <div
          ref={interactiveRef}
          onMouseMove={handleMouseMove}
          className="absolute [background:radial-gradient(circle_at_center,_rgba(6,182,212,0.3)_0,_rgba(6,182,212,0)_70%)_no-repeat] [mix-blend-mode:plus-lighter] w-full h-full -top-1/2 -left-1/2"
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.05),transparent_70%)] opacity-70" />
    </div>
  );
};

export default GradientBackground;
