import { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { event } from '../utils/analytics'; // add at the top

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // filters
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState([]); // array of tag strings

  useEffect(() => {
    fetch('/blog/index.json', { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => setPosts(Array.isArray(data) ? data : []))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  // all unique tags (sorted)
  const allTags = useMemo(() => {
    const set = new Set();
    for (const p of posts) {
      (p.tags || []).forEach(t => set.add(String(t)));
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [posts]);

  // sorted posts (newest first)
  const sorted = useMemo(() => {
    return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [posts]);

  // filtering
  const q = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    return sorted.filter(p => {
      // text match: title + excerpt + tags
      const haystack = [
        p.title || '',
        p.excerpt || '',
        ...(p.tags || [])
      ].join(' ').toLowerCase();

      const textMatch = q === '' || haystack.includes(q);

      // tag match: if none selected -> pass; else any overlap
      const tags = new Set((p.tags || []).map(String));
      const tagMatch = selected.length === 0 || selected.some(t => tags.has(t));

      return textMatch && tagMatch;
    });
  }, [sorted, q, selected]);

  const toggleTag = (t) => {
    setSelected(prev =>
      prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]
    );
  };

  const clearFilters = () => {
    setQuery('');
    setSelected([]);
  };

  return (
    <main className="bg-gray-50 text-gray-800 font-sans">
      <Helmet>
        <title>HVAC Blog | AMW Cooling & Heating LLC</title>
        <meta
          name="description"
          content="Seasonal HVAC tips and local advice for Conroe, The Woodlands, Spring, and nearby areas."
        />
      </Helmet>

      {/* Header */}
      <section className="text-center py-12 bg-gradient-to-br from-blue-50 to-white shadow mb-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">HVAC Blog</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Expert HVAC insights and maintenance guides to help Conroe, The Woodlands, Spring, and Montgomery County homeowners save money, stay safe, and stay comfortable year-round.
        </p>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 -mt-4 pb-6">
        <div className="bg-white rounded-xl shadow p-4 md:p-5">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search posts (e.g., humidity, maintenance, heating)…"
              className="w-full md:flex-1 rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Search blog posts"
            />
            <div className="flex flex-wrap gap-2">
              {selected.length > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {allTags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {allTags.map((t) => {
                const active = selected.includes(t);
                return (
                  <button
                    key={t}
                    onClick={() => toggleTag(t)}
                    className={
                      "text-xs md:text-sm px-3 py-1.5 rounded-full border transition " +
                      (active
                        ? "bg-blue-600 text-white border-blue-700"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50")
                    }
                    aria-pressed={active}
                    aria-label={`Filter by ${t}`}
                    title={`Filter by ${t}`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Grid of cards */}
      <section className="container mx-auto px-4 pb-16">
        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse bg-white rounded shadow overflow-hidden">
                <div className="h-44 bg-gray-200" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-200 w-2/3" />
                  <div className="h-3 bg-gray-200 w-1/3" />
                  <div className="h-3 bg-gray-200 w-full" />
                  <div className="h-3 bg-gray-200 w-5/6" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center text-gray-600">
            No posts match your filters. Try clearing the filters or searching different terms.
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <article
                key={p.slug}
                className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden flex flex-col"
              >
                {p.image && (
                  <Link to={`/blog/${p.slug}`} aria-label={p.title}>
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-44 object-cover"
                      loading="lazy"
                    />
                  </Link>
                )}

                <div className="p-5 flex-1 flex flex-col">
                  <h2 className="text-lg font-semibold text-blue-900 leading-snug">
                    <Link to={`/blog/${p.slug}`} className="hover:underline">
                      {p.title}
                    </Link>
                  </h2>

                  {p.date && (
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(p.date).toLocaleDateString()}
                    </p>
                  )}

                  {p.excerpt && (
                    <p className="text-sm text-gray-700 mt-3">
                      {p.excerpt}
                    </p>
                  )}

                  {p.tags?.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 bg-gray-100 rounded-full border border-gray-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

<div className="mt-4">
  <Link
    to={`/blog/${p.slug}`}
    onClick={() => event('blog_read_more', { slug: p.slug })}
    className="inline-block text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded"
  >
    Read More
  </Link>
</div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
