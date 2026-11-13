import React from 'react';
import { useApp } from '../../context/AppContext';
import { SUPPORTED_LANGUAGES, DIALECT_DISCLAIMER } from '../../data/languages';
import { X, Check, Globe, Info } from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';

export const LanguageModal = () => {
  const {
    isLanguageModalOpen,
    setIsLanguageModalOpen,
    user,
    setLanguage
  } = useApp();

  if (!isLanguageModalOpen) return null;

  const handleSelect = (langId) => {
    soundEffects.playPop();
    setLanguage(langId);
    setIsLanguageModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-slate-100">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-emerald-100 text-emerald-700 rounded-xl">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-slate-900">
                Choose Teaching Language
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Apni pasandida bhasha chunein
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsLanguageModalOpen(false)}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Language Grid */}
        <div className="p-6 overflow-y-auto space-y-3">
          <p className="text-xs text-slate-600 mb-2">
            Har English shabd aur vakya ka anuvad aur spashtikaran aapki chuni hui bhasha mein dikhaya jayega:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SUPPORTED_LANGUAGES.map((lang) => {
              const isSelected = user?.preferredLanguage === lang.id;
              return (
                <div
                  key={lang.id}
                  onClick={() => handleSelect(lang.id)}
                  className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'border-emerald-500 bg-emerald-50/60 shadow-sm'
                      : 'border-slate-200 hover:border-emerald-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{lang.icon}</span>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 leading-tight">
                          {lang.name}
                        </h4>
                        <span className="text-xs text-emerald-700 font-semibold">
                          {lang.nativeName}
                        </span>
                      </div>
                    </div>
                    {isSelected && (
                      <span className="p-1 bg-emerald-500 text-white rounded-full">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>

                  {/* Sample Greeting */}
                  <div className="mt-2.5 pt-2 border-t border-slate-100">
                    <p className="text-[11px] text-slate-500 italic">
                      "{lang.sampleGreeting}"
                    </p>
                    <span className="inline-block mt-1 text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-medium">
                      {lang.region}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dialect disclaimer note */}
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-2.5 text-xs text-amber-900 leading-relaxed">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p>{DIALECT_DISCLAIMER}</p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={() => setIsLanguageModalOpen(false)}
            className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-colors"
          >
            Confirm & Save
          </button>
        </div>
      </div>
    </div>
  );
};
