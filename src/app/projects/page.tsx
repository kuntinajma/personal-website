export default function ProjectsPage() {
  const projects = [
    {
      title: "Youth Insight Platform",
      description: "Platform volunteer management system dengan admin panel untuk pengelolaan program. Dikembangkan dengan Next.js, Firebase, dan Vercel.",
      tags: ["Next.js", "Firebase", "UI/UX", "Full-Stack"],
      status: "Active Development",
      role: "Lead Developer"
    },
    {
      title: "Zakat Forecasting System",
      description: "Sistem prediksi zakat menggunakan hybrid machine learning models (LSTM, XGBoost, SVR-PSO) untuk meningkatkan akurasi forecasting.",
      tags: ["Machine Learning", "Python", "Time-Series", "Research"],
      status: "Research Project",
      role: "Researcher"
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
      <p className="text-lg text-gray-600 mb-12">
        Dokumentasi pengalaman dalam mengelola proyek, melakukan analisis sistem, dan bekerja dalam tim multidisiplin.
      </p>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-2xl font-semibold text-gray-900">
                {project.title}
              </h2>
              <span className="ml-4 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full whitespace-nowrap">
                {project.status}
              </span>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-sm text-gray-600">
              <strong>Role:</strong> {project.role}
            </p>
          </div>
        ))}
      </div>

      <section className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Technical Stack</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Frontend</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Next.js / React</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Backend</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Firebase (Firestore, Auth, Storage)</li>
              <li>• Cloud Functions</li>
              <li>• RESTful APIs</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Tools & Platforms</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Git / GitHub</li>
              <li>• Vercel</li>
              <li>• VS Code</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}