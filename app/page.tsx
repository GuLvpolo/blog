import Link from 'next/link'
import { getAllPosts } from '@/lib/api'
import { formatDate } from '@/lib/utils'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              欢迎来到我的博客
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              分享技术、生活和思考的个人空间
            </p>
            <Link 
              href="/about" 
              className="btn btn-primary text-lg px-8 py-3"
            >
              了解更多
            </Link>
          </div>
        </section>

        {/* Latest Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">最新文章</h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.slice(0, 6).map((post) => (
                <article 
                  key={post.slug} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      <Link 
                        href={`/posts/${post.slug}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <time dateTime={post.date}>
                        {formatDate(post.date)}
                      </time>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/posts" 
                className="btn btn-secondary"
              >
                查看所有文章
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 