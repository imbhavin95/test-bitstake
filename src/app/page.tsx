'use client';

import Image from 'next/image';
import { ShieldCheck, Sword, Medal, Map } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-800 to-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
          <Image
            src="/hero-image.jpg"
            alt="Game hero"
            width={500}
            height={500}
            className="w-full"
          />
          <div>
            <h1 className="text-5xl font-bold mb-6">Enter the GameVerse</h1>
            <p className="mb-6 text-lg">
              Choose your faction. Upgrade your gear. Conquer realms and earn rewards in our play-to-earn universe.
            </p>
            <a
              href="#classes"
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 text-white rounded-lg font-bold"
            >
              Choose Your Class
            </a>
          </div>
        </div>
      </section>

      {/* Game Features */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Game Features</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck size={40} />, title: 'Secure NFTs' },
              { icon: <Sword size={40} />, title: 'Weapon Crafting' },
              { icon: <Medal size={40} />, title: 'Ranked Rewards' },
              { icon: <Map size={40} />, title: 'Open World Map' }
            ].map((f, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4 text-purple-400">
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold">{f.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Character Classes */}
      <section
        id="classes"
        className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 text-white"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">Character Classes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Warrior',
                image: '/class-warrior.jpg',
                desc: 'Front-line tank with high defense and melee damage.'
              },
              {
                name: 'Mage',
                image: '/class-mage.jpeg',
                desc: 'Master of elemental magic and crowd control.'
              },
              {
                name: 'Rogue',
                image: '/class-rogue.jpeg',
                desc: 'Stealth assassin with high critical damage.'
              }
            ].map((c) => (
              <div key={c.name} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
                <Image src={c.image} alt={c.name} width={500} height={300} />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{c.name}</h3>
                  <p className="text-sm text-gray-300">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="community"
        className="py-24 bg-purple-700 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Join the GameVerse Community</h2>
        <p className="mb-6">
          Connect with thousands of players. Trade. Chat. Compete.
        </p>
        <a
          href="#"
          className="bg-black px-6 py-3 rounded-lg text-white font-semibold hover:bg-gray-900"
        >
          Join Discord
        </a>
      </section>
      {/* Community Voices */}
      <section className="bg-gray-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What Players Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'ShadowKnight',
                comment: 'The best PvP I’ve ever played — addictive and strategic.',
                avatar: '/avatar/avatar1.jpeg'
              },
              {
                name: 'ArcaneMage',
                comment: 'Stunning design. Finally a game that pays back.',
                avatar: '/avatar/avatar2.jpeg'
              },
              {
                name: 'StealthFox',
                comment: 'I’ve already made 3 NFTs just by playing!',
                avatar: '/avatar/avatar3.jpeg'
              }
            ].map((t, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <h4 className="text-lg font-bold">{t.name}</h4>
                </div>
                <p className="text-sm text-gray-300 italic">“{t.comment}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-black to-purple-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">GameVerse At a Glance</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'Active Players', value: '120K+' },
              { label: 'NFTs Minted', value: '89,000' },
              { label: 'Guilds Formed', value: '430+' },
              { label: 'Monthly Battles', value: '1.4M+' }
            ].map((stat, i) => (
              <div key={i}>
                <h3 className="text-3xl font-bold text-purple-400">{stat.value}</h3>
                <p className="text-sm text-gray-300 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
