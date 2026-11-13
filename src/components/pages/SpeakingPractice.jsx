import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { SPEAKING_TOPICS } from '../../data/speakingData';
import { getLanguageById } from '../../data/languages';
import { Mascot } from '../common/Mascot';
import { soundEffects } from '../../utils/soundEffects';
import {
  speakEnglish,
  isSpeechRecognitionSupported,
  createSpeechRecognizer,
  compareSpokenText
} from '../../utils/speechHelper';
import {
  Mic,
  MicOff,
  Volume2,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Award,
  ChevronRight,
  Turtle,
  Check
} from 'lucide-react';

export const SpeakingPractice = () => {
  const { user, recordSpeakingPractice } = useApp();
  const currentLang = getLanguageById(user?.preferredLanguage);

  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const [activeSentenceIndex, setActiveSentenceIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [speechResult, setSpeechResult] = useState(null);
  const [recognitionError, setRecognitionError] = useState(null);
  const [hasPracticed, setHasPracticed] = useState(false);

  const recognizerRef = useRef(null);
  const currentTopic = SPEAKING_TOPICS[activeTopicIndex] || SPEAKING_TOPICS[0];
  const currentSentence =
    currentTopic.sentences[activeSentenceIndex] || currentTopic.sentences[0];

  const hasBrowserSupport = isSpeechRecognitionSupported();

  // Reset results on sentence change
  useEffect(() => {
    setSpeechResult(null);
    setRecognitionError(null);
    setHasPracticed(false);
    if (isRecording && recognizerRef.current) {
      recognizerRef.current.abort();
      setIsRecording(false);
    }
  }, [activeTopicIndex, activeSentenceIndex]);

  const handleListen = (slow = false) => {
    soundEffects.playPop();
    speakEnglish(currentSentence.english, slow);
  };

  const startMicRecording = () => {
    soundEffects.playPop();
    setSpeechResult(null);
    setRecognitionError(null);

    if (!hasBrowserSupport) {
      setRecognitionError(
        'Speech recognition is not supported in this browser. Please use Chrome/Edge or practice reading aloud using the phonetic guide below.'
      );
      return;
    }

    try {
      const recognizer = createSpeechRecognizer({
        onResult: ({ transcript, confidence }) => {
          setIsRecording(false);
          const evaluation = compareSpokenText(currentSentence.english, transcript);
          setSpeechResult({
            transcript,
            confidence,
            ...evaluation
          });

          if (evaluation.matchPercent >= 60) {
            soundEffects.playCorrect();
            setHasPracticed(true);
            recordSpeakingPractice();
          } else {
            soundEffects.playPop();
          }
        },
        onError: (err) => {
          setIsRecording(false);
          console.warn('Speech error:', err);
          if (err === 'not-allowed') {
            setRecognitionError(
              'Microphone permission was denied. Please allow microphone access in your browser address bar.'
            );
          } else if (err === 'no-speech') {
            setRecognitionError(
              'Koi aawaz nahi suni gayi. Kripya mike ke paas hokar dobara bolein.'
            );
          } else {
            setRecognitionError(
              `Speech recognition error (${err}). You can still practice reading aloud!`
            );
          }
        },
        onEnd: () => {
          setIsRecording(false);
        }
      });

      recognizerRef.current = recognizer;
      recognizer.start();
      setIsRecording(true);
    } catch (e) {
      setIsRecording(false);
      setRecognitionError('Could not start microphone: ' + e.message);
    }
  };

  const stopMicRecording = () => {
    soundEffects.playPop();
    if (recognizerRef.current) {
      recognizerRef.current.stop();
    }
    setIsRecording(false);
  };

  // Manual fallback practice logger
  const handleManualPracticeLogged = () => {
    soundEffects.playCorrect();
    setHasPracticed(true);
    recordSpeakingPractice();
  };

  const localizedTranslation =
    currentSentence.translations?.[user?.preferredLanguage] ||
    currentSentence.translations?.['hinglish'] ||
    '';

  return (
    <div className="space-y-6 pb-16 max-w-4xl mx-auto">
      {/* Speaking Room Header */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="space-y-1 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
            <Mic className="w-3.5 h-3.5 text-emerald-600" />
            <span>Spoken English Practice Room</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Mike Se Boliye, Aatmbishwas Badhayein
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            English sunein, uchcharan dekhein aur bolkar practice karein.
          </p>
        </div>

        <Mascot mood="speaking" size="md" />
      </div>

      {/* Topic Switcher Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {SPEAKING_TOPICS.map((topic, tIdx) => (
          <button
            key={topic.id}
            onClick={() => {
              soundEffects.playPop();
              setActiveTopicIndex(tIdx);
              setActiveSentenceIndex(0);
            }}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTopicIndex === tIdx
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <span>{topic.title}</span>
          </button>
        ))}
      </div>

      {/* Main Speaking Studio Card */}
      <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        {/* Sentence Selection Tracker */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Sentence {activeSentenceIndex + 1} of {currentTopic.sentences.length}
          </span>
          <div className="flex items-center gap-1.5">
            {currentTopic.sentences.map((_, sIdx) => (
              <button
                key={sIdx}
                onClick={() => setActiveSentenceIndex(sIdx)}
                className={`w-7 h-7 rounded-xl text-xs font-extrabold transition-all ${
                  activeSentenceIndex === sIdx
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {sIdx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* English Sentence Display */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
              Speak This Sentence
            </span>

            {/* Audio Listen Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleListen(false)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs transition-colors"
                title="Normal Speed Audio"
              >
                <Volume2 className="w-4 h-4" />
                <span>Listen Normal</span>
              </button>
              <button
                onClick={() => handleListen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-700 font-bold text-xs transition-colors"
                title="Slow Speed Audio"
              >
                <Turtle className="w-4 h-4" />
                <span>Slow</span>
              </button>
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
            "{currentSentence.english}"
          </h3>

          {/* Phonetic Pronunciation Guides */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Hindi / Devanagari Uchcharan (How to pronounce):
              </span>
              <p className="text-sm sm:text-base font-bold text-slate-800">
                {currentSentence.phoneticDevanagari}
              </p>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Matlab ({currentLang.name}):
              </span>
              <p className="text-sm font-semibold text-emerald-800">
                "{localizedTranslation}"
              </p>
            </div>
            {currentSentence.tips && (
              <p className="text-xs text-amber-800 italic pt-1 border-t border-slate-200">
                💡 Tip: {currentSentence.tips}
              </p>
            )}
          </div>
        </div>

        {/* Microphone Action Zone */}
        <div className="flex flex-col items-center justify-center pt-2 space-y-4">
          <div className="relative">
            {isRecording && (
              <div className="absolute inset-0 rounded-full bg-rose-500 animate-ping opacity-40" />
            )}
            <button
              onClick={isRecording ? stopMicRecording : startMicRecording}
              className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex flex-col items-center justify-center transition-all shadow-xl active:scale-95 z-10 relative ${
                isRecording
                  ? 'bg-rose-600 text-white shadow-rose-200'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200'
              }`}
            >
              {isRecording ? (
                <>
                  <MicOff className="w-8 h-8" />
                  <span className="text-[10px] font-bold uppercase tracking-wider mt-1">
                    Stop
                  </span>
                </>
              ) : (
                <>
                  <Mic className="w-8 h-8" />
                  <span className="text-[10px] font-bold uppercase tracking-wider mt-1">
                    Tap to Speak
                  </span>
                </>
              )}
            </button>
          </div>

          <p className="text-xs font-semibold text-slate-500 text-center max-w-sm">
            {isRecording
              ? '🔴 Sun raha hoon... English vakya saaf aawaz mein bolein!'
              : 'Button dabayein aur mike ke paas English mein bolein.'}
          </p>

          {/* Browser Support / Error Notices */}
          {recognitionError && (
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-2.5 text-xs text-amber-900 max-w-md w-full">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p>{recognitionError}</p>
                <button
                  onClick={handleManualPracticeLogged}
                  className="mt-2 text-xs font-bold text-amber-800 underline hover:text-amber-900"
                >
                  Maine zabaan se bolkar padh liya (+10 XP)
                </button>
              </div>
            </div>
          )}

          {/* Speech Recognition Results (Transparent evaluation) */}
          {speechResult && (
            <div className="w-full bg-slate-50 border-2 border-emerald-200 rounded-2xl p-4 space-y-3 animate-fade-in">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Speech Recognition Feedback
                </span>
                <span
                  className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full ${
                    speechResult.matchPercent >= 60
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  Word Match: {speechResult.matchPercent}%
                </span>
              </div>

              <div>
                <span className="text-xs text-slate-500 block">Browser heard:</span>
                <p className="text-base font-bold text-slate-900">
                  "{speechResult.transcript}"
                </p>
              </div>

              {/* Transparent Word Comparison */}
              <div className="text-xs space-y-1">
                <p className="text-slate-600">
                  <span className="font-bold text-emerald-700">Matched Words:</span>{' '}
                  {speechResult.matched.length > 0
                    ? speechResult.matched.join(', ')
                    : 'Koi shabd match nahi hua'}
                </p>
                {speechResult.missing.length > 0 && (
                  <p className="text-slate-600">
                    <span className="font-bold text-amber-700">Missing / Unclear:</span>{' '}
                    {speechResult.missing.join(', ')}
                  </p>
                )}
              </div>

              <div className="text-[11px] text-slate-400 italic">
                * Note: Speech is recognized using browser native speech processing. Pronunciation is evaluated by word recognition accuracy.
              </div>
            </div>
          )}

          {/* Success confirmation */}
          {hasPracticed && (
            <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-2xl text-xs font-bold text-emerald-800 flex items-center gap-2 animate-bounce-slight">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Shabash! Speaking practice logged (+10 XP, +5 Bolo Coins)!</span>
            </div>
          )}
        </div>

        {/* Next Sentence Navigation */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <button
            disabled={activeSentenceIndex === 0}
            onClick={() => setActiveSentenceIndex((prev) => prev - 1)}
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 disabled:opacity-40"
          >
            Pichhla Vakya
          </button>

          <button
            disabled={activeSentenceIndex + 1 >= currentTopic.sentences.length}
            onClick={() => setActiveSentenceIndex((prev) => prev + 1)}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold transition-colors disabled:opacity-40"
          >
            <span>Agla Vakya</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
