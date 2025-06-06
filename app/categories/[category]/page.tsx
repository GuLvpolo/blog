import Link from 'next/link'
import { getAllPosts, getCategories, getPostsByCategory } from '@/lib/api'
import { formatDate } from '@/lib/utils'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Clock } from 'lucide-react'

interface Props {
  params: { category: string }
}

export async function generateStaticParams() {
  const categories = getCategories()
  return categories.map((category) => ({
    category: encodeURIComponent(category),
  }))
}

export async function generateMetadata({ params }: Props) {
  const category = decodeURIComponent(params.category)
  return {
    title: `${category} - 分类 - 我的博客`,
    description: `浏览${category}分类下的所有文章`,
  }
}

export default function CategoryPage({ params }: Props) {
  const category = decodeURIComponent(params.category)
  const posts = getPostsByCategory(category)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">分类: {category}</h1>
            <p className="text-gray-600">共 {posts.length} 篇文章</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">该分类下暂无文章</p>
                <Link 
                  href="/categories"
                  className="inline-block mt-4 text-blue-600 hover:text-blue-700"
                >
                  ← 返回分类列表
                </Link>
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
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <time dateTime={post.date}>
                          {formatDate(post.date)}
                        </time>
                        {post.readTime && (
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{post.readTime} 分钟阅读</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {post.tags.length > 0 && (
                          <div className="flex space-x-1">
                            {post.tags.slice(0, 3).map((tag, index) => (
                              <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
                
                <div className="text-center pt-8">
                  <Link 
                    href="/categories"
                    className="inline-block text-blue-600 hover:text-blue-700 font-medium"
                  >
                    ← 返回分类列表
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 