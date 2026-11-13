/**
 * Speech Utilities for Bolo English
 * Text-to-Speech & Speech Recognition with transparent feedback
 */

// Text-to-Speech (TTS)
export const speakEnglish = (text, slow = false) => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return false;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-IN'; // Prefer Indian English accent if available
  utterance.rate = slow ? 0.7 : 0.95;
  utterance.pitch = 1.0;

  // Try to pick an English voice
  const voices = window.speechSynthesis.getVoices();
  const enVoice = voices.find(v => v.lang.includes('en-IN') || v.lang.includes('en-GB') || v.lang.includes('en-US'));
  if (enVoice) {
    utterance.voice = enVoice;
  }

  window.speechSynthesis.speak(utterance);
  return true;
};

// Check if browser supports speech recognition
export const isSpeechRecognitionSupported = () => {
  if (typeof window === 'undefined') return false;
  return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
};

// Create a Speech Recognition instance
export const createSpeechRecognizer = ({ onResult, onError, onEnd }) => {
  if (!isSpeechRecognitionSupported()) return null;

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-IN'; // Listen for English (India)

  recognition.onresult = (event) => {
    if (event.results && event.results[0]) {
      const transcript = event.results[0][0].transcript;
      const confidence = event.results[0][0].confidence;
      if (onResult) onResult({ transcript, confidence });
    }
  };

  recognition.onerror = (event) => {
    console.warn('Speech recognition error:', event.error);
    if (onError) onError(event.error);
  };

  recognition.onend = () => {
    if (onEnd) onEnd();
  };

  return recognition;
};

// Clean string comparison for transparent word matching
export const compareSpokenText = (expected, actual) => {
  if (!actual) return { matchPercent: 0, matchedWords: [], missingWords: [] };

  const clean = (str) =>
    str
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(Boolean);

  const expectedWords = clean(expected);
  const actualWords = clean(actual);

  const matched = [];
  const missing = [];

  expectedWords.forEach((word) => {
    if (actualWords.includes(word)) {
      matched.push(word);
    } else {
      missing.push(word);
    }
  });

  const matchPercent = Math.round((matched.length / Math.max(expectedWords.length, 1)) * 100);

  return {
    matchPercent,
    expectedWords,
    actualWords,
    matched,
    missing
  };
};
