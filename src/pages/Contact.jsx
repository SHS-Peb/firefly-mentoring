import { useState } from "react";
import Firefly from "../components/Firefly";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent! Thank you for reaching out.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-start px-6 pt-20 pb-32 text-center overflow-hidden">
      {/* Fireflies */}
      <Firefly top="5%" left="6%" color="yellow" size={80} />
      <Firefly top="20%" left="3%" color="blue" size={80} />
      <Firefly top="45%" left="9%" color="pink" size={80} />
      <Firefly top="70%" left="4%" color="green" size={80} />

      <Firefly top="5%" right="6%" color="yellow" size={80} />
      <Firefly top="20%" right="3%" color="blue" size={80} />
      <Firefly top="45%" right="9%" color="pink" size={80} />
      <Firefly top="70%" right="4%" color="green" size={80} />

      {/* Header */}
      <h1 className="font-handelson text-6xl mb-4 drop-shadow-[0_0_25px_#ffd7ff]">
        Contact Me
      </h1>
      <p className="font-donau text-gray-300 mb-10 max-w-xl text-xl">
        Got a question or want to start your mentoring journey?
        I’d love to hear from you. Send me a message below.
      </p>

      {/* Email Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl text-sm bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl space-y-6 border border-white/10"
      >
        <div>
          <label className="block text-left font-donau text-sm text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black/40 border border-gray-700 text-white font-donau focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-left font-donau text-sm text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black/40 border border-gray-700 text-white font-donau focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-left font-donau text-sm text-gray-300 mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            required
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black/40 border border-gray-700 text-white font-donau focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-500/80 hover:bg-pink-400 text-white text-sm font-donau py-3 rounded-lg transition-all shadow-[0_0_15px_#ff9aff]"
        >
          Send Message
        </button>
      </form>

      {/* FAQ Section */}
      <div className="mt-24 max-w-3xl text-left text-xl">
        <h2 className="font-handelson text-4xl mb-6 drop-shadow-[0_0_10px_#ffd7ff] text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-donau text-xl text-pink-300">
              What is Firefly Mentoring?
            </h3>
            <p className="text-gray-300 mt-2 leading-relaxed font-donau">
              Firefly Mentoring is a personal growth and goals-based mentoring space.
              It’s for those who want guidance, clarity, or simply someone to help them see their next step more clearly.
            </p>
          </div>

          <div>
            <h3 className="font-donau text-xl text-pink-300">
              How are sessions run?
            </h3>
            <p className="text-gray-300 mt-2 leading-relaxed font-donau">
              Sessions are one-on-one and can be held virtually or in person (depending on location).
              Each one is tailored to where you are in your journey.
            </p>
          </div>

          <div>
            <h3 className="font-donau text-xl text-pink-300">
              How do I start?
            </h3>
            <p className="text-gray-300 mt-2 leading-relaxed font-donau">
              Just send a message using the form above — you’ll get a warm response and next steps within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
