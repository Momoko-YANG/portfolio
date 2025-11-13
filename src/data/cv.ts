// Portfolio CV Data
// 你可以在这里添加注释来说明每个字段的用途

export const analyticsCode = "";

// 基本信息
export const basics = {
  name: "YANG, Mengyuan",
  label: "Software Developer",
  animated_main_label: "developer",
  animated_secondary_initial_label: "software",
  animated_secondary_final_label: "fullstack",
  image: "/images/profilephoto.PNG", // 头像路径，放在 public/images 文件夹中
  email: "yangmengyuan1215@gmail.com",
  url: "https://anmol.pro", // 个人网站
  summary: `Passionate Machine Learning Engineer with experience in backend development, NLP, and financial time series forecasting. Skilled in building end-to-end ML pipelines, cloud deployment, and applied mathematical modeling.

Seeking a position as a Machine Learning Engineer / AI Engineer / Data Engineer, where I can leverage my technical expertise to support digital transformation and scalable system development.`,
  theme: "platinum", // 主题：red 或 platinum
  location: {
    city: "Shizuoka",
    countryCode: "JP",
    region: "Japan",
  },
  // 社交媒体链接
  profiles: [
    {
      network: "LinkedIn",
      icon: "mdi:linkedin",
      color: "#0A66C2",
      username: "Momoko-YANG",
      url: "https://www.linkedin.com/in/momoko-yang",
    },
    {
      network: "GitHub",
      icon: "mdi:github",
      color: "#929AAB",
      username: "Momoko-YANG",
      url: "https://github.com/Momoko-YANG",
    },
    {
      network: "Email",
      icon: "ri:mail-fill",
      color: "#D44638",
      username: "yangmengyuan1215",
      url: "mailto:yangmengyuan1215@gmail.com",
    },
    {
      network: "Kaggle",
      icon: "simple-icons:kaggle",
      color: "#20BEFF",
      username: "yangmengyuanmomoko",
      url: "https://www.kaggle.com/yangmengyuanmomoko",
    },
  ],
};

// 工作经历
export const work = [
  {
    name: "Yazaki Inc.",
    position: "Software Engineer",
    location_type: "On-site",
    location: "Shizuoka, JP",
    url: "https://www.yazaki-group.com/",
    startDate: "2025-04-01",
    endDate: null,
    summary: "Backend Development Training (Java & System Architecture)",
    responsibilities: [
      "Developed backend systems for enterprise web applications using Java / Spring Boot, including API design, database operations, unit testing (JUnit), and dependency management (Maven).",
      "Built and deployed a basic CI/CD pipeline on AWS, gaining hands-on experience with end-to-end system delivery and secure API deployment.",
      "Applied object-oriented design principles and collaborated in a team-based mock project simulating automotive system architecture.",
    ],
    skills: {
      Java: "ri:java-line",
      "Spring Boot": "simple-icons:springboot",
      JUnit: "mdi:test-tube",
      Maven: "mdi:language-java",
      AWS: "simple-icons:amazonaws",
      "CI/CD": "mdi:pipe",
      Git: "simple-icons:git",
    },
  },
];

// 教育经历
export const education = [
  {
    institution: "Waseda University",
    area: "MA in Economics",
    studyType: "Master's Degree",
    startDate: "2022-09-01",
    endDate: "2025-03-31",
    url: "https://www.waseda.jp/",
    score: "GPA: 3.0/4.0",
    courses: [
      "Advanced Calculus (A+)",
      "Advanced Algebra (A)",
      "Optimization Theory (A+)",
      "Introduction to AI (A)",
      "Game Theory (A+)",
      "Statistical Finance (A)",
    ],
    // 荣誉与奖项
    honors: "Ministry of Education, Culture, Sports, Science and Technology (MEXT) Scholarship – Merit-based scholarship awarded by the Japanese government.",
  },
  {
    institution: "Jilin University",
    area: "BA in Economics",
    studyType: "Bachelor's Degree",
    startDate: "2017-09-01",
    endDate: "2021-06-30",
    url: "https://www.jlu.edu.cn/",
    score: "GPA: 3.5/4.0 (88/100)",
    courses: [
      "Calculus (96)",
      "Linear Algebra (100)",
      "Probability and Mathematical Statistics (98)",
      "Microeconomics (92)",
      "Macroeconomics (88)",
      "Accounting (93)",
    ],
    // 荣誉与奖项
    honors: "Jilin University Academic and Technology Scholarship – Awarded for outstanding academic performance and research potential.",
  },
];

// 证书认证
export const certificates = [
  {
    name: "Fundamental Information Technology Engineer Examination (FE)",
    date: "2025-06-01",
    issuer: "Japan",
    url: "https://www.ipa.go.jp/",
  },
  {
    name: "Statistics Proficiency Test Pre-1st Grade",
    date: "2025-09-01",
    issuer: "Japan",
    url: "https://www.toukei-kentei.jp/",
  },
  {
    name: "AWS Certified Machine Learning – Specialty",
    date: "2026-01-01",
    issuer: "Planned 2026",
    url: "https://aws.amazon.com/certification/",
  },
];

// 技能列表
export const skills = [
  // Programming Languages
  {
    name: "Python",
    icon: "simple-icons:python",
    level: "Advanced",
    keywords: ["Programming", "ML", "Data Science"],
  },
  {
    name: "Java",
    icon: "ri:java-line",
    level: "Advanced",
    keywords: ["Programming", "Backend"],
  },
  {
    name: "JavaScript",
    icon: "simple-icons:javascript",
    level: "Advanced",
    keywords: ["Programming", "Web Development"],
  },
  {
    name: "SQL",
    icon: "simple-icons:mysql",
    level: "Advanced",
    keywords: ["Database", "Query"],
  },
  {
    name: "HTML/CSS",
    icon: "simple-icons:html5",
    level: "Advanced",
    keywords: ["Web Development", "Frontend"],
  },
  
  // Machine Learning / AI
  {
    name: "PyTorch",
    icon: "simple-icons:pytorch",
    level: "Advanced",
    keywords: ["Deep Learning", "ML", "AI"],
  },
  {
    name: "scikit-learn",
    icon: "simple-icons:scikitlearn",
    level: "Advanced",
    keywords: ["ML", "AI"],
  },
  {
    name: "LightGBM",
    icon: "mdi:chart-box",
    level: "Advanced",
    keywords: ["ML", "Gradient Boosting"],
  },
  {
    name: "Optuna",
    icon: "mdi:tune",
    level: "Intermediate",
    keywords: ["Hyperparameter Optimization"],
  },
  {
    name: "NLP",
    icon: "mdi:text-recognition",
    level: "Advanced",
    keywords: ["Natural Language Processing"],
  },
  {
    name: "Time-Series",
    icon: "mdi:chart-timeline-variant",
    level: "Advanced",
    keywords: ["Forecasting", "ML"],
  },
  
  // Frameworks & Tools
  {
    name: "Spring Boot",
    icon: "simple-icons:springboot",
    level: "Advanced",
    keywords: ["Java", "Framework"],
  },
  {
    name: "Docker",
    icon: "simple-icons:docker",
    level: "Advanced",
    keywords: ["Container", "DevOps"],
  },
  {
    name: "Git",
    icon: "simple-icons:git",
    level: "Advanced",
    keywords: ["Version Control"],
  },
  {
    name: "Jupyter",
    icon: "simple-icons:jupyter",
    level: "Advanced",
    keywords: ["Data Science", "Notebook"],
  },
  {
    name: "pytest",
    icon: "simple-icons:pytest",
    level: "Advanced",
    keywords: ["Testing", "Python"],
  },
  
  // Cloud & DevOps
  {
    name: "AWS",
    icon: "simple-icons:amazonaws",
    level: "Intermediate",
    keywords: ["Cloud", "EC2", "S3"],
  },
  {
    name: "GitHub Actions",
    icon: "simple-icons:githubactions",
    level: "Intermediate",
    keywords: ["CI/CD", "Automation"],
  },
  
  // Data Processing & Visualization
  {
    name: "Pandas",
    icon: "simple-icons:pandas",
    level: "Advanced",
    keywords: ["Data Processing", "Python"],
  },
  {
    name: "NumPy",
    icon: "simple-icons:numpy",
    level: "Advanced",
    keywords: ["Scientific Computing"],
  },
  {
    name: "Matplotlib",
    icon: "mdi:chart-line",
    level: "Advanced",
    keywords: ["Visualization"],
  },
  {
    name: "Seaborn",
    icon: "mdi:chart-box-outline",
    level: "Advanced",
    keywords: ["Visualization", "Statistics"],
  },
];


// 语言能力
export const languages = [
  {
    language: "Japanese",
    fluency: "JLPT N1 (Japanese Language Proficiency Test)",
  },
  {
    language: "English",
    fluency: "TOEIC 800 / TOEFL iBT 102 / GRE 319 (Q170, V149) — Most recent scores",
  },
  {
    language: "Chinese",
    fluency: "Native speaker",
  },
  {
    language: "French",
    fluency: "Beginner",
  },
];

// 项目列表
export const projects: Array<{
  name: string;
  isActive: boolean;
  description: string;
  highlights: string[];
  url?: string;
  github?: string;
  stack?: Record<string, string>;
}> = [
  {
    name: "pixelsaffron",
    isActive: true,
    description: "A landing page for a startup with beautiful design and smooth animations.",
    highlights: ["GSAP animations", "Beautiful design", "Smooth animations"],
    stack: {
      Vue: "simple-icons:vuedotjs",
      GSAP: "simple-icons:greensock",
      Tailwind: "mdi:tailwind",
    },
    url: "https://pixelsaffron.in",
  },
  {
    name: "ParticleFX",
    isActive: true,
    description:
      "A zero-dependency JavaScript library to create interactive particle effects from images using canvas. Easily works with React, Vue, or plain HTML. Customize animations, physics, and user interactions.",
    highlights: [
      "🖼️ Turn Images into Particles",
      "🌀 Hover & Click Effects",
      "🎨 Custom Shapes & Filters",
      "⚙️ Configurable Physics",
      "📱 Responsive Design",
      "📸 Export as PNG",
      "📦 TypeScript Ready",
      "✨ Works Without Any Framework",
    ],
    stack: {
      JavaScript: "simple-icons:javascript",
      TypeScript: "simple-icons:typescript",
      CanvasAPI: "mdi:draw",
      HTML5: "simple-icons:html5",
    },
    url: "https://particlefx.anmol.pro",
  },
  {
    name: "Social Media WebApp",
    isActive: false,
    description:
      "A modern social media application designed for real-time interaction and user engagement",
    highlights: [
      "📝 CRUD Posts (Create, Read, Update, Delete)",
      "💬 Real-time Chat (1:1 and group messaging)",
      "👥 Follow System to connect with others",
      "❤️ Like and react to posts",
      "📞 Group Voice/Video Calling",
    ],
    stack: {
      "Next-Js": "simple-icons:nextdotjs",
      Redux: "simple-icons:redux",
      PostGres: "simple-icons:postgresql",
      "Socket.io": "simple-icons:socketdotio",
      "Go-lang": "simple-icons:go",
      Docker: "mdi:docker",
    },
  },
  {
    name: "Notbasic",
    isActive: true,
    description:
      "An easy-to-use online store where you can browse, shop, and pay securely. It also has a simple admin panel to manage products and track orders smoothly.",
    highlights: [
      "🛒 Cart Management",
      "📦 Order Management",
      "🚚 Delivery Tracking",
      "👛 Wallet Integration",
      "💳 Secure Payment Gateway",
      "🧾 Invoice & Billing",
      "🛍️ Product Browsing & Filtering",
      "📊 Admin Dashboard",
    ],
    stack: {
      "Next-Js": "simple-icons:nextdotjs",
      Redux: "simple-icons:redux",
      TypeScript: "simple-icons:typescript",
      NodeJS: "ri:nodejs-line",
      Mongodb: "simple-icons:mongodb",
    },
    url: "https://notbasic.in/",
  },
];

const cv = {
  analyticsCode,
  basics,
  work,
  education,
  certificates,
  skills,
  languages,
  projects,
};

export default cv;
