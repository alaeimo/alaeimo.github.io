# 🌐 Mohammad Alaei — Personal Academic Website

This repository contains the source code for **[alaeimo.ir](https://alaeimo.ir)** — the personal academic website of **Mohammad Alaei**, showcasing his background, research interests, projects, publications, skills, and academic contributions.  
The site is built with **React + Material UI**, featuring a modular structure, responsive design, and smooth navigation between sections.

---

## 🚀 Demo

- **Primary Domain:** [https://alaeimo.ir](https://alaeimo.ir)  
- **GitHub Pages Mirror:** [https://alaeimo.github.io](https://alaeimo.github.io)

---

## 🧩 Features

- 🎓 Academic portfolio with structured sections (Education, Research, Projects, etc.)  
- 🧠 Data-driven architecture (all content comes from a single `data.json` file)  
- ✨ Responsive and minimalist UI built with **Material UI (MUI)**  
- ⚡ Smooth tab-based navigation with animated transitions  
- 🖼️ Support for category filters, logos, and icons for technologies and social links  
- 🌈 Deployed via GitHub Pages for reliability and simplicity  

---

## 🛠️ Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Frontend Framework** | React (Create React App) |
| **UI Library** | Material UI (MUI v5) |
| **Build Tool** | React Scripts |
| **Deployment** | GitHub Pages |
| **Data Source** | Static `data.json` file |
| **Icons & Logos** | MUI Icons, Custom SVGs |

---

## 🧠 Structure Overview

```

src/
├── components/
│    ├── Header.jsx
│    ├── EducationSection.jsx
│    ├── ProjectsSection.jsx
│    ├── SkillsSection.jsx
│    ├── ReferencesSection.jsx
│    ├── ...
│
├── styles/
│    ├── global.css
│    ├── EducationSection.css
│
├── App.jsx
└── index.js

public/
├── data.json
├── static/img/
│    └── social/
│         ├── github.svg
│         ├── linkedin.svg
│         ├── telegram.svg
│         └── google-scholar.svg
└── favicon.ico

````

---

## ⚙️ Installation and Local Development

### 1️⃣ Clone the repository
```bash
git clone https://github.com/alaeimo/alaeimo.github.io.git
cd alaeimo.github.io
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm start
```

Then visit: [http://localhost:3000](http://localhost:3000)

---

## 🧾 Editing Your Data (`data.json`)

All personal, academic, and project information is stored in **`public/data.json`**.
This allows the entire site content to be updated without modifying React components.

### Example snippet:

```json
{
  "header": {
    "name": "Mohammad Alaei",
    "title": "Researcher in Human–AI Interaction and Cognitive Computing",
    "social": {
      "GitHub": "https://github.com/alaeimo",
      "LinkedIn": "https://linkedin.com/in/alaeimo"
    }
  },
  "research_interests": {
    "description": "<p>My research lies at the intersection of <strong>human behavior</strong>, <em>cognitive computing</em>, and <strong>AI-driven personalization</strong>...</p>"
  }
}
```

💡 **Tip:** You can use basic HTML formatting (`<b>`, `<i>`, `<p>`, `<ul>`, etc.) inside `data.json` text fields for italics, bold, and paragraph breaks.

After making changes, simply re-run:

```bash
npm start
```

or rebuild with:

```bash
npm run build
```

---

## 🚀 Deployment

### Option 1: Deploy to GitHub Pages

```bash
npm run deploy
```

This automatically builds and publishes the site to:
➡️ [https://alaeimo.github.io](https://alaeimo.github.io)
➡️ [https://alaeimo.ir](https://alaeimo.ir)
### Option 2: Deploy manually to your custom domain

1. Run `npm run build`
2. Upload the contents of the `build/` folder to your web server (e.g., via FTP or your hosting provider)
3. Point your DNS records to your hosting (already done for [alaeimo.ir](https://alaeimo.ir))

---

## 👨‍💻 Contributor

**Mohammad Alaei**
AI Researcher & Computer Engineer

🔗 [https://alaeimo.ir](https://alaeimo.ir)

---

## 📜 License

This project is released under the **MIT License**.
You are free to use, modify, and distribute it with attribution.

```
MIT License

Copyright (c) 2025 Mohammad Alaei

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 🧭 Acknowledgments

This website is designed and developed by **Mohammad Alaei**, inspired by the principles of clarity, accessibility, and human-centered technology, blending academic precision with design simplicity.


