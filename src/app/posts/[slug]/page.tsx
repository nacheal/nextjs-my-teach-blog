import { type SanityDocument } from "next-sanity";
import { client, urlFor } from "@/sanity/client";
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import CircuitBackground from "@/components/CircuitBackground";
import Image from "next/image";
import Link from "next/link";

const POST_QUERY = `*[
  _type == "post" && 
  slug.current == $slug
][0]{
  _id,
  title,
  slug,
  publishedAt,
  image,
  body,
  "relatedPosts": *[
    _type == "post" && 
    _id != ^._id && 
    count(body[].style == "h2") > 0
  ][0..2]{
    title,
    slug,
    publishedAt
  }
}`;

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug }
  );

  if (!post) {
    notFound();
  }

  return (
    <>
      <CircuitBackground />
      <main className="container mx-auto min-h-screen max-w-5xl p-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <article className="prose lg:prose-xl max-w-3xl flex-grow p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-400/20">
          <header className="mb-8 border-b border-purple-400/30 pb-4">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              {post.title}
            </h1>
            <p className="text-purple-300/80 mt-2">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            {post.image && (
              <div className="mt-4 rounded-lg overflow-hidden border border-purple-400/20">
                <Image
                  src={urlFor(post.image).url()}
                  alt={post.title}
                  width={800}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            )}
          </header>

          <div className="mt-8 prose-headings:text-purple-300 prose-a:text-pink-400 hover:prose-a:text-pink-300 prose-strong:text-purple-200">
            <PortableText value={post.body} />
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-4">
            <div className="p-4 bg-purple-900/20 rounded-lg border border-purple-400/20 backdrop-blur-sm">
              <h3 className="font-semibold mb-2 text-purple-300">About Author</h3>
              <p className="text-sm text-purple-200/80">
                Michael, frontend developer passionate about sharing tech insights.
              </p>
            </div>

            {post.relatedPosts?.length > 0 && (
              <div className="p-4 bg-purple-900/20 rounded-lg border border-purple-400/20 backdrop-blur-sm">
                <h3 className="font-semibold mb-2 text-purple-300">Related Posts</h3>
                <ul className="space-y-2">
                  {post.relatedPosts.map((post: any) => (
                    <li key={post.slug.current}>
                      <Link 
                        href={`/posts/${post.slug.current}`}
                        className="text-sm text-pink-400 hover:text-pink-300 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
      </div>
      </main>
    </>
  );
}
