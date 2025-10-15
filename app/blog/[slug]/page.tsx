import { blogPosts, authors } from "@/data/blog";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, User, Tag, BookOpen } from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  const author = authors.find((a) => a.name === post?.author);

  if (!post) return notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-[#004a65] transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </header>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
               {/* Meta Information */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 bg-[#004a65] bg-opacity-10 text-[#004a65] text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {post.title}
                  </h1>
              <article className="rounded-none">
                {/* Featured Image */}
                <div className="relative h-80 lg:h-96">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Article Content */}
                <div className="py-8">
                 

                  {/* Excerpt */}
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center justify-between py-6 border-t border-b border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#004a65] bg-opacity-10 flex items-center justify-center rounded-none">
                        <User className="w-6 h-6 text-[#004a65]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {post.author}
                        </p>
                        <p className="text-sm text-gray-500">
                          {author?.specialization}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article Body */}
                <div className="px-8 pb-8">
                  <div className="text-gray-700 leading-relaxed space-y-8">
                    {post.content.map((section, index) => (
                      <div key={index} className="border-b border-gray-100 pb-8 last:border-b-0 last:pb-0">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          {section.header}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{section.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t border-gray-100">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-900">Tags</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-50 text-gray-700 text-sm border border-gray-200 hover:border-[#004a65] hover:text-[#004a65] transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
                    <BookOpen className="w-6 h-6 mr-3 text-[#004a65]" />
                    Related Articles
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/blog/${relatedPost.slug}`}
                        className="border border-gray-200 rounded-none hover:border-[#004a65] transition-colors group"
                      >
                        <div className="relative h-48">
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <span className="inline-block px-3 py-1 bg-[#004a65] bg-opacity-10 text-[#004a65] text-xs font-medium mb-3">
                            {relatedPost.category}
                          </span>
                          <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#004a65] transition-colors">
                            {relatedPost.title}
                          </h4>
                          <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-gray-400">
                            <span>{relatedPost.date}</span>
                            <span>{relatedPost.readTime}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="space-y-6">
                {/* About Blog */}
                

                {/* Categories */}
                <div className="border border-gray-200 rounded-none p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-3">
                    {Array.from(new Set(blogPosts.map((p) => p.category))).map(
                      (category) => (
                        <Link
                          key={category}
                          href={`/blog?category=${encodeURIComponent(category)}`}
                          className="flex items-center justify-between py-2 text-gray-600 hover:text-[#004a65] transition-colors border-b border-gray-100 last:border-b-0"
                        >
                          <span className="text-sm">{category}</span>
                          <span className="bg-gray-50 text-gray-500 text-xs px-2 py-1">
                            {
                              blogPosts.filter(
                                (p) => p.category === category
                              ).length
                            }
                          </span>
                        </Link>
                      )
                    )}
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="border border-gray-200 rounded-none p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 4).map((recentPost) => (
                      <Link
                        key={recentPost.slug}
                        href={`/blog/${recentPost.slug}`}
                        className="flex gap-4 group pb-4 border-b border-gray-100 last:border-b-0 last:pb-0"
                      >
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={recentPost.image}
                            alt={recentPost.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 text-sm group-hover:text-[#004a65] transition-colors line-clamp-2 leading-snug">
                            {recentPost.title}
                          </h4>
                          <p className="text-gray-500 text-xs mt-1">
                            {recentPost.date}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}