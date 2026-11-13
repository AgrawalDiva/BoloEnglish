import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { getLessonById, getModuleById } from '../../data/lessonsData';
import { getLanguageById } from '../../data/languages';
import { Mascot } from '../common/Mascot';
import { soundEffects } from '../../utils/soundEffects';
import { speakEnglish } from '../../utils/speechHelper';
import confetti from 'canvas-confetti';
import {
  X,
  Volume2,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight,
  Heart,
  Coins,
  Award,
  RotateCcw
} from 'lucide-react';

export const LessonView = () => {
  const {
    currentLessonMeta,
    exitLesson,
    completeLesson,
    user
  } = useApp();

  const moduleId = currentLessonMeta?.moduleId || 'module-1';
  const lessonId = currentLessonMeta?.lessonId || 'm1-l1';
  const lesson = getLessonById(moduleId, lessonId);
  const currentLang = getLanguageById(user?.preferredLanguage);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [assembledWords, setAssembledWords] = useState([]); // for reorder
  const [matchedPairs, setMatchedPairs] = useState({}); // for match_pairs
  const [selectedLeft, setSelectedLeft] = useState(null); // for match_pairs
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [isLessonFinished, setIsLessonFinished] = useState(false);

  const questions = lesson?.questions || [];
  const currentQ = questions[currentIndex];
  const progressPercent = Math.round(((currentIndex) / questions.length) * 100);

  // Auto-play TTS on question load if applicable
  useEffect(() => {
    if (currentQ?.audioText) {
      speakEnglish(currentQ.audioText);
    }
    // Reset inputs
    setSelectedOption(null);
    setAssembledWords([]);
    setMatchedPairs({});
    setSelectedLeft(null);
    setIsAnswerChecked(false);
    setIsCorrect(false);
  }, [currentIndex]);

  const handleAudio = (text, slow = false) => {
    soundEffects.playPop();
    speakEnglish(text, slow);
  };

  // Reorder sentence helpers
  const handleWordTileClick = (word, index) => {
    soundEffects.playPop();
    setAssembledWords((prev) => [...prev, { word, originalIdx: index }]);
  };

  const handleRemoveAssembledWord = (assembledIdx) => {
    soundEffects.playPop();
    setAssembledWords((prev) => prev.filter((_, i) => i !== assembledIdx));
  };

  // Match pairs helpers
  const handleMatchLeft = (item) => {
    soundEffects.playPop();
    setSelectedLeft(item);
  };

  const handleMatchRight = (regText) => {
    soundEffects.playPop();
    if (!selectedLeft) return;

    // Check if this matches selectedLeft
    const expectedReg =
      selectedLeft.regional[user?.preferredLanguage] ||
      selectedLeft.regional['hinglish'];

    if (expectedReg === regText) {
      // Pair matched!
      soundEffects.playCorrect();
      setMatchedPairs((prev) => ({
        ...prev,
        [selectedLeft.english]: regText
      }));
      setSelectedLeft(null);
    } else {
      soundEffects.playIncorrect();
      setSelectedLeft(null);
    }
  };

  // Check Answer Button Logic
  const handleCheckAnswer = () => {
    if (!currentQ) return;
    let correct = false;

    if (currentQ.type === 'reorder_sentence') {
      const sentenceStr = assembledWords.map((item) => item.word).join(' ').trim();
      const expectedStr = currentQ.correctSentence.trim();
      correct = sentenceStr.toLowerCase() === expectedStr.toLowerCase();
    } else if (currentQ.type === 'match_pairs') {
      correct = Object.keys(matchedPairs).length === currentQ.pairs.length;
    } else {
      // Choice / fill blank / conversation reply
      correct = !!selectedOption?.isCorrect;
    }

    setIsCorrect(correct);
    setIsAnswerChecked(true);

    if (correct) {
      soundEffects.playCorrect();
      setCorrectAnswersCount((prev) => prev + 1);
    } else {
      soundEffects.playIncorrect();
    }
  };

  // Continue to next question or complete lesson
  const handleContinue = () => {
    soundEffects.playPop();
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Lesson Complete!
      soundEffects.playFanfare();
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (e) {
        /* confetti fallback */
      }
      setIsLessonFinished(true);

      const xpEarned = lesson.xpReward || 20;
      const coinsEarned = lesson.coinReward || 10;
      completeLesson(
        lesson.id,
        xpEarned,
        coinsEarned,
        correctAnswersCount + (isCorrect ? 1 : 0),
        questions.length
      );
    }
  };

  // End of Lesson Victory Screen
  if (isLessonFinished) {
    const finalScore = correctAnswersCount;
    const accuracy = Math.round((finalScore / questions.length) * 100);

    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4 animate-fade-in">
        <div className="max-w-md w-full bg-white border-2 border-emerald-300 rounded-3xl p-6 sm:p-8 shadow-2xl text-center space-y-6">
          <Mascot mood="celebrating" size="lg" />

          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Shabash! Lesson Completed! 🎉
            </h2>
            <p className="text-sm font-semibold text-emerald-700 mt-1">
              "{lesson.title}" mein aapne shandar pradarshan kiya!
            </p>
          </div>

          {/* Rewards Grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3">
              <span className="text-[10px] font-bold uppercase text-emerald-700 block">
                XP Earned
              </span>
              <span className="text-lg font-black text-emerald-800">
                +{lesson.xpReward} XP
              </span>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3">
              <span className="text-[10px] font-bold uppercase text-amber-700 block">
                Bolo Coins
              </span>
              <span className="text-lg font-black text-amber-800 flex items-center justify-center gap-1">
                <Coins className="w-4 h-4 fill-amber-500 text-amber-600" />
                +{lesson.coinReward}
              </span>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-3">
              <span className="text-[10px] font-bold uppercase text-blue-700 block">
                Accuracy
              </span>
              <span className="text-lg font-black text-blue-800">
                {accuracy}%
              </span>
            </div>
          </div>

          {/* Regional Encouragement */}
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-700">
            <span className="font-bold text-slate-900 block">
              Gappu's Regional Note:
            </span>
            "Aapka bolne ka confidence har lesson ke sath badh raha hai!"
          </div>

          {/* Actions */}
          <button
            onClick={exitLesson}
            className="w-full py-4 rounded-2xl btn-3d-green text-white font-black text-base shadow-lg"
          >
            Aage Badhein (Continue)
          </button>
        </div>
      </div>
    );
  }

  // Get localized prompt or fallbacks
  const promptText =
    currentQ?.promptRegional?.[user?.preferredLanguage] ||
    currentQ?.promptRegional?.['hinglish'] ||
    'Sahi uttar chunein:';

  const explanationText =
    currentQ?.explanation?.[user?.preferredLanguage] ||
    currentQ?.explanation?.['hinglish'] ||
    'English bolne ke liye iska abhyas zaroor karein.';

  // Check if Check Button is Enabled
  const isCheckEnabled = () => {
    if (isAnswerChecked) return false;
    if (currentQ?.type === 'reorder_sentence') {
      return assembledWords.length > 0;
    }
    if (currentQ?.type === 'match_pairs') {
      return Object.keys(matchedPairs).length === currentQ.pairs.length;
    }
    return selectedOption !== null;
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between max-w-2xl mx-auto px-4 py-4">
      {/* Top Header: Close, Progress Bar & Hearts */}
      <div>
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={exitLesson}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex-1 h-3 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex items-center gap-1 text-rose-500 font-extrabold text-xs sm:text-sm">
            <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
            <span>5</span>
          </div>
        </div>

        {/* Question Counter Pill */}
        <div className="mt-3 flex items-center justify-between text-xs text-slate-400 font-semibold px-1">
          <span>
            Question {currentIndex + 1} of {questions.length}
          </span>
          <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">
            {currentLang.name}
          </span>
        </div>
      </div>

      {/* Main Question Container */}
      <div className="my-auto py-6 space-y-5 animate-fade-in">
        {/* Question Prompt */}
        <div className="space-y-1">
          <h3 className="text-base sm:text-xl font-extrabold text-slate-900 leading-snug">
            {promptText}
          </h3>
        </div>

        {/* English Prompt Phrase (If present) */}
        {currentQ?.englishPrompt && (
          <div className="bg-white border-2 border-emerald-100 rounded-2xl p-4 shadow-sm flex items-center justify-between gap-3">
            <div>
              <p className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                {currentQ.englishPrompt}
              </p>
              {currentQ.phonetic && (
                <p className="text-xs text-emerald-800 font-semibold mt-1">
                  Uchcharan: {currentQ.phonetic}
                </p>
              )}
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => handleAudio(currentQ.audioText || currentQ.englishPrompt)}
                title="Normal Speed"
                className="p-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-xl transition-colors"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Conversation Dialogue Bubble (If type is conversation_reply) */}
        {currentQ?.type === 'conversation_reply' && (
          <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0">
              {currentQ.speaker?.[0] || 'C'}
            </div>
            <div className="flex-1">
              <span className="text-xs font-bold text-slate-400 block mb-1">
                {currentQ.speaker} speaks:
              </span>
              <p className="text-base font-bold text-slate-900">
                "{currentQ.dialogue}"
              </p>
            </div>
            <button
              onClick={() => handleAudio(currentQ.dialogue)}
              className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-xl"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Fill in the Blanks Header */}
        {currentQ?.type === 'fill_blank' && (
          <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 shadow-sm text-center">
            <p className="text-lg font-bold text-slate-800 flex items-center justify-center flex-wrap gap-2">
              <span>{currentQ.sentenceParts[0]}</span>
              <span className="inline-block min-w-[90px] px-3 py-1 border-b-4 border-emerald-600 bg-emerald-50 text-emerald-900 font-black rounded-lg">
                {selectedOption ? selectedOption.text : '______'}
              </span>
              <span>{currentQ.sentenceParts[1]}</span>
            </p>
          </div>
        )}

        {/* Reorder Sentence Words Tray */}
        {currentQ?.type === 'reorder_sentence' && (
          <div className="space-y-4">
            {/* Target Assembly Tray */}
            <div className="min-h-[70px] bg-white border-2 border-dashed border-emerald-400 rounded-2xl p-3 flex flex-wrap items-center gap-2">
              {assembledWords.length === 0 ? (
                <span className="text-xs text-slate-400 font-semibold mx-auto">
                  Neeche diye shabdon par tap karke vakya banayein
                </span>
              ) : (
                assembledWords.map((item, idx) => (
                  <button
                    key={idx}
                    disabled={isAnswerChecked}
                    onClick={() => handleRemoveAssembledWord(idx)}
                    className="px-3.5 py-2 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-sm hover:bg-emerald-700 transition-transform active:scale-95 animate-pop"
                  >
                    {item.word}
                  </button>
                ))
              )}
            </div>

            {/* Word Bank Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {currentQ.words.map((w, wIdx) => {
                const isUsed = assembledWords.some(
                  (item) => item.originalIdx === wIdx
                );
                return (
                  <button
                    key={wIdx}
                    disabled={isUsed || isAnswerChecked}
                    onClick={() => handleWordTileClick(w, wIdx)}
                    className={`px-4 py-2.5 rounded-xl font-bold text-sm border-2 transition-all shadow-sm ${
                      isUsed
                        ? 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed'
                        : 'bg-white text-slate-800 border-slate-200 hover:border-emerald-500 hover:bg-emerald-50'
                    }`}
                  >
                    {w}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Match Pairs UI */}
        {currentQ?.type === 'match_pairs' && (
          <div className="grid grid-cols-2 gap-3">
            {/* Left English words */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                English
              </span>
              {currentQ.pairs.map((p) => {
                const isMatched = !!matchedPairs[p.english];
                const isSelected = selectedLeft?.english === p.english;

                return (
                  <button
                    key={p.english}
                    disabled={isMatched || isAnswerChecked}
                    onClick={() => handleMatchLeft(p)}
                    className={`w-full p-3 rounded-2xl border-2 text-left text-sm font-extrabold transition-all ${
                      isMatched
                        ? 'bg-emerald-100 border-emerald-400 text-emerald-800 opacity-80'
                        : isSelected
                        ? 'bg-emerald-50 border-emerald-500 shadow-md scale-102 text-emerald-900'
                        : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300'
                    }`}
                  >
                    {p.english}
                  </button>
                );
              })}
            </div>

            {/* Right Regional words */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                {currentLang.name}
              </span>
              {currentQ.pairs.map((p) => {
                const regText =
                  p.regional[user?.preferredLanguage] ||
                  p.regional['hinglish'];
                const isMatched = Object.values(matchedPairs).includes(regText);

                return (
                  <button
                    key={regText}
                    disabled={isMatched || isAnswerChecked}
                    onClick={() => handleMatchRight(regText)}
                    className={`w-full p-3 rounded-2xl border-2 text-left text-sm font-bold transition-all ${
                      isMatched
                        ? 'bg-emerald-100 border-emerald-400 text-emerald-800 opacity-80'
                        : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300'
                    }`}
                  >
                    {regText}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Standard Options (Choices) */}
        {currentQ?.options && (
          <div className="space-y-2.5">
            {currentQ.options.map((opt) => {
              const isSelected = selectedOption?.id === opt.id;
              // Format option text depending on whether text is multilingual object or simple string
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
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm'
                      : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300'
                  }`}
                >
                  <span>{optText}</span>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-600 text-white'
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

      {/* Bottom Sticky Action Footer / Feedback Drawer */}
      <div
        className={`pt-4 border-t transition-all ${
          isAnswerChecked
            ? isCorrect
              ? 'bg-emerald-50 -mx-4 px-4 pb-4 border-emerald-200 rounded-t-3xl shadow-lg'
              : 'bg-amber-50 -mx-4 px-4 pb-4 border-amber-200 rounded-t-3xl shadow-lg'
            : 'bg-transparent border-slate-200'
        }`}
      >
        {/* Instant Answer Feedback */}
        {isAnswerChecked && (
          <div className="mb-4 animate-fade-in">
            <div className="flex items-start gap-3">
              <div
                className={`p-2 rounded-2xl ${
                  isCorrect
                    ? 'bg-emerald-500 text-white'
                    : 'bg-amber-500 text-white'
                }`}
              >
                {isCorrect ? (
                  <CheckCircle2 className="w-6 h-6" />
                ) : (
                  <XCircle className="w-6 h-6" />
                )}
              </div>
              <div className="flex-1">
                <h4
                  className={`text-base font-black ${
                    isCorrect ? 'text-emerald-900' : 'text-amber-900'
                  }`}
                >
                  {isCorrect ? 'Shabash! Bilkul Sahi Jawab! 🌟' : 'Achhi koshish! Sahi uttar dekhein:'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 mt-1 font-medium leading-relaxed">
                  {explanationText}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Action Button */}
        {!isAnswerChecked ? (
          <button
            disabled={!isCheckEnabled()}
            onClick={handleCheckAnswer}
            className={`w-full py-4 rounded-2xl font-black text-base transition-all ${
              isCheckEnabled()
                ? 'btn-3d-green text-white shadow-md'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            Check Answer (Janch Karein)
          </button>
        ) : (
          <button
            onClick={handleContinue}
            className={`w-full py-4 rounded-2xl text-white font-black text-base shadow-md flex items-center justify-center gap-2 ${
              isCorrect ? 'btn-3d-green' : 'btn-3d-yellow'
            }`}
          >
            <span>Aage Badhein (Continue)</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};
