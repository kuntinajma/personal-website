import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* SECTION 1 - HERO */}
      <section className="py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Kunti Najma Jalia
        </h1>
        <p className="text-xl text-gray-700 mb-6 font-medium">
          Mahasiswa Teknik Informatika · Peneliti · Pengembang Sistem
        </p>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Menjembatani riset akademik, pengembangan teknologi, dan pembelajaran kontekstual 
          dalam satu platform yang transparan dan bertanggung jawab.
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/about"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium"
          >
            Lihat Profil
          </Link>
          <Link 
            href="/blog"
            className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition font-medium"
          >
            Baca Blog
          </Link>
        </div>
      </section>

      {/* SECTION 2 - IDENTITAS INTI (3 Pilar) */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Identitas & Fokus</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Pilar 1: Profesional & Teknologi */}
          <div className="p-8 border border-gray-200 rounded-lg hover:shadow-xl transition">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Profesional & Teknologi
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Pengembangan aplikasi web full-stack, UI/UX design, dan sistem berbasis Firebase. 
              Fokus pada solusi yang user-centric dan maintainable.
            </p>
          </div>

          {/* Pilar 2: Akademik & Publikasi */}
          <div className="p-8 border border-gray-200 rounded-lg hover:shadow-xl transition">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Akademik & Publikasi
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Riset dalam machine learning, time-series forecasting, dan sistem zakat. 
              Publikasi yang didasarkan pada metodologi yang dapat dipertanggungjawabkan.
            </p>
          </div>

          {/* Pilar 3: Kepemimpinan & Pembelajaran */}
          <div className="p-8 border border-gray-200 rounded-lg hover:shadow-xl transition">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Kepemimpinan & Pembelajaran
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Pengalaman dalam project management, team collaboration, dan volunteer programs. 
              Pembelajaran kontekstual melalui praktik dan refleksi.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 - HIGHLIGHT TERPILIH */}
      <section className="py-16 bg-gray-50 -mx-4 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Sorotan Terkini</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pengalaman Kerja Utama */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">Pengalaman Terkini</h3>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Aktif</span>
              </div>
              <h4 className="font-medium text-gray-800 mb-2">Youth Insight Platform Developer</h4>
              <p className="text-sm text-gray-600 mb-3">
                Mengembangkan platform volunteer management dengan admin panel dan sistem 
                pengelolaan program menggunakan Next.js dan Firebase.
              </p>
              <Link href="/experience" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                Lihat Pengalaman Lengkap →
              </Link>
            </div>

            {/* Proyek Unggulan */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">Proyek Unggulan</h3>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Research</span>
              </div>
              <h4 className="font-medium text-gray-800 mb-2">Zakat Forecasting System</h4>
              <p className="text-sm text-gray-600 mb-3">
                Sistem prediksi zakat menggunakan hybrid machine learning models (LSTM, XGBoost, SVR-PSO) 
                untuk meningkatkan akurasi forecasting.
              </p>
              <Link href="/projects" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                Lihat Semua Proyek →
              </Link>
            </div>

            {/* Publikasi Terbaru */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">Publikasi Terbaru</h3>
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Academic</span>
              </div>
              <h4 className="font-medium text-gray-800 mb-2">Time-Series Forecasting in Zakat Systems</h4>
              <p className="text-sm text-gray-600 mb-3">
                Penelitian tentang penerapan metode hybrid machine learning untuk prediksi 
                penerimaan zakat dengan pendekatan data-driven.
              </p>
              <Link href="/publications" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                Lihat Publikasi →
              </Link>
            </div>

            {/* Blog Terbaru */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">Blog Terbaru</h3>
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">Reflection</span>
              </div>
              <h4 className="font-medium text-gray-800 mb-2">Pembelajaran dari Iterasi Development</h4>
              <p className="text-sm text-gray-600 mb-3">
                Refleksi tentang proses iterative development dan bagaimana error handling 
                mengajarkan pentingnya robust system design.
              </p>
              <Link href="/blog" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                Baca Blog →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - CATATAN PERSONAL */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-4 border-gray-900 pl-6">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Website ini bukan sekadar portfolio digital, tetapi representasi dari cara saya berpikir, 
              belajar, dan berkontribusi. Setiap proyek, publikasi, dan tulisan disusun untuk menunjukkan 
              konsistensi antara pemikiran dan praktik nyata.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Saya percaya pada transparansi proses, pembelajaran berkelanjutan, dan tanggung jawab 
              intelektual. Platform ini akan terus berkembang seiring perjalanan akademik dan profesional saya.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 - FOOTER PREVIEW / CTA */}
      <section className="py-16 text-center border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Mari Terhubung</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Terbuka untuk kolaborasi riset, diskusi teknologi, atau sekadar berbincang 
          tentang pembelajaran dan pengembangan sistem.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="https://github.com/kuntinajma" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/kuntinajmajalia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
          >
            LinkedIn
          </a>
          <Link 
            href="/contact"
            className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
          >
            Kontak Saya
          </Link>
        </div>
      </section>
    </div>
  );
}