'use client';

export default function Roadmap() {
  const milestones = [
    {
      quarter: 'Q3 2025',
      title: 'Beta Launch',
      desc: 'Open beta with limited access, player feedback, and early NFT drops.',
    },
    {
      quarter: 'Q4 2025',
      title: 'Marketplace & Tournaments',
      desc: 'Launch in-game marketplace and seasonal ranked tournaments with real prizes.',
    },
    {
      quarter: 'Q1 2026',
      title: 'Expansion Update',
      desc: 'New regions, classes, story content, and clan system introduction.',
    },
    {
      quarter: 'Q2 2026',
      title: 'Mobile Launch',
      desc: 'Cross-platform support including iOS and Android for global access.',
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">Game Roadmap</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-md hover:border-purple-600 transition"
            >
              <div className="text-purple-500 font-bold mb-2">{item.quarter}</div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
