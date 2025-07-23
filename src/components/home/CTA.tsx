'use client';

export default function CTA() {
  return (
    <section className="bg-purple-700 py-20 px-6 text-white text-center font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-extrabold">Join the GameVerse Community</h2>
        <p className="text-lg text-gray-100">
          Connect with thousands of players. Trade. Chat. Compete. Get exclusive access to beta
          releases and community events.
        </p>
        <a
          href="#"
          className="inline-block bg-black px-8 py-3 text-white rounded-xl font-semibold hover:bg-gray-900 transition"
        >
          Join Our Discord
        </a>
      </div>
    </section>
  );
}
