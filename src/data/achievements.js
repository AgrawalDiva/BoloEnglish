/**
 * Gamification Data: Badges, Learning Levels, and Bolo Coin Store
 */

export const BADGES = [
  {
    id: 'badge-first-lesson',
    title: 'First Step (पहला कदम)',
    description: 'Completed your very first English lesson on Bolo English.',
    icon: 'Sparkles',
    color: 'emerald',
    condition: (state) => (state.completedLessons?.length || 0) >= 1
  },
  {
    id: 'badge-100-xp',
    title: '100 XP Club',
    description: 'Earned 100 or more experience points through hard work.',
    icon: 'Award',
    color: 'amber',
    condition: (state) => (state.xp || 0) >= 100
  },
  {
    id: 'badge-3-streak',
    title: '3-Day Fire Streak',
    description: 'Maintained your learning consistency for 3 days.',
    icon: 'Flame',
    color: 'orange',
    condition: (state) => (state.streak || 0) >= 3
  },
  {
    id: 'badge-vocab-master',
    title: 'Vocabulary Master',
    description: 'Completed Module 1: Basic English Vocabulary.',
    icon: 'BookOpen',
    color: 'blue',
    condition: (state) => (state.completedLessons || []).some(id => id.startsWith('m1-'))
  },
  {
    id: 'badge-grammar-explorer',
    title: 'Grammar Explorer',
    description: 'Completed Module 3: English Grammar.',
    icon: 'Layers',
    color: 'violet',
    condition: (state) => (state.completedLessons || []).some(id => id.startsWith('m3-'))
  },
  {
    id: 'badge-speaking-star',
    title: 'Bolo Star (बोलने का दम)',
    description: 'Practiced speaking with the microphone.',
    icon: 'Mic',
    color: 'rose',
    condition: (state) => (state.speakingPracticeCount || 0) >= 1
  },
  {
    id: 'badge-daily-champion',
    title: 'Daily Champion',
    description: 'Successfully finished a Daily Rapid Fire Challenge.',
    icon: 'Zap',
    color: 'yellow',
    condition: (state) => !!state.dailyChallengeCompleted
  }
];

export const LEARNING_LEVELS = [
  { level: 1, name: 'Aarambh (आरंभ - Beginner)', minXP: 0, maxXP: 100, title: 'English Explorer' },
  { level: 2, name: 'Seekhak (सीखक - Learner)', minXP: 100, maxXP: 250, title: 'Sentence Builder' },
  { level: 3, name: 'Boli (बोली - Speaker)', minXP: 250, maxXP: 500, title: 'Active Conversationalist' },
  { level: 4, name: 'Pravah (प्रवाह - Fluent)', minXP: 500, maxXP: 1000, title: 'Confident Speaker' },
  { level: 5, name: 'Ustaad (उस्ताद - Master)', minXP: 1000, maxXP: 99999, title: 'English Champion' }
];

export const getCurrentLevel = (xp) => {
  for (let i = LEARNING_LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEARNING_LEVELS[i].minXP) {
      return LEARNING_LEVELS[i];
    }
  }
  return LEARNING_LEVELS[0];
};

export const REWARDS_STORE = [
  {
    id: 'streak-freeze',
    title: 'Streak Freeze (सुरक्षा कवच)',
    description: 'Protects your streak if you miss practicing for one day.',
    cost: 50,
    icon: 'Shield',
    color: 'sky'
  },
  {
    id: 'double-xp',
    title: '2x Double XP Boost (2 घंटे)',
    description: 'Earn 2x XP for the next 2 hours of learning.',
    cost: 80,
    icon: 'Zap',
    color: 'amber'
  },
  {
    id: 'mascot-cap',
    title: 'Gappu Festive Pagdi / Cap',
    description: 'Adorn teacher Gappu with a special festive celebratory turban.',
    cost: 120,
    icon: 'Crown',
    color: 'rose'
  },
  {
    id: 'certificate-unlock',
    title: 'Bolo English Academic Certificate',
    description: 'Unlock and download your verified Certificate of Achievement with your name.',
    cost: 150,
    icon: 'Award',
    color: 'emerald'
  }
];
