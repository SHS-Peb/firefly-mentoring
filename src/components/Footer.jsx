export default function Footer() {
  return (
    <footer className="w-full py-10 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center gap-4 text-gray-300">

        {/* Copyright */}
        <p className="font-donau text-[20px] text-gray-500">
          © {new Date().getFullYear()} Firefly Mentoring. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
