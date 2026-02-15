# 💼 Personal Portfolio – Vivekanand Dubey

A modern, responsive developer portfolio built using **React + Bootstrap** to showcase projects, skills, resume, and contact information with a clean UI and smooth **Light/Dark Theme** support.

---

## 🌐 Live Website

**https://www.vivekananddubey.com**

---

## ✨ Features

* 🌗 Light / Dark theme with smooth transition
* 📱 Fully responsive (mobile-first design)
* ⚡ Fast React Single Page Application
* 🧭 Smooth scrolling navigation
* 📂 Dedicated Projects page + Individual Project Case Study pages
* 📄 Resume preview + download option
* 📬 Contact modal with modern UI
* 🎨 Brand-themed UI using CSS variables
* 💾 Theme preference saved in localStorage

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* Bootstrap 5
* Bootstrap Icons
* CSS (Custom + CSS Variables)

### Tooling & Deployment

* Vite
* Git & GitHub
* Vercel Hosting

---

## 📂 Folder Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── PortfolioSection.jsx
│   └── ContactSection.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── ProjectDetails.jsx
│   ├── Resume.jsx
│
├── hooks/
│   ├── useTheme.js
│   └── usePageTitle.js
│
├── assets/
│   ├── img/
│   └── resume/
```

---

## 🧭 Application Pages

| Page            | Route          | Description                   |
| --------------- | -------------- | ----------------------------- |
| Home            | `/`            | Main landing page             |
| Projects        | `/project`     | All projects grid             |
| Project Details | `/project/:id` | Individual project case study |
| Resume          | `/resume`      | Resume preview & download     |

---

## 🌙 Dark Mode Implementation

Dark mode is implemented using:

* CSS Variables for colors
* `data-theme="dark"` attribute on `<html>`
* LocalStorage persistence
* Global smooth theme transitions
* Navbar toggle button 🌙

---

## 🚀 Running Locally

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## 📬 Contact

**Vivekanand Dubey**
Java Backend Developer

* GitHub: https://github.com/vdubey92928
* LinkedIn: https://www.linkedin.com/in/vivekanand-dubey-vd123754
* Email: [vivekananddubey877@gmail.com](mailto:vivekananddubey877@gmail.com)

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!

---