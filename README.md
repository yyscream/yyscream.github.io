# 🍃 YiYiSu's Blog

![YiYiSu's Blog](public/default-og.jpg)

![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare%20Pages-F38020?style=for-the-badge&logo=cloudflarepages&logoColor=white)

**亿壹粟的个人博客** —— 一个基于 [AstroPaper](https://github.com/satnaing/astro-paper) 主题构建的前端学习笔记与成长记录博客。

> 🌐 在线地址：[https://yiyisu.top](https://yiyisu.top)

---

## 📋 项目简介

这是一个使用 [Astro](https://astro.build/) 构建的静态博客站点，部署在 [Cloudflare Pages](https://pages.cloudflare.com/) 上。主题基于 [AstroPaper](https://github.com/satnaing/astro-paper) 进行定制，专注于内容创作和阅读体验。

### ✨ 功能特性

- ✅ **TypeScript 类型安全** — 全程类型检查，更少的运行时错误
- ⚡ **极速性能** — Astro 静态生成，秒开加载
- ♿ **无障碍访问** — 支持键盘和屏幕阅读器
- 📱 **响应式设计** — 手机到桌面全适配
- 🔍 **站内搜索** — 基于 [Pagefind](https://pagefind.app/) 的静态搜索
- 🌓 **深色/浅色模式** — 跟随系统或手动切换
- 📝 **草稿与分页** — 支持文章草稿和列表分页
- 🗺️ **Sitemap & RSS** — 站点地图和 RSS 订阅
- 🖼️ **动态 OG 图** — 文章自动生成社交分享封面图
- 🌍 **多语言支持** — 内置国际化（i18n）框架
- 📦 **MDX 支持** — 可在 Markdown 中使用组件

---

## 🚀 快速开始

### 本地开发

```bash
# 1. 克隆仓库
git clone https://github.com/yyscream/yiyisu-blog.git
cd yiyisu-blog

# 2. 安装依赖（推荐使用 pnpm）
pnpm install

# 3. 启动开发服务器
pnpm dev
```

浏览器打开 `http://localhost:4321` 即可预览。

### 常用命令

| 命令             | 说明                                                 |
| :--------------- | :--------------------------------------------------- |
| `pnpm install`   | 安装项目依赖                                         |
| `pnpm dev`       | 启动本地开发服务器（默认 `localhost:4321`）          |
| `pnpm build`     | 构建生产版本（含类型检查、Pagefind 索引）            |
| `pnpm preview`   | 本地预览构建后的站点                                 |
| `pnpm sync`      | 生成 Astro 模块的 TypeScript 类型                    |
| `pnpm astro ...` | 执行 Astro CLI 命令（如 `astro add`, `astro check`） |

---

## 📁 项目结构

```
/
├── public/                  # 静态资源
│   └── pagefind/            # 构建时自动生成的搜索索引
├── src/
│   ├── assets/              # 图标和图片资源
│   ├── components/          # Astro 组件
│   ├── content/
│   │   ├── pages/           # 自定义页面（如 about.md）
│   │   └── posts/           # 博客文章（Markdown / MDX）
│   ├── i18n/                # 国际化配置
│   ├── layouts/             # 页面布局
│   ├── pages/               # 路由页面
│   ├── scripts/             # 客户端脚本
│   ├── styles/              # 全局样式
│   ├── types/               # TypeScript 类型定义
│   ├── utils/               # 工具函数
│   ├── config.ts            # 内部配置
│   └── content.config.ts    # 内容集合定义
├── astro-paper.config.ts    # 🔧 用户配置文件（个性化设置）
├── astro.config.ts          # Astro 配置
├── compose.yaml             # Docker Compose 配置
└── Dockerfile               # Docker 部署配置
```

> 博客文章全部存放在 `src/content/posts/` 目录下，支持按子目录组织。

---

## 🔧 个性化配置

所有的个性化设置都在 `astro-paper.config.ts` 中完成：

```ts
// astro-paper.config.ts
export default defineAstroPaperConfig({
  site: {
    url: "https://yiyisu.top/",
    title: "YiYiSu's Blog",
    description: "亿壹粟的个人博客",
    author: "YiYiSu",
    lang: "zh-cn",
    timezone: "Asia/Shanghai",
  },
  posts: {
    perPage: 4, // 每页文章数
    perIndex: 4, // 首页展示数
    scheduledPostMargin: 15 * 60 * 1000, // 定时发布缓冲（毫秒）
  },
  socials: [
    { name: "github", url: "https://github.com/yyscream" },
    { name: "bilibili", url: "https://space.bilibili.com/388294987" },
  ],
});
```

### 📝 添加新文章

在 `src/content/posts/` 下创建 `.md` 或 `.mdx` 文件，添加 Frontmatter 即可：

```yaml
---
title: "文章标题"
description: "文章描述"
pubDatetime: 2026-06-15T10:00:00Z
tags: ["标签1", "标签2"]
draft: false
---
```

---

## 🛠️ 技术栈

| 技术                                                                                   | 用途             |
| :------------------------------------------------------------------------------------- | :--------------- |
| [Astro](https://astro.build/)                                                          | 静态站点框架     |
| [TypeScript](https://www.typescriptlang.org/)                                          | 类型安全检查     |
| [Tailwind CSS](https://tailwindcss.com/)                                               | 样式方案         |
| [Pagefind](https://pagefind.app/)                                                      | 站内静态搜索     |
| [Satori](https://github.com/vercel/satori) + [Sharp](https://sharp.pixelplumbing.com/) | 动态 OG 图片生成 |
| [Cloudflare Pages](https://pages.cloudflare.com/)                                      | 托管部署         |
| [Docker](https://www.docker.com/)                                                      | 本地容器化开发   |

---

## 🚢 部署

### Cloudflare Pages（推荐）

推送代码到 GitHub 主分支后，Cloudflare Pages 会自动构建部署。在 Cloudflare Dashboard 中配置：

- **构建命令**：`pnpm run build`
- **输出目录**：`dist`

### Docker 部署

项目提供了 `Dockerfile` 和 `compose.yaml`，支持容器化部署：

```bash
docker compose up -d
```

访问 `http://localhost:4321` 即可。

---

## 📄 许可证

本项目基于 MIT 协议开源，Copyright © 2026 YiYiSu。

---

> 🙏 主题来自 [AstroPaper](https://github.com/satnaing/astro-paper) by [Sat Naing](https://satnaing.dev)
