# Bolo English 🇮🇳 – Gamified English Learning PWA

> **"Apni Bhasha Mein Seekho, Confidence Se English Bolo."**

Bolo English is a responsive Progressive Web Application (PWA) designed to empower learners from rural and semi-urban communities, college students, job aspirants, and adults across India to master spoken and written English through their own regional languages.

Inspired by Duolingo's gamification mechanics, Bolo English provides an indigenous, culturally resonant learning journey featuring friendly mascot **Professor Gappu**, interactive quizzes, microphone speaking practice, daily streak tracking, and certified achievement badges.

---

## 🌟 Key Features

### 1. 🇮🇳 6 Regional Explanation Languages
Every lesson question, grammar tip, and audio phrase is fully translated and explained in the user's preferred regional tongue:
1. **Hinglish** (Pan-India Youth & Beginners)
2. **Standard Hindi** (North & Central India)
3. **Haryanvi** (Haryana & Rural NCR)
4. **Awadhi / UP Hindi** (Lucknow, Ayodhya & Eastern UP)
5. **Bhojpuri** (Bihar, Jharkhand & Purvanchal)
6. **Rajasthani** (Marwar & Rajasthan)

*Users can switch their preferred language anytime in one click from the header, sidebar, or profile.*

---

### 2. 📚 8-Module Structured Learning Path (17 Lessons, 85+ Interactive Questions)
A complete curriculum from beginner greetings to professional corporate interviews:
- **Module 1: Basic English Vocabulary** (Greetings & Goodbyes, Family & Relations, Numbers & Time)
- **Module 2: Everyday Conversations** (At the Market & Shop, Asking for Directions)
- **Module 3: English Grammar** (Is, Am, Are Helping Verbs, Past & Future Tense Was/Were/Will)
- **Module 4: Sentence Formation** (Making Questions & SVO Rules, Modals Can/Should/Cannot)
- **Module 5: Spoken English** (Introducing Yourself Confidently, Expressing Opinions & Feelings)
- **Module 6: English for School & College** (Classroom Conversations, Talking to Teachers & Group Projects)
- **Module 7: English for Interviews** (Tell Me About Yourself, Handling Strengths & Weaknesses)
- **Module 8: English for Daily Life** (At the Hospital & Bank, Travel, Metro & Online Services)

---

### 3. 🎯 8 Interactive Question Formats
Each lesson features rich interactivity with native audio pronunciation, phonetic guide, instant sound feedback, and celebratory confetti:
1. **English Word to Regional Meaning** (Multiple choice)
2. **Regional Meaning to English Word** (Multiple choice)
3. **Fill in the Blanks** (Dynamic sentence completing)
4. **Arrange Words to Form Sentences** (Interactive tap-to-assemble chip trays)
5. **Multiple-Choice Questions** (Contextual dialogue scenarios)
6. **Translate Simple Sentences** (Bilingual comprehension)
7. **Match Words with Meanings** (Interactive pair matching)
8. **Complete Everyday Conversations** (Dialogue bubble responses)

---

### 4. 🎙️ Speaking Practice Room
- **Listen & Repeat**: High-clarity Text-to-Speech (TTS) with normal and slow playback speeds.
- **Microphone Recognition**: Uses browser-supported `SpeechRecognition` / `webkitSpeechRecognition` to capture learner speech and compare transcripts against target sentences.
- **Accurate & Honest Feedback**: Clearly highlights matched words and percentage accuracy without false claims of scientific phonetic assessment.
- **Fallback Mode**: Allows learners on browsers without microphone support to practice reading aloud with the phonetic transliteration guide.

---

### 5. ⚡ Daily Rapid Challenge
- 5 fast-paced practice questions with a live 3-minute countdown timer.
- Rewards **+50 Bonus XP** and **Streak Freeze Protection**.
- Victory completion screen with instant confetti animation.

---

### 6. 🏆 Gamification, Badges & Rewards Store
- **Bolo Coins Balance**: Earn coins on every completed lesson and speaking drill.
- **Rewards Store**: Spend coins on *Streak Freeze Shields*, *Double XP Boosts*, *Mastery Avatar Frames*, and a *Printable Certificate of Spoken English*.
- **Achievement Badges**: *First Step*, *100 XP Club*, *3-Day Fire Streak*, *Vocabulary Master*, *Grammar Explorer*, *Bolo Star*, and *Daily Champion*.
- **Learning Levels**: Progress from *Naye Seekhak (Beginner)* up to *English Ustad (Master)*.

---

### 7. 📱 Progressive Web App (PWA) Offline-Ready
- **Web App Manifest**: Full `manifest.webmanifest` with custom 192x192 and 512x512 icons, standalone display mode, and shortcut actions.
- **Service Worker (`sw.js`)**: Cache-first offline shell caching for instant loading on mobile devices without an active internet connection.
- **Install Prompt Banner**: One-click home screen installation on Android and Chrome/Edge desktop.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| **React 18** | Reusable component-based declarative user interface |
| **Vite 5** | Lightning-fast development server and optimized production bundler |
| **Tailwind CSS 3** | Responsive, mobile-first design with fresh green/yellow/orange palette |
| **Lucide React** | Clean, accessible vector UI icons |
| **Canvas Confetti** | Celebratory particle animations on milestone completion |
| **Web Speech API** | Browser Speech Synthesis (TTS) and Speech Recognition |
| **Web Audio API** | Procedural sound effects (correct chime, incorrect buzz, pop, fanfare) |
| **LocalStorage** | Persistent offline learner progress, scores, and preferences |

---

## 🚀 Running the Project Locally

### Prerequisites
- Node.js (v18 or v20+)
- npm or pnpm

### Quick Start
```bash
# 1. Clone or navigate to the project directory
cd BoloEnglish

# 2. Install dependencies (if not already installed)
npm install

# 3. Start the Vite development server
npm run dev

# 4. Open the displayed URL in your browser:
# http://localhost:5173
```

*(Note: On systems where Node is located in the local `.tools/node` folder, prefix PATH with `$env:PATH = "$PWD\.tools\node;$env:PATH"` in PowerShell before running `npm` commands).*

---

## 📦 Building for Production & Deployment

```bash
# Generate the optimized production build
npm run build

# Preview the production build locally
npm run preview
```

The output build will be created in the `dist/` directory.

### Deployment Options:
- **Vercel**: Run `npx vercel` or link repository in Vercel dashboard (Framework: Vite).
- **Netlify**: Drag and drop the `dist/` folder onto the Netlify dashboard or link git repo with build command `npm run build` and publish directory `dist`.
- **GitHub Pages**: Deploy `dist/` using the `gh-pages` package or GitHub Actions.
- **Firebase Hosting**: Run `firebase init hosting` (public directory: `dist`) and `firebase deploy`.

---

## 🎓 Academic / Community Connect Relevance

- **Problem Addressed**: Over 80% of India's vernacular students and rural youth face anxiety and hesitation when learning English due to foreign accents, rigid grammar definitions, and lack of regional language bridges.
- **Community Impact**: Bolo English provides a free, self-paced, offline-friendly bridge where learners retain their linguistic identity (Hindi, Bhojpuri, Haryanvi, Awadhi, Rajasthani) while building conversational confidence.
- **Zero Cost / Open Web**: No paid cloud APIs, backend database costs, or proprietary subscriptions are required.

---

## 📄 License
Created for Sharda University Semester 5 Community Connect Academic Project. All rights reserved.
