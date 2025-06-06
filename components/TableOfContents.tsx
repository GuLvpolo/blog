'use client'

import { useState, useEffect } from 'react'
import { List } from 'lucide-react'

interface TocItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [toc, setToc] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // 解析标题
    const headingRegex = /^(#{1,6})\s+(.+)$/gm
    const headings: TocItem[] = []
    let match

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length
      const text = match[2]
      const id = text.toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g, '-')
      
      headings.push({ id, text, level })
    }

    setToc(headings)
  }, [content])

  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
      const scrollTop = window.scrollY

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i] as HTMLElement
        if (heading.offsetTop <= scrollTop + 100) {
          setActiveId(heading.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (toc.length === 0) return null

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg max-w-xs">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
        >
          <span className="font-medium text-gray-900">目录</span>
          <List className="h-5 w-5 text-gray-500" />
        </button>
        
        {isOpen && (
          <div className="border-t border-gray-200 max-h-96 overflow-y-auto">
            <nav className="p-4 space-y-1">
              {toc.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToHeading(item.id)}
                  className={`block w-full text-left text-sm py-1 px-2 rounded transition-colors ${
                    activeId === item.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  style={{ paddingLeft: `${(item.level - 1) * 12 + 8}px` }}
                >
                  {item.text}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  )
} 