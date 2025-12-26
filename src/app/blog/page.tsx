'use client';

import { useState } from 'react';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  year: number;
}

export default function BlogPage() {
  // Sample blog data - in production, this would come from Firestore
  const allPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Pembelajaran dari Iterasi Development',
      summary: 'Refleksi tentang proses iterative development dan bagaimana error handling mengajarkan pentingnya robust system design.',
      category: 'Tech & Development',
      date: '2024-12-15',
      year: 2024
    },
    {
      id: '2',
      title: 'Metodologi dalam Riset Time-Series',
      summary: 'Bagaimana memilih model forecasting yang tepat berdasarkan karakteristik data dan konteks problem.',
      category: 'Research',
      date: '2024-11-20',
      year: 2024
    },
    {
      id: '3',
      title: 'UI/UX dan User Empathy',
      summary: 'Pentingnya memahami konteks pengguna dalam merancang interface yang tidak hanya indah, tetapi fungsional.',
      category: 'Design & UX',
      date: '2024-10-10',
      year: 2024
    },
    {
      id: '4',
      title: 'Belajar dari Kegagalan',
      summary: 'Cerita tentang project yang gagal launch dan pembelajaran berharga tentang scope management dan komunikasi tim.',
      category: 'Personal Reflection',
      date: '2024-09-05',
      year: 2024
    },
    {
      id: '5',
      title: 'Firebase untuk Rapid Prototyping',
      summary: 'Mengapa Firebase menjadi pilihan ideal untuk MVP development dan bagaimana memanfaatkan free tier secara maksimal.',
      category: 'Tech & Development',
      date: '2024-08-12',
      year: 2024
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(allPosts);

  const categories = ['All', ...Array.from(new Set(allPosts.map(post => post.category)))];
  const years = ['All', ...Array.from(new Set(allPosts.map(post => post.year.toString())))];

  const handleFilter = (category: string, year: string) => {
    let filtered = allPosts;

    if (category !== 'All') {
      filtered = filtered.filter(post => post.category === category);
    }

    if (year !== 'All') {
      filtered = filtered.filter(post => post.year.toString() === year);
    }

    setFilteredPosts(filtered);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    handleFilter(category, selectedYear);
  };

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    handleFilter(selectedCategory, year);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
      <p className="text-lg text-gray-600 mb-12">
        Refleksi, pembelajaran, dan pemikiran tentang teknologi, riset, dan perjalanan profesional.
      </p>

      {/* SECTION 1 - FILTER */}
      <div className="mb-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Filter by Category
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    selectedCategory === category
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Year Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Filter by Year
            </label>
            <div className="flex flex-wrap gap-2">
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => handleYearChange(year)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    selectedYear === year
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredPosts.length} of {allPosts.length} posts
        </div>
      </div>

      {/* SECTION 2 - DAFTAR ARTIKEL */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <article key={post.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString('id-ID', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {post.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {post.summary}
              </p>
              <Link 
                href={`/blog/${post.id}`}
                className="text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                Baca Selengkapnya →
              </Link>
            </article>
          ))
        ) : (
          <div className="col-span-2 text-center py-12">
            <p className="text-gray-500">No posts found with selected filters.</p>
          </div>
        )}
      </div>

      {/* Info Box */}
      <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-blue-900 mb-2">📝 About This Blog</h3>
        <p className="text-blue-800 text-sm leading-relaxed">
          Blog ini adalah ruang untuk berbagi pembelajaran, refleksi, dan pemikiran yang muncul 
          dari pengalaman praktis. Bukan opini semata, tetapi hasil dari observasi, analisis, 
          dan proses berpikir yang dapat dipertanggungjawabkan.
        </p>
      </div>
    </div>
  );
}