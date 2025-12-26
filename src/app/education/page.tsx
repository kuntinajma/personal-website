export default function EducationPage() {
  const educationData = [
    {
      institution: "Universitas [Nama Universitas]",
      program: "S2 Teknik Informatika",
      period: "2023 - Sekarang",
      focus: "Machine Learning, Data Science, Time-Series Forecasting",
      description: "Fokus penelitian pada hybrid machine learning untuk sistem prediksi dan analisis data."
    },
    {
      institution: "Universitas [Nama Universitas]",
      program: "S1 Teknik Informatika",
      period: "2019 - 2023",
      focus: "Software Engineering, Web Development, Database Systems",
      description: "Membangun fondasi dalam pengembangan aplikasi dan sistem informasi."
    }
  ];

  const trainingData = [
    {
      name: "Full-Stack Web Development Bootcamp",
      organizer: "[Nama Penyelenggara]",
      duration: "3 bulan",
      competencies: "Next.js, React, Node.js, Firebase, Deployment"
    },
    {
      name: "Machine Learning & Data Science",
      organizer: "[Nama Platform Online]",
      duration: "6 bulan",
      competencies: "Python, TensorFlow, Scikit-learn, Time-Series Analysis"
    },
    {
      name: "Project Management Professional",
      organizer: "[Nama Institusi]",
      duration: "2 bulan",
      competencies: "Agile, Scrum, Team Leadership, Risk Management"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Pendidikan & Pelatihan</h1>
      <p className="text-lg text-gray-600 mb-12">
        Fondasi akademik dan pembelajaran formal yang membentuk kompetensi dan cara berpikir.
      </p>

      {/* SECTION 1 - PENDIDIKAN FORMAL */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">
          Pendidikan Formal
        </h2>
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{edu.institution}</h3>
                  <p className="text-lg text-gray-700">{edu.program}</p>
                </div>
                <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
              <p className="text-gray-600 mb-3">
                <strong>Fokus Akademik:</strong> {edu.focus}
              </p>
              <p className="text-gray-700 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2 - PELATIHAN & BOOTCAMP */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">
          Pelatihan & Bootcamp
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {trainingData.map((training, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{training.name}</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Penyelenggara:</strong> {training.organizer}
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Durasi:</strong> {training.duration}
              </p>
              <div className="pt-3 border-t border-gray-100">
                <p className="text-sm text-gray-700">
                  <strong>Kompetensi:</strong> {training.competencies}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Box */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-2">🎯 Pembelajaran Berkelanjutan</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Selain pendidikan formal, saya aktif mengikuti online courses, webinar, dan workshop 
          untuk terus mengupdate pengetahuan sesuai perkembangan teknologi dan metodologi terkini.
        </p>
      </div>
    </div>
  );
}