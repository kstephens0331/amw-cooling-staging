import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import { event } from '../utils/analytics';

export default function BlogPost() {
  const { slug } = useParams();
  const [md, setMd] = useState('');
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [mdRes, idxRes] = await Promise.all([
          fetch(`/blog/${slug}.md`, { cache: 'no-store' }),
          fetch('/blog/index.json', { cache: 'no-store' })
        ]);

        const [mdText, indexJson] = await Promise.all([
          mdRes.ok ? mdRes.text() : '',
          idxRes.ok ? idxRes.json() : []
        ]);

        if (!cancelled) {
          setMd(mdText || '');
          const found = Array.isArray(indexJson)
            ? indexJson.find((x) => x.slug === slug)
            : null;
          setMeta(found || null);
        }
      } catch (e) {
        if (!cancelled) {
          setMd('');
          setMeta(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  // 404-style fallback
  if (!loading && (!md || !meta)) {
    return (
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold mb-2">Post not found</h1>
        <p className="text-gray-600 mb-6">This article may have moved or been removed.</p>
        <Link to="/blog" className="text-blue-600">Back to Blog</Link>
      </main>
    );
  }

  const title = meta?.title ?? 'Blog Post';
  const desc = meta?.excerpt ?? 'HVAC blog article';

  return (
    <main className="bg-gray-50 text-gray-800 font-sans">
      <Helmet>
        <title>{title} | AMW Cooling & Heating LLC</title>
        <meta name="description" content={desc} />
        {meta?.image && (
          <>
            <meta property="og:type" content="article" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={desc} />
            <meta property="og:image" content={meta.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={desc} />
            <meta name="twitter:image" content={meta.image} />
          </>
        )}
        <link rel="canonical" href={`https://amwaircondition.com/blog/${slug}`} />

        {/* BlogPosting JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: title,
            image: meta?.image ? [`https://amwaircondition.com${meta.image}`] : undefined,
            datePublished: meta?.date,
            dateModified: meta?.date,
            author: { '@type': 'Organization', name: 'AMW Cooling & Heating LLC' },
            publisher: {
              '@type': 'Organization',
              name: 'AMW Cooling & Heating LLC',
              logo: {
                '@type': 'ImageObject',
                url: 'https://amwaircondition.com/favicon.ico'
              }
            },
            description: desc,
            mainEntityOfPage: `https://amwaircondition.com/blog/${slug}`,
          })}
        </script>
      </Helmet>

      {/* subtle top banner CTA */}
      <div className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-3 text-center">
          Need help now?{' '}
          <a
            href="tel:+19363311339"
            onClick={() => event('call_click_top_banner', { slug })}
            className="underline font-semibold"
          >
            Call (936) 331-1339
          </a>
        </div>
      </div>

      <section className="container mx-auto px-4 py-10 max-w-3xl">
        <Link to="/blog" className="text-sm text-blue-600">← Back to Blog</Link>
        <h1 className="text-3xl font-bold text-blue-900 mt-2 mb-3">{title}</h1>
        {meta?.date && (
          <p className="text-xs text-gray-500 mb-6">
            {new Date(meta.date).toLocaleDateString()}
          </p>
        )}

        <article className="prose max-w-none prose-p:leading-relaxed">
          <ReactMarkdown>{md}</ReactMarkdown>
        </article>

        {/* PRIMARY CTA BELOW THE ARTICLE */}
        <div className="mt-10 p-6 bg-white rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold text-blue-900">
            Schedule Your Service with AMW Cooling & Heating
          </h2>
          <p className="text-gray-700 mt-2">
            Serving Conroe, The Woodlands, Spring, Magnolia, Willis, and Montgomery.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+19363311339"
              onClick={() => event('call_click', { slug })}
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 rounded"
            >
              Call (936) 331-1339
            </a>
            <Link
              to="/contact"
              onClick={() => event('contact_click', { slug })}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded"
            >
              Request Service Online
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
