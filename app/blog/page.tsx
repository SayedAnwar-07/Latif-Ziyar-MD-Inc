import { Card, CardContent } from "@/components/ui/card";

export default function Blog() {
  const blogPosts = [
    {
      title: "Understanding Addiction Medicine: A Comprehensive Approach to Recovery",
      excerpt: "Learn about evidence-based treatments for substance use disorders and how our team supports patients through their recovery journey.",
      category: "Addiction Medicine",
      readTime: "5 min read",
      date: "March 15, 2024"
    },
    {
      title: "Depression Treatment: Finding the Right Approach for You",
      excerpt: "Explore various treatment options for depression, including medication management, therapy, and lifestyle modifications that can help improve mental health.",
      category: "Depression",
      readTime: "6 min read",
      date: "March 10, 2024"
    },
    {
      title: "Managing Anxiety: Effective Strategies and Treatment Options",
      excerpt: "Discover practical strategies and professional treatments that can help you manage anxiety and improve your quality of life.",
      category: "Anxiety Disorders",
      readTime: "4 min read",
      date: "March 5, 2024"
    },
    {
      title: "ADHD in Adults: Recognition and Treatment",
      excerpt: "Understanding adult ADHD symptoms and the comprehensive treatment approaches available to help manage this condition effectively.",
      category: "ADHD",
      readTime: "5 min read",
      date: "February 28, 2024"
    },
    {
      title: "The Importance of Medication Management in Mental Health",
      excerpt: "How proper medication management can make a significant difference in treating psychiatric conditions and maintaining long-term wellness.",
      category: "Medication Management",
      readTime: "6 min read",
      date: "February 20, 2024"
    },
    {
      title: "What to Expect During Your First Psychiatric Evaluation",
      excerpt: "A guide to help you prepare for your initial psychiatric evaluation and understand what the assessment process involves.",
      category: "Patient Resources",
      readTime: "4 min read",
      date: "February 15, 2024"
    }
  ];

  const categories = [
    "All Posts",
    "Addiction Medicine",
    "Depression",
    "Anxiety Disorders",
    "ADHD",
    "Medication Management",
    "Patient Resources"
  ];

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

          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
                data-testid={`category-filter-${index}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`blog-post-${index}`}>
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
                    <button 
                      className="text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                      data-testid={`read-more-${index}`}
                    >
                      Read More →
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Stay Informed</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest mental health insights, treatment updates, and wellness tips directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  data-testid="input-newsletter-email"
                />
                <button 
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  data-testid="button-subscribe"
                >
                  Subscribe
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
