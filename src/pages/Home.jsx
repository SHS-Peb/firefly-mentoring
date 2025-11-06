import Firefly from "../components/Firefly";

export default function Home() {
  return (
    <div className="text-center pt-10">
      {/* Fireflies */}
      <Firefly top="10%" left="5%" color="yellow" />
      <Firefly top="20%" right="8%" color="blue" />
      <Firefly top="65%" left="12%" color="pink" />
      <Firefly bottom="10%" right="15%" color="green" />

      {/* Logo */}
      <h4 className="text-6xl font-extralight drop-shadow-[0_0_25px_#ffd7ff]">
  Firefly
</h4>
      <h1 className="text-8xl font-extralight tracking-widest">MENTORING</h1>

      {/* Tagline */}
      <p className="font-!donau mt-6 text-3xl tracking-widest">
        FIND YOUR SPARK, AND FOLLOW THE GLOW
      </p>
    </div>
  );
}
