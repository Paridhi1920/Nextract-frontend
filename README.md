#  Nextract - AI-Powered PDF Summarizer (Frontend)

Nextract is an AI-powered document summarizer that allows users to upload `.pdf`, `.pptx`, or `.docx` files and receive concise summaries in various formats. It also offers login/signup via Firebase Auth and a responsive modern UI.

## 🚀 Live Demo
Frontend: [https://nextract-frontend.vercel.app](https://nextract-frontend.vercel.app/)  
Backend: [https://nextract-api.onrender.com](https://nextract-backend.onrender.com)

## ✨ Features

- 📄 Upload PDF, PPTX, or DOCX files
- 🧠 Abstractive & Extractive summarization using HuggingFace Transformers
- 📥 Download summaries in `.txt`, `.pdf`, or `.docx`
- 🔐 Firebase Authentication (Login/Signup)
- 🌗 Light/Dark mode toggle
- ⚡ Responsive and modern UI

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, Vite
- **Auth:** Firebase Authentication
- **Backend:** Flask (deployed separately on Render)
- **AI Models:** HuggingFace Transformers (BART, T5, etc.)


## 🔧 Setup Instructions

```bash
git clone https://github.com/Paridhi1920/nextract-frontend.git
cd nextract-frontend
npm install
npm run dev


