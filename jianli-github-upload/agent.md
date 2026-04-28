# AGENTS.md

## 项目定位
这是金梓文的中文个人网站，用于展示教育背景、技能工具、项目经历和个人介绍。网站服务于实习求职，目标岗位包括数据分析、遥感分析、运营、供应链等方向。

## 内容原则
- 全站默认使用中文。
- 技术名和软件名可以保留英文，例如 Python、R、SQL、GEE、ArcGIS。
- 不要过度强调生态学专业身份。
- 强调数据分析、空间思维、遥感能力、问题拆解、项目交付和表达转化。
- 文案要克制、清晰、专业，不要夸张营销。

## 代码原则
- 不要把主要文案直接写死在组件里。
- 主要文字、项目、技能、图片路径应集中放在 src/data/siteContent.ts 或类似文件中。
- 页面组件只负责展示。
- 修改后必须保证构建通过。
- 不要随意引入大型依赖。
- 不要重建整个项目，优先在现有结构上修改。

## 资源路径约定
- 上海遥感背景图：public/assets/shanghai-remote-sensing.jpg
- 简历 PDF：public/resume.pdf
- 软件图标：public/logos/
- 项目图片：
  - public/projects/ecosystem/
  - public/projects/lcz/
  - public/projects/dual-carbon/
