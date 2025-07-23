'use client';

import { LucideRocket, LucideWallet, LucideSwords } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="bg-violet-100 py-24 px-6 text-gray-900 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <LucideRocket size={40} className="text-violet-700" />,
              title: 'Start the Adventure',
              desc: 'Create your character and dive into immersive fantasy gameplay.',
            },
            {
              icon: <LucideSwords size={40} className="text-violet-700" />,
              title: 'Battle & Explore',
              desc: 'Fight bosses, join guilds, and uncover hidden treasures.',
            },
            {
              icon: <LucideWallet size={40} className="text-violet-700" />,
              title: 'Earn & Trade',
              desc: 'Collect NFTs, earn tokens, and trade with other players.',
            },
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition border border-violet-200"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
