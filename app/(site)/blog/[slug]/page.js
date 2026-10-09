import Link from "next/link";
import { notFound } from "next/navigation";
import { generateHTML } from "@tiptap/html";
import { getArticleBySlug, formatDate } from "../../../../lib/blog";
import { editorExtensions } from "../../../../lib/tiptap";
import ViewTracker from "../../../../components/ViewTracker";

import { connection } from "next/server";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();
  return {
    title: article.title,
    description: article.excerpt ?? undefined,
    openGraph: {
      title: article.title,
      description: article.excerpt ?? undefined,
      type: "article",
      publishedTime: article.published_at?.toISOString(),
    },
  };
}

function ArticleContent({ article }) {
  const html = generateHTML(article.content, editorExtensions);

  return (
    <main id="contenido" className="bg-cream pt-14 pb-20">
      <ViewTracker slug={article.slug} />
      <article className="container max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-pink"
        >
          ← Volver al blog
        </Link>

        <header className="mt-6 mb-10">
          {article.category_slug && (
            <Link
              href={`/blog?categoria=${encodeURIComponent(article.category_slug)}`}
              className="inline-block rounded-full border border-pink px-4 py-1 text-xs font-semibold text-pink transition hover:bg-pink hover:text-white"
            >
              {article.category_name}
            </Link>
          )}
          <h1 className="mt-4 font-serif text-3xl leading-tight text-navy md:text-5xl">
            {article.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
            {article.author_name && <span>{article.author_name}</span>}
            <time dateTime={article.published_at?.toISOString()}>
              {formatDate(article.published_at)}
            </time>
            <span>{article.views} {article.views === 1 ? "vista" : "vistas"}</span>
          </div>
        </header>

        {article.cover_image && (
          <img
            src={article.cover_image}
            alt=""
            className="mb-10 aspect-[16/9] w-full rounded-2xl border border-border object-cover"
          />
        )}

        {article.excerpt && (
          <p className="mb-8 text-lg leading-relaxed text-navy">{article.excerpt}</p>
        )}

        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </main>
  );
}

export default async function ArticlePage({ params }) {
  await connection();
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  return <ArticleContent article={article} />;
}