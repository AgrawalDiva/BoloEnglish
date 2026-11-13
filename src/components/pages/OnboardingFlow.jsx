import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Mascot } from '../common/Mascot';
import { SUPPORTED_LANGUAGES } from '../../data/languages';
import {
  ArrowRight,
  ArrowLeft,
  Check,
  User,
  GraduationCap,
  Briefcase,
  Users,
  Sparkles
} from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';

export const OnboardingFlow = ({ onComplete }) => {
  const { updateUser, setActiveTab } = useApp();
  const [step, setStep] = useState(1);

  // Form states
  const [name, setName] = useState('');
  const [ageGroup, setAgeGroup] = useState('college');
  const [preferredLanguage, setPreferredLanguage] = useState('hinglish');
  const [level, setLevel] = useState('Beginner');
  const [dailyGoal, setDailyGoal] = useState(10);

  const ageGroups = [
    { id: 'school', label: 'School Student', desc: 'Class 6 - 12 students', icon: GraduationCap },
    { id: 'college', label: 'College / Youth', desc: 'Degree, diploma & job seekers', icon: Users },
    { id: 'professional', label: 'Working Professional', desc: 'Career growth & office confidence', icon: Briefcase },
    { id: 'adult', label: 'Homemaker / Adult', desc: 'Daily life & spoken English', icon: User }
  ];

  const levels = [
    {
      id: 'Beginner',
      title: 'Shuruat (Beginner)',
      desc: 'Mujhe English shabdon ka thoda gyan hai, par bolne mein jhijhak hoti hai.',
      badge: 'Recommended'
    },
    {
      id: 'Intermediate',
      title: 'Madhyam (Intermediate)',
      desc: 'Main padh aur samajh leta hoon, par vakya banane mein samay lagta hai.'
    },
    {
      id: 'Advanced',
      title: 'Uchha (Advanced)',
      desc: 'Main English bol leta hoon, par fluency aur interview polish chahiye.'
    }
  ];

  const handleNext = () => {
    soundEffects.playPop();
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Save and complete
      soundEffects.playFanfare();
      updateUser({
        name: name.trim() || 'Dost',
        ageGroup,
        preferredLanguage,
        level,
        dailyGoalMinutes: dailyGoal,
        isOnboarded: true,
        isLoggedIn: true
      });
      if (onComplete) onComplete();
      setActiveTab('dashboard');
    }
  };

  const handleBack = () => {
    soundEffects.playPop();
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between py-6 px-4">
      {/* Top Progress bar */}
      <div className="max-w-xl mx-auto w-full">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
          <span>Step {step} of 4</span>
          <span>{Math.round((step / 4) * 100)}% Completed</span>
        </div>
        <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-500 transition-all duration-300 rounded-full"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Card */}
      <div className="max-w-xl mx-auto w-full bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-lg my-6">
        {/* Step 1: Name & Introduction */}
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-4">
              <Mascot mood="happy" size="md" />
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  Aapka Shubh Naam Kya Hai?
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  Professor Gappu aapko isi naam se bulayenge!
                </p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Your Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jaise: Amit Verma ya Priya Sharma"
                className="w-full px-4 py-3.5 rounded-2xl border-2 border-slate-200 text-base font-semibold focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50"
                autoFocus
              />
            </div>

            {/* Age Group Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Aapka Parichay (Who are you?)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ageGroups.map((g) => {
                  const Icon = g.icon;
                  const isSelected = ageGroup === g.id;
                  return (
                    <div
                      key={g.id}
                      onClick={() => setAgeGroup(g.id)}
                      className={`p-3 rounded-2xl border-2 cursor-pointer flex items-center gap-3 transition-all ${
                        isSelected
                          ? 'border-emerald-500 bg-emerald-50 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div
                        className={`p-2 rounded-xl ${
                          isSelected
                            ? 'bg-emerald-500 text-white'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 leading-tight">
                          {g.label}
                        </h4>
                        <p className="text-[11px] text-slate-500">{g.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Language Selection */}
        {step === 2 && (
          <div className="space-y-5 animate-fade-in">
            <div className="flex items-center gap-4">
              <Mascot mood="speaking" size="md" />
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  Apni Pasandida Bhasha Chunein
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  Har English vakya isi bhasha mein samjhaya jayega.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[340px] overflow-y-auto pr-1">
              {SUPPORTED_LANGUAGES.map((lang) => {
                const isSelected = preferredLanguage === lang.id;
                return (
                  <div
                    key={lang.id}
                    onClick={() => setPreferredLanguage(lang.id)}
                    className={`p-3 rounded-2xl border-2 cursor-pointer flex items-center justify-between transition-all ${
                      isSelected
                        ? 'border-emerald-500 bg-emerald-50 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{lang.icon}</span>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">
                          {lang.name}
                        </h4>
                        <span className="text-[11px] text-emerald-700 font-semibold block">
                          {lang.nativeName}
                        </span>
                      </div>
                    </div>
                    {isSelected && (
                      <span className="p-1 bg-emerald-500 text-white rounded-full">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 3: English Proficiency Level */}
        {step === 3 && (
          <div className="space-y-5 animate-fade-in">
            <div className="flex items-center gap-4">
              <Mascot mood="thinking" size="md" />
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  Aapka Current English Level Kya Hai?
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  Hum path ko aapke anukool banayenge.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {levels.map((lvl) => {
                const isSelected = level === lvl.id;
                return (
                  <div
                    key={lvl.id}
                    onClick={() => setLevel(lvl.id)}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      isSelected
                        ? 'border-emerald-500 bg-emerald-50 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-slate-900">
                        {lvl.title}
                      </h4>
                      {lvl.badge && (
                        <span className="text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                          {lvl.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {lvl.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 4: Daily Learning Goal */}
        {step === 4 && (
          <div className="space-y-5 animate-fade-in">
            <div className="flex items-center gap-4">
              <Mascot mood="celebrating" size="md" />
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  Rojana Kitna Samay Denge?
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  Rozana thoda padhna lamba asar chhodta hai!
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { min: 5, label: '5 Mins / Din', tag: 'Aasan' },
                { min: 10, label: '10 Mins / Din', tag: 'Popular' },
                { min: 20, label: '20 Mins / Din', tag: 'Super' }
              ].map((g) => (
                <div
                  key={g.min}
                  onClick={() => setDailyGoal(g.min)}
                  className={`p-4 rounded-2xl border-2 text-center cursor-pointer transition-all ${
                    dailyGoal === g.min
                      ? 'border-emerald-500 bg-emerald-50 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-wider block text-emerald-700">
                    {g.tag}
                  </span>
                  <span className="text-base font-extrabold text-slate-900 mt-1 block">
                    {g.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-xs text-emerald-900 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                Shandar! Aapko roz reminder aur daily streak bonus points milenge.
              </span>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={handleBack}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs sm:text-sm hover:bg-slate-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Peeche</span>
            </button>
          ) : (
            <div />
          )}

          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl btn-3d-green text-white font-extrabold text-sm shadow-md"
          >
            <span>{step === 4 ? 'Start Learning Now!' : 'Aage Badhein'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="text-center text-xs text-slate-400 font-medium">
        Bolo English — Apni Bhasha Mein Seekho
      </div>
    </div>
  );
};
