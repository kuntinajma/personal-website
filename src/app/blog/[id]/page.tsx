import Link from 'next/link';

interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  
  // In production, fetch from Firestore based on ID
  // For now, using sample data
  const post = {
    id: id,
    title: 'Pembelajaran dari Iterasi Development',
    category: 'Tech & Development',
    date: '2024-12-15',
    author: 'Kunti Najma Jalia',
    content: `
## Pendahuluan

Proses development tidak pernah linear. Dalam pengembangan Youth Insight platform, saya belajar bahwa iterasi adalah jantung dari product evolution yang sehat.

## Problem: Ekspektasi vs Realitas

Saat pertama kali merancang admin panel, saya berpikir bahwa satu sprint development sudah cukup. Ternyata, feedback dari actual users membuka mata tentang use cases yang tidak terprediksi.

## Lesson 1: User Feedback is Gold

Bukan soal kode yang "sempurna", tetapi kode yang *solve actual problems*. Setiap iterasi membawa kita lebih dekat ke pemahaman yang lebih dalam tentang user needs.

## Lesson 2: Error Handling Matters

Firebase error messages yang cryptic mengajarkan saya pentingnya robust error handling. Tidak hanya catch error, tetapi provide meaningful feedback ke user.

## Lesson 3: Documentation as Communication

Code comments dan documentation bukan untuk diri sendiri hari ini, tetapi untuk team (dan diri sendiri 3 bulan kemudian). Clarity beats cleverness.

## Kesimpulan

Iterative development bukan tentang "trial and error", tetapi "hypothesis and validation". Setiap iterasi adalah eksperimen yang memberikan data untuk decision making yang lebih baik.
    `,
    tags: ['Development', 'Learning', 'Best Practices']
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Back Button */}
      <Link 
        href="/blog"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        ← Kembali ke Blog
      </Link>

      {/* Article Header */}
      <article>
        <header className="mb-8 pb-8 border-b border-gray-200">
          <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-sm text-gray-600 gap-4">
            <span>👤 {post.author}</span>
            <span>•</span>
            <span>📅 {new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {post.content}
          </div>
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Penutup Reflektif */}
        <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-2">💡 Refleksi Akhir</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Tulisan ini adalah snapshot dari proses pembelajaran yang terus berlanjut. 
            Setiap project membawa insight baru, dan saya percaya bahwa sharing lessons learned 
            adalah bagian dari kontribusi terhadap komunitas developer.
          </p>
        </div>
      </article>
    </div>
  );
}