import Firefly from "../components/Firefly";

export default function Packages() {
  const packages = [
    {
      title: "Begin",
      price: "$90",
      desc: "Your first spark — a single mentoring session focused on clarity, reflection, and setting direction.",
      features: [
        "1 × 90-minute goal-setting session",
        "Personalised follow-up plan",
        "Email check-in after 1 week",
      ],
      color: "pink",
    },
    {
      title: "Momentum",
      price: "$180",
      desc: "Build rhythm and accountability. Perfect if you’re ready to move from vision to action.",
      features: [
        "3 × 60-minute sessions (weekly or fortnightly)",
        "Custom goal tracking worksheet",
        "Ongoing motivation support",
      ],
      color: "yellow",
    },
    {
      title: "Glow",
      price: "$320",
      desc: "For those ready to transform long-term — a journey of discovery, consistency, and self-growth.",
      features: [
        "6 × 60-minute sessions (spread over 6–8 weeks)",
        "Tailored growth roadmap",
        "Email + message support between sessions",
      ],
      color: "blue",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center px-6 py-20 text-center overflow-hidden">
      {/* Fireflies for ambience */}
      <Firefly top="8%" left="6%" color="yellow" />
      <Firefly top="22%" right="6%" color="pink" />
      <Firefly top="58%" left="10%" color="blue" />
      <Firefly top="78%" right="10%" color="green" />

      {/* Header */}
      <h1 className="font-handelson text-6xl drop-shadow-[0_0_25px_#ffd7ff] mb-10">
        Packages
      </h1>
      <p className="font-donau text-gray-300 max-w-2xl mb-16">
        Whether you’re taking your first step or continuing your self-growth journey, there’s a path for you.  
        Each package is crafted to help you find your spark — and follow the glow.
      </p>

      {/* Package Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {packages.map((pkg, i) => (
          <div
            key={i}
            className={`bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-xl hover:scale-[1.03] transition-transform duration-300`}
          >
            <div>
              <h2
                className={`font-handelson text-4xl mb-3 drop-shadow-[0_0_10px_#ffd7ff] text-${pkg.color}-300`}
              >
                {pkg.title}
              </h2>
              <p className="font-donau text-gray-300 mb-6">{pkg.desc}</p>
              <ul className="space-y-2 text-left text-sm text-gray-300 font-donau">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-pink-300">✦</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <p className="text-3xl font-donau text-pink-300 mb-4">
                {pkg.price}
              </p>
              <button
                className={`w-full bg-${pkg.color}-500/80 hover:bg-${pkg.color}-400 text-white font-donau py-2 rounded-lg transition-all shadow-[0_0_15px_#ff9aff]`}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
