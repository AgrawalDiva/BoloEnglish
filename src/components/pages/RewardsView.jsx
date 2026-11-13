import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { BADGES, REWARDS_STORE, LEARNING_LEVELS, getCurrentLevel } from '../../data/achievements';
import { Mascot } from '../common/Mascot';
import { soundEffects } from '../../utils/soundEffects';
import confetti from 'canvas-confetti';
import {
  Award,
  Coins,
  Sparkles,
  Flame,
  Shield,
  Zap,
  Crown,
  CheckCircle2,
  Lock,
  Printer,
  X,
  BookOpen,
  Layers,
  Mic
} from 'lucide-react';

export const RewardsView = () => {
  const {
    xp,
    coins,
    streak,
    user,
    completedLessons,
    unlockedStoreItems,
    buyStoreItem
  } = useApp();

  const [storeMessage, setStoreMessage] = useState(null);
  const [showCertificate, setShowCertificate] = useState(false);

  const currentLevel = getCurrentLevel(xp);

  const handleBuy = (item) => {
    soundEffects.playPop();
    const res = buyStoreItem(item);
    if (res.success) {
      soundEffects.playCorrect();
      setStoreMessage({ type: 'success', text: res.message });
      try {
        confetti({ particleCount: 80, spread: 60 });
      } catch (e) {}
    } else {
      soundEffects.playIncorrect();
      setStoreMessage({ type: 'error', text: res.message });
    }
    setTimeout(() => setStoreMessage(null), 3000);
  };

  const badgeIcons = {
    Sparkles,
    Award,
    Flame,
    BookOpen,
    Layers,
    Mic,
    Zap
  };

  return (
    <div className="space-y-6 pb-16 max-w-4xl mx-auto">
      {/* Rewards Hero Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold backdrop-blur-md">
            <Coins className="w-4 h-4 fill-amber-300 text-amber-200" />
            <span>Bolo Rewards & Store</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Aapki Kamayi & Upalabdhiyan
          </h2>
          <p className="text-amber-100 text-xs sm:text-sm font-medium max-w-md">
            Har lesson se Bolo Coins kamayein aur exciting power-ups, streak freeze aur certificate hasil karein!
          </p>
        </div>

        {/* Big Coin Counter */}
        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 sm:p-5 flex items-center gap-3 shrink-0 shadow-inner">
          <div className="w-12 h-12 rounded-full bg-amber-400 border-2 border-white flex items-center justify-center shadow-lg">
            <Coins className="w-7 h-7 text-amber-900 fill-amber-300" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-amber-200 font-bold block">
              Bolo Coins Balance
            </span>
            <span className="text-3xl font-black text-white">{coins}</span>
          </div>
        </div>
      </div>

      {/* Learning Level Status Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Current Rank
            </span>
            <h3 className="text-lg font-black text-slate-900">
              {currentLevel.name}
            </h3>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
            {xp} Total XP Points
          </span>
        </div>

        {/* Progress bar to next level */}
        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full transition-all duration-500"
            style={{
              width: `${Math.min(
                100,
                Math.round(
                  ((xp - currentLevel.minXP) /
                    Math.max(currentLevel.maxXP - currentLevel.minXP, 1)) *
                    100
                )
              )}%`
            }}
          />
        </div>
        <div className="mt-2 flex justify-between text-[11px] text-slate-400 font-semibold">
          <span>Level {currentLevel.level}</span>
          <span>Target: {currentLevel.maxXP} XP for Next Rank</span>
        </div>
      </div>

      {/* Achievement Badges Showcase */}
      <div className="space-y-3">
        <div>
          <h3 className="text-lg font-black text-slate-900">
            Achievement Badges (उपलब्धि पदक)
          </h3>
          <p className="text-xs text-slate-500 font-medium">
            Naye meal ke pathar hasil karke badges unlock karein
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {BADGES.map((badge) => {
            const isUnlocked = badge.condition({
              completedLessons,
              xp,
              streak,
              speakingPracticeCount: user?.speakingPracticeCount || 1,
              dailyChallengeCompleted: true
            });
            const Icon = badgeIcons[badge.icon] || Award;

            return (
              <div
                key={badge.id}
                className={`p-4 rounded-2xl border-2 transition-all flex items-start gap-3.5 ${
                  isUnlocked
                    ? 'bg-white border-emerald-300 shadow-sm'
                    : 'bg-slate-50 border-slate-200 opacity-60'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${
                    isUnlocked
                      ? 'bg-gradient-to-br from-amber-400 to-amber-500 text-white'
                      : 'bg-slate-200 text-slate-400'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-black text-slate-900">
                      {badge.title}
                    </h4>
                    {isUnlocked ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    ) : (
                      <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bolo Coin Store */}
      <div className="space-y-3 pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-black text-slate-900">
              Bolo Coin Store (रिवार्ड्स की दुकान)
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Coins se power-ups aur certificate unlock karein
            </p>
          </div>
        </div>

        {storeMessage && (
          <div
            className={`p-3 rounded-2xl text-xs font-bold ${
              storeMessage.type === 'success'
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                : 'bg-rose-50 text-rose-800 border border-rose-200'
            }`}
          >
            {storeMessage.text}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {REWARDS_STORE.map((item) => {
            const isPurchased = unlockedStoreItems.includes(item.id);
            const canAfford = coins >= item.cost;

            return (
              <div
                key={item.id}
                className="bg-white border-2 border-slate-200 hover:border-slate-300 rounded-3xl p-5 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center shrink-0">
                    {item.icon === 'Shield' && <Shield className="w-6 h-6" />}
                    {item.icon === 'Zap' && <Zap className="w-6 h-6 fill-amber-500" />}
                    {item.icon === 'Crown' && <Crown className="w-6 h-6" />}
                    {item.icon === 'Award' && <Award className="w-6 h-6" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <span className="flex items-center gap-1 font-black text-amber-700 text-sm">
                    <Coins className="w-4 h-4 fill-amber-400" />
                    {item.cost} Coins
                  </span>

                  {item.id === 'certificate-unlock' && isPurchased ? (
                    <button
                      onClick={() => setShowCertificate(true)}
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1 shadow-sm"
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>View Certificate</span>
                    </button>
                  ) : isPurchased ? (
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Unlocked
                    </span>
                  ) : (
                    <button
                      onClick={() => handleBuy(item)}
                      disabled={!canAfford}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        canAfford
                          ? 'btn-3d-yellow text-white shadow-sm'
                          : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      Unlock Now
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Certificate Modal */}
      {showCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border-4 border-amber-300 relative print:m-0 print:border-none">
            <button
              onClick={() => setShowCertificate(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full print:hidden"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Certificate Artwork */}
            <div className="border-4 border-double border-amber-500 rounded-2xl p-6 sm:p-8 text-center bg-gradient-to-b from-amber-50/40 via-white to-amber-50/40 relative">
              <div className="flex justify-center mb-3">
                <img src="/logo.svg" alt="Bolo English" className="w-16 h-16 rounded-2xl shadow-md" />
              </div>

              <span className="text-xs uppercase tracking-widest font-extrabold text-amber-700">
                Community Connect Initiative • Academic Project
              </span>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 font-serif">
                Certificate of Spoken English Progress
              </h2>

              <p className="text-xs text-slate-500 mt-1 italic">
                This academic achievement certificate is proudly presented to:
              </p>

              <h3 className="text-2xl sm:text-3xl font-black text-emerald-800 my-4 underline decoration-amber-400 underline-offset-8">
                {user?.name || 'Rahul Sharma'}
              </h3>

              <p className="text-xs sm:text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
                for demonstrating dedicated commitment to learning spoken and written English
                through regional Indian languages on the <strong>Bolo English</strong> platform.
              </p>

              {/* Badges / Signatures */}
              <div className="mt-8 pt-6 border-t border-amber-200 flex items-center justify-between text-left text-xs">
                <div>
                  <span className="font-bold text-slate-800 block">Prof. Gappu</span>
                  <span className="text-[10px] text-slate-400">AI English Mascot Guide</span>
                </div>

                <div className="w-16 h-16 rounded-full border-2 border-dashed border-amber-600 flex flex-col items-center justify-center text-[9px] font-black text-amber-800 rotate-12">
                  <span>VERIFIED</span>
                  <span>BOLO PWA</span>
                </div>

                <div className="text-right">
                  <span className="font-bold text-slate-800 block">
                    {new Date().toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </span>
                  <span className="text-[10px] text-slate-400">Date of Achievement</span>
                </div>
              </div>
            </div>

            {/* Print button */}
            <div className="mt-5 flex justify-end gap-3 print:hidden">
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl flex items-center gap-2 shadow-sm"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
