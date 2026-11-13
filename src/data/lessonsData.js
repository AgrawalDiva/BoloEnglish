/**
 * Bolo English - Comprehensive Lesson Curriculum
 * 8 Modules with Multi-Question Types and 6 Regional Language Adaptations
 */

export const MODULES_DATA = [
  {
    id: 'module-1',
    number: 1,
    title: 'Basic English Vocabulary',
    subtitle: 'Rozmarra ke ahem shabd aur unka uchcharan',
    icon: 'BookOpen',
    color: 'emerald',
    description: 'Learn foundational English words: greetings, family members, numbers, and daily items.',
    totalLessons: 3,
    lessons: [
      {
        id: 'm1-l1',
        moduleId: 'module-1',
        title: 'Greetings & Goodbyes',
        description: 'Pehli baar milne par kya bolein',
        xpReward: 20,
        coinReward: 10,
        questions: [
          {
            id: 'q1',
            type: 'choice_english_to_regional',
            englishPrompt: 'Hello! How are you?',
            audioText: 'Hello! How are you?',
            phonetic: 'हेलो! हाउ आर यू?',
            promptRegional: {
              hinglish: 'Iska sahi matlab chunein:',
              hindi: 'इसका सही अर्थ चुनें:',
              haryanvi: 'इसका सही मतलब छांटो:',
              awadhi: 'एकर सही मतलब चुनि:',
              bhojpuri: 'एकर सही मतलब चुनीं:',
              rajasthani: 'इणरो सही मतलब छांटो:'
            },
            options: [
              {
                id: 'opt1',
                text: {
                  hinglish: 'Namaste! Aap kaise hain?',
                  hindi: 'नमस्ते! आप कैसे हैं?',
                  haryanvi: 'राम-राम! तू/था कैसा से?',
                  awadhi: 'प्रणाम! आप कइसन अहौ?',
                  bhojpuri: 'प्रणाम! रउआ कइसन बानी?',
                  rajasthani: 'खम्मा घणी! थे कियां हो?'
                },
                isCorrect: true
              },
              {
                id: 'opt2',
                text: {
                  hinglish: 'Aap kahan ja rahe hain?',
                  hindi: 'आप कहाँ जा रहे हैं?',
                  haryanvi: 'तू कित जा रया से?',
                  awadhi: 'आप कहां जात अहौ?',
                  bhojpuri: 'रउआ कहां जात बानी?',
                  rajasthani: 'थे कठे जा रिया हो?'
                },
                isCorrect: false
              },
              {
                id: 'opt3',
                text: {
                  hinglish: 'Aapka naam kya hai?',
                  hindi: 'आपका नाम क्या है?',
                  haryanvi: 'तेरा नाम के से?',
                  awadhi: 'तोहार नाम का अहई?',
                  bhojpuri: 'राउर नाम का ह?',
                  rajasthani: 'थांरो नाम कांई है?'
                },
                isCorrect: false
              }
            ],
            explanation: {
              hinglish: '"Hello" ka matlab Namaste aur "How are you?" ka matlab aap kaise hain hota hai.',
              hindi: '"Hello" शिष्टाचार अभिवादन है और "How are you?" का अर्थ आपका हालचाल पूछना है।',
              haryanvi: '"Hello" का मतलब राम-राम और "How are you?" का मतलब के हाल-चाल से होता है।',
              awadhi: '"Hello" माने प्रणाम और "How are you?" माने आप कइसन अहौ।',
              bhojpuri: '"Hello" माने प्रणाम आ "How are you?" माने रउआ कइसन बानी।',
              rajasthani: '"Hello" मारवाड़ी में खम्मा घणी अर "How are you?" मतलब थे कियां हो।'
            }
          },
          {
            id: 'q2',
            type: 'choice_regional_to_english',
            promptRegional: {
              hinglish: '"Aapse milkar bahut khushi hui" ko English mein kya kehte hain?',
              hindi: '"आपसे मिलकर बहुत खुशी हुई" को अंग्रेज़ी में क्या कहते हैं?',
              haryanvi: '"तन्ने मिलके घणा आनंद आया" नै English म के बोलैंगे?',
              awadhi: '"आपसे मिलिकै बहुत खुशी भई" के अंग्रेज़ी में का कहब?',
              bhojpuri: '"रउआ से मिल के बहुते खुशी भइल" के अंग्रेजी में का कहल जाई?',
              rajasthani: '"थांसूं मिल\'र घणी खुशी हुई" नै English में कांई कहवे?'
            },
            audioText: 'Nice to meet you!',
            phonetic: 'नाइस टू मीट यू!',
            options: [
              { id: 'opt1', text: 'Nice to meet you!', isCorrect: true },
              { id: 'opt2', text: 'See you tomorrow!', isCorrect: false },
              { id: 'opt3', text: 'Where do you live?', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Jab hum kisi naye vyakti se milte hain toh "Nice to meet you" bolte hain.',
              hindi: 'किसी नए व्यक्ति से मिलने पर शिष्टाचारवश "Nice to meet you" कहा जाता है।',
              haryanvi: 'जब भी किसी त नै मिले, ता इज्जत तै "Nice to meet you" बोल्या करैं।',
              awadhi: 'कौनो नए मनई से मिलै पर "Nice to meet you" बोलल जात है।',
              bhojpuri: 'केहू नया लोग से मिलला पर प्रेम से "Nice to meet you" कहल जाला।',
              rajasthani: 'कोई नए मिनख सूं मिलता ही मान सूं "Nice to meet you" बोलीजे।'
            }
          },
          {
            id: 'q3',
            type: 'fill_blank',
            sentenceParts: ['Good morning, sir! Have a ', ' day!'],
            blankIndex: 1,
            audioText: 'Good morning, sir! Have a wonderful day!',
            promptRegional: {
              hinglish: 'Khali jagah bharein (Subh divas ke liye):',
              hindi: 'रिक्त स्थान भरें (शुभ दिन की कामना):',
              haryanvi: 'खाली जगह भरो (बढ़िया दिन की खातिर):',
              awadhi: 'खाली जगह भरा (सुन्नर दिन के ताईं):',
              bhojpuri: 'खाली जगह भरीं (सुखद दिन खातिर):',
              rajasthani: 'खाली जगह भरो (सुखद दिन वास्ते):'
            },
            options: [
              { id: 'opt1', text: 'wonderful', isCorrect: true },
              { id: 'opt2', text: 'bad', isCorrect: false },
              { id: 'opt3', text: 'night', isCorrect: false }
            ],
            explanation: {
              hinglish: '"Have a wonderful day!" ka matlab "Aapka din shandar rahe!" hota hai.',
              hindi: '"Have a wonderful day!" का अर्थ है "आपका दिन मंगलमय और शानदार हो!"',
              haryanvi: '"Have a wonderful day!" मतलब थारा दिन एकदम मलूक और राजी बीते!',
              awadhi: '"Have a wonderful day!" माने तोहार दिन बड़ा नीक बीते!',
              bhojpuri: '"Have a wonderful day!" मतलब राउर दिन एकदम खुशहाल रहे!',
              rajasthani: '"Have a wonderful day!" मतलब थांरो दिन घणो चोखो बीते!'
            }
          },
          {
            id: 'q4',
            type: 'reorder_sentence',
            correctSentence: 'I am doing well',
            words: ['well', 'I', 'doing', 'am'],
            audioText: 'I am doing well',
            promptRegional: {
              hinglish: 'Shabdon ko sahi kram mein sajayein (Main theek hoon):',
              hindi: 'शब्दों को सही क्रम में व्यवस्थित करें (मैं ठीक हूँ):',
              haryanvi: 'शब्दां नै ठीक कतार में लाओ (मैं बिल्कुल ठीक सूँ):',
              awadhi: 'शब्दन के सही ढंग से सजावा (हम ठीक अहिन):',
              bhojpuri: 'शब्द के सही क्रम में सजाईं (हम ठीक बानी):',
              rajasthani: 'शब्दां नै सही कतार में जमाओ (म्हे ठीक हां):'
            },
            explanation: {
              hinglish: 'English mein Subject (I) + Helping Verb (am) + Action (doing) + Adverb (well) aata hai.',
              hindi: 'अंग्रेज़ी वाक्य संरचना: I (कर्ता) + am (सहायक क्रिया) + doing well (स्थिति)।',
              haryanvi: 'पहलड़ा शब्द I, फेर am, पाछै doing well लगावैं।',
              awadhi: 'पहिलै I, ओकरे बाद am, अउर तब doing well लगावा जात है।',
              bhojpuri: 'पहिले I, तब am, आ अंत में doing well राखल जाला।',
              rajasthani: 'पैली I, पछै am, अर आखिर में doing well आवे।'
            }
          },
          {
            id: 'q5',
            type: 'match_pairs',
            promptRegional: {
              hinglish: 'English shabdon ko unke arth ke sath jodiye:',
              hindi: 'अंग्रेज़ी शब्दों को उनके सही अर्थ से मिलाएँ:',
              haryanvi: 'English शब्दां नै उनके सही मतलब तै मिलाओ:',
              awadhi: 'English शब्दन के उनकर अर्थ से मिलावा:',
              bhojpuri: 'English शब्द के उनकर अर्थ से मिलाईं:',
              rajasthani: 'English शब्दां नै वांरा सही मतलब सूं जोड़ो:'
            },
            pairs: [
              {
                english: 'Thank you',
                regional: {
                  hinglish: 'Dhanyawad / Shukriya',
                  hindi: 'धन्यवाद / आभार',
                  haryanvi: 'धन्यवाद / थारा भला हो',
                  awadhi: 'धन्यवाद / बहुत आभार',
                  bhojpuri: 'धन्यवाद / राउर किरपा',
                  rajasthani: 'घणो-घणो आभार / धन्यवाद'
                }
              },
              {
                english: 'Welcome',
                regional: {
                  hinglish: 'Aapka swagat hai',
                  hindi: 'आपका स्वागत है',
                  haryanvi: 'जी आयां नूं / स्वागत',
                  awadhi: 'तोहार स्वागत बा',
                  bhojpuri: 'राउर सुआगत बा',
                  rajasthani: 'थांरो स्वागत है'
                }
              },
              {
                english: 'Goodbye',
                regional: {
                  hinglish: 'Alvida / Phir milenge',
                  hindi: 'अलविदा / फिर मिलेंगे',
                  haryanvi: 'फेर मिलांगे / राम-राम',
                  awadhi: 'फेरि मिलब / बिदा',
                  bhojpuri: 'फेर भेंट होई / बिदा',
                  rajasthani: 'पाछा मिलांला / बिदा'
                }
              }
            ],
            explanation: {
              hinglish: 'Ye teen shabd rozana sabse zyada use hone wale polite words hain.',
              hindi: 'यह तीनों शब्द प्रतिदिन विनम्रता और शिष्टाचार में सबसे अधिक प्रयुक्त होते हैं।',
              haryanvi: 'ये तीनू शब्द रोज की इज्जतदार बातचीत में घणे जरूरी सैं।',
              awadhi: 'ई तीनिउ शब्द रोज के व्यवहार में बहुत काम आवत हैं।',
              bhojpuri: 'ई तीनो शब्द रोज के बोलचाल में बहुते आदर देत बा।',
              rajasthani: 'ए तीनूं शब्द हर रोज री बात-चीत में घणा काम आवे।'
            }
          }
        ]
      },
      {
        id: 'm1-l2',
        moduleId: 'module-1',
        title: 'Family & Relations',
        description: 'Parivar ke sadasyon ke naam English mein',
        xpReward: 20,
        coinReward: 10,
        questions: [
          {
            id: 'q1',
            type: 'choice_english_to_regional',
            englishPrompt: 'She is my mother and he is my father.',
            audioText: 'She is my mother and he is my father.',
            phonetic: 'शी इज़ माय मदर एंड ही इज़ माय फादर',
            promptRegional: {
              hinglish: 'Iska sahi anuvad kya hai?',
              hindi: 'इसका सही अनुवाद क्या है?',
              haryanvi: 'इसका ठीक मतलब के से?',
              awadhi: 'एकर सही अर्थ का होई?',
              bhojpuri: 'एकर सही अनुवाद का होई?',
              rajasthani: 'इणरो सही मतलब कांई है?'
            },
            options: [
              {
                id: 'opt1',
                text: {
                  hinglish: 'Wo meri maa hain aur wo mere pitaji hain.',
                  hindi: 'वह मेरी माताजी हैं और वह मेरे पिताजी हैं।',
                  haryanvi: 'वा म्हारी माँ सै अर यो म्हारा बाबू सै।',
                  awadhi: 'उ हमार महतारी अहिन अउर उ हमार बापू अहिन।',
                  bhojpuri: 'उ हमार माई हई आ उ हमार बाबूजी हउवन।',
                  rajasthani: 'बा म्हारी मां है अर ओ म्हारा पिताजी है।'
                },
                isCorrect: true
              },
              {
                id: 'opt2',
                text: {
                  hinglish: 'Wo meri behen aur bhai hain.',
                  hindi: 'वह मेरी बहन और भाई हैं।',
                  haryanvi: 'वा म्हारी बेबे अर भाई सै।',
                  awadhi: 'उ हमार बहिन अउर भाई अहिन।',
                  bhojpuri: 'उ हमार बहिन आ भाई हउवन।',
                  rajasthani: 'बा म्हारी बहिन अर भाई है।'
                },
                isCorrect: false
              }
            ],
            explanation: {
              hinglish: 'Mother = Maa, Father = Pita/Babuji.',
              hindi: 'Mother का अर्थ माता और Father का अर्थ पिता होता है।',
              haryanvi: 'Mother म्हारी माँ अर Father म्हारा बाबूजी।',
              awadhi: 'Mother माने महतारी/अम्मा अउर Father माने बापू।',
              bhojpuri: 'Mother माने माई आ Father माने बाबूजी/पिताजी।',
              rajasthani: 'Mother माने मां अर Father माने पिता।'
            }
          },
          {
            id: 'q2',
            type: 'choice_regional_to_english',
            promptRegional: {
              hinglish: '"Mera ek chhota bhai hai" ko English mein kya kahenge?',
              hindi: '"मेरा एक छोटा भाई है" को अंग्रेज़ी में क्या कहेंगे?',
              haryanvi: '"म्हारा एक छोटा भाई सै" नै English म के कहवैंगे?',
              awadhi: '"हमार एक छोट भाई बा" के English में का कहब?',
              bhojpuri: '"हमार एगो छोट भाई बा" के अंग्रेजी में का कहल जाई?',
              rajasthani: '"म्हांरो एक नान्हो भाई है" नै English में कांई कहवे?'
            },
            audioText: 'I have a younger brother.',
            phonetic: 'आई हैव अ यंगर ब्रदर',
            options: [
              { id: 'opt1', text: 'I have a younger brother.', isCorrect: true },
              { id: 'opt2', text: 'I have an elder sister.', isCorrect: false },
              { id: 'opt3', text: 'He is my teacher.', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Chhota bhai = Younger brother. Bada bhai = Elder brother.',
              hindi: 'छोटे भाई के लिए "younger brother" और बड़े भाई के लिए "elder brother" कहा जाता है।',
              haryanvi: 'छोटे भाई खातिर "younger" अर बड़े खातिर "elder" लगावैं।',
              awadhi: 'छोट भाई के "younger brother" अउर बड़के के "elder brother" कहल जात है।',
              bhojpuri: 'छोट भाई के "younger brother" आ बड़का के "elder brother" कहल जाई।',
              rajasthani: 'नान्हा भाई नै "younger brother" अर मोटा भाई नै "elder brother" बोलीजे।'
            }
          },
          {
            id: 'q3',
            type: 'fill_blank',
            sentenceParts: ['My ', ' is cooking delicious food.'],
            blankIndex: 1,
            audioText: 'My grandmother is cooking delicious food.',
            promptRegional: {
              hinglish: 'Khali jagah bharein (Dadi/Nani ke liye):',
              hindi: 'रिक्त स्थान भरें (दादी/नानी के लिए):',
              haryanvi: 'खाली जगह भरो (दादी/नानी खातिर):',
              awadhi: 'खाली जगह भरा (दादी/अज्जी खातिर):',
              bhojpuri: 'खाली जगह भरीं (आजी/नानी खातिर):',
              rajasthani: 'खाली जगह भरो (दादीसा/नानीसा वास्ते):'
            },
            options: [
              { id: 'opt1', text: 'grandmother', isCorrect: true },
              { id: 'opt2', text: 'pencil', isCorrect: false },
              { id: 'opt3', text: 'road', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Grandmother = Dadi ya Nani.',
              hindi: 'Grandmother का अर्थ दादी या नानी होता है।',
              haryanvi: 'Grandmother म्हारी दादी या नानी हुवै सै।',
              awadhi: 'Grandmother माने दादी या नानी।',
              bhojpuri: 'Grandmother माने आजी भा नानी।',
              rajasthani: 'Grandmother माने दादीसा या नानीसा।'
            }
          },
          {
            id: 'q4',
            type: 'reorder_sentence',
            correctSentence: 'We are a happy family',
            words: ['happy', 'a', 'We', 'family', 'are'],
            audioText: 'We are a happy family',
            promptRegional: {
              hinglish: 'Shabdon ko sajayein (Hum ek khushhal parivar hain):',
              hindi: 'शब्दों को सही क्रम में रखें (हम एक खुशहाल परिवार हैं):',
              haryanvi: 'शब्दां नै जमाओ (म्हारा एक राजी कुनबा सै):',
              awadhi: 'शब्दन के सजावा (हम एक खुशहाल परिवार अही):',
              bhojpuri: 'शब्द के सजाईं (हमनी के एगो खुशहाल परिवार हईं):',
              rajasthani: 'शब्दां नै जमाओ (म्हे एक राजी परिवार हां):'
            },
            explanation: {
              hinglish: 'We (Hum) + are (hain) + a happy family (ek khushhal parivar).',
              hindi: 'संरचना: We + are + a happy family (हम एक सुखी परिवार हैं)।',
              haryanvi: 'सब तै पैला We, फेर are, फेर a happy family।',
              awadhi: 'पहिलै We, फेरि are, फेरि a happy family।',
              bhojpuri: 'पहिले We, फेर are, फेर a happy family।',
              rajasthani: 'पैली We, पछै are, पछै a happy family।'
            }
          },
          {
            id: 'q5',
            type: 'match_pairs',
            promptRegional: {
              hinglish: 'Rishton ke English aur regional naam jodiye:',
              hindi: 'रिश्तों के अंग्रेज़ी और क्षेत्रीय नाम मिलाएँ:',
              haryanvi: 'रिश्त्यां के English अर हरियाणवी नाम मिलाओ:',
              awadhi: 'नाता-रिश्ता के English अउर अवधी नाम मिलावा:',
              bhojpuri: 'रिश्ता के English आ भोजपुरी नाम मिलाईं:',
              rajasthani: 'नाता-रिश्ता रा English अर राजस्थानी नाम जोड़ो:'
            },
            pairs: [
              {
                english: 'Sister',
                regional: {
                  hinglish: 'Behen',
                  hindi: 'बहन',
                  haryanvi: 'बेबे / बहिन',
                  awadhi: 'बहिन',
                  bhojpuri: 'बहिन',
                  rajasthani: 'बाई / बहिन'
                }
              },
              {
                english: 'Son',
                regional: {
                  hinglish: 'Beta',
                  hindi: 'बेटा / पुत्र',
                  haryanvi: 'छोरा / बेटा',
                  awadhi: 'बेटा / लरिका',
                  bhojpuri: 'बेटा / बबुआ',
                  rajasthani: 'बेटो / दीकरो'
                }
              },
              {
                english: 'Daughter',
                regional: {
                  hinglish: 'Beti',
                  hindi: 'बेटी / पुत्री',
                  haryanvi: 'छोरी / बेटी',
                  awadhi: 'बिटिया',
                  bhojpuri: 'धीया / बिटिया',
                  rajasthani: 'बेटी / दीकरी'
                }
              }
            ],
            explanation: {
              hinglish: 'Parivar ke sadasyon ke naam har din bolne mein aate hain.',
              hindi: 'पारिवारिक रिश्तों के नाम दैनिक बातचीत के मुख्य आधार हैं।',
              haryanvi: 'कुनबे के रिश्तां के नाम हर रोज जुबान पै रहवैं।',
              awadhi: 'घर-परिवार के नाता-रिश्ता के नाम रोजे काम आवत हैं।',
              bhojpuri: 'घर-परिवार के रिश्ता के नाम रोज बोलल जाला।',
              rajasthani: 'कुटुंब रा नाता-गोता रा नाम रोज बोलण में आवे।'
            }
          }
        ]
      },
      {
        id: 'm1-l3',
        moduleId: 'module-1',
        title: 'Numbers & Time',
        description: 'Ginti, samay aur tarikh bolna',
        xpReward: 25,
        coinReward: 15,
        questions: [
          {
            id: 'q1',
            type: 'choice_english_to_regional',
            englishPrompt: 'What time is it right now?',
            audioText: 'What time is it right now?',
            phonetic: 'व्हॉट टाइम इज़ इट राइट नाउ?',
            promptRegional: {
              hinglish: 'Iska kya arth hai?',
              hindi: 'इसका क्या अर्थ है?',
              haryanvi: 'इसका के मतलब सै?',
              awadhi: 'एकर का मतलब बा?',
              bhojpuri: 'एकर का मतलब ह?',
              rajasthani: 'इणरो कांई मतलब है?'
            },
            options: [
              {
                id: 'opt1',
                text: {
                  hinglish: 'Abhi kya samay / time hua hai?',
                  hindi: 'अभी क्या समय हुआ है?',
                  haryanvi: 'इब घड़ी म के बज़्या सै?',
                  awadhi: 'इ समय का बजत अहई?',
                  bhojpuri: 'अभी कई बजल बा?',
                  rajasthani: 'इब घड़ी में कांई बज्या है?'
                },
                isCorrect: true
              },
              {
                id: 'opt2',
                text: {
                  hinglish: 'Aap kab aa rahe hain?',
                  hindi: 'आप कब आ रहे हैं?',
                  haryanvi: 'तू कदे आवैगा?',
                  awadhi: 'आप कब अइहौ?',
                  bhojpuri: 'रउआ कब आईब?',
                  rajasthani: 'थे कदे आवोला?'
                },
                isCorrect: false
              }
            ],
            explanation: {
              hinglish: '"What time is it?" samay poochne ke liye standard phrase hai.',
              hindi: '"What time is it?" समय पूछने का सबसे लोकप्रिय अंग्रेज़ी वाक्य है।',
              haryanvi: 'टेम बूझण खातिर "What time is it?" बोल्या करैं।',
              awadhi: 'टेम पूछे खातिर "What time is it?" कहा जात है।',
              bhojpuri: 'समय पूछे खातिर "What time is it?" कहल जाला।',
              rajasthani: 'टेम पूछण वास्ते "What time is it?" बोलीजे।'
            }
          },
          {
            id: 'q2',
            type: 'choice_regional_to_english',
            promptRegional: {
              hinglish: '"Abhi theek 5 baje hain" ko English mein kya kahenge?',
              hindi: '"अभी ठीक 5 बजे हैं" को अंग्रेज़ी में क्या कहेंगे?',
              haryanvi: '"इब पूरे 5 बज़्ये सैं" नै English म के कहवैंगे?',
              awadhi: '"इ समय पूर 5 बजत बा" के English में का कहब?',
              bhojpuri: '"अभी ठीक 5 बजल बा" के अंग्रेजी में का कहल जाई?',
              rajasthani: '"इब पूरा 5 बज्या है" नै English में कांई कहवे?'
            },
            audioText: 'It is 5 o clock right now.',
            phonetic: 'इट इज़ फाइव ओ क्लॉक राइट नाउ',
            options: [
              { id: 'opt1', text: "It is 5 o'clock right now.", isCorrect: true },
              { id: 'opt2', text: 'It is yesterday afternoon.', isCorrect: false },
              { id: 'opt3', text: 'I am five years old.', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Pura ghanta hone par "o\'clock" lagate hain, jaise 5 o\'clock.',
              hindi: 'पूर्ण घंटे का समय बताने के लिए "o\'clock" का प्रयोग होता है।',
              haryanvi: 'पूरा घंटा हुवण पै "o\'clock" लावैं, जिसा 5 o\'clock।',
              awadhi: 'पूरा घंटा बतावै खातिर "o\'clock" लगावा जात है।',
              bhojpuri: 'पूरा घंटा बतावे खातिर "o\'clock" लगावल जाला।',
              rajasthani: 'पूरो घंटो बतावण वास्ते "o\'clock" लगावे।'
            }
          },
          {
            id: 'q3',
            type: 'fill_blank',
            sentenceParts: ['There are ', ' days in a week.'],
            blankIndex: 1,
            audioText: 'There are seven days in a week.',
            promptRegional: {
              hinglish: 'Ek hafte mein kitne din hote hain?',
              hindi: 'एक सप्ताह में कितने दिन होते हैं?',
              haryanvi: 'एक हफ्ते म कितणे दिन हुवै सैं?',
              awadhi: 'एक हफ्ता में कइ दिन होत हैं?',
              bhojpuri: 'एक हफ्ता में कई गो दिन होला?',
              rajasthani: 'एक हफ्ता में कितरा दिन हुवे?'
            },
            options: [
              { id: 'opt1', text: 'seven', isCorrect: true },
              { id: 'opt2', text: 'hundred', isCorrect: false },
              { id: 'opt3', text: 'zero', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Seven = 7 (Saat). Week = Hafta (Saptah).',
              hindi: 'Seven का अर्थ 7 और Week का अर्थ सप्ताह होता है।',
              haryanvi: 'Seven मतलब सात (7) दिन एक हफ्ते में।',
              awadhi: 'Seven माने सात (7)। हफ्ता भर में सात दिन।',
              bhojpuri: 'Seven माने सात। हफ्ता में साते गो दिन होला।',
              rajasthani: 'Seven मतलब सात। हफ्ता में सात दिन हुवे।'
            }
          },
          {
            id: 'q4',
            type: 'reorder_sentence',
            correctSentence: 'Today is Monday',
            words: ['Monday', 'is', 'Today'],
            audioText: 'Today is Monday',
            promptRegional: {
              hinglish: 'Sahi kram chunein (Aaj Somwar hai):',
              hindi: 'सही क्रम चुनें (आज सोमवार है):',
              haryanvi: 'सही जमाओ (आज सोमवार सै):',
              awadhi: 'सही सजावा (आज सोमार अहई):',
              bhojpuri: 'सही सजाईं (आज सोमार ह):',
              rajasthani: 'सही जमाओ (आज सोमवार है):'
            },
            explanation: {
              hinglish: 'Today (Aaj) + is (hai) + Monday (Somwar).',
              hindi: 'Today (आज) + is (है) + Monday (सोमवार)।',
              haryanvi: 'Today (आज) is Monday (सोमवार सै)।',
              awadhi: 'Today is Monday (आज सोमार अहई)।',
              bhojpuri: 'Today is Monday (आज सोमार ह)।',
              rajasthani: 'Today is Monday (आज सोमवार है)।'
            }
          },
          {
            id: 'q5',
            type: 'conversation_reply',
            speaker: 'Ramesh',
            dialogue: 'Excuse me, will the bus arrive at 10 AM?',
            audioText: 'Excuse me, will the bus arrive at 10 AM?',
            promptRegional: {
              hinglish: 'Ramesh pooch raha hai ki kya bus 10 baje aayegi? Sahi uttar chunein:',
              hindi: 'रमेश पूछ रहे हैं कि क्या बस सुबह 10 बजे आएगी? सही उत्तर चुनें:',
              haryanvi: 'रमेश बूझै सै के बस दस बज्जे आवैगी? ठीक जवाब छांटो:',
              awadhi: 'रमेश पूछत अहिन का बस दस बजे आई? सही उत्तर चुनि:',
              bhojpuri: 'रमेश पूछत बाड़न का बस दस बजे आई? सही जबाब चुनीं:',
              rajasthani: 'रमेश पूछ रिया है कांई बस दस बज्यां आवेला? सही उत्तर छांटो:'
            },
            options: [
              { id: 'opt1', text: 'Yes, it will arrive exactly on time.', isCorrect: true },
              { id: 'opt2', text: 'My name is Suresh.', isCorrect: false },
              { id: 'opt3', text: 'I am drinking water.', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Jab koi samay poochta hai toh "Yes, it will arrive on time" (Haan, theek samay par aayegi) bolte hain.',
              hindi: 'समय की पुष्टि के लिए "Yes, it will arrive on time" कहना उपयुक्त है।',
              haryanvi: 'हाँ, टेम पै बस आवेगी कहण खातिर "Yes, it will arrive on time" बोलैं।',
              awadhi: 'हां बस टेम से आई कहै खातिर "Yes, it will arrive on time" कहा जात है।',
              bhojpuri: 'हां बस समय पर आई कहे खातिर "Yes, it will arrive on time" कहल जाई।',
              rajasthani: 'हां बस टेम माथै आवेला कहण वास्ते "Yes, it will arrive on time" बोलीजे।'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'module-2',
    number: 2,
    title: 'Everyday Conversations',
    subtitle: 'Bazar, raste aur dukan par English mein baat',
    icon: 'MessageCircle',
    color: 'amber',
    description: 'Practical conversations for shopping, asking directions, meeting neighbors, and ordering food.',
    totalLessons: 2,
    lessons: [
      {
        id: 'm2-l1',
        moduleId: 'module-2',
        title: 'At the Market & Shop',
        description: 'Dukan par saman lene aur keemat poochne ke liye',
        xpReward: 25,
        coinReward: 15,
        questions: [
          {
            id: 'q1',
            type: 'choice_english_to_regional',
            englishPrompt: 'How much does this cost?',
            audioText: 'How much does this cost?',
            phonetic: 'हाउ मच डज़ दिस कॉस्ट?',
            promptRegional: {
              hinglish: 'Dukan par iska kya matlab hota hai?',
              hindi: 'दुकान पर इसका क्या अर्थ होता है?',
              haryanvi: 'दुकान पै इसका के मतलब हुवै सै?',
              awadhi: 'दुकान पर एकर का मतलब होई?',
              bhojpuri: 'दुकान पर एकर का मतलब होला?',
              rajasthani: 'दुकान माथै इणरो कांई मतलब हुवे?'
            },
            options: [
              {
                id: 'opt1',
                text: {
                  hinglish: 'Iski keemat kya hai? / Ye kitne ka hai?',
                  hindi: 'इसका मूल्य / कीमत क्या है?',
                  haryanvi: 'यो कितने का सै भाई?',
                  awadhi: 'एकर दाम का अहई?',
                  bhojpuri: 'एकर दाम कई टका / का बा?',
                  rajasthani: 'इणरो कितरो रुप्या लगसी?'
                },
                isCorrect: true
              },
              {
                id: 'opt2',
                text: {
                  hinglish: 'Ye dukaan kahan hai?',
                  hindi: 'यह दुकान कहाँ है?',
                  haryanvi: 'या दुकान कित सै?',
                  awadhi: 'ई दुकान कहां अहई?',
                  bhojpuri: 'ई दुकान कहां बा?',
                  rajasthani: 'या दुकान कठे है?'
                },
                isCorrect: false
              }
            ],
            explanation: {
              hinglish: 'Kisi bhi cheez ki keemat (price) poochne ke liye "How much does this cost?" bolte hain.',
              hindi: 'कीमत पूछने के लिए यह सबसे प्रामाणिक अंग्रेज़ी वाक्य है।',
              haryanvi: 'सौदा-सुलफ का भाव बूझण खातिर "How much does this cost?" बोल्या करैं।',
              awadhi: 'कौनो सामान के दाम पूछे खातिर ई वाक्य बोलल जात है।',
              bhojpuri: 'सामान के मोल-भाव भा दाम पूछे खातिर ई कहल जाला।',
              rajasthani: 'चीज रो भाव पूछण वास्ते "How much does this cost?" बोलीजे।'
            }
          },
          {
            id: 'q2',
            type: 'reorder_sentence',
            correctSentence: 'Can you give me a discount',
            words: ['discount', 'Can', 'me', 'a', 'you', 'give'],
            audioText: 'Can you give me a discount?',
            promptRegional: {
              hinglish: 'Bargaining ke liye sajayein (Kya thodi chhoot mil sakti hai?):',
              hindi: 'मोलभाव के लिए व्यवस्थित करें (क्या कुछ छूट मिल सकती है?):',
              haryanvi: 'भाव-ताव खातिर जमाओ (के थोड़ा भाव कम कर सको सो?):',
              awadhi: 'दाम कम करावै खातिर सजावा (का कछू छूट मिलि सकत है?):',
              bhojpuri: 'दाम कम करावे खातिर सजाईं (का तनी छूट मिल सकेला?):',
              rajasthani: 'भाव कम करावण वास्ते जमाओ (कांई थोड़ा कम कर सको हो?):'
            },
            explanation: {
              hinglish: '"Can you give me a discount?" ka use hum vinamra tareeqe se discount mangne ke liye karte hain.',
              hindi: 'विनम्रता से छूट या रियायत माँगने के लिए इसका प्रयोग होता है।',
              haryanvi: 'सलीके तै भाव कम कराण खातिर यो वाक्य बोलैं।',
              awadhi: 'प्रेम से दाम कम करै के कहै खातिर ई वाक्य बोला जात है।',
              bhojpuri: 'आदर से छूट माँगे खातिर ई वाक्य बोलल जाला।',
              rajasthani: 'मान सूं थोड़ी छूट मांगण वास्ते आ लाइन बोलीजे।'
            }
          },
          {
            id: 'q3',
            type: 'conversation_reply',
            speaker: 'Shopkeeper',
            dialogue: 'Do you want a plastic bag or a paper bag?',
            audioText: 'Do you want a plastic bag or a paper bag?',
            promptRegional: {
              hinglish: 'Dukandar pooch raha hai ki kaun sa thela chahiye. Paryavaran ke anukul uttar chunein:',
              hindi: 'दुकानदार पूछ रहे हैं कि कौन सा थैला चाहिए। पर्यावरण अनुकूल उत्तर चुनें:',
              haryanvi: 'दुकानदार बूझै सै कूण सा थैला ल्योगे। ठीक उत्तर छांटो:',
              awadhi: 'दुकानदार पूछत अहिन कउन झोरा चाही। सही उत्तर चुनि:',
              bhojpuri: 'दुकानदार पूछत बाड़न कउन झोरा चाहीं। सही जबाब चुनीं:',
              rajasthani: 'दुकानदार पूछ रिया है कांई सो थैलो चावे। सही उत्तर छांटो:'
            },
            options: [
              { id: 'opt1', text: 'A paper bag, please. Thank you!', isCorrect: true },
              { id: 'opt2', text: 'I am playing football.', isCorrect: false },
              { id: 'opt3', text: 'Today is very cold.', isCorrect: false }
            ],
            explanation: {
              hinglish: '"A paper bag, please. Thank you!" ek perfect aur polite shopping answer hai.',
              hindi: 'विनम्रता से कागज़ का थैला माँगने के लिए "A paper bag, please. Thank you!" कहें।',
              haryanvi: 'कागज का थैला मांगण खातिर "A paper bag, please. Thank you!" बोलैं।',
              awadhi: 'कागज के झोरा मांगे खातिर ई जवाब सबले नीक है।',
              bhojpuri: 'कागज के झोरा माँगे खातिर ई एकदम सही आ आदर वाला जबाब बा।',
              rajasthani: 'कागद रो थैलो मांगण वास्ते आ बात घणी चोखी है।'
            }
          },
          {
            id: 'q4',
            type: 'fill_blank',
            sentenceParts: ['I would like to ', ' online via UPI.'],
            blankIndex: 1,
            audioText: 'I would like to pay online via UPI.',
            promptRegional: {
              hinglish: 'Khali jagah bharein (Bhugtan karne ke liye):',
              hindi: 'रिक्त स्थान भरें (भुगतान करने के संदर्भ में):',
              haryanvi: 'खाली जगह भरो (पैसे चुकाण खातिर):',
              awadhi: 'खाली जगह भरा (पैसा देवै खातिर):',
              bhojpuri: 'खाली जगह भरीं (पइसा देबे खातिर):',
              rajasthani: 'खाली जगह भरो (पिया चुकावण वास्ते):'
            },
            options: [
              { id: 'opt1', text: 'pay', isCorrect: true },
              { id: 'opt2', text: 'sleep', isCorrect: false },
              { id: 'opt3', text: 'sing', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Pay = Paise dena / Bhugtan karna.',
              hindi: 'Pay का अर्थ भुगतान करना होता है।',
              haryanvi: 'Pay मतलब पैसे चुकाणा।',
              awadhi: 'Pay माने दाम चुकता करब।',
              bhojpuri: 'Pay माने पइसा चुकावल।',
              rajasthani: 'Pay माने रुप्या चुकावणो।'
            }
          },
          {
            id: 'q5',
            type: 'choice_regional_to_english',
            promptRegional: {
              hinglish: '"Kripya bill de dijiye" ko English mein kya bolte hain?',
              hindi: '"कृपया बिल दे दीजिए" को अंग्रेज़ी में क्या बोलते हैं?',
              haryanvi: '"भाई, पर्ची/बिल दे दे" नै English म के बोलैंगे?',
              awadhi: '"कृपा कइके बिल दइ देईं" के English में का कहब?',
              bhojpuri: '"किरपा क के बिल दे दीं" के अंग्रेजी में का कहल जाई?',
              rajasthani: '"बिल देवो सा" नै English में कांई कहवे?'
            },
            audioText: 'Please give me the bill.',
            phonetic: 'प्लीज़ गिव मी द बिल',
            options: [
              { id: 'opt1', text: 'Please give me the bill.', isCorrect: true },
              { id: 'opt2', text: 'Where is the hospital?', isCorrect: false },
              { id: 'opt3', text: 'Close the door immediately.', isCorrect: false }
            ],
            explanation: {
              hinglish: '"Please give me the bill" shishtachar se bill mangne ke liye bola jata hai.',
              hindi: 'खरीदारी या होटल में बिल माँगने हेतु यह सरल और सही वाक्य है।',
              haryanvi: 'बिल मांगण खातिर "Please give me the bill" बोल्या करैं।',
              awadhi: 'बिल मांगे खातिर ई सीधा अउर मीठ वाक्य है।',
              bhojpuri: 'बिल माँगे खातिर ई वाक्य कहल जाला।',
              rajasthani: 'बिल लेवण वास्ते "Please give me the bill" बोलीजे।'
            }
          }
        ]
      },
      {
        id: 'm2-l2',
        moduleId: 'module-2',
        title: 'Asking for Directions',
        description: 'Rasta poochna aur batana',
        xpReward: 25,
        coinReward: 15,
        questions: [
          {
            id: 'q1',
            type: 'choice_english_to_regional',
            englishPrompt: 'Excuse me, where is the railway station?',
            audioText: 'Excuse me, where is the railway station?',
            phonetic: 'एक्सक्यूज़ मी, व्हेयर इज़ द रेलवे स्टेशन?',
            promptRegional: {
              hinglish: 'Is prashna ka sahi arth kya hai?',
              hindi: 'इस प्रश्न का सही अर्थ क्या है?',
              haryanvi: 'इस सवाल का के मतलब सै?',
              awadhi: 'एकर का मतलब होई?',
              bhojpuri: 'एकर का मतलब बा?',
              rajasthani: 'इणरो कांई मतलब हुवे?'
            },
            options: [
              {
                id: 'opt1',
                text: {
                  hinglish: 'Suniye, railway station kahan hai?',
                  hindi: 'माफ कीजिए, रेलवे स्टेशन कहाँ है?',
                  haryanvi: 'सुण भाई, रेलवे स्टेशन कित पड़ै सै?',
                  awadhi: 'सुनीं, रेलवे स्टेशन कहां अहई?',
                  bhojpuri: 'सुनीं, रेलवे स्टेशन कहां बा?',
                  rajasthani: 'सुणो सा, रेलवे स्टेशन कठे है?'
                },
                isCorrect: true
              },
              {
                id: 'opt2',
                text: {
                  hinglish: 'Train kab aayegi?',
                  hindi: 'रेलगाड़ी कब आएगी?',
                  haryanvi: 'रेल कदे आवैगी?',
                  awadhi: 'रेलगाड़ी कब अइहै?',
                  bhojpuri: 'रेलगाड़ी कब आई?',
                  rajasthani: 'रेल कदे आवेला?'
                },
                isCorrect: false
              }
            ],
            explanation: {
              hinglish: '"Where is..." kisi bhi jagah ka pata poochne ke liye use hota hai.',
              hindi: '"Where is..." स्थान पूछने का बुनियादी ढाँचा है।',
              haryanvi: 'किते का भी रस्ता बूझण खातिर "Where is..." बोलैं।',
              awadhi: 'कौनो जगह का पता पूछे खातिर "Where is..." कहा जात है।',
              bhojpuri: 'कौनो जगह पूछे खातिर "Where is..." कहल जाला।',
              rajasthani: 'कठेई रो रस्तो पूछण वास्ते "Where is..." बोलीजे।'
            }
          },
          {
            id: 'q2',
            type: 'reorder_sentence',
            correctSentence: 'Turn left and go straight',
            words: ['straight', 'Turn', 'and', 'left', 'go'],
            audioText: 'Turn left and go straight',
            promptRegional: {
              hinglish: 'Rasta batane ke liye shabdon ko kram mein lagayein (Bayen mudein aur seedhe jayein):',
              hindi: 'दिशा बताने के लिए व्यवस्थित करें (बाएँ मुड़ें और सीधे जाएँ):',
              haryanvi: 'रस्ता बताण खातिर जमाओ (उल्टे हाथ मुड़कै सीधा चालो):',
              awadhi: 'रस्ता बतावै खातिर सजावा (बाएं मुड़िकै सीधा जावा):',
              bhojpuri: 'रास्ता बतावे खातिर सजाईं (बाएं मुड़ के सीधा जाईं):',
              rajasthani: 'रस्तो बतावण वास्ते जमाओ (डावे हाथ मुड़\'र सीधो चालो):'
            },
            explanation: {
              hinglish: 'Turn left = Bayen mudein. Go straight = Seedhe jayein.',
              hindi: 'Turn left (बाएँ मुड़ना) + Go straight (सीधे चलना)।',
              haryanvi: 'उल्टे हाथ मूड़णा मतलब Turn left, सीधा चालणा मतलब Go straight।',
              awadhi: 'बाएं मुड़े के Turn left अउर सीधा जाय के Go straight कहल जात है।',
              bhojpuri: 'बाएं घूमे के Turn left आ सीधा जाए के Go straight कहल जाला।',
              rajasthani: 'डावे हाथ फिरणो Turn left अर सीधो चालणो Go straight।'
            }
          },
          {
            id: 'q3',
            type: 'match_pairs',
            promptRegional: {
              hinglish: 'Directions (Dishaon) ke shabdon ko jodiye:',
              hindi: 'दिशाओं के अंग्रेज़ी और क्षेत्रीय शब्दों को मिलाएँ:',
              haryanvi: 'दिशायों के शब्दां नै मिलाओ:',
              awadhi: 'दिशान के शब्दन के मिलावा:',
              bhojpuri: 'दिशा के शब्द मिलाईं:',
              rajasthani: 'दिशावां रा शब्द जोड़ो:'
            },
            pairs: [
              {
                english: 'Turn right',
                regional: {
                  hinglish: 'Dayen mudein',
                  hindi: 'दाएँ मुड़ें',
                  haryanvi: 'सीधे हाथ मुड़ो',
                  awadhi: 'दाहिने मुड़ा',
                  bhojpuri: 'दाहिने घूमीं',
                  rajasthani: 'जीमणै हाथ मुड़ो'
                }
              },
              {
                english: 'Go straight',
                regional: {
                  hinglish: 'Seedhe jayein',
                  hindi: 'सीधे चलें',
                  haryanvi: 'सीधा चालो',
                  awadhi: 'सीधा जावा',
                  bhojpuri: 'सीधा जाईं',
                  rajasthani: 'सीधो चालो'
                }
              },
              {
                english: 'Near the temple',
                regional: {
                  hinglish: 'Mandir ke paas',
                  hindi: 'मंदिर के निकट / पास',
                  haryanvi: 'मन्दिर कै धोरै',
                  awadhi: 'मंदिरवा के लगे',
                  bhojpuri: 'मन्दिर के लगे',
                  rajasthani: 'मंदिर रै कने'
                }
              }
            ],
            explanation: {
              hinglish: 'Rasta poochna aur batana English bolne ka ahem hissa hai.',
              hindi: 'दैनिक यात्रा में दिशा-निर्देश समझना अत्यंत आवश्यक है।',
              haryanvi: 'कदे भी राह भटके ता ये शब्द घणे काम आवैं।',
              awadhi: 'कौनो जगह जाय खातिर ई शब्द बड़ा सहारा देत हैं।',
              bhojpuri: 'कौनो रास्ता पकड़े खातिर ई शब्द बहुते काम आवेला।',
              rajasthani: 'कठै भी जावण वास्ते ए शब्द घणा काम आवे।'
            }
          },
          {
            id: 'q4',
            type: 'fill_blank',
            sentenceParts: ['Is the bus stop ', ' from here?'],
            blankIndex: 1,
            audioText: 'Is the bus stop far from here?',
            promptRegional: {
              hinglish: 'Khali jagah bharein (Kya bus stop yahan se door hai?):',
              hindi: 'रिक्त स्थान भरें (दूरी पूछने के लिए):',
              haryanvi: 'खाली जगह भरो (के बस अड्डा दूर सै?):',
              awadhi: 'खाली जगह भरा (का बस स्टॉप दूर बा?):',
              bhojpuri: 'खाली जगह भरीं (का बस स्टॉप दूर बा?):',
              rajasthani: 'खाली जगह भरो (कांई बस स्टैंड दूर है?):'
            },
            options: [
              { id: 'opt1', text: 'far', isCorrect: true },
              { id: 'opt2', text: 'sweet', isCorrect: false },
              { id: 'opt3', text: 'heavy', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Far = Door. Near = Paas.',
              hindi: 'Far का अर्थ दूर और Near का अर्थ पास होता है।',
              haryanvi: 'Far मतलब दूर, Near मतलब धोरै।',
              awadhi: 'Far माने दूर, Near माने नियरे/लगे।',
              bhojpuri: 'Far माने दूर, Near माने लगे।',
              rajasthani: 'Far माने दूर, Near माने कने।'
            }
          },
          {
            id: 'q5',
            type: 'conversation_reply',
            speaker: 'Stranger',
            dialogue: 'Thank you very much for your help!',
            audioText: 'Thank you very much for your help!',
            promptRegional: {
              hinglish: 'Kisi ne madad ke liye dhanyawad bola. Sahi polite uttar kya hoga?',
              hindi: 'किसी ने आपकी सहायता के लिए धन्यवाद कहा। विनम्र प्रत्युत्तर क्या होगा?',
              haryanvi: 'किसी नै थारा धन्यवाद करा। सही जवाब के द्योगे?',
              awadhi: 'केहू मदद खातिर धन्यवाद कहिस। सही जवाब का होई?',
              bhojpuri: 'केहू मदद खातिर धन्यवाद कहलसि। सही जबाब का होई?',
              rajasthani: 'कोई मदद खातर धन्यवाद कह्यो। सही उत्तर कांई देवोला?'
            },
            options: [
              { id: 'opt1', text: 'You are welcome! Happy to help.', isCorrect: true },
              { id: 'opt2', text: 'No, I hate cars.', isCorrect: false },
              { id: 'opt3', text: 'Where is my bag?', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Jab koi Thank you bole, toh hamesha "You are welcome!" bola jata hai.',
              hindi: 'धन्यवाद के उत्तर में हमेशा "You are welcome!" कहा जाता है।',
              haryanvi: 'धन्यवाद के बदले "You are welcome" बोलना सलीका हुवै सै।',
              awadhi: 'धन्यवाद के जवाब में "You are welcome" कहल जात है।',
              bhojpuri: 'धन्यवाद के बदला में "You are welcome" कहल जाला।',
              rajasthani: 'धन्यवाद रै बदले में "You are welcome" बोलीजे।'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'module-3',
    number: 3,
    title: 'English Grammar',
    subtitle: 'Nouns, Verbs aur Tenses ki aasan samajh',
    icon: 'Layers',
    color: 'blue',
    description: 'Master Is/Am/Are, Do/Does, Present/Past/Future tenses through relatable Indian examples.',
    totalLessons: 1,
    lessons: [
      {
        id: 'm3-l1',
        moduleId: 'module-3',
        title: 'Is, Am, Are & Helping Verbs',
        description: 'Vartaman kaal mein sahi helping verb lagana',
        xpReward: 20,
        coinReward: 10,
        questions: [
          {
            id: 'q1',
            type: 'fill_blank',
            sentenceParts: ['I ', ' a hardworking student.'],
            blankIndex: 1,
            audioText: 'I am a hardworking student.',
            promptRegional: {
              hinglish: '"I" ke sath kaun sa helping verb lagta hai? (Main ek mehnati vidyarthi hoon):',
              hindi: '"I" के साथ सही सहायक क्रिया चुनें (मैं एक मेहनती छात्र हूँ):',
              haryanvi: '"I" गेल्या के लावैंगे? (मैं एक मेहनती बालक सूँ):',
              awadhi: '"I" के साथ का लागि? (हम एक मेहनती लरिका अही):',
              bhojpuri: '"I" के साथे का लागी? (हम एगो मेहनती विद्यार्थी हईं):',
              rajasthani: '"I" रै सागे कांई लागसी? (म्हे एक मेहनती विद्यार्थी हां):'
            },
            options: [
              { id: 'opt1', text: 'am', isCorrect: true },
              { id: 'opt2', text: 'is', isCorrect: false },
              { id: 'opt3', text: 'are', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Hamesha "I" ke sath "am" lagta hai (I am).',
              hindi: 'प्रथम पुरुष एकवचन "I" के साथ सदैव "am" प्रयुक्त होता है।',
              haryanvi: '"I" गेल्या सदा "am" ए लाग्या करै सै।',
              awadhi: '"I" के संग सदा "am" लगावा जात है।',
              bhojpuri: '"I" के साथे हमेशा "am" लागल जाला।',
              rajasthani: '"I" रै सागे हमेशा "am" लाग्या करे।'
            }
          },
          {
            id: 'q2',
            type: 'fill_blank',
            sentenceParts: ['She ', ' learning English very fast.'],
            blankIndex: 1,
            audioText: 'She is learning English very fast.',
            promptRegional: {
              hinglish: '"She" ke sath kya aayega? (Wo bahut tezi se English seekh rahi hai):',
              hindi: '"She" के साथ सही क्रिया चुनें (वह बहुत तेज़ी से अंग्रेज़ी सीख रही है):',
              haryanvi: '"She" गेल्या के छांटोगे? (वा बड़ी तेज English सीखै सै):',
              awadhi: '"She" के संग का लागि? (उ बहुत जल्दी English सीखत अहिन):',
              bhojpuri: '"She" के साथे का लागी? (उ बहुते तेजी से अंग्रेजी सीखत बाड़ी):',
              rajasthani: '"She" रै सागे कांई लागसी? (बा घणी तेजी सूं English सीख री है):'
            },
            options: [
              { id: 'opt1', text: 'is', isCorrect: true },
              { id: 'opt2', text: 'are', isCorrect: false },
              { id: 'opt3', text: 'am', isCorrect: false }
            ],
            explanation: {
              hinglish: 'He, She, It aur ek vachan (Singular) naam ke sath "is" lagta hai.',
              hindi: 'एकवचन संज्ञा एवं He/She/It के साथ "is" का प्रयोग होता है।',
              haryanvi: 'He, She अर एक जणे खातिर "is" लगावैं।',
              awadhi: 'He, She अउर एक मनई खातिर "is" लगावा जात है।',
              bhojpuri: 'He, She आ एकवचन खातिर "is" लगावल जाला।',
              rajasthani: 'He, She अर एक जणे वास्ते "is" लाग्या करे।'
            }
          },
          {
            id: 'q3',
            type: 'fill_blank',
            sentenceParts: ['They ', ' playing cricket in the field.'],
            blankIndex: 1,
            audioText: 'They are playing cricket in the field.',
            promptRegional: {
              hinglish: '"They" (Zyada log) ke sath kya lagta hai?',
              hindi: '"They" (बहुवचन) के साथ क्या प्रयुक्त होता है?',
              haryanvi: '"They" (घणे जणे) खातिर के लावैंगे?',
              awadhi: '"They" (ढेर मनई) खातिर का लागि?',
              bhojpuri: '"They" (बहुत लोग) खातिर का लागी?',
              rajasthani: '"They" (घणा जणा) वास्ते कांई लागसी?'
            },
            options: [
              { id: 'opt1', text: 'are', isCorrect: true },
              { id: 'opt2', text: 'is', isCorrect: false },
              { id: 'opt3', text: 'am', isCorrect: false }
            ],
            explanation: {
              hinglish: 'We, They, You aur bahuvachan (Plural) ke sath "are" lagta hai.',
              hindi: 'बहुवचन कर्ता एवं We/They/You के साथ "are" प्रयुक्त होता है।',
              haryanvi: 'घणे जण्यां खातिर अर They खातिर "are" लावैं।',
              awadhi: 'ढेर लोग खातिर अउर They के संग "are" लगावा जात है।',
              bhojpuri: 'बहुत लोग आ They खातिर "are" लगावल जाला।',
              rajasthani: 'घणा लोगां वास्ते अर They रै सागे "are" लागे।'
            }
          },
          {
            id: 'q4',
            type: 'choice_english_to_regional',
            englishPrompt: 'We are ready to learn.',
            audioText: 'We are ready to learn.',
            phonetic: 'वी आर रेडी टू लर्न',
            promptRegional: {
              hinglish: 'Iska sahi matlab kya hai?',
              hindi: 'इसका सही अर्थ क्या है?',
              haryanvi: 'इसका ठीक मतलब के सै?',
              awadhi: 'एकर सही अर्थ का होई?',
              bhojpuri: 'एकर सही अर्थ का होई?',
              rajasthani: 'इणरो सही मतलब कांई है?'
            },
            options: [
              {
                id: 'opt1',
                text: {
                  hinglish: 'Hum seekhne ke liye taiyar hain.',
                  hindi: 'हम सीखने के लिए तैयार हैं।',
                  haryanvi: 'म्हाम सीखण खातिर त्यार सां।',
                  awadhi: 'हम सीखै खातिर तइयार अही।',
                  bhojpuri: 'हमनी के सीखे खातिर तइयार बानी।',
                  rajasthani: 'म्हे सीखण वास्ते त्यार हां।'
                },
                isCorrect: true
              },
              {
                id: 'opt2',
                text: {
                  hinglish: 'Wo so rahe hain.',
                  hindi: 'वे सो रहे हैं।',
                  haryanvi: 'वे सोवे सैं।',
                  awadhi: 'उ सोवत अहिन।',
                  bhojpuri: 'उ लोग सूतत बा।',
                  rajasthani: 'वे सो रिया है।'
                },
                isCorrect: false
              }
            ],
            explanation: {
              hinglish: 'We = Hum, ready = taiyar, to learn = seekhne ke liye.',
              hindi: 'We (हम) + are (हैं) + ready to learn (सीखने के लिए तैयार)।',
              haryanvi: 'We मतलब म्हाम, ready मतलब त्यार, to learn मतलब सीखण ताहीं।',
              awadhi: 'We माने हम, ready माने तइयार, learn माने सीखब।',
              bhojpuri: 'We माने हमनी के, ready माने तइयार, learn माने सीखल।',
              rajasthani: 'We माने म्हे, ready माने त्यार, learn माने सीखणो।'
            }
          },
          {
            id: 'q5',
            type: 'reorder_sentence',
            correctSentence: 'He is my best friend',
            words: ['friend', 'is', 'He', 'best', 'my'],
            audioText: 'He is my best friend',
            promptRegional: {
              hinglish: 'Sahi kram lagayein (Wo mera pakka dost hai):',
              hindi: 'व्यवस्थित करें (वह मेरा सबसे अच्छा मित्र है):',
              haryanvi: 'जमाओ (यो म्हारा लंगोटिया यार सै):',
              awadhi: 'सजावा (उ हमार जिगरी यार अहई):',
              bhojpuri: 'सजाईं (उ हमार लंगोटिया यार ह):',
              rajasthani: 'जमाओ (ओ म्हांरो पक्को भायलो है):'
            },
            explanation: {
              hinglish: 'He (Wo) + is (hai) + my best friend (mera sabse accha dost).',
              hindi: 'He (वह) + is (है) + my best friend (मेरा परम मित्र)।',
              haryanvi: 'He is my best friend (यो म्हारा सबसे बढ़िया यार सै)।',
              awadhi: 'He is my best friend (उ हमार खास दोस्त अहई)।',
              bhojpuri: 'He is my best friend (उ हमार खास दोस्त ह)।',
              rajasthani: 'He is my best friend (ओ म्हांरो घणो पक्को भायलो है)।'
            }
          }
          ]
        },
        {
        id: 'm3-l2',
        moduleId: 'module-3',
        title: 'Past & Future Tense (Was, Were & Will)',
        description: 'Beete hue kal aur aane wale kal ke sahi vakya bolna',
        xpReward: 25,
        coinReward: 12,
        questions: [
          {
            id: 'q1',
            type: 'fill_blank',
            sentenceParts: ['Yesterday, she ', ' very happy with the exam results.'],
            blankIndex: 1,
            audioText: 'Yesterday, she was very happy with the exam results.',
            phonetic: 'यस्टरडे, शी वॉज़ वेरी हैप्पी विद द एग्ज़ैम रिज़ल्ट्स।',
            promptRegional: {
              hinglish: 'Kal beete hue samay ke liye sahi helping verb chunein:',
              hindi: 'बीते हुए कल के लिए सही सहायक क्रिया (Helping Verb) चुनें:',
              haryanvi: 'बीते काल खातिर ठीक क्रिया छांटो:',
              awadhi: 'बीतल काल खातिर सही सहायक क्रिया चुनि:',
              bhojpuri: 'बीतल समय खातिर सही सहायक क्रिया चुनीं:',
              rajasthani: 'बीत्योड़े काल वास्ते सही क्रिया चुणो:'
            },
            options: [
              { id: 'opt1', text: 'was', isCorrect: true },
              { id: 'opt2', text: 'is', isCorrect: false },
              { id: 'opt3', text: 'will', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Beete hue kal (Yesterday) ke liye ekvachan (she) ke sath "was" lagta hai.',
              hindi: 'भूतकाल में एकवचन कर्ता (She) के साथ "was" का प्रयोग होता है।',
              haryanvi: 'गुजरे काल म एक जणे खातिर "was" का प्रयोग होवै सै।',
              awadhi: 'बीते समय में एक मनई खातिर "was" लगावल जात है।',
              bhojpuri: 'बीतल समय में एकवचन खातिर "was" लगावल जाला।',
              rajasthani: 'बीत्योड़े काल में एकवचन वास्ते "was" रो प्रयोग वेवे है।'
            }
          },
          {
            id: 'q2',
            type: 'reorder_sentence',
            correctSentence: 'I will call you tomorrow',
            words: ['tomorrow', 'will', 'you', 'call', 'I'],
            promptRegional: {
              hinglish: 'Shabdon ko sahi kram mein sajayein: "Main kal aapko phone karunga"',
              hindi: 'शब्दों को सही क्रम में लगाएं: "मैं कल आपको फोन करूंगा"',
              haryanvi: 'शब्दां नै ठीक जमाओ: "मैं काल तन्ने फोन करूंगा"',
              awadhi: 'शब्दन का सही क्रम में लगावा: "हम कल तोहका फोन करब"',
              bhojpuri: 'शब्दन के सही क्रम में सजाईं: "हम काल्हु रउआ के फोन करब"',
              rajasthani: 'शब्दां नै सही जमाओ: "म्हे काल थांने फोन कूलां"'
            },
            explanation: {
              hinglish: 'Bhavishya (Future) ke liye Subject + will + Verb 1st form ka use hota hai: "I will call you tomorrow".',
              hindi: 'भविष्य काल में "I will call you tomorrow" शुद्ध वाक्य संरचना है।',
              haryanvi: 'आवण आले काल खातिर "will" लगाकै वाक्य बणै सै।',
              awadhi: 'आवै वाले समय खातिर "will" लगावल जात है।',
              bhojpuri: 'भविष्य खातिर "will" के प्रयोग कइल जाला।',
              rajasthani: 'आवै वाळे काल वास्ते "will" लगायो जावे है।'
            }
          },
          {
            id: 'q3',
            type: 'choice_regional_to_english',
            promptRegional: {
              hinglish: '"Hum kal nayi car dekhenge" ko English mein kya kahenge?',
              hindi: '"हम कल नई कार देखेंगे" को अंग्रेज़ी में क्या कहेंगे?',
              haryanvi: '"म्हाम काल नई गाड़ी देखैंगे" नै English म के बोलैंगे?',
              awadhi: '"हम सब काल नई मोटर देखब" का अंग्रेज़ी में का कहब?',
              bhojpuri: '"हमनी के काल्हु नया गाड़ी देखब जा" के अंग्रेजी में का कहल जाई?',
              rajasthani: '"म्हे काल नई गाड़ी देखांला" नै English में कांई कहवे?'
            },
            audioText: 'We will see the new car tomorrow.',
            phonetic: 'वी विल सी द न्यू कार टुमॉरो।',
            options: [
              { id: 'opt1', text: 'We will see the new car tomorrow.', isCorrect: true },
              { id: 'opt2', text: 'We was see the car yesterday.', isCorrect: false },
              { id: 'opt3', text: 'We are see car now.', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Hum (We) aur aane wale kal ke liye "We will see the new car tomorrow" bilkul sahi hai.',
              hindi: 'भविष्य काल में "We will see..." सही संरचना है।',
              haryanvi: 'आवण आले काम खातिर "will see" का प्रयोग होवै सै।',
              awadhi: 'आवै वाले काल खातिर "We will see" बोला जात है।',
              bhojpuri: 'भविष्य काल में "We will see" सही बा।',
              rajasthani: 'आवण वाळा काम वास्ते "We will see" शुद्ध है।'
            }
          },
          {
            id: 'q4',
            type: 'match_pairs',
            promptRegional: {
              hinglish: 'Samay batane wale shabdon ko unke sahi arth se jodein:',
              hindi: 'काल सूचक शब्दों को उनके सही अर्थ से मिलाएं:',
              haryanvi: 'टेम बतावण आले शब्दां का सही मिलान करो:',
              awadhi: 'समय बतावै वाले शब्दन का जोड़ी मिलावा:',
              bhojpuri: 'समय बतावे वाला शब्दन के सही जोड़ा मिलाईं:',
              rajasthani: 'बगत बतावण वाळा शब्दां रो सही मिलान करो:'
            },
            pairs: [
              {
                english: 'Yesterday',
                regional: {
                  hinglish: 'Beeta hua kal',
                  hindi: 'बीता हुआ कल',
                  haryanvi: 'गुजरा काल',
                  awadhi: 'बीतल कल',
                  bhojpuri: 'बीतल काल्ह',
                  rajasthani: 'बीत्योड़ो काल'
                }
              },
              {
                english: 'Tomorrow',
                regional: {
                  hinglish: 'Aane wala kal',
                  hindi: 'आने वाला कल',
                  haryanvi: 'आवण आला काल',
                  awadhi: 'आवै वाला कल',
                  bhojpuri: 'आवे वाला काल्ह',
                  rajasthani: 'आवै वाळो काल'
                }
              },
              {
                english: 'Today',
                regional: {
                  hinglish: 'Aaj ka din',
                  hindi: 'आज',
                  haryanvi: 'आज',
                  awadhi: 'आज',
                  bhojpuri: 'आजु',
                  rajasthani: 'आज'
                }
              }
            ],
            explanation: {
              hinglish: 'Yesterday = beeta hua kal, Today = aaj, Tomorrow = aane wala kal.',
              hindi: 'अंग्रेज़ी में काल सूचक शब्द संवाद के लिए बेहद महत्वपूर्ण हैं।',
              haryanvi: 'यो टेम का ज्ञान बोल-चाल खातिर घणा जरूरी सै।',
              awadhi: 'ई तीनौ शब्द बातचीत में रोज काम आवत हैं।',
              bhojpuri: 'ई तीनो शब्द रोज के बातचीत में काम आवेला।',
              rajasthani: 'ओ बगत रो ज्ञान बातचीत में घणो काम आवे।'
            }
          },
          {
            id: 'q5',
            type: 'choice_english_to_regional',
            englishPrompt: 'They were playing cricket in the ground.',
            audioText: 'They were playing cricket in the ground.',
            phonetic: 'दे वर प्लेइंग क्रिकेट इन द ग्राउंड।',
            promptRegional: {
              hinglish: 'Is vakya ka sahi matlab chunein:',
              hindi: 'इस वाक्य का सही अर्थ चुनें:',
              haryanvi: 'इस बात का ठीक मतलब के सै?',
              awadhi: 'एकर सही मतलब का होई?',
              bhojpuri: 'एकर सही मतलब का होखी?',
              rajasthani: 'इण रो सही मतलब कांई हुवे?'
            },
            options: [
              { id: 'opt1', text: {
                hinglish: 'Ve maidan mein cricket khel rahe the.',
                hindi: 'वे मैदान में क्रिकेट खेल रहे थे।',
                haryanvi: 'वे मैदान म क्रिकेट खेलण लागरे थे।',
                awadhi: 'उ सब मैदान में क्रिकेट खेलत रहेन।',
                bhojpuri: 'उ लोग मैदान में क्रिकेट खेलत रहलें।',
                rajasthani: 'वे मैदान में क्रिकेट खेल रिया हा।'
              }, isCorrect: true },
              { id: 'opt2', text: {
                hinglish: 'Ve maidan mein so rahe hain.',
                hindi: 'वे मैदान में सो रहे हैं।',
                haryanvi: 'वे मैदान म सोवैं सै।',
                awadhi: 'उ सब मैदान में सूतत हैं।',
                bhojpuri: 'उ लोग मैदान में सूतत बाड़न।',
                rajasthani: 'वे मैदान में सूता है।'
              }, isCorrect: false },
              { id: 'opt3', text: {
                hinglish: 'Hum cricket kal khelenge.',
                hindi: 'हम क्रिकेट कल खेलेंगे।',
                haryanvi: 'म्हाम क्रिकेट काल खेलैंगे।',
                awadhi: 'हम सब क्रिकेट काल खेलब।',
                bhojpuri: 'हमनी के क्रिकेट काल्हु खेलब।',
                rajasthani: 'म्हे क्रिकेट काल खेलांला।'
              }, isCorrect: false }
            ],
            explanation: {
              hinglish: '"They were playing" ka matlab beete hue samay mein koi kaam chal raha tha (Past Continuous).',
              hindi: 'भूतकाल में लगातार हो रही क्रिया (Past Continuous) हेतु "were playing" का प्रयोग होता है।',
              haryanvi: 'भूतकाल म चालदे काम खातिर "were playing" बोल्या जावै सै।',
              awadhi: 'बीते समय में चालू काम खातिर "were playing" कहल जात है।',
              bhojpuri: 'बीतल समय में चलत काम खातिर "were playing" कहल जाला।',
              rajasthani: 'बीत्योड़े बगत में चालते काम वास्ते "were playing" बोलीजे।'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'module-4',
    number: 4,
    title: 'Sentence Formation',
    subtitle: 'Chhote-chhote shabdon se poore vakya banayein',
    icon: 'Edit3',
    color: 'violet',
    description: 'Learn Subject-Verb-Object pattern, forming negative sentences, and asking smart questions.',
    totalLessons: 1,
    lessons: [
      {
        id: 'm4-l1',
        moduleId: 'module-4',
        title: 'Making Questions & SVO Rules',
        description: 'Sawaal poochne ka aasan tareeqa',
        xpReward: 20,
        coinReward: 10,
        questions: [
          {
            id: 'q1',
            type: 'choice_regional_to_english',
            promptRegional: {
              hinglish: '"Aap kya karte hain?" ko English mein poochiye:',
              hindi: '"आप क्या करते हैं?" (पेशा/काम) को अंग्रेज़ी में पूछें:',
              haryanvi: '"तू के काम करै सै?" नै English म बूझो:',
              awadhi: '"आप का काम करत अहौ?" के English में पूछा:',
              bhojpuri: '"रउआ का काम करिला?" के अंग्रेजी में पूछीं:',
              rajasthani: '"थे कांई काम करो हो?" नै English में पूछो:'
            },
            audioText: 'What do you do?',
            phonetic: 'व्हॉट डू यू डू?',
            options: [
              { id: 'opt1', text: 'What do you do?', isCorrect: true },
              { id: 'opt2', text: 'Where do you run?', isCorrect: false },
              { id: 'opt3', text: 'Who am I?', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Profession ya kaam poochne ke liye "What do you do?" bola jata hai.',
              hindi: 'किसी की आजीविका या पेशा पूछने हेतु यह मानक प्रश्न है।',
              haryanvi: 'काम-धंधा बूझण खातिर "What do you do?" बोल्या करैं।',
              awadhi: 'काम-काज पूछे खातिर "What do you do?" कहल जात है।',
              bhojpuri: 'रोजगार भा पेशा पूछे खातिर ई पूछल जाला।',
              rajasthani: 'काम-धंधो पूछण वास्ते "What do you do?" बोलीजे।'
            }
          },
          {
            id: 'q2',
            type: 'reorder_sentence',
            correctSentence: 'Where do you live',
            words: ['live', 'Where', 'you', 'do'],
            audioText: 'Where do you live?',
            promptRegional: {
              hinglish: 'Shabdon ko sajayein (Aap kahan rehte hain?):',
              hindi: 'व्यवस्थित करें (आप कहाँ रहते हैं?):',
              haryanvi: 'जमाओ (तू कित रहवै सै?):',
              awadhi: 'सजावा (आप कहां रहत अहौ?):',
              bhojpuri: 'सजाईं (रउआ कहां रहींला?):',
              rajasthani: 'जमाओ (थे कठे रहो हो?):'
            },
            explanation: {
              hinglish: 'Question Word (Where) + Helping verb (do) + Subject (you) + Verb (live).',
              hindi: 'प्रश्नवाचक शब्द (Where) + do + you + क्रिया (live)।',
              haryanvi: 'पैहला Where, फेर do you live लावैं।',
              awadhi: 'पहिलै Where, फेरि do you live।',
              bhojpuri: 'पहिले Where, तब do you live।',
              rajasthani: 'पैली Where, पछै do you live।'
            }
          },
          {
            id: 'q3',
            type: 'fill_blank',
            sentenceParts: ['I do ', ' understand this question.'],
            blankIndex: 1,
            audioText: 'I do not understand this question.',
            promptRegional: {
              hinglish: 'Negation (Inkar) ke liye khali jagah bharein (Mujhe ye sawal samajh nahi aaya):',
              hindi: 'नकारात्मक वाक्य के लिए रिक्त स्थान भरें (मुझे यह प्रश्न समझ नहीं आया):',
              haryanvi: 'खाली जगह भरो (मन्नै यो सवाल समझ ना आया):',
              awadhi: 'खाली जगह भरा (हमार ई सवाल समझ में नाहीं आवा):',
              bhojpuri: 'खाली जगह भरीं (हमरा ई सवाल समझ ना आइल):',
              rajasthani: 'खाली जगह भरो (म्हनै ओ सवाल समझ नी आयो):'
            },
            options: [
              { id: 'opt1', text: 'not', isCorrect: true },
              { id: 'opt2', text: 'yes', isCorrect: false },
              { id: 'opt3', text: 'apple', isCorrect: false }
            ],
            explanation: {
              hinglish: '"do not understand" ka matlab samajh nahi aana hota hai.',
              hindi: 'नहीं समझने पर विनम्रता से "I do not understand" कहें।',
              haryanvi: 'समझ ना आवै ता कहैं "I do not understand"।',
              awadhi: 'ना समझै पर "I do not understand" कहल जात है।',
              bhojpuri: 'ना समझ अइला पर "I do not understand" कहल जाला।',
              rajasthani: 'नी समझ आवे जणा "I do not understand" बोलीजे।'
            }
          },
          {
            id: 'q4',
            type: 'choice_english_to_regional',
            englishPrompt: 'Can you please speak slowly?',
            audioText: 'Can you please speak slowly?',
            phonetic: 'कैन यू प्लीज स्पीक स्लोली?',
            promptRegional: {
              hinglish: 'Iska sahi anuvad kya hai?',
              hindi: 'इसका सही अनुवाद क्या है?',
              haryanvi: 'इसका ठीक मतलब के सै?',
              awadhi: 'एकर सही मतलब का होई?',
              bhojpuri: 'एकर सही मतलब का होई?',
              rajasthani: 'इणरो सही मतलब कांई है?'
            },
            options: [
              {
                id: 'opt1',
                text: {
                  hinglish: 'Kya aap kripya thoda dheere bol sakte hain?',
                  hindi: 'क्या आप कृपया थोड़ा धीरे बोल सकते हैं?',
                  haryanvi: 'के भाई, थोड़ा हौले/धीमे बोल सकै सै?',
                  awadhi: 'का आप कृपा कइके तनिक धीमे बोलि सकत अहौ?',
                  bhojpuri: 'का रउआ तनी धीरे बोल सकेनी?',
                  rajasthani: 'कांई थे थोड़ा धीरे बोल सको हो?'
                },
                isCorrect: true
              },
              {
                id: 'opt2',
                text: {
                  hinglish: 'Kya aap gaana gaa sakte hain?',
                  hindi: 'क्या आप गाना गा सकते हैं?',
                  haryanvi: 'के तू रागणी गा सकै सै?',
                  awadhi: 'का आप गाना गाइ सकत अहौ?',
                  bhojpuri: 'का रउआ गाना गा सकेनी?',
                  rajasthani: 'कांई थे गाणो गा सको हो?'
                },
                isCorrect: false
              }
            ],
            explanation: {
              hinglish: 'Slowly = Dheere-dheere. Speak = Bolna.',
              hindi: 'Slowly का अर्थ धीरे-धीरे और Speak का अर्थ बोलना होता है।',
              haryanvi: 'हौले-हौले बोलण खातिर "speak slowly" बोलैं।',
              awadhi: 'धीमे-धीमे बोलै खातिर "speak slowly" कहा जात है।',
              bhojpuri: 'धीरे-धीरे बोले खातिर "speak slowly" कहल जाला।',
              rajasthani: 'धीमे बोलण वास्ते "speak slowly" बोलीजे।'
            }
          },
          {
            id: 'q5',
            type: 'match_pairs',
            promptRegional: {
              hinglish: 'Question words aur unke arth jodiye:',
              hindi: 'प्रश्नवाचक शब्दों को उनके सही अर्थ से मिलाएँ:',
              haryanvi: 'सवाली शब्दां नै उनके मतलब तै मिलाओ:',
              awadhi: 'प्रश्न वाचक शब्दन के अर्थ से मिलावा:',
              bhojpuri: 'सवालिया शब्द के अर्थ से मिलाईं:',
              rajasthani: 'सवाली शब्दां रा मतलब जोड़ो:'
            },
            pairs: [
              {
                english: 'Why',
                regional: {
                  hinglish: 'Kyun',
                  hindi: 'क्यों / किसलिए',
                  haryanvi: 'क्यूँकर / क्यूँ',
                  awadhi: 'काहे / काहे बर',
                  bhojpuri: 'काहे / काहे खातिर',
                  rajasthani: 'कांई वास्ते / क्यूं'
                }
              },
              {
                english: 'When',
                regional: {
                  hinglish: 'Kab',
                  hindi: 'कब / किस समय',
                  haryanvi: 'कदे / किस टेम',
                  awadhi: 'कब / कउने समै',
                  bhojpuri: 'कब / कवने समय',
                  rajasthani: 'कदे / कदी'
                }
              },
              {
                english: 'How',
                regional: {
                  hinglish: 'Kaise',
                  hindi: 'कैसे / किस प्रकार',
                  haryanvi: 'किस तरह / क्यूंकर',
                  awadhi: 'कइसन / कइसे',
                  bhojpuri: 'कइसे / कइसन',
                  rajasthani: 'कियान / किस तरिया'
                }
              }
            ],
            explanation: {
              hinglish: 'Why, When, How sawal poochne ke basic pillars hain.',
              hindi: 'Why (क्यों), When (कब), How (कैसे) मूल प्रश्नवाचक शब्द हैं।',
              haryanvi: 'ये तीनू शब्द हर सवाल म घणे काम आवैं सैं।',
              awadhi: 'कौनो सवाल पूछे खातिर ई तीनिउ शब्द बहुत जरूरी हैं।',
              bhojpuri: 'कौनो सवाल पूछे खातिर ई तीने गो शब्द मुख्य बा।',
              rajasthani: 'ए तीनूं शब्द हर सवाल पूछण वास्ते घणा जरूरी है।'
            }
          }
          ]
        },
        {
        id: 'm4-l2',
        moduleId: 'module-4',
        title: 'Modals & Negatives (Can, Should & Cannot)',
        description: 'Samarthya (Can), Salah (Should) aur inkaar karna seekhein',
        xpReward: 25,
        coinReward: 12,
        questions: [
          {
            id: 'q1',
            type: 'fill_blank',
            sentenceParts: ['You ', ' drink clean water every single day.'],
            blankIndex: 1,
            audioText: 'You should drink clean water every single day.',
            phonetic: 'यू शुड ड्रिंक क्लीन वॉटर एव्री सिंगल डे।',
            promptRegional: {
              hinglish: 'Kisi ko achhi salah (advice) dene ke liye kya prayog karenge?',
              hindi: 'किसी को अच्छी सलाह देने हेतु उपयुक्त मोडल (Modal) चुनें:',
              haryanvi: 'किसी नै भली सलाह देण खातिर के लगाओगे?',
              awadhi: 'केहू का नेक सलाह देवै खातिर का चुनिब?',
              bhojpuri: 'केहू के नीमन सलाह देवे खातिर का लगावल जाई?',
              rajasthani: 'कोई नै चोखी सीख देवण वास्ते कांई लगावोला?'
            },
            options: [
              { id: 'opt1', text: 'should', isCorrect: true },
              { id: 'opt2', text: 'was', isCorrect: false },
              { id: 'opt3', text: 'did', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Salah (advice) dene ke liye hamesha "should" ka prayog hota hai (You should...).',
              hindi: 'कर्तव्य अथवा परामर्श हेतु "Should" का प्रयोग होता है।',
              haryanvi: 'सलाह देण खातिर "should" बोल्या जावै सै।',
              awadhi: 'सलाह देवै खातिर "should" लगावल जात है।',
              bhojpuri: 'सलाह देवे खातिर "should" के प्रयोग होखेला।',
              rajasthani: 'सलाह देवण वास्ते "should" रो प्रयोग वेवे है।'
            }
          },
          {
            id: 'q2',
            type: 'reorder_sentence',
            correctSentence: 'I cannot speak very fast',
            words: ['fast', 'very', 'cannot', 'I', 'speak'],
            promptRegional: {
              hinglish: 'Vakya banayein: "Main bohot tez nahi bol sakta"',
              hindi: 'क्रमबद्ध करें: "मैं बहुत तेज़ नहीं बोल सकता"',
              haryanvi: 'जमाओ: "मैं घणा तेज ना बोल सकदा"',
              awadhi: 'सजावा: "हम बहुत तेज नाहीं बोल पावत हन"',
              bhojpuri: 'सजाईं: "हम बहुते तेज नइखीं बोल सकत"',
              rajasthani: 'जमाओ: "म्हे घणो तेज कोनी बोल सकूं"'
            },
            explanation: {
              hinglish: 'Asamarthata jatane ke liye "cannot" ka use hota hai: "I cannot speak very fast".',
              hindi: 'असमर्थता व्यक्त करने हेतु "cannot" का प्रयोग किया जाता है।',
              haryanvi: 'ना कर सकण आले काम खातिर "cannot" लगै सै।',
              awadhi: 'असमर्थता बतावै खातिर "cannot" बोलल जात है।',
              bhojpuri: 'असमर्थता बतावे खातिर "cannot" के प्रयोग होला।',
              rajasthani: 'असमर्थता बतावण वास्ते "cannot" बोलीजे।'
            }
          },
          {
            id: 'q3',
            type: 'choice_regional_to_english',
            promptRegional: {
              hinglish: '"Kya aap meri madad kar sakte hain?" ko English mein kya kahenge?',
              hindi: '"क्या आप मेरी मदद कर सकते हैं?" का सही अंग्रेज़ी अनुवाद चुनें:',
              haryanvi: '"के तू मेरी मदद कर सकै सै?" नै English म के कहवैंगे?',
              awadhi: '"का आप हमार मदद कइ सकत हौ?" के अंग्रेज़ी में का कहब?',
              bhojpuri: '"का रउआ हमार मदद क सकत बानी?" के अंग्रेजी में का कहल जाई?',
              rajasthani: '"कांई थे म्हारी मदद कर सको हो?" नै English में कांई कहवे?'
            },
            audioText: 'Can you help me?',
            phonetic: 'कैन यू हेल्प मी?',
            options: [
              { id: 'opt1', text: 'Can you help me?', isCorrect: true },
              { id: 'opt2', text: 'Are you help me?', isCorrect: false },
              { id: 'opt3', text: 'Do you helping me?', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Madad maangne ke liye vinamra sawal: "Can you help me?" ya "Could you help me?".',
              hindi: 'अनुरोध हेतु "Can you help me?" सरल एवं प्रचलित वाक्य है।',
              haryanvi: 'मदद मांगण खातिर "Can you help me?" बोल्या जावै सै।',
              awadhi: 'मदद मांगै खातिर "Can you help me?" कहा जात है।',
              bhojpuri: 'मदद माँगे खातिर "Can you help me?" कहल जाला।',
              rajasthani: 'मदद मांगण वास्ते "Can you help me?" बोल्यो जावे।'
            }
          },
          {
            id: 'q4',
            type: 'choice_english_to_regional',
            englishPrompt: 'We must follow the traffic rules.',
            audioText: 'We must follow the traffic rules.',
            phonetic: 'वी मस्ट फॉलो द ट्रैफिक रूल्स।',
            promptRegional: {
              hinglish: 'Is vakya ka sahi matlab kya hai?',
              hindi: 'इस वाक्य का सटीक अर्थ पहचानें:',
              haryanvi: 'इस बात का सही मतलब के सै?',
              awadhi: 'ई बात का सही मतलब का बा?',
              bhojpuri: 'ई बात के सही मतलब का बा?',
              rajasthani: 'इण बात रो सही मतलब कांई है?'
            },
            options: [
              { id: 'opt1', text: {
                hinglish: 'Hamein traffic niyam ka palan zaroor karna chahiye.',
                hindi: 'हमें यातायात नियमों का पालन अवश्य करना चाहिए।',
                haryanvi: 'म्हाने ट्रैफिक के नियमां का पालन जरूर करना चाहिए।',
                awadhi: 'हमन का ट्रैफिक नियमन का पालन जरूर करै के चाही।',
                bhojpuri: 'हमार लोगन के ट्रैफिक नियम के पालन जरूर करे के चाहीं।',
                rajasthani: 'म्हाने यातायात नियमां रो पालन जरूर करनो चाहिजे।'
              }, isCorrect: true },
              { id: 'opt2', text: {
                hinglish: 'Hum traffic tod sakte hain.',
                hindi: 'हम ट्रैफिक तोड़ सकते हैं।',
                haryanvi: 'म्हाम ट्रैफिक तोड़ सकैं सां।',
                awadhi: 'हम ट्रैफिक तोड़ सकित हन।',
                bhojpuri: 'हमनी के ट्रैफिक तोड़ सकत बानी।',
                rajasthani: 'म्हे ट्रैफिक तोड़ सकां।'
              }, isCorrect: false },
              { id: 'opt3', text: {
                hinglish: 'Traffic niyam bekar hain.',
                hindi: 'ट्रैफिक नियम बेकार हैं।',
                haryanvi: 'ट्रैफिक नियम फालतू सैं।',
                awadhi: 'ट्रैफिक नियम बेकार अहें।',
                bhojpuri: 'ट्रैफिक नियम बेकार बा।',
                rajasthani: 'ट्रैफिक नियम बेकार है।'
              }, isCorrect: false }
            ],
            explanation: {
              hinglish: '"Must" ka use anivarya (zaroori) kartavya ke liye hota hai.',
              hindi: '"Must" अनिवार्य दायित्व को दर्शाता है।',
              haryanvi: '"Must" पक्के अर जरूरी काम खातिर लागै सै।',
              awadhi: '"Must" जरूरी काम खातिर लगावल जात है।',
              bhojpuri: '"Must" एकदम जरूरी काम खातिर प्रयोग होला।',
              rajasthani: '"Must" अनिवार्य काम वास्ते बोलीजे।'
            }
          },
          {
            id: 'q5',
            type: 'conversation_reply',
            speaker: 'Student',
            dialogue: 'Excuse me Sir, may I come in?',
            audioText: 'Excuse me Sir, may I come in?',
            promptRegional: {
              hinglish: 'Chhatra ne andar aane ki aagya maangi. Teacher ka vinamra jawab chunein:',
              hindi: 'छात्र ने प्रवेश की अनुमति मांगी। शिक्षक का सही प्रत्युत्तर चुनें:',
              haryanvi: 'बालक नै भीतर आवण की इजाजत मांगी। मास्टर जी का ठीक उत्तर छांटो:',
              awadhi: 'लड़िका भीतर आवै के आज्ञा माँगेस। मास्टर जी का सही जवाब चुनि:',
              bhojpuri: 'लइका अंदर आवे के अनुमति माँगलस। गुरुजी के सही जवाब चुनीं:',
              rajasthani: 'विद्यार्थी मांय आवण री आज्ञा मांगी। गुरुजी रो सही उत्तर कांई होसी?'
            },
            options: [
              { id: 'opt1', text: 'Yes, please come in and take your seat.', isCorrect: true },
              { id: 'opt2', text: 'I am eating an apple.', isCorrect: false },
              { id: 'opt3', text: 'Tomorrow is Sunday.', isCorrect: false }
            ],
            explanation: {
              hinglish: '"May I come in?" ke uttar mein shishtachar se "Yes, please come in" kaha jata hai.',
              hindi: 'विनम्र उत्तर के रूप में "Yes, please come in" कहना शिष्टाचार है।',
              haryanvi: 'सत्कार तै "Yes, please come in" बोल्या करैं।',
              awadhi: 'आदर से "Yes, please come in" कहल जात है।',
              bhojpuri: 'आदर से "Yes, please come in" कहल जाला।',
              rajasthani: 'आदर सूं "Yes, please come in" बोलीजे।'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'module-5',
    number: 5,
    title: 'Spoken English',
    subtitle: 'Apna parichay aur aatmbishwas se baat karna',
    icon: 'Mic',
    color: 'rose',
    description: 'Self-introduction, phone etiquette, and building confidence in public speaking.',
    totalLessons: 1,
    lessons: [
      {
        id: 'm5-l1',
        moduleId: 'module-5',
        title: 'Introducing Yourself Confidently',
        description: 'Bina jhijhak apna parichay kaise dein',
        xpReward: 30,
        coinReward: 20,
        questions: [
          {
            id: 'q1',
            type: 'reorder_sentence',
            correctSentence: 'My name is Rahul and I live in Delhi',
            words: ['live', 'Rahul', 'My', 'name', 'in', 'is', 'and', 'Delhi', 'I'],
            audioText: 'My name is Rahul and I live in Delhi',
            promptRegional: {
              hinglish: 'Apna parichay dene ke liye sahi kram lagayein:',
              hindi: 'अपना परिचय देने के लिए वाक्य को सही क्रम में व्यवस्थित करें:',
              haryanvi: 'अपना नाम-पत्ता बताण खातिर सही जमाओ:',
              awadhi: 'अपन परिचय देवै खातिर सही सजावा:',
              bhojpuri: 'अपन परिचय देवे खातिर सही क्रम में सजाईं:',
              rajasthani: 'अपनो ओलखो बतावण वास्ते सही जमाओ:'
            },
            explanation: {
              hinglish: 'My name is [Name] and I live in [City] parichay ka sabse accha format hai.',
              hindi: 'आत्म-परिचय का यह सबसे स्वाभाविक और प्रभावी स्वरूप है।',
              haryanvi: 'नाम अर गाम बताण खातिर यो तरीका घणा सुथरा सै।',
              awadhi: 'अपन नाम अउर शहर बतावै खातिर ई वाक्य सबसे नीक है।',
              bhojpuri: 'नाम आ शहर बतावे खातिर ई वाक्य सबले बढ़िया बा।',
              rajasthani: 'नाम अर शहर बतावण वास्ते आ रीत घणी चोखी है।'
            }
          },
          {
            id: 'q2',
            type: 'choice_regional_to_english',
            promptRegional: {
              hinglish: '"Main graduation kar raha hoon" ko English mein kya kahenge?',
              hindi: '"मैं स्नातक (ग्रेजुएशन) की पढ़ाई कर रहा हूँ" को अंग्रेज़ी में क्या कहेंगे?',
              haryanvi: '"मैं कॉलेज म पढ़ाई करूँ सूं" नै English म के बोलैंगे?',
              awadhi: '"हम कॉलेज में ग्रेजुएशन करत अही" के English में का कहब?',
              bhojpuri: '"हम ग्रेजुएशन के पढ़ाई करत बानी" के अंग्रेजी में का कहल जाई?',
              rajasthani: '"म्हे कॉलेज री पढ़ाई कर रिया हां" नै English में कांई कहवे?'
            },
            audioText: 'I am pursuing my graduation.',
            phonetic: 'आई एम पर्स्यूइंग माय ग्रेजुएशन',
            options: [
              { id: 'opt1', text: 'I am pursuing my graduation.', isCorrect: true },
              { id: 'opt2', text: 'I am dancing in the rain.', isCorrect: false },
              { id: 'opt3', text: 'The sun is very hot today.', isCorrect: false }
            ],
            explanation: {
              hinglish: '"Pursuing" ka use hum kisi degree ya padhai ko jari rakhne ke liye karte hain.',
              hindi: 'शिक्षा जारी रखने के संदर्भ में "pursuing" का प्रयोग औपचारिक और उत्तम है।',
              haryanvi: 'पढ़ाई चालती हुवण खातिर "pursuing" शब्द लावैं।',
              awadhi: 'पढ़ाई चलत रहै के संदर्भ में "pursuing" लगावा जात है।',
              bhojpuri: 'पढ़ाई जारी रहे के बात में "pursuing" शब्द बोलल जाला।',
              rajasthani: 'पढ़ाई चालती होवे जणा "pursuing" शब्द काम आवे।'
            }
          },
          {
            id: 'q3',
            type: 'fill_blank',
            sentenceParts: ['In my free time, I love to ', ' books and play sports.'],
            blankIndex: 1,
            audioText: 'In my free time, I love to read books and play sports.',
            promptRegional: {
              hinglish: 'Hobby batane ke liye khali jagah bharein (Kitabein padhna):',
              hindi: 'शौक बताने के लिए रिक्त स्थान भरें (पुस्तकें पढ़ना):',
              haryanvi: 'खाली जगह भरो (किताब पढ़ना):',
              awadhi: 'खाली जगह भरा (किताब पढ़ब):',
              bhojpuri: 'खाली जगह भरीं (किताब पढ़ल):',
              rajasthani: 'खाली जगह भरो (पोथी पढ़णो):'
            },
            options: [
              { id: 'opt1', text: 'read', isCorrect: true },
              { id: 'opt2', text: 'cook', isCorrect: false },
              { id: 'opt3', text: 'break', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Read books = Kitabein padhna. Hobby batane ke liye common expression hai.',
              hindi: 'Read का अर्थ पढ़ना होता है। रुचियाँ बताते समय यह अक्सर काम आता है।',
              haryanvi: 'Read books मतलब किताब पढ़ना।',
              awadhi: 'Read books माने पोथी/किताब पढ़ब।',
              bhojpuri: 'Read books माने किताब पढ़ल।',
              rajasthani: 'Read books मतलब पोथी पढ़णो।'
            }
          },
          {
            id: 'q4',
            type: 'conversation_reply',
            speaker: 'Caller on Phone',
            dialogue: 'Hello, may I speak to Mr. Sharma please?',
            audioText: 'Hello, may I speak to Mr. Sharma please?',
            promptRegional: {
              hinglish: 'Phone par koi Sharma ji se baat karna chahta hai. Sahi polite uttar kya hoga?',
              hindi: 'फ़ोन पर कोई शर्मा जी से बात करना चाहता है। सभ्य प्रत्युत्तर चुनें:',
              haryanvi: 'फोन पै कोई शर्मा जी नै याद करै सै। ठीक जवाब के द्योगे?',
              awadhi: 'फोनवा पर केहू शर्मा जी से बात करै चाहत है। सही जवाब का होई?',
              bhojpuri: 'फोन पर केहू शर्मा जी से बात करे चाहत बा। सही जबाब का होई?',
              rajasthani: 'फोन माथै कोई शर्मा जी सूं बात करणी चावे। सही उत्तर कांई देवोला?'
            },
            options: [
              { id: 'opt1', text: 'Please hold on, I will call him right away.', isCorrect: true },
              { id: 'opt2', text: 'Why did you call me?', isCorrect: false },
              { id: 'opt3', text: 'Go away right now.', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Phone par "Please hold on" ka matlab hota hai kripya line par bane rahein.',
              hindi: 'फ़ोन पर विनम्रता से प्रतीक्षा करने के लिए "Please hold on" कहा जाता है।',
              haryanvi: 'फोन पै थोड़ी देर रुकण खातिर "Please hold on" बोल्या करैं।',
              awadhi: 'फोनवा पर थोरिक रुके खातिर "Please hold on" कहल जात है।',
              bhojpuri: 'फोन पर तनी रुके खातिर "Please hold on" बोलल जाला।',
              rajasthani: 'फोन माथै थोड़ी बार धीरज रखण वास्ते "Please hold on" बोलीजे।'
            }
          },
          {
            id: 'q5',
            type: 'choice_english_to_regional',
            englishPrompt: 'I believe in myself and I will achieve my goals.',
            audioText: 'I believe in myself and I will achieve my goals.',
            phonetic: 'आई बिलीव इन मायसेल्फ एंड आई विल अचीव माय गोल्स',
            promptRegional: {
              hinglish: 'Is prerak vakya ka kya arth hai?',
              hindi: 'इस प्रेरक वाक्य का क्या अर्थ है?',
              haryanvi: 'इस हौसले आले वाक्य का के मतलब सै?',
              awadhi: 'एकर का मतलब होई?',
              bhojpuri: 'एकर का मतलब बा?',
              rajasthani: 'इणरो कांई मतलब हुवे?'
            },
            options: [
              {
                id: 'opt1',
                text: {
                  hinglish: 'Mujhe khud par vishwas hai aur main apne lakshya zaroor paunga.',
                  hindi: 'मुझे स्वयं पर विश्वास है और मैं अपने लक्ष्यों को अवश्य प्राप्त करूँगा।',
                  haryanvi: 'मन्नै खुद पै पूरा भरोसा सै अर मैं अपना मुकाम पा\'क रयूंगा।',
                  awadhi: 'हमार अपन ऊपर पूरा भरोसा बा अउर हम आपन मंजिल पाइकै रहब।',
                  bhojpuri: 'हमरा अपने पर पूरा भरोसा बा आ हम आपन लक्ष्य जरूर हासिल करब।',
                  rajasthani: 'म्हनै खुद माथै पूरो भरोसो है अर म्हे आपरी मंजिल जरूर पांला।'
                },
                isCorrect: true
              },
              {
                id: 'opt2',
                text: {
                  hinglish: 'Main thak gaya hoon aur ghar ja raha hoon.',
                  hindi: 'मैं थक गया हूँ और घर जा रहा हूँ।',
                  haryanvi: 'मैं थक ग्या अर घरै जाऊं सूँ।',
                  awadhi: 'हम थक गयन अउर घरे जात अही।',
                  bhojpuri: 'हम थक गईनी आ घरे जात बानी।',
                  rajasthani: 'म्हे थक ग्यो अर घरे जा रिया हां।'
                },
                isCorrect: false
              }
            ],
            explanation: {
              hinglish: 'Ye affirmation confidence badhane ke liye bolte hain.',
              hindi: 'यह आत्मविश्वास बढ़ाने वाला एक शक्तिशाली संकल्प वाक्य है।',
              haryanvi: 'यो बोलण तै मन म हौसला अर हिम्मत बंधती सै।',
              awadhi: 'ई बोलै से मन में हिम्मत अउर हौसला आवत है।',
              bhojpuri: 'ई बोलला से आत्मविश्वास अउर हिम्मत बढ़ जाला।',
              rajasthani: 'ओ बोलण सूं मन में भरोसो अर हौसलो बधे।'
            }
          }
          ]
        },
        {
        id: 'm5-l2',
        moduleId: 'module-5',
        title: 'Expressing Opinions & Feelings',
        description: 'Apni pasand, rai aur bhawnayein aatmavishwas se bolna',
        xpReward: 30,
        coinReward: 15,
        questions: [
          {
            id: 'q1',
            type: 'choice_english_to_regional',
            englishPrompt: 'In my opinion, this plan is really wonderful.',
            audioText: 'In my opinion, this plan is really wonderful.',
            phonetic: 'इन माई ओपिनियन, दिस प्लान इज़ रियली वंडरफुल।',
            promptRegional: {
              hinglish: 'Is vakya ka sahi matlab chunein:',
              hindi: 'इस वाक्य का सही अर्थ चुनें:',
              haryanvi: 'इस बात का ठीक अर्थ के सै?',
              awadhi: 'एकर सही मतलब का होई?',
              bhojpuri: 'एकर सही मतलब का होखी?',
              rajasthani: 'इण रो सही मतलब कांई हुवे?'
            },
            options: [
              { id: 'opt1', text: {
                hinglish: 'Meri rai mein, yeh yojana sach mein behad shandar hai.',
                hindi: 'मेरी राय में, यह योजना वास्तव में बहुत शानदार है।',
                haryanvi: 'मेरी राय म, यो विचार साच्ची म घणा बढ़िया सै।',
                awadhi: 'हमार राय में, ई योजना सचहू बहुत बढ़िया बा।',
                bhojpuri: 'हमार राय में, ई योजना सचहूँ बहुते बढ़िया बा।',
                rajasthani: 'म्हारी राय में, आ योजना सांच में घणी चोखी है।'
              }, isCorrect: true },
              { id: 'opt2', text: {
                hinglish: 'Mujhe yeh pasand nahi.',
                hindi: 'मुझे यह पसंद नहीं।',
                haryanvi: 'मन्नै पसंद कोन्या।',
                awadhi: 'हमन का नीक नाहीं लागत।',
                bhojpuri: 'हमरा ई पसंद नइखे।',
                rajasthani: 'म्हनै पसंद कोनी।'
              }, isCorrect: false },
              { id: 'opt3', text: {
                hinglish: 'Hum kal milenge.',
                hindi: 'हम कल मिलेंगे।',
                haryanvi: 'म्हाम काल मिलांगे।',
                awadhi: 'हम सब काल मिलब।',
                bhojpuri: 'हमनी के काल्हु मिलब।',
                rajasthani: 'म्हे काल मिलांला।'
              }, isCorrect: false }
            ],
            explanation: {
              hinglish: '"In my opinion" ka prayog apni vyaktigat rai batane ke liye kiya jata hai.',
              hindi: 'स्वयं का दृष्टिकोण प्रस्तुत करने हेतु "In my opinion" उपयुक्त वाक्यांश है।',
              haryanvi: 'अपनी राय देण खातिर "In my opinion" बोल्या जावै सै।',
              awadhi: 'अपनी बात रखै खातिर "In my opinion" बोला जात है।',
              bhojpuri: 'अपन बात कहे खातिर "In my opinion" कहल जाला।',
              rajasthani: 'आपरी राय देवण वास्ते "In my opinion" बोलीजे।'
            }
          },
          {
            id: 'q2',
            type: 'fill_blank',
            sentenceParts: ['I ', ' so proud of your achievements and hard work.'],
            blankIndex: 1,
            audioText: 'I am so proud of your achievements and hard work.',
            phonetic: 'आई एम सो प्राउड ऑफ योर अचीवमेंट्स एंड हार्ड वर्क।',
            promptRegional: {
              hinglish: '"I" ke sath sahi verb lagayein (Garv mehsoos karna):',
              hindi: '"I" के साथ सही क्रिया भरें:',
              haryanvi: '"I" कै गैल ठीक क्रिया भरो:',
              awadhi: '"I" के साथ सही क्रिया भरा:',
              bhojpuri: '"I" के साथ सही क्रिया भरीं:',
              rajasthani: '"I" रै सागे सही क्रिया भरो:'
            },
            options: [
              { id: 'opt1', text: 'am', isCorrect: true },
              { id: 'opt2', text: 'is', isCorrect: false },
              { id: 'opt3', text: 'are', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Vartaman mein "I" ke sath hamesha "am" lagta hai: "I am proud of you".',
              hindi: '"I" के साथ वर्तमान काल में सदैव "am" आता है।',
              haryanvi: '"I" कै साथे सदा "am" लगै सै।',
              awadhi: '"I" के साथ वर्तमान में "am" लगावा जात है।',
              bhojpuri: '"I" के साथे हमेशा "am" आवेला।',
              rajasthani: '"I" रै सागे हमेशा "am" आवे है।'
            }
          },
          {
            id: 'q3',
            type: 'reorder_sentence',
            correctSentence: 'I completely agree with you',
            words: ['you', 'agree', 'completely', 'I', 'with'],
            promptRegional: {
              hinglish: 'Vakya banayein: "Main aapse poori tarah se sehmat hoon"',
              hindi: 'वाक्य बनाएं: "मैं आपसे पूरी तरह सहमत हूं"',
              haryanvi: 'जमाओ: "मैं थारी बात तै पूरे तरिया सहमत सूं"',
              awadhi: 'सजावा: "हम आपकी बात से पूरा सहमत अही"',
              bhojpuri: 'सजाईं: "हम रउआ से पूरा तरह सहमत बानी"',
              rajasthani: 'जमाओ: "म्हे थांरी बात सूं पूरी तरिया सहमत हां"'
            },
            explanation: {
              hinglish: 'Kisi ki baat par sehmati jatane ke liye: "I completely agree with you" standard English hai.',
              hindi: 'सहमति प्रकट करने हेतु यह आदर्श वाक्य है।',
              haryanvi: 'सहमति जताण खातिर यो वाक्य बोल्या करैं।',
              awadhi: 'सहमति देवे खातिर ई वाक्य बोला जात है।',
              bhojpuri: 'सहमति जतावे खातिर ई वाक्य बोलल जाला।',
              rajasthani: 'सहमति जतावण वास्ते ओ वाक्य बोलीजे।'
            }
          },
          {
            id: 'q4',
            type: 'choice_regional_to_english',
            promptRegional: {
              hinglish: '"Mujhe garmi lag rahi hai aur pyaas lagi hai" ko English mein kya kahenge?',
              hindi: '"मुझे गर्मी लग रही है और प्यास लगी है" का सही अंग्रेज़ी अनुवाद चुनें:',
              haryanvi: '"मन्नै ताता लाग रह्या सै अर तस लागरी सै" नै English म के कहवैंगे?',
              awadhi: '"हमन का घाम लागत बा अउर पियास लागी बा" के अंग्रेज़ी में का कहब?',
              bhojpuri: '"हमरा गरमी लागत बा आ पियास लागल बा" के अंग्रेजी में का कहल जाई?',
              rajasthani: '"म्हनै तावड़ो लागे अर प्यास लागी है" नै English में कांई कहवे?'
            },
            audioText: 'I am feeling hot and thirsty.',
            phonetic: 'आई एम फीलिंग हॉट एंड थर्स्टी।',
            options: [
              { id: 'opt1', text: 'I am feeling hot and thirsty.', isCorrect: true },
              { id: 'opt2', text: 'I am eating a stone.', isCorrect: false },
              { id: 'opt3', text: 'Water is flying in road.', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Shariirk mehsusiyat jatane ke liye: "I am feeling hot and thirsty". Thirsty = pyaasa.',
              hindi: 'शारीरिक अवस्था दर्शाने हेतु "I am feeling..." प्रयुक्त होता है।',
              haryanvi: 'प्यास अर गर्मी खातिर "hot and thirsty" बोलैं।',
              awadhi: 'पियास अउर गरमी खातिर "hot and thirsty" कहल जात है।',
              bhojpuri: 'पियास आ गरमी खातिर "hot and thirsty" कहल जाला।',
              rajasthani: 'प्यास अर तावड़े वास्ते "hot and thirsty" बोलीजे।'
            }
          },
          {
            id: 'q5',
            type: 'conversation_reply',
            speaker: 'Friend',
            dialogue: 'Would you prefer a hot cup of tea or fresh lemon juice?',
            audioText: 'Would you prefer a hot cup of tea or fresh lemon juice?',
            promptRegional: {
              hinglish: 'Dost ne chai ya nimbu paani ki pasand poochhi. Sahi uttar chunein:',
              hindi: 'मित्र ने चाय या नींबू पानी की प्राथमिकता पूछी। सही उत्तर चुनें:',
              haryanvi: 'भाई नै चाय या शिकंजी की पसंद बूझी। ठीक जवाब के द्योगे?',
              awadhi: 'मित्र चाय या नींबू पानी के पसंद पूछेन। सही जवाब चुनि:',
              bhojpuri: 'दोस्त चाय या नींबू पानी के पसंद पूछलें। सही जबाब चुनीं:',
              rajasthani: 'भाई चाय या नींबू पाणी री पसंद पूछी। सही उत्तर कांई देवोला?'
            },
            options: [
              { id: 'opt1', text: 'I would prefer a hot cup of tea, thank you!', isCorrect: true },
              { id: 'opt2', text: 'The sky is green.', isCorrect: false },
              { id: 'opt3', text: 'Trains run on tracks.', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Pasand batane ke liye "I would prefer..." vinamra aur professional tarika hai.',
              hindi: 'प्राथमिकता बताने हेतु "I would prefer..." सर्वोत्तम विकल्प है।',
              haryanvi: 'पसंद बताण खातिर "I would prefer" बोल्या करैं।',
              awadhi: 'पसंद बतावै खातिर "I would prefer" कहा जात है।',
              bhojpuri: 'पसंद बतावे खातिर "I would prefer" कहल जाला।',
              rajasthani: 'पसंद बतावण वास्ते "I would prefer" बोलीजे।'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'module-6',
    number: 6,
    title: 'English for School & College',
    subtitle: 'Classroom phrases, teachers se baat aur presentations',
    icon: 'GraduationCap',
    color: 'teal',
    description: 'Classroom communication, asking permissions, discussing assignments, and answering professors.',
    totalLessons: 1,
    lessons: [
      {
        id: 'm6-l1',
        moduleId: 'module-6',
        title: 'Classroom Conversations',
        description: 'Sir aur Madam se aadar se baat karna',
        xpReward: 25,
        coinReward: 15,
        questions: [
          {
            id: 'q1',
            type: 'choice_regional_to_english',
            promptRegional: {
              hinglish: '"Kya main andar aa sakta hoon, Sir?" ko English mein kya kehte hain?',
              hindi: '"क्या मैं अंदर आ सकता हूँ, सर?" को अंग्रेज़ी में क्या कहते हैं?',
              haryanvi: '"के मैं भीतर आ सकूँ सूं, सरजी?" नै English म के बोलैंगे?',
              awadhi: '"का हम भीतर आई सकत अही, सर?" के English में का कहब?',
              bhojpuri: '"का हम भीतर आ सकीले, सर?" के अंग्रेजी में का कहल जाई?',
              rajasthani: '"कांई म्हे मांयने आ सकूं सा, सर?" नै English में कांई कहवे?'
            },
            audioText: 'May I come in, sir?',
            phonetic: 'मे आई कम इन, सर?',
            options: [
              { id: 'opt1', text: 'May I come in, sir?', isCorrect: true },
              { id: 'opt2', text: 'Can I kick the football?', isCorrect: false },
              { id: 'opt3', text: 'Where is my lunchbox?', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Shikshak se permission lene ke liye "May I come in, sir?" bola jata hai.',
              hindi: 'अध्यापक से कक्षा में प्रवेश की अनुमति हेतु "May I come in, sir?" सबसे शिष्ट वाक्य है।',
              haryanvi: 'मास्टर जी तै पूछण खातिर "May I come in, sir?" बोल्या करैं।',
              awadhi: 'गुरूजी से आग्या लेवै खातिर "May I come in, sir?" कहल जात है।',
              bhojpuri: 'गुरूजी से अनुमति माँगे खातिर "May I come in, sir?" कहल जाला।',
              rajasthani: 'गुरुजी सूं हुकम लेवण वास्ते "May I come in, sir?" बोलीजे।'
            }
          },
          {
            id: 'q2',
            type: 'fill_blank',
            sentenceParts: ['Excuse me ma’am, could you please ', ' this concept once again?'],
            blankIndex: 1,
            audioText: 'Excuse me ma’am, could you please explain this concept once again?',
            promptRegional: {
              hinglish: 'Khali jagah bharein (Dobara samjhane ke liye):',
              hindi: 'रिक्त स्थान भरें (पुनः समझाने की प्रार्थना):',
              haryanvi: 'खाली जगह भरो (दोबारा समझाण खातिर):',
              awadhi: 'खाली जगह भरा (फेरि से समुझावै खातिर):',
              bhojpuri: 'खाली जगह भरीं (दोबारा समझावे खातिर):',
              rajasthani: 'खाली जगह भरो (पाछो समझावण वास्ते):'
            },
            options: [
              { id: 'opt1', text: 'explain', isCorrect: true },
              { id: 'opt2', text: 'break', isCorrect: false },
              { id: 'opt3', text: 'hide', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Explain = Samjhana ya vivran dena.',
              hindi: 'Explain का अर्थ विस्तारपूर्वक समझाना अथवा स्पष्ट करना होता है।',
              haryanvi: 'Explain मतलब खोलकै समझाणा।',
              awadhi: 'Explain माने नीक से समुझावब।',
              bhojpuri: 'Explain माने बिस्तार से समझावल।',
              rajasthani: 'Explain मतलब खोल\'र समझावणो।'
            }
          },
          {
            id: 'q3',
            type: 'reorder_sentence',
            correctSentence: 'I have submitted my assignment',
            words: ['assignment', 'my', 'I', 'submitted', 'have'],
            audioText: 'I have submitted my assignment',
            promptRegional: {
              hinglish: 'Sajayein (Maine apna assignment jama kar diya hai):',
              hindi: 'व्यवस्थित करें (मैंने अपना असाइनमेंट जमा कर दिया है):',
              haryanvi: 'जमाओ (मैंणै आपणा काम जमा करवा दिया सै):',
              awadhi: 'सजावा (हम आपन काम जमा कइ दिहिन है):',
              bhojpuri: 'सजाईं (हम आपन असाइनमेंट जमा कर दिहले बानी):',
              rajasthani: 'जमाओ (म्हे आपरो काम जमा करवा दियो है):'
            },
            explanation: {
              hinglish: 'Present Perfect tense: I + have + verb 3rd form (submitted) + object.',
              hindi: 'I (कर्ता) + have + submitted (जमा कर चुका) + my assignment।',
              haryanvi: 'काम पूरा हुवण पै "I have submitted" बोल्या करैं।',
              awadhi: 'काम जमा होइ चुकै पर "I have submitted" कहा जात है।',
              bhojpuri: 'असाइनमेंट जमा कइला पर "I have submitted" कहल जाला।',
              rajasthani: 'काम जमा करावण पछै "I have submitted" बोलीजे।'
            }
          },
          {
            id: 'q4',
            type: 'choice_english_to_regional',
            englishPrompt: 'The library is open from 9 AM to 5 PM.',
            audioText: 'The library is open from 9 AM to 5 PM.',
            phonetic: 'द लाइब्रेरी इज़ ओपन फ्रॉम नाइन एएम टू फाइव पीएम',
            promptRegional: {
              hinglish: 'Is notice ka kya matlab hai?',
              hindi: 'इस सूचना का क्या अर्थ है?',
              haryanvi: 'इस नोटिस का के मतलब सै?',
              awadhi: 'ई सूचना का का मतलब बा?',
              bhojpuri: 'ई सूचना के का मतलब बा?',
              rajasthani: 'इण सूचना रो कांई मतलब है?'
            },
            options: [
              {
                id: 'opt1',
                text: {
                  hinglish: 'Pustakalaya subah 9 baje se shaam 5 baje tak khulta hai.',
                  hindi: 'पुस्तकालय सुबह 9 बजे से शाम 5 बजे तक खुला रहता है।',
                  haryanvi: 'पुस्तकालय तड़के 9 तै सांज 5 बज्जे ताहीं खुल्या रहवै सै।',
                  awadhi: 'लाइब्रेरी सबेरे 9 बजे से सांझ 5 बजे तक खुला रहत है।',
                  bhojpuri: 'लाइब्रेरी सबेरे 9 बजे से सांझ 5 बजे ले खुलल रहेला।',
                  rajasthani: 'पुस्तकालय प्रभात 9 बज्यां सूं संज्या 5 बज्यां तांई खुले।'
                },
                isCorrect: true
              },
              {
                id: 'opt2',
                text: {
                  hinglish: 'Class mein shanti banaye rakhein.',
                  hindi: 'कक्षा में शांति बनाए रखें।',
                  haryanvi: 'क्लास म रोला मत काटो।',
                  awadhi: 'क्लास में चुपचाप बैठा।',
                  bhojpuri: 'क्लास में हल्ला मत करीं।',
                  rajasthani: 'क्लास में चुपचाप बैठो।'
                },
                isCorrect: false
              }
            ],
            explanation: {
              hinglish: 'Open = Khula hona. From... to... samay ki avadhi darshata hai.',
              hindi: 'Open का अर्थ खुला होना और from... to... समय सीमा दर्शाता है।',
              haryanvi: 'Open मतलब खुल्या, From तै To मतलब इतने तै इतने टेम ताहीं।',
              awadhi: 'Open माने खुला रहब अउर From... To... माने एतने से ओतने समै तक।',
              bhojpuri: 'Open माने खुलल रहेल आ From... To... माने एतना से ओतना बजे ले।',
              rajasthani: 'Open माने खुल्यो रहणो अर From... To... मतलब एतरो सूं ओतरो टेम।'
            }
          },
          {
            id: 'q5',
            type: 'conversation_reply',
            speaker: 'Classmate',
            dialogue: 'Do you want to study together for tomorrow’s English test?',
            audioText: 'Do you want to study together for tomorrow’s English test?',
            promptRegional: {
              hinglish: 'Dost ne pucha ki kya kal ke test ke liye saath mein padhein? Sakaratmak uttar chunein:',
              hindi: 'मित्र ने पूछा कि क्या कल की परीक्षा हेतु साथ पढ़ें? सकारात्मक उत्तर चुनें:',
              haryanvi: 'साथी नै बूझया के काल के टेस्ट खातिर कठ्ठे पढ़ांगे? ठीक जवाब छांटो:',
              awadhi: 'संगी पूछिस का काल्ह के इम्तहान बर साथे पढ़ब? सही जवाब चुनि:',
              bhojpuri: 'दोस्त पूछलसि का काल्ह के परीक्षा खातिर संघे पढ़ल जाव? सही जबाब चुनीं:',
              rajasthani: 'साथी पूछ्यो कांई काल री परीक्षा वास्ते भेळा पढ़ां? सही उत्तर छांटो:'
            },
            options: [
              { id: 'opt1', text: 'Yes, that is a great idea! Let us meet at 4 PM.', isCorrect: true },
              { id: 'opt2', text: 'I don’t know what a book is.', isCorrect: false },
              { id: 'opt3', text: 'My shoes are yellow.', isCorrect: false }
            ],
            explanation: {
              hinglish: '"That is a great idea!" ka matlab ye bahut badhiya vichar hai hota hai.',
              hindi: 'सहमत होने के लिए "That is a great idea!" कहना अत्यंत उत्साहवर्धक होता है।',
              haryanvi: 'बढ़िया सलाह पै "That is a great idea!" बोलैं।',
              awadhi: 'नीक विचार पर "That is a great idea!" कहल जात है।',
              bhojpuri: 'बढ़िया राय पर "That is a great idea!" कहल जाला।',
              rajasthani: 'चोखी राय माथै "That is a great idea!" बोलीजे।'
            }
          }
          ]
        },
        {
        id: 'm6-l2',
        moduleId: 'module-6',
        title: 'Talking to Teachers & Group Projects',
        description: 'Adhyapakon se sawal poochna aur college assignment par charcha',
        xpReward: 30,
        coinReward: 15,
        questions: [
          {
            id: 'q1',
            type: 'conversation_reply',
            speaker: 'College Professor',
            dialogue: 'Has your team finalized the topic for the semester project?',
            audioText: 'Has your team finalized the topic for the semester project?',
            promptRegional: {
              hinglish: 'Professor ne project topic ke baare mein poocha. Vinamra uttar chunein:',
              hindi: 'प्रोफेसर ने प्रोजेक्ट विषय पर प्रगति पूछी। सही प्रत्युत्तर चुनें:',
              haryanvi: 'मास्टर जी नै प्रोजेक्ट के बारे म बूझया। ठीक जवाब छांटो:',
              awadhi: 'प्रोफेसर प्रोजेक्ट के बारे में पूछेन। सही उत्तर चुनि:',
              bhojpuri: 'प्रोफेसर प्रोजेक्ट के बारे में पूछलें। सही जबाब चुनीं:',
              rajasthani: 'प्रोफेसर सा प्रोजेक्ट बाबत पूछ्यो। सही उत्तर कांई देवोला?'
            },
            options: [
              { id: 'opt1', text: 'Yes Sir, we have finalized our topic and drafted the proposal.', isCorrect: true },
              { id: 'opt2', text: 'I lost my cricket bat yesterday.', isCorrect: false },
              { id: 'opt3', text: 'Bananas are sweet.', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Academic charcha mein: "Yes Sir, we have finalized our topic" aatmavishwas dikhata hai.',
              hindi: 'शिक्षक को औपचारिक एवं सम्मानजनक उत्तर देना आवश्यक है।',
              haryanvi: 'सत्कार तै प्रोजेक्ट का काम पूरा होवण की बात कहो।',
              awadhi: 'आदर से प्रोजेक्ट तय होवे की बात कही जात है।',
              bhojpuri: 'आदर से प्रोजेक्ट फाइनल होखे के बात कहल जाला।',
              rajasthani: 'आदर सूं प्रोजेक्ट तय होवण री बात बोलीजे।'
            }
          },
          {
            id: 'q2',
            type: 'fill_blank',
            sentenceParts: ['Could I please ', ' your notes for twenty minutes?'],
            blankIndex: 1,
            audioText: 'Could I please borrow your notes for twenty minutes?',
            phonetic: 'कुड आई प्लीज बॉरो योर नोट्स फॉर ट्वेंटी मिनट्स?',
            promptRegional: {
              hinglish: 'Kuchh samay ke liye mangne (udhar lene) ke liye sahi shabd chunein:',
              hindi: 'अल्पकाल हेतु मांगने (Borrow) के लिए सही शब्द चुनें:',
              haryanvi: 'थोड़े टेम खातिर मांगण का सही शब्द छांटो:',
              awadhi: 'थोड़ा समय खातिर मांगै का सही शब्द चुनि:',
              bhojpuri: 'तनिक समय खातिर माँगे के सही शब्द चुनीं:',
              rajasthani: 'थोड़े बगत वास्ते मांगण रो सही शब्द चुणो:'
            },
            options: [
              { id: 'opt1', text: 'borrow', isCorrect: true },
              { id: 'opt2', text: 'throw', isCorrect: false },
              { id: 'opt3', text: 'break', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Kisi se koi cheez kuchh der lene ke liye "borrow" shabd ka prayog hota hai.',
              hindi: 'सामग्री उधार लेने हेतु "borrow" का प्रयोग होता है।',
              haryanvi: 'मांग के लेण खातिर "borrow" बोल्या जावै सै।',
              awadhi: 'माँगिकै लेवै खातिर "borrow" कहा जात है।',
              bhojpuri: 'माँगल जाए खातिर "borrow" कहल जाला।',
              rajasthani: 'मांगकर लेवण वास्ते "borrow" बोलीजे।'
            }
          },
          {
            id: 'q3',
            type: 'reorder_sentence',
            correctSentence: 'Could you please explain this concept again',
            words: ['again', 'explain', 'this', 'Could', 'please', 'concept', 'you'],
            promptRegional: {
              hinglish: 'Teacher se dobara samjhane ke liye vinamra nivedan karein:',
              hindi: 'शिक्षक से पुनः समझाने हेतु विनम्र अनुरोध बनाएं:',
              haryanvi: 'मास्टर जी तै दोबारा समझाण की प्रार्थना बनाओ:',
              awadhi: 'गुरुजी से फेरि समझावै खातिर प्रार्थना सजावा:',
              bhojpuri: 'गुरुजी से दोबारा समझावे खातिर प्रार्थना सजाईं:',
              rajasthani: 'गुरुजी सूं पाछो समझावण री अरज जमाओ:'
            },
            explanation: {
              hinglish: '"Could you please explain this concept again?" polite classroom English ka best example hai.',
              hindi: 'कक्षा में विनम्र निवेदन हेतु यह अत्यंत शिष्ट वाक्य है।',
              haryanvi: 'क्लास म इज्जत तै बूझण खातिर यो बोलैं।',
              awadhi: 'कक्षा में आदर से पूछे खातिर ई वाक्य बोला जात है।',
              bhojpuri: 'कक्षा में आदर से पूछे खातिर ई कहल जाला।',
              rajasthani: 'कक्षा में मान सूं पूछण वास्ते ओ वाक्य बोलीजे।'
            }
          },
          {
            id: 'q4',
            type: 'match_pairs',
            promptRegional: {
              hinglish: 'School aur college ke shabdon ko sahi arth se jodein:',
              hindi: 'विद्यालय एवं महाविद्यालय से संबंधित शब्दों का मिलान करें:',
              haryanvi: 'स्कूल-कॉलेज के शब्दां का सही मिलान करो:',
              awadhi: 'स्कूल-कॉलेज के शब्दन का सही जोड़ी मिलावा:',
              bhojpuri: 'स्कूल-कॉलेज के शब्दन के सही जोड़ा मिलाईं:',
              rajasthani: 'स्कूल-कॉलेज रै शब्दां रो सही मिलान करो:'
            },
            pairs: [
              {
                english: 'Attendance',
                regional: {
                  hinglish: 'Haziri / Upasthiti',
                  hindi: 'उपस्थिति (हाज़िरी)',
                  haryanvi: 'हाजरी',
                  awadhi: 'हाजिरी',
                  bhojpuri: 'हाजिरी',
                  rajasthani: 'हाजरी'
                }
              },
              {
                english: 'Assignment',
                regional: {
                  hinglish: 'Grihakarya / Project kaam',
                  hindi: 'दत्तकार्य (प्रोजेक्ट काम)',
                  haryanvi: 'होमवर्क / प्रोजेक्ट काम',
                  awadhi: 'गृहकार्य / प्रोजेक्ट काम',
                  bhojpuri: 'होमवर्क / प्रोजेक्ट काम',
                  rajasthani: 'घर रो काम / प्रोजेक्ट काम'
                }
              },
              {
                english: 'Library',
                regional: {
                  hinglish: 'Kitabon ka kamra (Pustakalaya)',
                  hindi: 'पुस्तकालय',
                  haryanvi: 'किताबां का कमरा',
                  awadhi: 'किताबी घर',
                  bhojpuri: 'किताब घर',
                  rajasthani: 'पोथी घर / पुस्तकालय'
                }
              }
            ],
            explanation: {
              hinglish: 'Attendance = Haziri, Assignment = Home task, Library = Pustakalaya.',
              hindi: 'ये तीनों शब्द शैक्षणिक जीवन में नियमित उपयोग में आते हैं।',
              haryanvi: 'ये शब्द रोज कॉलेज-स्कूल म बोले जावैं सैं।',
              awadhi: 'ई सब शब्द पढ़ाई-लिखाई में रोज काम आवत हैं।',
              bhojpuri: 'ई सब शब्द पढ़ाई-लिखाई में रोज बोले के पड़ेला।',
              rajasthani: 'ए शब्द पढ़ाई-लिखाई में रोज काम आवे है।'
            }
          },
          {
            id: 'q5',
            type: 'choice_regional_to_english',
            promptRegional: {
              hinglish: '"Main kal beemar hone ki wajah se nahi aa saka" ko English mein kya kahenge?',
              hindi: '"मैं कल बीमार होने के कारण नहीं आ सका" का शुद्ध अनुवाद चुनें:',
              haryanvi: '"मैं काल बीमार होण करकै ना आ सक्या" नै English म के कहवैंगे?',
              awadhi: '"हम काल बीमार रहै के नाते नाहीं आय पाएन" के अंग्रेज़ी में का कहब?',
              bhojpuri: '"हम काल्हु बेमार होखे के चलते नइखीं आ पावल" के अंग्रेजी में का कहल जाई?',
              rajasthani: '"म्हे काल बीमार होवण सूं कोनी आय सक्यो" नै English में कांई कहवे?'
            },
            audioText: 'I could not attend yesterday because I was unwell.',
            phonetic: 'आई कुड नॉट अटेंड यस्टरडे बिकॉज़ आई वॉज़ अनवेल।',
            options: [
              { id: 'opt1', text: 'I could not attend yesterday because I was unwell.', isCorrect: true },
              { id: 'opt2', text: 'I am playing flying aeroplane.', isCorrect: false },
              { id: 'opt3', text: 'College is closed forever.', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Karan batane ke liye "because I was unwell" ek formal aur aasan tarika hai.',
              hindi: 'अनुपस्थिति का कारण बताने हेतु "because I was unwell" सर्वोत्तम है।',
              haryanvi: 'कारण बताण खातिर "because I was unwell" बोल्या करैं।',
              awadhi: 'कारन बतावै खातिर "because I was unwell" कहा जात है।',
              bhojpuri: 'कारण बतावे खातिर "because I was unwell" कहल जाला।',
              rajasthani: 'कारण बतावण वास्ते "because I was unwell" बोलीजे।'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'module-7',
    number: 7,
    title: 'English for Interviews',
    subtitle: 'Naukri ke sakshatkar mein prabhavshali uttar',
    icon: 'Briefcase',
    color: 'indigo',
    description: 'Tell me about yourself, strengths, weaknesses, answering salary questions, and professional etiquette.',
    totalLessons: 1,
    lessons: [
      {
        id: 'm7-l1',
        moduleId: 'module-7',
        title: 'Tell Me About Yourself',
        description: 'Interview ka sabse pehla aur sabse zaroori sawaal',
        xpReward: 30,
        coinReward: 20,
        questions: [
          {
            id: 'q1',
            type: 'choice_english_to_regional',
            englishPrompt: 'Could you please tell me a little about yourself?',
            audioText: 'Could you please tell me a little about yourself?',
            phonetic: 'कुड यू प्लीज टेल मी अ लिटिल अबाउट योरसेल्फ?',
            promptRegional: {
              hinglish: 'Interview mein interviewer is sawaal mein kya pooch raha hai?',
              hindi: 'साक्षात्कारकर्ता इस प्रश्न में क्या जानना चाहता है?',
              haryanvi: 'इंटरव्यू म बाबू इस सवाल म के बूझ रहया सै?',
              awadhi: 'इंटरव्यू में अफसर का पूछत अहिन?',
              bhojpuri: 'इंटरव्यू में अधिकारी का पूछे चाहत बाड़न?',
              rajasthani: 'इंटरव्यू में साहब इण सवाल में कांई पूछ रिया है?'
            },
            options: [
              {
                id: 'opt1',
                text: {
                  hinglish: 'Kya aap kripya thoda apne baare mein bata sakte hain?',
                  hindi: 'क्या आप कृपया संक्षेप में अपने विषय में बता सकते हैं?',
                  haryanvi: 'के भाई, थोड़ा घणा अपने बारे म बता सकै सै?',
                  awadhi: 'का आप अपने बारे में तनिक बताइ सकत अहौ?',
                  bhojpuri: 'का रउआ तनी अपने बारे में बता सकेनी?',
                  rajasthani: 'कांई थे थोड़ा आपरे बारे में बता सको हो?'
                },
                isCorrect: true
              },
              {
                id: 'opt2',
                text: {
                  hinglish: 'Aapne subah nashte mein kya khaya tha?',
                  hindi: 'आपने सुबह नाश्ते में क्या खाया था?',
                  haryanvi: 'तड़के के खाया था?',
                  awadhi: 'सबेरे कलेवा में का खाये रहौ?',
                  bhojpuri: 'सबेरे जलपान में का खइले रहीं?',
                  rajasthani: 'प्रभात नाश्ते में कांई खायो?'
                },
                isCorrect: false
              }
            ],
            explanation: {
              hinglish: 'Ye duniya ke lagbhag har job interview ka pehla sawaal hota hai.',
              hindi: 'यह लगभग प्रत्येक नौकरी साक्षात्कार का प्रारम्भिक और निर्णायक प्रश्न है।',
              haryanvi: 'हर नौकरी के इंटरव्यू म पैहला सवाल न्यूए बूझया करैं।',
              awadhi: 'कौनो नौकरी के इंटरव्यू में पहिलै ई सवाल पूछा जात है।',
              bhojpuri: 'कौनो नौकरी के इंटरव्यू में सबसे पहिलका सवाल इहे होला।',
              rajasthani: 'हर नौकरी रै इंटरव्यू में पैलो सवाल इयां ही पूछ्या करे।'
            }
          },
          {
            id: 'q2',
            type: 'reorder_sentence',
            correctSentence: 'I am a quick learner and punctual',
            words: ['learner', 'punctual', 'quick', 'a', 'I', 'and', 'am'],
            audioText: 'I am a quick learner and punctual',
            promptRegional: {
              hinglish: 'Apni khoobiyan (Strengths) batane ke liye sajayein:',
              hindi: 'अपनी विशेषताएँ बताने हेतु व्यवस्थित करें (मैं चीज़ें जल्दी सीखता हूँ और समयनिष्ठ हूँ):',
              haryanvi: 'अपनी खूबियां बताण खातिर सही जमाओ:',
              awadhi: 'अपन गुन बतावै खातिर सही सजावा:',
              bhojpuri: 'अपन गुण बतावे खातिर सही सजाईं:',
              rajasthani: 'आपरा गुण बतावण वास्ते सही जमाओ:'
            },
            explanation: {
              hinglish: 'Quick learner = Jaldi seekhne wala. Punctual = Samay ka pakka.',
              hindi: 'Quick learner (शीघ्र सीखने वाला) और Punctual (समय का पाबंद) मूल्यवान गुण हैं।',
              haryanvi: 'चीज नै झट तै पकड़ण आला अर टेम का पाबंद हुवण खातिर यो बोलैं।',
              awadhi: 'जल्दी सीखै वाला अउर समै के पक्का होवै पर ई कहा जात है।',
              bhojpuri: 'जल्दी सीखे वाला आ समय के पाबंद होखे पर ई बोलल जाला।',
              rajasthani: 'जल्दी सीखण वाळो अर टेम रो पक्को होवण वास्ते आ लाइन बोलीजे।'
            }
          },
          {
            id: 'q3',
            type: 'fill_blank',
            sentenceParts: ['I am very excited about this job ', ' in your company.'],
            blankIndex: 1,
            audioText: 'I am very excited about this job opportunity in your company.',
            promptRegional: {
              hinglish: 'Khali jagah bharein (Naukri ke awasar ke liye):',
              hindi: 'रिक्त स्थान भरें (नौकरी के अवसर के संदर्भ में):',
              haryanvi: 'खाली जगह भरो (नौकरी के मौके खातिर):',
              awadhi: 'खाली जगह भरा (नौकरी के अवसर खातिर):',
              bhojpuri: 'खाली जगह भरीं (नौकरी के अवसर खातिर):',
              rajasthani: 'खाली जगह भरो (नौकरी रै मौके वास्ते):'
            },
            options: [
              { id: 'opt1', text: 'opportunity', isCorrect: true },
              { id: 'opt2', text: 'game', isCorrect: false },
              { id: 'opt3', text: 'joke', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Job opportunity ka matlab hota hai kaam ka awasar ya mauka.',
              hindi: 'Opportunity का अर्थ अवसर या स्वर्णिम सुअवसर होता है।',
              haryanvi: 'Opportunity मतलब काम का मौका।',
              awadhi: 'Opportunity माने काम के बढ़िया मौका।',
              bhojpuri: 'Opportunity माने काम के सुअवसर।',
              rajasthani: 'Opportunity माने काम रो चोखो मौको।'
            }
          },
          {
            id: 'q4',
            type: 'conversation_reply',
            speaker: 'Interviewer',
            dialogue: 'Why should we hire you for this role?',
            audioText: 'Why should we hire you for this role?',
            promptRegional: {
              hinglish: 'Interviewer ne poocha hum aapko naukri par kyun rakhein? Sahi prabhavshali uttar chunein:',
              hindi: 'साक्षात्कारकर्ता ने पूछा कि हम आपको क्यों चुनें? प्रभावशाली उत्तर चुनें:',
              haryanvi: 'साहब नै बूझया तन्ने क्यूँ राखें? ठीक असरदार जवाब छांटो:',
              awadhi: 'साहब पूछिन कि हम तोहे काहे रखब? सही असरदार जवाब चुनि:',
              bhojpuri: 'साहब पूछलन हम रउआ के काहे चुनीं? सही जबाब चुनीं:',
              rajasthani: 'साहब पूछ्यो म्हे थांनै क्यूं राखूं? सही असरदार उत्तर छांटो:'
            },
            options: [
              { id: 'opt1', text: 'Because I have relevant skills, a strong work ethic, and dedication.', isCorrect: true },
              { id: 'opt2', text: 'Because I need free food.', isCorrect: false },
              { id: 'opt3', text: 'I just came here by accident.', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Apne skills aur dedication ko aage rakhna sabse professional response hota hai.',
              hindi: 'कौशल, कार्यशैली और निष्ठा का उल्लेख करना सर्वश्रेष्ठ उत्तर है।',
              haryanvi: 'अपनी मेहनत अर काम के हुनर नै आगे धरणा सबसे बढ़िया जवाब सै।',
              awadhi: 'अपन मेहनत अउर हुनर बतावब सबसे समझदारी के बात है।',
              bhojpuri: 'अपन काम के हुनर आ लगन बतावल सबले असरदार जबाब होला।',
              rajasthani: 'आपरा हुनर अर लगन बतावणो सबसे चोखो उत्तर है।'
            }
          },
          {
            id: 'q5',
            type: 'choice_regional_to_english',
            promptRegional: {
              hinglish: '"Main apni team ke sath milkar kaam karna pasand karta hoon" ko English mein kya kahenge?',
              hindi: '"मैं अपनी टीम के साथ मिलकर कार्य करना पसंद करता हूँ" को अंग्रेज़ी में क्या कहेंगे?',
              haryanvi: '"मन्नै अपनी टोली गेल्या रल-मिल कै काम करण म मज़ा आवै सै" नै English म के बोलैंगे?',
              awadhi: '"हमार आपन साथी लोगन के संग मिलिकै काम करब नीक लागत है" के English में का कहब?',
              bhojpuri: '"हमरा आपन टीम के साथे मिलजुल के काम कइल नीक लागेला" के अंग्रेजी में का कहल जाई?',
              rajasthani: '"म्हनै आपरी टीम रै सागे भेळा होय\'र काम करनो चोखो लागे" नै English में कांई कहवे?'
            },
            audioText: 'I enjoy working as a team player.',
            phonetic: 'आई एन्जॉय वर्किंग ऐज़ अ टीम प्लेयर',
            options: [
              { id: 'opt1', text: 'I enjoy working as a team player.', isCorrect: true },
              { id: 'opt2', text: 'I like sleeping during office hours.', isCorrect: false },
              { id: 'opt3', text: 'I always shout at others.', isCorrect: false }
            ],
            explanation: {
              hinglish: '"Team player" corporate aur job culture mein sabse zyada pasand kiya jane wala gun hai.',
              hindi: '"Team player" सहयोग भावना दर्शाने वाला महत्वपूर्ण कॉर्पोरेट पद है।',
              haryanvi: 'कठ्ठे मिल-जुलकर काम करण आले नै "team player" कह्या करैं।',
              awadhi: 'साथी लोगन के संग मिलिकै काम करै वाले के "team player" कहा जात है।',
              bhojpuri: 'सबके साथे मिलजुल के काम करे वाला के "team player" कहल जाला।',
              rajasthani: 'सगळां रै सागे मिलजुल\'र काम करण वाळे नै "team player" बोलीजे।'
            }
          }
          ]
        },
        {
        id: 'm7-l2',
        moduleId: 'module-7',
        title: 'Handling Strengths & Interview Questions',
        description: 'Apni taqat, anubhav aur sawalon ke damdar javab dena',
        xpReward: 35,
        coinReward: 20,
        questions: [
          {
            id: 'q1',
            type: 'conversation_reply',
            speaker: 'Interviewer',
            dialogue: 'What is your greatest strength as a candidate?',
            audioText: 'What is your greatest strength as a candidate?',
            promptRegional: {
              hinglish: 'Interviewer ne aapki sabse badi taqat (strength) poochhi. Sahi uttar chunein:',
              hindi: 'साक्षात्कारकर्ता ने आपकी मुख्य क्षमता पूछी। प्रभावशाली उत्तर चुनें:',
              haryanvi: 'इंटरव्यू आले नै थारी सबसे बड़ी खूबी बूझी। ठीक जवाब के द्योगे?',
              awadhi: 'इंटरव्यू वाले आपकी सबसे बड़ खूबी पूछेन। सही जवाब चुनि:',
              bhojpuri: 'इंटरव्यू वाला रउआ के सबसे बड़ खूबी पूछलें। सही जबाब चुनीं:',
              rajasthani: 'इंटरव्यू वाळा थांरी सबसूं मोटी खूबी पूछी। सही उत्तर कांई देवोला?'
            },
            options: [
              { id: 'opt1', text: 'I am a quick learner, highly disciplined and work well in teams.', isCorrect: true },
              { id: 'opt2', text: 'I like to sleep until noon every day.', isCorrect: false },
              { id: 'opt3', text: 'I get angry very easily on small things.', isCorrect: false }
            ],
            explanation: {
              hinglish: '"Quick learner, highly disciplined and team player" bolna interview mein bohot prabhavshali hota hai.',
              hindi: 'यह उत्तर सीखने की गति, अनुशासन और टीम भावना को प्रदर्शित करता है।',
              haryanvi: 'यो जवाब थारी मेहनत अर समझदारी नै दिखावै सै।',
              awadhi: 'ई जवाब से आपकी मेहनत अउर समझदारी देखात है।',
              bhojpuri: 'ई जवाब से रउआ के लगन आ अनुशासन लउकेला।',
              rajasthani: 'ओ जवाब थांरी लगन अर समझदारी नै दरसावे है।'
            }
          },
          {
            id: 'q2',
            type: 'reorder_sentence',
            correctSentence: 'I am looking for an opportunity to grow',
            words: ['grow', 'to', 'looking', 'opportunity', 'for', 'am', 'an', 'I'],
            promptRegional: {
              hinglish: 'Vakya banayein: "Main aage badhne ka ek avsar dhoondh raha hoon"',
              hindi: 'वाक्य बनाएं: "मैं आगे बढ़ने का एक अवसर तलाश रहा हूं"',
              haryanvi: 'जमाओ: "मैं आगे बढ़ण का मौका टोह रह्या सूं"',
              awadhi: 'सजावा: "हम आगे बढ़ै का मौका खोजत अही"',
              bhojpuri: 'सजाईं: "हम आगे बढ़े के मौका खोजत बानी"',
              rajasthani: 'जमाओ: "म्हे आगे बढ़ण रो मौको ढूंढ रियो हां"'
            },
            explanation: {
              hinglish: '"I am looking for an opportunity to grow" job interview ka classic professional vakya hai.',
              hindi: 'करियर विकास की आकांक्षा व्यक्त करने हेतु यह उत्कृष्ट वाक्य है।',
              haryanvi: 'इंटरव्यू म तरक्की की चाहत बताण खातिर यो बोल्या जावै सै।',
              awadhi: 'नौकरी के इंटरव्यू में तरक्की खातिर ई वाक्य बोला जात है।',
              bhojpuri: 'नौकरी के इंटरव्यू में तरक्की खातिर ई कहल जाला।',
              rajasthani: 'नौकरी रै इंटरव्यू में तरक्की वास्ते ओ वाक्य बोलीजे।'
            }
          },
          {
            id: 'q3',
            type: 'fill_blank',
            sentenceParts: ['I can easily ', ' to new environments and technologies.'],
            blankIndex: 1,
            audioText: 'I can easily adapt to new environments and technologies.',
            phonetic: 'आई कैन ईज़िली अडैप्ट टू न्यू एनवायरनमेंट्स एंड टेक्नोलॉजीज़।',
            promptRegional: {
              hinglish: 'Dhal jaane (samayojit hone) ke liye sahi verb chunein:',
              hindi: 'नये माहौल में ढलने (Adapt) हेतु सही शब्द चुनें:',
              haryanvi: 'नए माहौल म ढलण खातिर ठीक शब्द छांटो:',
              awadhi: 'नए माहौल में ढल जाय खातिर सही शब्द चुनि:',
              bhojpuri: 'नया माहौल में ढल जाए खातिर सही शब्द चुनीं:',
              rajasthani: 'नवे माहौल में ढलण वास्ते सही शब्द चुणो:'
            },
            options: [
              { id: 'opt1', text: 'adapt', isCorrect: true },
              { id: 'opt2', text: 'fight', isCorrect: false },
              { id: 'opt3', text: 'forget', isCorrect: false }
            ],
            explanation: {
              hinglish: '"Adapt" ka matlab hota hai nayi paristhiti ya technology mein jaldi dhal jana.',
              hindi: '"Adapt" का अर्थ परिस्थितियों के अनुसार अनुकूलित होना है।',
              haryanvi: '"Adapt" का मतलब नए माहौल म ढल जाना होवै सै।',
              awadhi: '"Adapt" के मतलब नए माहौल में ढल जाब बा।',
              bhojpuri: '"Adapt" के मतलब नया माहौल में ढल जाइल होला।',
              rajasthani: '"Adapt" रो मतलब नवे माहौल में ढल जाणो वेवे है।'
            }
          },
          {
            id: 'q4',
            type: 'conversation_reply',
            speaker: 'HR Manager',
            dialogue: 'Do you have any questions for us regarding the job profile?',
            audioText: 'Do you have any questions for us regarding the job profile?',
            promptRegional: {
              hinglish: 'HR ne poocha kya aapka koi sawal hai? Best answer chunein:',
              hindi: 'एचआर ने पूछा क्या आपका कोई प्रश्न है? सर्वोत्तम उत्तर चुनें:',
              haryanvi: 'कंपनी आले नै बूझया कोई सवाल सै के थारा? ठीक जवाब के द्योगे?',
              awadhi: 'कंपनी वाले पूछेन का आपका कउनो सवाल बा? सही जवाब चुनि:',
              bhojpuri: 'कंपनी वाला पूछलें का रउआ के कवनो सवाल बा? सही जबाब चुनीं:',
              rajasthani: 'कंपनी वाळा पूछ्यो कांई थांरो कोई सवाल है? सही उत्तर कांई देवोला?'
            },
            options: [
              { id: 'opt1', text: 'Yes, could you please tell me more about growth opportunities and the team?', isCorrect: true },
              { id: 'opt2', text: 'No, I just want to leave immediately.', isCorrect: false },
              { id: 'opt3', text: 'When is your lunch time?', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Interview ke ant mein team culture aur growth ke baare mein poochna aapki ruchi dikhata hai.',
              hindi: 'विकास के अवसरों के विषय में पूछना आपकी सकारात्मक रुचि को प्रमाणित करता है।',
              haryanvi: 'तरक्की अर टीम के बारे म बूझण तै कंपनी म थारी दिलचस्पी दिखै सै।',
              awadhi: 'कंपनी के माहौल के बारे में पूछे से आपकी दिलचस्पी देखात है।',
              bhojpuri: 'कंपनी के माहौल के बारे में पूछे से रउआ के रुचि लउकेला।',
              rajasthani: 'कंपनी रै माहौल बाबत पूछण सूं आपरी लगन दरसावे है।'
            }
          },
          {
            id: 'q5',
            type: 'choice_regional_to_english',
            promptRegional: {
              hinglish: '"Main samay ka pakka hoon aur apna kaam samay par karta hoon" ko English mein kya kahenge?',
              hindi: '"मैं समय का पाबंद हूं और अपना काम समय पर पूरा करता हूं" का सही अनुवाद चुनें:',
              haryanvi: '"मैं टेम का पाबंद सूं अर काम टेम पै करूं सूं" नै English म के कहवैंगे?',
              awadhi: '"हम समय के पक्के अही अउर आपन काम समय पर करित हन" के अंग्रेज़ी में का कहब?',
              bhojpuri: '"हम समय के पाबंद बानी आ आपन काम समय पर पूरा करीला" के अंग्रेजी में का कहल जाई?',
              rajasthani: '"म्हे बगत रा पाबंद हां अर आपरो काम बगत माथै करां" नै English में कांई कहवे?'
            },
            audioText: 'I am punctual and complete my work on time.',
            phonetic: 'आई एम पंक्चुअल एंड कम्प्लीट माई वर्क ऑन टाइम।',
            options: [
              { id: 'opt1', text: 'I am punctual and complete my work on time.', isCorrect: true },
              { id: 'opt2', text: 'I am always late to everywhere.', isCorrect: false },
              { id: 'opt3', text: 'Time is running after a dog.', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Samay ka pakka hone ke liye "punctual" sabse shandaar English shabd hai.',
              hindi: 'समय की पाबंदी हेतु "Punctual" उपयुक्त एवं आधिकारिक शब्द है।',
              haryanvi: 'टेम के पाबंद खातिर "punctual" बोल्या जावै सै।',
              awadhi: 'समय के पाबंद खातिर "punctual" कहा जात है।',
              bhojpuri: 'समय के पाबंद खातिर "punctual" कहल जाला।',
              rajasthani: 'बगत रै पाबंद वास्ते "punctual" बोलीजे।'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'module-8',
    number: 8,
    title: 'English for Daily Life',
    subtitle: 'Bank, Hospital, Railway aur Online shopping',
    icon: 'ShieldCheck',
    color: 'emerald',
    description: 'Essential real-world English for hospital visits, doctor consultations, bank counters, and courier delivery.',
    totalLessons: 1,
    lessons: [
      {
        id: 'm8-l1',
        moduleId: 'module-8',
        title: 'At the Hospital & Bank',
        description: 'Doctor aur bank manager se zaroori baat',
        xpReward: 25,
        coinReward: 15,
        questions: [
          {
            id: 'q1',
            type: 'choice_english_to_regional',
            englishPrompt: 'I have a severe headache and fever since yesterday.',
            audioText: 'I have a severe headache and fever since yesterday.',
            phonetic: 'आई हैव अ सीवियर हेडेक एंड फीवर सिंस यस्टरडे',
            promptRegional: {
              hinglish: 'Doctor ke paas mareez kya bata raha hai?',
              hindi: 'डॉक्टर के समक्ष रोगी क्या समस्या बता रहा है?',
              haryanvi: 'डाक्टर कै यो मरीज के बता रहया सै?',
              awadhi: 'डॉक्टर के लगे मरीज का बतावत अहई?',
              bhojpuri: 'डाक्टर लगे मरीज का बतावत बाड़े?',
              rajasthani: 'डाक्टर कने मरीज कांई बता रिया है?'
            },
            options: [
              {
                id: 'opt1',
                text: {
                  hinglish: 'Mujhe kal se tez sirdard aur bukhar hai.',
                  hindi: 'मुझे कल से तीव्र सिरदर्द और बुखार है।',
                  haryanvi: 'म्हारै काल तै बड़ा तेज सिर म दर्द अर ताव चढ़ रहया सै।',
                  awadhi: 'हमार काल्हि से बहुत तेज कपार पिरात बा अउर बुखार अहई।',
                  bhojpuri: 'हमरा काल्ह से बहुते तेज माथ दर्द आ बुखार बा।',
                  rajasthani: 'म्हारै काल सूं घणो तेज माथो दुख रह्यो है अर ताव चढ़्यो है।'
                },
                isCorrect: true
              },
              {
                id: 'opt2',
                text: {
                  hinglish: 'Mujhe meethi jalebi khani hai.',
                  hindi: 'मुझे मीठी जलेबी खानी है।',
                  haryanvi: 'मन्नै जलेबी खाणी सै।',
                  awadhi: 'हमार जलेबी खाय के मन करत बा।',
                  bhojpuri: 'हमरा जलेबी खाए के मन बा।',
                  rajasthani: 'म्हनै जलेबी खावणी है।'
                },
                isCorrect: false
              }
            ],
            explanation: {
              hinglish: 'Headache = Sirdard, Fever = Bukhar, Severe = Tez ya gambhir.',
              hindi: 'Headache (सिरदर्द), Fever (बुखार) एवं Severe (गंभीर/तेज़)।',
              haryanvi: 'Headache मतलब सिर दर्द, Fever मतलब ताव/बुखार।',
              awadhi: 'Headache माने कपार पिराना, Fever माने बुखार।',
              bhojpuri: 'Headache माने माथ के दर्द, Fever माने बुखार।',
              rajasthani: 'Headache मतलब माथो दुखणो, Fever मतलब ताव।'
            }
          },
          {
            id: 'q2',
            type: 'choice_regional_to_english',
            promptRegional: {
              hinglish: '"Mujhe apna naya bank khata kholna hai" ko English mein kya kahenge?',
              hindi: '"मुझे अपना नया बैंक खाता खोलना है" को अंग्रेज़ी में क्या कहेंगे?',
              haryanvi: '"मन्नै बैंक म आपणा नया खाता खुलवाणा सै" नै English म के बोलैंगे?',
              awadhi: '"हमार बैंक में नवा खाता खोलै के बा" के English में का कहब?',
              bhojpuri: '"हमरा बैंक में नया खाता खोले के बा" के अंग्रेजी में का कहल जाई?',
              rajasthani: '"म्हनै बैंक में आपरो नवो खातो खुलावणो है" नै English में कांई कहवे?'
            },
            audioText: 'I want to open a new bank account.',
            phonetic: 'आई वांट टू ओपन अ न्यू बैंक अकाउंट',
            options: [
              { id: 'opt1', text: 'I want to open a new bank account.', isCorrect: true },
              { id: 'opt2', text: 'Please close all the windows.', isCorrect: false },
              { id: 'opt3', text: 'Where is the cricket match?', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Bank mein account kholne ke liye "I want to open a new bank account" bola jata hai.',
              hindi: 'बैंक में नया खाता खुलवाने का यह सटीक एवं स्पष्ट अंग्रेज़ी वाक्य है।',
              haryanvi: 'बैंक म खाता खुलवाण खातिर सीधा यो वाक्य बोल्या करैं।',
              awadhi: 'बैंक में खाता खोलै खातिर ई वाक्य बोला जात है।',
              bhojpuri: 'बैंक में खाता खोले खातिर ई वाक्य कहल जाला।',
              rajasthani: 'बैंक में खातो खुलावण वास्ते ओ वाक्य बोलीजे।'
            }
          },
          {
            id: 'q3',
            type: 'fill_blank',
            sentenceParts: ['Please sign here and attach your Aadhaar ', ' for verification.'],
            blankIndex: 1,
            audioText: 'Please sign here and attach your Aadhaar card for verification.',
            promptRegional: {
              hinglish: 'Bank counter par khali jagah bharein (Aadhaar dastawez):',
              hindi: 'रिक्त स्थान भरें (पहचान पत्र के संदर्भ में):',
              haryanvi: 'खाली जगह भरो (आधार कागद):',
              awadhi: 'खाली जगह भरा (आधार कार्ड):',
              bhojpuri: 'खाली जगह भरीं (आधार कार्ड):',
              rajasthani: 'खाली जगह भरो (आधार कागद):'
            },
            options: [
              { id: 'opt1', text: 'card', isCorrect: true },
              { id: 'opt2', text: 'tree', isCorrect: false },
              { id: 'opt3', text: 'bicycle', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Aadhaar card verification ke liye basic identity proof hota hai.',
              hindi: 'Aadhaar card पहचान प्रमाणीकरण (KYC) के लिए सर्वाधिक प्रयुक्त होता है।',
              haryanvi: 'पहचान खातिर आधार कार्ड का नाम लिया करैं।',
              awadhi: 'पहचान खातिर आधार कार्ड लगावा जात है।',
              bhojpuri: 'पहचान खातिर आधार कार्ड लगावल जाला।',
              rajasthani: 'ओळख वास्ते आधार कार्ड लाग्या करे।'
            }
          },
          {
            id: 'q4',
            type: 'reorder_sentence',
            correctSentence: 'When will my courier arrive',
            words: ['arrive', 'courier', 'my', 'When', 'will'],
            audioText: 'When will my courier arrive?',
            promptRegional: {
              hinglish: 'Online delivery ke liye sajayein (Mera parcel/courier kab pahuchega?):',
              hindi: 'पार्सल की स्थिति जानने हेतु व्यवस्थित करें (मेरा पार्सल कब पहुँचेगा?):',
              haryanvi: 'जमाओ (म्हारे घरै पार्सल कदे पुहंचेगा?):',
              awadhi: 'सजावा (हमार सामान कब पहुंचि?):',
              bhojpuri: 'सजाईं (हमार पार्सल कब पहुँची?):',
              rajasthani: 'जमाओ (म्हांरो पार्सल कदे पहुंचेला?):'
            },
            explanation: {
              hinglish: 'Courier ya delivery kab aayegi poochne ke liye "When will my courier arrive?" bolte hain.',
              hindi: 'पार्सल आगमन का समय जानने के लिए यह उपयुक्त वाक्य है।',
              haryanvi: 'सामान कद ताहीं आवेगा बूझण खातिर यो बोलैं।',
              awadhi: 'सामान कब आई पूछे खातिर ई वाक्य बोला जात है।',
              bhojpuri: 'सामान कब पहुँची पूछे खातिर ई कहल जाला।',
              rajasthani: 'पार्सल कद पहुंचेला पूछण वास्ते ओ वाक्य बोलीजे।'
            }
          },
          {
            id: 'q5',
            type: 'conversation_reply',
            speaker: 'Delivery Boy',
            dialogue: 'Sir, I am standing outside your house with your package.',
            audioText: 'Sir, I am standing outside your house with your package.',
            promptRegional: {
              hinglish: 'Delivery person ghar ke bahar khada hai. Sahi uttar chunein:',
              hindi: 'डिलीवरी कर्मी घर के बाहर उपस्थित है। सही प्रत्युत्तर चुनें:',
              haryanvi: 'सामान देण आला घर कै बाहर खड़ा सै। ठीक जवाब के द्योगे?',
              awadhi: 'सामान देवै वाला घरे के बाहर खड़ा बा। सही जवाब चुनि:',
              bhojpuri: 'सामान देवे वाला घरे के बाहर खड़ा बा। सही जबाब चुनीं:',
              rajasthani: 'पार्सल देवे वाळो घर रै बाहरे ऊभो है। सही उत्तर कांई देवोला?'
            },
            options: [
              { id: 'opt1', text: 'Thank you! I am coming out to receive it right now.', isCorrect: true },
              { id: 'opt2', text: 'I am playing on the moon.', isCorrect: false },
              { id: 'opt3', text: 'Birds are flying in the sky.', isCorrect: false }
            ],
            explanation: {
              hinglish: '"I am coming out to receive it" ka matlab main abhi bahar lene aa raha hoon.',
              hindi: 'सामान लेने बाहर आने की सूचना देने हेतु यह सर्वोत्तम वाक्य है।',
              haryanvi: 'बाहर आके सामान लेण खातिर यो जवाब द्योगे।',
              awadhi: 'बाहर सामान लेवै जाय खातिर ई बात कहल जात है।',
              bhojpuri: 'बाहर सामान लेवे जाए खातिर ई कहल जाई।',
              rajasthani: 'बाहर आय\'र पार्सल लेवण वास्ते आ बात बोलीजे।'
            }
          }
          ]
        },
        {
        id: 'm8-l2',
        moduleId: 'module-8',
        title: 'Travel, Metro & Online Services',
        description: 'Yatra, metro train, cab booking aur online suvidhaon ke vakya',
        xpReward: 35,
        coinReward: 20,
        questions: [
          {
            id: 'q1',
            type: 'conversation_reply',
            speaker: 'Cab Driver',
            dialogue: 'Hello sir, I have arrived at your pickup location.',
            audioText: 'Hello sir, I have arrived at your pickup location.',
            promptRegional: {
              hinglish: 'Cab driver ne kaha ki wo pickup par pahunch gaya hai. Sahi uttar chunein:',
              hindi: 'कैब चालक ने पिकअप स्थल पर पहुंचने की सूचना दी। सही उत्तर चुनें:',
              haryanvi: 'गाड़ी आला थारे पते पै आ गया। ठीक जवाब के द्योगे?',
              awadhi: 'गाड़ी वाला आपके ठिकाना पर पहुँच गवा। सही जवाब चुनि:',
              bhojpuri: 'गाड़ी वाला रउआ के ठिकाना पर पहुँच गइलन। सही जबाब चुनीं:',
              rajasthani: 'गाड़ी वाळो थांरै पते माथै आय गयो। सही उत्तर कांई देवोला?'
            },
            options: [
              { id: 'opt1', text: 'Great, thank you! I am coming down in two minutes.', isCorrect: true },
              { id: 'opt2', text: 'Drive the car into the river.', isCorrect: false },
              { id: 'opt3', text: 'I am flying to Tokyo right now.', isCorrect: false }
            ],
            explanation: {
              hinglish: '"I am coming down in two minutes" (main 2 minute mein neeche aa raha hoon) sabse practical javab hai.',
              hindi: 'शीघ्र नीचे आने की सूचना देने हेतु यह व्यावहारिक वाक्य है।',
              haryanvi: 'दो मिनट म नीचै आवण की बात कहो।',
              awadhi: 'दू मिनट में नीचे आवै के बात कही जात है।',
              bhojpuri: 'दू मिनट में नीचे आवे के बात कहल जाला।',
              rajasthani: 'दो मिनट में नीचे आवण री बात बोलीजे।'
            }
          },
          {
            id: 'q2',
            type: 'fill_blank',
            sentenceParts: ['Two tickets ', ' Rajiv Chowk metro station, please.'],
            blankIndex: 1,
            audioText: 'Two tickets to Rajiv Chowk metro station, please.',
            phonetic: 'टू टिकट्स टू राजीव चौक मेट्रो स्टेशन, प्लीज।',
            promptRegional: {
              hinglish: 'Ticket counter par sahi preposition chunein (Kahan tak ki ticket):',
              hindi: 'टिकट काउंटर पर गंतव्य स्थल दर्शाने हेतु सही शब्द चुनें:',
              haryanvi: 'टिकट खिड़की पै ठीक शब्द भरो:',
              awadhi: 'टिकट खिड़की पर सही शब्द भरा:',
              bhojpuri: 'टिकट खिड़की पर सही शब्द भरीं:',
              rajasthani: 'टिकट खिड़की माथै सही शब्द चुणो:'
            },
            options: [
              { id: 'opt1', text: 'to', isCorrect: true },
              { id: 'opt2', text: 'above', isCorrect: false },
              { id: 'opt3', text: 'under', isCorrect: false }
            ],
            explanation: {
              hinglish: 'Gantavya (Destination) batane ke liye "Tickets to [Station Name]" bola jata hai.',
              hindi: 'गंतव्य स्थल के पूर्व "to" का प्रयोग होता है।',
              haryanvi: 'मंजिल बताण खातिर "tickets to..." बोल्या करैं।',
              awadhi: 'मंजिल बतावै खातिर "tickets to..." कहा जात है।',
              bhojpuri: 'मंजिल बतावे खातिर "tickets to..." कहल जाला।',
              rajasthani: 'मंजिल बतावण वास्ते "tickets to..." बोलीजे।'
            }
          },
          {
            id: 'q3',
            type: 'reorder_sentence',
            correctSentence: 'Which platform goes towards the airport',
            words: ['the', 'towards', 'platform', 'Which', 'airport', 'goes'],
            promptRegional: {
              hinglish: 'Railway/Metro station par poochhein: "Airport ki taraf kaun sa platform jata hai?"',
              hindi: 'मेट्रो स्टेशन पर पूछें: "एयरपोर्ट की दिशा में कौन सा प्लेटफार्म जाता है?"',
              haryanvi: 'मेट्रो पै बूझो: "हवाई अड्डे काणी कौण सा प्लेटफार्म जावै सै?"',
              awadhi: 'मेट्रो पर पूछा: "हवाई अड्डा की तरफ कउन प्लेटफार्म जात है?"',
              bhojpuri: 'मेट्रो में पूछीं: "हवाई अड्डा के तरफ कवन प्लेटफार्म जाला?"',
              rajasthani: 'मेट्रो माथै पूछो: "हवाई अड्डे कानी किण प्लेटफार्म सूं जावणो पड़ेला?"'
            },
            explanation: {
              hinglish: '"Which platform goes towards..." yatra ke doran rasta poochhne ke liye perfect hai.',
              hindi: 'प्लेटफार्म की दिशा जानने हेतु यह सटीक वाक्य है।',
              haryanvi: 'प्लेटफार्म का पता करण खातिर यो वाक्य बोल्या करैं।',
              awadhi: 'प्लेटफार्म पूछे खातिर ई वाक्य बोला जात है।',
              bhojpuri: 'प्लेटफार्म पूछे खातिर ई वाक्य कहल जाला।',
              rajasthani: 'प्लेटफार्म पूछण वास्ते ओ वाक्य बोलीजे।'
            }
          },
          {
            id: 'q4',
            type: 'match_pairs',
            promptRegional: {
              hinglish: 'Yatra se jude shabdon ko unke sahi arth se jodein:',
              hindi: 'यात्रा से संबंधित शब्दों का सही मिलान करें:',
              haryanvi: 'सफर के शब्दां का ठीक मिलान करो:',
              awadhi: 'यात्रा से जुड़े शब्दन का जोड़ी मिलावा:',
              bhojpuri: 'यात्रा से जुड़ल शब्दन के सही जोड़ा मिलाईं:',
              rajasthani: 'सफर रै शब्दां रो सही मिलान करो:'
            },
            pairs: [
              {
                english: 'Fare',
                regional: {
                  hinglish: 'Kiraya / Bhada',
                  hindi: 'किराया (भाड़ा)',
                  haryanvi: 'भाड़ा',
                  awadhi: 'भाड़ा',
                  bhojpuri: 'भाड़ा',
                  rajasthani: 'भाड़ो'
                }
              },
              {
                english: 'Delay',
                regional: {
                  hinglish: 'Der / Vilamb',
                  hindi: 'देरी (विलंब)',
                  haryanvi: 'मोड़ा / देरी',
                  awadhi: 'अबेर',
                  bhojpuri: 'अबेर',
                  rajasthani: 'अवार / देरी'
                }
              },
              {
                english: 'Receipt',
                regional: {
                  hinglish: 'Raseed / Bill',
                  hindi: 'रसीद (पावती)',
                  haryanvi: 'रसीद / पर्ची',
                  awadhi: 'रसीद',
                  bhojpuri: 'रसीद',
                  rajasthani: 'रसीद'
                }
              }
            ],
            explanation: {
              hinglish: 'Fare = Kiraya, Delay = Deri, Receipt = Raseed.',
              hindi: 'यात्रा और लेन-देन में ये शब्द अत्यंत आवश्यक हैं।',
              haryanvi: 'सफर म ये शब्द सदा काम आवैं सैं।',
              awadhi: 'सफर में ई सब शब्द बहुत काम आवत हैं।',
              bhojpuri: 'सफर में ई सब शब्द बहुत काम आवेला।',
              rajasthani: 'सफर में ए शब्द घणा काम आवे।'
            }
          },
          {
            id: 'q5',
            type: 'choice_english_to_regional',
            englishPrompt: 'Could you please send the location on WhatsApp?',
            audioText: 'Could you please send the location on WhatsApp?',
            phonetic: 'कुड यू प्लीज सेंड द लोकेशन ऑन व्हाट्सएप?',
            promptRegional: {
              hinglish: 'Is vakya ka sahi matlab kya hai?',
              hindi: 'इस वाक्य का सही अर्थ चुनें:',
              haryanvi: 'इस बात का ठीक मतलब के सै?',
              awadhi: 'एकर सही मतलब का होई?',
              bhojpuri: 'एकर सही मतलब का होखी?',
              rajasthani: 'इण रो सही मतलब कांई हुवे?'
            },
            options: [
              { id: 'opt1', text: {
                hinglish: 'Kya aap kripya WhatsApp par apni location bhej sakte hain?',
                hindi: 'क्या आप कृपया व्हाट्सएप पर अपनी लोकेशन भेज सकते हैं?',
                haryanvi: 'के तू व्हाट्सएप पै अपनी लोकेशन भेज सकै सै?',
                awadhi: 'का आप कृपया व्हाट्सएप पर लोकेशन भेज सकत हौ?',
                bhojpuri: 'का रउआ व्हाट्सएप पर लोकेशन भेज सकत बानी?',
                rajasthani: 'कांई थे व्हाट्सएप माथै लोकेशन भेज सको हो?'
              }, isCorrect: true },
              { id: 'opt2', text: {
                hinglish: 'Mera phone toot gaya hai.',
                hindi: 'मेरा फोन टूट गया है।',
                haryanvi: 'मेरा फोन फुट गया।',
                awadhi: 'हमार फोन टूट गवा।',
                bhojpuri: 'हमार फोन टूट गइल।',
                rajasthani: 'म्हारो फोन फूट गयो।'
              }, isCorrect: false },
              { id: 'opt3', text: {
                hinglish: 'WhatsApp band ho gaya hai.',
                hindi: 'व्हाट्सएप बंद हो गया है।',
                haryanvi: 'व्हाट्सएप बंद होग्या।',
                awadhi: 'व्हाट्सएप बंद होइ गवा।',
                bhojpuri: 'व्हाट्सएप बंद हो गइल।',
                rajasthani: 'व्हाट्सएप बंद होय गयो।'
              }, isCorrect: false }
            ],
            explanation: {
              hinglish: 'Online cab aur delivery mein location mangne ke liye yeh rozmarra ka ahem vakya hai.',
              hindi: 'डिजिटल दौर में लोकेशन मांगने हेतु यह अनिवार्य संवाद है।',
              haryanvi: 'पते का पता करण खातिर यो वाक्य घणा बढ़िया सै।',
              awadhi: 'पता पावै खातिर ई वाक्य बहुत काम आवत है।',
              bhojpuri: 'पता पावे खातिर ई वाक्य बहुत काम आवेला।',
              rajasthani: 'पतो जाणण वास्ते ओ वाक्य घणो चोखो है।'
            }
          }
        ]
      }
    ]
  }
];

export const getModuleById = (id) => {
  return MODULES_DATA.find((m) => m.id === id) || MODULES_DATA[0];
};

export const getLessonById = (moduleId, lessonId) => {
  const mod = getModuleById(moduleId);
  return mod.lessons.find((l) => l.id === lessonId) || mod.lessons[0];
};
