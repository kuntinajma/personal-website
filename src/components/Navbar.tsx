import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold text-gray-900 hover:text-gray-700 transition">
            Najma
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-gray-900 transition">
              About
            </Link>
            <Link href="/research" className="text-gray-700 hover:text-gray-900 transition">
              Research
            </Link>
            <Link href="/publications" className="text-gray-700 hover:text-gray-900 transition">
              Publications
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-gray-900 transition">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition">
              Contact
            </Link>
          </div>

          {/* Mobile menu button - TODO: implement mobile menu */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}