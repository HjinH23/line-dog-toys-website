# 线条小狗毛绒玩具官网

一个充满童趣的Next.js官网,专为8-14岁儿童设计。

## 🎨 项目特色

- 粉色系童趣设计风格,参考迪士尼美学
- 完整的产品展示和分类系统
- 在线咨询聊天功能
- 响应式设计,完美适配手机、平板、电脑
- 丰富的动画效果和交互体验

## 🚀 技术栈

- **框架**: Next.js 15 (App Router)
- **UI**: React 19
- **语言**: TypeScript
- **样式**: CSS Modules + 全局CSS变量
- **字体**: Google Fonts (Fredoka, Nunito)

## 📦 功能特性

- ✅ 首页(英雄区、特色产品、品牌故事)
- ✅ 产品展示页(分类筛选、产品网格)
- ✅ 关于我们页(公司介绍、发展历程)
- ✅ 联系方式页(联系表单、在线咨询)
- ✅ 导航栏(响应式菜单)
- ✅ 在线咨询聊天组件
- ✅ 产品分类系统
- ✅ 联系表单验证

## 🛠️ 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 手机访问(局域网)

开发服务器已配置支持局域网访问:

1. 确保手机和电脑在同一WiFi
2. 查看电脑IP地址: `ipconfig` (Windows) 或 `ifconfig` (Mac/Linux)
3. 在手机浏览器访问: `http://你的IP:3000`

## 📁 项目结构

```
src/
├── app/              # 页面路由
│   ├── layout.tsx    # 根布局
│   ├── page.tsx      # 首页
│   ├── products/     # 产品展示页
│   ├── about/        # 关于我们页
│   └── contact/      # 联系方式页
├── components/       # 共享组件
│   ├── Navbar.tsx    # 导航栏
│   ├── Footer.tsx    # 页脚
│   ├── ProductCard.tsx     # 产品卡片
│   ├── ContactForm.tsx     # 联系表单
│   └── ChatWidget.tsx      # 在线咨询
public/
├── logo.webp        # 公司Logo
└── products/        # 产品图片
```

## 🌐 部署

### 推荐方式:Vercel

1. 将代码推送到GitHub
2. 访问 [vercel.com](https://vercel.com)
3. 导入GitHub仓库
4. 自动部署完成

详细部署步骤请查看 [部署指南.md](./部署指南.md)

### 构建生产版本

```bash
npm run build
npm start
```

## 📝 联系信息

- **公司**: 线条小狗毛绒玩具有限公司
- **联系人**: 黄锦宏
- **地址**: 中国广东省深圳市南山区科技园南区R2-B栋5楼
- **电话**: 400-888-6688
- **邮箱**: hello@linedog.com

## 📄 许可证

Copyright © 2026 线条小狗毛绒玩具有限公司. 保留所有权利.
