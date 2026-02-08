"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const posts = [
  {
    id: 1,
    date: "MAR 11",
    slug: "when-anxiety-doesnt-look-like-panic",
    title: "When Anxiety Doesn’t Look Like Panic",
    image: "/img4_new.webp",
  },
  {
    id: 2,
    date: "MAR 11",
    slug: "trauma-safety-and-the-nervous-system",
    title: "Trauma, Safety, and the Nervous System",
    image: "/img2_new.webp",
  },
  {
    id: 3,
    date: "MAR 11",
    slug: "burnout-isnt-a-personal-failure",
    title: "Burnout Isn’t a Personal Failure",
    image: "/img5_new.webp",
  },
  {
    id: 4,
    date: "MAR 11",
    slug: "perfectionism-and-internal-pressure",
    title: "Perfectionism and the Cost of Constant Pressure",
    image: "/img6_new.webp",
  },
];

export default function BlogGrid() {
  return (
    <section className="bg-cream py-32">
      <div className="max-w-[var(--spacing-container)] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-32">
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PostItem({ post }: { post: typeof posts[0] }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const link = `/blog/${post.slug}`;

  return (
    <article
      ref={ref}
      className={`group animate-on-scroll ${
        isVisible ? "is-visible" : ""
      }`}
    >
      {/* IMAGE */}
      <Link href={link}>
        <div className="relative aspect-[3/2] overflow-hidden rounded-md mb-10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* META + TITLE */}
      <div className="space-y-5 max-w-xl">
        <span className="block text-xs tracking-[0.3em] uppercase text-charcoal/50">
          {post.date}
        </span>

        <h2 className="font-display text-[2.2rem] md:text-[2.6rem] leading-tight text-charcoal">
          <Link
            href={link}
            className="hover:opacity-70 transition-opacity"
          >
            {post.title}
          </Link>
        </h2>

        <Link
          href={link}
          className="inline-block text-sm uppercase tracking-widest text-charcoal underline underline-offset-8 hover:opacity-70 transition-opacity"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
