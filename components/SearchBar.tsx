'use client'

import { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import Link from 'next/link'
import { Post } from '@/lib/api'
import { formatDate } from '@/lib/utils'

interface SearchBarProps {
  posts: Post[]
}

export default function SearchBar({ posts }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [results, setResults] = useState<Post[]>([])

  useEffect(() => {
    if (query.length === 0) {
      setResults([])
      return
    }

    const searchResults = posts.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      post.category.toLowerCase().includes(query.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    )

    setResults(searchResults.slice(0, 5)) // 限制显示5个结果
  }, [query, posts])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    setIsOpen(true)
  }

  const clearSearch = () => {
    setQuery('')
    setResults([])
    setIsOpen(false)
  }

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          placeholder="搜索文章..."
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 hover:text-gray-600"
          >
            <X />
          </button>
        )}
      </div>

      {/* 搜索结果 */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
          {results.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="block p-4 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
              onClick={() => setIsOpen(false)}
            >
              <h3 className="font-semibold text-gray-900 mb-1">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{formatDate(post.date)}</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {post.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* 背景遮罩 */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
} 