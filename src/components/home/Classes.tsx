import Image from 'next/image';

const classes = [
  {
    name: 'Warrior',
    image: '/class-warrior.jpg',
    desc: 'Front-line tank with high defense and melee damage.',
  },
  {
    name: 'Mage',
    image: '/class-mage.jpeg',
    desc: 'Master of elemental magic and crowd control.',
  },
  {
    name: 'Rogue',
    image: '/class-rogue.jpeg',
    desc: 'Stealth assassin with high critical damage.',
  },
];

export default function Classes() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-zinc-900 to-black text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-center tracking-tight">
          Character Classes
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {classes.map((c) => (
            <div
              key={c.name}
              className="group bg-gradient-to-br from-zinc-800 to-zinc-900 hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300 ease-in-out rounded-3xl overflow-hidden border border-purple-700/40"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-purple-400">{c.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
