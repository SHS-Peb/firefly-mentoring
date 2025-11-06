export default function Firefly({ top, left, bottom, right, color }) {
  const glow = {
    yellow: "shadow-yellow-300",
    blue: "shadow-blue-300",
    pink: "shadow-pink-300",
    green: "shadow-green-300"
  };

  return (
    <div
      className={`
        absolute w-6 h-6 rounded-full bg-${color}-400
        animate-pulse blur-[1px]
        shadow-[0_0_50px_15px] ${glow[color]}
      `}
      style={{ top, left, bottom, right }}
    />
  );
}
