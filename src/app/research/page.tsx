export default function ResearchPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Research</h1>
      <p className="text-lg text-gray-600 mb-12">
        Fokus riset saya mencakup machine learning, time-series forecasting, dan aplikasi teknologi 
        untuk sistem zakat.
      </p>
      
      <section className="space-y-8">
        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Zakat Forecasting Systems
          </h2>
          <div className="flex gap-2 mb-3">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Machine Learning</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Time-Series</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Islamic Fintech</span>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mengembangkan model prediksi untuk sistem zakat menggunakan hybrid machine learning approaches. 
            Penelitian ini mengeksplorasi kombinasi LSTM, XGBoost, dan SVR-PSO untuk meningkatkan akurasi 
            forecasting.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Status:</strong> Ongoing Research | <strong>Methodology:</strong> Quantitative Analysis
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Web Application Development
          </h2>
          <div className="flex gap-2 mb-3">
            <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Full-Stack</span>
            <span className="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full">UI/UX</span>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Riset praktis dalam pengembangan platform volunteer management system (Youth Insight) dengan 
            fokus pada user experience, Firebase backend integration, dan iterative development process.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Status:</strong> In Progress | <strong>Approach:</strong> Applied Research
          </p>
        </div>
      </section>

      <section className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Research Interests</h2>
        <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
          <li>• Hybrid Machine Learning Models</li>
          <li>• Time-Series Forecasting Techniques</li>
          <li>• Islamic Fintech & Zakat Systems</li>
          <li>• Data-Driven Decision Making</li>
          <li>• Web Application Architecture</li>
          <li>• Human-Computer Interaction</li>
        </ul>
      </section>
    </div>
  );
}