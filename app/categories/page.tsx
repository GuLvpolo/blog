import Link from 'next/link'
import { getAllPosts, getCategories } from '@/lib/api'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: '分类 - 我的博客',
  description: '按分类浏览博客文章',
}

export default function CategoriesPage() {
  const posts = getAllPosts()
  const categories = getCategories()

  const getCategoryPostCount = (category: string) => {
    return posts.filter(post => post.category === category).length
  }

  const getCategoryPosts = (category: string) => {
    return posts.filter(post => post.category === category).slice(0, 3)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-12">文章分类</h1>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <div key={category} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {category}
                    </h2>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {getCategoryPostCount(category)} 篇
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    {getCategoryPosts(category).map((post) => (
                      <Link
                        key={post.slug}
                        href={`/posts/${post.slug}`}
                        className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        • {post.title}
                      </Link>
                    ))}
                  </div>
                  
                  <Link
                    href={`/categories/${encodeURIComponent(category)}`}
                    className="inline-block text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    查看所有文章 →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 