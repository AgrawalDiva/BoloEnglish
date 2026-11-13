import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Mascot } from '../common/Mascot';
import { SUPPORTED_LANGUAGES } from '../../data/languages';
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Mic,
  Award,
  Globe,
  CheckCircle2,
  Volume2
} from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';
import { speakEnglish } from '../../utils/speechHelper';

export const WelcomePage = ({ onGetStarted }) => {
  const { setIsAuthModalOpen, loginGuest } = useApp();
  const [previewLanguage, setPreviewLanguage] = useState('hinglish');

  const previewSentences = {
    english: 'What are you doing?',
    phonetic: 'व्हॉट आर यू डूइंग?',
    translations: {
      hinglish: 'Tum kya kar rahe ho?',
      hindi: 'आप क्या कर रहे हैं?',
      haryanvi: 'तू के कर रया से?',
      awadhi: 'का करत अहौ?',
      bhojpuri: 'रउआ का करत बानी?',
      rajasthani: 'थे कांई कर रिया हो?'
    }
  };

  const handleSpeech = () => {
    soundEffects.playPop();
    speakEnglish(previewSentences.english);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/70 via-slate-50 to-white flex flex-col justify-between">
      {/* Top Navbar */}
      <nav className="max-w-6xl w-full mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <img src="/logo.svg" alt="Bolo English" className="w-10 h-10 rounded-2xl shadow-sm" />
          <div>
            <h1 className="font-extrabold text-xl text-slate-900 tracking-tight">
              Bolo<span className="text-emerald-600">English</span>
            </h1>
            <p className="text-[11px] text-slate-500 font-semibold hidden sm:block">
              Apni Bhasha Mein Seekho
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setIsAuthModalOpen(true)}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            Log In
          </button>
          <button
            onClick={onGetStarted}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-4 py-8 sm:py-14 flex flex-col items-center text-center">
        {/* Mascot Banner */}
        <div className="mb-6 relative">
          <Mascot
            mood="excited"
            size="lg"
            speech="Namaste! Main hoon Gappu. Chaliye English seekhte hain!"
            speechSide="top"
          />
        </div>

        {/* Tagline & Title */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-extrabold mb-4 animate-pulse">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>Apni Bhasha Mein Seekho, Confidence Se English Bolo!</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight max-w-3xl leading-[1.15]">
          Bharat Ke Har Gaon Aur Shehar Ke Liye{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
            Gamified English
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl font-medium leading-relaxed">
          Bina kisi jhijhak ke Hinglish, Hindi, Haryanvi, Awadhi, Bhojpuri aur Rajasthani mein aasan
          taur par English seekhein. Duolingo jaise mazedaar quizzes, bolne ka abhyas aur certified badges!
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
          <button
            onClick={onGetStarted}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl btn-3d-green text-white font-extrabold text-base flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Get Started — Bilkul Free</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => loginGuest('Student Rahul', 'hinglish')}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl btn-3d-white text-slate-800 font-bold text-sm shadow-sm"
          >
            Quick 1-Click Demo Guest
          </button>
        </div>

        {/* Interactive Regional Language Preview Card */}
        <div className="mt-12 w-full max-w-2xl bg-white border-2 border-emerald-100 rounded-3xl p-6 shadow-xl text-left">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-emerald-100 text-emerald-800 rounded-xl">
                <Globe className="w-4 h-4" />
              </span>
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                Try Regional Dialect Translation
              </h3>
            </div>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
              Live Demo
            </span>
          </div>

          {/* Language Selector Chips */}
          <div className="flex flex-wrap gap-2 mb-5">
            {SUPPORTED_LANGUAGES.map((lang) => (
              <button
                key={lang.id}
                onClick={() => {
                  soundEffects.playPop();
                  setPreviewLanguage(lang.id);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  previewLanguage === lang.id
                    ? 'bg-emerald-600 text-white shadow-sm scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>{lang.icon}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>

          {/* Sentence Demonstration */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  English
                </span>
                <button
                  onClick={handleSpeech}
                  title="Listen Pronunciation"
                  className="p-1 rounded-full text-emerald-700 hover:bg-emerald-100 transition-colors"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-lg font-black text-slate-900 mt-0.5">
                {previewSentences.english}
              </p>
              <p className="text-xs text-slate-500 font-medium">
                Phonetic: {previewSentences.phonetic}
              </p>
            </div>

            <div className="sm:text-right border-t sm:border-t-0 sm:border-l border-slate-200 pt-2 sm:pt-0 sm:pl-4 w-full sm:w-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                In {SUPPORTED_LANGUAGES.find((l) => l.id === previewLanguage)?.name}
              </span>
              <p className="text-base sm:text-lg font-bold text-emerald-800 mt-0.5">
                "{previewSentences.translations[previewLanguage]}"
              </p>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl w-full text-left">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3.5">
            <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 text-sm">8 Pragmatic Modules</h4>
              <p className="text-xs text-slate-600 mt-1">
                Rozmarra ke shabdon se lekar interview aur spoken English tak.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3.5">
            <div className="p-2.5 bg-amber-100 text-amber-700 rounded-xl shrink-0">
              <Mic className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 text-sm">Speaking & Audio</h4>
              <p className="text-xs text-slate-600 mt-1">
                Mike se bolkar practice karein aur Indian English accent mein sunein.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3.5">
            <div className="p-2.5 bg-rose-100 text-rose-700 rounded-xl shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 text-sm">Badges & Gamification</h4>
              <p className="text-xs text-slate-600 mt-1">
                Streak banayein, Bolo coins kamayein aur verified certificate payein.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500 font-medium bg-slate-50">
        <p>
          Bolo English © 2026 — Community Connect Academic Project. Apni Bhasha Mein Seekho, Confidence Se English Bolo.
        </p>
      </footer>
    </div>
  );
};
