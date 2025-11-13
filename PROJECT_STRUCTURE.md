# 项目结构说明

本文档描述了项目的目录结构和文件组织方式。

## 📁 根目录

```
portfolio/
├── public/              # 静态资源目录
├── src/                 # 源代码目录
├── astro.config.mjs     # Astro 配置文件
├── package.json         # 项目依赖
├── pnpm-lock.yaml       # pnpm 锁文件
├── tailwind.config.mjs  # Tailwind CSS 配置
├── tsconfig.json        # TypeScript 配置
├── netlify.toml         # Netlify 部署配置
└── README.md            # 项目说明
```

## 📂 src/ 目录结构

### 📄 data/ - 数据文件
存放项目的数据配置文件。

```
src/data/
└── cv.ts               # 个人简历数据（教育、经历、技能等）
```

### 🎨 styles/ - 样式文件
存放全局样式和主题配置。

```
src/styles/
└── globals.css         # 全局 CSS 样式
```

### 📝 types/ - 类型定义
存放 TypeScript 类型定义文件。

```
src/types/
├── cv.d.ts             # CV 数据的类型定义
├── globals.d.ts        # 全局类型定义
└── index.d.ts          # 通用类型定义
```

### 🧩 components/ - 组件
可复用的 Astro 组件。

```
src/components/
├── sections/           # 页面区块组件
│   ├── About.astro         # 关于我
│   ├── Certificates.astro  # 证书认证
│   ├── Education.astro     # 教育经历
│   ├── Experience.astro    # 工作经验
│   ├── Hero.astro          # 首页头部
│   ├── Languages.astro     # 语言能力
│   ├── Projects.astro      # 项目展示
│   └── Skills.astro        # 技能列表
├── neovim/            # Neovim 模式相关组件
│   ├── KeyBindings.astro
│   ├── Sidebar.astro
│   └── StatusBar.astro
├── BackgroundArt.astro    # 背景艺术效果
├── KeyboardManager.astro  # 键盘快捷键管理
├── Section.astro          # 通用区块容器
└── ThemeSwitch.astro      # 主题切换器
```

### 📐 layouts/ - 布局模板
页面布局组件。

```
src/layouts/
├── Layout.astro        # 主布局
└── Neovim.astro        # Neovim 模式布局
```

### 📄 pages/ - 页面路由
Astro 的基于文件的路由系统。

```
src/pages/
├── index.astro         # 首页
└── neovim/            # Neovim 模式页面
    ├── index.astro
    ├── about.astro
    ├── contact.astro
    ├── help.astro
    └── projects.astro
```

### 🔧 scripts/ - 脚本文件
客户端 JavaScript 脚本。

```
src/scripts/
├── main.ts            # 主脚本
├── navigation.ts      # 导航逻辑
└── search.ts          # 搜索功能
```

### 📚 lib/ - 第三方库
项目使用的第三方库和工具。

```
src/lib/
└── contextCursor/     # 自定义光标库
    ├── chunks/
    ├── modes/
    ├── propNames/
    ├── types/
    └── index.ts
```

## 🌐 public/ 目录结构

### 🎨 icons/ - 图标
网站图标文件。

```
public/icons/
├── favicon.ico         # 网站图标
└── apple-touch-icon.webp  # Apple 设备图标
```

### 🖼️ images/ - 图片
网站使用的图片资源。

```
public/images/
├── profilephoto.PNG    # 个人头像
├── neovim.webp         # Neovim 图标
└── astro-vim.webp      # Astro Vim 图片
```

### 📄 其他文件
```
public/
├── robots.txt          # 搜索引擎爬虫配置
└── sitemap.xml         # 网站地图
```

## 🔑 路径别名

在 `tsconfig.json` 中配置了以下路径别名：

- `@/*` → `src/*` - src 目录
- `@cv` → `src/data/cv.ts` - CV 数据文件
- `@components/*` → `src/components/*` - 组件目录
- `@layouts/*` → `src/layouts/*` - 布局目录

## 📝 使用示例

### 导入 CV 数据
```typescript
import { basics, education, work } from '@cv';
```

### 导入组件
```typescript
import Hero from '@/components/sections/Hero.astro';
```

### 引用公共资源
```html
<img src="/images/profilephoto.PNG" alt="Profile" />
<link rel="icon" href="/icons/favicon.ico" />
```

## 🎯 文件命名规范

- **组件文件**: 使用 PascalCase，如 `Hero.astro`, `ThemeSwitch.astro`
- **数据文件**: 使用 camelCase，如 `cv.ts`
- **样式文件**: 使用 kebab-case 或 camelCase，如 `globals.css`
- **类型文件**: 使用 camelCase.d.ts，如 `cv.d.ts`
- **目录名**: 使用 kebab-case 或 camelCase，如 `components`, `sections`

## 📌 注意事项

1. **数据修改**: 所有简历相关的数据修改都在 `src/data/cv.ts` 中进行
2. **样式修改**: 全局样式修改在 `src/styles/globals.css` 中进行
3. **组件添加**: 新的页面区块组件应添加到 `src/components/sections/`
4. **图片资源**: 新的图片应添加到 `public/images/`，图标添加到 `public/icons/`
5. **类型定义**: 新的类型定义应添加到 `src/types/` 目录

## 🚀 开发建议

- 保持目录结构的一致性
- 遵循单一职责原则组织文件
- 使用路径别名简化导入
- 定期清理未使用的文件和依赖
- 保持命名规范的统一性

