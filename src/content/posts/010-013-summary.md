---
title: "TypeScript 构建流程入门：从编译到自动化"
description: "基于 Total TypeScript 学习的 TypeScript 构建流程笔记，涵盖浏览器为何不能直接运行 TS、tsc 编译、watch 模式自动编译、outDir 管理编译产物等。"
pubDatetime: 2026-06-17T01:33:00Z
updatedDatetime: 2026-06-17T01:33:00Z
heroImage: "/blog-placeholder-1.jpg"
tags: ["TypeScript", "构建流程", "tsc", "入门指南", "Total TypeScript"]
---

> 📖 **学习来源**：本文是我学习 [**Total TypeScript**](https://www.totaltypescript.com/)（Matt Pocock 的 TypeScript 教程项目）第 010-013 章节做的个人笔记总结。

# 010-013 知识点总结

## 概述

从 010 到 013，跟着 Total TypeScript 学习了 TypeScript 构建流程的基础：从理解"为什么需要编译"，到实际配置编译、自动化编译、以及输出管理。以下按章节逐一总结。

---

## 010 — TypeScript in the Browser（浏览器中的 TypeScript）

### 核心问题

浏览器**无法直接运行** `.ts` 文件。当 `index.html` 中直接引用 `example.ts` 时，页面会报错无法工作。

```html
<!-- ❌ 错误做法 -->
<script src="example.ts"></script>
```

### 关键认知

- 浏览器原生只理解 **JavaScript**，不理解 TypeScript
- TypeScript 代码必须先**编译（Compile）**成 JavaScript 才能在浏览器中运行
- 这引出了 TypeScript 构建流程的必要性

---

## 011 — Compile TypeScript to JavaScript（编译 TypeScript）

### 核心问题

需要将 `.ts` 文件编译为 `.js` 文件，让浏览器能够执行。

### 解决方案

**① 创建 `tsconfig.json` 配置文件**

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs"
  }
}
```

**② 运行 TypeScript 编译器**

```bash
tsc
```

**③ 修改 `index.html` 引用编译后的 `.js` 文件**

```html
<!-- ✅ 正确做法 -->
<script src="example.js"></script>
```

### 关键认知

| 概念            | 说明                                                           |
| --------------- | -------------------------------------------------------------- |
| `tsc`           | TypeScript Compiler，将 `.ts` 编译为 `.js`                     |
| `tsconfig.json` | TypeScript 项目的**配置文件**，放在项目根目录                  |
| `target`        | 指定编译输出的 JavaScript 版本（如 `es2016`）                  |
| `module`        | 指定模块系统（如 `commonjs`）                                  |
| 编译结果        | 类型注解（`: string` 等）在编译后被**移除**，生成纯 JavaScript |

---

## 012 — tsc Watch Mode（监听模式）

### 核心问题

每次修改代码都要手动运行 `tsc`，开发效率低。

### 解决方案

使用 **watch 模式**，让 `tsc` 持续监听文件变化，自动重新编译：

```bash
# 两种写法等价
tsc --watch
tsc -w
```

### 关键认知

- Watch 模式下，`tsc` 进程**保持运行**，持续监听文件变更
- 每次保存 `.ts` 文件，自动触发重新编译
- 按 `Ctrl + C` 退出监听模式
- 大幅提升开发效率，是开发阶段的推荐用法

---

## 013 — Compiling to a Directory（输出到指定目录）

### 核心问题

编译输出的 `.js` 文件与源 `.ts` 文件混在**同一目录**中，项目结构不清晰。

### 解决方案

**① 在 `tsconfig.json` 中设置 `outDir`**

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "outDir": "./dist" // 将编译输出重定向到 dist/ 目录
  }
}
```

**② 创建 `.gitignore` 忽略输出目录**

```gitignore
dist
```

**③ 更新 `index.html` 引用路径**

```html
<script src="dist/example.js"></script>
```

### 关键认知

| 概念         | 说明                                                |
| ------------ | --------------------------------------------------- |
| `outDir`     | 指定编译输出的**目标目录**，保持源码与产物分离      |
| `.gitignore` | 将 `dist/` 加入忽略列表，编译产物不需要纳入版本控制 |
| 项目结构     | 源码（`.ts`）与产物（`.js`）分离，项目更整洁        |

---

## 整体总结

| 章节 | 学习主题                      | 核心命令/配置                       |
| ---- | ----------------------------- | ----------------------------------- |
| 010  | 浏览器不能直接运行 `.ts`      | —                                   |
| 011  | 使用 `tsc` 编译 `.ts` → `.js` | `tsc` + `tsconfig.json`             |
| 012  | Watch 模式自动编译            | `tsc --watch` / `tsc -w`            |
| 013  | 用 `outDir` 分离源码与产物    | `"outDir": "./dist"` + `.gitignore` |

### 完整开发流程

```
1. 创建 tsconfig.json        ← 配置编译选项
2. 编写 .ts 源文件           ← 编写 TypeScript 代码
3. tsc --watch               ← 启动监听，自动编译到 dist/
4. index.html 引入 dist/.js  ← 浏览器加载编译后的 JS
5. .gitignore 忽略 dist/     ← 产物不提交版本控制
```

这是 TypeScript 项目最基础的构建工作流，后续章节将在其基础上引入更高级的工具和配置。

---

> 📌 **关于 Total TypeScript**：[Matt Pocock](https://www.totaltypescript.com/) 的 TypeScript 教程被全球开发者誉为"TS 入门圣经"。本文所有知识点均来源于对该项目第 010-013 章节的学习与总结，感兴趣的朋友可以自行前往了解。
