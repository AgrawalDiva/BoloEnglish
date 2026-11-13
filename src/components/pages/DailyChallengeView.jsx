import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { DAILY_CHALLENGE } from '../../data/dailyChallenges';
import { getLanguageById } from '../../data/languages';
import { Mascot } from '../common/Mascot';
import { soundEffects } from '../../utils/soundEffects';
import { speakEnglish } from '../../utils/speechHelper';
import confetti from 'canvas-confetti';
import {
  Zap,
  Clock,
  CheckCircle2,
  XCircle,
  Coins,
  Sparkles,
  ArrowRight,
  Flame,
  RotateCcw
} from 'lucide-react';

export const DailyChallengeView = () => {
  const {
    user,
    dailyChallengeCompleted,
    completeDailyChallenge,
    setActiveTab
  } = useApp();

  const currentLang = getLanguageById(user?.preferredLanguage);
  const questions = DAILY_CHALLENGE.questions;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [assembledWords, setAssembledWords] = useState([]);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Simple countdown timer for daily challenge (e.g. 180s = 3 minutes)
  const [timeLeft, setTimeLeft] = useState(180);

  useEffect(() => {
    if (isFinished || dailyChallengeCompleted) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isFinished, dailyChallengeCompleted]);

  const currentQ = questions[currentIndex];

  useEffect(() => {
    setSelectedOption(null);
    setAssembledWords([]);
    setIsAnswerChecked(false);
    setIsCorrect(false);
    if (currentQ?.audioText) {
      speakEnglish(currentQ.audioText);
    }
  }, [currentIndex]);

  const handleWordTileClick = (word, index) => {
    soundEffects.playPop();
    setAssembledWords((prev) => [...prev, { word, originalIdx: index }]);
  };

  const handleRemoveAssembledWord = (idx) => {
    soundEffects.playPop();
    setAssembledWords((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleCheck = () => {
    let correct = false;
    if (currentQ.type === 'reorder_sentence') {
      const sentenceStr = assembledWords.map((item) => item.word).join(' ').trim();
      correct = sentenceStr.toLowerCase() === currentQ.correctSentence.trim().toLowerCase();
    } else {
      correct = !!selectedOption?.isCorrect;
    }

    setIsCorrect(correct);
    setIsAnswerChecked(true);

    if (correct) {
      soundEffects.playCorrect();
      setCorrectCount((prev) => prev + 1);
    } else {
      soundEffects.playIncorrect();
    }
  };

  const handleNext = () => {
    soundEffects.playPop();
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      soundEffects.playFanfare();
      try {
        confetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.6 }
        });
      } catch (e) {}
      setIsFinished(true);
      completeDailyChallenge(DAILY_CHALLENGE.bonusXP, DAILY_CHALLENGE.bonusCoins);
    }
  };

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins}:${s < 10 ? '0' : ''}${s}`;
  };

  // If already completed previously today
  if (dailyChallengeCompleted && !isFinished) {
    return (
      <div className="max-w-md mx-auto py-12 px-4 text-center space-y-6">
        <div className="bg-white border-2 border-emerald-300 rounded-3xl p-8 shadow-xl space-y-5">
          <Mascot mood="celebrating" size="lg" />
          <div>
            <h3 className="text-2xl font-black text-slate-900">
              Aaj Ka Challenge Poora Ho Chuka Hai!
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-1">
              Aapne aaj ke 5 rapid sawal pehle hi hal kar liye hain aur 50 XP hasil kar liya hai!
            </p>
          </div>

          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs font-bold text-emerald-800 flex items-center justify-center gap-2">
            <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
            <span>Streak Protected For Today!</span>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setActiveTab('learn')}
              className="w-full py-3.5 rounded-2xl btn-3d-green text-white font-bold text-sm shadow-md"
            >
              Learn Path Par Jayein
            </button>
            <button
              onClick={() => {
                setIsFinished(false);
                setCurrentIndex(0);
                setCorrectCount(0);
              }}
              className="w-full py-3.5 rounded-2xl btn-3d-white text-slate-800 font-bold text-sm shadow-sm"
            >
              Dobara Practice
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Finished Celebration Screen
  if (isFinished) {
    return (
      <div className="max-w-md mx-auto py-12 px-4 text-center space-y-6 animate-fade-in">
        <div className="bg-white border-2 border-amber-300 rounded-3xl p-8 shadow-2xl space-y-6">
          <Mascot mood="celebrating" size="lg" />

          <div>
            <span className="inline-block bg-amber-100 text-amber-800 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              Challenge Completed!
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              Shabash, Champion! 🏆
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-semibold mt-1">
              Aapne {questions.length} mein se {correctCount} sahi jawab diye!
            </p>
          </div>

          {/* Reward Badges */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl">
              <span className="text-[10px] font-bold uppercase text-emerald-700 block">
                Bonus XP
              </span>
              <span className="text-xl font-black text-emerald-800">
                +{DAILY_CHALLENGE.bonusXP} XP
              </span>
            </div>

            <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl">
              <span className="text-[10px] font-bold uppercase text-amber-700 block">
                Bonus Coins
              </span>
              <span className="text-xl font-black text-amber-800 flex items-center justify-center gap-1">
                <Coins className="w-5 h-5 fill-amber-500 text-amber-600" />
                +{DAILY_CHALLENGE.bonusCoins}
              </span>
            </div>
          </div>

          <button
            onClick={() => setActiveTab('dashboard')}
            className="w-full py-4 rounded-2xl btn-3d-green text-white font-black text-base shadow-lg"
          >
            Dashboard Par Lauten
          </button>
        </div>
      </div>
    );
  }

  const promptText =
    currentQ?.promptRegional?.[user?.preferredLanguage] ||
    currentQ?.promptRegional?.['hinglish'] ||
    '';

  const explanationText =
    currentQ?.explanation?.[user?.preferredLanguage] ||
    currentQ?.explanation?.['hinglish'] ||
    '';

  return (
    <div className="max-w-2xl mx-auto py-4 px-4 space-y-6">
      {/* Header with Timer and Progress */}
      <div className="flex items-center justify-between bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-amber-100 text-amber-700 rounded-xl">
            <Zap className="w-5 h-5 fill-amber-400" />
          </div>
          <div>
            <h4 className="text-sm font-black text-slate-900 leading-tight">
              Daily Challenge
            </h4>
            <span className="text-xs text-slate-400 font-semibold">
              Question {currentIndex + 1} of {questions.length}
            </span>
          </div>
        </div>

        {/* Countdown */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 rounded-xl font-mono text-xs font-bold">
          <Clock className="w-3.5 h-3.5 text-amber-600" />
          <span>{formatTime(timeLeft)}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-500 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5 animate-fade-in">
        <h3 className="text-lg font-black text-slate-900 leading-snug">
          {promptText}
        </h3>

        {/* English Prompt if any */}
        {currentQ?.englishPrompt && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl">
            <p className="text-xl font-black text-slate-900">
              "{currentQ.englishPrompt}"
            </p>
            {currentQ.phonetic && (
              <p className="text-xs text-emerald-800 font-bold mt-1">
                Uchcharan: {currentQ.phonetic}
              </p>
            )}
          </div>
        )}

        {/* Fill Blank sentence */}
        {currentQ?.type === 'fill_blank' && (
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-center text-lg font-bold">
            {currentQ.sentenceParts[0]}
            <span className="underline decoration-amber-500 font-black px-2 text-amber-800">
              {selectedOption ? selectedOption.text : '______'}
            </span>
            {currentQ.sentenceParts[1]}
          </div>
        )}

        {/* Reorder */}
        {currentQ?.type === 'reorder_sentence' && (
          <div className="space-y-3">
            <div className="min-h-[60px] bg-slate-50 border-2 border-dashed border-amber-400 rounded-2xl p-3 flex flex-wrap gap-2">
              {assembledWords.length === 0 ? (
                <span className="text-xs text-slate-400 font-semibold m-auto">
                  Shabdon par tap karke sahi kram banayein
                </span>
              ) : (
                assembledWords.map((item, idx) => (
                  <button
                    key={idx}
                    disabled={isAnswerChecked}
                    onClick={() => handleRemoveAssembledWord(idx)}
                    className="px-3 py-1.5 rounded-xl bg-amber-500 text-white font-bold text-sm shadow-sm"
                  >
                    {item.word}
                  </button>
                ))
              )}
            </div>

            <div className="flex flex-wrap gap-2 justify-center pt-2">
              {currentQ.words.map((w, wIdx) => {
                const isUsed = assembledWords.some(
                  (item) => item.originalIdx === wIdx
                );
                return (
                  <button
                    key={wIdx}
                    disabled={isUsed || isAnswerChecked}
                    onClick={() => handleWordTileClick(w, wIdx)}
                    className={`px-4 py-2 rounded-xl font-bold text-sm border-2 transition-all ${
                      isUsed
                        ? 'bg-slate-100 text-slate-300 border-slate-200'
                        : 'bg-white text-slate-800 border-slate-200 hover:border-amber-400'
                    }`}
                  >
                    {w}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Options */}
        {currentQ?.options && (
          <div className="space-y-2.5">
            {currentQ.options.map((opt) => {
              const isSelected = selectedOption?.id === opt.id;
              const optText =
                typeof opt.text === 'object'
                  ? opt.text[user?.preferredLanguage] || opt.text['hinglish']
                  : opt.text;

              return (
                <button
                  key={opt.id}
                  disabled={isAnswerChecked}
                  onClick={() => {
                    soundEffects.playPop();
                    setSelectedOption(opt);
                  }}
                  className={`w-full p-4 rounded-2xl border-2 text-left font-bold text-sm sm:text-base transition-all flex items-center justify-between ${
                    isSelected
                      ? 'border-amber-500 bg-amber-50 text-amber-900 shadow-sm'
                      : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300'
                  }`}
                >
                  <span>{optText}</span>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      isSelected
                        ? 'border-amber-600 bg-amber-600 text-white'
                        : 'border-slate-300'
                    }`}
                  >
                    {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Feedback Drawer / Check Button */}
      <div className="space-y-3">
        {isAnswerChecked && (
          <div
            className={`p-4 rounded-2xl border animate-fade-in ${
              isCorrect
                ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                : 'bg-amber-50 border-amber-300 text-amber-900'
            }`}
          >
            <div className="flex items-center gap-2 font-black text-sm">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Sahi Jawab! (+10 XP)</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-amber-600" />
                  <span>Koshish acchi thi! Sahi uttar dekhein:</span>
                </>
              )}
            </div>
            <p className="text-xs text-slate-700 mt-1 font-medium">
              {explanationText}
            </p>
          </div>
        )}

        {!isAnswerChecked ? (
          <button
            disabled={
              currentQ.type === 'reorder_sentence'
                ? assembledWords.length === 0
                : !selectedOption
            }
            onClick={handleCheck}
            className="w-full py-4 rounded-2xl btn-3d-yellow text-white font-black text-base shadow-md disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Janch Karein (Check)
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="w-full py-4 rounded-2xl btn-3d-green text-white font-black text-base shadow-md flex items-center justify-center gap-2"
          >
            <span>Agla Sawal</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};
