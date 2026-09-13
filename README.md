# 🌟 Modern Personal Portfolio Website

A clean, sleek, and fully responsive personal portfolio website built with modern HTML5, CSS3, and JavaScript. Designed with glassmorphism aesthetics, dark/light theme switching, smooth animations, and zero-build instant deployment readiness for **GitHub Pages**.

---

## ✨ Features

- 🌓 **Dark & Light Mode**: Smooth theme toggling with persistent user preference stored in `localStorage`.
- ⚡ **Zero Build Setup**: Pure vanilla HTML/CSS/JS — works out of the box directly in any browser and on GitHub Pages.
- 📱 **100% Mobile Responsive**: Fluid layout adapted for mobile, tablet, and widescreen monitors with an animated mobile navigation drawer.
- 🎯 **Interactive Hero Section**: Dynamic cycling typing animation showcasing different roles and skills.
- 📊 **Animated Stats Counter**: Smooth counting animation triggered via `IntersectionObserver` when scrolling into view.
- 🛠️ **Categorized Skills**: Polished skill chips with icons covering Frontend, Backend, Cloud & Database, and Dev Tools.
- 📂 **Filterable Projects Grid**: Easily switch between categories (`All`, `Full Stack`, `Frontend`, `Tools & APIs`).
- ⏳ **Experience & Education Timeline**: Sleek chronological milestones with glowing indicator nodes.
- ✉️ **Interactive Contact Form**: Client-side validated form with interactive loading and success toast feedback.
- 🚀 **SEO & Performance Optimized**: Semantic HTML5 tags, optimized Google Fonts, and lightweight Font Awesome CDN icons.

---

## 📁 Project Structure

```text
personal-website/
│
├── index.html              # Main single-page portfolio
├── css/
│   └── style.css           # Modern design system, themes, & responsive styles
├── js/
│   └── main.js             # Theme toggle, typing effect, filter, & form logic
├── assets/
│   ├── docs/
│   │   └── resume.txt      # Resume/CV file placeholder (can be replaced with PDF)
│   └── images/             # Folder for custom screenshots, avatar, and assets
├── .gitignore              # Ignored files & system artifacts
└── README.md               # Documentation and GitHub deployment guide
```

---

## 💻 Local Preview

You can preview the website immediately in your browser using any of the following methods:

### Option 1: Direct File Open
Simply double-click `index.html` or open it with your favorite browser (Chrome, Edge, Firefox).

### Option 2: Using Python Local Server
```bash
cd D:\Workspace\personal-website
python -m http.server 3000
```
Then visit `http://localhost:3000` in your browser.

---

## 🚀 How to Deploy to GitHub & GitHub Pages

Follow these simple steps to push this code to GitHub and make your portfolio live on the internet for free!

### Step 1: Create a New Repository on GitHub
1. Go to [GitHub.com](https://github.com) and log into your account.
2. Click the **`+`** icon at the top right and select **New repository**.
3. Set the repository name as: **`personal-website`**
4. Set visibility to **Public** (required for free GitHub Pages).
5. **Do NOT** initialize with a README, .gitignore, or license (we already created them locally).
6. Click **Create repository**.

### Step 2: Push Your Local Code to GitHub
Open PowerShell or Terminal in `D:\Workspace\personal-website` and run:

```bash
cd D:\Workspace\personal-website

# Add your GitHub repository as remote origin (replace YOUR-USERNAME with your actual GitHub username):
git remote add origin git@github.com:mdmostafizurrahmantasfiq/website-.git

# Ensure default branch is main:
git branch -M main

# Push the code to GitHub:
git push -u origin main
```

### Step 3: Enable GitHub Pages (Free Live Website)
1. In your GitHub repository, click on **Settings** (tab on top).
2. On the left sidebar under the "Code and automation" section, click **Pages**.
3. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: Select `main` and folder `/ (root)`
4. Click **Save**.
5. Wait 1-2 minutes. GitHub will provide you with your live URL:
   `https://mdmostafizurrahmantasfiq.github.io/website-/`

---

## 🎨 Customization Guide

- **Personal Info & Bio**: Open `index.html` and edit your name, titles, bio text, and social media links.
- **Projects**: In `index.html`, locate the `<section id="projects">` and update the titles, descriptions, and URLs (`href`) with your own GitHub repositories or live websites.
- **Skills**: Update the skill chips in `<section id="skills">` to match your personal tech stack.
- **Resume**: Replace `assets/docs/resume.txt` with your resume PDF (e.g. `resume.pdf`), and update the link in `index.html` (`href="assets/docs/resume.pdf"`).
- **Colors & Styles**: In `css/style.css`, customize the CSS variables in `:root` (e.g., `--primary`, `--accent`) to match your preferred theme.
