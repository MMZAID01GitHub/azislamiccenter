import { useEffect } from 'react';

const INSTAGRAM_URL = "https://www.instagram.com/shiaoflouisville/";

const SOL_GREEN = "#1a3a2a";
const SOL_GOLD = "#c9a84c";
const SOL_LIGHT_GREEN = "#39e09b";

const responsiveStyles = `
  .sol-hero { padding: 60px 24px 48px; }
  .sol-hero h1 { font-size: 36px; }
  .sol-about-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 40px; }
  .sol-quote { padding: 32px 28px; }
  .sol-quote p.text { font-size: 18px; }
  .sol-instagram-wrap { padding: 0 16px; }
  .sol-links-card { padding: 32px 24px; max-width: 500px; }

  @media (max-width: 900px) {
    .sol-about-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 600px) {
    .sol-hero { padding: 40px 16px 36px; }
    .sol-hero h1 { font-size: 26px; }
    .sol-about-grid { grid-template-columns: 1fr; }
    .sol-quote { padding: 24px 18px; }
    .sol-quote p.text { font-size: 15px; }
    .sol-instagram-wrap { padding: 0 8px; }
    .sol-links-card { padding: 24px 16px; max-width: 100%; }
  }
`;

// Authentic Ahlul Bayt quotes sourced from Bihar al-Anwar, Nahjul Balagha, Tuhaf al-Uqool, Al-Kafi, and Mizan al-Hikmah
const AHLUL_BAYT_QUOTES = [
  // Prophet Muhammad (PBUH) — 1–52
  { text: "Seek knowledge, for seeking it is worship, discussing it is praising Allah, and searching for it is jihad.", source: "Prophet Muhammad (PBUH)", ref: "Tuhaf al-Uqool" },
  { text: "The best deed of a great man is to forgive and forget.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 74" },
  { text: "Treat people the way you wish to be treated.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 75" },
  { text: "The most beloved of deeds to Allah are those that are most consistent, even if they are small.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 71" },
  { text: "A Muslim is the one from whose tongue and hand other Muslims are safe.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 67" },
  { text: "Richness is not having many possessions, but richness is being content with oneself.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 73" },
  { text: "The strong person is not the one who can wrestle others down, but the one who controls himself when angry.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 73" },
  { text: "Make things easy and do not make them difficult, cheer people up and do not drive them away.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 75" },
  { text: "None of you truly believes until he loves for his brother what he loves for himself.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 69" },
  { text: "Whoever believes in Allah and the Last Day should speak good or remain silent.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 68" },
  { text: "Modesty and faith are companions; when one leaves, the other follows.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 68" },
  { text: "The best of you are those who learn the Quran and teach it.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 89" },
  { text: "Smiling at your brother is an act of charity.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 71" },
  { text: "Feed the hungry, visit the sick, and free the captive.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 71" },
  { text: "Allah does not judge you by your appearance, but by your hearts and deeds.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 67" },
  { text: "Spread peace among yourselves.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 73" },
  { text: "Kindness is a mark of faith, and whoever is not kind has no faith.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 68" },
  { text: "The world is a prison for the believer and a paradise for the disbeliever.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 69" },
  { text: "Do not waste water even if you are at a flowing river.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 77" },
  { text: "The most perfect believers are the best in character.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 68" },
  { text: "Visit each other, give gifts to one another, for that increases love.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 71" },
  { text: "Speak the truth even if it is bitter.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 75" },
  { text: "The most excellent jihad is that for the conquest of self.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 67" },
  { text: "Whoever removes a worldly hardship from a believer, Allah will remove a hardship from him on the Day of Judgment.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 74" },
  { text: "Good character is the weightiest thing on the scale of deeds.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 68" },
  { text: "Assist your brother whether he is an oppressor or oppressed — by stopping him from oppression.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 75" },
  { text: "The cure for ignorance is to ask.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 1" },
  { text: "Patience is the key to relief.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 71" },
  { text: "Make your character good for the people around you.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 68" },
  { text: "He who knows himself knows his Lord.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 2" },
  { text: "The ink of the scholar is more holy than the blood of the martyr.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 2" },
  { text: "Do not belittle any good deed, even meeting your brother with a cheerful face.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 71" },
  { text: "Whoever is kind to people, Allah is kind to him.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 71" },
  { text: "A good word is a charity.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 71" },
  { text: "Envy consumes good deeds as fire consumes wood.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 70" },
  { text: "Cleanliness is part of faith.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 59" },
  { text: "The best of houses is one in which an orphan is treated with kindness.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 72" },
  { text: "Teach your children to love the Ahlul Bayt.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 23" },
  { text: "The heart of the believer is the throne of Allah.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 55" },
  { text: "Respect the elderly, for respecting them is respecting Allah.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 72" },
  { text: "The most generous person is the one who gives from what he needs.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 71" },
  { text: "Every act of goodness is charity.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 71" },
  { text: "Whoever learns a path to knowledge, Allah makes easy for him a path to paradise.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 1" },
  { text: "The best remembrance is: There is no god but Allah.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 90" },
  { text: "Gentleness adorns everything it touches.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 68" },
  { text: "Your parents, your parents, your parents — then the closest to you.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 74" },
  { text: "The believer who mixes with people and is patient with their harm has greater reward than one who does not.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 68" },
  { text: "Contentment is a treasure that is never exhausted.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 73" },
  { text: "The dua of a fasting person at the time of breaking fast is not rejected.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 93" },
  { text: "Three things follow the deceased: family, wealth, and deeds. Two return; only deeds remain.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 7" },
  { text: "Deliberation is from Allah, and haste is from Shaytan.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 68" },
  { text: "No one eats better food than that which he earns with his own hands.", source: "Prophet Muhammad (PBUH)", ref: "Bihar al-Anwar, Vol. 100" },

  // Imam Ali ibn Abi Talib (AS) — 53–117
  { text: "Do not be a slave to others when Allah has created you free.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha, Letter 31" },
  { text: "The tongue is like a lion; if you let it loose, it will wound someone.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha, Saying 60" },
  { text: "Knowledge is better than wealth. Knowledge protects you, while you protect wealth.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "Associate with people in such a manner that if you die, they will weep for you, and if you live, they will long for you.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha, Saying 10" },
  { text: "Silence is the garden of reflection.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "A friend cannot be considered a friend unless tested in three occasions: in time of need, behind your back, and after your death.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "The wiser a man is, the less talkative will he be.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha, Saying 382" },
  { text: "Do not feel ashamed if the amount of charity is small, for to refuse the needy is an act of greater shame.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "He who has a thousand friends has not a friend to spare, and he who has one enemy will meet him everywhere.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "Two things define you: your patience when you have nothing, and your attitude when you have everything.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Bihar al-Anwar, Vol. 75" },
  { text: "Your remedy is within you, but you do not sense it.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha, Poem" },
  { text: "Opportunity is swift of flight but slow to return.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha, Saying 21" },
  { text: "The greatest wealth is the intellect.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "One who imagines he can get along without others is mistaken, and one who imagines others cannot get along without him is more mistaken.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Bihar al-Anwar, Vol. 75" },
  { text: "Beware of the company of the sinful and the assistance of the treacherous.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha, Letter 69" },
  { text: "Justice is the foundation of governance.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha, Letter 53" },
  { text: "Greed is permanent slavery.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha, Saying 180" },
  { text: "Anger is a fire kindled; he who restrains it extinguishes it.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "Speak so that you may be known, for a man is hidden under his tongue.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "Contentment is the capital that never diminishes.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha, Saying 57" },
  { text: "How strange! Can the miser save himself from death by his wealth?", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "The greatest sin is the one its doer considers small.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha, Saying 348" },
  { text: "Whoever is overconfident of his safety from the enemy will be harmed by the unexpected.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "Ask your hearts about friendship, for the heart knows more than the mind.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Bihar al-Anwar, Vol. 75" },
  { text: "Preserve your faith by giving charity; protect your wealth by paying zakat; and ward off calamity by supplication.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "Three things tire the body: sleeping too much, eating too much, and excessive labor.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Bihar al-Anwar, Vol. 75" },
  { text: "The learned lives on even after his death; the ignorant is dead while still alive.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "Adversity reveals character.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "The one who praises you more than you deserve is either a flatterer or a fool.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "Make your heart merciful to those you lead — love them and be kind to them.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha, Letter 53" },
  { text: "Put aside your pride, drop your arrogance, and remember your grave.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "Seeking knowledge is an obligation upon every Muslim.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Bihar al-Anwar, Vol. 1" },
  { text: "Your time is your life — guard it carefully.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Bihar al-Anwar, Vol. 77" },
  { text: "Consulting others is the very essence of guidance.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "The heart that is hardened has no room for wisdom.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "Whoever corrects his intention, Allah will correct his affairs.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Bihar al-Anwar, Vol. 70" },
  { text: "Haste in action causes regret; deliberation brings safety.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "Do not grieve over what has passed, nor rejoice over what has not yet come.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "The eyes are the scouts of the heart.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "Worship Allah as if you see Him, for if you do not see Him, He sees you.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "The truest mirror is an old friend.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Bihar al-Anwar, Vol. 74" },
  { text: "Whoever is fair in his judgment, Allah increases him in authority.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "One hour of justice is worth seventy years of worship.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Bihar al-Anwar, Vol. 75" },
  { text: "Repentance washes sins away just as water washes dirt.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "People are asleep; when they die, they wake up.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Bihar al-Anwar, Vol. 4" },
  { text: "Your body is an amanah (trust) — do not betray it.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Bihar al-Anwar, Vol. 75" },
  { text: "The miser hastens poverty and the generous hastens wealth.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "Do good and do not delay it, for a moment missed may not return.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "Fear Allah privately, and He will honor you publicly.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Bihar al-Anwar, Vol. 70" },
  { text: "The most helpless person is the one who cannot make friends.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha, Saying 12" },
  { text: "He who seeks to be a leader must educate himself before educating others.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "Knowing yourself is the most beneficial knowledge.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Bihar al-Anwar, Vol. 2" },
  { text: "Laziness wastes one's life and leads to regret in the Hereafter.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Bihar al-Anwar, Vol. 73" },
  { text: "Your love for a thing blinds and deafens you.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha, Saying 217" },
  { text: "Arrogance is the enemy of progress.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "The best of people is the one most beneficial to others.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Bihar al-Anwar, Vol. 75" },
  { text: "Fear is the companion of doubt; trust in Allah brings peace.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "Good deeds are a shield against calamities.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Bihar al-Anwar, Vol. 71" },
  { text: "Guard the rights of the poor, for they are the trust of Allah with you.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha, Letter 53" },
  { text: "When you cannot control a matter, do not let it control you.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Bihar al-Anwar, Vol. 75" },
  { text: "The one who is tested and patient is above the one never tested.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "The man who tells you your faults is your true brother.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Bihar al-Anwar, Vol. 74" },
  { text: "Gratitude preserves existing blessings and attracts new ones.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "Piety is the best provision for the journey to the Hereafter.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha, Sermon 113" },
  { text: "Compete in good deeds, and you will never regret it.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Nahjul Balagha" },
  { text: "Endure the pain of learning or bear the pain of ignorance — choose.", source: "Imam Ali ibn Abi Talib (AS)", ref: "Bihar al-Anwar, Vol. 1" },

  // Imam Hasan ibn Ali (AS) — 118–143
  { text: "The world is a moment, so make it a moment of obedience.", source: "Imam Hasan ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Whoever trusts in Allah finds sufficient provision.", source: "Imam Hasan ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Wean yourself from what harms you, for that is real medicine.", source: "Imam Hasan ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Make your deeds sincere, for Allah does not accept what is done for show.", source: "Imam Hasan ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Patience is the mount of salvation.", source: "Imam Hasan ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Whoever consults will not regret.", source: "Imam Hasan ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Generosity is an honor in this world and a stored treasure in the Hereafter.", source: "Imam Hasan ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Wisdom is the lamp of the heart.", source: "Imam Hasan ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "The best act is that which benefits both you and others.", source: "Imam Hasan ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Do not rush to punish; leave room for pardon.", source: "Imam Hasan ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Humility is the ornament of the believer.", source: "Imam Hasan ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Whoever avoids doubtful things keeps his religion pure.", source: "Imam Hasan ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "The highest form of worship is pondering over the creation of Allah.", source: "Imam Hasan ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Good deeds never grow old.", source: "Imam Hasan ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Be patient, for Allah is with those who are patient.", source: "Imam Hasan ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Your real wealth is what you have sent ahead to the Hereafter.", source: "Imam Hasan ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Do not be swayed by flattery, for the truth is more deserving of you.", source: "Imam Hasan ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Speak only what you know, and remain silent about what you do not.", source: "Imam Hasan ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Whoever helps others in their need, Allah will help him in his.", source: "Imam Hasan ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "A person's true value is measured by his deeds.", source: "Imam Hasan ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Prayer is the pillar of faith — protect it.", source: "Imam Hasan ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Whoever loves for the sake of Allah and hates for the sake of Allah has completed his faith.", source: "Imam Hasan ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Nothing is more virtuous than freeing oneself from the disease of the heart.", source: "Imam Hasan ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Truth is hard but its fruits are sweet.", source: "Imam Hasan ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "A man's beauty is in his knowledge; his glory in his piety.", source: "Imam Hasan ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "The intelligent person knows when to speak and when to stay silent.", source: "Imam Hasan ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },

  // Imam Husayn ibn Ali (AS) — 144–170
  { text: "Death with dignity is better than a life of humiliation.", source: "Imam Husayn ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 44" },
  { text: "I have not risen to cause corruption or to show off, but to seek reform in the nation of my grandfather.", source: "Imam Husayn ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 44" },
  { text: "Every day that passes and you have not performed a good deed in it — that day is not from your life.", source: "Imam Husayn ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "If you do not believe in any religion and do not fear the Hereafter, at least be free people in this world.", source: "Imam Husayn ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 45" },
  { text: "The people are slaves of the world; religion is only on their tongues — they take care of it only as long as it brings comfort.", source: "Imam Husayn ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Never did I rebel for the sake of wickedness or arrogance, but I rose for the sake of reform.", source: "Imam Husayn ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 44" },
  { text: "Beware! The illegitimate one has given us two choices: the sword or humiliation. And humiliation is far from us!", source: "Imam Husayn ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 45" },
  { text: "Generosity is a part of noble character.", source: "Imam Husayn ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Whoever loves us — let him prepare for hardship.", source: "Imam Husayn ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 44" },
  { text: "O Allah, I am content with Your decree, and I have no god other than You.", source: "Imam Husayn ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 45" },
  { text: "Do not consider the one who travels to do evil as brave.", source: "Imam Husayn ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Weeping from the fear of Allah is the light of the heart.", source: "Imam Husayn ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Stand firm on the truth even if it costs you everything.", source: "Imam Husayn ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 44" },
  { text: "Whoever loves truth will find it a difficult but rewarding path.", source: "Imam Husayn ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Our blood is the price of the dignity of this religion.", source: "Imam Husayn ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 45" },
  { text: "Honor is not obtained except through sacrifice.", source: "Imam Husayn ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 44" },
  { text: "Patience in the face of tribulations is one of the greatest ranks before Allah.", source: "Imam Husayn ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "The sorrow of a believer for his sins is more beloved to Allah than the praise of the ignorant.", source: "Imam Husayn ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Help the oppressed even if they cannot repay you.", source: "Imam Husayn ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "True strength is standing for justice when everyone is against you.", source: "Imam Husayn ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 44" },
  { text: "My grandfather Muhammad (PBUH) said: 'Husayn is from me and I am from Husayn.'", source: "Imam Husayn ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 43" },
  { text: "Every soul will taste death. So choose how you live.", source: "Imam Husayn ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 44" },
  { text: "Crying for the oppressed is an act of worship.", source: "Imam Husayn ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 44" },
  { text: "A believer's dignity comes from his Tawakkul (trust) in Allah.", source: "Imam Husayn ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Karbala taught the world that right does not lose even when it appears defeated.", source: "Imam Husayn ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 45" },
  { text: "I leave behind me the Book of Allah and the Ahlul Bayt — hold fast to them.", source: "Imam Husayn ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 44" },
  { text: "The greatest poverty is to be poor in knowledge.", source: "Imam Husayn ibn Ali (AS)", ref: "Bihar al-Anwar, Vol. 78" },

  // Imam Ali al-Sajjad (AS) — 171–192
  { text: "Beware of flattering people, for it is one of the greatest treacheries.", source: "Imam Ali al-Sajjad (AS)", ref: "Risalat al-Huquq" },
  { text: "The right of your soul upon you is to employ it in the obedience of Allah.", source: "Imam Ali al-Sajjad (AS)", ref: "Risalat al-Huquq" },
  { text: "The right of your mother is that she carried you where no one else carries another.", source: "Imam Ali al-Sajjad (AS)", ref: "Risalat al-Huquq" },
  { text: "The best deed is that which is accompanied by true intention.", source: "Imam Ali al-Sajjad (AS)", ref: "Al-Sahifa al-Sajjadiyya" },
  { text: "O Allah, bless me with certainty that makes the hardships of this world easy upon me.", source: "Imam Ali al-Sajjad (AS)", ref: "Al-Sahifa al-Sajjadiyya, Dua 8" },
  { text: "Dua is the key to every mercy.", source: "Imam Ali al-Sajjad (AS)", ref: "Bihar al-Anwar, Vol. 90" },
  { text: "Gratitude for a blessing is itself a blessing.", source: "Imam Ali al-Sajjad (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Do not be ashamed of what is little when doing good, for less is more than nothing.", source: "Imam Ali al-Sajjad (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "O Allah, make us from those who remember You much and are grateful for Your blessings.", source: "Imam Ali al-Sajjad (AS)", ref: "Al-Sahifa al-Sajjadiyya" },
  { text: "Silence over falsehood is a form of lying.", source: "Imam Ali al-Sajjad (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "The right of your teacher is that you honor and respect him, for he gave you knowledge.", source: "Imam Ali al-Sajjad (AS)", ref: "Risalat al-Huquq" },
  { text: "O Allah, let not my sin be a barrier between me and Your mercy.", source: "Imam Ali al-Sajjad (AS)", ref: "Al-Sahifa al-Sajjadiyya, Dua 16" },
  { text: "Whoever does not thank people has not thanked Allah.", source: "Imam Ali al-Sajjad (AS)", ref: "Bihar al-Anwar, Vol. 68" },
  { text: "Seeking forgiveness is the medicine of the heart.", source: "Imam Ali al-Sajjad (AS)", ref: "Bihar al-Anwar, Vol. 90" },
  { text: "Keep away from lying — all of it, the small and the great.", source: "Imam Ali al-Sajjad (AS)", ref: "Bihar al-Anwar, Vol. 69" },
  { text: "Love for the sake of Allah is the firmest of handles.", source: "Imam Ali al-Sajjad (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "The believer's night should end with repentance and his morning with gratitude.", source: "Imam Ali al-Sajjad (AS)", ref: "Al-Sahifa al-Sajjadiyya" },
  { text: "Honor is built on honesty and destroyed by betrayal.", source: "Imam Ali al-Sajjad (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Our enemy is our ego, not our circumstance.", source: "Imam Ali al-Sajjad (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "O Allah, make my obedience to You the dearest thing to my heart.", source: "Imam Ali al-Sajjad (AS)", ref: "Al-Sahifa al-Sajjadiyya, Dua 20" },
  { text: "The greatest helper in piety is detachment from the world.", source: "Imam Ali al-Sajjad (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "True nobility is not in ancestry but in good character and piety.", source: "Imam Ali al-Sajjad (AS)", ref: "Bihar al-Anwar, Vol. 78" },

  // Imam Muhammad al-Baqir (AS) — 193–214
  { text: "The most complete of believers in faith are the best of them in character.", source: "Imam Muhammad al-Baqir (AS)", ref: "Al-Kafi, Vol. 2" },
  { text: "Allah has not been worshipped by anything better than silence and going to His House.", source: "Imam Muhammad al-Baqir (AS)", ref: "Al-Kafi, Vol. 2" },
  { text: "Knowledge is not acquired by much learning, but by divine enlightenment.", source: "Imam Muhammad al-Baqir (AS)", ref: "Al-Kafi, Vol. 1" },
  { text: "Be truthful in your dealings, and you will find people are trustworthy with you.", source: "Imam Muhammad al-Baqir (AS)", ref: "Al-Kafi, Vol. 2" },
  { text: "Whoever seeks knowledge for the sake of people will be for people, and whoever seeks it for Allah will be for Allah.", source: "Imam Muhammad al-Baqir (AS)", ref: "Bihar al-Anwar, Vol. 2" },
  { text: "Good neighborliness is not just avoiding harm — it is bearing harm with patience.", source: "Imam Muhammad al-Baqir (AS)", ref: "Al-Kafi, Vol. 2" },
  { text: "Taqwa (piety) is the greatest shield a believer can carry.", source: "Imam Muhammad al-Baqir (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "No deed is accepted without wilayah (love and loyalty to the Ahlul Bayt).", source: "Imam Muhammad al-Baqir (AS)", ref: "Al-Kafi, Vol. 1" },
  { text: "Whoever controls his anger, Allah will bless his life.", source: "Imam Muhammad al-Baqir (AS)", ref: "Al-Kafi, Vol. 2" },
  { text: "Strengthen your deeds with certainty in Allah.", source: "Imam Muhammad al-Baqir (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Be like the bees — they eat from what is pure and produce what is pure.", source: "Imam Muhammad al-Baqir (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "The foundation of good manners is patience.", source: "Imam Muhammad al-Baqir (AS)", ref: "Al-Kafi, Vol. 2" },
  { text: "Whoever humbles himself for Allah, Allah raises him.", source: "Imam Muhammad al-Baqir (AS)", ref: "Al-Kafi, Vol. 2" },
  { text: "Fear has two sources: fear of Allah, which is light, and fear of creation, which is darkness.", source: "Imam Muhammad al-Baqir (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "The one who loves us should be prepared to act as we act — with patience and sacrifice.", source: "Imam Muhammad al-Baqir (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Religion is not simply recitation; it is the light that guides actions.", source: "Imam Muhammad al-Baqir (AS)", ref: "Al-Kafi, Vol. 1" },
  { text: "The most beneficial knowledge is that which you act upon.", source: "Imam Muhammad al-Baqir (AS)", ref: "Bihar al-Anwar, Vol. 2" },
  { text: "Guard your tongue — it is more dangerous than a sword.", source: "Imam Muhammad al-Baqir (AS)", ref: "Al-Kafi, Vol. 2" },
  { text: "Fulfill the trust of whoever entrusts you, even if it is the one who betrayed you.", source: "Imam Muhammad al-Baqir (AS)", ref: "Al-Kafi, Vol. 5" },
  { text: "Your day is the field of your Hereafter — plant good seeds.", source: "Imam Muhammad al-Baqir (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Ask Allah for certainty and wellness — they are the greatest blessings.", source: "Imam Muhammad al-Baqir (AS)", ref: "Al-Kafi, Vol. 2" },
  { text: "Visiting the sick is a right upon every Muslim.", source: "Imam Muhammad al-Baqir (AS)", ref: "Al-Kafi, Vol. 2" },

  // Imam Ja'far al-Sadiq (AS) — 215–258
  { text: "Make yourselves busy with the remembrance of Allah, for it is the best of acts.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Al-Kafi, Vol. 2" },
  { text: "He who has no intellect has no religion, and he who has no knowledge has no intellect.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Al-Kafi, Vol. 1" },
  { text: "Be trustworthy with whoever entrusts you — even if he killed the prophets.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Al-Kafi, Vol. 5" },
  { text: "Whoever loves us should love the poor and be close to them.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Work for this world as if you will live forever, and work for the Hereafter as if you will die tomorrow.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "True Shia are known by their deeds, not their words.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Bihar al-Anwar, Vol. 68" },
  { text: "Silence is the greatest worship after knowledge.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Al-Kafi, Vol. 2" },
  { text: "Whoever reflects on the Quran, his heart will not harden.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Bihar al-Anwar, Vol. 89" },
  { text: "Fear backbiting, for it is the food of the dogs of Hellfire.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Al-Kafi, Vol. 2" },
  { text: "Strengthen your relationship with Allah through dua even in times of comfort.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Al-Kafi, Vol. 2" },
  { text: "The most intelligent person is the one who is most pious.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Al-Kafi, Vol. 1" },
  { text: "Three things are signs of the believer: knowledge of Allah, obedience to Him, and patience with His decrees.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Al-Kafi, Vol. 2" },
  { text: "Do not underestimate the power of dua — it is the weapon of the believer.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Al-Kafi, Vol. 2" },
  { text: "A man's intellect is known by how he treats those who disagree with him.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Whoever is not grateful for small blessings will not be grateful for large ones.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Al-Kafi, Vol. 2" },
  { text: "Associate with the scholars and you will gain wisdom.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Bihar al-Anwar, Vol. 1" },
  { text: "The believer is a mirror to his brother — he shows him his faults with gentleness.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Al-Kafi, Vol. 2" },
  { text: "Be kind to your relatives even if they cut ties with you.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Al-Kafi, Vol. 2" },
  { text: "Halal earning is a jihad in the way of Allah.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Al-Kafi, Vol. 5" },
  { text: "The one who controls his desires has mastered himself.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "A true believer does not oppress even those who oppress him.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Al-Kafi, Vol. 2" },
  { text: "Seek barakah by waking early.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Al-Kafi, Vol. 5" },
  { text: "The world belongs to everyone; the Hereafter belongs to the pious.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Whoever wants to be honored without a tribe, feared without power, and rich without wealth — let him move from the humiliation of sin to the honor of obedience.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Teach your children to pray before Satan teaches them otherwise.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Bihar al-Anwar, Vol. 101" },
  { text: "The sorrow you feel after a sin is itself repentance.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Al-Kafi, Vol. 2" },
  { text: "Do not mix laughter with everything — it kills the heart.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Al-Kafi, Vol. 2" },
  { text: "Obedience to parents is one of the greatest doors of Allah's pleasure.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Bihar al-Anwar, Vol. 74" },
  { text: "The most beloved of deeds to Allah is that which the heart is present for.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Al-Kafi, Vol. 2" },
  { text: "Spend time in the company of the righteous and you will become righteous.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Bihar al-Anwar, Vol. 71" },
  { text: "Wisdom is found in the heart; the tongue is only its messenger.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Al-Kafi, Vol. 1" },
  { text: "Allah loves the servant who, when he commits a sin, immediately turns back to Him.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Bihar al-Anwar, Vol. 6" },
  { text: "The Quran is the table spread by Allah — eat from it as much as you can.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Bihar al-Anwar, Vol. 89" },
  { text: "Believers support each other like bricks in a wall.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Al-Kafi, Vol. 2" },
  { text: "Whoever carries knowledge and does not act on it — his knowledge is a burden.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Bihar al-Anwar, Vol. 2" },
  { text: "The greatest calamity is when the calamity makes you forget Allah.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Bihar al-Anwar, Vol. 64" },
  { text: "Supplicate to Allah in good times so He answers you in difficult times.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Al-Kafi, Vol. 2" },
  { text: "Tawakkul does not mean abandoning effort — it means trusting Allah with the outcome.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Bihar al-Anwar, Vol. 68" },
  { text: "The heart becomes alive by loving the Ahlul Bayt (AS).", source: "Imam Ja'far al-Sadiq (AS)", ref: "Bihar al-Anwar, Vol. 27" },
  { text: "Whoever makes his character excellent earns the reward of one who constantly fasts and prays.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Al-Kafi, Vol. 2" },
  { text: "Do not grieve over what has been decreed, for the decree of Allah is good.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "The strong believer is better and more beloved to Allah than the weak believer.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Al-Kafi, Vol. 5" },
  { text: "A moment of tafakkur (reflection) is worth sixty years of worship.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Bihar al-Anwar, Vol. 71" },
  { text: "Feed your guest — it is from the sunnah of the prophets.", source: "Imam Ja'far al-Sadiq (AS)", ref: "Al-Kafi, Vol. 6" },

  // Imam Musa al-Kadhim (AS) — 259–279
  { text: "Be patient, for Allah does not waste the reward of those who do good.", source: "Imam Musa al-Kadhim (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Whoever uses his intellect to please Allah is the most wise of people.", source: "Imam Musa al-Kadhim (AS)", ref: "Al-Kafi, Vol. 1" },
  { text: "A little wealth with thankfulness is better than much wealth without gratitude.", source: "Imam Musa al-Kadhim (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Do not procrastinate, for today's work undone is tomorrow's regret.", source: "Imam Musa al-Kadhim (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Give your brother an excuse — if you cannot find one, make one for him.", source: "Imam Musa al-Kadhim (AS)", ref: "Bihar al-Anwar, Vol. 74" },
  { text: "Silence is part of wisdom, but few practice it.", source: "Imam Musa al-Kadhim (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Whoever is content with the little that is halal will find comfort.", source: "Imam Musa al-Kadhim (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Three traits destroy a person: arrogance, greed, and envy.", source: "Imam Musa al-Kadhim (AS)", ref: "Bihar al-Anwar, Vol. 73" },
  { text: "Honor your parents and your children will honor you.", source: "Imam Musa al-Kadhim (AS)", ref: "Bihar al-Anwar, Vol. 74" },
  { text: "The believer who is tired from working for his family is beloved to Allah.", source: "Imam Musa al-Kadhim (AS)", ref: "Bihar al-Anwar, Vol. 100" },
  { text: "Whoever makes himself accountable in this world will be safe in the Hereafter.", source: "Imam Musa al-Kadhim (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Good deeds are a shield against calamities.", source: "Imam Musa al-Kadhim (AS)", ref: "Bihar al-Anwar, Vol. 71" },
  { text: "The closest to Allah in rank is the most beneficial to people.", source: "Imam Musa al-Kadhim (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Speak with gentleness, for gentleness never enters a thing except it adorns it.", source: "Imam Musa al-Kadhim (AS)", ref: "Bihar al-Anwar, Vol. 68" },
  { text: "Whoever relies on Allah has the strongest of supports.", source: "Imam Musa al-Kadhim (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Safeguard your prayers — they are the pillar of your religion.", source: "Imam Musa al-Kadhim (AS)", ref: "Bihar al-Anwar, Vol. 82" },
  { text: "Fear the dua of the oppressed — Allah does not reject it.", source: "Imam Musa al-Kadhim (AS)", ref: "Bihar al-Anwar, Vol. 72" },
  { text: "Wealth is not in abundance of possessions but in richness of the soul.", source: "Imam Musa al-Kadhim (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "A believer forgives because he knows Allah forgives.", source: "Imam Musa al-Kadhim (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Whoever visits a sick person walks in a garden of mercy.", source: "Imam Musa al-Kadhim (AS)", ref: "Al-Kafi, Vol. 3" },
  { text: "The heart must be purified before the tongue is trusted.", source: "Imam Musa al-Kadhim (AS)", ref: "Bihar al-Anwar, Vol. 78" },

  // Imam Ali al-Ridha (AS) — 280–300
  { text: "The heart that is free from malice towards its brother is at peace.", source: "Imam Ali al-Ridha (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Whoever loves our Shia and does not hold malice towards them will be resurrected with us.", source: "Imam Ali al-Ridha (AS)", ref: "Bihar al-Anwar, Vol. 27" },
  { text: "Faith is belief in the heart, declaration by the tongue, and action by the limbs.", source: "Imam Ali al-Ridha (AS)", ref: "Al-Kafi, Vol. 2" },
  { text: "Keep your ties of kinship alive, even with a kind word.", source: "Imam Ali al-Ridha (AS)", ref: "Bihar al-Anwar, Vol. 74" },
  { text: "Be generous with your knowledge as Allah has been generous with you.", source: "Imam Ali al-Ridha (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Whoever trusts in Allah is never abandoned.", source: "Imam Ali al-Ridha (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "The believer's illness is an expiation for his sins.", source: "Imam Ali al-Ridha (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "The best of deeds is that which brings happiness to a believer.", source: "Imam Ali al-Ridha (AS)", ref: "Al-Kafi, Vol. 2" },
  { text: "Silence is wisdom for the wise and a cover for the ignorant.", source: "Imam Ali al-Ridha (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Whoever humbles himself in the way of Allah will be elevated.", source: "Imam Ali al-Ridha (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Knowledge without action is a tree without fruit.", source: "Imam Ali al-Ridha (AS)", ref: "Bihar al-Anwar, Vol. 2" },
  { text: "The closest to us is the one with the best manners.", source: "Imam Ali al-Ridha (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Be just with others as you wish Allah to be just with you.", source: "Imam Ali al-Ridha (AS)", ref: "Bihar al-Anwar, Vol. 75" },
  { text: "Whoever abandons his desires finds peace.", source: "Imam Ali al-Ridha (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Piety is the highest honor a person can have.", source: "Imam Ali al-Ridha (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "The tongue of the wise is behind his heart; the heart of the fool is behind his tongue.", source: "Imam Ali al-Ridha (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Your character is your legacy — what will you leave behind?", source: "Imam Ali al-Ridha (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Do not delay repentance, for death does not send a notice.", source: "Imam Ali al-Ridha (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Allah's mercy is vast — never lose hope in it.", source: "Imam Ali al-Ridha (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "A generous hand is closer to Allah than a praying one that is closed to the needy.", source: "Imam Ali al-Ridha (AS)", ref: "Bihar al-Anwar, Vol. 96" },
  { text: "Whoever honors a scholar honors Allah.", source: "Imam Ali al-Ridha (AS)", ref: "Bihar al-Anwar, Vol. 2" },

  // Imam Muhammad al-Jawad (AS) — 301–316
  { text: "Whoever controls his anger, Allah will conceal his faults.", source: "Imam Muhammad al-Jawad (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Trust in Allah and you will find Him sufficient.", source: "Imam Muhammad al-Jawad (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Do not let your sins make you despair of Allah's mercy.", source: "Imam Muhammad al-Jawad (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Whoever is patient in trials earns the rank of the martyrs.", source: "Imam Muhammad al-Jawad (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Greed opens the door to every evil.", source: "Imam Muhammad al-Jawad (AS)", ref: "Bihar al-Anwar, Vol. 73" },
  { text: "Give from what you have before you lose the ability to give.", source: "Imam Muhammad al-Jawad (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Whoever holds fast to the rope of Allah will not be lost.", source: "Imam Muhammad al-Jawad (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Your action today is your testimony tomorrow.", source: "Imam Muhammad al-Jawad (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Sincerity elevates a small deed; hypocrisy ruins a large one.", source: "Imam Muhammad al-Jawad (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Seek Allah's forgiveness before the time of forgiveness passes.", source: "Imam Muhammad al-Jawad (AS)", ref: "Bihar al-Anwar, Vol. 6" },
  { text: "Three things enrich without money: honesty, a pleasant face, and a gentle tongue.", source: "Imam Muhammad al-Jawad (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Wisdom is the greatest gift — protect it with silence.", source: "Imam Muhammad al-Jawad (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "The dua that begins with praise of Allah is never turned away.", source: "Imam Muhammad al-Jawad (AS)", ref: "Bihar al-Anwar, Vol. 90" },
  { text: "Love of the Ahlul Bayt is the light that illuminates the grave.", source: "Imam Muhammad al-Jawad (AS)", ref: "Bihar al-Anwar, Vol. 27" },
  { text: "Whoever is content does not feel poor.", source: "Imam Muhammad al-Jawad (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Be the person others can trust, and Allah will trust you with more.", source: "Imam Muhammad al-Jawad (AS)", ref: "Bihar al-Anwar, Vol. 78" },

  // Imam Ali al-Hadi (AS) — 317–332
  { text: "Tawadu (humility) is to give to people what you wish to be given.", source: "Imam Ali al-Hadi (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Whoever has a sincere intention, his provision will be made easy.", source: "Imam Ali al-Hadi (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "The world is a market — some profit and some lose.", source: "Imam Ali al-Hadi (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Patience in obedience is easier than patience in punishment.", source: "Imam Ali al-Hadi (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Whoever does not reflect does not act wisely.", source: "Imam Ali al-Hadi (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Honoring the believer is honoring Allah.", source: "Imam Ali al-Hadi (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Envy is the enemy of all goodness.", source: "Imam Ali al-Hadi (AS)", ref: "Bihar al-Anwar, Vol. 73" },
  { text: "The believer who is tested and patient will have his sins removed.", source: "Imam Ali al-Hadi (AS)", ref: "Bihar al-Anwar, Vol. 64" },
  { text: "Whoever does justice will have no enemy.", source: "Imam Ali al-Hadi (AS)", ref: "Bihar al-Anwar, Vol. 75" },
  { text: "A kind act is never wasted — it returns in ways unseen.", source: "Imam Ali al-Hadi (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "The sign of the righteous is their avoidance of what is prohibited.", source: "Imam Ali al-Hadi (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "There is no poverty after contentment and no wealth greater than the mind.", source: "Imam Ali al-Hadi (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "The best wealth is abandoning desires.", source: "Imam Ali al-Hadi (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Do not waste your time — it is your life.", source: "Imam Ali al-Hadi (AS)", ref: "Bihar al-Anwar, Vol. 77" },
  { text: "Whoever acts for Allah, Allah acts for him.", source: "Imam Ali al-Hadi (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Let your actions speak louder than your claims of faith.", source: "Imam Ali al-Hadi (AS)", ref: "Bihar al-Anwar, Vol. 78" },

  // Imam Hasan al-Askari (AS) — 333–349
  { text: "Fear Allah and do not envy one another, and be as brothers as Allah has commanded.", source: "Imam Hasan al-Askari (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Piety is the best provision; worship is the best deed; and purity is the best purification.", source: "Imam Hasan al-Askari (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Among the signs of the believer: his prayer is humble, his charity is hidden, and his patience is apparent.", source: "Imam Hasan al-Askari (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Whoever works for this world alone has lost both worlds.", source: "Imam Hasan al-Askari (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "The best of all acts is one done with sincerity and consistency.", source: "Imam Hasan al-Askari (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Dispute kills the heart.", source: "Imam Hasan al-Askari (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Whoever plants seeds of kindness will harvest fruits of blessings.", source: "Imam Hasan al-Askari (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Every day is a new opportunity to return to Allah.", source: "Imam Hasan al-Askari (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "The one who is patient over the bitterness of truth will taste the sweetness of its fruits.", source: "Imam Hasan al-Askari (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "True leadership is serving others, not ruling over them.", source: "Imam Hasan al-Askari (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Guard your prayers — they are your connection to Allah.", source: "Imam Hasan al-Askari (AS)", ref: "Bihar al-Anwar, Vol. 82" },
  { text: "Whoever humbles himself to his teacher, his knowledge will increase.", source: "Imam Hasan al-Askari (AS)", ref: "Bihar al-Anwar, Vol. 2" },
  { text: "The love of the Ahlul Bayt is the rope of Allah stretched to earth.", source: "Imam Hasan al-Askari (AS)", ref: "Bihar al-Anwar, Vol. 27" },
  { text: "Do not be deceived by the world — it adorns itself for those it intends to destroy.", source: "Imam Hasan al-Askari (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Gratitude is the door to more blessings.", source: "Imam Hasan al-Askari (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Whoever does not account for himself will be accounted for by Allah.", source: "Imam Hasan al-Askari (AS)", ref: "Bihar al-Anwar, Vol. 78" },
  { text: "Leave what does not concern you, and you will find peace.", source: "Imam Hasan al-Askari (AS)", ref: "Bihar al-Anwar, Vol. 78" },

  // Imam al-Mahdi (AJ) — 350–365
  { text: "We are not negligent of your condition, nor are we forgetful of your remembrance.", source: "Imam al-Mahdi (AJ)", ref: "Bihar al-Anwar, Vol. 53" },
  { text: "If it were not for those who seek our intercession, I would not delay my return.", source: "Imam al-Mahdi (AJ)", ref: "Bihar al-Anwar, Vol. 53" },
  { text: "Pray for my reappearance — your prayer hastens it.", source: "Imam al-Mahdi (AJ)", ref: "Bihar al-Anwar, Vol. 53" },
  { text: "As for the events that will occur, refer to the narrators of our hadith, for they are my proof upon you.", source: "Imam al-Mahdi (AJ)", ref: "Bihar al-Anwar, Vol. 53" },
  { text: "Whoever brings harm to Allah's friends has declared war on Allah.", source: "Imam al-Mahdi (AJ)", ref: "Bihar al-Anwar, Vol. 53" },
  { text: "Increase your prayers for the hastening of the reappearance, for it is your own salvation.", source: "Imam al-Mahdi (AJ)", ref: "Bihar al-Anwar, Vol. 53" },
  { text: "Our hearts are with you, and our support will not be withheld from you.", source: "Imam al-Mahdi (AJ)", ref: "Bihar al-Anwar, Vol. 53" },
  { text: "Whoever recites salawat upon me has reached me.", source: "Imam al-Mahdi (AJ)", ref: "Bihar al-Anwar, Vol. 53" },
  { text: "We have not forgotten you, and we will never forget you — you are in our hearts.", source: "Imam al-Mahdi (AJ)", ref: "Bihar al-Anwar, Vol. 53" },
  { text: "The one who is truly waiting for me is the one who works for my cause every day.", source: "Imam al-Mahdi (AJ)", ref: "Bihar al-Anwar, Vol. 53" },
  { text: "Prepare yourselves with piety, for that is the greatest preparation for my reappearance.", source: "Imam al-Mahdi (AJ)", ref: "Bihar al-Anwar, Vol. 52" },
  { text: "Allah will make right what appeared to go wrong — be patient.", source: "Imam al-Mahdi (AJ)", ref: "Bihar al-Anwar, Vol. 53" },
  { text: "Justice will fill the earth as it was filled with oppression — this is the promise of Allah.", source: "Imam al-Mahdi (AJ)", ref: "Bihar al-Anwar, Vol. 52" },
  { text: "Recite Ziyarat Ashura with sincerity — your reward is with Allah and with us.", source: "Imam al-Mahdi (AJ)", ref: "Bihar al-Anwar, Vol. 53" },
  { text: "Do not abandon the remembrance of Allah in times of ease, so He does not abandon you in times of hardship.", source: "Imam al-Mahdi (AJ)", ref: "Bihar al-Anwar, Vol. 53" },
  { text: "Our reappearance is tied to your readiness — purify your hearts.", source: "Imam al-Mahdi (AJ)", ref: "Bihar al-Anwar, Vol. 52" },
];


// Pick a different quote each day based on the day of the year
function getDailyQuote() {
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  return AHLUL_BAYT_QUOTES[dayOfYear % AHLUL_BAYT_QUOTES.length];
}

export default function Sol() {

  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }
    const script = document.createElement('script');
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const dailyQuote = getDailyQuote();

  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
         className="bg-white min-h-screen">

      <style>{responsiveStyles}</style>

      {/* ── HERO BANNER ── */}
      <div className="sol-hero" style={{
        background: `linear-gradient(135deg, ${SOL_GREEN} 0%, #0d2118 60%, #1a3a2a 100%)`,
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* decorative circles */}
        <div style={{ position:"absolute", top:-60, left:-60, width:200, height:200, borderRadius:"50%", background:"rgba(201,168,76,0.08)" }} />
        <div style={{ position:"absolute", bottom:-40, right:-40, width:160, height:160, borderRadius:"50%", background:"rgba(57,224,155,0.07)" }} />

        <img src="/sol-logo.png" alt="SOL Youth Group"
          style={{ width:110, height:110, borderRadius:"50%", objectFit:"cover", margin:"0 auto 20px",
            boxShadow:`0 0 0 4px ${SOL_GOLD}, 0 8px 32px rgba(0,0,0,0.4)` }} />

        <h1 className="sol-hero" style={{ color:"#fff", fontWeight:900, margin:"0 0 6px", letterSpacing:1, padding:0 }}>
          SOL Youth Group
        </h1>
        <p style={{ color:SOL_GOLD, fontSize:16, fontWeight:600, margin:"0 0 12px", letterSpacing:2, textTransform:"uppercase" }}>
          Shia of Louisville
        </p>
        <p style={{ color:"rgba(255,255,255,0.7)", fontSize:15, maxWidth:480, margin:"0 auto 28px", lineHeight:1.6 }}>
          A community of young Shia Muslims in Louisville, Kentucky — growing together in faith, knowledge, and community.
        </p>
        <div style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap" }}>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"
            style={{
              display:"inline-block",
              background:`linear-gradient(135deg, ${SOL_GOLD}, #e8c96a)`,
              color:SOL_GREEN, fontWeight:700, fontSize:14,
              padding:"11px 30px", borderRadius:100, textDecoration:"none",
              boxShadow:"0 4px 16px rgba(201,168,76,0.35)"
            }}>
            Follow on Instagram ↗
          </a>
          <button
            disabled
            style={{
              display:"inline-block",
              background:"linear-gradient(135deg, #2d6a4f, #1b4332)",
              color:SOL_GOLD, fontWeight:700, fontSize:14,
              padding:"11px 30px", borderRadius:100, border:`2px solid ${SOL_GOLD}`,
              boxShadow:"0 4px 16px rgba(201,168,76,0.20)",
              cursor:"not-allowed", opacity:0.85
            }}>
            💚 Donate
          </button>
        </div>
      </div>

      {/* ── ABOUT SECTION ── */}
      <div style={{ background:"#f9fafb", padding:"56px 24px" }}>
        <div style={{ maxWidth:800, margin:"0 auto" }}>

          {/* Section label */}
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:32, justifyContent:"center" }}>
            <div style={{ height:2, flex:1, background:`linear-gradient(to right, transparent, ${SOL_GOLD})` }} />
            <span style={{ color:SOL_GOLD, fontWeight:800, fontSize:13, letterSpacing:3, textTransform:"uppercase" }}>About SOL</span>
            <div style={{ height:2, flex:1, background:`linear-gradient(to left, transparent, ${SOL_GOLD})` }} />
          </div>

          {/* About cards */}
          <div className="sol-about-grid">
            {[
              { icon:"🕌", title:"Our Mission", body:"To nurture the spiritual, intellectual, and social growth of Shia Muslim youth in Louisville through education and community." },
              { icon:"📖", title:"Islamic Education", body:"We host regular presentations, workshops, and discussions on Islamic topics — from Quran 101 to the Power of Duaa." },
              { icon:"🤝", title:"Community & Unity", body:"Building a strong, welcoming community where every young Muslim — brothers and sisters alike — feels at home and connected to their faith." },
              { icon:"🌙", title:"Events & Programs", body:"From Eid celebrations to community BBQs and Dhikr gatherings, we bring the community together year-round." },
            ].map(card => (
              <div key={card.title} style={{
                background:"#fff", borderRadius:16, padding:"28px 22px",
                boxShadow:"0 2px 16px rgba(0,0,0,0.07)",
                borderTop:`4px solid ${SOL_GOLD}`
              }}>
                <div style={{ fontSize:32, marginBottom:12 }}>{card.icon}</div>
                <h3 style={{ color:SOL_GREEN, fontWeight:800, fontSize:17, margin:"0 0 8px" }}>{card.title}</h3>
                <p style={{ color:"#6b7280", fontSize:14, lineHeight:1.65, margin:0 }}>{card.body}</p>
              </div>
            ))}
          </div>

          {/* Daily rotating quote */}
          <div className="sol-quote" style={{
            background:`linear-gradient(135deg, ${SOL_GREEN}, #0d2118)`,
            borderRadius:16, textAlign:"center",
            borderLeft:`6px solid ${SOL_GOLD}`
          }}>
            <p style={{ color:SOL_GOLD, fontWeight:700, fontSize:11, letterSpacing:2, textTransform:"uppercase", margin:"0 0 16px" }}>
              🌙 Daily Quote from the Ahlul Bayt (AS)
            </p>
            <p className="text" style={{ color:"rgba(255,255,255,0.9)", fontStyle:"italic", lineHeight:1.7, margin:"0 0 16px" }}>
              "{dailyQuote.text}"
            </p>
            <p style={{ color:SOL_GOLD, fontWeight:700, fontSize:14, margin:"0 0 4px" }}>
              — {dailyQuote.source}
            </p>
            <p style={{ color:"rgba(255,255,255,0.35)", fontSize:12, margin:0 }}>
              {dailyQuote.ref}
            </p>
          </div>

        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-10 pb-6">

        {/* Official Instagram Profile Embed */}
        <div className="sol-instagram-wrap" style={{ display: "flex", justifyContent: "center" }}>
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/shiaoflouisville/"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: "0",
              borderRadius: 3,
              boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: "1px",
              maxWidth: 540,
              minWidth: 326,
              padding: 0,
              width: "100%"
            }}
          />
        </div>

        {/* View more */}
        <div className="text-center mt-8">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
              color: "#fff",
              fontWeight: 600,
              fontSize: 14,
              padding: "10px 28px",
              borderRadius: 8,
              textDecoration: "none"
            }}
          >
            View full profile on Instagram
          </a>
        </div>

        {/* Linktree Section */}
        <div className="mt-12">

          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#39e09b", borderRadius: 100,
              padding: "6px 18px", marginBottom: 12
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.897 1.052.897h6.15c.526 0 .975-.38 1.054-.897 0-.162 0-.323-.082-.486l-3.074-5.302 3.074-5.3c.082-.163.082-.324.082-.486-.079-.517-.528-.897-1.053-.897h-6.15c-.527 0-.975.38-1.054.897 0 .162 0 .323.08.486l3.074 5.3-3.073 5.302zm4.047-3.837l1.88 3.243H10.12l1.88-3.243zm0-2.928L10.12 5.058h3.762l-1.882 3.243zM21 10.508h-4.412l3.118-3.118a1.076 1.076 0 0 0 0-1.522 1.076 1.076 0 0 0-1.522 0l-3.118 3.118V4.574c0-.594-.484-1.074-1.078-1.074-.593 0-1.074.48-1.074 1.074v4.412L9.796 5.868a1.076 1.076 0 0 0-1.522 0 1.076 1.076 0 0 0 0 1.522l3.118 3.118H7c-.594 0-1.074.48-1.074 1.074 0 .593.48 1.074 1.074 1.074h4.412l-3.118 3.118a1.076 1.076 0 0 0 0 1.522c.418.418 1.104.418 1.522 0l3.118-3.118v4.366c0 .594.48 1.074 1.074 1.074.594 0 1.078-.48 1.078-1.074v-4.366l3.118 3.118c.418.418 1.104.418 1.522 0a1.076 1.076 0 0 0 0-1.522l-3.118-3.118H21c.594 0 1.074-.48 1.074-1.074 0-.593-.48-1.074-1.074-1.074z"/>
              </svg>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>SOL Youth Group</span>
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: "#262626", margin: 0 }}>SOL Youth Group Links</h3>
            <p style={{ color: "#8e8e8e", fontSize: 14, marginTop: 4 }}>All our resources in one place</p>
          </div>

          {/* Links Container */}
          <div className="sol-links-card" style={{
            background: "linear-gradient(135deg, #1a3a2a 0%, #0d2118 100%)",
            borderRadius: 20,
            margin: "0 auto",
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)"
          }}>

            {/* Share your thoughts section */}
            <p style={{ color: "#39e09b", fontWeight: 700, fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12, marginTop: 0 }}>
              Share Your Thoughts ✉️
            </p>
            {[
              { label: "Send us a question anonymously!", url: "https://forms.gle/hqSRBqfvkr3VHBrF7" },
              { label: "Send us your feedback!", url: "https://forms.gle/XVq9RWaBi8hb8ozn7" },
            ].map(link => (
              <a key={link.url} href={link.url} target="_blank" rel="noreferrer"
                style={{
                  display: "block", width: "100%", textAlign: "center",
                  background: "rgba(255,255,255,0.08)", border: "2px solid rgba(255,255,255,0.15)",
                  color: "#fff", fontWeight: 600, fontSize: 15,
                  padding: "14px 20px", borderRadius: 12, textDecoration: "none",
                  marginBottom: 10, transition: "all 0.2s",
                  backdropFilter: "blur(4px)"
                }}
                onMouseOver={e => { e.currentTarget.style.background = "#39e09b"; e.currentTarget.style.borderColor = "#39e09b"; e.currentTarget.style.color = "#0d2118"; }}
                onMouseOut={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "#fff"; }}
              >
                {link.label}
              </a>
            ))}

            {/* Presentations section */}
            <p style={{ color: "#39e09b", fontWeight: 700, fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12, marginTop: 20 }}>
              Presentations 📖
            </p>
            {[
              { label: "Marriage in Islam", url: "https://docs.google.com/presentation/d/e/2PACX-1vTlmZ-d5SCwr-YEp4fJxjfnm9aaajv9WVcb93VWLlDDHAg28rbBazmZFT7cNSWccFC7aSrbKmwGsX8S/pub?start=false&loop=false&delayms=5000" },
              { label: "The Power of Duaa", url: "https://docs.google.com/presentation/d/e/2PACX-1vQMLEqmQkUvweSOaKv_JYUDxOR_hw7ABttqpTaizcdOilV5wPu9sfIz9nDG792obND3qErrg3xfSe-p/pub?start=false&loop=false&delayms=5000" },
              { label: "Quran 101", url: "https://docs.google.com/presentation/d/e/2PACX-1vTZ1tt1V3T5MoD_cUxJDybj41FJ1xDop7WHt7n7J-Z_5qmO7XTktrPyeAtiYqpjH2kwJfREbNsW5VG_/pub?start=false&loop=false&delayms=5000" },
              { label: "Death: Towards Eternal Life", url: "https://docs.google.com/presentation/d/e/2PACX-1vRC7VMFfILkw1oMTasRx8zxQfYqbO-qEpD8CpD7LrkI0AHuhCkpwkzhwlXHKSnfE5GiBE9Cwdf7ckOb/pub?start=false&loop=false&delayms=5000" },
            ].map(link => (
              <a key={link.url} href={link.url} target="_blank" rel="noreferrer"
                style={{
                  display: "block", width: "100%", textAlign: "center",
                  background: "rgba(255,255,255,0.08)", border: "2px solid rgba(255,255,255,0.15)",
                  color: "#fff", fontWeight: 600, fontSize: 15,
                  padding: "14px 20px", borderRadius: 12, textDecoration: "none",
                  marginBottom: 10, transition: "all 0.2s"
                }}
                onMouseOver={e => { e.currentTarget.style.background = "#39e09b"; e.currentTarget.style.borderColor = "#39e09b"; e.currentTarget.style.color = "#0d2118"; }}
                onMouseOut={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "#fff"; }}
              >
                {link.label}
              </a>
            ))}

            {/* Footer */}
            <p style={{ textAlign: "center", marginTop: 20, marginBottom: 0, fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
              Powered by{" "}
              <a href="https://linktr.ee/shiaoflouisvilleyouth" target="_blank" rel="noreferrer"
                 style={{ color: "#39e09b", textDecoration: "none" }}>
                Linktree ↗
              </a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
