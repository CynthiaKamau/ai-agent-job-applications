# 💼 AI-Powered Job Application Assistant

A full-stack application that automates the process of analyzing job descriptions, comparing them with your resume, and generating personalized cover letters – all using AI.

---

## ✨ Features

- Upload your resume (PDF)
- Auto-extract personal info and skills (structured JSON)
- Analyze job descriptions from URLs (using Selenium)
- Compare skills and estimate job fit
- Auto-generate tailored Cover Letters (PDF)
- Built with OpenAI, FastAPI, and Next.js

---

## 🧠 Tech Stack

### Backend (Python)

- [FastAPI](https://fastapi.tiangolo.com/) – API framework
- [OpenAI](https://platform.openai.com/docs/) – AI-powered content generation
- [Selenium](https://www.selenium.dev/) – Dynamic scraping
- [PyMuPDF (fitz)](https://pymupdf.readthedocs.io/) – PDF generation
- [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/) – HTML parsing

### Frontend (TypeScript + Next.js)

- [Next.js](https://nextjs.org/) – React framework
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first styling
- [shadcn](https://ui.shadcn.com/) – component library

---

### Backend

```bash
git clone https://github.com/CynthiaKamau/ai-agent-job-applications
cd ai-agent-job-applications/backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the server
python main.py

```

### Frontend

```bash
cd ../frontend

# Install dependencies
npm install

# Run the development server
npx next dev
```
