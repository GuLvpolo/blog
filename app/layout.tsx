import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '我的个人博客',
  description: '分享技术、生活和思考的个人博客',
  keywords: ['博客', '技术', '编程', '生活'],
  authors: [{ name: '博主名称' }],
  openGraph: {
    title: '我的个人博客',
    description: '分享技术、生活和思考的个人博客',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 