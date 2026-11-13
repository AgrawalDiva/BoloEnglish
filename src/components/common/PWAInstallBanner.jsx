import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone } from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';

export const PWAInstallBanner = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleBeforeInstall = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      if (!isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    // Also check standalone mode
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (isStandalone) {
      setIsVisible(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, [isDismissed]);

  const handleInstallClick = async () => {
    soundEffects.playPop();
    if (!deferredPrompt) {
      // Fallback instruction for iOS or unsupported
      alert("To install Bolo English on your device: Tap the Share / Menu icon and select 'Add to Home Screen'!");
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsVisible(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-4 py-2.5 shadow-md flex items-center justify-between gap-3 text-xs sm:text-sm">
      <div className="flex items-center gap-2.5">
        <div className="p-1.5 bg-white/20 rounded-xl">
          <Smartphone className="w-4 h-4" />
        </div>
        <div>
          <span className="font-extrabold">Bolo English App Install Karein!</span>
          <span className="hidden sm:inline text-white/90 ml-1">
            — Bina internet bhi chalegi, fast & easy.
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={handleInstallClick}
          className="flex items-center gap-1.5 bg-white text-emerald-800 font-bold px-3 py-1 rounded-xl shadow-sm hover:bg-emerald-50 transition-colors text-xs"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Install Now</span>
        </button>
        <button
          onClick={handleDismiss}
          className="p-1 text-white/70 hover:text-white rounded-lg transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
