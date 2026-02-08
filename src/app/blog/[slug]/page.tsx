import Link from "next/link";
import Footer from "@/components/Footer";

const postsData: Record<string, any> = {
  "when-anxiety-doesnt-look-like-panic": {
    date: "MAR 11",
    title: "When Anxiety Doesn’t Look Like Panic",
    content: [
      "Anxiety doesn’t always look like panic. For many adults, it shows up as constant tension, overthinking, or feeling on edge even when life appears stable.",
      "High-functioning anxiety often goes unnoticed. You may be capable, reliable, and productive while your nervous system remains stuck in a state of vigilance.",
      "Therapy can help slow this process down—supporting both your mind and body in developing more regulated ways of responding over time."
    ],
    prevPost: {
      title: "Perfectionism and the Cost of Constant Pressure",
      slug: "perfectionism-and-internal-pressure"
    },
    nextPost: {
      title: "Trauma, Safety, and the Nervous System",
      slug: "trauma-safety-and-the-nervous-system"
    }
  },

  "trauma-safety-and-the-nervous-system": {
    date: "MAR 11",
    title: "Trauma, Safety, and the Nervous System",
    content: [
      "Trauma is not just about what happened in the past—it’s about how the nervous system learned to protect you.",
      "You may notice difficulty feeling safe, staying present, or relaxing, even in calm environments.",
      "Trauma-informed therapy focuses on pacing, stabilization, and gradually helping the body experience more safety."
    ],
    prevPost: {
      title: "When Anxiety Doesn’t Look Like Panic",
      slug: "when-anxiety-doesnt-look-like-panic"
    },
    nextPost: {
      title: "Burnout Isn’t a Personal Failure",
      slug: "burnout-isnt-a-personal-failure"
    }
  },

  "burnout-isnt-a-personal-failure": {
    date: "MAR 11",
    title: "Burnout Isn’t a Personal Failure",
    content: [
      "Burnout is not a personal weakness—it’s often the result of long-term stress and internal pressure.",
      "Many high-achieving adults experience exhaustion, disconnection, and a loss of meaning over time.",
      "Therapy can offer a space to slow down and rebuild a more sustainable relationship with work and rest."
    ],
    prevPost: {
      title: "Trauma, Safety, and the Nervous System",
      slug: "trauma-safety-and-the-nervous-system"
    },
    nextPost: {
      title: "Perfectionism and the Cost of Constant Pressure",
      slug: "perfectionism-and-internal-pressure"
    }
  },

  "perfectionism-and-internal-pressure": {
    date: "MAR 11",
    title: "Perfectionism and the Cost of Constant Pressure",
    content: [
      "Perfectionism often develops as a way to stay safe or avoid criticism.",
      "Over time, it can lead to chronic stress, self-doubt, and difficulty resting.",
      "Therapy helps explore where these patterns came from and how to relate to yourself with more compassion."
    ],
    prevPost: {
      title: "Burnout Isn’t a Personal Failure",
      slug: "burnout-isnt-a-personal-failure"
    },
    nextPost: {
      title: "When Anxiety Doesn’t Look Like Panic",
      slug: "when-anxiety-doesnt-look-like-panic"
    }
  }
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = postsData[slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center space-y-4">
          <h1 className="text-3xl text-charcoal font-display">Post not found</h1>
          <Link href="/blog" className="underline text-charcoal">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-cream min-h-screen pt-48">
      <article className="max-w-4xl mx-auto px-6 pb-24 text-center">
        <span className="block text-sm tracking-[0.2em] uppercase text-charcoal/60 mb-8">
          {post.date}
        </span>

        <h1 className="font-display text-3xl md:text-8xl text-charcoal mb-20">
          {post.title}
        </h1>

        <div className="space-y-10 text-left">
          {post.content.map((p: string, i: number) => (
            <p
              key={i}
              className="text-xl md:text-2xl text-charcoal/80 leading-relaxed max-w-2xl mx-auto"
            >
              {p}
            </p>
          ))}
        </div>

        <div className="mt-32 border-t border-charcoal/10 pt-16 grid grid-cols-2">
          <div className="text-left">
            <Link href={`/blog/${post.prevPost.slug}`} className="text-3xl hover:opacity-70">
              ← {post.prevPost.title}
            </Link>
          </div>

          <div className="text-right">
            <Link href={`/blog/${post.nextPost.slug}`} className="text-3xl hover:opacity-70">
              {post.nextPost.title} →
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
