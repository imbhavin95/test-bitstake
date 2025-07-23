export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">⚔️ GameVerse</h3>
                <p className="text-sm text-gray-400">
                    Explore realms, collect rare NFTs, and build your legend in the most immersive blockchain RPG.
                </p>
            </div>

            {/* Quick Links */}
            <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-purple-400">Home</a></li>
                <li><a href="#classes" className="hover:text-purple-400">Classes</a></li>
                <li><a href="#community" className="hover:text-purple-400">Community</a></li>
                <li><a href="#roadmap" className="hover:text-purple-400">Roadmap</a></li>
            </ul>
            </div>

            {/* Resources */}
            <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-purple-400">Whitepaper</a></li>
                <li><a href="#" className="hover:text-purple-400">Support</a></li>
                <li><a href="#" className="hover:text-purple-400">Terms</a></li>
                <li><a href="#" className="hover:text-purple-400">Privacy Policy</a></li>
            </ul>
            </div>

            {/* Social */}
            <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-purple-400">Twitter</a></li>
                <li><a href="#" className="hover:text-purple-400">Discord</a></li>
                <li><a href="#" className="hover:text-purple-400">YouTube</a></li>
                <li><a href="#" className="hover:text-purple-400">Telegram</a></li>
            </ul>
            </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-10">
            &copy; {new Date().getFullYear()} GameVerse. All rights reserved.
        </div>
    </footer>
  );
}
