// src/app/posts/[slug]/page.tsx
interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function PostPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  
  // 现在可以使用 slug
  console.log(slug);
  
  return (
    <div>
      <h1>Post: {slug}</h1>
    </div>
  );
}