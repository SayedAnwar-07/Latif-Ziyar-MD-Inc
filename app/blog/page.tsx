import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calendar, User } from "lucide-react";
import { blogPosts } from "@/data/blog";
import SectionHeader from "@/components/common/Header";
import Image from "next/image";

interface BlogPageProps {
  searchParams?: Promise<{
    category?: string;
  }>;
}

const categories = [
  "All Posts",
  "Addiction Medicine",
  "Depression",
  "Trauma & PTSD",
  "Treatment Approaches",
  "Wellness & Prevention",
  "Anxiety Disorders",
  "ADHD",
  "Medication Management",
  "Patient Resources"
];

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = await searchParams;
  const activeCategory = resolvedSearchParams?.category || "All Posts";

  const filteredPosts =
    activeCategory === "All Posts"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badgeIcon={BookOpen}
            badgeText="MENTAL HEALTH BLOG"
            title="Expert Insights & Resources"
            description="Professional articles, treatment information, and mental health resources to support your wellness journey."
            className="mb-12"
          />

          {/* Tabs Categories */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mb-12 justify-center">
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
                  className={`px-5 py-2 text-sm font-medium transition-colors border text-center ${
                    isActive
                      ? "bg-[#004a65] text-white border-[#004a65]"
                      : "bg-white text-gray-700 border-gray-300 hover:border-[#004a65] hover:text-[#004a65]"
                  }`}
                >
                  {category}
                </Link>
              );
            })}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredPosts.map((post) => (
              <Card key={post.slug} className="border border-gray-200 rounded-none shadow-none hover:border-[#004a65] transition-colors">
                <CardContent className="p-6">
                  {/* Category and Read Time */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-[#004a65] bg-opacity-10 text-[#004a65] text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center">
                      <BookOpen className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* image */}
                  <div className="mb-4 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="h-[200px] w-full object-cover"
                    />
                  </div>


                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <User className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 block text-[#004a65] font-medium text-sm hover:text-white transition-colors text-center border border-[#004a65] py-2 hover:bg-[#004a65] "
                  >
                    Read Article
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Posts Message */}
          {filteredPosts.length === 0 && (
            <Card className="border border-gray-200 rounded-none shadow-none">
              <CardContent className="p-12 text-center">
                <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Articles Found</h3>
                <p className="text-gray-600">
                  No blog posts found for the selected category. Please try another category.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}