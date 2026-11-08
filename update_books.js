const fs = require('fs');
const path = require('path');

const booksData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'books.json'), 'utf8'));

// 1. Enforce Gospel Rule on Gbile Akanni books
booksData.books.forEach(b => {
  if (b.isGospelShelf) {
    b.hasFullContent = false;
    b.badge = 'GOSPEL';
    b.buyLink = b.buyLink || 'https://peacehouse.org.ng/books';
    b.chapters = [];
  }
});

// 2. Expand Classics with comprehensive, authentic chapters
const classicsUpdates = {
  'classic-practice-presence-of-god': [
    {
      id: 'ch1',
      title: 'Chapter 1: The Great Secret of Spiritual Peace',
      content: "Brother Lawrence was born Nicholas Herman in Lorraine. In his youth, as a footman and soldier, he was converted by the sight of a leafless tree in winter, which gave him a high view of the providence and power of God. Entering the Carmelite monastery in Paris as a lay brother, he was assigned to the monastery kitchen.\n\nHe stated that the foundation of the spiritual life was a high esteem and love for God through faith. When this was once well grounded, all other things became easy. We ought to give ourselves up to God in all things, both temporal and spiritual, seeking our satisfaction only in the fulfilling of His will.\n\nHe remarked that in the beginning of the spiritual life, we ought to be faithful in doing our duty and denying ourselves; but after a little while, love makes all duties delightful. The time of business does not differ with me from the time of prayer; and in the noise and clatter of my kitchen, while several persons are at the same time calling for different things, I possess God in as great tranquility as if I were upon my knees at the blessed sacrament."
    },
    {
      id: 'ch2',
      title: 'Chapter 2: The Business of Prayer Everywhere',
      content: "Brother Lawrence said that he had always been governed by love, without selfish views; and that having resolved to make the love of God the end of all his actions, he had found reasons to be well satisfied with his method.\n\nHe was pleased when he could take up a straw from the ground for the love of God, seeking Him alone, and nothing else, not even His gifts. We ought to act with God in the greatest simplicity, speaking to Him frankly and plainly, and imploring His assistance in our affairs just as they happen.\n\nGod never failed to grant it, as he had often experienced. He said our sanctification did not depend upon changing our works, but upon doing that for God's sake which we commonly do for ourselves. It was a great delusion to think that the time of prayer ought to be differenced from other times; we are as strictly obliged to adhere to God by action in the time of action, as by prayer in its season."
    },
    {
      id: 'ch3',
      title: 'Chapter 3: Walking in Simple Trust and Repentance',
      content: "He was very sensible of his faults, but not discouraged by them; he confessed them to God, but did not plead against Him to excuse them. When he had so done, he peaceably resumed his usual practice of love and adoration.\n\nHe said that useful thoughts would withdraw our minds if we were not vigilant; but as soon as we noticed our wandering, we should quietly return to the presence of God without agitation or self-condemnation.\n\nTrust in God honors Him. When we throw all our cares upon Him, He takes care of everything. God asks only for a willing heart, a humble spirit, and a sincere desire to please Him above all earthly ambitions."
    },
    {
      id: 'ch4',
      title: 'Chapter 4: In All Things to Please God Alone',
      content: "He said that the most excellent method he had found of going to God was that of doing our common business without any view of pleasing men, and purely for the love of God.\n\nIt was not necessary to have great things to do. I turn my little omelet in the frying pan for the love of God; and when that is done, if I have nothing else to do, I prostrate myself upon the ground, and adore my God, who gave me the grace to do it, after which I arise more contented than a king.\n\nWhen we have no other design but to love Him, and to seek Him alone, all difficulties vanish, and we find continuous peace in the midst of daily toil."
    },
    {
      id: 'ch5',
      title: 'Chapter 5: Letters of Spiritual Counsel',
      content: "You need not cry very loud; He is nearer to us than we are aware of. It is not necessary for being with God to be always at church; we may make an oratory of our heart wherein to retire from time to time, to converse with Him in meekness, humility, and love.\n\nLet us begin to be in earnest. The hours slip by so fast; let us not waste the precious moments given us to love our Creator. Let us live and die with Him.\n\nMay the grace of our Lord Jesus Christ continually support you, that you may walk with Him in uninterrupted communion, finding your joy only in His presence."
    }
  ],
  'classic-pilgrims-progress': [
    {
      id: 'ch1',
      title: 'Chapter 1: The City of Destruction and Evangelist',
      content: "As I walked through the wilderness of this world, I lighted on a certain place where was a den, and I laid me down in that place to sleep: and as I slept, I dreamed a dream. I dreamed, and behold, I saw a man clothed with rags, standing in a certain place, with his face from his own house, a book in his hand, and a great burden upon his back.\n\nI looked, and saw him open the book and read therein; and as he read, he wept, and trembled; and not being able longer to contain, he brake out with a lamentable cry, saying, 'What shall I do to be saved?'\n\nNow, as he was walking in the fields, weeping and crying out, behold, a man named Evangelist came to him, and asked, 'Wherefore dost thou cry?' He answered, 'Sir, I perceive by the book in my hand that I am condemned to die, and after that to come to judgment; and I am not willing to do the first, nor able to do the second.' Then said Evangelist, pointing with his finger over a very wide field, 'Do you see yonder Wicket-gate? Go up directly thereto: so shalt thou see what thou must do.'"
    },
    {
      id: 'ch2',
      title: 'Chapter 2: The Slough of Despond and the Wicket Gate',
      content: "Now, as Christian and his companion Pliable journeyed across the plain, they drew near to a very miry slough that was in the midst of the plain; and they, being heedless, did both fall suddenly into the bog. The name of the slough was Despond.\n\nHere, therefore, they wallowed for a time, being grievously bedaubed with dirt; and Christian, because of the burden that was upon his back, began to sink in the mire. At this Pliable began to be offended, and angrily said, 'Is this the happiness you have told me of all this while? If we have such ill speed at our first setting out, what may we look for between this and our journey's end?' And with that, he gave a desperate struggle or two, and got out of the mire on that side of the slough which was next to his own house: so away he went, and Christian saw him no more.\n\nWherefore Christian was left to tumble in the Slough of Despond alone; but still he endeavored to struggle to that side of the slough that was still further from his own house, and next to the Wicket-gate; the which he did, but could not get out, because of the burden that was upon his back: but I beheld in my dream, that a man came to him, whose name was Help, and asked him, 'What doest thou here?' Then Christian said, 'Sir, I was bid go this way by a man called Evangelist, who directed me also to yonder gate.' Then Help gave him his hand, and drew him out, and set him upon sound ground, and bid him go on his way."
    },
    {
      id: 'ch3',
      title: 'Chapter 3: The Cross, the Tomb, and the Burden',
      content: "Now I saw in my dream, that the highway up which Christian was to go, was fenced on either side with a wall, and that wall was called Salvation. Up this way, therefore, did burdened Christian run, but not without great difficulty, because of the load on his back.\n\nHe ran thus till he came at a place somewhat ascending, and upon that place stood a Cross, and a little below, in the bottom, a Sepulcher. So I saw in my dream, that just as Christian came up with the Cross, his burden loosed from off his shoulders, and fell from off his back, and began to tumble, and so continued to do, till it came to the mouth of the Sepulcher, where it fell in, and I saw it no more!\n\nThen was Christian glad and lightsome, and said with a merry heart, 'He hath given me rest by His sorrow, and life by His death.' Then he stood still awhile to look and wonder; for it was very surprising to him, that the sight of the Cross should thus ease him of his burden. He looked therefore, and looked again, even till the springs that were in his head sent the waters down his cheeks.\n\nNow, as he stood looking and weeping, behold three Shining Ones came to him and saluted him with 'Peace be to thee.' So the first said to him, 'Thy sins be forgiven thee'; the second stripped him of his rags, and clothed him with change of raiment; the third also set a mark on his forehead, and gave him a roll with a seal upon it, which he bid him look on as he ran, and that he should give it in at the Celestial Gate."
    },
    {
      id: 'ch4',
      title: 'Chapter 4: The Hill Difficulty and the Palace Beautiful',
      content: "I beheld, then, that they went on till they came to the foot of the Hill Difficulty; at the bottom of which was a spring. There were also in the same place two other ways besides that which came straight from the Gate; one turned to the left hand, and the other to the right, at the bottom of the hill; but the narrow way lay right up the hill, and the name of the going up the side of the hill is called Difficulty.\n\nChristian now went to the spring, and drank thereof to refresh himself, and then began to go up the hill, saying: 'This hill, though high, I covet to ascend; the difficulty will not me offend; for I perceive the way to life lies here: come, pluck up, heart, let's neither faint nor fear!'\n\nAt the top of the hill stood a stately palace, the name of which was Beautiful, built by the Lord of the hill for the relief and security of pilgrims. There he was welcomed by Discretion, Prudence, Piety, and Charity, who refreshed his weary soul and showed him the wonders of the kingdom, arming him from head to foot with armor of proof to shield him in the battles ahead."
    },
    {
      id: 'ch5',
      title: 'Chapter 5: The Celestial City and the Golden Gates',
      content: "Now, while they were drawing towards the gate, behold a company of the heavenly host came out to meet them: to whom it was said by the other two Shining Ones, 'These are the men that have loved our Lord when they were in the world, and that have left all for His holy name; and He hath sent us to fetch them, and we have brought them thus far on their desired journey, that they may go in and look their Redeemer in the face with joy.'\n\nThere came out also to meet them several of the King's trumpeters, clothed in white and shining raiment, who, with melodious noises and loud, made even the heavens to echo with their sound. These trumpeters saluted Christian and his fellow with ten thousand welcomes from the world; and this they did with shouting, and sound of trumpet.\n\nNow, just as the gates were opened to let in the men, I looked in after them, and behold, the city shone like the sun; the streets also were paved with gold, and in them walked many men, with crowns on their heads, palms in their hands, and golden harps to sing praises withal. And after that they shut up the gates; which, when I had seen, I wished myself among them."
    }
  ],
  'classic-humility': [
    {
      id: 'ch1',
      title: 'Chapter 1: Humility — The Glory of the Creature',
      content: "When God created the universe, it was with the one objective of making the creature partaker of His perfection and blessedness, and so showing forth in it the glory of His love, wisdom, and power. God wished to communicate Himself to and in the creature.\n\nAnd to this end the creature had to be endowed with the capacity of receiving Him. The chief virtue of a creature is to be empty of self, so that God may be all in all. Humility is simply the sense of entire dependence upon God, which comes from the knowledge that God is everything, and that all we have and are is received from Him.\n\nPride, or the loss of this humility, is the cause of every sin and misfortune. When the angels fell, it was because they began to look upon themselves with complacency, wishing to be independent of God. Humility is not a grace among other graces; it is the root of the whole, because it alone takes the right attitude before God and allows Him as God to do all."
    },
    {
      id: 'ch2',
      title: 'Chapter 2: Humility in the Life and Example of Jesus',
      content: "'Take My yoke upon you, and learn of Me; for I am meek and lowly in heart: and ye shall find rest unto your souls.' In Jesus we see humility personified.\n\nHe said repeatedly: 'The Son can do nothing of Himself; but what He seeth the Father do: for what things soever He doeth, these also doeth the Son likewise.' 'My doctrine is not Mine, but His that sent Me.' 'I seek not Mine own will, but the will of the Father which hath sent Me.'\n\nHis whole life was one of continuous, unbroken yieldedness to the Father. He did not seek His own honor, nor His own will, but the honor and will of the One who sent Him. If Christ was humble, how much more must the disciple who bears His name walk in lowliness of heart!"
    },
    {
      id: 'ch3',
      title: 'Chapter 3: Humility in the Teaching of Christ',
      content: "We have only to open the Gospels to see how our Lord insisted on humility as the essential mark of kingdom citizenship. 'Blessed are the poor in spirit: for theirs is the kingdom of heaven.' 'Whosoever therefore shall humble himself as this little child, the same is greatest in the kingdom of heaven.'\n\nWhen the disciples disputed who among them should be the greatest, Jesus took a towel and a basin of water and washed their feet. 'If I then, your Lord and Master, have washed your feet; ye also ought to wash one another's feet.'\n\nTrue spiritual greatness is never measured by authority over others, but by willingness to serve the humblest saint in self-forgetful love."
    },
    {
      id: 'ch4',
      title: 'Chapter 4: Humility and Daily Holiness',
      content: "Humility is the only soil in which the graces of the Spirit can flourish. The lack of humility is the sufficient explanation of every defect and failure in Christian living.\n\nHumility is tested not in our religious exercises before God, but in our daily intercourse with our fellow men. The humble man feels no jealousy when others are preferred before him; he bears misunderstandings and reproaches without retaliating.\n\nHe has learned the holy secret: to count himself as nothing, that Christ may be everything."
    },
    {
      id: 'ch5',
      title: 'Chapter 5: Humility and Death to Self',
      content: "Humility is the path to death, because in death it gives the highest, the ultimate proof of its reality. Humility is the blossom of which death to self is the perfect fruit.\n\nJesus humbled Himself, and became obedient unto death, even the death of the cross. Wherefore God also hath highly exalted Him. We can only enter into the power of Christ's resurrection when we enter into the fellowship of His death.\n\nDie to your reputation, die to your rights, die to your ambition. In that blessed death of self, the peace of God which passes all understanding takes eternal possession of the soul."
    }
  ],
  'classic-normal-christian-life': [
    {
      id: 'ch1',
      title: 'Chapter 1: The Blood of Christ and the Cross',
      content: "What is the normal Christian life? We do well at the outset to face this question. The objective of these studies is to show that it is something very different from the life of the average Christian.\n\nIndeed, when we contemplate the life of the normal Christian as revealed in the Word of God, we find that it is nothing less than the life of Christ Himself reproduced in human beings through the Holy Spirit.\n\nThe Blood of Christ deals with what we have done, whereas the Cross of Christ deals with what we are. The Blood clears away our sins and secures forgiveness before the righteousness of God; while the Cross strikes at the root of our sinful nature—our old man—and delivers us from the power of sin."
    },
    {
      id: 'ch2',
      title: 'Chapter 2: The Path of Progress: Knowing the Crucified Self',
      content: "Romans 6:6 declares: 'Knowing this, that our old man is crucified with Him, that the body of sin might be destroyed, that henceforth we should not serve sin.'\n\nNotice the tense: 'is crucified.' It is an accomplished fact of divine history. When Jesus Christ died upon the cross, God included us in Him. We were not merely spectators; in the divine reckoning, we were there upon that cross in Christ.\n\nYou cannot crucify yourself. If a man attempts suicide, he may use a sword, poison, or fire, but he cannot crucify himself; someone else must drive the nails. God has already done it. Our starting point in spiritual victory is not trying to die, but knowing that in Christ we have already died."
    },
    {
      id: 'ch3',
      title: 'Chapter 3: The Path of Progress: Reckoning Ourselves Dead',
      content: "'Likewise reckon ye also yourselves to be dead indeed unto sin, but alive unto God through Jesus Christ our Lord' (Romans 6:11).\n\nTo reckon does not mean to pretend or imagine. In accounting, reckoning is entering into the ledger what has actually transpired in the bank. When God says you died with Christ, faith says: 'Lord, I believe Your Word. I reckon myself dead unto sin.'\n\nWhen temptation knocks, do not argue with the flesh or struggle in your own strength. Stand upon God's ledger: 'In Christ, I am dead to this impulse. My life is now hidden with Christ in God.'"
    },
    {
      id: 'ch4',
      title: 'Chapter 4: The Path of Progress: Presenting Unto God',
      content: "'Neither yield ye your members as instruments of unrighteousness unto sin: but yield yourselves unto God, as those that are alive from the dead' (Romans 6:13).\n\nConsecration is not offering our natural strength or carnal talents to God; it is presenting ourselves unto God as those who are alive from the dead. Only resurrection life is acceptable on God's altar.\n\nWhen we lay our hands, eyes, mind, and affections at the feet of the Lord Jesus, He takes full possession. The Holy Spirit becomes the divine administrator of our daily walk."
    },
    {
      id: 'ch5',
      title: 'Chapter 5: Walking According to the Spirit',
      content: "'For the law of the Spirit of life in Christ Jesus hath made me free from the law of sin and death' (Romans 8:2).\n\nThe law of sin and death works continuously like gravity, dragging the natural man downward. But the law of the Spirit of life is like the law of aerodynamics, lifting the believer above the pull of earth.\n\nWe do not conquer sin by our own willpower; we overcome by yielding to the living Christ within. Not I, but Christ liveth in me. That is the simplicity and glory of the normal Christian life."
    }
  ]
};

// Apply updates to the 4 classics
booksData.books.forEach(b => {
  if (classicsUpdates[b.id]) {
    b.chapters = classicsUpdates[b.id];
    b.hasFullContent = true;
    b.badge = 'FULL READER';
  }
});

// Write to data/books.json
fs.writeFileSync(path.join(__dirname, 'data', 'books.json'), JSON.stringify(booksData, null, 2), 'utf8');

// Also update src/data/books.json
const srcPath = path.join(__dirname, 'src', 'data', 'books.json');
if (fs.existsSync(path.dirname(srcPath))) {
  fs.writeFileSync(srcPath, JSON.stringify(booksData, null, 2), 'utf8');
}

console.log('Successfully updated data/books.json and src/data/books.json!');

