// src/pages/ThankYouPage.jsx
import { Link } from "react-router-dom";

export default function Thankyou() {
  const tidyCalLink = "https://tidycal.com/368l7do/20-minute-meeting";

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-xl w-full text-center bg-white/5 border border-white/10 rounded-3xl p-10 shadow-[0_0_30px_rgba(255,215,255,0.25)] backdrop-blur-md">
        {/* Heading */}
        <h1 className="font-handelson text-4xl mb-4 drop-shadow-[0_0_20px_#ffd7ff]">
          Thank you for booking ✨
        </h1>

        {/* Short affirmation */}
        <p className="font-donau text-sm text-gray-200 mb-4">
          Your payment has gone through and your spot with Firefly Mentoring is
          officially reserved.
        </p>

        {/* What happens next */}
        <div className="text-left font-donau text-sm text-gray-200 space-y-3 mb-6">
          <p className="font-semibold text-pink-200">What happens next:</p>

          <ol className="list-decimal list-inside space-y-2 text-xs md:text-sm">
            <li>
              <span className="font-semibold text-amber-200">
                Book your session time:
              </span>{" "}
              Use the button below to choose a time that works for your nervous
              system and your schedule.
            </li>
            <li>
              <span className="font-semibold text-amber-200">
                Check your inbox:
              </span>{" "}
              TidyCal will send you a confirmation email with your booking
              details and a calendar invite.
            </li>
            <li>
              <span className="font-semibold text-amber-200">
                Bring your real self:
              </span>{" "}
              You don&apos;t need to have it all together. Just bring you, as
              you are. We&apos;ll build from there together.
            </li>
          </ol>
        </div>

        {/* Gentle reassurance */}
        <p className="font-donau text-xs text-gray-400 mb-6">
          If you don&apos;t see a confirmation email within 10–15 minutes,
          please check your spam / promotions folder, or reply to your payment
          receipt so I can follow up.
        </p>

        {/* Primary: Book session via TidyCal */}
        <a
          href={tidyCalLink}
          target="_blank"
          rel="noreferrer"
          className="block w-full mb-4 bg-pink-500/80 hover:bg-pink-400 text-white font-donau py-2 rounded-lg shadow-[0_0_15px_#ff9aff] transition-all text-sm"
        >
          Book your session time
        </a>

        {/* Secondary navigation buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/packages"
            className="flex-1 border border-white/30 hover:border-pink-300 text-gray-100 hover:text-white font-donau py-2 rounded-lg transition-all text-sm"
          >
            Back to Packages
          </Link>

          <Link
            to="/"
            className="flex-1 border border-white/30 hover:border-pink-300 text-gray-100 hover:text-white font-donau py-2 rounded-lg transition-all text-sm"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
