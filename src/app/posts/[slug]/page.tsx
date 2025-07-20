import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';

const POST_QUERY = `*[
  _type == "post" && 
  slug.current == $slug
][0]{
  _id,
  title,
  slug,
  publishedAt,
  body
}`;

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug: params.slug }
  );

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto min-h-screen max-w-5xl p-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <article className="prose lg:prose-xl max-w-3xl flex-grow">
          <header className="mb-8">
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <p className="text-gray-500 mt-2">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
          </header>

          <div className="mt-8">
            <PortableText value={post.body} />
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">About Author</h3>
              <p className="text-sm text-gray-600">
                Michael, frontend developer passionate about sharing tech insights.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
