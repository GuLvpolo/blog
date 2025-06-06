import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: '关于我 - 我的博客',
  description: '了解更多关于博主的信息',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">关于我</h1>
            <div className="w-32 h-32 mx-auto mb-6 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-4xl">👋</span>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 text-center mb-8">
              你好！欢迎来到我的个人博客。
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4">个人简介</h2>
                <p className="text-gray-600 mb-4">
                  我是一名热爱技术的开发者，专注于前端和全栈开发。
                  喜欢学习新技术，分享经验，记录生活。
                </p>
                <p className="text-gray-600 mb-4">
                  在这个博客里，我会分享我的技术见解、项目经验、学习笔记，
                  以及一些生活感悟。希望能够通过文字与大家交流，共同成长。
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">技能专长</h2>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-20 text-sm font-medium">前端</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 ml-4">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="w-20 text-sm font-medium">React</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 ml-4">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="w-20 text-sm font-medium">Node.js</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 ml-4">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="w-20 text-sm font-medium">Python</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 ml-4">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-4">联系方式</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2">
                  <strong>邮箱:</strong> your-email@example.com
                </p>
                <p className="mb-2">
                  <strong>GitHub:</strong> 
                  <a href="https://github.com/yourusername" className="text-blue-600 hover:underline ml-2">
                    github.com/yourusername
                  </a>
                </p>
                <p className="mb-2">
                  <strong>微信:</strong> your-wechat-id
                </p>
                <p>
                  <strong>位置:</strong> 中国，上海
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600">
                感谢您访问我的博客！如果您有任何问题或想要交流，
                欢迎通过上述方式联系我。
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 