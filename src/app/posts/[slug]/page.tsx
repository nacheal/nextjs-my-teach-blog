import { type SanityDocument } from "next-sanity";
import CircuitBackground from "@/components/CircuitBackground";
import { client } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { format } from "date-fns";
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// 创建图片 URL 构建器
const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  image,
  body
}`;

// 更新 params 类型为 Promise
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  // 先 await params，然后获取 slug
  const { slug } = await params;
  const post = await client.fetch<SanityDocument>(POST_QUERY, { slug });

  if (!post) {
    return (
      <>
        <CircuitBackground />
        <main className="container mx-auto min-h-screen max-w-3xl p-8">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        </main>
      </>
    );
  }

  return (
    <>
      <CircuitBackground />
      <main className="container mx-auto min-h-screen max-w-3xl p-8">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-2 mb-8 text-gray-500 dark:text-gray-400">
            <time dateTime={post.publishedAt}>
              {format(new Date(post.publishedAt), 'yyyy-MM-dd')}
            </time>
          </div>
          {post.image && (
            <Image
              src={urlFor(post.image).width(800).height(450).url()}
              alt={post.title || 'Post image'}
              width={800}
              height={450}
              className="rounded-lg mb-8"
              priority
            />
          )}
          <div className="prose dark:prose-invert max-w-none">
            <PortableText value={post.body} />
          </div>
        </article>
      </main>
    </>
  );
}