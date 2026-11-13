import React from 'react';
import { useApp } from '../../context/AppContext';
import { Mascot } from './Mascot';
import {
  Home,
  BookOpen,
  Mic,
  Zap,
  Award,
  User,
  Globe,
  HelpCircle,
  LogOut
} from 'lucide-react';
import { getLanguageById } from '../../data/languages';

export const Sidebar = () => {
  const {
    activeTab,
    setActiveTab,
    user,
    setIsLanguageModalOpen,
    dailyChallengeCompleted
  } = useApp();

  const currentLang = getLanguageById(user?.preferredLanguage);

  const navItems = [
    { id: 'dashboard', label: 'Home', icon: Home },
    { id: 'learn', label: 'Learn Path', icon: BookOpen },
    { id: 'practice', label: 'Speaking', icon: Mic },
    {
      id: 'daily',
      label: 'Daily Challenge',
      icon: Zap,
      badge: dailyChallengeCompleted ? 'Done' : 'Bonus XP'
    },
    { id: 'rewards', label: 'Rewards & Store', icon: Award },
    { id: 'profile', label: 'Profile & Stats', icon: User }
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 border-r border-slate-200 bg-white min-h-[calc(100vh-65px)] p-4 justify-between">
      {/* Navigation Links */}
      <div className="space-y-1.5">
        <div className="px-3 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          Main Menu
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-sm font-bold transition-all ${
                isActive
                  ? 'bg-emerald-50 text-emerald-700 border-2 border-emerald-500 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 border-2 border-transparent'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={`w-5 h-5 ${
                    isActive ? 'text-emerald-600' : 'text-slate-500'
                  }`}
                />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    item.badge === 'Done'
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-amber-100 text-amber-700 animate-pulse'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Mascot Daily Encouragement & Language Card */}
      <div className="space-y-3 pt-4 border-t border-slate-100">
        {/* Active Language quick button */}
        <button
          onClick={() => setIsLanguageModalOpen(true)}
          className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl transition-colors text-left"
        >
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-400">
              Teaching Language
            </div>
            <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5 mt-0.5">
              <span>{currentLang.icon}</span>
              <span>{currentLang.name}</span>
            </div>
          </div>
          <Globe className="w-4 h-4 text-emerald-600" />
        </button>

        {/* Mascot Card */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-3 flex items-center gap-3">
          <Mascot mood="encouraging" size="sm" />
          <div className="text-xs text-slate-700 font-medium leading-relaxed">
            <span className="font-bold text-emerald-800 block">Prof. Gappu:</span>
            "Roz bas 10 minute bolo, English aasan banegi!"
          </div>
        </div>
      </div>
    </aside>
  );
};
