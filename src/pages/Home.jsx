import Firefly from "../components/Firefly";

export default function Home() {
  return (
    <div className="text-center pt-10">
      {/* Fireflies */}
      <Firefly top="10%" left="5%" color="yellow" />
      <Firefly top="20%" right="8%" color="blue" />
      <Firefly top="65%" left="12%" color="pink" />
      <Firefly bottom="10%" right="15%" color="green" />
      {/* Add more as needed */}

      {/* Logo */}
      <h2 className="text-3xl font-[cursive] text-gray-400">Firefly</h2>
      <h1 className="text-6xl font-extralight tracking-widest">MENTORING</h1>

      {/* Tagline */}
      <p className="mt-6 text-xs tracking-widest">
        FIND YOUR SPARK, AND FOLLOW THE GLOW
      </p>
    </div>
  );
}
