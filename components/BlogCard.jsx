import Image from "next/image";

export default function BlogCard({ title, image, description, createdAt }) {
  return (
    <article className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="relative w-full h-72 sm:h-96 bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>

      <div className="p-6 sm:p-10">
        {createdAt && (
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-3">
            Published on{" "}
            {new Date(createdAt).toLocaleDateString(undefined, {
              dateStyle: "long",
            })}
          </p>
        )}

        <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
          {title}
        </h1>

        <div className="border-t border-gray-100 pt-6">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-wrap">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
