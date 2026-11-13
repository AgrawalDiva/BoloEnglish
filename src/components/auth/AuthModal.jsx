import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, User, Mail, Lock, Sparkles, CheckCircle2 } from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';

export const AuthModal = () => {
  const {
    isAuthModalOpen,
    setIsAuthModalOpen,
    loginGuest,
    updateUser,
    setActiveTab
  } = useApp();

  const [mode, setMode] = useState('signup'); // 'signup' | 'login'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'signup' && !name.trim()) {
      setError('Kripya apna naam darj karein');
      return;
    }
    if (!email.trim()) {
      setError('Kripya email ya mobile number likhein');
      return;
    }

    soundEffects.playCorrect();
    updateUser({
      name: name.trim() || 'Rahul Sharma',
      email: email.trim(),
      isLoggedIn: true,
      isOnboarded: true
    });
    setIsAuthModalOpen(false);
    setActiveTab('dashboard');
  };

  const handleGuestDemo = () => {
    soundEffects.playPop();
    loginGuest('Student Rahul', 'hinglish');
    setIsAuthModalOpen(false);
    setActiveTab('dashboard');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-emerald-50">
          <div className="flex items-center gap-2.5">
            <img src="/logo.svg" alt="Bolo English" className="w-8 h-8 rounded-lg" />
            <div>
              <h3 className="font-extrabold text-slate-900 text-base">
                {mode === 'signup' ? 'Create Your Account' : 'Welcome Back'}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Apni progress aur badges ko surakshit rakhein
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsAuthModalOpen(false)}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {/* Quick Demo Guest Button */}
          <div className="mb-5 p-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-300 rounded-2xl flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-emerald-800 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                Quick Academic Demo Mode
              </div>
              <p className="text-[11px] text-slate-600">
                1-Click instant guest access for review
              </p>
            </div>
            <button
              onClick={handleGuestDemo}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all"
            >
              Start Guest
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Aapka Naam (Your Full Name)
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setError('');
                    }}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Email / Mobile Number
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  placeholder="ramesh@gmail.com ya 9876543210"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>
            </div>

            {error && (
              <p className="text-xs text-rose-600 font-semibold">{error}</p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
            >
              {mode === 'signup' ? 'Create Account & Start' : 'Log In to Bolo English'}
            </button>
          </form>

          {/* Toggle mode */}
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => {
                setMode(mode === 'signup' ? 'login' : 'signup');
                setError('');
              }}
              className="text-xs font-bold text-emerald-700 hover:underline"
            >
              {mode === 'signup'
                ? 'Already have an account? Log In'
                : "Don't have an account? Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
