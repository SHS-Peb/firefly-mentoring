import Firefly from "../components/Firefly";

const colors = ["yellow", "blue", "pink", "green"];

// Fisher-Yates Shuffle
for (let i = colors.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [colors[i], colors[j]] = [colors[j], colors[i]];
}

export default function Home() {
  return (
    <div className="relative min-h-screen text-center pt-10">

{/* LEFT */}
<Firefly top="5%"   left="6%"  color={colors[0]} />
<Firefly top="20%"  left="3%"  color={colors[1]} />
<Firefly top="45%"  left="9%"  color={colors[2]} />
<Firefly top="70%"  left="4%"  color={colors[3]} />

{/* RIGHT */}
<Firefly top="5%"   right="6%"  color={colors[0]} />
<Firefly top="20%"  right="3%"  color={colors[1]} />
<Firefly top="45%"  right="9%"  color={colors[2]} />
<Firefly top="70%"  right="4%"  color={colors[3]} />


      {/* Logo */}
      <h4 className="font-handelson text-6xl drop-shadow-[0_0_25px_#ffd7ff]">
        Firefly
      </h4>

      <h1 className="text-8xl font-extralight tracking-widest">
        MENTORING
      </h1>

      {/* Tagline */}
      <p className="font-donau mt-6 text-3xl tracking-widest">
        FIND YOUR SPARK, AND FOLLOW THE GLOW
      </p>
    </div>
  );
}
