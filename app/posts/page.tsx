import Link from 'next/link'
import { getAllPosts } from '@/lib/api'
import { formatDate } from '@/lib/utils'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: '所有文章 - 我的博客',
  description: '浏览所有博客文章',
}

export default function PostsPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-12">所有文章</h1>
          
          <div className="max-w-4xl mx-auto">
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">暂无文章</p>
                <p className="text-gray-500 mt-2">请先添加一些博客文章</p>
              </div>
            ) : (
              <div className="space-y-8">
                {posts.map((post) => (
                  <article key={post.slug} className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-3">
                      <Link 
                        href={`/posts/${post.slug}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <time dateTime={post.date}>
                        {formatDate(post.date)}
                      </time>
                      <div className="flex items-center space-x-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {post.category}
                        </span>
                        {post.tags.length > 0 && (
                          <div className="flex space-x-1">
                            {post.tags.slice(0, 3).map((tag, index) => (
                              <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 