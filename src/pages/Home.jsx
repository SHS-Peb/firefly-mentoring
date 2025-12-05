import { Link } from "react-router-dom";
import Firefly from "../components/Firefly";

const colors = ["yellow", "blue", "pink", "green"];

// Fisher-Yates Shuffle
for (let i = colors.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [colors[i], colors[j]] = [colors[j], colors[i]];
}

export default function Home() {
  return (
    <div className="relative min-h-screen text-center px-4 pt-4 flex flex-col items-center justify-start">
      {/* FRAME FIREFLIES (LEFT) */}
      <Firefly top="8%" left="6%" color={colors[0]} />
      <Firefly top="30%" left="3%" color={colors[1]} />
      <Firefly top="55%" left="9%" color={colors[2]} />
      <Firefly top="82%" left="4%" color={colors[3]} />

      {/* FRAME FIREFLIES (RIGHT) */}
      <Firefly top="8%" right="6%" color={colors[0]} />
      <Firefly top="30%" right="3%" color={colors[1]} />
      <Firefly top="55%" right="9%" color={colors[2]} />
      <Firefly top="82%" right="4%" color={colors[3]} />

      {/* ORGANIC CLUSTER AROUND BOTTOM MIDDLE */}
      <Firefly top="60%" left="18%" color={colors[1]} size={82} />
      <Firefly top="63%" right="20%" color={colors[2]} size={78} />
      <Firefly top="68%" left="38%" color={colors[3]} size={74} />
      <Firefly top="72%" right="32%" color={colors[0]} size={70} />
      <Firefly top="78%" left="50%" color={colors[1]} size={68} />

      {/* Hero Content */}
      <h4 className="font-handelson text-5xl sm:text-6xl drop-shadow-[0_0_25px_#ffd7ff] mb-4">
        Firefly
      </h4>

      <h1 className="font-extralight text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.25em] sm:tracking-[0.35em] leading-tight break-words px-4">
        MENTORING
      </h1>

      {/* Main Tagline */}
      <p className="font-donau mt-6 text-xl sm:text-2xl md:text-3xl tracking-widest">
        FIND YOUR SPARK, AND FOLLOW THE GLOW
      </p>

      <p className="font-donau max-w-xl mx-auto mt-4 text-gray-300 text-sm sm:text-base md:text-lg">
        You don’t need to have it all together. Just bring you — we’ll build from there.
      </p>

      <Link
        to="/packages"
        className="mt-10 bg-pink-500/80 hover:bg-pink-400 text-white font-donau py-3 px-8 rounded-xl shadow-[0_0_20px_#ff9aff] transition-all text-base sm:text-lg"
      >
        Explore Packages
      </Link>
    </div>
  );
}
