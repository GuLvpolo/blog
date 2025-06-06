# 部署指南

本文档介绍如何将博客部署到各种平台。

## Vercel 部署 (推荐)

Vercel 是 Next.js 的官方部署平台，提供最佳的性能和开发体验。

### 步骤

1. **准备代码**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **连接 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录
   - 点击 "New Project"
   - 选择你的博客仓库

3. **配置项目**
   - Framework Preset: Next.js
   - Root Directory: `./` (如果博客在根目录)
   - Build Command: `npm run build`
   - Output Directory: `.next`

4. **部署**
   - 点击 "Deploy"
   - 等待构建完成
   - 获得部署 URL

### 自动部署

每次推送到 main 分支时，Vercel 会自动重新部署。

## 快速开始命令

```bash
# 1. 克隆项目
git clone <your-repo-url>
cd blog

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev

# 4. 构建生产版本
npm run build

# 5. 启动生产服务器
npm start
```

## 自定义配置

### 修改网站信息

编辑 `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: '你的博客名称',
  description: '你的博客描述',
}
```

### 添加新文章

在 `posts/` 目录创建 `.md` 文件:
```markdown
---
title: '文章标题'
date: '2024-01-20'
excerpt: '文章摘要'
category: '分类'
tags: ['标签1', '标签2']
---

# 文章内容
```

---

选择最适合你需求的部署方案，Vercel 通常是最简单和最优的选择。 