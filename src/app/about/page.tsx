export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
      
      <section className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-6">
          Saya adalah seorang mahasiswa teknik informatika yang memiliki passion mendalam dalam 
          pengembangan teknologi dan penelitian akademis. Perjalanan saya mencakup eksplorasi 
          di bidang full-stack development, machine learning, dan analisis sistem.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Filosofi & Pendekatan</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Website ini tidak sekadar menampilkan portofolio atau riwayat singkat, tetapi merepresentasikan 
          identitas, cara berpikir, nilai, dan perjalanan saya secara utuh. Saya percaya bahwa teknologi 
          seharusnya hadir sebagai solusi yang bermanfaat bagi kehidupan nyata, bukan hanya sebagai 
          pencapaian teknis semata.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Ketertarikan & Fokus</h2>
        <ul className="space-y-3 text-gray-700">
          <li>
            <strong>Riset & Analisis:</strong> Time-series forecasting, machine learning models (LSTM, XGBoost, SVR-PSO), 
            dan aplikasi teknologi dalam sistem zakat
          </li>
          <li>
            <strong>Pengembangan Web:</strong> Full-stack development dengan Next.js, Firebase, dan fokus pada 
            UI/UX yang minimalis namun fungsional
          </li>
          <li>
            <strong>Kepemimpinan & Kolaborasi:</strong> Pengelolaan proyek volunteer platform dan pengalaman 
            bekerja dalam tim multidisiplin
          </li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Nilai yang Saya Pegang</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Integritas intelektual, pembelajaran berkelanjutan, dan tanggung jawab sosial adalah fondasi 
          dari setiap pekerjaan yang saya lakukan. Saya percaya pada transparansi proses, bukan hanya 
          hasil akhir.
        </p>
      </section>
    </div>
  );
}