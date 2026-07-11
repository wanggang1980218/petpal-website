# 萌宠桌宠 PetPal 官网

AI 像素风桌面宠物定制网站 - 上传宠物照片，AI 生成可动桌面宠物

## 技术栈

- React 19 + TypeScript
- Vite 构建工具
- Tailwind CSS 4 样式
- Framer Motion 动画
- React Router 路由
- Lucide React 图标

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 项目结构

```
petpal-website/
├── index.html              # 入口 HTML
├── package.json            # 依赖配置
├── vite.config.ts          # Vite 配置
├── tsconfig.json           # TypeScript 配置
├── public/                 # 静态资源
└── src/
    ├── index.tsx           # 入口文件
    ├── index.css           # 全局样式
    ├── app.tsx             # 路由配置
    ├── tailwind-theme.css  # Tailwind 主题变量
    ├── lib/
    │   └── utils.ts        # 工具函数
    ├── hooks/
    │   └── use-mobile.ts   # 移动端检测 hook
    ├── data/
    │   ├── cases.ts        # 案例数据
    │   ├── pricing.ts      # 定价数据
    │   └── faq.ts          # FAQ 数据
    ├── components/
    │   ├── Layout.tsx      # 布局组件
    │   ├── Header.tsx      # 顶部导航
    │   ├── Footer.tsx      # 页脚
    │   └── ui/             # UI 基础组件
    └── pages/
        ├── HomePage/       # 首页各区块
        │   ├── HomePage.tsx
        │   ├── HeroSection.tsx
        │   ├── CasesSection.tsx
        │   ├── ProcessSection.tsx
        │   ├── PricingSection.tsx
        │   ├── CustomizeSection.tsx
        │   └── FaqSection.tsx
        └── NotFoundPage/   # 404 页面
```

## 页面模块

1. **Hero 首屏** - 大标题 + 桌面效果展示 + CTA 按钮
2. **案例展示** - 4个宠物桌宠案例卡片
3. **定制流程** - 三步流程说明（上传→生成→交付）
4. **定价方案** - 三档套餐（基础/推荐/全家福）
5. **上传定制** - 照片上传 + 信息填写表单
6. **常见问题** - 折叠式 FAQ 问答
7. **页脚** - 品牌信息 + 使用教程 + 关于我们

## 设计规范

- 主色：暖橙色 `#FF8C42`
- 背景：奶油白 `#FFF8F0`
- 风格：像素卡通可爱风
- 圆角卡片 + 柔和阴影
- 丰富的微交互动画

## 说明

本项目为营销落地页原型，表单提交为前端模拟，实际使用需接入后端 API。
