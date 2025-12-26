export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Najma</h3>
            <p className="text-sm text-gray-600">
              Personal professional-academic platform showcasing research, development work, and intellectual journey.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/about" className="hover:text-gray-900 transition">About</a></li>
              <li><a href="/research" className="hover:text-gray-900 transition">Research</a></li>
              <li><a href="/publications" className="hover:text-gray-900 transition">Publications</a></li>
              <li><a href="/projects" className="hover:text-gray-900 transition">Projects</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Connect</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="https://github.com/kuntinajma" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition">GitHub</a></li>
              <li><a href="/contact" className="hover:text-gray-900 transition">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>© {currentYear} Najma. Built with Next.js & Firebase.</p>
        </div>
      </div>
    </footer>
  );
}