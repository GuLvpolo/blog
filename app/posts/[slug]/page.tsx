import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug, markdownToHtml } from '@/lib/api'
import { formatDate } from '@/lib/utils'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  try {
    const post = getPostBySlug(params.slug)
    return {
      title: `${post.title} - 我的博客`,
      description: post.excerpt,
    }
  } catch (error) {
    return {
      title: '文章未找到 - 我的博客',
    }
  }
}

export default async function PostPage({ params }: Props) {
  let post
  try {
    post = getPostBySlug(params.slug)
  } catch (error) {
    notFound()
  }

  const content = await markdownToHtml(post.content || '')

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <article className="container mx-auto px-4 max-w-4xl">
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center justify-center space-x-4 text-gray-600">
              <time dateTime={post.date}>
                {formatDate(post.date)}
              </time>
              <span>·</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
                {post.category}
              </span>
            </div>
            {post.tags.length > 0 && (
              <div className="flex items-center justify-center space-x-2 mt-4">
                {post.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>
      </main>

      <Footer />
    </div>
  )
} 