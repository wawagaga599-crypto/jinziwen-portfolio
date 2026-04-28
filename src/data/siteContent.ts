import {
  BarChart3,
  BrainCircuit,
  MessagesSquare,
  Satellite,
} from "lucide-react";
import type { LabPanel, Note, Project, Skill } from "../types";

export const siteContent = {
  identity: {
    name: "金梓文",
    latinName: "Jin Ziwen",
    logo: "Jin Ziwen / 金梓文",
    status: "焦虑地找工作中",
    footerLine: "金梓文 / Jin Ziwen - 数据分析、空间思维与遥感应用",
  },
  navItems: [
    { label: "关于我", href: "#about" },
    { label: "项目经历", href: "#projects" },
    { label: "成果一览", href: "#data-lab" },
    { label: "未完待续", href: "#field-notes" },
    { label: "简历", href: "#resume" },
    { label: "联系", href: "#contact" },
  ],
  hero: {
    eyebrow: "我用数据、遥感与空间视角，观察城市如何变化。",
    title: "面向真实问题的数据与空间分析。",
    subtitle: "把复杂系统拆开，再把结论讲清楚。",
    description:
      "我关注城市、人类活动与空间数据之间的关系，擅长从遥感影像、表格数据和项目材料中提取信息，形成可解释、可展示、可交付的分析结果。",
    secondaryDescription:
      "目标方向包括数据分析、遥感分析、运营、供应链及相关实习岗位。",
    primaryCta: "查看项目",
    secondaryCta: "下载简历",
    visualTitle: "城市数据工作台",
    visualMeta: "Shanghai / remote sensing sample",
    mascotLabel: "问题拆解中",
    mascotLines: ["读取影像", "整理样本", "验证结果", "输出报告"],
    tags: ["#DataAnalysis", "#RemoteSensing", "#Python", "#R", "#GEE", "#ArcGIS"],
  },
  sections: {
    skills: {
      eyebrow: "能力面板",
      title: "工具不是清单，而是解决问题的路径。",
      copy: "我希望把数据清洗、空间判断、模型评估和表达转化放在同一个工作流里。",
    },
    projects: {
      eyebrow: "项目经历",
      title: "围绕数据、空间和交付的几段实践。",
    },
    dataLab: {
      eyebrow: "数据实验室",
      title: "把问题先放到工作台上。",
      copy: "这里先使用模拟图形呈现分析思路，后续可以替换为真实遥感图、指标图和项目输出。",
    },
    about: {
      eyebrow: "关于我",
      title: "我更习惯从问题开始，而不是从标签开始。",
    },
    fieldNotes: {
      eyebrow: "观察笔记",
      title: "一些正在整理的问题和复盘。",
    },
    resume: {
      eyebrow: "简历",
      title: "面向招聘场景的快速信息摘要。",
      copy: "完整 PDF 可放入 public/resume.pdf，页面按钮会自动指向该文件。",
    },
  },
  about: {
    main:
      "我不是只会写报告的学生。我更像一个问题拆解者：把城市、人类活动、空间数据和业务目标放在一起，找到可解释、可展示、可落地的答案。",
    support:
      "我的训练背景来自生态与城市研究，但我更关注如何把数据、工具和场景连接起来，形成清楚的判断和可复用的工作流程。",
    timelineTitle: "时间线",
    timeline: [
      "2020-2024：华东师范大学，生态学本科",
      "2024-2027：华东师范大学，生态学硕士",
      "当前：关注数据分析、遥感分析、项目交付与实习探索",
    ],
    keywords: ["数据敏感", "空间思维", "场景落地"],
  },
  resume: {
    title: "简历预览",
    subtitle: "信息清晰、重点靠前，便于招聘方快速阅读。",
    button: "下载简历",
    rows: [
      ["姓名", "金梓文"],
      ["目标方向", "数据分析 / 遥感分析 / 运营 / 供应链相关实习"],
      ["教育背景", "华东师范大学，生态学硕士，2027 届"],
      ["工具能力", "Python、R、SQL、GEE、ArcGIS、Random Forest、XGBoost、Office、Photoshop"],
      ["语言能力", "CET-6 613，日语 N2"],
    ],
  },
  contact: {
    eyebrow: "联系",
    title: "如果你想聊数据、城市、项目或一个具体岗位。",
    items: [
      { label: "邮箱", value: "j_z_w599@163.com", href: "mailto:j_z_w599@163.com", type: "mail" },
      { label: "电话 / 微信", value: "详见简历", href: "#resume", type: "phone" },
      { label: "GitHub", value: "待补充", href: "#contact", type: "github" },
      { label: "LinkedIn / 作品集", value: "待补充", href: "#contact", type: "linkedin" },
    ],
  },
  assets: {
    shanghaiRemoteSensing: "/assets/shanghai-remote-sensing.jpg",
    resumePdf: "/resume.pdf",
    logosDir: "/logos/",
    projectImages: {
      ecosystem: "/projects/ecosystem/",
      lcz: "/projects/lcz/",
      dualCarbon: "/projects/dual-carbon/",
    },
  },
};

export const skills: Skill[] = [
  {
    title: "数据分析",
    description: "从清洗、统计到可视化，关注数据是否能支撑判断，而不只是生成图表。",
    tools: ["Python", "R", "SQL", "数据清洗", "统计分析", "可视化"],
    icon: BarChart3,
  },
  {
    title: "遥感与空间分析",
    description: "处理遥感影像与空间图层，理解城市地表、用地结构和环境指标之间的关系。",
    tools: ["GEE", "Landsat", "ArcGIS", "样本标注", "影像解译"],
    icon: Satellite,
  },
  {
    title: "模型与评估",
    description: "使用分类与预测模型辅助分析，并通过准确率、混淆矩阵等方式检查结果可靠性。",
    tools: ["Random Forest", "XGBoost", "模型评估", "Confusion Matrix"],
    icon: BrainCircuit,
  },
  {
    title: "表达与交付",
    description: "把分析过程转化为报告、汇报材料和可沟通的结论，适配团队协作与项目交付。",
    tools: ["报告写作", "汇报展示", "跨团队沟通", "科普转化"],
    icon: MessagesSquare,
  },
];

export const projects: Project[] = [
  {
    title: "上海市生态系统质量和功能调查",
    type: "遥感分析 / 空间数据 / 项目报告",
    description:
      "参与处理和整合 10GB+ 空间数据，包括生态系统类型解译、生态系统质量、生态系统功能和人类活动强度等数据。支持使用 Random Forest 分析人类活动对生态系统质量与功能的影响，并参与专题制图和 5 万字报告输出。",
    problem: "如何在城市尺度上整合多源空间数据，并形成可解释的生态系统质量与功能判断？",
    method:
      "清洗并整合生态类型、质量、功能和人类活动强度等图层，支持建模分析与空间可视化。",
    result: "完成专题地图、数据整理成果和长篇项目报告，为综合评估提供材料支撑。",
    role: "数据清洗、空间数据整合、建模支持、可视化、报告输出",
    tags: ["Spatial Data", "Random Forest", "ArcGIS", "Report Writing", "Ecosystem Assessment"],
  },
  {
    title: "上海市长时序局部气候区（LCZ）数据集识别与构建",
    type: "GEE / 遥感分类 / 精度评估",
    description:
      "使用 Google Earth Engine 进行 Landsat 影像预处理，参与遥感特征提取和样本标注，整理 100+ 样本，使用 Random Forest 训练 LCZ 分类模型，并通过混淆矩阵评估分类精度。",
    problem: "如何基于长时序遥感影像识别城市局部气候区，并保证分类结果可评估？",
    method:
      "在 GEE 中完成影像预处理与特征提取，组织样本并训练 Random Forest 分类模型。",
    result: "形成 LCZ 分类结果，并使用混淆矩阵进行精度检查和结果复核。",
    role: "影像预处理、样本整理、模型训练、精度评估",
    tags: ["GEE", "Landsat", "LCZ", "Random Forest", "Confusion Matrix"],
  },
  {
    title: "第三届中国研究生“双碳”创新与创意大赛",
    type: "可持续发展 / 数据整理 / 项目运营",
    description:
      "担任项目第二负责人，负责生物多样性实地调查、数据分析和报告撰写，并参与将研究成果转化为社区和学校教育场景。",
    problem: "如何把研究型材料转化为社区和学校可以理解、可以参与的行动方案？",
    method:
      "结合实地调查、数据整理、报告写作和科普活动设计，推动项目从研究内容走向实际场景。",
    result:
      "开展 20+ 场科普活动，触达 6000+ 用户，发放 1800+ 册图书，被 9 所学校采用，获得 20+ 媒体报道，组织 100+ 志愿者参与。",
    impact:
      "20+ 场科普活动，6000+ 用户触达，1800+ 册图书发放，9 所学校采用，20+ 媒体报道，100+ 志愿者参与。",
    role: "实地调查、数据分析、报告写作、公众沟通、项目执行",
    tags: ["Biodiversity", "Sustainability", "Science Communication", "Community Operations"],
  },
];

export const labPanels: LabPanel[] = [
  {
    id: "heat",
    title: "城市热环境",
    question: "哪些街区在夜间仍然保留热量？",
    signal: "地表温度异常",
    color: "bg-amber",
  },
  {
    id: "ecosystem",
    title: "生态质量",
    question: "哪些空间单元稳定，哪些正在承受压力？",
    signal: "质量 / 功能指标",
    color: "bg-moss",
  },
  {
    id: "biodiversity",
    title: "生物多样性",
    question: "小尺度生境如何连接更大的生活网络？",
    signal: "调查记录与物种线索",
    color: "bg-cyan",
  },
  {
    id: "lcz",
    title: "LCZ 地图",
    question: "城市形态如何影响局地气候特征？",
    signal: "分类置信度",
    color: "bg-bay",
  },
];

export const notes: Note[] = [
  {
    title: "城市观察 001：一条河流如何影响街区温度？",
    meta: "观察笔记 / 待更新",
    excerpt: "从水体、风、地表材质和步行体验出发，记录一个可以被数据验证的小问题。",
  },
  {
    title: "数据分析学习笔记：从 SQL 到业务问题",
    meta: "学习记录 / 待更新",
    excerpt: "查询语句只是起点，更重要的是把问题定义清楚，再决定如何取数和解释。",
  },
  {
    title: "面试复盘：从学生思维到实习生思维",
    meta: "求职复盘 / 待更新",
    excerpt: "把课程项目、研究经历和个人能力翻译成岗位能理解的贡献方式。",
  },
];
