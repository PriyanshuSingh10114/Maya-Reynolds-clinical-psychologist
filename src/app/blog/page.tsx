import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import SubscribeSection from "@/components/blog/SubscribeSection";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Blog | Lilac Therapy",
    description: "Read the latest insights and news from Lilac Therapy.",
};

export default function BlogPage() {
    return (
        <main>
            <BlogHero />
            <BlogGrid />
            <SubscribeSection />
            <Footer />
        </main>
    );
}

