// src/pages/Packages.jsx
import { Link } from "react-router-dom";
import Firefly from "../components/Firefly";

const PACKAGES = [
  {
    id: "intro",
    name: "Intro Session",
    durationLabel: "20-minute 1:1 session",
    price: 3,
    type: "one-off", // not monthly
    color: "yellow",
    description:
      "A first 20-minute mentoring call to get to know each other, explore your goals, and see if Firefly is a good fit for you.",
    features: [
      "20-minute 1:1 session over Zoom/online",
      "Space to share your story, goals, and current challenges",
      "Ask questions about how Firefly Mentoring works",
    ],
    note: "Limit of one Intro Session per person. $3 fee is non-refundable.",
  },
  {
    id: "spark",
    name: "Spark",
    hours: 4,
    price: 80,
    type: "monthly",
    durationLabel: "4 hours of mentoring per month",
    color: "pink",
    description:
      "A light monthly commitment — perfect for building momentum and gently shifting into action.",
    features: [
      "4 hours of mentoring per month",
      "Cluster your hours into deep dives or spread them out",
      "Actionable steps after each session",
    ],
  },
  {
    id: "glow",
    name: "Glow",
    hours: 8,
    price: 120,
    type: "monthly",
    durationLabel: "8 hours of mentoring per month",
    color: "blue",
    description:
      "More time together for bigger shifts, accountability, and deeper nervous system-safe change.",
    features: [
      "8 hours of mentoring per month",
      "Perfect if you’re juggling a few big goals",
      "Regular check-ins to keep you supported",
    ],
  },
  {
    id: "ignite",
    name: "Ignite",
    hours: 16,
    price: 210,
    type: "monthly",
    durationLabel: "16 hours of mentoring per month",
    color: "green",
    description:
      "High-touch mentoring for powerful growth, with frequent touchpoints and space for complex, layered goals.",
    features: [
      "16 hours of mentoring per month",
      "Great for deep, ongoing support",
      "Room to work on multiple areas of your life",
    ],
  },
];

export default function Packages() {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center px-6 py-20 text-center overflow-hidden">
      {/* Fireflies for ambience */}
      <Firefly top="5%" left="6%" color="yellow" size={80} />
      <Firefly top="20%" left="3%" color="blue" size={80} />
      <Firefly top="45%" left="9%" color="pink" size={80} />
      <Firefly top="70%" left="4%" color="green" size={80} />

      <Firefly top="5%" right="6%" color="yellow" size={80} />
      <Firefly top="20%" right="3%" color="blue" size={80} />
      <Firefly top="45%" right="9%" color="pink" size={80} />
      <Firefly top="70%" right="4%" color="green" size={80} />

      {/* Header */}
      <h1 className="font-handelson text-6xl drop-shadow-[0_0_25px_#ffd7ff] mb-10">
        Packages
      </h1>
      <p className="font-donau text-lg text-gray-300 max-w-2xl mb-16">
        Whether you’re taking your first step or continuing your self-growth
        journey, there’s a path for you. Each package is crafted to help you
        find your spark — and follow the glow.
      </p>

      {/* Package Cards */}
      <div className="grid grid-cols-1 text-lg md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl w-full">
        {PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-xl hover:scale-[1.03] transition-transform duration-300"
          >
            <div>
              <h2
                className={`font-handelson text-3xl mb-2 drop-shadow-[0_0_10px_#ffd7ff]`}
              >
                {pkg.name}
              </h2>

              <p className="font-donau text-sm text-amber-200 mb-2 uppercase tracking-wide">
                {pkg.durationLabel}
              </p>

              <p className="font-donau text-gray-300 mb-4 text-sm">
                {pkg.description}
              </p>

              <ul className="space-y-2 text-left text-xs text-gray-300 font-donau">
                {pkg.features?.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-pink-300">✦</span> {feature}
                  </li>
                ))}
              </ul>

              {/* Intro-specific clause */}
              {pkg.id === "intro" && (
                <p className="mt-4 text-xs text-rose-300 font-donau text-left">
                  • This Intro Session can only be booked once per person.
                  <br />
                  • A small <span className="font-semibold">$3</span> fee
                  applies to secure your spot (non-refundable).
                </p>
              )}

              {/* Monthly note */}
              {pkg.type === "monthly" && (
                <p className="mt-4 text-xs text-gray-400 font-donau text-left">
                  You can cluster or spread your hours across the month in a way
                  that feels safe and sustainable for your nervous system.
                </p>
              )}
            </div>

            <div className="mt-8">
              <p className="text-3xl font-donau text-pink-300 mb-2">
                ${pkg.price}
                {pkg.type === "monthly" && (
                  <span className="text-base text-gray-300"> / month</span>
                )}
                {pkg.type === "one-off" && (
                  <span className="text-base text-gray-300"> one-off</span>
                )}
              </p>

              <Link
                to={`/checkout/${pkg.id}`}
                className={`block w-full bg-pink-500/80 hover:bg-pink-400 text-white font-donau py-2 rounded-lg transition-all shadow-[0_0_15px_#ff9aff]`}
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
