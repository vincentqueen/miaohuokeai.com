# 秒获客AI网站备份

## 项目简介
秒获客AI - 全域赋能获客体系，这是一个基于Next.js 15的现代化网站项目。

## 技术栈
- **框架**: Next.js 15.4.7
- **UI库**: React 19.1.0
- **样式**: Tailwind CSS 4
- **动画**: Framer Motion 12.23.12
- **组件库**: Radix UI
- **开发语言**: TypeScript 5

## 项目结构
```
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局组件
│   └── page.tsx           # 首页组件
├── components/            # React组件
│   ├── hero-section-1.tsx # 主要英雄区域组件
│   └── ui/                # UI组件库
│       ├── animated-group.tsx
│       ├── beams-background.tsx  # 动态蓝色光源背景
│       ├── button.tsx
│       └── text-effect.tsx
├── lib/                   # 工具函数
│   └── utils.ts
├── public/                # 静态资源
└── 配置文件
```

## 主要功能
1. **响应式设计**: 适配各种屏幕尺寸
2. **动态背景**: 蓝色光束动画效果
3. **现代UI**: 使用Tailwind CSS和Framer Motion
4. **TypeScript**: 完整的类型安全
5. **组件化**: 模块化的React组件架构

## 最近更新
- ✅ 移除了8个品牌Logo显示
- ✅ 调整页面布局，减少两侧空白空间
- ✅ 添加动态蓝色光源背景效果
- ✅ 优化响应式设计

## 备份时间
" + new Date().toLocaleString('zh-CN') + "

## 开发服务器
```bash
npm install
npm run dev
```

## 注意事项
- 本备份不包含node_modules和.next构建文件
- 需要重新安装依赖: `npm install`
- 开发服务器默认运行在 http://localhost:3000