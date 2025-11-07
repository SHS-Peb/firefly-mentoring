import Firefly from "../components/Firefly";
import { useMemo } from "react";

export default function About() {
  const colors = useMemo(() => ["yellow", "blue", "pink", "green"].sort(() => Math.random() - 0.5), []);

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-8 py-16 text-center overflow-hidden">
      {/* Fireflies */}
      <Firefly top="8%" left="6%" color={colors[0]} />
      <Firefly top="28%" right="5%" color={colors[1]} />
      <Firefly top="52%" left="10%" color={colors[2]} />
      <Firefly top="76%" right="8%" color={colors[3]} />
      
      <div className="absolute top-10 left-20 w-48 h-48 bg-yellow-400/10 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-24 w-64 h-64 bg-pink-400/10 blur-3xl rounded-full animate-pulse" />

      {/* Heading */}
      <h1 className="font-handelson text-6xl mb-4 drop-shadow-[0_0_25px_#ffd7ff]">
        About Firefly Mentoring
      </h1>
      <p className="font-donau text-lg max-w-3xl leading-relaxed text-gray-200 tracking-wide">
        Firefly Mentoring was created to help individuals find clarity, confidence, 
        and direction — to rediscover their inner spark and follow the glow that guides them forward.  
      </p>

      <p className="font-donau text-lg max-w-3xl leading-relaxed text-gray-300 mt-6">
        Each mentoring journey is designed to meet you where you are — 
        whether you're reigniting lost motivation, learning to set purposeful goals, or seeking balance between work and self-growth.  
      </p>

      <p className="font-donau text-lg max-w-3xl leading-relaxed text-gray-300 mt-6">
        The name <span className="text-pink-300">Firefly</span> reminds us that even in the darkest times, 
        there’s always light — and when we move with intention, that light spreads to others.
      </p>

      {/* Signature line */}
      <p className="font-handelson text-3xl text-pink-200 mt-10 drop-shadow-[0_0_10px_#ff9aff]">
        Find your spark, and follow the glow.
      </p>
    </div>
  );
}


      