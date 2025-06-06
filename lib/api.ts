import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  category: string
  tags: string[]
  content: string
  coverImage?: string
  readTime?: number
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md'))
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${slug}`)
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug: realSlug,
    title: data.title || '',
    date: data.date || '',
    excerpt: data.excerpt || '',
    category: data.category || '未分类',
    tags: data.tags || [],
    content,
    coverImage: data.coverImage,
    readTime: data.readTime || Math.ceil(content.split(' ').length / 200), // 估算阅读时间
  }
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export function getCategories(): string[] {
  const posts = getAllPosts()
  const categories = posts.map(post => post.category)
  return Array.from(new Set(categories))
}

export function getPostsByCategory(category: string): Post[] {
  const posts = getAllPosts()
  return posts.filter(post => post.category === category)
} 