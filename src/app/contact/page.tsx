export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
      <p className="text-lg text-gray-600 mb-12">
        Tertarik untuk berkolaborasi, diskusi riset, atau sekadar berbincang tentang teknologi dan pembelajaran? 
        Jangan ragu untuk menghubungi saya.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-2xl mr-4">📧</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">Untuk kolaborasi akademis atau profesional</p>
                  <a href="mailto:contact@example.com" className="text-blue-600 hover:text-blue-800">
                    contact@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-2xl mr-4">👨‍💻</div>
                <div>
                  <h3 className="font-semibold text-gray-800">GitHub</h3>
                  <p className="text-gray-600">Lihat project dan contribution saya</p>
                  <a 
                    href="https://github.com/kuntinajma" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    github.com/kuntinajma
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Areas of Interest</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Research collaboration opportunities</li>
              <li>• Full-stack development projects</li>
              <li>• Machine learning & data analysis</li>
              <li>• Open source contributions</li>
              <li>• Speaking engagements</li>
            </ul>
          </div>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Response Time</h2>
          <p className="text-gray-700 mb-4">
            Saya biasanya merespon email dalam 24-48 jam. Untuk diskusi yang lebih mendalam, 
            saya senang untuk mengatur meeting atau video call.
          </p>
          
          <div className="mt-6 p-4 bg-white border border-gray-200 rounded">
            <h3 className="font-semibold text-gray-800 mb-2">Note</h3>
            <p className="text-sm text-gray-600">
              Website ini adalah platform personal yang terus berkembang. Saya terbuka untuk 
              feedback, kritik konstruktif, dan saran untuk improvement.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}