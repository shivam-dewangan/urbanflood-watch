import { useEffect, useState } from "react";

const RainAnimation = () => {
  const [raindrops, setRaindrops] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    const drops = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setRaindrops(drops);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {raindrops.map((drop) => (
        <div
          key={drop.id}
          className="absolute w-0.5 h-12 bg-gradient-to-b from-primary-glow/30 to-transparent rain-animation"
          style={{
            left: `${drop.left}%`,
            animationDelay: `${drop.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default RainAnimation;
