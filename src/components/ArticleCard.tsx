import Link from "next/link";
import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";

const builder = imageUrlBuilder(client);

export default function ArticleCard({ post }: { post: SanityDocument }) {
  return (
    <Link 
      href={`/posts/${post.slug.current}`}
      className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      {post.image && (
        <div className="relative h-48 w-full">
          <Image
            src={builder.image(post.image).url()}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-500 text-sm">
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
      </div>
    </Link>
  );
}
