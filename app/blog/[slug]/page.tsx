import { blogPosts, authors } from "@/data/blog";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft, Share2, MessageCircle } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogDetailPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  const author = authors.find((a) => a.name === post?.author);

  if (!post) return notFound();

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </header>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* Featured Image */}
                <div className="relative h-96 lg:h-[480px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Article Header */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
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

                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {post.title}
                  </h1>

                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center justify-between py-6 border-t border-b border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{post.author}</p>
                        <p className="text-sm text-gray-500">{author?.specialization}</p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Article Content */}
                <div className="px-8 lg:px-12 pb-12">
                  <div className="prose prose-lg max-w-none">
                    <div className="text-gray-700 leading-relaxed space-y-6">
                        {post.content.map((section, index) => (
                        <div key={index}>
                            <h4 className="font-semibold text-black">{section.header}</h4>
                            <p>{section.description}</p>
                        </div>
                        ))}
                    </div>
                 </div>


                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/blog/${relatedPost.slug}`}
                        className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
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
                          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-3">
                            {relatedPost.category}
                          </span>
                          <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
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
              <div className="space-y-8">
                {/* About Card */}
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">About Our Blog</h3>
                  <p className="text-gray-600 mb-4">
                    Welcome to our mental health blog where we share insights, treatment approaches, 
                    and resources to support your mental wellness journey.
                  </p>
                  <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Subscribe to Newsletter
                  </button>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-3">
                    {Array.from(new Set(blogPosts.map(post => post.category))).map((category) => (
                      <Link
                        key={category}
                        href={`/blog/${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center justify-between py-2 text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <span>{category}</span>
                        <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">
                          {blogPosts.filter(post => post.category === category).length}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 4).map((recentPost) => (
                      <Link
                        key={recentPost.slug}
                        href={`/blog/${recentPost.slug}`}
                        className="flex gap-4 group"
                      >
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={recentPost.image}
                            alt={recentPost.title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 text-sm leading-snug">
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

                {/* Newsletter */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
                  <p className="text-blue-100 mb-4 text-sm">
                    Get the latest mental health insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-white/40"
                    />
                    <button className="w-full py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
                      Subscribe
                    </button>
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