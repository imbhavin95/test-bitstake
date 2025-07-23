'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-purple-800 to-black text-white py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Enter the <span className="text-purple-400">GameVerse</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Choose your faction. Upgrade your gear. Conquer realms and earn rewards in our
            play-to-earn universe.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg text-lg transition">
            Get Started
          </button>
        </div>
        <div className="flex justify-center">
          <Image
            src="/hero-image.jpg"
            alt="Game hero"
            width={600}
            height={600}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
