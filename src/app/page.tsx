export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Najma
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Full-Stack Developer · Graduate Researcher · Systems Analyst
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Saya seorang akademisi dan praktisi yang berfokus pada pengembangan aplikasi web, 
          machine learning, dan analisis data. Penelitian saya mencakup time-series forecasting 
          dan sistem zakat berbasis teknologi.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Website ini merepresentasikan perjalanan intelektual dan profesional saya—bukan sekadar 
          portfolio, tetapi ruang yang mengintegrasikan pemikiran, riset, dan praktik nyata dalam 
          satu ekosistem digital.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
          <div className="text-3xl mb-3">🔬</div>
          <h3 className="text-lg font-semibold mb-2">Research</h3>
          <p className="text-gray-600 text-sm">
            Forecasting, Machine Learning, Time-Series Analysis, Zakat Systems
          </p>
        </div>
        
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
          <div className="text-3xl mb-3">💻</div>
          <h3 className="text-lg font-semibold mb-2">Development</h3>
          <p className="text-gray-600 text-sm">
            Full-Stack Web, Firebase, Next.js, React, UI/UX Design
          </p>
        </div>
        
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
          <div className="text-3xl mb-3">🎯</div>
          <h3 className="text-lg font-semibold mb-2">Leadership</h3>
          <p className="text-gray-600 text-sm">
            Project Management, Volunteer Programs, Team Collaboration
          </p>
        </div>
      </section>
    </div>
  );
}