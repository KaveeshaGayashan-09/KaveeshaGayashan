# Kaveesha Gayashan - Personal Portfolio & Local CMS

A modern, responsive, and dynamic personal portfolio built with React, TypeScript, and Vite. This portfolio features a unique **Local CMS** that allows you to easily edit your personal information, skills, education, and projects via a dedicated Admin Panel, without needing a live backend database in production!

## 🚀 Features

- **Local CMS Architecture**: Edit your portfolio locally via a Node/Express backend that writes directly to a static `data.json` file.
- **Static Site Generation**: Once you are done editing, the JSON file is compiled straight into your React bundle, making it 100% compatible with GitHub Pages.
- **Secure Admin Panel**: A built-in dashboard at `/#/admin` to add, edit, and delete your portfolio items dynamically.
- **Hash Routing**: Uses `HashRouter` to ensure perfect compatibility and no 404 errors when deployed to GitHub Pages.
- **Smooth Animations**: Powered by Framer Motion for beautiful scroll reveals and interactive elements.
- **Fully Responsive**: Carefully designed to look great on mobile, tablet, and desktop screens.

## 🛠 Tech Stack

- **Frontend**: React 19, TypeScript, Vite, Framer Motion, React Router (HashRouter)
- **Backend (Local Editor)**: Node.js, Express, `fs` (File System)
- **Styling**: Custom CSS variables, Flexbox/Grid
- **Icons**: Lucide React

## 💻 How to Run Locally

Because this project uses a Local CMS pattern, you need to run both the frontend and the backend simultaneously to edit your portfolio.

1. **Install dependencies**:
   ```bash
   npm install
   cd backend && npm install
   ```

2. **Start the Local Backend** (Handles writing to `data.json`):
   ```bash
   cd backend
   node server.js
   ```

3. **Start the Frontend** (In a new terminal window):
   ```bash
   npm run dev
   ```

## 📝 How to Edit Your Portfolio

1. Make sure both your frontend and backend servers are running.
2. Navigate to `http://localhost:5173/#/admin` in your browser.
3. Log in with the default password: **`admin123`** *(You can change this in `AdminPanel.tsx`)*.
4. Use the dashboard to update your Personal Info, About paragraphs, Projects, Skills, and Education.
5. Your changes will be instantly saved to `src/data.json` and hot-reloaded on your live site!

## 🌐 How to Deploy to GitHub Pages

Once you are happy with how your portfolio looks, you do not need the backend anymore!

1. Stop both your local frontend and backend servers.
2. Run the deployment command:
   ```bash
   npm run deploy
   ```
3. Vite will automatically build your React app (including your newly updated `data.json` file) and push the `dist/` folder to the `gh-pages` branch on your GitHub repository.
4. Your live site will automatically update with your new content!
