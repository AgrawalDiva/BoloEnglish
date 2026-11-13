/**
 * Daily Challenge Questions & Bonus Settings
 * 5 Rapid-fire questions refreshed daily
 */

export const DAILY_CHALLENGE = {
  id: 'daily-today',
  date: new Date().toISOString().split('T')[0],
  title: "Today's Rapid Fire Challenge",
  subtitle: "5 Sawal, 50 Bonus XP aur 25 Bolo Coins!",
  totalQuestions: 5,
  bonusXP: 50,
  bonusCoins: 25,
  questions: [
    {
      id: 'dc-1',
      type: 'choice_english_to_regional',
      englishPrompt: 'Believe in your dreams.',
      audioText: 'Believe in your dreams.',
      phonetic: 'बिलीव इन योर ड्रीम्स',
      promptRegional: {
        hinglish: 'Iska sahi matlab kya hai?',
        hindi: 'इसका सही अर्थ क्या है?',
        haryanvi: 'इसका ठीक मतलब के सै?',
        awadhi: 'एकर सही मतलब का होई?',
        bhojpuri: 'एकर सही मतलब का होई?',
        rajasthani: 'इणरो सही मतलब कांई है?'
      },
      options: [
        {
          id: 'opt1',
          text: {
            hinglish: 'Apne sapno par vishwas rakho.',
            hindi: 'अपने सपनों और लक्ष्यों पर विश्वास रखो।',
            haryanvi: 'आपणे सुपने पै पूरा भरोसा राखो।',
            awadhi: 'अपन सपनन पर भरोसा रखा।',
            bhojpuri: 'आपन सपना पर पूरा बिस्वास राखीं।',
            rajasthani: 'आपरा सुपना माथै पूरो भरोसो राखो।'
          },
          isCorrect: true
        },
        {
          id: 'opt2',
          text: {
            hinglish: 'Pani mat piyo.',
            hindi: 'पानी मत पियो।',
            haryanvi: 'पाणी ना पीओ।',
            awadhi: 'पानी जिन पिआ।',
            bhojpuri: 'पानी मत पीईं।',
            rajasthani: 'पाणी मत पिवो।'
          },
          isCorrect: false
        }
      ],
      explanation: {
        hinglish: '"Believe" = Vishwas rakhna, "Dreams" = Sapne.',
        hindi: 'Believe का अर्थ विश्वास रखना और Dreams का अर्थ सपने/अभिलाषाएँ होता है।',
        haryanvi: 'Believe मतलब भरोसा, Dreams मतलब सपने।',
        awadhi: 'Believe माने भरोसा, Dreams माने सपना।',
        bhojpuri: 'Believe माने बिस्वास, Dreams माने सपना।',
        rajasthani: 'Believe मतलब भरोसो, Dreams मतलब सुपना।'
      }
    },
    {
      id: 'dc-2',
      type: 'fill_blank',
      sentenceParts: ['Every morning, the sun ', ' in the east.'],
      blankIndex: 1,
      audioText: 'Every morning, the sun rises in the east.',
      promptRegional: {
        hinglish: 'Universal Truth (Suraj purva se nikalta hai):',
        hindi: 'सार्वभौमिक सत्य के लिए सही क्रिया चुनें (सूर्य पूर्व में उगता है):',
        haryanvi: 'खाली जगह भरो (सूरज पूरब तै निकळै सै):',
        awadhi: 'खाली जगह भरा (सूरुज पूरब से उगत हैं):',
        bhojpuri: 'खाली जगह भरीं (सुरुज पूरब से उगेला):',
        rajasthani: 'खाली जगह भरो (सूरज पूरब सूं उगे है):'
      },
      options: [
        { id: 'opt1', text: 'rises', isCorrect: true },
        { id: 'opt2', text: 'swims', isCorrect: false },
        { id: 'opt3', text: 'dances', isCorrect: false }
      ],
      explanation: {
        hinglish: 'Suraj ek vachan (Singular) hai isliye "rises" aayega.',
        hindi: 'The sun एकवचन कर्ता है, अतः Present Simple में "rises" लगेगा।',
        haryanvi: 'The sun एकवचन हुवण तै "rises" लागेगा।',
        awadhi: 'The sun एकवचन है एहसे "rises" लागि।',
        bhojpuri: 'The sun एकवचन बा एहि से "rises" लागी।',
        rajasthani: 'The sun एकवचन है इण वास्ते "rises" लागसी।'
      }
    },
    {
      id: 'dc-3',
      type: 'reorder_sentence',
      correctSentence: 'Honesty is the best policy',
      words: ['policy', 'the', 'Honesty', 'is', 'best'],
      audioText: 'Honesty is the best policy',
      promptRegional: {
        hinglish: 'Prashiddh kahawat ko sajayein (Imandari sabse acchi neeti hai):',
        hindi: 'प्रसिद्ध सूक्ति को व्यवस्थित करें (ईमानदारी सर्वोत्तम नीति है):',
        haryanvi: 'जमाओ (ईमानदारी सब तै बढ़िया राह सै):',
        awadhi: 'सजावा (ईमानदारी सबसे नीक रस्ता अहई):',
        bhojpuri: 'सजाईं (ईमानदारी सबले बढ़िया नीति ह):',
        rajasthani: 'जमाओ (ईमानदारी सबसे चोखो रस्तो है):'
      },
      explanation: {
        hinglish: 'Honesty (Imandari) + is the best policy (sabse acchi neeti hai).',
        hindi: 'यह विश्व प्रसिद्ध नीति-वाक्य है।',
        haryanvi: 'ईमानदारी की सीख देण खातिर या कहावत बोलैं।',
        awadhi: 'ईमानदारी सबसे बड़ी ताकत है।',
        bhojpuri: 'ईमानदारी सबले बड़का पूंजी ह।',
        rajasthani: 'ईमानदारी सबसे मोटी कमाई है।'
      }
    },
    {
      id: 'dc-4',
      type: 'choice_regional_to_english',
      promptRegional: {
        hinglish: '"Koshish karte raho aur kabhi haar mat maano" ko English mein kya kehte hain?',
        hindi: '"प्रयास करते रहो और कभी हार मत मानो" को अंग्रेज़ी में क्या कहते हैं?',
        haryanvi: '"लागे रहो, कदे हिम्मत मत हारो" नै English म के बोलैंगे?',
        awadhi: '"मेहनत करत रहा अउर हिम्मत जिन हारा" के English में का कहब?',
        bhojpuri: '"कोशिश करत रहीं आ कब्बो हिम्मत मत हारीं" के अंग्रेजी में का कहल जाई?',
        rajasthani: '"लाग्या रहो, कदी हिम्मत मत हारो" नै English में कांई कहवे?'
      },
      audioText: 'Keep trying and never give up.',
      phonetic: 'कीप ट्राइंग एंड नेवर गिव अप',
      options: [
        { id: 'opt1', text: 'Keep trying and never give up.', isCorrect: true },
        { id: 'opt2', text: 'Throw the ball away.', isCorrect: false },
        { id: 'opt3', text: 'Close your computer.', isCorrect: false }
      ],
      explanation: {
        hinglish: '"Never give up" ka matlab hota hai kabhi haar mat maano.',
        hindi: 'Give up का अर्थ हार मानना होता है; Never give up अर्थात कभी पराजय स्वीकार न करें।',
        haryanvi: '"Never give up" मतलब हिम्मत नहीं हारणा।',
        awadhi: '"Never give up" माने कौनो हाल में हिम्मत नाहीं हारब।',
        bhojpuri: '"Never give up" माने कब्बो हिम्मत ना हारे के।',
        rajasthani: '"Never give up" मतलब कदी भी हार नी मानणी।'
      }
    },
    {
      id: 'dc-5',
      type: 'conversation_reply',
      speaker: 'Teacher',
      dialogue: 'You have worked really hard today! Congratulations on finishing your challenge!',
      audioText: 'You have worked really hard today! Congratulations on finishing your challenge!',
      promptRegional: {
        hinglish: 'Teacher ne aapki tareef ki. Sahi vinamra uttar kya hoga?',
        hindi: 'शिक्षक ने आपकी प्रशंसा की। उपयुक्त विनम्र उत्तर चुनें:',
        haryanvi: 'मास्टर जी नै शाबाशी दी। ठीक जवाब के द्योगे?',
        awadhi: 'गुरूजी तोहार बड़ाई करिन। सही जवाब का होई?',
        bhojpuri: 'गुरूजी राउर तारीफ कइलन। सही जबाब का होई?',
        rajasthani: 'गुरुजी शाबाशी दीनी। सही उत्तर कांई देवोला?'
      },
      options: [
        { id: 'opt1', text: 'Thank you very much, teacher! I will keep practicing.', isCorrect: true },
        { id: 'opt2', text: 'I am going to sleep forever.', isCorrect: false },
        { id: 'opt3', text: 'Who asked you?', isCorrect: false }
      ],
      explanation: {
        hinglish: 'Tareef ke badle dhanyawad aur aage seekhne ka sankalp vyakt karein.',
        hindi: 'प्रशंसा के उत्तर में सदैव कृतज्ञता और निरंतर अभ्यास का संकल्प प्रकट करें।',
        haryanvi: 'शाबाशी पै हाथ जोड़कै धन्यवाद कहना सुथरा सलीका सै।',
        awadhi: 'बड़ाई पर धन्यवाद कहब अउर आगे बढ़ै के बात कहब नीक है।',
        bhojpuri: 'तारीफ पर आभार आ आगे बढ़े के उत्साह देखावल चाहीं।',
        rajasthani: 'मान-सम्मान माथै आभार प्रकट कर\'र आगे बढ़णो चोखो सलीको है।'
      }
    }
  ]
};
