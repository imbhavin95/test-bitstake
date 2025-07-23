export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h4 className="font-bold text-lg mb-4">GameVerse</h4>
          <p className="text-sm text-gray-400">
            Enter the play-to-earn universe. Join, fight, earn, and rule!
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#classes">Classes</a>
            </li>
            <li>
              <a href="#roadmap">Roadmap</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">Whitepaper</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Community</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">Discord</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">YouTube</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10 text-gray-500 text-sm">
        © 2025 GameVerse. All rights reserved.
      </div>
    </footer>
  );
}
