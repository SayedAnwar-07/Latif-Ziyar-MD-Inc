import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts, categories } from "@/data/blog";

// ✅ UPDATED: searchParams is now a Promise
interface BlogPageProps {
  searchParams?: Promise<{
    category?: string;
  }>;
}

// ✅ FIXED: Make page component async and await searchParams
export default async function BlogPage({ searchParams }: BlogPageProps) {
  // ✅ Await the searchParams promise
  const resolvedSearchParams = await searchParams;
  const activeCategory = resolvedSearchParams?.category || "All Posts";

  const filteredPosts =
    activeCategory === "All Posts"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Mental Health Blog</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert insights, treatment information, and resources for mental health and wellness
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              const href =
                category === "All Posts"
                  ? "/blog"
                  : `/blog?category=${encodeURIComponent(category)}`;

              return (
                <Link
                  key={category}
                  href={href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </Link>
              );
            })}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredPosts.map((post) => (
              <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}