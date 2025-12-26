export default function SkillsPage() {
  const hardSkills = [
    {
      category: "Analisis Sistem & Bisnis",
      skills: [
        { name: "Requirements Analysis", description: "Mengidentifikasi dan mendokumentasikan kebutuhan sistem" },
        { name: "Business Process Modeling", description: "Memetakan alur proses bisnis untuk optimasi" },
        { name: "System Design", description: "Merancang arsitektur sistem yang scalable" },
        { name: "Data Analysis", description: "Analisis data untuk insight dan decision making" }
      ]
    },
    {
      category: "Data & Machine Learning",
      skills: [
        { name: "Time-Series Forecasting", description: "LSTM, XGBoost, SVR-PSO untuk prediksi" },
        { name: "Data Preprocessing", description: "Cleaning, transformation, feature engineering" },
        { name: "Statistical Analysis", description: "Analisis statistik untuk validasi model" },
        { name: "Model Evaluation", description: "Metrics: RMSE, MAE, MAPE untuk accuracy assessment" }
      ]
    },
    {
      category: "Project Management",
      skills: [
        { name: "Agile & Scrum", description: "Sprint planning, daily standup, retrospective" },
        { name: "Team Leadership", description: "Koordinasi tim multidisiplin" },
        { name: "Documentation", description: "Technical dan user documentation" },
        { name: "Risk Management", description: "Identifikasi dan mitigasi risiko proyek" }
      ]
    },
    {
      category: "Tools & Teknologi",
      skills: [
        { name: "Frontend", description: "Next.js, React, TypeScript, Tailwind CSS" },
        { name: "Backend", description: "Firebase (Firestore, Auth, Storage, Functions), Node.js" },
        { name: "Version Control", description: "Git, GitHub, collaborative workflows" },
        { name: "Deployment", description: "Vercel, Firebase Hosting, CI/CD pipelines" },
        { name: "Data Science", description: "Python, Pandas, NumPy, Scikit-learn, TensorFlow" },
        { name: "Design", description: "Figma, UI/UX principles, responsive design" }
      ]
    }
  ];

  const softSkills = [
    {
      skill: "Critical Thinking",
      evidence: "Menganalisis masalah kompleks dalam proyek zakat forecasting dengan pendekatan metodologis yang terstruktur"
    },
    {
      skill: "Communication",
      evidence: "Mempresentasikan hasil riset kepada stakeholder non-teknis dengan bahasa yang accessible"
    },
    {
      skill: "Adaptability",
      evidence: "Beralih dari waterfall ke agile development mid-project berdasarkan feedback tim"
    },
    {
      skill: "Collaborative Problem-Solving",
      evidence: "Bekerja dengan designer, backend engineer, dan product manager dalam Youth Insight platform"
    },
    {
      skill: "Self-Learning",
      evidence: "Mempelajari Next.js 15 dan Firebase integration secara mandiri melalui documentation dan trial-error"
    },
    {
      skill: "Attention to Detail",
      evidence: "Debugging complex Firebase security rules dan optimizing Firestore queries untuk performance"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Keahlian</h1>
      <p className="text-lg text-gray-600 mb-12">
        Kompetensi teknis dan non-teknis yang terbukti melalui pengalaman praktis dan pembelajaran berkelanjutan.
      </p>

      {/* SECTION 1 - HARD SKILLS */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 border-b-2 border-gray-200 pb-2">
          Hard Skills
        </h2>
        <div className="space-y-8">
          {hardSkills.map((group, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{group.category}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {group.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
                    <h4 className="font-semibold text-gray-900 mb-1">{skill.name}</h4>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2 - SOFT SKILLS */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 border-b-2 border-gray-200 pb-2">
          Soft Skills
        </h2>
        <div className="space-y-4">
          {softSkills.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.skill}</h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="text-sm font-medium text-gray-500">Bukti: </span>
                {item.evidence}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Note */}
      <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-blue-900 mb-2">💡 Pendekatan Pembelajaran</h3>
        <p className="text-blue-800 text-sm leading-relaxed">
          Setiap skill dikembangkan melalui kombinasi pembelajaran formal, praktik langsung, dan refleksi. 
          Saya percaya bahwa kompetensi yang sustainable datang dari understanding the "why" behind the "how".
        </p>
      </div>
    </div>
  );
}