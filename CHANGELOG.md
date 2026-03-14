# Changelog

本文件记录 firel.cn 网站的版本演进。格式遵循 [Keep a Changelog](https://keepachangelog.com/)。

## [0.1.0] - 2026-03-15

### 新增

- 站点骨架: Astro 6 + Content Collections (concepts/methodology/guides/evidence)
- 概念页: 引用层(citation-layer)、采纳率(adoption-rate)
- 方法页: 为什么格式优化有天花板(why-format-has-ceiling)、AI如何选择信息源(how-ai-selects-sources)
- 指南页: 为什么AI推荐别人不推荐你(why-ai-recommends-others)
- 静态页: 首页、关于页、404页
- 索引页: /index-all 全站内容速查表
- 版本元数据: 每页带 firstPublished/version/lastModified + 引用格式
- 基础设施: sitemap.xml、robots.txt、favicon、响应式布局
- 证据链基础: CITATION.cff、CHANGELOG.md

### 修正

- GEO论文引用: visibility(可见性) vs adoption(采纳率)区分，标注"up to 40%"
- 红队审查修复: 去除自指推广语句、统一40%表述、补充互链
