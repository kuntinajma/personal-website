export default function ExperiencePage() {
  const workExperience = [
    {
      position: "Full-Stack Developer",
      company: "Youth Insight Platform",
      period: "2024 - Sekarang",
      type: "Volunteer Project",
      responsibilities: [
        "Mengembangkan platform volunteer management dengan Next.js dan Firebase",
        "Merancang dan mengimplementasi admin panel untuk pengelolaan program",
        "Integrasi Firebase Authentication, Firestore, dan Storage",
        "UI/UX refinement untuk meningkatkan user experience"
      ],
      impact: "Platform berhasil digunakan oleh 50+ volunteers dan mengelola 10+ program aktif",
      learning: "Pentingnya iterative development dan user feedback dalam product evolution"
    },
    {
      position: "Research Assistant",
      company: "[Nama Institusi/Lab]",
      period: "2023 - 2024",
      type: "Academic",
      responsibilities: [
        "Melakukan riset tentang time-series forecasting untuk sistem zakat",
        "Implementasi hybrid machine learning models (LSTM, XGBoost, SVR-PSO)",
        "Analisis data dan validasi model dengan statistical methods",
        "Dokumentasi riset dan penyusunan paper akademis"
      ],
      impact: "Model yang dikembangkan mencapai akurasi 85% dalam prediksi penerimaan zakat",
      learning: "Metodologi riset yang rigorous dan pentingnya reproducibility dalam science"
    }
  ];

  const organizationExperience = [
    {
      role: "Project Lead",
      organization: "[Nama Organisasi Kemahasiswaan]",
      context: "Program pengabdian masyarakat berbasis teknologi",
      period: "2023 - 2024",
      contributions: [
        "Memimpin tim 8 orang dalam pengembangan aplikasi edukasi untuk UMKM",
        "Koordinasi dengan stakeholder eksternal dan manajemen timeline project",
        "Facilitasi workshop dan training untuk end-users"
      ],
      values: "Pentingnya empathy dan contextual understanding dalam technology for social good"
    },
    {
      role: "Volunteer Coordinator",
      organization: "[Nama Komunitas]",
      context: "Program literasi digital untuk pelajar di daerah terpencil",
      period: "2022 - 2023",
      contributions: [
        "Mengelola 20+ volunteers dalam program teaching dan mentoring",
        "Mengembangkan curriculum dan learning materials",
        "Monitoring dan evaluasi impact program"
      ],
      values: "Education as empowerment dan pentingnya sustainable community development"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Pengalaman</h1>
      <p className="text-lg text-gray-600 mb-12">
        Praktik nyata yang membentuk cara kerja, pemahaman konteks, dan kontribusi terhadap masyarakat.
      </p>

      {/* SECTION 1 - PENGALAMAN KERJA */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">
          Pengalaman Kerja
        </h2>
        <div className="space-y-8">
          {workExperience.map((exp, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                  <p className="text-lg text-gray-700">{exp.company}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    {exp.type}
                  </span>
                  <p className="text-sm text-gray-600 mt-2">{exp.period}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Tanggung Jawab Utama:</h4>
                <ul className="space-y-1">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-gray-700 text-sm">• {resp}</li>
                  ))}
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm">Dampak:</h4>
                  <p className="text-gray-600 text-sm">{exp.impact}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm">Pembelajaran:</h4>
                  <p className="text-gray-600 text-sm">{exp.learning}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2 - ORGANISASI & SOSIAL */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">
          Organisasi & Kegiatan Sosial
        </h2>
        <div className="space-y-6">
          {organizationExperience.map((exp, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{exp.role}</h3>
                  <p className="text-gray-700">{exp.organization}</p>
                  <p className="text-sm text-gray-600 mt-1">{exp.context}</p>
                </div>
                <span className="text-sm text-gray-600">{exp.period}</span>
              </div>

              <div className="mb-3">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Kontribusi:</h4>
                <ul className="space-y-1">
                  {exp.contributions.map((contrib, i) => (
                    <li key={i} className="text-gray-700 text-sm">• {contrib}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-1 text-sm">Nilai yang Dipelajari:</h4>
                <p className="text-gray-600 text-sm italic">{exp.values}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-2">💭 Refleksi</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Setiap pengalaman membentuk cara saya memahami teknologi dalam konteks nyata. 
          Bukan hanya tentang code yang berjalan, tetapi tentang impact yang dihasilkan dan 
          bagaimana teknologi bisa menjadi alat untuk solving real problems.
        </p>
      </div>
    </div>
  );
}