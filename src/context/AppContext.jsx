import React, { createContext, useContext, useState, useEffect } from 'react';
import { soundEffects } from '../utils/soundEffects';

const AppContext = createContext();

const STORAGE_KEY = 'bolo_english_state_v1';

const DEFAULT_STATE = {
  user: {
    name: 'Seekhak',
    ageGroup: 'college',
    preferredLanguage: 'hinglish',
    level: 'Beginner',
    dailyGoalMinutes: 10,
    isLoggedIn: false,
    isOnboarded: false,
    joinedDate: new Date().toISOString()
  },
  xp: 35,
  coins: 60,
  streak: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  completedLessons: [],
  lessonScores: {},
  hearts: 5,
  soundEnabled: true,
  speakingPracticeCount: 0,
  dailyChallengeCompleted: false,
  dailyChallengeDate: '',
  unlockedStoreItems: [],
  totalQuestionsAnswered: 0,
  correctQuestionsAnswered: 0
};

export const AppProvider = ({ children }) => {
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_STATE, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn('Failed to load local storage state:', e);
    }
    return DEFAULT_STATE;
  });

  const [activeTab, setActiveTab] = useState('welcome'); // 'welcome' | 'dashboard' | 'learn' | 'practice' | 'daily' | 'rewards' | 'profile' | 'lesson'
  const [currentLessonMeta, setCurrentLessonMeta] = useState(null); // { moduleId, lessonId }
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Sync to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Failed to save to local storage:', e);
    }
  }, [state]);

  // Keep sound player synced with state
  useEffect(() => {
    soundEffects.setMuted(!state.soundEnabled);
  }, [state.soundEnabled]);

  // If user is already onboarded, default tab should be dashboard
  useEffect(() => {
    if (state.user?.isOnboarded && activeTab === 'welcome') {
      setActiveTab('dashboard');
    }
  }, [state.user?.isOnboarded]);

  // Streak verification on load
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const lastDate = state.lastActiveDate;

    if (lastDate && lastDate !== today) {
      const diffDays = Math.round((new Date(today) - new Date(lastDate)) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        // Consecutive day
        setState(prev => ({ ...prev, streak: prev.streak + 1, lastActiveDate: today }));
      } else if (diffDays > 1) {
        // Broken streak unless streak-freeze is possessed
        const hasFreeze = state.unlockedStoreItems.includes('streak-freeze');
        if (hasFreeze) {
          // Consume streak freeze
          setState(prev => ({
            ...prev,
            lastActiveDate: today,
            unlockedStoreItems: prev.unlockedStoreItems.filter(item => item !== 'streak-freeze')
          }));
        } else {
          // Reset streak to 1
          setState(prev => ({ ...prev, streak: 1, lastActiveDate: today }));
        }
      }
    }
  }, []);

  // Update user profile
  const updateUser = (updates) => {
    setState(prev => ({
      ...prev,
      user: { ...prev.user, ...updates }
    }));
  };

  // Set Language
  const setLanguage = (langId) => {
    updateUser({ preferredLanguage: langId });
  };

  // Toggle Sound
  const toggleSound = () => {
    setState(prev => {
      const next = !prev.soundEnabled;
      soundEffects.setMuted(!next);
      return { ...prev, soundEnabled: next };
    });
  };

  // Add XP
  const addXP = (amount) => {
    setState(prev => ({ ...prev, xp: prev.xp + amount }));
  };

  // Add Coins
  const addCoins = (amount) => {
    setState(prev => ({ ...prev, coins: prev.coins + amount }));
  };

  // Complete a lesson
  const completeLesson = (lessonId, xpEarned, coinsEarned, correctCount, totalCount) => {
    setState(prev => {
      const alreadyCompleted = prev.completedLessons.includes(lessonId);
      const newCompleted = alreadyCompleted ? prev.completedLessons : [...prev.completedLessons, lessonId];
      return {
        ...prev,
        xp: prev.xp + xpEarned,
        coins: prev.coins + coinsEarned,
        completedLessons: newCompleted,
        lessonScores: {
          ...prev.lessonScores,
          [lessonId]: {
            correct: correctCount,
            total: totalCount,
            date: new Date().toISOString()
          }
        },
        totalQuestionsAnswered: prev.totalQuestionsAnswered + totalCount,
        correctQuestionsAnswered: prev.correctQuestionsAnswered + correctCount
      };
    });
  };

  // Record speaking practice
  const recordSpeakingPractice = () => {
    setState(prev => ({
      ...prev,
      speakingPracticeCount: (prev.speakingPracticeCount || 0) + 1,
      xp: prev.xp + 10,
      coins: prev.coins + 5
    }));
  };

  // Complete Daily Challenge
  const completeDailyChallenge = (bonusXP, bonusCoins) => {
    const today = new Date().toISOString().split('T')[0];
    setState(prev => ({
      ...prev,
      xp: prev.xp + bonusXP,
      coins: prev.coins + bonusCoins,
      dailyChallengeCompleted: true,
      dailyChallengeDate: today
    }));
  };

  // Buy store item
  const buyStoreItem = (item) => {
    if (state.coins < item.cost) {
      return { success: false, message: 'Not enough Bolo coins!' };
    }
    setState(prev => ({
      ...prev,
      coins: prev.coins - item.cost,
      unlockedStoreItems: [...prev.unlockedStoreItems, item.id]
    }));
    return { success: true, message: `Unlocked ${item.title}!` };
  };

  // Start a lesson
  const startLesson = (moduleId, lessonId) => {
    soundEffects.playPop();
    setCurrentLessonMeta({ moduleId, lessonId });
    setActiveTab('lesson');
  };

  // Exit lesson back to learn
  const exitLesson = () => {
    setCurrentLessonMeta(null);
    setActiveTab('learn');
  };

  // Quick Demo Guest Login
  const loginGuest = (guestName = 'Rahul Sharma', preferredLanguage = 'hinglish') => {
    setState(prev => ({
      ...prev,
      user: {
        ...prev.user,
        name: guestName,
        preferredLanguage,
        isLoggedIn: true,
        isOnboarded: true
      }
    }));
    setActiveTab('dashboard');
  };

  // Reset Progress
  const resetProgress = () => {
    localStorage.removeItem(STORAGE_KEY);
    setState(DEFAULT_STATE);
    setActiveTab('welcome');
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        activeTab,
        setActiveTab,
        currentLessonMeta,
        isLanguageModalOpen,
        setIsLanguageModalOpen,
        isAuthModalOpen,
        setIsAuthModalOpen,
        updateUser,
        setLanguage,
        toggleSound,
        addXP,
        addCoins,
        completeLesson,
        recordSpeakingPractice,
        completeDailyChallenge,
        buyStoreItem,
        startLesson,
        exitLesson,
        loginGuest,
        resetProgress
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
