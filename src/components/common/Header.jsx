import React from 'react';
import { useApp } from '../../context/AppContext';
import { getLanguageById } from '../../data/languages';
import { Flame, Coins, Sparkles, Volume2, VolumeX, Globe, User } from 'lucide-react';

export const Header = () => {
  const {
    streak,
    coins,
    xp,
    user,
    soundEnabled,
    toggleSound,
    setIsLanguageModalOpen,
    setActiveTab,
    setIsAuthModalOpen
  } = useApp();

  const currentLang = getLanguageById(user?.preferredLanguage);

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-2.5 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        {/* Brand / Logo (Left) */}
        <div
          onClick={() => setActiveTab('dashboard')}
          className="flex items-center gap-2.5 cursor-pointer group select-none"
        >
          <img
            src="/logo.svg"
            alt="Bolo English"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl shadow-sm group-hover:scale-105 transition-transform"
          />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-slate-900 text-lg sm:text-xl tracking-tight">
                Bolo<span className="text-emerald-600">English</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-full hidden sm:inline-block">
                Beta
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium hidden md:block">
              Apni Bhasha Mein Seekho
            </p>
          </div>
        </div>

        {/* Gamification Stats: Streak, Coins, XP & Language Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Daily Streak */}
          <div
            title="Daily Active Streak"
            className="flex items-center gap-1.5 bg-orange-50 hover:bg-orange-100 text-orange-600 px-2.5 py-1.5 rounded-xl border border-orange-200 text-xs sm:text-sm font-bold shadow-sm transition-colors cursor-default"
          >
            <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 fill-orange-500 animate-pulse" />
            <span>{streak}</span>
          </div>

          {/* Bolo Coins */}
          <div
            onClick={() => setActiveTab('rewards')}
            title="Bolo Coins (Spend in Rewards Store)"
            className="flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 text-amber-700 px-2.5 py-1.5 rounded-xl border border-amber-200 text-xs sm:text-sm font-bold shadow-sm transition-colors cursor-pointer"
          >
            <Coins className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 fill-amber-400" />
            <span>{coins}</span>
          </div>

          {/* XP Points */}
          <div
            title="Experience Points (XP)"
            className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2.5 py-1.5 rounded-xl border border-emerald-200 text-xs sm:text-sm font-bold shadow-sm hidden xs:flex"
          >
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>{xp} XP</span>
          </div>

          {/* Language Selector Pill */}
          <button
            onClick={() => setIsLanguageModalOpen(true)}
            title="Change Explanation Language"
            className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold transition-all hover:border-slate-300"
          >
            <span className="text-base">{currentLang.icon}</span>
            <span className="hidden sm:inline-block max-w-[90px] truncate">{currentLang.name}</span>
            <Globe className="w-3.5 h-3.5 text-slate-500" />
          </button>

          {/* Sound Mute/Unmute */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? 'Mute Sounds' : 'Unmute Sounds'}
            className="p-2 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-emerald-600" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {/* Profile / Auth Button */}
          <button
            onClick={() => {
              if (user?.isLoggedIn) {
                setActiveTab('profile');
              } else {
                setIsAuthModalOpen(true);
              }
            }}
            className="p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 shadow-sm transition-colors"
          >
            <User className="w-4 h-4" />
            <span className="hidden md:inline-block">
              {user?.isLoggedIn ? user.name.split(' ')[0] : 'Sign In'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
