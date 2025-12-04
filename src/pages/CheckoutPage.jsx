// src/pages/CheckoutPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PACKAGES = [
  {
    id: "intro",
    name: "Intro Session",
    durationLabel: "20-minute 1:1 session",
    price: 3,
    type: "one-off",
    description:
      "A first 20-minute mentoring call to get to know each other, explore your goals, and see if Firefly is a good fit.",
  },
  {
    id: "spark",
    name: "Spark",
    hours: 4,
    price: 80,
    type: "monthly",
    durationLabel: "4 hours of mentoring per month",
    description:
      "A light monthly commitment — perfect for building momentum.",
  },
  {
    id: "glow",
    name: "Glow",
    hours: 8,
    price: 120,
    type: "monthly",
    durationLabel: "8 hours of mentoring per month",
    description:
      "More time together for deeper clarity and accountability.",
  },
  {
    id: "ignite",
    name: "Ignite",
    hours: 16,
    price: 210,
    type: "monthly",
    durationLabel: "16 hours of mentoring per month",
    description:
      "High-touch mentoring for powerful, sustained growth.",
  },
];

export default function CheckoutPage() {
  const { tierId } = useParams();
  const navigate = useNavigate();

  const selectedPackage = useMemo(
    () => PACKAGES.find((pkg) => pkg.id === tierId),
    [tierId]
  );

  if (!selectedPackage) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <p className="text-xl mb-4 font-donau">
            Oops, that package doesn’t exist.
          </p>
          <button
            onClick={() => navigate("/packages")}
            className="px-4 py-2 rounded-lg bg-pink-500/80 hover:bg-pink-400 font-donau"
          >
            Back to Packages
          </button>
        </div>
      </div>
    );
  }

  const isIntro = selectedPackage.id === "intro";

  return (
    <div className="min-h-screen bg-black text-white flex justify-center px-4 py-16">
      <div className="max-w-4xl w-full grid gap-8 md:grid-cols-[1.1fr_1.4fr]">
        {/* SUMMARY */}
        <aside className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-xl">
          <h2 className="font-handelson text-3xl mb-4 drop-shadow-[0_0_15px_#ffd7ff]">
            {selectedPackage.name}
          </h2>

          <p className="font-donau text-sm text-amber-200 mb-2">
            {selectedPackage.durationLabel}
          </p>

          <p className="font-donau text-sm text-gray-200 mb-4">
            {selectedPackage.description}
          </p>

          {isIntro && (
            <p className="font-donau text-xs text-rose-300 mb-4">
              • This Intro Session can only be booked once per person.
              <br />
              • A small <span className="font-semibold">$3</span> fee applies to
              secure your spot (non-refundable).
            </p>
          )}

          {selectedPackage.type === "monthly" && (
            <p className="font-donau text-xs text-gray-400 mb-4">
              You can cluster or spread your hours across the month in a way
              that feels safe and sustainable for you.
            </p>
          )}

          <div className="border-t border-white/10 pt-4 mt-4">
            <div className="flex justify-between items-center">
              <span className="font-donau text-sm text-gray-300">
                {isIntro ? "Intro Session fee" : "Total (per month)"}
              </span>
              <span className="font-donau text-3xl text-pink-300">
                ${selectedPackage.price}
              </span>
            </div>
          </div>

          {!isIntro && (
            <p className="mt-4 font-donau text-xs text-gray-400">
              After payment, you’ll receive an email with a link to book your
              mentoring sessions.
            </p>
          )}

          {isIntro && (
            <p className="mt-4 font-donau text-xs text-gray-400">
              After your Intro Session, you’ll have the option to move into one
              of the monthly Firefly packages if it feels right.
            </p>
          )}
        </aside>

        {/* FORM + PAYPAL */}
        <main className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-xl">
          <h2 className="font-handelson text-3xl mb-4 drop-shadow-[0_0_15px_#ffd7ff]">
            Your Details
          </h2>

          <form className="space-y-6 font-donau text-sm">
            {/* Contact details */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block mb-1 text-left">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg bg-black/40 border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label className="block mb-1 text-left">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-lg bg-black/40 border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-left">
                What would you like support with?
              </label>
              <textarea
                rows={4}
                className="w-full rounded-lg bg-black/40 border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-pink-400"
                placeholder={
                  isIntro
                    ? "e.g. a goal you’re thinking about, an area you feel stuck in, or what drew you to Firefly..."
                    : "Share any context that will help us make the most of your package."
                }
              />
            </div>

            {/* PayPal section */}
            <div className="border-t border-white/10 pt-4">
              <h3 className="mb-3 text-left font-semibold text-gray-100">
                Payment (PayPal)
              </h3>

              <p className="text-xs text-gray-300 mb-3 text-left">
                When you’re ready, click the PayPal button below to complete
                your payment securely.
              </p>

              {isIntro && (
                <p className="mb-3 text-xs text-rose-300 text-left">
                  By confirming, you agree that the $3 Intro Session fee is
                  non-refundable and limited to one booking per person.
                </p>
              )}

              <div className="mt-3">
                <PayPalButtons
                  style={{ layout: "vertical" }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: String(selectedPackage.price),
                            currency_code: "AUD",
                          },
                          description: isIntro
                            ? "Firefly Mentoring - Intro Session (20 minutes)"
                            : `Firefly Mentoring - ${selectedPackage.name} package`,
                        },
                      ],
                    });
                  }}
                  onApprove={async (data, actions) => {
                    if (!actions.order) return;
                    const details = await actions.order.capture();
                    console.log("PayPal payment success:", details);

                    alert("Payment successful – thank you 🧡");
                    navigate("/thank-you");
                  }}
                  onError={(err) => {
                    console.error("PayPal error", err);
                    alert(
                      "Something went wrong with PayPal. Please try again, or contact me if it keeps happening."
                    );
                  }}
                />
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
