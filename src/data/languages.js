/**
 * Regional Language Configuration for Bolo English
 * Apni Bhasha Mein Seekho, Confidence Se English Bolo!
 */

export const SUPPORTED_LANGUAGES = [
  {
    id: 'hinglish',
    name: 'Hinglish',
    nativeName: 'Hinglish (हिंदी + English)',
    region: 'Pan-India Youth & Beginners',
    badge: 'Popular',
    icon: '🇮🇳',
    sampleGreeting: 'Namaste! Kaise ho aap?',
    description: 'Casual mix of Hindi and English written in simple Roman script. Great for chat users!'
  },
  {
    id: 'hindi',
    name: 'Standard Hindi',
    nativeName: 'मानक हिंदी',
    region: 'North & Central India',
    badge: 'Standard',
    icon: '🕉️',
    sampleGreeting: 'नमस्ते! आप कैसे हैं?',
    description: 'Clear, polite standard Hindi in Devanagari script for foundational learning.'
  },
  {
    id: 'haryanvi',
    name: 'Haryanvi',
    nativeName: 'हरियाणवी',
    region: 'Haryana & Delhi NCR',
    badge: 'Regional',
    icon: '🌾',
    sampleGreeting: 'राम-राम जी! के हाल-चाल से?',
    description: 'Energetic, direct and culturally rich dialect spoken across Haryana and rural NCR.'
  },
  {
    id: 'awadhi',
    name: 'Awadhi / UP Hindi',
    nativeName: 'अवधी / पूरबिया',
    region: 'Central & Eastern Uttar Pradesh',
    badge: 'Regional',
    icon: '🪔',
    sampleGreeting: 'प्रणाम! का हाल-चाल बा/है?',
    description: 'Sweet, respectful dialect spoken across Lucknow, Ayodhya, Prayagraj, and UP heartland.'
  },
  {
    id: 'bhojpuri',
    name: 'Bhojpuri',
    nativeName: 'भोजपुरी',
    region: 'Bihar, Jharkhand & Purvanchal',
    badge: 'Regional',
    icon: '🌻',
    sampleGreeting: 'प्रणाम! रउआ कइसन बानी?',
    description: 'Affectionate and widespread language of Bihar and Eastern Uttar Pradesh.'
  },
  {
    id: 'rajasthani',
    name: 'Rajasthani',
    nativeName: 'राजस्थानी (मारवाड़ी/ढूंढाड़ी)',
    region: 'Rajasthan & Marwar',
    badge: 'Regional',
    icon: '🏰',
    sampleGreeting: 'खम्मा घणी! थे कियां हो?',
    description: 'Traditional and warm language spoken across the deserts and cities of Rajasthan.'
  }
];

export const getLanguageById = (id) => {
  return SUPPORTED_LANGUAGES.find((lang) => lang.id === id) || SUPPORTED_LANGUAGES[0];
};

export const DIALECT_DISCLAIMER = 
  "Note: Regional language translations are crafted to help you grasp English patterns intuitively. Dialects naturally have wonderful variations across towns and districts. Bolo English continues to expand with community inputs!";
