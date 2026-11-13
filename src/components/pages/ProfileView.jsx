import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { getLanguageById, SUPPORTED_LANGUAGES } from '../../data/languages';
import { getCurrentLevel, BADGES } from '../../data/achievements';
import { Mascot } from '../common/Mascot';
import { soundEffects } from '../../utils/soundEffects';
import {
  User,
  Sparkles,
  Flame,
  Award,
  Globe,
  CheckCircle2,
  RotateCcw,
  BookOpen,
  Volume2,
  Calendar,
  Check,
  Target,
  Layers,
  Mic,
  Zap,
  Lock
} from 'lucide-react';

export const ProfileView = () => {
  const {
    user,
    xp,
    streak,
    coins,
    completedLessons,
    lessonScores,
    totalQuestionsAnswered,
    correctQuestionsAnswered,
    updateUser,
    setLanguage,
    resetProgress,
    setIsLanguageModalOpen
  } = useApp();

  const currentLevel = getCurrentLevel(xp);
  const currentLang = getLanguageById(user?.preferredLanguage);

  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(user?.name || '');

  const accuracy =
    totalQuestionsAnswered > 0
      ? Math.round((correctQuestionsAnswered / totalQuestionsAnswered) * 100)
      : 88; // Default initial accuracy

  const handleSaveName = () => {
    soundEffects.playPop();
    if (tempName.trim()) {
      updateUser({ name: tempName.trim() });
    }
    setIsEditingName(false);
  };

  const handleResetConfirm = () => {
    if (
      window.confirm(
        'Kya aap sach me saari progress reset karna chahte hain? Sabhi XP aur badges shunya ho jayenge.'
      )
    ) {
      soundEffects.playPop();
      resetProgress();
    }
  };

  return (
    <div className="space-y-6 pb-16 max-w-4xl mx-auto">
      {/* Profile Card Header */}
      <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <div className="relative">
              <div className="w-20 h-20 rounded-3xl bg-emerald-100 border-2 border-emerald-300 flex items-center justify-center text-emerald-800 text-2xl font-black shadow-inner">
                {user?.name?.[0] || 'U'}
              </div>
              <span className="absolute -bottom-1 -right-1 p-1 bg-emerald-600 text-white rounded-full">
                <Check className="w-3.5 h-3.5" />
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                {isEditingName ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={tempName}
                      onChange={(e) => setTempName(e.target.value)}
                      className="px-3 py-1 rounded-xl border border-slate-300 text-sm font-bold focus:outline-none focus:border-emerald-500"
                    />
                    <button
                      onClick={handleSaveName}
                      className="px-3 py-1 rounded-xl bg-emerald-600 text-white text-xs font-bold"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                      {user?.name || 'Rahul Sharma'}
                    </h2>
                    <button
                      onClick={() => setIsEditingName(true)}
                      className="text-xs text-emerald-700 font-bold hover:underline"
                    >
                      Edit
                    </button>
                  </>
                )}
              </div>

              <p className="text-xs text-slate-500 font-medium">
                Level: <span className="text-slate-800 font-bold">{user?.level || 'Beginner'}</span> •{' '}
                Category: <span className="text-slate-800 font-bold capitalize">{user?.ageGroup || 'College'}</span>
              </p>

              <div className="pt-1 flex items-center justify-center sm:justify-start gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <span>{currentLang.icon}</span>
                  <span>{currentLang.name}</span>
                </span>
                <span className="text-[11px] font-semibold text-slate-400">
                  {currentLevel.name}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsLanguageModalOpen(true)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
          >
            <Globe className="w-4 h-4 text-emerald-600" />
            <span>Switch Language</span>
          </button>
        </div>
      </div>

      {/* Numerical Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-center">
          <Flame className="w-5 h-5 text-orange-500 fill-orange-500 mx-auto mb-1" />
          <span className="text-2xl font-black text-slate-900 block">{streak}</span>
          <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
            Day Streak
          </span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-center">
          <Sparkles className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
          <span className="text-2xl font-black text-slate-900 block">{xp}</span>
          <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
            Total XP
          </span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-center">
          <BookOpen className="w-5 h-5 text-blue-600 mx-auto mb-1" />
          <span className="text-2xl font-black text-slate-900 block">
            {completedLessons?.length || 0}
          </span>
          <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
            Lessons Done
          </span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-center">
          <Target className="w-5 h-5 text-amber-500 mx-auto mb-1" />
          <span className="text-2xl font-black text-slate-900 block">{accuracy}%</span>
          <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
            Accuracy
          </span>
        </div>
      </div>

      {/* Teaching Language Preferences */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
        <div>
          <h3 className="text-base font-extrabold text-slate-900">
            Preferred Explanation Language
          </h3>
          <p className="text-xs text-slate-500 font-medium">
            Aap kis bhasha mein English samajhna pasand karte hain?
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {SUPPORTED_LANGUAGES.map((lang) => {
            const isSelected = user?.preferredLanguage === lang.id;
            return (
              <button
                key={lang.id}
                onClick={() => {
                  soundEffects.playPop();
                  setLanguage(lang.id);
                }}
                className={`p-3 rounded-2xl border-2 text-left transition-all flex items-center justify-between ${
                  isSelected
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{lang.icon}</span>
                  <div>
                    <h5 className="text-xs font-bold leading-tight">{lang.name}</h5>
                    <span className="text-[10px] text-slate-400 block">{lang.nativeName}</span>
                  </div>
                </div>
                {isSelected && <Check className="w-4 h-4 text-emerald-600 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Earned Achievements & Badges */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-extrabold text-slate-900">
              Achievements & Badges
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Aapki kamai hui upalabdhiyan aur medal
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {BADGES.map((badge) => {
            const isUnlocked = badge.condition({
              completedLessons,
              xp,
              streak,
              speakingPracticeCount: user?.speakingPracticeCount || 0,
              dailyChallengeCompleted: false
            });

            return (
              <div
                key={badge.id}
                className={`p-3.5 rounded-2xl border-2 text-center flex flex-col items-center justify-between transition-all ${
                  isUnlocked
                    ? 'bg-emerald-50/70 border-emerald-300 text-slate-800'
                    : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-2 shadow-sm ${
                    isUnlocked ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-400'
                  }`}
                >
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold leading-tight line-clamp-1">{badge.title}</h5>
                  <p className="text-[10px] text-slate-500 mt-1 line-clamp-2">
                    {badge.description}
                  </p>
                </div>
                <span
                  className={`mt-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isUnlocked
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  {isUnlocked ? 'Unlocked' : 'Locked'}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Learning History Log */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
        <div>
          <h3 className="text-base font-extrabold text-slate-900">
            Learning History & Activity
          </h3>
          <p className="text-xs text-slate-500 font-medium">
            Haal hi mein poore kiye gaye lessons
          </p>
        </div>

        {Object.keys(lessonScores || {}).length === 0 ? (
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl text-center text-xs text-slate-500">
            Abhi koi lesson record nahi hua hai. Dashboard par jakar apna pehla lesson shuru karein!
          </div>
        ) : (
          <div className="space-y-2">
            {Object.entries(lessonScores).map(([lId, record]) => (
              <div
                key={lId}
                className="p-3 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="font-bold text-slate-800 uppercase">{lId}</span>
                </div>
                <div className="flex items-center gap-4 text-slate-500 font-medium">
                  <span>Score: {record.correct}/{record.total}</span>
                  <span>{new Date(record.date).toLocaleDateString('en-IN')}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Reset Progress Danger Zone */}
      <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
        <div>
          <h4 className="text-xs font-bold text-slate-700">Reset Local Learning Data</h4>
          <p className="text-[11px] text-slate-400">
            Shuruat se dobra start karne ke liye
          </p>
        </div>
        <button
          onClick={handleResetConfirm}
          className="px-4 py-2 rounded-xl text-rose-600 hover:bg-rose-50 border border-rose-200 text-xs font-bold transition-colors flex items-center gap-1.5"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset All Progress</span>
        </button>
      </div>
    </div>
  );
};
