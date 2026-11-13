/**
 * Speaking Practice Scenarios & Sentences
 * Equipped with Phonetic pronunciation (Devanagari & Roman), translations, and difficulty tiers
 */

export const SPEAKING_TOPICS = [
  {
    id: 'greetings',
    title: 'Daily Greetings & Pleasantries',
    icon: 'Smile',
    color: 'emerald',
    description: 'Master polite beginnings, asking about wellbeing, and courteous farewells.',
    sentences: [
      {
        id: 'spk-1',
        english: 'Good morning! It is wonderful to see you today.',
        phoneticDevanagari: 'गुड मॉर्निंग! इट इज़ वंडरफुल टू सी यू टुडे।',
        phoneticLatin: 'Good morning! It iz van-dar-ful to see you tu-day.',
        translations: {
          hinglish: 'Shubh prabhat! Aaj aapse milkar bahut achha laga.',
          hindi: 'शुभ प्रभात! आज आपसे मिलकर बहुत अच्छा लगा।',
          haryanvi: 'राम-राम जी! आज तन्ने देखकै बड़ा घणा जी राजी होया।',
          awadhi: 'सबेर के राम-राम! आज आपसे मिलिकै बड़ा नीक लाग।',
          bhojpuri: 'सुप्रभात! आज रउआ से भेंट क के बहुते नीक लागल।',
          rajasthani: 'प्रभात रो राम-राम सा! आज थांनै देख\'र घणो हिवड़ो हरख्यो।'
        },
        tips: 'Pronounce "wonderful" with a soft "w" sound (round your lips).'
      },
      {
        id: 'spk-2',
        english: 'Thank you for your warm hospitality and support.',
        phoneticDevanagari: 'थैंक यू फॉर योर वॉर्म हॉस्पिटैलिटी एंड सपोर्ट।',
        phoneticLatin: 'Thank you for yor warm hos-pi-tal-i-tee and sup-port.',
        translations: {
          hinglish: 'Aapke shandar aadar-satkar aur sahayata ke liye shukriya.',
          hindi: 'आपके भव्य आतिथ्य एवं सहयोग के लिए बहुत-बहुत धन्यवाद।',
          haryanvi: 'थारे इतने बढ़िया मान-सम्मान अर साथ खातिर बहुत धन्यवाद।',
          awadhi: 'तोहार खातिरदारी अउर साथे बर बहुत धन्यवाद।',
          bhojpuri: 'राउर आवभगत आ सहयोग खातिर बहुते धन्यवाद।',
          rajasthani: 'थांरी खातिरदारी अर साथ खातर घणो-घणो आभार।'
        },
        tips: 'Break "hos-pi-tal-i-ty" into four easy beats.'
      },
      {
        id: 'spk-3',
        english: 'Have a pleasant journey and take good care of yourself.',
        phoneticDevanagari: 'हैव अ प्लेज़ेंट जर्नी एंड टेक गुड केयर ऑफ़ योरसेल्फ।',
        phoneticLatin: 'Hav a plez-ent jur-nee and take good kayr of yor-self.',
        translations: {
          hinglish: 'Aapki yatra mangalmay ho aur apna poora khayal rakhein.',
          hindi: 'आपकी यात्रा सुखद हो और अपना पूरा ध्यान रखें।',
          haryanvi: 'थारा सफर सुख का कटै अर आपणा ध्यान राखियो।',
          awadhi: 'तोहार रस्ता सुख से कटै अउर अपन खयाल रख्या।',
          bhojpuri: 'राउर यात्रा सुखद होखे आ आपन पूरा धियान राखब।',
          rajasthani: 'थांरी यात्रा सुखद होवे अर आपरो पूरो ध्यान राखजो।'
        },
        tips: 'Say "pleasant" with a soft "z" sound (plez-ent).'
      }
    ]
  },
  {
    id: 'introductions',
    title: 'Self-Introduction & Confidence',
    icon: 'UserCheck',
    color: 'amber',
    description: 'Speak about your education, work, village/city, and life ambitions.',
    sentences: [
      {
        id: 'spk-4',
        english: 'I come from a beautiful town and I am eager to learn new skills.',
        phoneticDevanagari: 'आई कम फ्रॉम अ ब्यूटीफुल टाउन एंड आई एम ईगर टू लर्न न्यू स्किल्स।',
        phoneticLatin: 'I come from a byoo-ti-ful town and I am ee-ger to lern new skills.',
        translations: {
          hinglish: 'Main ek khoobsurat kasbe se hoon aur naye hunar seekhne ko utsuk hoon.',
          hindi: 'मैं एक सुंदर नगर से हूँ और नए कौशल सीखने के लिए अत्यंत उत्सुक हूँ।',
          haryanvi: 'मैं एक सुथरे गाम/शहर तै सूँ अर नया काम सीखण का पूरा चाव सै।',
          awadhi: 'हम एक सुन्नर शहर से अही अउर नवा हुनर सीखै खातिर मन करत बा।',
          bhojpuri: 'हम एगो सुंदर शहर से बानी आ नया हुनर सीखे खातिर पूरा मन बा।',
          rajasthani: 'म्हे एक सोहणे शहर सूं हां अर नवो हुनर सीखण रो घणो चाव है।'
        },
        tips: '"Eager" means keen and excited. Pronounce like "ee-ger".'
      },
      {
        id: 'spk-5',
        english: 'Practice and patience make any difficult language easy to speak.',
        phoneticDevanagari: 'प्रैक्टिस एंड पेशंस मेक एनी डिफिकल्ट लैंग्वेज ईज़ी टू स्पीक।',
        phoneticLatin: 'Prak-tis and pay-shens make eny dif-fi-cult lang-gwij ee-zee to speak.',
        translations: {
          hinglish: 'Abhyas aur sabra se koi bhi mushkil bhasha aasan ban jati hai.',
          hindi: 'अभ्यास और धैर्य से कोई भी कठिन भाषा सरल बन जाती है।',
          haryanvi: 'लगातार मेहनत अर सब्र तै कोई भी कठिन बोली आसान बण जा सै।',
          awadhi: 'अभ्यास अउर धीरज से कौनो कठिन बोली आसान होइ जात है।',
          bhojpuri: 'अभ्यास आ धैर्य से कवनों कठिन भाषा आसान बन जाला।',
          rajasthani: 'अभ्यास अर धीरज सूं कोई भी ओखी बोली सोरी बण जावे।'
        },
        tips: 'Say "patience" as "pay-shens". Stress on the first syllable.'
      }
    ]
  },
  {
    id: 'market_travel',
    title: 'Shopping, Travel & Transport',
    icon: 'ShoppingBag',
    color: 'blue',
    description: 'Inquiring ticket prices, train platform, bargaining, and digital payments.',
    sentences: [
      {
        id: 'spk-6',
        english: 'Which platform will the express train to Lucknow arrive on?',
        phoneticDevanagari: 'व्हिच प्लेटफॉर्म विल द एक्सप्रेस ट्रेन टू लखनऊ अराइव ऑन?',
        phoneticLatin: 'Which plat-form will the ex-press trayn to Lucknow a-ryve on?',
        translations: {
          hinglish: 'Lucknow jane wali express train kaun se platform par aayegi?',
          hindi: 'लखनऊ जाने वाली एक्सप्रेस गाड़ी किस प्लेटफार्म पर आएगी?',
          haryanvi: 'लखनऊ आळी एक्सप्रेस रेल कूण से प्लेटफार्म पै उतरेगी?',
          awadhi: 'लखनऊ जाय वाली एक्सप्रेस कउने प्लेटफार्म पर आई?',
          bhojpuri: 'लखनऊ जाए वाली एक्सप्रेस कवना प्लेटफार्म पर आई?',
          rajasthani: 'लखनऊ जावण वाळी एक्सप्रेस रेल कांई सो प्लेटफार्म माथै आवेला?'
        },
        tips: 'Keep the pace natural: "Which platform... will the train arrive on?"'
      },
      {
        id: 'spk-7',
        english: 'Could you please weigh two kilograms of fresh vegetables?',
        phoneticDevanagari: 'कुड यू प्लीज वे टू किलोग्राम्स ऑफ़ फ्रेश वेजिटेबल्स?',
        phoneticLatin: 'Kud you pleez way too ki-lo-grams of fresh vej-tuh-blz?',
        translations: {
          hinglish: 'Kya aap kripya do kilo taazi sabzi tol sakte hain?',
          hindi: 'क्या आप कृपया दो किलोग्राम ताज़ा सब्ज़ी तौल सकते हैं?',
          haryanvi: 'के भाई, दो किलो ताज़ा सब्जी तोल द्योगे?',
          awadhi: 'का आप कृपा कइके दुई किलो ताज़ा तरकारी तौलि सकत अहौ?',
          bhojpuri: 'का रउआ दु किलो ताजा तरकारी तौल सकेनी?',
          rajasthani: 'कांई थे दो किलो ताजी भाजी तोल सको हो सा?'
        },
        tips: 'Vegetables is pronounced "vej-tuh-blz" (3 syllables, not 4).'
      }
    ]
  }
];
