'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface Publication {
  id: string;
  title: string;
  authors: string;
  year: number;
  venue: string;
  type: string;
  abstract?: string;
  url?: string;
}

export default function PublicationsPage() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const q = query(
          collection(db, 'publications'),
          orderBy('year', 'desc')
        );
        
        const querySnapshot = await getDocs(q);
        const pubs = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Publication[];
        
        setPublications(pubs);
      } catch (err) {
        console.error('Error fetching publications:', err);
        setError('Could not load publications. Make sure Firebase is configured.');
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center text-gray-600">Loading publications...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Publications</h1>
      <p className="text-lg text-gray-600 mb-12">
        Academic papers, research outputs, and technical writings.
      </p>

      {error && (
        <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-yellow-800">{error}</p>
          <p className="text-sm text-yellow-700 mt-2">
            Tip: Add publications to your Firestore database in the 'publications' collection.
          </p>
        </div>
      )}

      {publications.length === 0 && !error ? (
        <div className="text-center p-12 bg-gray-50 rounded-lg">
          <p className="text-gray-600 mb-4">No publications yet.</p>
          <p className="text-sm text-gray-500">
            Publications will appear here once added to the Firebase database.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {publications.map(pub => (
            <article key={pub.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold text-gray-900 flex-1">
                  {pub.title}
                </h2>
                <span className="ml-4 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full whitespace-nowrap">
                  {pub.year}
                </span>
              </div>
              
              <p className="text-gray-600 mb-2">{pub.authors}</p>
              <p className="text-sm text-gray-500 mb-3">
                <em>{pub.venue}</em> • {pub.type}
              </p>
              
              {pub.abstract && (
                <p className="text-gray-700 leading-relaxed mb-3">{pub.abstract}</p>
              )}
              
              {pub.url && (
                <a 
                  href={pub.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Read more →
                </a>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}