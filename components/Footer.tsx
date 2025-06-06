import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">我的博客</h3>
            <p className="text-gray-300 mb-4">
              专注于分享技术见解、生活感悟和个人成长的博客。
              希望能够通过文字记录生活，分享知识，与大家一起成长。
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/posts" className="hover:text-white transition-colors">
                  文章
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-white transition-colors">
                  分类
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  关于
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">联系方式</h4>
            <ul className="space-y-2 text-gray-300">
              <li>邮箱: your-email@example.com</li>
              <li>微信: your-wechat</li>
              <li>GitHub: your-github</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} 我的博客. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 