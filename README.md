# Portfolio - YANG, Mengyuan

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=flat&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

一个现代化的个人作品集网站，展示机器学习工程师的技能、项目经验和职业成就。采用 Astro 框架构建，具有优雅的设计和流畅的用户体验。

## ✨ 主要特性

- 🎨 **现代化设计** - 简洁优雅的界面，支持红色和铂金两种主题
- 🌓 **主题切换** - 流畅的主题过渡动画，支持多种配色方案
- 📱 **完全响应式** - 在所有设备上都有出色的显示效果
- ⌨️ **键盘快捷键** - 支持 Ctrl+K 命令面板，快速导航
- 🎯 **Neovim 模式** - 特色的 Neovim 风格交互界面
- 🖨️ **打印友好** - 优化的打印样式，可直接打印简历
- 🚀 **高性能** - 基于 Astro 的静态生成，加载速度极快
- 📊 **数据驱动** - 通过 TypeScript 配置文件管理所有内容
- 🎭 **自定义光标** - 独特的上下文感知光标效果

## 🛠️ 技术栈

### 核心框架
- **[Astro](https://astro.build/)** - 现代静态网站生成器
- **[TypeScript](https://www.typescriptlang.org/)** - 类型安全的 JavaScript 超集
- **[Tailwind CSS](https://tailwindcss.com/)** - 实用优先的 CSS 框架

### UI 组件
- **[Astro Icon](https://github.com/natemoo-re/astro-icon)** - 图标组件库
- **[Fancybox](https://fancyapps.com/fancybox/)** - 优雅的图片灯箱效果
- **[HotKeyPad](https://github.com/HotKeyPad/hotkeypad)** - 命令面板组件

### 开发工具
- **pnpm** - 快速、节省磁盘空间的包管理器
- **ESLint** - 代码质量检查
- **Prettier** - 代码格式化

### 部署平台
- **Netlify / Vercel** - 支持多种部署方案

## 📁 项目结构

```
portfolio/
├── public/                    # 静态资源
│   ├── icons/                # 网站图标
│   ├── images/               # 图片资源
│   ├── robots.txt           # 搜索引擎配置
│   └── sitemap.xml          # 网站地图
├── src/
│   ├── components/           # Astro 组件
│   │   ├── sections/        # 页面区块组件
│   │   │   ├── About.astro
│   │   │   ├── Education.astro
│   │   │   ├── Experience.astro
│   │   │   ├── Skills.astro
│   │   │   ├── Projects.astro
│   │   │   ├── Certificates.astro
│   │   │   └── Languages.astro
│   │   ├── neovim/          # Neovim 模式组件
│   │   ├── ThemeSwitch.astro
│   │   └── KeyboardManager.astro
│   ├── data/                # 数据文件
│   │   └── cv.ts            # 简历数据（核心配置）
│   ├── layouts/             # 布局模板
│   │   ├── Layout.astro
│   │   └── Neovim.astro
│   ├── pages/               # 页面路由
│   │   ├── index.astro      # 主页
│   │   └── neovim/          # Neovim 模式页面
│   ├── scripts/             # 客户端脚本
│   ├── styles/              # 样式文件
│   │   └── globals.css
│   └── types/               # TypeScript 类型定义
│       ├── cv.d.ts
│       ├── index.d.ts
│       └── globals.d.ts
├── astro.config.mjs         # Astro 配置
├── tailwind.config.mjs      # Tailwind 配置
├── tsconfig.json            # TypeScript 配置
├── package.json             # 项目依赖
└── README.md                # 项目文档

```

详细的项目结构说明请参考 [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)

## 🚀 快速开始

### 环境要求

- **Node.js** 18.0 或更高版本
- **pnpm** 8.0 或更高版本

### 安装

1. **克隆仓库**
   ```bash
   git clone https://github.com/Momoko-YANG/portfolio.git
   cd portfolio
   ```

2. **安装依赖**
   ```bash
   pnpm install
   ```

3. **启动开发服务器**
   ```bash
   pnpm run dev
   ```

4. **打开浏览器**
   
   访问 `http://localhost:4321` 查看网站

### 可用命令

```bash
pnpm run dev          # 启动开发服务器
pnpm run build        # 构建生产版本
pnpm run preview      # 预览生产构建
pnpm run astro        # 运行 Astro CLI 命令
```

## ⚙️ 配置指南

### 修改个人信息

所有个人信息都集中在 `src/data/cv.ts` 文件中。这是一个 TypeScript 文件，包含以下主要部分：

```typescript
// src/data/cv.ts

export const basics = {
  name: "你的姓名",
  label: "职位",
  email: "your.email@example.com",
  url: "https://yourwebsite.com",
  summary: "个人简介...",
  location: {
    city: "城市",
    region: "地区",
  },
  profiles: [
    {
      network: "GitHub",
      username: "your-username",
      url: "https://github.com/your-username"
    },
    // 更多社交链接...
  ]
};

export const education = [ /* 教育经历 */ ];
export const work = [ /* 工作经验 */ ];
export const skills = [ /* 技能列表 */ ];
export const projects = [ /* 项目展示 */ ];
export const certificates = [ /* 证书认证 */ ];
export const languages = [ /* 语言能力 */ ];
```

### 主题配置

在 `src/components/ThemeSwitch.astro` 中修改可用主题：

```astro
<select data-choose-theme>
  <option value="red">Red</option>
  <option value="platinum">Platinum</option>
  <!-- 添加更多主题 -->
</select>
```

### 添加图片

1. **头像照片**：将图片放入 `public/images/` 并在 `cv.ts` 中更新路径
2. **项目图片**：放入 `public/images/` 并在项目数据中引用
3. **图标**：放入 `public/icons/`

## 🎨 自定义样式

### 全局样式

编辑 `src/styles/globals.css` 来修改全局样式和主题变量：

```css
[data-theme="red"] {
  --color: 255, 82, 82;        /* 主题色 */
  --muted: 255, 240, 240;       /* 柔和色 */
  /* 其他颜色变量 */
}
```

### Tailwind 配置

在 `tailwind.config.mjs` 中自定义 Tailwind CSS 配置：

```javascript
export default {
  theme: {
    extend: {
      colors: {
        // 自定义颜色
      },
      // 其他配置
    }
  }
}
```

## 📄 页面区块

网站由以下可复用的区块组成：

- **Hero** - 首页头部，展示姓名和位置
- **About** - 专业摘要
- **Education** - 教育背景
- **Experience** - 工作经历
- **Skills** - 技能清单（带图标）
- **Projects** - 项目展示
- **Certificates** - 证书认证
- **Languages** - 语言能力

你可以在 `src/pages/index.astro` 中调整区块的顺序或移除不需要的区块。

## 🔧 开发建议

### 添加新区块

1. 在 `src/components/sections/` 创建新的 `.astro` 文件
2. 在 `src/data/cv.ts` 添加相应数据
3. 在 `src/pages/index.astro` 中导入并使用

### 路径别名

项目配置了以下路径别名（在 `tsconfig.json` 中）：

```typescript
import { basics } from '@cv';                    // 导入 CV 数据
import Hero from '@/components/sections/Hero.astro';  // 导入组件
```

## 📦 部署

### Netlify 部署

1. 将代码推送到 GitHub 仓库
2. 在 Netlify 中导入项目
3. 构建命令：`pnpm run build`
4. 发布目录：`dist`

### Vercel 部署

1. 安装 Vercel CLI：`npm i -g vercel`
2. 运行：`vercel`
3. 按照提示完成部署

### 手动部署

```bash
pnpm run build
```

构建产物在 `dist/` 目录，可以部署到任何静态托管服务。

## ⌨️ 键盘快捷键

| 快捷键 | 功能 |
|--------|------|
| `Ctrl + K` | 打开命令面板 |
| `Ctrl + O` | 切换深色模式 |
| `Ctrl + P` | 打印简历 |
| `Ctrl + E` | 发送邮件 |
| `Ctrl + G` | 访问 GitHub |
| `Ctrl + L` | 访问 LinkedIn |
| `Ctrl + K` (Kaggle) | 访问 Kaggle |

## 🎯 特色功能

### 1. Neovim 模式
访问 `/neovim` 路径体验 Neovim 风格的界面，包括：
- Vim 风格的键盘导航
- 状态栏和侧边栏
- 命令行界面

### 2. 自定义光标
网站具有上下文感知的光标效果，会根据鼠标悬停的元素改变样式。

### 3. 主题系统
支持多种配色主题，使用 View Transition API 实现流畅的主题切换动画。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📝 许可证

本项目采用 MIT 许可证。详见 [LICENSE](./LICENSE) 文件。

## 📧 联系方式

- **Email**: yangmengyuan1215@gmail.com
- **GitHub**: [@Momoko-YANG](https://github.com/Momoko-YANG)
- **LinkedIn**: [Your LinkedIn](https://linkedin.com)
- **Kaggle**: [@yangmengyuanmomoko](https://www.kaggle.com/yangmengyuanmomoko)

## 🙏 致谢

- 感谢 [Astro](https://astro.build/) 团队提供的优秀框架
- 感谢所有开源项目的贡献者

---

**Built with ❤️ using Astro**

*Last Updated: November 2024*
