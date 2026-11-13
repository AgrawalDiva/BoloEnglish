import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MODULES_DATA } from '../../data/lessonsData';
import { getCurrentLevel } from '../../data/achievements';
import { getLanguageById } from '../../data/languages';
import { Mascot } from '../common/Mascot';
import {
  Flame,
  Sparkles,
  CheckCircle2,
  Lock,
  ArrowRight,
  Zap,
  Mic,
  Award,
  ChevronRight,
  Star,
  Target,
  Clock,
  BookOpen,
  Filter
} from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';

export const Dashboard = ({ viewMode = 'all' }) => {
  const {
    user,
    xp,
    streak,
    coins,
    completedLessons,
    startLesson,
    setActiveTab,
    dailyChallengeCompleted
  } = useApp();

  const [selectedCategory, setSelectedCategory] = useState('all'); // 'all' | 'beginner' | 'intermediate' | 'advanced'

  const currentLevel = getCurrentLevel(xp);
  const currentLang = getLanguageById(user?.preferredLanguage);

  // Daily Goal calculations
  const dailyGoalMinutes = user?.dailyGoalMinutes || 10;
  const targetLessonsToday = Math.max(1, Math.round(dailyGoalMinutes / 5));
  // Count how many lessons were completed today or overall
  const completedTodayCount = Math.min(completedLessons?.length || 0, targetLessonsToday);
  const dailyGoalPercent = Math.min(100, Math.round((completedTodayCount / targetLessonsToday) * 100));

  // Calculate overall stats
  const totalAvailableLessons = MODULES_DATA.reduce(
    (acc, m) => acc + (m.lessons?.length || 0),
    0
  );
  const completedCount = completedLessons?.length || 0;
  const progressPercent = Math.min(
    100,
    Math.round((completedCount / Math.max(totalAvailableLessons, 1)) * 100)
  );

  // Filter modules based on category
  const filteredModules = MODULES_DATA.filter((m) => {
    if (selectedCategory === 'beginner') return m.number <= 3;
    if (selectedCategory === 'intermediate') return m.number >= 4 && m.number <= 5;
    if (selectedCategory === 'advanced') return m.number >= 6;
    return true;
  });

  return (
    <div className="space-y-6 pb-16">
      {/* Welcome & Mascot Hero Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        {/* Background decorative circles */}
        <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute left-1/2 top-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-emerald-100 text-xs font-bold border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Teaching in: {currentLang.name}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
              Namaste, {user?.name || 'Dost'}! 👋
            </h2>

            <p className="text-emerald-100 text-xs sm:text-sm font-medium max-w-lg leading-relaxed">
              "Apni bhasha mein seekho, confidence se English bolo." Har roz thoda abhyas aapko
              dharaprwah English bolne mein madad karega!
            </p>

            {/* Quick Stats Pills */}
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <div className="bg-black/20 backdrop-blur-sm px-3.5 py-1.5 rounded-xl border border-white/10 text-xs font-bold flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-orange-400 fill-orange-400" />
                <span>{streak} Day Streak</span>
              </div>
              <div className="bg-black/20 backdrop-blur-sm px-3.5 py-1.5 rounded-xl border border-white/10 text-xs font-bold flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-300" />
                <span>Level {currentLevel.level}: {currentLevel.name}</span>
              </div>
            </div>
          </div>

          {/* Mascot in celebratory mood */}
          <div className="shrink-0 flex flex-col items-center">
            <Mascot mood="excited" size="lg" />
          </div>
        </div>
      </div>

      {/* Daily Quick Action Cards (Daily Challenge & Voice Room) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Daily Challenge Card */}
        <div
          onClick={() => setActiveTab('daily')}
          className="bg-white border-2 border-amber-200 hover:border-amber-400 rounded-3xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer group flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-100 text-amber-700 rounded-2xl group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 fill-amber-500 text-amber-600" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-extrabold text-slate-900">
                  Daily Rapid Challenge
                </h4>
                {dailyChallengeCompleted ? (
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Done
                  </span>
                ) : (
                  <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
                    +50 XP
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                5 Sawal, bonus coins aur streak protection
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-amber-600 transition-colors" />
        </div>

        {/* Voice Practice Room */}
        <div
          onClick={() => setActiveTab('practice')}
          className="bg-white border-2 border-emerald-200 hover:border-emerald-400 rounded-3xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer group flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-100 text-emerald-700 rounded-2xl group-hover:scale-110 transition-transform">
              <Mic className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-slate-900">
                Speaking Practice Room
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Mike se boliye aur accent/pronunciation check kijiye
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
        </div>
      </div>

      {/* Progress & Goals Grid: Daily Goal + Overall Course */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Daily Learning Goal Card */}
        <div className="bg-white border-2 border-slate-200 rounded-3xl p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-amber-100 text-amber-800 rounded-xl">
                <Clock className="w-4 h-4 text-amber-700" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-sm">
                  Daily Learning Goal
                </h3>
                <span className="text-[11px] text-slate-500 font-medium">
                  Target: {dailyGoalMinutes} Mins / Din
                </span>
              </div>
            </div>
            <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
              {completedTodayCount >= targetLessonsToday ? '🎉 Goal Completed!' : `${completedTodayCount}/${targetLessonsToday} Lessons Done`}
            </span>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold text-slate-600">
              <span>Today's Target Progress</span>
              <span className="font-bold text-amber-800">{dailyGoalPercent}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-500"
                style={{ width: `${dailyGoalPercent}%` }}
              />
            </div>
          </div>
          <p className="text-[11px] text-slate-500 italic">
            Rozana thoda padhein, 7 din ki streak banayein aur aatmavishwas badhayein!
          </p>
        </div>

        {/* Overall Course Progress & Level Card */}
        <div className="bg-white border-2 border-slate-200 rounded-3xl p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-emerald-100 text-emerald-800 rounded-xl">
                <Target className="w-4 h-4 text-emerald-700" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-sm">
                  Course Completion
                </h3>
                <span className="text-[11px] text-slate-500 font-medium">
                  {completedCount} of {totalAvailableLessons} Lessons Completed
                </span>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              {progressPercent}% Total
            </span>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold text-slate-600">
              <span>Curriculum Progress</span>
              <span className="font-bold text-emerald-800">{completedCount}/{totalAvailableLessons}</span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
          <div className="flex items-center justify-between pt-0.5 text-[11px] text-slate-500 font-semibold">
            <span>Level: <strong className="text-slate-800">{currentLevel.name}</strong></span>
            <span>Current XP: <strong className="text-emerald-700">{xp} XP</strong></span>
          </div>
        </div>
      </div>

      {/* Curriculum: 8 Modules Learning Path */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-black text-slate-900">
              Your English Learning Path
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              8 Modules mein batta sampurna pathyakram — shuruat se interview tak
            </p>
          </div>

          {/* Level Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {[
              { id: 'all', label: 'All Modules (8)' },
              { id: 'beginner', label: 'Beginner (1-3)' },
              { id: 'intermediate', label: 'Intermediate (4-5)' },
              { id: 'advanced', label: 'Advanced (6-8)' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  soundEffects.playPop();
                  setSelectedCategory(cat.id);
                }}
                className={`px-3 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredModules.map((module) => {
            const mIdx = MODULES_DATA.findIndex((m) => m.id === module.id);
            const isFirst = mIdx === 0;
            // Module is unlocked if first module or if previous module has at least 1 completed lesson
            const isUnlocked =
              isFirst ||
              completedLessons.some((lId) =>
                MODULES_DATA[mIdx - 1]?.lessons.some((l) => l.id === lId)
              );

            return (
              <div
                key={module.id}
                className={`bg-white rounded-3xl border-2 transition-all p-5 sm:p-6 shadow-sm ${
                  isUnlocked
                    ? 'border-slate-200 hover:border-emerald-300'
                    : 'border-slate-200 opacity-80'
                }`}
              >
                {/* Module Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 ${
                        isUnlocked
                          ? 'bg-emerald-600 text-white shadow-md'
                          : 'bg-slate-200 text-slate-500'
                      }`}
                    >
                      {module.number}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base sm:text-lg font-black text-slate-900">
                          {module.title}
                        </h4>
                        {!isUnlocked && (
                          <span className="flex items-center gap-1 text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                            <Lock className="w-3 h-3" /> Locked
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-semibold text-emerald-700">
                        {module.subtitle}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        {module.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Lessons inside this Module */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {module.lessons.map((lesson, lIdx) => {
                    const isLessonCompleted = completedLessons.includes(lesson.id);
                    // Lesson unlocked if first lesson in module or previous completed
                    const isLessonUnlocked =
                      isUnlocked &&
                      (lIdx === 0 || completedLessons.includes(module.lessons[lIdx - 1].id));

                    return (
                      <div
                        key={lesson.id}
                        onClick={() => {
                          if (isLessonUnlocked) {
                            startLesson(module.id, lesson.id);
                          }
                        }}
                        className={`p-4 rounded-2xl border-2 transition-all flex flex-col justify-between ${
                          isLessonCompleted
                            ? 'bg-emerald-50/70 border-emerald-400 shadow-sm cursor-pointer'
                            : isLessonUnlocked
                            ? 'bg-white border-slate-200 hover:border-emerald-500 hover:shadow-md cursor-pointer'
                            : 'bg-slate-50 border-slate-200 opacity-60 cursor-not-allowed'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                              Lesson {lIdx + 1}
                            </span>
                            {isLessonCompleted ? (
                              <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                100%
                              </span>
                            ) : isLessonUnlocked ? (
                              <span className="flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                                <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                                +{lesson.xpReward} XP
                              </span>
                            ) : (
                              <Lock className="w-3.5 h-3.5 text-slate-400" />
                            )}
                          </div>
                          <h5 className="text-sm font-bold text-slate-900 leading-snug">
                            {lesson.title}
                          </h5>
                          <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                            {lesson.description}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-[11px] text-slate-400 font-medium">
                            {lesson.questions.length} Questions
                          </span>
                          <button
                            disabled={!isLessonUnlocked}
                            className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1 transition-all ${
                              isLessonCompleted
                                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                                : isLessonUnlocked
                                ? 'bg-slate-900 text-white hover:bg-emerald-600'
                                : 'bg-slate-200 text-slate-400'
                            }`}
                          >
                            <span>{isLessonCompleted ? 'Practice Again' : 'Start'}</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
