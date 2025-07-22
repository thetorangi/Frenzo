# 🌐 Frenzo Frontend — Vue 3 + Vite

This is the **frontend** for the Frenzo modern social media app, built with **Vue 3**, **Pinia**, **TailwindCSS**, and **Vite**. It connects seamlessly to the Django REST API backend and delivers a fast, interactive UI.

---

## ⚙️ Tech Stack

- ⚡ **Vue 3** — Progressive JavaScript framework
- 🌿 **Pinia** — State management
- 🎨 **TailwindCSS** — Utility-first CSS framework
- 🚀 **Vite** — Lightning-fast build tool
- 🌐 **Vue Router** — Client-side routing
- 🔗 **Axios** — For communicating with the backend API

---

## 🚀 Getting Started

### 📦 Install dependencies

```bash
npm install
```

### ▶️ Start development server

```bash
npm run dev
```

Your app will be running at:  
[http://localhost:5173](http://localhost:5173)

### 🛠 Available Scripts

| Script       | Description                  |
|--------------|------------------------------|
| `npm run dev`     | Start local dev server     |
| `npm run build`   | Build for production       |
| `npm run preview` | Preview production build   |

---

## 🔗 API Integration

Ensure your backend is running at:

```
http://127.0.0.1:8000
```

Authentication handled via JWT stored securely. Axios is used for all HTTP requests.

---

## 📦 Project Structure

```
frontend/
├── public/           # Static assets
├── src/
│   ├── assets/       # Images, styles
│   ├── components/   # Reusable UI components
│   ├── pages/        # Page-level components
│   ├── router/       # Vue Router setup
│   ├── store/        # Pinia store setup
│   └── main.js       # App entry point
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🧪 Environment Config (Optional)

If needed, create a `.env` file to manage API base URL or secrets:

```
VITE_API_URL=http://127.0.0.1:8000
```

Use via: `import.meta.env.VITE_API_URL`

---

## 🧰 Dependencies

```json
{
  "dependencies": {
    "axios": "^1.3.5",
    "pinia": "^2.0.32",
    "resend": "^4.6.0",
    "vue": "^3.2.47",
    "vue-router": "^4.1.6"
  },
  "devDependencies": {
    "@tailwindcss/forms": "^0.5.10",
    "@vitejs/plugin-vue": "^4.0.0",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.21",
    "tailwindcss": "^3.3.1",
    "vite": "^4.1.4"
  }
}
```

---

## 🎨 Styling

Using **TailwindCSS** with the `@tailwindcss/forms` plugin for easy form styling.  
All custom styles live inside the `src/assets/` directory.

---

## 🔐 Security Notes

✅ No sensitive data committed  
✅ Safe to push to GitHub

---

## 📌 TODO / Improvements

- [ ] Implement role-based routing  
- [ ] Add unit tests with Vitest  
- [ ] Add CI/CD (e.g., Netlify/GitHub Actions)  
- [ ] Add global error boundary

---

## 👨‍💻 Author

Made with ❤️ by **CoderKarma⚡**  
GitHub: [https://github.com/thetorangi](https://github.com/thetorangi)
---
