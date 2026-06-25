import { notFound } from "next/navigation";
import BlogCard from "@/components/BlogCard";

async function getBlogPost(slug) {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function BlogViewPage({ params }) {
  const resolvedParams = await params;
  const post = await getBlogPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-6 max-w-3xl mx-auto">
        <a
          href="/blog/create"
          className="text-sm font-medium text-sky-600 hover:text-sky-700 transition"
        >
          ← Create another post
        </a>
      </div>

      <BlogCard
        title={post.title}
        image={post.image}
        description={post.description}
        createdAt={post.createdAt}
      />
    </main>
  );
}
