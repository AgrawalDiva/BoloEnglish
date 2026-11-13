import React, { useState } from 'react';
import { useApp } from './context/AppContext';
import { Header } from './components/common/Header';
import { Sidebar } from './components/common/Sidebar';
import { BottomNav } from './components/common/BottomNav';
import { PWAInstallBanner } from './components/common/PWAInstallBanner';
import { LanguageModal } from './components/common/LanguageModal';
import { AuthModal } from './components/auth/AuthModal';

// Pages
import { WelcomePage } from './components/pages/WelcomePage';
import { OnboardingFlow } from './components/pages/OnboardingFlow';
import { Dashboard } from './components/pages/Dashboard';
import { LessonView } from './components/pages/LessonView';
import { SpeakingPractice } from './components/pages/SpeakingPractice';
import { DailyChallengeView } from './components/pages/DailyChallengeView';
import { RewardsView } from './components/pages/RewardsView';
import { ProfileView } from './components/pages/ProfileView';

export function App() {
  const { user, activeTab, setActiveTab } = useApp();
  const [isOnboardingActive, setIsOnboardingActive] = useState(false);

  // If user is not onboarded and onboarding isn't triggered, show Welcome landing page
  if (!user?.isOnboarded && !isOnboardingActive) {
    return (
      <>
        <WelcomePage onGetStarted={() => setIsOnboardingActive(true)} />
        <AuthModal />
      </>
    );
  }

  // If onboarding is triggered
  if (isOnboardingActive && !user?.isOnboarded) {
    return (
      <OnboardingFlow
        onComplete={() => {
          setIsOnboardingActive(false);
          setActiveTab('dashboard');
        }}
      />
    );
  }

  // If currently in a lesson, render focused Lesson View
  if (activeTab === 'lesson') {
    return (
      <main className="min-h-screen bg-slate-50">
        <LessonView />
      </main>
    );
  }

  // Main Application Shell
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col">
      {/* PWA Install Notification */}
      <PWAInstallBanner />

      {/* Main Top Header */}
      <Header />

      {/* App Body Container: Sidebar + Main Content View */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex">
        {/* Desktop Sidebar Navigation */}
        <Sidebar />

        {/* Dynamic Main View Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {activeTab === 'dashboard' && <Dashboard viewMode="overview" />}
          {activeTab === 'learn' && <Dashboard viewMode="curriculum" />}
          {activeTab === 'practice' && <SpeakingPractice />}
          {activeTab === 'daily' && <DailyChallengeView />}
          {activeTab === 'rewards' && <RewardsView />}
          {activeTab === 'profile' && <ProfileView />}
        </main>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <BottomNav />

      {/* Modals */}
      <LanguageModal />
      <AuthModal />
    </div>
  );
}

export default App;
