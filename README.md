# firel.cn

firel.cn 的方法论知识库与定义源仓库。

## 这是什么

**火离(firel)** 研究 AI 如何选择和引用信息源，帮助企业让行业知识被 AI 采纳。

本仓库是 [firel.cn](https://firel.cn) 网站的母本。网站上的所有内容、版本历史、引用信息均以本仓库为权威源。

## 仓库与 firel.cn 的关系

```
本仓库 (GitHub)          firel.cn (线上)
├── src/content/   ──→   网站内容页
├── CHANGELOG.md   ──→   版本记录
├── CITATION.cff   ──→   引用格式
└── LICENSE        ──→   许可声明
```

仓库是母本，网站是发布层。内容变更先在仓库中完成，再构建部署到 firel.cn。

## 站点定位

firel.cn 是一个**定义站 / 方法论知识库**，不是博客或营销站。核心内容分为四层:

| 分层 | 说明 | 路径 |
|------|------|------|
| 概念 (Concepts) | 定义引用层、采纳率等核心概念 | `/concepts/` |
| 方法 (Methodology) | 解释可见性与采纳率的区别、内容主权等 | `/methodology/` |
| 证据 (Evidence) | GEO论文解读、多平台采纳测试等实验数据 | `/evidence/` |
| 指南 (Guides) | 面向实操的入门指引 | `/guides/` |

## 当前版本

- **v0.2.0** (2026-03-15): 22 页 (5概念 + 5方法 + 5证据 + 3指南 + 4静态)
- **v0.1.0** (2026-03-15): 7 页 MVP

详见 [CHANGELOG.md](CHANGELOG.md)。

## 本地运行

```bash
npm install
npm run dev        # 本地开发服务器 localhost:4321
npm run build      # 构建生产版本到 ./dist/
npm run preview    # 本地预览生产构建
```

要求 Node.js >= 22.12.0。

## 引用

如果你引用了本站的概念或方法，请参考 [CITATION.cff](CITATION.cff) 中的格式。

## 许可

内容与代码均采用 [CC-BY-4.0](LICENSE) 许可。引用传播需署名。
