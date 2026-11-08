// Gospel Books App - Core Logic & View Controller

// Fallback initial book data in case fetch is delayed
const DEFAULT_BOOKS = [
  {
    "id": "gbile-becoming-like-jesus",
    "title": "Becoming Like Jesus",
    "subtitle": "God's Key To Abundant Living",
    "author": "Gbile Akanni",
    "category": "Gospel / Discipleship",
    "cover": "becoming-like-jesus",
    "coverImage": "/covers/becoming-like-jesus.jpg",
    "coverColor": "from-purple-900 via-indigo-950 to-stone-900",
    "accentColor": "#8B5CF6",
    "hasFullContent": false,
    "buyLink": "https://peacehouse.org.ng/books",
    "publishedYear": 2012,
    "pages": 196,
    "rating": 4.9,
    "reviewsCount": 842,
    "badge": "GOSPEL",
    "isGospelShelf": true,
    "description": "A profound, heart-searching call to true Christian discipleship. Bro Gbile Akanni unveils God's eternal heartbeat: not merely for us to bear the Christian name, but to be thoroughly transformed into the express image and character of Jesus Christ.",
    "synopsis": "Becoming Like Jesus is a masterwork on biblical discipleship. Through careful exposition and piercing prophetic insight, the author addresses the superficiality of contemporary Christian living. He demonstrates that God's single, uncompromising purpose for every believer is Christlikeness—in motive, character, affection, and deeds.",
    "quotes": [
      "God is not looking for famous men; He is searching for men who bear the quiet, humble resemblance of His Son.",
      "The measure of your spiritual maturity is not what you do for God, but how much of Jesus is formed within you."
    ],
    "chapters": []
  },
  {
    "id": "gbile-costly-assumptions",
    "title": "Costly Assumption",
    "subtitle": "The Peril of Presumption",
    "author": "Gbile Akanni",
    "category": "Gospel / Christian Living",
    "cover": "costly-assumptions",
    "coverImage": "/covers/costly-assumptions.jpg",
    "coverColor": "from-amber-900 via-stone-900 to-black",
    "accentColor": "#FF6B35",
    "hasFullContent": false,
    "buyLink": "https://peacehouse.org.ng/books",
    "publishedYear": 2008,
    "pages": 144,
    "rating": 4.9,
    "reviewsCount": 670,
    "badge": "GOSPEL",
    "isGospelShelf": true,
    "description": "An urgent alarm to the modern church. Gbile Akanni examines the dangerous, unexamined assumptions that cause believers to stray from God's presence, relying on past encounters while their spiritual lamp has gone cold.",
    "synopsis": "Drawing timeless lessons from the tragic journey of Samson, the sons of Eli, and the parents of Jesus who assumed the Child was in their company when He was not, this book brings conviction to every sincere seeker of truth.",
    "quotes": [
      "To assume God is with you simply because you were once anointed is the fastest road to ruin.",
      "Never journey in spiritual assumption; ensure your fellowship with the Master is fresh today."
    ],
    "chapters": []
  },
  {
    "id": "gbile-dangers-of-self",
    "title": "The Price, Plight & Perils of the Anointed",
    "subtitle": "Crucifying Self for Divine Power",
    "author": "Gbile Akanni",
    "category": "Gospel / Spiritual Leadership",
    "cover": "perils-of-the-anointed",
    "coverImage": "/covers/perils-of-the-anointed.jpg",
    "coverColor": "from-stone-900 via-red-950 to-neutral-900",
    "accentColor": "#EF4444",
    "hasFullContent": false,
    "buyLink": "https://peacehouse.org.ng/books",
    "publishedYear": 2015,
    "pages": 178,
    "rating": 4.95,
    "reviewsCount": 920,
    "badge": "GOSPEL",
    "isGospelShelf": true,
    "description": "A surgical examination of humanity's most insidious spiritual perils and enemy: Self. Self-pity, self-glory, self-defense, and self-assertion exposed in the light of Christ's cross for every anointed servant.",
    "synopsis": "The greatest hindrance to the fullness of God's power in a believer's life is not external persecution or demonic resistance, but the uncrucified self. Bro Gbile takes the reader to the cross, showing the absolute necessity of dying to self so that the resurrection life of Christ can reign supreme.",
    "quotes": [
      "Until self is laid upon the altar of death, every spiritual gift you possess will eventually minister to your own vanity.",
      "The cross does not polish the flesh; it slays it."
    ],
    "chapters": []
  },
  {
    "id": "gbile-when-god-speaks",
    "title": "When God Speaks",
    "subtitle": "The Nature & Integrity of God's Word",
    "author": "Gbile Akanni",
    "category": "Gospel / Hearing God",
    "cover": "when-god-speaks",
    "coverImage": "/covers/when-god-speaks.jpg",
    "coverColor": "from-blue-950 via-indigo-950 to-stone-900",
    "accentColor": "#3B82F6",
    "hasFullContent": false,
    "buyLink": "https://peacehouse.org.ng/books",
    "publishedYear": 2010,
    "pages": 210,
    "rating": 4.88,
    "reviewsCount": 754,
    "badge": "GOSPEL",
    "isGospelShelf": true,
    "description": "Understanding how to recognize, discern, and reverently obey the voice of God amidst the confusing noise of our generation.",
    "synopsis": "God is still speaking today. However, many believers struggle to distinguish the voice of the Spirit from their own flesh, emotions, or enemy deception. This book offers practical, scripture-anchored discernment on cultivating a responsive, sensitive spiritual ear.",
    "quotes": [
      "A heart that does not intend to obey will find it exceedingly difficult to hear God clearly.",
      "God's voice is gentle, authoritative, and always consistent with His eternal written Word."
    ],
    "chapters": []
  },
  {
    "id": "gbile-timely-separation",
    "title": "Timely Warning",
    "subtitle": "Prophetic Urgency for the Last Days",
    "author": "Gbile Akanni",
    "category": "Gospel / Prophetic & Urgent",
    "cover": "timely-warning",
    "coverImage": "/covers/timely-warning.jpg",
    "coverColor": "from-sky-950 via-slate-900 to-neutral-900",
    "accentColor": "#FF6B35",
    "hasFullContent": false,
    "buyLink": "https://peacehouse.org.ng/books",
    "publishedYear": 2011,
    "pages": 160,
    "rating": 4.85,
    "reviewsCount": 540,
    "badge": "GOSPEL",
    "isGospelShelf": true,
    "description": "A piercing prophetic alarm calling this generation out of spiritual slumber and impending destruction before time runs out. Gbile Akanni urgently directs our eyes toward eternity and holy preparation.",
    "synopsis": "Drawing upon urgent biblical lessons from the days of Noah, Lot, and Christ's apocalyptic teachings, this book sounds a bugle call to awaken the church. Divine judgment is imminent, and only those rooted in Christ will withstand the coming shaking.",
    "quotes": [
      "Delay in answering God's warning voice is the greatest folly of the human heart.",
      "Eternity will prove that God never struck without first sending a faithful, timely warning."
    ],
    "chapters": []
  },
  {
    "id": "gbile-silent-labours",
    "title": "Silent Labours",
    "subtitle": "That Takes A Man From Nothingness To Greatness",
    "author": "Gbile Akanni",
    "category": "Gospel / Ministry & Service",
    "cover": "silent-labours",
    "coverImage": "/covers/silent-labours.jpg",
    "coverColor": "from-stone-900 via-amber-950 to-stone-950",
    "accentColor": "#FF6B35",
    "hasFullContent": false,
    "buyLink": "https://peacehouse.org.ng/books",
    "publishedYear": 2014,
    "pages": 152,
    "rating": 4.92,
    "reviewsCount": 612,
    "badge": "GOSPEL",
    "isGospelShelf": true,
    "description": "Honoring the unsung, unseen investments of prayer, intercession, and quiet faithfulness that bear eternal fruit before God's heavenly throne.",
    "synopsis": "In an era obsessed with stage lights, social media applause, and instant recognition, Silent Labours refocuses the believer's gaze onto the secret place of prayer and devotion. Heavenly rewards are reserved for those who labor faithfully when nobody is watching.",
    "quotes": [
      "What God celebrates in eternity is rarely what men applaud on earth.",
      "The depth of your secret altar determines the genuine weight of your public ministry."
    ],
    "chapters": []
  },
  {
    "id": "gbile-price-of-power",
    "title": "The Price of Spiritual Power",
    "subtitle": "The Pathway to Authentic Authority",
    "author": "Gbile Akanni",
    "category": "Gospel / Spiritual Authority",
    "cover": "price-of-spiritual-power",
    "coverImage": "/covers/price-of-spiritual-power.jpg",
    "coverColor": "from-indigo-950 via-purple-950 to-black",
    "accentColor": "#A855F7",
    "hasFullContent": false,
    "buyLink": "https://peacehouse.org.ng/books",
    "publishedYear": 2013,
    "pages": 184,
    "rating": 4.96,
    "reviewsCount": 890,
    "badge": "GOSPEL",
    "isGospelShelf": true,
    "description": "The biblical pathway to authentic spiritual power, moral authority, and an uncompromised life that commands respect in heavenly and demonic realms.",
    "synopsis": "Power with God cannot be inherited by human charisma or purchased with worldly currency. It is forged in the furnace of personal purity, brokenness, obedience, and prevailing prayer. A foundational treatise for every leader and believer longing for genuine revival.",
    "quotes": [
      "Spiritual power is not measured by the loudness of your shout, but by the stillness of your surrender.",
      "The vessel God uses mightily is first the vessel He breaks thoroughly."
    ],
    "chapters": []
  },
  {
    "id": "classic-practice-presence-of-god",
    "title": "The Practice of the Presence of God",
    "author": "Brother Lawrence",
    "category": "Spiritual Devotion / Classic",
    "cover": "practice-presence-of-god",
    "coverImage": "/covers/practice-presence-of-god.jpg",
    "coverColor": "from-amber-900 via-yellow-950 to-stone-900",
    "accentColor": "#10B981",
    "hasFullContent": true,
    "publishedYear": 1692,
    "pages": 128,
    "rating": 4.93,
    "reviewsCount": 1420,
    "badge": "FULL READER",
    "isGospelShelf": false,
    "description": "Timeless conversations and letters revealing the tranquil secret of living in continual, loving communion with God in every mundane task of daily life.",
    "synopsis": "Brother Lawrence, a 17th-century humble monastery cook in Paris, discovered that cooking meals and washing dishes could be as sacred as kneeling at prayer when performed with undivided love for God.",
    "quotes": [
      "We ought not to be weary of doing little things for the love of God, who regards not the greatness of the work, but the love with which it is performed.",
      "The time of business does not with me differ from the time of prayer; and in the noise and clatter of my kitchen, I possess God in as great tranquility as if I were upon my knees at the blessed sacrament."
    ],
    "chapters": [
      {
        "id": "ch1",
        "title": "Chapter 1: The Great Secret of Spiritual Peace",
        "content": "Brother Lawrence was born Nicholas Herman in Lorraine. In his youth, as a footman and soldier, he was converted by the sight of a leafless tree in winter, which gave him a high view of the providence and power of God. Entering the Carmelite monastery in Paris as a lay brother, he was assigned to the monastery kitchen.\n\nHe stated that the foundation of the spiritual life was a high esteem and love for God through faith. When this was once well grounded, all other things became easy. We ought to give ourselves up to God in all things, both temporal and spiritual, seeking our satisfaction only in the fulfilling of His will.\n\nHe remarked that in the beginning of the spiritual life, we ought to be faithful in doing our duty and denying ourselves; but after a little while, love makes all duties delightful. The time of business does not differ with me from the time of prayer; and in the noise and clatter of my kitchen, while several persons are at the same time calling for different things, I possess God in as great tranquility as if I were upon my knees at the blessed sacrament."
      },
      {
        "id": "ch2",
        "title": "Chapter 2: The Business of Prayer Everywhere",
        "content": "Brother Lawrence said that he had always been governed by love, without selfish views; and that having resolved to make the love of God the end of all his actions, he had found reasons to be well satisfied with his method.\n\nHe was pleased when he could take up a straw from the ground for the love of God, seeking Him alone, and nothing else, not even His gifts. We ought to act with God in the greatest simplicity, speaking to Him frankly and plainly, and imploring His assistance in our affairs just as they happen.\n\nGod never failed to grant it, as he had often experienced. He said our sanctification did not depend upon changing our works, but upon doing that for God's sake which we commonly do for ourselves. It was a great delusion to think that the time of prayer ought to be differenced from other times; we are as strictly obliged to adhere to God by action in the time of action, as by prayer in its season."
      },
      {
        "id": "ch3",
        "title": "Chapter 3: Walking in Simple Trust and Repentance",
        "content": "He was very sensible of his faults, but not discouraged by them; he confessed them to God, but did not plead against Him to excuse them. When he had so done, he peaceably resumed his usual practice of love and adoration.\n\nHe said that useful thoughts would withdraw our minds if we were not vigilant; but as soon as we noticed our wandering, we should quietly return to the presence of God without agitation or self-condemnation.\n\nTrust in God honors Him. When we throw all our cares upon Him, He takes care of everything. God asks only for a willing heart, a humble spirit, and a sincere desire to please Him above all earthly ambitions."
      },
      {
        "id": "ch4",
        "title": "Chapter 4: In All Things to Please God Alone",
        "content": "He said that the most excellent method he had found of going to God was that of doing our common business without any view of pleasing men, and purely for the love of God.\n\nIt was not necessary to have great things to do. I turn my little omelet in the frying pan for the love of God; and when that is done, if I have nothing else to do, I prostrate myself upon the ground, and adore my God, who gave me the grace to do it, after which I arise more contented than a king.\n\nWhen we have no other design but to love Him, and to seek Him alone, all difficulties vanish, and we find continuous peace in the midst of daily toil."
      },
      {
        "id": "ch5",
        "title": "Chapter 5: Letters of Spiritual Counsel",
        "content": "You need not cry very loud; He is nearer to us than we are aware of. It is not necessary for being with God to be always at church; we may make an oratory of our heart wherein to retire from time to time, to converse with Him in meekness, humility, and love.\n\nLet us begin to be in earnest. The hours slip by so fast; let us not waste the precious moments given us to love our Creator. Let us live and die with Him.\n\nMay the grace of our Lord Jesus Christ continually support you, that you may walk with Him in uninterrupted communion, finding your joy only in His presence."
      }
    ]
  },
  {
    "id": "classic-pilgrims-progress",
    "title": "The Pilgrim's Progress",
    "author": "John Bunyan",
    "category": "Christian Allegory / Classic",
    "cover": "pilgrims-progress",
    "coverImage": "/covers/pilgrims-progress.jpg",
    "coverColor": "from-sky-900 via-indigo-950 to-slate-900",
    "accentColor": "#3B82F6",
    "hasFullContent": true,
    "publishedYear": 1678,
    "pages": 324,
    "rating": 4.97,
    "reviewsCount": 2350,
    "badge": "FULL READER",
    "isGospelShelf": false,
    "description": "The most widely read Christian allegory of all time. Follow Christian's epic journey from the City of Destruction through the Slough of Despond and Vanity Fair to the Celestial City.",
    "synopsis": "Written from Bunyan's Bedford jail cell, this monumental masterpiece depicts the soul's pilgrimage from conviction of sin to eternal glory. Packed with vivid spiritual battles, faithful friendships, and sovereign grace.",
    "quotes": [
      "This hill, though high, I covet to ascend; the difficulty will not me offend, for I perceive the way to life lies here.",
      "He that is down needs fear no fall, he that is low no pride; he that is humble ever shall have God to be his guide."
    ],
    "chapters": [
      {
        "id": "ch1",
        "title": "Chapter 1: The City of Destruction and Evangelist",
        "content": "As I walked through the wilderness of this world, I lighted on a certain place where was a den, and I laid me down in that place to sleep: and as I slept, I dreamed a dream. I dreamed, and behold, I saw a man clothed with rags, standing in a certain place, with his face from his own house, a book in his hand, and a great burden upon his back.\n\nI looked, and saw him open the book and read therein; and as he read, he wept, and trembled; and not being able longer to contain, he brake out with a lamentable cry, saying, 'What shall I do to be saved?'\n\nNow, as he was walking in the fields, weeping and crying out, behold, a man named Evangelist came to him, and asked, 'Wherefore dost thou cry?' He answered, 'Sir, I perceive by the book in my hand that I am condemned to die, and after that to come to judgment; and I am not willing to do the first, nor able to do the second.' Then said Evangelist, pointing with his finger over a very wide field, 'Do you see yonder Wicket-gate? Go up directly thereto: so shalt thou see what thou must do.'"
      },
      {
        "id": "ch2",
        "title": "Chapter 2: The Slough of Despond and the Wicket Gate",
        "content": "Now, as Christian and his companion Pliable journeyed across the plain, they drew near to a very miry slough that was in the midst of the plain; and they, being heedless, did both fall suddenly into the bog. The name of the slough was Despond.\n\nHere, therefore, they wallowed for a time, being grievously bedaubed with dirt; and Christian, because of the burden that was upon his back, began to sink in the mire. At this Pliable began to be offended, and angrily said, 'Is this the happiness you have told me of all this while? If we have such ill speed at our first setting out, what may we look for between this and our journey's end?' And with that, he gave a desperate struggle or two, and got out of the mire on that side of the slough which was next to his own house: so away he went, and Christian saw him no more.\n\nWherefore Christian was left to tumble in the Slough of Despond alone; but still he endeavored to struggle to that side of the slough that was still further from his own house, and next to the Wicket-gate; the which he did, but could not get out, because of the burden that was upon his back: but I beheld in my dream, that a man came to him, whose name was Help, and asked him, 'What doest thou here?' Then Christian said, 'Sir, I was bid go this way by a man called Evangelist, who directed me also to yonder gate.' Then Help gave him his hand, and drew him out, and set him upon sound ground, and bid him go on his way."
      },
      {
        "id": "ch3",
        "title": "Chapter 3: The Cross, the Tomb, and the Burden",
        "content": "Now I saw in my dream, that the highway up which Christian was to go, was fenced on either side with a wall, and that wall was called Salvation. Up this way, therefore, did burdened Christian run, but not without great difficulty, because of the load on his back.\n\nHe ran thus till he came at a place somewhat ascending, and upon that place stood a Cross, and a little below, in the bottom, a Sepulcher. So I saw in my dream, that just as Christian came up with the Cross, his burden loosed from off his shoulders, and fell from off his back, and began to tumble, and so continued to do, till it came to the mouth of the Sepulcher, where it fell in, and I saw it no more!\n\nThen was Christian glad and lightsome, and said with a merry heart, 'He hath given me rest by His sorrow, and life by His death.' Then he stood still awhile to look and wonder; for it was very surprising to him, that the sight of the Cross should thus ease him of his burden. He looked therefore, and looked again, even till the springs that were in his head sent the waters down his cheeks.\n\nNow, as he stood looking and weeping, behold three Shining Ones came to him and saluted him with 'Peace be to thee.' So the first said to him, 'Thy sins be forgiven thee'; the second stripped him of his rags, and clothed him with change of raiment; the third also set a mark on his forehead, and gave him a roll with a seal upon it, which he bid him look on as he ran, and that he should give it in at the Celestial Gate."
      },
      {
        "id": "ch4",
        "title": "Chapter 4: The Hill Difficulty and the Palace Beautiful",
        "content": "I beheld, then, that they went on till they came to the foot of the Hill Difficulty; at the bottom of which was a spring. There were also in the same place two other ways besides that which came straight from the Gate; one turned to the left hand, and the other to the right, at the bottom of the hill; but the narrow way lay right up the hill, and the name of the going up the side of the hill is called Difficulty.\n\nChristian now went to the spring, and drank thereof to refresh himself, and then began to go up the hill, saying: 'This hill, though high, I covet to ascend; the difficulty will not me offend; for I perceive the way to life lies here: come, pluck up, heart, let's neither faint nor fear!'\n\nAt the top of the hill stood a stately palace, the name of which was Beautiful, built by the Lord of the hill for the relief and security of pilgrims. There he was welcomed by Discretion, Prudence, Piety, and Charity, who refreshed his weary soul and showed him the wonders of the kingdom, arming him from head to foot with armor of proof to shield him in the battles ahead."
      },
      {
        "id": "ch5",
        "title": "Chapter 5: The Celestial City and the Golden Gates",
        "content": "Now, while they were drawing towards the gate, behold a company of the heavenly host came out to meet them: to whom it was said by the other two Shining Ones, 'These are the men that have loved our Lord when they were in the world, and that have left all for His holy name; and He hath sent us to fetch them, and we have brought them thus far on their desired journey, that they may go in and look their Redeemer in the face with joy.'\n\nThere came out also to meet them several of the King's trumpeters, clothed in white and shining raiment, who, with melodious noises and loud, made even the heavens to echo with their sound. These trumpeters saluted Christian and his fellow with ten thousand welcomes from the world; and this they did with shouting, and sound of trumpet.\n\nNow, just as the gates were opened to let in the men, I looked in after them, and behold, the city shone like the sun; the streets also were paved with gold, and in them walked many men, with crowns on their heads, palms in their hands, and golden harps to sing praises withal. And after that they shut up the gates; which, when I had seen, I wished myself among them."
      }
    ]
  },
  {
    "id": "classic-humility",
    "title": "Humility: The Beauty of Holiness",
    "author": "Andrew Murray",
    "category": "Spiritual Growth / Classic",
    "cover": "humility",
    "coverImage": "/covers/humility.jpg",
    "coverColor": "from-stone-900 via-amber-950 to-black",
    "accentColor": "#D97706",
    "hasFullContent": true,
    "publishedYear": 1895,
    "pages": 112,
    "rating": 4.94,
    "reviewsCount": 1120,
    "badge": "FULL READER",
    "isGospelShelf": false,
    "description": "A heart-piercing study proving that humility is not just a virtue among others, but the root of all true graces, the distinguishing mark of Jesus, and the only atmosphere in which God dwells.",
    "synopsis": "Andrew Murray shows that pride is the root of every sin and ruin. Humility is the simple acknowledgment of the creature's true place before the Creator—an utter dependence that opens heaven's storehouses.",
    "quotes": [
      "Humility is nothing else than the total loss of self in the sight of God.",
      "The humble person does not seek praise, for he knows that all he is belongs to God."
    ],
    "chapters": [
      {
        "id": "ch1",
        "title": "Chapter 1: Humility — The Glory of the Creature",
        "content": "When God created the universe, it was with the one objective of making the creature partaker of His perfection and blessedness, and so showing forth in it the glory of His love, wisdom, and power. God wished to communicate Himself to and in the creature.\n\nAnd to this end the creature had to be endowed with the capacity of receiving Him. The chief virtue of a creature is to be empty of self, so that God may be all in all. Humility is simply the sense of entire dependence upon God, which comes from the knowledge that God is everything, and that all we have and are is received from Him.\n\nPride, or the loss of this humility, is the cause of every sin and misfortune. When the angels fell, it was because they began to look upon themselves with complacency, wishing to be independent of God. Humility is not a grace among other graces; it is the root of the whole, because it alone takes the right attitude before God and allows Him as God to do all."
      },
      {
        "id": "ch2",
        "title": "Chapter 2: Humility in the Life and Example of Jesus",
        "content": "'Take My yoke upon you, and learn of Me; for I am meek and lowly in heart: and ye shall find rest unto your souls.' In Jesus we see humility personified.\n\nHe said repeatedly: 'The Son can do nothing of Himself; but what He seeth the Father do: for what things soever He doeth, these also doeth the Son likewise.' 'My doctrine is not Mine, but His that sent Me.' 'I seek not Mine own will, but the will of the Father which hath sent Me.'\n\nHis whole life was one of continuous, unbroken yieldedness to the Father. He did not seek His own honor, nor His own will, but the honor and will of the One who sent Him. If Christ was humble, how much more must the disciple who bears His name walk in lowliness of heart!"
      },
      {
        "id": "ch3",
        "title": "Chapter 3: Humility in the Teaching of Christ",
        "content": "We have only to open the Gospels to see how our Lord insisted on humility as the essential mark of kingdom citizenship. 'Blessed are the poor in spirit: for theirs is the kingdom of heaven.' 'Whosoever therefore shall humble himself as this little child, the same is greatest in the kingdom of heaven.'\n\nWhen the disciples disputed who among them should be the greatest, Jesus took a towel and a basin of water and washed their feet. 'If I then, your Lord and Master, have washed your feet; ye also ought to wash one another's feet.'\n\nTrue spiritual greatness is never measured by authority over others, but by willingness to serve the humblest saint in self-forgetful love."
      },
      {
        "id": "ch4",
        "title": "Chapter 4: Humility and Daily Holiness",
        "content": "Humility is the only soil in which the graces of the Spirit can flourish. The lack of humility is the sufficient explanation of every defect and failure in Christian living.\n\nHumility is tested not in our religious exercises before God, but in our daily intercourse with our fellow men. The humble man feels no jealousy when others are preferred before him; he bears misunderstandings and reproaches without retaliating.\n\nHe has learned the holy secret: to count himself as nothing, that Christ may be everything."
      },
      {
        "id": "ch5",
        "title": "Chapter 5: Humility and Death to Self",
        "content": "Humility is the path to death, because in death it gives the highest, the ultimate proof of its reality. Humility is the blossom of which death to self is the perfect fruit.\n\nJesus humbled Himself, and became obedient unto death, even the death of the cross. Wherefore God also hath highly exalted Him. We can only enter into the power of Christ's resurrection when we enter into the fellowship of His death.\n\nDie to your reputation, die to your rights, die to your ambition. In that blessed death of self, the peace of God which passes all understanding takes eternal possession of the soul."
      }
    ]
  },
  {
    "id": "classic-normal-christian-life",
    "title": "The Normal Christian Life",
    "author": "Watchman Nee",
    "category": "Christian Doctrine / Victory",
    "cover": "normal-christian-life",
    "coverImage": "/covers/normal-christian-life.jpg",
    "coverColor": "from-sky-800 via-blue-900 to-stone-900",
    "accentColor": "#0284C7",
    "hasFullContent": true,
    "publishedYear": 1957,
    "pages": 240,
    "rating": 4.95,
    "reviewsCount": 1890,
    "badge": "FULL READER",
    "isGospelShelf": false,
    "description": "An exposition of Romans 5-8 opening the glorious revelation of our union with Christ in His death, burial, and resurrection life.",
    "synopsis": "Watchman Nee illuminates how believers are delivered from the power of sin not by trying harder, but by reckoning themselves dead unto sin and alive unto God through Jesus Christ.",
    "quotes": [
      "Our old history ends with the cross; our new history begins with the resurrection.",
      "God does not ask us to overcome our weakness; He asks us to abide in His strength."
    ],
    "chapters": [
      {
        "id": "ch1",
        "title": "Chapter 1: The Blood of Christ and the Cross",
        "content": "What is the normal Christian life? We do well at the outset to face this question. The objective of these studies is to show that it is something very different from the life of the average Christian.\n\nIndeed, when we contemplate the life of the normal Christian as revealed in the Word of God, we find that it is nothing less than the life of Christ Himself reproduced in human beings through the Holy Spirit.\n\nThe Blood of Christ deals with what we have done, whereas the Cross of Christ deals with what we are. The Blood clears away our sins and secures forgiveness before the righteousness of God; while the Cross strikes at the root of our sinful nature—our old man—and delivers us from the power of sin."
      },
      {
        "id": "ch2",
        "title": "Chapter 2: The Path of Progress: Knowing the Crucified Self",
        "content": "Romans 6:6 declares: 'Knowing this, that our old man is crucified with Him, that the body of sin might be destroyed, that henceforth we should not serve sin.'\n\nNotice the tense: 'is crucified.' It is an accomplished fact of divine history. When Jesus Christ died upon the cross, God included us in Him. We were not merely spectators; in the divine reckoning, we were there upon that cross in Christ.\n\nYou cannot crucify yourself. If a man attempts suicide, he may use a sword, poison, or fire, but he cannot crucify himself; someone else must drive the nails. God has already done it. Our starting point in spiritual victory is not trying to die, but knowing that in Christ we have already died."
      },
      {
        "id": "ch3",
        "title": "Chapter 3: The Path of Progress: Reckoning Ourselves Dead",
        "content": "'Likewise reckon ye also yourselves to be dead indeed unto sin, but alive unto God through Jesus Christ our Lord' (Romans 6:11).\n\nTo reckon does not mean to pretend or imagine. In accounting, reckoning is entering into the ledger what has actually transpired in the bank. When God says you died with Christ, faith says: 'Lord, I believe Your Word. I reckon myself dead unto sin.'\n\nWhen temptation knocks, do not argue with the flesh or struggle in your own strength. Stand upon God's ledger: 'In Christ, I am dead to this impulse. My life is now hidden with Christ in God.'"
      },
      {
        "id": "ch4",
        "title": "Chapter 4: The Path of Progress: Presenting Unto God",
        "content": "'Neither yield ye your members as instruments of unrighteousness unto sin: but yield yourselves unto God, as those that are alive from the dead' (Romans 6:13).\n\nConsecration is not offering our natural strength or carnal talents to God; it is presenting ourselves unto God as those who are alive from the dead. Only resurrection life is acceptable on God's altar.\n\nWhen we lay our hands, eyes, mind, and affections at the feet of the Lord Jesus, He takes full possession. The Holy Spirit becomes the divine administrator of our daily walk."
      },
      {
        "id": "ch5",
        "title": "Chapter 5: Walking According to the Spirit",
        "content": "'For the law of the Spirit of life in Christ Jesus hath made me free from the law of sin and death' (Romans 8:2).\n\nThe law of sin and death works continuously like gravity, dragging the natural man downward. But the law of the Spirit of life is like the law of aerodynamics, lifting the believer above the pull of earth.\n\nWe do not conquer sin by our own willpower; we overcome by yielding to the living Christ within. Not I, but Christ liveth in me. That is the simplicity and glory of the normal Christian life."
      }
    ]
  }
];

class GospelBooksApp {
  constructor() {
    this.books = DEFAULT_BOOKS;
    this.currentTab = 'home';
    this.activeBook = null;
    this.readingBook = null;
    this.currentChapterIndex = 0;
    this.readingProgress = 0;
    this.selectedTag = 'All';
    this.searchQuery = '';
    this.viewportMode = 'mobile'; // 'mobile' (390px) or 'expanded'

    // Persistent state in localStorage
    this.favorites = this.loadJSON('gospel_favorites', ['gbile-becoming-like-jesus', 'classic-practice-presence-of-god']);
    this.progressData = this.loadJSON('gospel_progress', {
      'classic-practice-presence-of-god': { percent: 45, chapter: 0, lastRead: '2 hours ago' },
      'classic-humility': { percent: 20, chapter: 0, lastRead: 'Yesterday' }
    });
    this.bookmarks = this.loadJSON('gospel_bookmarks', [
      {
        bookId: 'classic-practice-presence-of-god',
        bookTitle: 'The Practice of the Presence of God',
        chapterIndex: 0,
        chapterTitle: 'Chapter 1: The Great Secret of Spiritual Peace',
        timestamp: 'Recent'
      }
    ]);
    this.settings = this.loadJSON('gospel_settings', {
      theme: 'theme-paper',
      fontSize: 16,
      fontFamily: 'serif', // 'serif' | 'sans'
      onboardingDone: false,
      streakDays: 5,
      minutesRead: 142
    });

    // Audio narration state
    this.speechSynth = window.speechSynthesis || null;
    this.speechUtterance = null;
    this.isAudioPlaying = false;
    this.audioParagraphIndex = 0;
    this.audioSpeed = 1.0;

    this.init();
  }

  async init() {
    // Attempt to load external books.json if available
    try {
      let res = await fetch('data/books.json');
      if (!res.ok) res = await fetch('/data/books.json');
      if (res.ok) {
        const data = await res.json();
        if (data.books && data.books.length) {
          this.books = data.books;
        }
      }
    } catch (e) {
      console.log('Using built-in books dataset');
    }

    this.bindEvents();
    this.updateClock();
    setInterval(() => this.updateClock(), 30000);

    // Check Onboarding
    if (!this.settings.onboardingDone) {
      this.showOnboarding(true);
    }

    this.render();
  }

  getCoverUrl(book) {
    if (!book || !book.coverImage) return '';
    return book.coverImage.startsWith('/') ? book.coverImage.slice(1) : book.coverImage;
  }

  loadJSON(key, fallback) {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  saveJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  }

  updateClock() {
    const clockEl = document.getElementById('currentTimeLabel');
    if (clockEl) {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      clockEl.textContent = `${hours}:${minutes}`;
    }
  }

  getDynamicGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  }

  showToast(message, icon = '✨') {
    const toast = document.getElementById('toast');
    const toastIcon = document.getElementById('toastIcon');
    const toastMessage = document.getElementById('toastMessage');
    if (!toast) return;

    toastIcon.textContent = icon;
    toastMessage.textContent = message;

    toast.classList.remove('opacity-0', '-translate-y-12');
    toast.classList.add('opacity-100', 'translate-y-0');

    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.classList.remove('opacity-100', 'translate-y-0');
      toast.classList.add('opacity-0', '-translate-y-12');
    }, 2500);
  }

  toggleFavorite(bookId) {
    if (this.favorites.includes(bookId)) {
      this.favorites = this.favorites.filter(id => id !== bookId);
      this.showToast('Removed from saved books', '🔖');
    } else {
      this.favorites.push(bookId);
      this.showToast('Added to your library', '❤️');
    }
    this.saveJSON('gospel_favorites', this.favorites);
    this.render();
  }

  bindEvents() {
    // Bottom Nav clicks
    document.querySelectorAll('.nav-tab').forEach(tabBtn => {
      tabBtn.addEventListener('click', (e) => {
        const tab = tabBtn.getAttribute('data-tab');
        this.switchTab(tab);
      });
    });

    // Viewport Toggle Button (390px mobile vs expanded)
    const toggleViewportBtn = document.getElementById('toggleViewportBtn');
    if (toggleViewportBtn) {
      toggleViewportBtn.addEventListener('click', () => {
        const frame = document.getElementById('deviceFrame');
        const modeLabel = document.getElementById('viewportModeLabel');
        if (this.viewportMode === 'mobile') {
          this.viewportMode = 'expanded';
          frame.classList.remove('device-mobile-frame');
          frame.classList.add('device-expanded-frame');
          modeLabel.textContent = 'Full Screen View';
        } else {
          this.viewportMode = 'mobile';
          frame.classList.remove('device-expanded-frame');
          frame.classList.add('device-mobile-frame');
          modeLabel.textContent = '390px Mobile Frame';
        }
      });
    }

    // Onboarding close button
    const closeOnboardingBtn = document.getElementById('closeOnboardingBtn');
    if (closeOnboardingBtn) {
      closeOnboardingBtn.addEventListener('click', () => {
        this.showOnboarding(false);
        this.settings.onboardingDone = true;
        this.saveJSON('gospel_settings', this.settings);
        this.showToast('Welcome to Gospel Books App!', '📖');
      });
    }

    // Audio bar controls
    const togglePlayAudioBtn = document.getElementById('togglePlayAudioBtn');
    if (togglePlayAudioBtn) {
      togglePlayAudioBtn.addEventListener('click', () => this.toggleAudioNarration());
    }

    const closeAudioBtn = document.getElementById('closeAudioBtn');
    if (closeAudioBtn) {
      closeAudioBtn.addEventListener('click', () => this.stopAudioNarration());
    }

    const audioSpeedBtn = document.getElementById('audioSpeedBtn');
    if (audioSpeedBtn) {
      audioSpeedBtn.addEventListener('click', () => {
        const speeds = [0.85, 1.0, 1.25, 1.5];
        const curIdx = speeds.indexOf(this.audioSpeed);
        this.audioSpeed = speeds[(curIdx + 1) % speeds.length];
        audioSpeedBtn.textContent = `${this.audioSpeed}x`;
        this.showToast(`Reading speed: ${this.audioSpeed}x`, '⚡');
        if (this.speechUtterance && this.isAudioPlaying) {
          if (this.speechSynth) this.speechSynth.cancel();
          const chapters = this.readingBook ? this.readingBook.chapters || [] : [];
          const currentChapter = chapters[this.currentChapterIndex];
          if (currentChapter) {
            const paragraphs = currentChapter.content.split('\n\n').filter(p => p.trim().length > 0);
            this.speakParagraph(paragraphs, this.audioParagraphIndex);
          }
        }
      });
    }
  }

  showOnboarding(show) {
    const modal = document.getElementById('onboardingModal');
    if (modal) {
      if (show) modal.classList.remove('hidden');
      else modal.classList.add('hidden');
    }
  }

  switchTab(tabName) {
    this.currentTab = tabName;
    this.activeBook = null;
    this.readingBook = null;

    // Update bottom nav active indicator
    document.querySelectorAll('.nav-tab').forEach(btn => {
      if (btn.getAttribute('data-tab') === tabName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Make sure bottom nav is visible
    const nav = document.getElementById('bottomNav');
    if (nav) nav.classList.remove('translate-y-24');

    this.render();

    // Scroll to top of appContent
    const appContent = document.getElementById('appContent');
    if (appContent) appContent.scrollTop = 0;
  }

  openBookDetail(bookId) {
    const book = this.books.find(b => b.id === bookId);
    if (!book) return;
    this.activeBook = book;
    this.readingBook = null;
    this.render();

    const appContent = document.getElementById('appContent');
    if (appContent) appContent.scrollTop = 0;
  }

  openReader(bookId, chapterIdx = null) {
    const book = this.books.find(b => b.id === bookId);
    if (!book) return;

    if (!book.hasFullContent) {
      this.openBookDetail(bookId);
      return;
    }

    this.readingBook = book;
    this.activeBook = null;

    if (chapterIdx !== null && chapterIdx !== undefined) {
      this.currentChapterIndex = chapterIdx;
    } else {
      const saved = this.progressData[bookId];
      this.currentChapterIndex = (saved && saved.chapter !== undefined) ? saved.chapter : 0;
    }

    // Hide bottom nav while reading for Apple Books distraction-free vibe
    const nav = document.getElementById('bottomNav');
    if (nav) nav.classList.add('translate-y-24');

    const appContent = document.getElementById('appContent');
    if (appContent) {
      appContent.classList.remove('pb-20');
      appContent.scrollTop = 0;
    }

    this.render();
  }

  closeReader() {
    this.stopAudioNarration();
    const nav = document.getElementById('bottomNav');
    if (nav) nav.classList.remove('translate-y-24');

    const appContent = document.getElementById('appContent');
    if (appContent) {
      appContent.classList.add('pb-20');
    }

    const prevBookId = this.readingBook ? this.readingBook.id : null;
    this.readingBook = null;

    if (prevBookId) {
      this.openBookDetail(prevBookId);
    } else {
      this.switchTab('home');
    }
  }

  render() {
    const container = document.getElementById('viewContainer');
    if (!container) return;

    // View routing:
    if (this.readingBook) {
      container.innerHTML = this.renderReaderView();
      this.attachReaderEvents();
      return;
    }

    if (this.activeBook) {
      container.innerHTML = this.renderBookDetailView();
      this.attachDetailEvents();
      return;
    }

    switch (this.currentTab) {
      case 'home':
        container.innerHTML = this.renderHomeView();
        this.attachHomeEvents();
        break;
      case 'library':
        container.innerHTML = this.renderLibraryView();
        this.attachLibraryEvents();
        break;
      case 'search':
        container.innerHTML = this.renderSearchView();
        this.attachSearchEvents();
        break;
      case 'profile':
        container.innerHTML = this.renderProfileView();
        this.attachProfileEvents();
        break;
      default:
        container.innerHTML = this.renderHomeView();
        this.attachHomeEvents();
    }
  }

  // ==========================================
  // HOME VIEW
  // ==========================================
  renderHomeView() {
    const greeting = this.getDynamicGreeting();
    const gospelBooks = this.books.filter(b => b.isGospelShelf);
    const forYouBooks = this.books.filter(b => !b.isGospelShelf);

    // Books with progress for the "Continue Reading" shelf (only books with full content)
    const continueBooks = this.books.filter(b => b.hasFullContent && this.progressData[b.id]);

    return `
      <div class="px-5 pt-3 pb-8 space-y-6">
        
        <!-- Header: Dynamic Greeting & Avatar -->
        <div class="flex items-center justify-between pt-1">
          <div>
            <div class="text-[11px] uppercase tracking-wider font-semibold text-gospel">Gospel Books App · PageTurn</div>
            <h1 class="text-2xl font-serif font-bold text-ink tracking-tight">${greeting}, Reader</h1>
          </div>
          <button id="homeAvatarBtn" class="w-10 h-10 rounded-full bg-paper-dark border-2 border-white shadow-soft flex items-center justify-center font-bold text-ink text-sm hover:scale-105 transition">
            GB
          </button>
        </div>

        <!-- Quick Search Bar trigger -->
        <div id="homeSearchTrigger" class="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl border border-stone-200/80 shadow-soft cursor-pointer hover:border-gospel/40 transition">
          <svg class="w-4 h-4 text-ink-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          <span class="text-xs text-ink-muted flex-1">Search Gbile Akanni, holiness, discipleship...</span>
          <span class="text-[10px] font-semibold bg-stone-100 text-ink-muted px-2 py-0.5 rounded-md">Find</span>
        </div>

        <!-- Continue Reading Shelf (Horizontal cards with progress) -->
        ${continueBooks.length > 0 ? `
          <section>
            <div class="flex items-center justify-between mb-3">
              <h2 class="text-xs uppercase tracking-widest font-bold text-ink-muted flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-gospel"></span>
                Continue Reading
              </h2>
              <span class="text-[11px] font-medium text-gospel">${continueBooks.length} in progress</span>
            </div>

            <div class="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-5 px-5">
              ${continueBooks.map(book => {
      const prog = this.progressData[book.id] || { percent: 15 };
      return `
                  <div data-book-id="${book.id}" class="continue-card shrink-0 w-64 bg-white p-3.5 rounded-2xl shadow-soft border border-stone-200/70 cursor-pointer hover:shadow-md transition">
                    <div class="flex gap-3">
                      <div class="w-14 h-20 rounded-xl overflow-hidden shadow-book shrink-0 relative book-cover-3d bg-stone-900">
                        ${book.coverImage ? `<img src="${this.getCoverUrl(book)}" class="w-full h-full object-cover" alt="${book.title}" onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden');">` : ''}
                        <div class="${book.coverImage ? 'hidden' : ''} absolute inset-0 bg-gradient-to-br ${book.coverColor} flex flex-col justify-between p-1.5 text-white">
                          <span class="text-[8px] font-bold tracking-tighter opacity-80">${book.badge || 'BOOK'}</span>
                          <span class="text-[9px] font-serif font-bold leading-tight line-clamp-2">${book.title}</span>
                        </div>
                      </div>
                      <div class="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                          <div class="text-[10px] text-gospel font-semibold uppercase tracking-wide truncate">${book.category.split('/')[0]}</div>
                          <h3 class="font-serif font-bold text-xs text-ink truncate">${book.title}</h3>
                          <p class="text-[11px] text-ink-muted truncate">${book.author}</p>
                        </div>
                        <div class="space-y-1 mt-2">
                          <div class="flex justify-between text-[10px] text-ink-muted">
                            <span>Progress</span>
                            <span class="font-bold text-ink">${prog.percent}%</span>
                          </div>
                          <div class="w-full bg-stone-100 rounded-full h-1.5 overflow-hidden">
                            <div class="bg-gospel h-full rounded-full" style="width: ${prog.percent}%"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                `;
    }).join('')}
            </div>
          </section>
        ` : ''}

        <!-- GOSPEL SHELF FIRST (Gbile Akanni 7 Books with Orange GOSPEL badge) -->
        <section class="space-y-3">
          <div class="flex items-end justify-between">
            <div>
              <div class="flex items-center gap-1.5 text-gospel font-bold text-xs uppercase tracking-widest mb-0.5">
                <span class="text-sm">🔥</span>
                <span>Gospel Shelf First</span>
              </div>
              <h2 class="text-lg font-serif font-bold text-ink">Gbile Akanni Classics</h2>
              <p class="text-xs text-ink-muted">7 cornerstone titles published via Peace House</p>
            </div>
            <button id="seeAllGospelBtn" class="text-xs font-semibold text-gospel hover:underline">
              View All (7)
            </button>
          </div>

          <!-- Horizontal Shelf of Gbile Akanni Books (60% cover, 40% text, 16px rounded, soft shadow) -->
          <div class="flex gap-4 overflow-x-auto no-scrollbar pb-3 pt-1 -mx-5 px-5">
            ${gospelBooks.map(book => this.renderBookCardHorizontal(book)).join('')}
          </div>
        </section>

        <!-- FOR YOU GRID (Classic Christian literature with full reading capability) -->
        <section class="space-y-3 pt-2">
          <div class="flex items-end justify-between">
            <div>
              <span class="text-[11px] uppercase tracking-wider font-semibold text-emerald-600">Curated Library</span>
              <h2 class="text-lg font-serif font-bold text-ink">For You · Full Readers</h2>
              <p class="text-xs text-ink-muted">Deep devotionals with complete chapter text</p>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3.5">
            ${forYouBooks.map(book => this.renderBookCardGrid(book)).join('')}
          </div>
        </section>

        <!-- Peace House Banner -->
        <div class="bg-gradient-to-r from-amber-50 to-orange-50 border border-orange-200/80 rounded-2xl p-4 flex items-center justify-between shadow-soft">
          <div class="pr-2">
            <span class="text-[10px] font-bold uppercase tracking-wider text-gospel">Official Distributor</span>
            <h4 class="font-serif font-bold text-xs text-ink mt-0.5">Living Seed / Peace House</h4>
            <p class="text-[11px] text-ink-muted mt-0.5">Order original print editions & CDs directly from Gbile Akanni's ministry.</p>
          </div>
          <a href="https://peacehouse.org.ng/books" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-white border border-gospel text-gospel text-xs font-semibold px-3 py-1.5 rounded-xl shadow-sm hover:bg-gospel hover:text-white transition">
            Visit Store ↗
          </a>
        </div>

      </div>
    `;
  }

  // Horizontal Card format: 60% cover, 40% text, 16px rounded, soft shadow
  renderBookCardHorizontal(book) {
    const isFav = this.favorites.includes(book.id);
    return `
      <div data-book-id="${book.id}" class="book-card-click shrink-0 w-44 bg-white rounded-2xl shadow-soft border border-stone-200/70 p-2.5 flex flex-col cursor-pointer hover:shadow-md transition group">
        <!-- 60% Cover Hero -->
        <div class="relative w-full h-52 rounded-xl overflow-hidden shadow-book book-cover-3d bg-stone-900">
          ${book.coverImage ? `<img src="${this.getCoverUrl(book)}" class="w-full h-full object-cover" alt="${book.title}" onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden');">` : ''}
          <div class="${book.coverImage ? 'hidden' : ''} absolute inset-0 bg-gradient-to-br ${book.coverColor} p-3 flex flex-col justify-between text-white">
            <span class="bg-gospel text-white text-[9px] font-black tracking-wider px-2 py-0.5 rounded-md shadow-sm w-fit">${book.badge || 'GOSPEL'}</span>
            <div class="mt-auto">
              <div class="text-[9px] uppercase tracking-wider opacity-80 text-amber-200 font-semibold mb-0.5">${book.author}</div>
              <h3 class="font-serif font-bold text-sm leading-snug line-clamp-2 text-stone-100">${book.title}</h3>
            </div>
          </div>
          <div class="absolute top-2 right-2 z-20">
            <button data-fav-id="${book.id}" class="fav-btn w-6 h-6 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:scale-110 transition">
              ${isFav ? '❤️' : '🤍'}
            </button>
          </div>
          ${book.coverImage ? `
            <div class="absolute top-2 left-2 z-20">
              <span class="bg-gospel text-white text-[9px] font-black tracking-wider px-2 py-0.5 rounded-md shadow-sm badge-gospel-glow">${book.badge || 'GOSPEL'}</span>
            </div>
          ` : ''}
          <!-- Subtle book binding spine shine -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
        </div>

        <!-- 40% Text Details -->
        <div class="pt-2.5 pb-1 flex flex-col justify-between flex-1">
          <div>
            <h4 class="font-serif font-bold text-xs text-ink truncate group-hover:text-gospel transition-colors">${book.title}</h4>
            <p class="text-[11px] text-ink-muted truncate">${book.author}</p>
          </div>

          <div class="flex items-center justify-between mt-2 pt-1 border-t border-stone-100 text-[10px]">
            <span class="text-amber-500 font-semibold flex items-center gap-0.5">
              ★ ${book.rating}
            </span>
            ${book.hasFullContent ? `
              <button data-read-direct="${book.id}" class="read-direct-btn text-emerald-600 font-semibold hover:underline">
                Read Now →
              </button>
            ` : `
              <span class="text-gospel font-semibold flex items-center gap-0.5 group-hover:underline">
                Purchase ↗
              </span>
            `}
          </div>
        </div>
      </div>
    `;
  }

  // Grid Card format for For You / Classics / Library
  renderBookCardGrid(book) {
    const isFav = this.favorites.includes(book.id);
    const isGospel = book.isGospelShelf;
    const badgeBg = isGospel ? 'bg-gospel' : 'bg-emerald-600';
    const badgeText = isGospel ? 'badge-gospel-glow' : '';
    const readActionClass = isGospel ? 'text-gospel' : 'text-emerald-700';

    return `
      <div data-book-id="${book.id}" class="book-card-click bg-white rounded-2xl shadow-soft border border-stone-200/70 p-2.5 flex flex-col cursor-pointer hover:shadow-md transition group">
        <!-- Cover -->
        <div class="relative w-full h-48 rounded-xl overflow-hidden shadow-book book-cover-3d bg-stone-900">
          ${book.coverImage ? `<img src="${this.getCoverUrl(book)}" class="w-full h-full object-cover" alt="${book.title}" onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden');">` : ''}
          <div class="${book.coverImage ? 'hidden' : ''} absolute inset-0 bg-gradient-to-br ${book.coverColor} p-2.5 flex flex-col justify-between text-white">
            <span class="${badgeBg} text-white text-[8px] font-bold tracking-wider px-1.5 py-0.5 rounded shadow-sm w-fit ${badgeText}">
              ${book.badge}
            </span>
            <div class="mt-auto">
              <div class="text-[8px] uppercase tracking-wider opacity-80 text-stone-200 font-semibold mb-0.5 truncate">${book.author}</div>
              <h3 class="font-serif font-bold text-xs leading-tight line-clamp-2">${book.title}</h3>
            </div>
          </div>
          <div class="absolute top-2 right-2 z-20">
            <button data-fav-id="${book.id}" class="fav-btn w-6 h-6 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:scale-110 transition">
              ${isFav ? '❤️' : '🤍'}
            </button>
          </div>
          ${book.coverImage ? `
            <div class="absolute top-2 left-2 z-20">
              <span class="${badgeBg} text-white text-[8px] font-bold tracking-wider px-1.5 py-0.5 rounded shadow-sm ${badgeText}">
                ${book.badge}
              </span>
            </div>
          ` : ''}
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
        </div>

        <!-- Details -->
        <div class="pt-2 flex flex-col justify-between flex-1">
          <div>
            <h4 class="font-serif font-bold text-xs text-ink truncate group-hover:text-gospel transition-colors">${book.title}</h4>
            <p class="text-[10px] text-ink-muted truncate">${book.author}</p>
          </div>
          <div class="flex items-center justify-between mt-2 pt-1 border-t border-stone-100 text-[10px]">
            <span class="text-amber-500 font-semibold">★ ${book.rating}</span>
            ${book.hasFullContent ? `
              <button data-read-direct="${book.id}" class="read-direct-btn ${readActionClass} font-semibold hover:underline">
                Read Now →
              </button>
            ` : `
              <span class="text-gospel font-semibold flex items-center gap-0.5 group-hover:underline">
                Get Book ↗
              </span>
            `}
          </div>
        </div>
      </div>
    `;
  }

  attachHomeEvents() {
    // Search trigger
    const searchTrigger = document.getElementById('homeSearchTrigger');
    if (searchTrigger) {
      searchTrigger.addEventListener('click', () => this.switchTab('search'));
    }

    // See all Gospel books
    const seeAllGospelBtn = document.getElementById('seeAllGospelBtn');
    if (seeAllGospelBtn) {
      seeAllGospelBtn.addEventListener('click', () => {
        this.selectedTag = 'Gbile Akanni';
        this.switchTab('library');
      });
    }

    // Profile avatar
    const homeAvatarBtn = document.getElementById('homeAvatarBtn');
    if (homeAvatarBtn) {
      homeAvatarBtn.addEventListener('click', () => this.switchTab('profile'));
    }

    // Continue reading card clicks -> jump directly into reader
    document.querySelectorAll('.continue-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.fav-btn')) return;
        const bookId = card.getAttribute('data-book-id');
        const saved = this.progressData[bookId];
        this.openReader(bookId, (saved && saved.chapter !== undefined) ? saved.chapter : 0);
      });
    });

    // Direct "Read Now →" buttons on cards -> jump straight into reading
    document.querySelectorAll('.read-direct-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const bookId = btn.getAttribute('data-read-direct');
        this.openReader(bookId, 0);
      });
    });

    // Book card clicks -> open book detail
    document.querySelectorAll('.read-direct-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const bookId = btn.getAttribute('data-read-direct');
        this.openReader(bookId, 0);
      });
    });

    document.querySelectorAll('.book-card-click').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.fav-btn')) return;
        const bookId = card.getAttribute('data-book-id');
        this.openBookDetail(bookId);
      });
    });

    // Favorite heart clicks
    document.querySelectorAll('.fav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const bookId = btn.getAttribute('data-fav-id');
        this.toggleFavorite(bookId);
      });
    });
  }

  // ==========================================
  // BOOK DETAIL VIEW (SCREEN)
  // Master Prompt Requirement:
  // Cover hero 300px, title, author, description.
  // Logic: if hasFullContent true => Read Now else => orange box + Get This Book external + Back
  // ==========================================
  renderBookDetailView() {
    const book = this.activeBook;
    if (!book) return '';

    const isFav = this.favorites.includes(book.id);

    return `
      <div class="min-h-full bg-paper pb-12">
        <!-- Top Navigation Bar -->
        <div class="sticky top-0 z-30 bg-paper/90 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-stone-200/60">
          <button id="backFromDetailBtn" class="flex items-center gap-1.5 text-ink font-medium text-xs bg-white px-3 py-1.5 rounded-full border border-stone-200 shadow-soft active:scale-95 transition">
            <svg class="w-4 h-4 text-ink-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            <span>Back</span>
          </button>
          
          <div class="text-xs font-serif font-bold text-ink truncate max-w-[180px]">${book.title}</div>

          <button id="detailFavBtn" class="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-sm shadow-soft active:scale-95 transition">
            ${isFav ? '❤️' : '🤍'}
          </button>
        </div>

        <div class="px-5 pt-4 space-y-6">

          <!-- 300px Hero Book Cover Presentation -->
          <div class="flex justify-center pt-2">
            <div class="w-[200px] h-[300px] rounded-2xl overflow-hidden shadow-book-lg book-cover-3d relative bg-stone-900">
              ${book.coverImage ? `<img src="${this.getCoverUrl(book)}" class="w-full h-full object-cover" alt="${book.title}" onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden');">` : ''}
              <div class="${book.coverImage ? 'hidden' : ''} absolute inset-0 bg-gradient-to-br ${book.coverColor} p-5 flex flex-col justify-between text-white">
                <div class="flex justify-between items-start z-10">
                  <span class="${book.isGospelShelf ? 'bg-gospel' : 'bg-emerald-600'} text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md shadow">
                    ${book.badge}
                  </span>
                  <span class="text-[10px] opacity-75 font-mono">${book.publishedYear}</span>
                </div>

                <div class="z-10 space-y-1">
                  <div class="text-[11px] uppercase tracking-wider text-amber-200 font-semibold">${book.author}</div>
                  <h1 class="font-serif font-black text-xl leading-tight text-white drop-shadow">${book.title}</h1>
                  <div class="h-0.5 w-8 bg-gospel rounded-full mt-2"></div>
                </div>

                <!-- Spine reflection layer -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none"></div>
              </div>
              ${book.coverImage ? `
                <div class="absolute top-3 left-3 z-20">
                  <span class="${book.isGospelShelf ? 'bg-gospel' : 'bg-emerald-600'} text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md shadow">
                    ${book.badge}
                  </span>
                </div>
              ` : ''}
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>

          <!-- Title, Author, Quick Stats -->
          <div class="text-center space-y-1.5">
            <h2 class="font-serif text-2xl font-bold text-ink leading-tight">${book.title}</h2>
            <p class="text-sm font-medium text-gospel">${book.author}</p>
            <div class="text-xs text-ink-muted">${book.category}</div>

            <div class="flex items-center justify-center gap-4 pt-3 text-xs">
              <div class="flex items-center gap-1 bg-white px-3 py-1.5 rounded-full border border-stone-200 shadow-soft">
                <span class="text-amber-500 font-bold">★ ${book.rating}</span>
                <span class="text-ink-muted">(${book.reviewsCount})</span>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-full border border-stone-200 shadow-soft text-ink">
                <strong>${book.pages}</strong> pages
              </div>
              <div class="bg-white px-3 py-1.5 rounded-full border border-stone-200 shadow-soft text-ink">
                <strong>~${Math.round(book.pages / 20)}</strong> hrs read
              </div>
            </div>
          </div>

          <!-- GOSPEL RULE LOGIC -->
          ${!book.hasFullContent ? `
            <!-- GBILE AKANNI ORANGE INFO BOX + GET THIS BOOK EXTERNAL LINK -->
            <div class="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-gospel/40 rounded-2xl p-4.5 space-y-3 shadow-soft">
              <div class="flex items-start gap-3">
                <div class="w-9 h-9 rounded-xl bg-gospel text-white flex items-center justify-center shrink-0 shadow-md">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                </div>
                <div>
                  <h4 class="font-serif font-bold text-sm text-ink">Full content not hosted</h4>
                  <p class="text-xs text-ink-muted leading-relaxed mt-1">
                    This copyrighted spiritual classic by <strong>Bro. Gbile Akanni</strong> is published and distributed directly by <strong>Peace House Publications</strong>. 
                    Support the ministry by securing your official physical or digital volume.
                  </p>
                </div>
              </div>

              <!-- Primary Action: Get This Book -->
              <a href="${book.buyLink}" target="_blank" rel="noopener noreferrer" class="w-full bg-gospel hover:bg-gospel-dark text-white font-semibold py-3.5 px-4 rounded-xl shadow-lg shadow-gospel/25 active:scale-98 transition flex items-center justify-center gap-2 text-sm">
                <span>Get This Book</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
              <div class="text-[10px] text-center text-ink-muted">Official Peace House store: peacehouse.org.ng</div>
            </div>
          ` : `
            <!-- HAS FULL CONTENT => READ NOW BUTTON -->
            <div class="space-y-2">
              <button id="readNowBtn" class="w-full bg-ink hover:bg-black text-white font-semibold py-3.5 px-4 rounded-xl shadow-lg active:scale-98 transition flex items-center justify-center gap-2 text-sm">
                <svg class="w-4 h-4 text-gospel" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                <span>Read Now (Full Text Included)</span>
              </button>
              <div class="text-[10px] text-center text-emerald-700 font-medium">✓ Unabridged digital edition available offline</div>
            </div>
          `}

          <!-- Book Description & Synopsis -->
          <div class="bg-white rounded-2xl p-4.5 border border-stone-200/70 shadow-soft space-y-3">
            <h3 class="font-serif font-bold text-sm text-ink">About this Book</h3>
            <p class="text-xs text-ink-muted leading-relaxed">${book.description}</p>

            <h4 class="font-serif font-bold text-xs text-ink pt-2 border-t border-stone-100">Synopsis & Heartbeat</h4>
            <p class="text-xs text-ink-muted leading-relaxed">${book.synopsis}</p>
          </div>

          <!-- Inspiring Excerpt Quotes -->
          ${book.quotes && book.quotes.length ? `
            <div class="bg-paper-dark/60 rounded-2xl p-4 border border-stone-200/50 space-y-2.5">
              <div class="text-[10px] font-bold uppercase tracking-wider text-gospel">Timeless Quotes</div>
              ${book.quotes.map(q => `
                <blockquote class="text-xs font-serif italic text-ink border-l-2 border-gospel pl-3 py-1">
                  "${q}"
                </blockquote>
              `).join('')}
            </div>
          ` : ''}

        </div>
      </div>
    `;
  }

  attachDetailEvents() {
    const backBtn = document.getElementById('backFromDetailBtn');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        this.activeBook = null;
        this.render();
      });
    }

    const favBtn = document.getElementById('detailFavBtn');
    if (favBtn) {
      favBtn.addEventListener('click', () => {
        if (this.activeBook) {
          this.toggleFavorite(this.activeBook.id);
        }
      });
    }

    const readNowBtn = document.getElementById('readNowBtn');
    if (readNowBtn && this.activeBook) {
      readNowBtn.addEventListener('click', () => {
        this.openReader(this.activeBook.id, 0);
      });
    }
  }

  // ==========================================
  // FULL APPLE BOOKS READER VIEW
  // Features:
  // - Top bar (Back, Aa menu, Table of contents)
  // - Themes: Warm Paper, Pure White, Sepia, Night
  // - Font switcher (Merriweather Serif vs Inter Sans)
  // - Font size A- / A+
  // - Chapter progress bar
  // - Real SpeechSynthesis audio narration with highlight
  // ==========================================
  renderReaderView() {
    const book = this.readingBook;
    if (!book) return '';

    const chapters = book.chapters || [];
    const currentChapter = chapters[this.currentChapterIndex] || {
      title: 'Preview Synopsis',
      content: book.synopsis
    };

    const paragraphs = currentChapter.content.split('\n\n').filter(p => p.trim().length > 0);
    const isBookmarked = this.bookmarks.some(bm => bm.bookId === book.id && bm.chapterIndex === this.currentChapterIndex);

    return `
      <div id="readerRoot" class="min-h-full ${this.settings.theme} transition-colors duration-200 flex flex-col">
        
        <!-- Reader Sticky Top Bar -->
        <header class="reader-bar sticky top-0 z-30 px-4 py-2.5 flex items-center justify-between border-b border-stone-200/50 backdrop-blur-md">
          <button id="closeReaderBtn" class="flex items-center gap-1 text-xs font-medium py-1 px-2.5 rounded-full hover:bg-black/5 active:scale-95 transition">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            <span>Exit</span>
          </button>

          <div class="text-center overflow-hidden px-2 max-w-[180px]">
            <div class="text-[10px] uppercase tracking-wider opacity-60 truncate">${book.title}</div>
            <div class="text-xs font-serif font-bold truncate">${currentChapter.title}</div>
          </div>

          <div class="flex items-center gap-1">
            <!-- Audio Narrate Button -->
            <button id="readerNarrateBtn" title="Voice Narrator" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/5 active:scale-95 transition">
              <svg class="w-4 h-4 ${this.isAudioPlaying ? 'text-gospel animate-pulse' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
            </button>

            <!-- Bookmark Button -->
            <button id="readerBookmarkBtn" title="${isBookmarked ? 'Remove Bookmark' : 'Bookmark this chapter'}" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/5 active:scale-95 transition">
              <span class="text-xs">${isBookmarked ? '🔖' : '📑'}</span>
            </button>

            <!-- Appearance Controls (Aa) -->
            <button id="readerSettingsToggleBtn" title="Appearance Settings" class="w-8 h-8 rounded-full flex items-center justify-center font-serif font-bold text-xs border border-current/20 hover:bg-black/5 active:scale-95 transition">
              Aa
            </button>
          </div>
        </header>

        <!-- Reader Appearance Drawer / Popover -->
        <div id="readerSettingsDrawer" class="hidden reader-subnav px-4 py-3 border-b border-stone-200/60 bg-paper/95 space-y-3 text-xs shadow-md animate-scaleUp">
          <!-- Theme selector -->
          <div class="flex items-center justify-between">
            <span class="text-[11px] font-medium opacity-70">Theme</span>
            <div class="flex gap-2">
              <button data-theme="theme-paper" class="theme-btn px-2.5 py-1 rounded-full border border-stone-300 text-[10px] bg-[#F8F6F1] text-ink ${this.settings.theme === 'theme-paper' ? 'ring-2 ring-gospel font-bold' : ''}">Paper</button>
              <button data-theme="theme-white" class="theme-btn px-2.5 py-1 rounded-full border border-stone-300 text-[10px] bg-white text-ink ${this.settings.theme === 'theme-white' ? 'ring-2 ring-gospel font-bold' : ''}">Clean</button>
              <button data-theme="theme-sepia" class="theme-btn px-2.5 py-1 rounded-full border border-stone-300 text-[10px] bg-[#F4ECD8] text-[#433422] ${this.settings.theme === 'theme-sepia' ? 'ring-2 ring-gospel font-bold' : ''}">Sepia</button>
              <button data-theme="theme-dark" class="theme-btn px-2.5 py-1 rounded-full border border-stone-700 text-[10px] bg-[#18181B] text-white ${this.settings.theme === 'theme-dark' ? 'ring-2 ring-gospel font-bold' : ''}">Night</button>
            </div>
          </div>

          <!-- Font Family & Size -->
          <div class="flex items-center justify-between pt-2 border-t border-current/10">
            <div class="flex gap-1.5">
              <button id="fontSerifBtn" class="px-2.5 py-1 rounded-md font-serif text-xs ${this.settings.fontFamily === 'serif' ? 'bg-gospel text-white' : 'border border-current/20'}">Merriweather</button>
              <button id="fontSansBtn" class="px-2.5 py-1 rounded-md font-sans text-xs ${this.settings.fontFamily === 'sans' ? 'bg-gospel text-white' : 'border border-current/20'}">Inter</button>
            </div>
            <div class="flex items-center gap-2">
              <button id="fontDecBtn" class="w-7 h-7 rounded-full border border-current/20 flex items-center justify-center font-bold">A-</button>
              <span id="fontSizeDisplay" class="font-mono text-[11px]">${this.settings.fontSize}px</span>
              <button id="fontIncBtn" class="w-7 h-7 rounded-full border border-current/20 flex items-center justify-center font-bold">A+</button>
            </div>
          </div>
        </div>

        <!-- Reader Chapter Picker Bar -->
        ${chapters.length > 1 ? `
          <div class="reader-subnav px-4 py-2 border-b border-stone-200/40 flex items-center justify-between text-xs overflow-x-auto no-scrollbar gap-2">
            ${chapters.map((ch, idx) => `
              <button data-chapter-idx="${idx}" class="chapter-switch-btn shrink-0 px-3 py-1 rounded-full text-[11px] ${idx === this.currentChapterIndex ? 'bg-gospel text-white font-medium' : 'hover:bg-black/5 opacity-80'}">
                ${ch.title.split(':')[0]}
              </button>
            `).join('')}
          </div>
        ` : ''}

        <!-- Book Reading Article Body -->
        <article class="flex-1 max-w-xl mx-auto px-6 py-8 reader-container ${this.settings.fontFamily === 'serif' ? 'font-serif' : 'font-sans'}" style="font-size: ${this.settings.fontSize}px;">
          <h2 class="font-serif font-black text-xl mb-6 pb-2 border-b border-current/10 leading-snug">${currentChapter.title}</h2>
          
          <div id="readerParagraphs" class="space-y-5">
            ${paragraphs.map((p, pIdx) => `
              <p id="p-${pIdx}" class="leading-relaxed transition-colors duration-200">${p}</p>
            `).join('')}
          </div>

          <!-- End of chapter actions -->
          <div class="mt-12 pt-6 border-t border-current/10 flex items-center justify-between text-xs">
            ${this.currentChapterIndex > 0 ? `
              <button id="prevChapterBtn" class="font-medium text-gospel hover:underline">← Previous Chapter</button>
            ` : '<span></span>'}

            ${this.currentChapterIndex < chapters.length - 1 ? `
              <button id="nextChapterBtn" class="bg-gospel hover:bg-gospel-dark text-white font-medium px-4 py-2 rounded-xl transition">Next Chapter →</button>
            ` : `
              <button id="finishBookBtn" class="bg-emerald-600 text-white font-medium px-4 py-2 rounded-xl">Mark Completed ✓</button>
            `}
          </div>
        </article>

        <!-- Reading Progress Footer Indicator -->
        <footer class="reader-bar sticky bottom-0 z-20 px-5 py-2 border-t border-stone-200/50 backdrop-blur-md flex items-center justify-between text-[11px] opacity-75">
          <span>Chapter ${this.currentChapterIndex + 1} of ${chapters.length || 1}</span>
          <span>Tap top right Aa to adjust theme</span>
        </footer>

      </div>
    `;
  }

  attachReaderEvents() {
    // Close reader button
    const closeBtn = document.getElementById('closeReaderBtn');
    if (closeBtn) closeBtn.addEventListener('click', () => this.closeReader());

    // Bookmark button
    const bookmarkBtn = document.getElementById('readerBookmarkBtn');
    if (bookmarkBtn) {
      bookmarkBtn.addEventListener('click', () => {
        this.toggleBookmark();
      });
    }

    // Settings Toggle
    const toggleSettingsBtn = document.getElementById('readerSettingsToggleBtn');
    const drawer = document.getElementById('readerSettingsDrawer');
    if (toggleSettingsBtn && drawer) {
      toggleSettingsBtn.addEventListener('click', () => {
        drawer.classList.toggle('hidden');
      });
    }

    // Theme buttons
    document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const theme = btn.getAttribute('data-theme');
        this.settings.theme = theme;
        this.saveJSON('gospel_settings', this.settings);
        this.render();
      });
    });

    // Font Family buttons
    const fontSerifBtn = document.getElementById('fontSerifBtn');
    const fontSansBtn = document.getElementById('fontSansBtn');
    if (fontSerifBtn) {
      fontSerifBtn.addEventListener('click', () => {
        this.settings.fontFamily = 'serif';
        this.saveJSON('gospel_settings', this.settings);
        this.render();
      });
    }
    if (fontSansBtn) {
      fontSansBtn.addEventListener('click', () => {
        this.settings.fontFamily = 'sans';
        this.saveJSON('gospel_settings', this.settings);
        this.render();
      });
    }

    // Font Size adjusters
    const fontDecBtn = document.getElementById('fontDecBtn');
    const fontIncBtn = document.getElementById('fontIncBtn');
    if (fontDecBtn) {
      fontDecBtn.addEventListener('click', () => {
        if (this.settings.fontSize > 13) {
          this.settings.fontSize -= 1;
          this.saveJSON('gospel_settings', this.settings);
          this.render();
        }
      });
    }
    if (fontIncBtn) {
      fontIncBtn.addEventListener('click', () => {
        if (this.settings.fontSize < 24) {
          this.settings.fontSize += 1;
          this.saveJSON('gospel_settings', this.settings);
          this.render();
        }
      });
    }

    // Chapter switchers
    document.querySelectorAll('.chapter-switch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-chapter-idx'), 10);
        this.stopAudioNarration();
        this.currentChapterIndex = idx;
        this.saveBookProgress();
        this.render();
      });
    });

    const prevChapterBtn = document.getElementById('prevChapterBtn');
    if (prevChapterBtn) {
      prevChapterBtn.addEventListener('click', () => {
        this.stopAudioNarration();
        this.currentChapterIndex -= 1;
        this.saveBookProgress();
        this.render();
      });
    }

    const nextChapterBtn = document.getElementById('nextChapterBtn');
    if (nextChapterBtn) {
      nextChapterBtn.addEventListener('click', () => {
        this.stopAudioNarration();
        this.currentChapterIndex += 1;
        this.saveBookProgress();
        this.render();
      });
    }

    const finishBookBtn = document.getElementById('finishBookBtn');
    if (finishBookBtn) {
      finishBookBtn.addEventListener('click', () => {
        this.showToast('Book Completed! Glory to God 🕊️', '🎉');
        this.saveBookProgress(100);
        this.closeReader();
      });
    }

    // Audio Narrate button
    const readerNarrateBtn = document.getElementById('readerNarrateBtn');
    if (readerNarrateBtn) {
      readerNarrateBtn.addEventListener('click', () => this.toggleAudioNarration());
    }
  }

  saveBookProgress(overridePercent = null) {
    if (!this.readingBook) return;
    const chaptersCount = (this.readingBook.chapters && this.readingBook.chapters.length) || 1;
    const calcPercent = overridePercent !== null ? overridePercent : Math.round(((this.currentChapterIndex + 1) / chaptersCount) * 100);

    this.progressData[this.readingBook.id] = {
      percent: Math.min(100, Math.max(10, calcPercent)),
      chapter: this.currentChapterIndex,
      lastRead: 'Just now'
    };
    this.saveJSON('gospel_progress', this.progressData);
  }

  toggleBookmark() {
    if (!this.readingBook) return;
    const book = this.readingBook;
    const chapters = book.chapters || [];
    const currentChapter = chapters[this.currentChapterIndex];
    const chTitle = currentChapter ? currentChapter.title : 'Chapter ' + (this.currentChapterIndex + 1);

    const existsIndex = this.bookmarks.findIndex(bm => bm.bookId === book.id && bm.chapterIndex === this.currentChapterIndex);
    if (existsIndex > -1) {
      this.bookmarks.splice(existsIndex, 1);
      this.saveJSON('gospel_bookmarks', this.bookmarks);
      this.showToast('Bookmark removed', '🗑️');
    } else {
      this.bookmarks.unshift({
        bookId: book.id,
        bookTitle: book.title,
        bookAuthor: book.author,
        chapterIndex: this.currentChapterIndex,
        chapterTitle: chTitle,
        timestamp: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
      });
      this.saveJSON('gospel_bookmarks', this.bookmarks);
      this.showToast('Chapter bookmarked! 🔖', '✨');
    }
    this.render();
  }

  // ==========================================
  // TEXT-TO-SPEECH (TTS) AUDIO ENGINE
  // ==========================================
  toggleAudioNarration() {
    if (!this.speechSynth) {
      this.showToast('Speech synthesis not supported in this browser', '⚠️');
      return;
    }

    if (this.isAudioPlaying) {
      this.pauseAudioNarration();
    } else {
      this.startAudioNarration();
    }
  }

  startAudioNarration() {
    if (!this.readingBook) return;
    const chapters = this.readingBook.chapters || [];
    const currentChapter = chapters[this.currentChapterIndex];
    if (!currentChapter) return;

    const paragraphs = currentChapter.content.split('\n\n').filter(p => p.trim().length > 0);
    if (!paragraphs.length) return;

    this.speechSynth.cancel();

    // Show floating audio player bar
    const audioBar = document.getElementById('audioPlayerBar');
    const audioTitle = document.getElementById('audioTitleLabel');
    const playIcon = document.getElementById('audioPlayIcon');
    const pauseIcon = document.getElementById('audioPauseIcon');

    if (audioBar) audioBar.classList.remove('hidden');
    if (audioTitle) audioTitle.textContent = `${this.readingBook.title} - ${currentChapter.title.split(':')[0]}`;
    if (playIcon) playIcon.classList.add('hidden');
    if (pauseIcon) pauseIcon.classList.remove('hidden');

    this.isAudioPlaying = true;
    this.speakParagraph(paragraphs, this.audioParagraphIndex);
  }

  speakParagraph(paragraphs, index) {
    if (index >= paragraphs.length) {
      // Auto-advance to next chapter if available
      const chapters = this.readingBook ? (this.readingBook.chapters || []) : [];
      if (this.currentChapterIndex < chapters.length - 1) {
        this.showToast('Chapter finished. Advancing to next...', '📖');
        this.currentChapterIndex++;
        this.audioParagraphIndex = 0;
        this.saveBookProgress();
        this.render();
        const nextChapter = chapters[this.currentChapterIndex];
        const nextParagraphs = nextChapter.content.split('\n\n').filter(p => p.trim().length > 0);
        const audioTitle = document.getElementById('audioTitleLabel');
        if (audioTitle) audioTitle.textContent = `${this.readingBook.title} - ${nextChapter.title.split(':')[0]}`;
        setTimeout(() => {
          if (this.isAudioPlaying) {
            this.speakParagraph(nextParagraphs, 0);
          }
        }, 800);
      } else {
        this.stopAudioNarration();
        this.showToast('Finished reading chapter', '✓');
      }
      return;
    }

    this.audioParagraphIndex = index;

    // Highlight current paragraph in UI
    document.querySelectorAll('.spoken-highlight').forEach(el => el.classList.remove('spoken-highlight'));
    const pEl = document.getElementById(`p-${index}`);
    if (pEl) {
      pEl.classList.add('spoken-highlight');
      pEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    const textToSpeak = paragraphs[index];
    this.speechUtterance = new SpeechSynthesisUtterance(textToSpeak);
    this.speechUtterance.rate = this.audioSpeed || 1.0;
    this.speechUtterance.pitch = 1.0;

    this.speechUtterance.onend = () => {
      if (this.isAudioPlaying) {
        this.speakParagraph(paragraphs, index + 1);
      }
    };

    this.speechUtterance.onerror = () => {
      this.stopAudioNarration();
    };

    this.speechSynth.speak(this.speechUtterance);
  }

  pauseAudioNarration() {
    if (this.speechSynth) {
      this.speechSynth.pause();
    }
    this.isAudioPlaying = false;
    const playIcon = document.getElementById('audioPlayIcon');
    const pauseIcon = document.getElementById('audioPauseIcon');
    if (playIcon) playIcon.classList.remove('hidden');
    if (pauseIcon) pauseIcon.classList.add('hidden');
  }

  stopAudioNarration() {
    if (this.speechSynth) {
      this.speechSynth.cancel();
    }
    this.isAudioPlaying = false;
    this.audioParagraphIndex = 0;

    const audioBar = document.getElementById('audioPlayerBar');
    if (audioBar) audioBar.classList.add('hidden');
    document.querySelectorAll('.spoken-highlight').forEach(el => el.classList.remove('spoken-highlight'));
  }

  // ==========================================
  // LIBRARY VIEW
  // ==========================================
  renderLibraryView() {
    const filter = this.selectedTag || 'All';
    let filtered = this.books;

    if (filter === 'Gbile Akanni') {
      filtered = this.books.filter(b => b.isGospelShelf);
    } else if (filter === 'Classics') {
      filtered = this.books.filter(b => !b.isGospelShelf);
    } else if (filter === 'Reading') {
      filtered = this.books.filter(b => b.hasFullContent && this.progressData[b.id]);
    } else if (filter === 'Saved') {
      filtered = this.books.filter(b => this.favorites.includes(b.id));
    }

    const isBookmarksTab = filter === 'Bookmarks';

    return `
      <div class="px-5 pt-3 pb-8 space-y-5">
        <div>
          <span class="text-[11px] uppercase tracking-wider font-semibold text-gospel">Personal Sanctuary</span>
          <h1 class="text-2xl font-serif font-bold text-ink tracking-tight">Your Library</h1>
        </div>

        <!-- Filter Tabs -->
        <div class="flex gap-2 overflow-x-auto no-scrollbar pb-1 text-xs">
          ${['All', 'Gbile Akanni', 'Classics', 'Reading', 'Bookmarks', 'Saved'].map(tag => `
            <button data-lib-filter="${tag}" class="lib-filter-btn shrink-0 px-3.5 py-1.5 rounded-full font-medium transition ${this.selectedTag === tag ? 'bg-gospel text-white shadow-sm' : 'bg-white border border-stone-200 text-ink hover:bg-stone-50'}">
              ${tag === 'Saved' ? `Saved (${this.favorites.length})` : tag === 'Bookmarks' ? `Bookmarks (${this.bookmarks.length})` : tag}
            </button>
          `).join('')}
        </div>

        ${isBookmarksTab ? `
          <!-- Bookmarks List -->
          <div class="space-y-3">
            <div class="text-[11px] text-ink-muted">Saved reading marks (${this.bookmarks.length})</div>
            ${this.bookmarks.length > 0 ? this.bookmarks.map((bm, idx) => `
              <div class="bg-white p-3.5 rounded-2xl border border-stone-200/80 shadow-soft flex items-center justify-between gap-3 hover:shadow-md transition">
                <div class="flex items-center gap-3 overflow-hidden">
                  <span class="text-2xl">🔖</span>
                  <div class="min-w-0">
                    <h4 class="font-serif font-bold text-xs text-ink truncate">${bm.chapterTitle}</h4>
                    <p class="text-[11px] text-gospel font-medium truncate">${bm.bookTitle}</p>
                    <span class="text-[10px] text-ink-muted">${bm.timestamp || 'Saved'}</span>
                  </div>
                </div>
                <div class="flex items-center gap-1.5 shrink-0">
                  <button data-bm-book="${bm.bookId}" data-bm-ch="${bm.chapterIndex}" class="resume-bm-btn bg-gospel hover:bg-gospel-dark text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-sm transition">
                    Read
                  </button>
                  <button data-del-bm="${idx}" class="del-bm-btn text-stone-400 hover:text-red-500 p-1.5 text-xs transition" title="Delete bookmark">
                    ✕
                  </button>
                </div>
              </div>
            `).join('') : `
              <div class="text-center py-12 space-y-2 bg-white rounded-2xl border border-stone-200/80 p-6">
                <span class="text-2xl">🔖</span>
                <div class="font-serif font-bold text-sm text-ink">No bookmarks yet</div>
                <p class="text-xs text-ink-muted">Tap the 🔖 bookmark icon while reading any chapter to pin your place here.</p>
              </div>
            `}
          </div>
        ` : `
          <!-- Count indicator -->
          <div class="text-[11px] text-ink-muted">
            Showing ${filtered.length} books in library
          </div>

          <!-- Books Grid -->
          <div class="grid grid-cols-2 gap-3.5">
            ${filtered.map(book => this.renderBookCardGrid(book)).join('')}
          </div>

          ${filtered.length === 0 ? `
            <div class="text-center py-12 space-y-2 bg-white rounded-2xl border border-stone-200/80 p-6">
              <span class="text-2xl">📖</span>
              <div class="font-serif font-bold text-sm text-ink">No books found in this tab</div>
              <p class="text-xs text-ink-muted">Tap on the heart icon on any book to add it to your saved shelf.</p>
            </div>
          ` : ''}
        `}
      </div>
    `;
  }

  attachLibraryEvents() {
    document.querySelectorAll('.lib-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedTag = btn.getAttribute('data-lib-filter');
        this.render();
      });
    });

    document.querySelectorAll('.resume-bm-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const bookId = btn.getAttribute('data-bm-book');
        const chIdx = parseInt(btn.getAttribute('data-bm-ch'), 10) || 0;
        this.openReader(bookId, chIdx);
      });
    });

    document.querySelectorAll('.del-bm-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-del-bm'), 10);
        if (!isNaN(idx)) {
          this.bookmarks.splice(idx, 1);
          this.saveJSON('gospel_bookmarks', this.bookmarks);
          this.showToast('Bookmark deleted', '🗑️');
          this.render();
        }
      });
    });

    document.querySelectorAll('.read-direct-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const bookId = btn.getAttribute('data-read-direct');
        this.openReader(bookId, 0);
      });
    });

    document.querySelectorAll('.book-card-click').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.fav-btn')) return;
        const bookId = card.getAttribute('data-book-id');
        this.openBookDetail(bookId);
      });
    });

    document.querySelectorAll('.fav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const bookId = btn.getAttribute('data-fav-id');
        this.toggleFavorite(bookId);
      });
    });
  }

  // ==========================================
  // SEARCH VIEW
  // ==========================================
  renderSearchView() {
    const q = this.searchQuery.toLowerCase().trim();
    const results = q ? this.books.filter(b =>
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q) ||
      b.description.toLowerCase().includes(q)
    ) : this.books;

    return `
      <div class="px-5 pt-3 pb-8 space-y-5">
        <div>
          <span class="text-[11px] uppercase tracking-wider font-semibold text-gospel">Discover Literature</span>
          <h1 class="text-2xl font-serif font-bold text-ink tracking-tight">Search Catalog</h1>
        </div>

        <!-- Live Search Input -->
        <div class="relative flex items-center">
          <svg class="absolute left-4 w-4 h-4 text-ink-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          <input 
            id="searchInputField" 
            type="text" 
            placeholder="Search by title, author, keyword..." 
            value="${this.searchQuery}"
            class="w-full bg-white pl-11 pr-10 py-3 rounded-2xl border border-stone-200 text-xs text-ink focus:outline-none focus:ring-2 focus:ring-gospel/40 shadow-soft"
          />
          ${this.searchQuery ? `
            <button id="clearSearchBtn" class="absolute right-3.5 text-stone-400 hover:text-ink text-sm">✕</button>
          ` : ''}
        </div>

        <!-- Quick filter tags -->
        <div class="space-y-1.5">
          <div class="text-[11px] font-semibold text-ink-muted">Quick Tags</div>
          <div class="flex flex-wrap gap-1.5 text-xs">
            ${['Gbile Akanni', 'Discipleship', 'Christian Living', 'Andrew Murray', 'Humility', 'Brother Lawrence'].map(tag => `
              <button data-search-tag="${tag}" class="search-tag-btn bg-white border border-stone-200 px-3 py-1 rounded-full text-[11px] text-ink-muted hover:border-gospel hover:text-gospel transition">
                # ${tag}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Results Counter -->
        <div class="text-[11px] text-ink-muted">
          ${q ? `Showing ${results.length} results for "${this.searchQuery}"` : `All catalog items (${results.length})`}
        </div>

        <!-- Results List -->
        <div class="space-y-3">
          ${results.map(book => `
            <div data-book-id="${book.id}" class="book-card-click bg-white p-3 rounded-2xl border border-stone-200/80 shadow-soft flex items-center justify-between cursor-pointer hover:shadow-md transition">
              <div class="flex items-center gap-3 overflow-hidden">
                <div class="w-12 h-16 rounded-xl overflow-hidden shrink-0 shadow-book book-cover-3d relative bg-stone-900">
                  ${book.coverImage ? `<img src="${this.getCoverUrl(book)}" class="w-full h-full object-cover" alt="${book.title}" onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden');">` : ''}
                  <div class="${book.coverImage ? 'hidden' : ''} w-full h-full bg-gradient-to-br ${book.coverColor} p-1 text-white flex flex-col justify-between">
                    <span class="text-[7px] font-bold">${book.badge}</span>
                    <span class="text-[8px] font-serif font-bold line-clamp-2">${book.title}</span>
                  </div>
                </div>
                <div class="min-w-0">
                  <h4 class="font-serif font-bold text-xs text-ink truncate">${book.title}</h4>
                  <p class="text-[11px] text-gospel font-medium truncate">${book.author}</p>
                  <p class="text-[10px] text-ink-muted truncate">${book.category}</p>
                </div>
              </div>
              <div class="text-right shrink-0 pl-2">
                <span class="text-[10px] font-semibold ${book.hasFullContent ? 'text-emerald-700 bg-emerald-50' : 'text-gospel bg-orange-50'} px-2 py-1 rounded-md">
                  ${book.hasFullContent ? 'Read' : 'Peace House'}
                </span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  attachSearchEvents() {
    const input = document.getElementById('searchInputField');
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
      input.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.render();
      });
    }

    const clearBtn = document.getElementById('clearSearchBtn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.searchQuery = '';
        this.render();
      });
    }

    document.querySelectorAll('.search-tag-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tag = btn.getAttribute('data-search-tag');
        this.searchQuery = tag;
        this.render();
      });
    });

    document.querySelectorAll('.read-direct-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const bookId = btn.getAttribute('data-read-direct');
        this.openReader(bookId, 0);
      });
    });

    document.querySelectorAll('.book-card-click').forEach(card => {
      card.addEventListener('click', () => {
        const bookId = card.getAttribute('data-book-id');
        this.openBookDetail(bookId);
      });
    });
  }

  // ==========================================
  // PROFILE / SETTINGS VIEW
  // ==========================================
  renderProfileView() {
    const streak = this.settings.streakDays || 5;
    const minutes = this.settings.minutesRead || 142;

    return `
      <div class="px-5 pt-3 pb-8 space-y-6">
        <div>
          <span class="text-[11px] uppercase tracking-wider font-semibold text-gospel">Personal Center</span>
          <h1 class="text-2xl font-serif font-bold text-ink tracking-tight">Reader Profile</h1>
        </div>

        <!-- Profile Card -->
        <div class="bg-white p-5 rounded-3xl border border-stone-200/80 shadow-soft flex items-center gap-4">
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-600 to-orange-500 text-white flex items-center justify-center text-2xl font-bold shadow-md">
            GB
          </div>
          <div>
            <div class="inline-block bg-gospel-light text-gospel text-[10px] font-bold px-2 py-0.5 rounded-full mb-1">Active Seeker</div>
            <h2 class="font-serif font-bold text-base text-ink">Gospel Disciple</h2>
            <p class="text-xs text-ink-muted">Saved in this device (Offline-Ready)</p>
          </div>
        </div>

        <!-- Reading Metrics Grid -->
        <div class="grid grid-cols-4 gap-2 text-center">
          <div class="bg-white p-3 rounded-2xl border border-stone-200/70 shadow-soft">
            <div class="text-base">🔥</div>
            <div class="text-xs font-bold text-ink mt-0.5">${streak} Days</div>
            <div class="text-[9px] text-ink-muted">Streak</div>
          </div>
          <div class="bg-white p-3 rounded-2xl border border-stone-200/70 shadow-soft">
            <div class="text-base">⏱️</div>
            <div class="text-xs font-bold text-ink mt-0.5">${minutes}m</div>
            <div class="text-[9px] text-ink-muted">Read Time</div>
          </div>
          <div class="bg-white p-3 rounded-2xl border border-stone-200/70 shadow-soft">
            <div class="text-base">📚</div>
            <div class="text-xs font-bold text-ink mt-0.5">${this.favorites.length}</div>
            <div class="text-[9px] text-ink-muted">Saved</div>
          </div>
          <div class="bg-white p-3 rounded-2xl border border-stone-200/70 shadow-soft">
            <div class="text-base">🔖</div>
            <div class="text-xs font-bold text-ink mt-0.5">${this.bookmarks.length}</div>
            <div class="text-[9px] text-ink-muted">Marks</div>
          </div>
        </div>

        <!-- App Preferences -->
        <div class="bg-white rounded-2xl border border-stone-200/80 shadow-soft p-4 space-y-3">
          <h3 class="font-serif font-bold text-xs text-ink">Reader Preferences</h3>

          <div class="flex items-center justify-between text-xs py-1">
            <span class="text-ink-muted">Default Reading Theme</span>
            <span class="font-semibold text-gospel capitalize">${this.settings.theme.replace('theme-', '')}</span>
          </div>

          <div class="flex items-center justify-between text-xs py-1 border-t border-stone-100">
            <span class="text-ink-muted">Font Family</span>
            <span class="font-semibold text-ink">${this.settings.fontFamily === 'serif' ? 'Merriweather (Serif)' : 'Inter (Sans)'}</span>
          </div>

          <div class="flex items-center justify-between text-xs py-1 border-t border-stone-100">
            <span class="text-ink-muted">Text-to-Speech Engine</span>
            <span class="font-semibold text-emerald-600">${this.speechSynth ? 'Enabled (Web Speech)' : 'Disabled'}</span>
          </div>
        </div>

        <!-- Peace House & Gbile Akanni Ministry Information -->
        <div class="bg-paper-dark/60 rounded-2xl p-4 border border-stone-200/60 space-y-2 text-xs">
          <div class="flex items-center gap-2">
            <span class="text-gospel font-bold">🕊️</span>
            <h4 class="font-serif font-bold text-ink">About Living Seed / Peace House</h4>
          </div>
          <p class="text-ink-muted leading-relaxed">
            Bro. Gbile Akanni leads a non-denominational discipleship and revival movement rooted in Gboko, Benue State, Nigeria. 
            All his titles emphasize the inward transformational power of the Cross and total surrender to the Lordship of Jesus Christ.
          </p>
          <a href="https://peacehouse.org.ng" target="_blank" rel="noopener noreferrer" class="inline-block text-gospel font-semibold mt-1 hover:underline">
            Visit Peace House Official Website →
          </a>
        </div>

        <!-- Reset / Help Actions -->
        <div class="space-y-2 pt-1">
          <button id="replayOnboardingBtn" class="w-full bg-white border border-stone-200 hover:bg-stone-50 text-ink text-xs font-medium py-2.5 rounded-xl transition">
            View App Tour Again
          </button>
          <button id="resetDemoProgressBtn" class="w-full text-stone-400 hover:text-red-500 text-[11px] py-1 transition">
            Reset Demo Reading Progress
          </button>
        </div>

      </div>
    `;
  }

  attachProfileEvents() {
    const replayBtn = document.getElementById('replayOnboardingBtn');
    if (replayBtn) {
      replayBtn.addEventListener('click', () => {
        this.showOnboarding(true);
      });
    }

    const resetBtn = document.getElementById('resetDemoProgressBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Reset your saved reading progress?')) {
          this.progressData = {};
          this.saveJSON('gospel_progress', {});
          this.showToast('Reading progress reset', '🔄');
          this.render();
        }
      });
    }
  }
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', () => {
      window.gospelApp = new GospelBooksApp();
    });
  } else {
    window.gospelApp = new GospelBooksApp();
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GospelBooksApp, DEFAULT_BOOKS };
}