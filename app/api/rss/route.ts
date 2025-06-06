import { getAllPosts } from '@/lib/api'

export async function GET() {
  const posts = getAllPosts()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>我的博客</title>
    <description>分享技术、生活和思考的个人博客</description>
    <link>${siteUrl}</link>
    <atom:link href="${siteUrl}/api/rss" rel="self" type="application/rss+xml" />
    <language>zh-CN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${posts
      .slice(0, 20) // 只取最新20篇文章
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>${siteUrl}/posts/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/posts/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category>${post.category}</category>
    </item>`
      )
      .join('')}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=600',
    },
  })
} 