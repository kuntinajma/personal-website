export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Kredensial Singkat */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Kunti Najma Jalia</h3>
            <p className="text-sm text-gray-600">
              Mahasiswa Teknik Informatika yang berfokus pada pengembangan web, machine learning, 
              dan analisis sistem. Website ini merepresentasikan perjalanan intelektual dan 
              profesional secara transparan dan bertanggung jawab.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Navigasi Cepat</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/about" className="hover:text-gray-900 transition">Tentang</a></li>
              <li><a href="/research" className="hover:text-gray-900 transition">Research</a></li>
              <li><a href="/publications" className="hover:text-gray-900 transition">Publikasi</a></li>
              <li><a href="/blog" className="hover:text-gray-900 transition">Blog</a></li>
              <li><a href="/contact" className="hover:text-gray-900 transition">Kontak</a></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Terhubung</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="https://github.com/kuntinajma" target="_blank" rel="noopener noreferrer" 
                   className="hover:text-gray-900 transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/kuntinajmajalia" target="_blank" rel="noopener noreferrer" 
                   className="hover:text-gray-900 transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-900 transition">Email</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Disclaimer & Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 space-y-2">
          <p className="text-xs text-gray-500 text-center">
            <strong>Disclaimer:</strong> Konten dalam website ini merepresentasikan pandangan dan 
            pengalaman personal. Setiap informasi disajikan dengan itikad baik dan dapat berubah 
            seiring perkembangan.
          </p>
          <p className="text-sm text-gray-600 text-center">
            © {currentYear} Kunti Najma Jalia. Dibangun dengan Next.js & Firebase.
          </p>
        </div>
      </div>
    </footer>
  );
}