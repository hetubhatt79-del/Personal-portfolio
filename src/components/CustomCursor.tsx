import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer
    const media = window.matchMedia('(pointer: fine)');
    setIsFinePointer(media.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsFinePointer(e.matches);
    };

    media.addEventListener('change', handleMediaChange);

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest('button') ||
        target?.closest('a') ||
        target?.closest('input') ||
        target?.closest('textarea') ||
        target?.closest('[role="button"]') ||
        target?.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      media.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Smooth lerp trailing animation
  useEffect(() => {
    if (!isFinePointer) return;

    let animId: number;
    const follow = () => {
      setTrailingPos((prev) => {
        const dx = pos.x - prev.x;
        const dy = pos.y - prev.y;
        return {
          x: prev.x + dx * 0.22,
          y: prev.y + dy * 0.22,
        };
      });
      animId = requestAnimationFrame(follow);
    };

    animId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animId);
  }, [pos, isFinePointer]);

  if (!isFinePointer || !isVisible) return null;

  return (
    <>
      {/* Center point */}
      <div
        className="fixed pointer-events-none z-50 rounded-full transition-transform duration-75"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 0 : 1})`,
          width: '6px',
          height: '6px',
          backgroundColor: '#22d3ee',
          boxShadow: '0 0 10px #22d3ee, 0 0 20px #06b6d4',
        }}
      />
      {/* Trailing aura ring */}
      <div
        className="fixed pointer-events-none z-50 rounded-full border border-violet-400/60 transition-[width,height,background-color,border-color] duration-150 ease-out"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          transform: 'translate(-50%, -50%)',
          width: isHovered ? '42px' : '28px',
          height: isHovered ? '42px' : '28px',
          borderColor: isHovered ? 'rgba(34, 211, 238, 0.8)' : 'rgba(168, 85, 247, 0.5)',
          backgroundColor: isHovered ? 'rgba(34, 211, 238, 0.12)' : 'transparent',
          boxShadow: isHovered ? '0 0 20px rgba(34, 211, 238, 0.3)' : 'none',
        }}
      />
    </>
  );
};
