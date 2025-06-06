# 现代化个人博客

这是一个基于 Next.js 14 构建的现代化个人博客，使用最新的技术栈和最佳实践。

## 特性

- ✨ **现代化设计** - 响应式布局，美观的UI
- 🚀 **高性能** - 基于 Next.js 14 App Router，自动优化
- 📝 **Markdown 支持** - 使用 Markdown 编写文章
- 🏷️ **标签和分类** - 完整的内容管理系统
- 📱 **移动友好** - 完全响应式设计
- 🎨 **Tailwind CSS** - 现代化的样式解决方案
- 🔍 **SEO 优化** - 自动生成元数据和结构化数据
- ⚡ **静态生成** - 快速加载，完美的SEO

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **内容**: Markdown + Gray Matter  
- **图标**: Lucide React
- **部署**: Vercel (推荐)

## 项目结构

```
blog/
├── app/                    # App Router 页面
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   ├── posts/             # 文章相关页面
│   │   ├── page.tsx      # 文章列表
│   │   └── [slug]/       # 单篇文章
│   └── about/             # 关于页面
├── components/            # 可复用组件
│   ├── Header.tsx        # 网站头部
│   └── Footer.tsx        # 网站底部
├── lib/                   # 工具函数
│   ├── api.ts            # 文章API
│   └── utils.ts          # 工具函数
├── posts/                 # Markdown 文章
│   ├── hello-world.md
│   ├── nextjs-blog-tutorial.md
│   └── javascript-tips.md
└── public/                # 静态资源
```

## 快速开始

### 1. 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 2. 启动开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 3. 添加新文章

在 `posts/` 目录下创建新的 `.md` 文件，格式如下：

```markdown
---
title: '文章标题'
date: '2024-01-20'
excerpt: '文章摘要'
category: '分类'
tags: ['标签1', '标签2']
---

# 文章内容

在这里写文章内容...
```

## 自定义配置

### 网站信息

编辑 `app/layout.tsx` 修改网站基本信息：

```tsx
export const metadata: Metadata = {
  title: '你的博客名称',
  description: '你的博客描述',
  // ...
}
```

### 联系信息

编辑 `components/Footer.tsx` 和 `app/about/page.tsx` 更新联系信息。

### 样式定制

- 全局样式：`app/globals.css`
- Tailwind 配置：`tailwind.config.js`

## 部署

### Vercel (推荐)

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 自动部署完成

### 其他平台

本项目支持所有支持 Next.js 的部署平台：

- Netlify
- Cloudflare Pages  
- AWS Amplify
- 自托管

## 开发

### 添加新功能

1. 评论系统
2. 搜索功能
3. RSS 订阅
4. 访问统计
5. 暗色模式

### 目录结构说明

- `app/` - Next.js App Router 页面和布局
- `components/` - React 组件
- `lib/` - 工具函数和API
- `posts/` - Markdown 文章文件
- `public/` - 静态资源

## 许可证

MIT License

## 贡献

欢迎提交 Issues 和 Pull Requests！

## 相关链接

- [Next.js 文档](https://nextjs.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Markdown 语法指南](https://markdown.com.cn/basic-syntax/)

---

⭐ 如果这个项目对你有帮助，欢迎给个 Star！