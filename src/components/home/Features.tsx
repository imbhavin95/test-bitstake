import { ShieldCheck, Sword, Medal, Map } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: <ShieldCheck size={40} />, title: 'Secure NFTs' },
    { icon: <Sword size={40} />, title: 'Weapon Crafting' },
    { icon: <Medal size={40} />, title: 'Ranked Rewards' },
    { icon: <Map size={40} />, title: 'Open World Map' },
  ];

  return (
    <section className="bg-gray-900 text-white py-20 px-6" id="features">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Game Features</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 transition-transform"
            >
              <div className="flex justify-center mb-4 text-purple-400">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
