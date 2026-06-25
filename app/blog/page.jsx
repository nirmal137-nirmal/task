import { prisma } from "@/lib/prisma";

export default async function page() {
  const blogs = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  console.log(blogs, "blogs");

  return (
    <div>
      {blogs &&
        blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs container"
          >
            <a href={`/blog/${blog.slug}`}>
              <img className="rounded-base" src={blog.image} alt={blog.title} />
            </a>
            <a href={`/blog/${blog.slug}`}>
              <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                {blog.title}
              </h5>
            </a>
            <p className="mb-6 text-body">{blog.description}</p>
            
            <a
              href={`/blog/${blog.slug}`}
              className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            >
              Read more
            </a>
          </div>
        ))}
    </div>
  );
}

