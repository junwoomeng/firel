# Changelog

本文件记录 firel.cn 网站的版本演进。格式遵循 [Keep a Changelog](https://keepachangelog.com/)。

## [0.2.0] - 2026-03-15

### 新增

- 概念页: 搜索层(search-layer)、火种与火光(kindling-and-light)、推理坡度(reasoning-slope)
- 方法页: 可见性与采纳率(visibility-vs-adoption)、内容主权与工具主权(content-sovereignty)、两类读者(two-readers)
- 证据页: GEO论文解读(geo-paper)、多平台采纳测试(platform-adoption-test)、基线对照实验(baseline-comparison)、自证特性(self-attestation)、多维收敛vs线性堆叠(multi-convergence-vs-linear)
- 指南页: AI搜索vs传统搜索(ai-vs-search-engine)、怎么让内容被AI引用(how-to-get-cited)

### 加厚

- citation-layer: 补SEO/GEO切割、Gartner数据、误解四(中小企业优势)、完整互链
- adoption-rate: 补visibility区分、完整价值链(判断标准/地址绑定/品牌渗透)、互链
- why-ai-recommends-others: 从3原因扩展到4原因、补实验证据节、相关页面分组
- how-ai-selects-sources: 补"钻空子vs建坡度"框架、扩展互链
- why-format-has-ceiling: 扩展互链到证据页和新方法页

### 基础设施

- 首页重组: 展示全部18个内容页
- 页脚导航: 覆盖全部4个内容区(概念/方法/证据/指南)
- evidence集合: Content Collections schema + 路由模板

### 统计

- 总页面: 22 (5概念 + 5方法 + 5证据 + 3指南 + 4静态)
- 从v0.1的7页扩展到22页

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
