/**
 * Helper to map personality ID to ensure consistency
 */

/**
 * 15 questions, each with 10 answers.
 * Each answer maps to a personality id.
 *
 * Structure:
 * {
 *   id: "q1",
 *   text: "Question text",
 *   answers: [
 *     { text: "Answer text", value: "leader" }
 *   ]
 * }
 */

export const QUESTIONS = [
  {
    id: "q1",
    text: "What would you rather do in your spare time?",
    answers: [
      {
        text: "Bake all kinds of delicious sweets",
        value: "luv",
      },
      { text: "Sing inspirational songs", value: "faeth" },
      { text: "Read voraciously", value: "fait" },
      {
        text: "Swim or walk in the rain",
        value: "treuth",
      },
      { text: "Spend time with my special person", value: "manus" },
      { text: "Workout", value: "hoep" },
      { text: "Scheme and plot", value: "nyxxa" },
      {
        text: "Soak in a perfume bath",
        value: "justas",
      },
      { text: "Mope in solitude", value: "deth" },
      {
        text: "Relax with family and friends",
        value: "prometheia",
      },
      {
        text: "Dance under the moonlight",
        value: "amandas",
      },
    ],
  },

  {
    id: "q2",
    text: "Out of the choices below which job would you prefer?",
    answers: [
      { text: "Judge", value: "justas" },
      { text: "CEO", value: "fait" },
      { text: "Relationship counselor", value: "luv" },
      { text: "Undertaker", value: "deth" },
      { text: "Guru", value: "treuth" },
      { text: "Dictator", value: "nyxxa" },
      { text: "Farmer", value: "manus" },
      { text: "Home business owner", value: "amandas" },
      { text: "Fitness instructor", value: "hoep" },
      { text: "Spiritual healer", value: "faeth" },
      { text: "Advocate", value: "prometheia" },
    ],
  },

  {
    id: "q3",
    text: "How would you approach a problem facing your community?",
    answers: [
      { text: "Use it to my advantage", value: "nyxxa" },
      { text: "Work out a crafty go around", value: "prometheia" },
      { text: "Sleep on it", value: "manus" },
      { text: "Stay out of it", value: "amandas" },
      { text: "Work to solve it", value: "treuth" },
      { text: "Find someone else to handle it", value: "deth" },
      {
        text: "Sing and pray",
        value: "faeth",
      },
      { text: "Take it by the throat and beat it", value: "hoep" },
      { text: "Find a fair and balanced solution", value: "justas" },
      { text: "Trust in Eternity and leave it to love", value: "luv" },
      { text: "Keep it under control with a firm grip", value: "fait" },
    ],
  },

  {
    id: "q4",
    text: "Which of these words best defines you?",
    answers: [
      { text: "Loving", value: "luv" },
      { text: "Mystical", value: "faeth" },
      { text: "Loyal", value: "manus" },
      { text: "Strong", value: "hoep" },
      { text: "Dictatorial", value: "nyxxa" },
      { text: "Morbid", value: "deth" },
      { text: "Foxy", value: "prometheia" },
      { text: "Enigmatic", value: "fait" },
      { text: "Truthful", value: "treuth" },
      { text: "Fair", value: "justas" },
      { text: "Otherworldly", value: "amandas" },
    ],
  },

  {
    id: "q5",
    text: "Which coffee best describes you overall?",
    answers: [
      { text: "Dark and bold macchiato", value: "fait" },
      { text: "Caramel latte", value: "faeth" },
      { text: "Sweet with tons of whip", value: "luv" },
      { text: "Spicy with a sprinkling of cinnamon", value: "prometheia" },
      { text: "Espresso", value: "hoep" },
      { text: "Balanced coffee", value: "justas" },
      { text: "Floral and aromatic", value: "amandas" },
      { text: "Earthy", value: "manus" },
      { text: "Apple spice", value: "treuth" },
      { text: "Black", value: "deth" },
      { text: "Ice coffee", value: "nyxxa" },
    ],
  },

  {
    id: "q6",
    text: "What colors would you prefer to wear of the following choices?",
    answers: [
      { text: "Dreamy colors or any shade of green", value: "prometheia" },
      { text: "Silvers and whites", value: "faeth" },
      { text: "Gray and true blue", value: "justas" },
      { text: "Misty but sparkling and lavender", value: "amandas" },
      { text: "White", value: "deth" },
      { text: "Earthen tones", value: "manus" },
      { text: "Reds and soft pinks", value: "luv" },
      { text: "Storm grays and black", value: "fait" },
      { text: "Royal blue and dark, rich colors", value: "hoep" },
      { text: "Black and midnight blue", value: "nyxxa" },
      {
        text: "I don't care what the color is as long as it's comfortable",
        value: "treuth",
      },
    ],
  },

  {
    id: "q7",
    text: "In a novel, which type of character do you relate to the most?",
    answers: [
      { text: "The fair mediator", value: "justas" },
      { text: "The villain", value: "nyxxa" },
      { text: "A free-spirited, champion defender", value: "prometheia" },
      { text: "The Everyman", value: "manus" },
      { text: "The maternal type", value: "luv" },
      { text: "The devoted, self-sacrificing lover", value: "amandas" },
      { text: "The misunderstood hero", value: "fait" },
      { text: "The guardian angel", value: "treuth" },
      { text: "A fearless warrior", value: "hoep" },
      { text: "One who inspires others", value: "faeth" },
      { text: "The Underdog", value: "deth" },
    ],
  },

  {
    id: "q8",
    text: "Who would you be at a party?",
    answers: [
      { text: "The Helper", value: "treuth" },
      { text: "Hostess/Host", value: "fait" },
      { text: "The Wallflower", value: "amandas" },
      { text: "The Observer", value: "justas" },
      { text: "The Follower", value: "manus" },
      { text: "The Singer", value: "faeth" },
      { text: "The Listener", value: "luv" },
      { text: "The Party Crasher", value: "nyxxa" },
      { text: "The Belle/Beau of the Ball", value: "prometheia" },
      { text: "The Designated Driver", value: "hoep" },
      { text: "The Party Pooper", value: "deth" },
    ],
  },

  {
    id: "q9",
    text: "Your reading choices lean towards...",
    answers: [
      { text: "Psychology", value: "treuth" },
      { text: "The eclectic and varied", value: "fait" },
      { text: "Cozy romance novels", value: "luv" },
      { text: "Romantasy", value: "prometheia" },
      { text: "Fitness books", value: "hoep" },
      { text: "Homesteading manuals", value: "manus" },
      { text: "Home and garden", value: "amandas" },
      { text: "Gothic novels", value: "deth" },
      { text: "Inspirational", value: "faeth" },
      { text: "Books on power", value: "nyxxa" },
      { text: "Law books", value: "justas" },
    ],
  },

  {
    id: "q10",
    text: "What is the most important to you?",
    answers: [
      { text: "Balance", value: "justas" },
      { text: "A partner", value: "manus" },
      { text: "Free choice", value: "prometheia" },
      { text: "Protecting those I love", value: "fait" },
      { text: "Universal love", value: "luv" },
      { text: "Devotion to my partner", value: "amandas" },
      { text: "Remaining strong for those who depend on me", value: "hoep" },
      { text: "Power", value: "nyxxa" },
      { text: "True love", value: "deth" },
      { text: "Standing by the suffering", value: "faeth" },
      { text: "Truth", value: "treuth" },
    ],
  },

  {
    id: "q11",
    text: "How do you react to someone you are attracted to?",
    answers: [
      {
        text: "I don't waste any time in approaching them directly",
        value: "manus",
      },
      { text: "Express my feelings openly", value: "treuth" },
      {
        text: "Flirtatious repartee then challenge and retreat",
        value: "prometheia",
      },
      {
        text: "Standoffish at first, then employ charming banter",
        value: "fait",
      },
      {
        text: "Overwhelmed at first, then I regroup and encourage",
        value: "nyxxa",
      },
      {
        text: "Lightly flirty, but I let the other lead",
        value: "faeth",
      },
      { text: "Warm and welcoming", value: "luv" },
      { text: "Talk and get to know them", value: "hoep" },
      { text: "I showoff and pursue", value: "deth" },
      { text: "Avoid my feelings", value: "justas" },
      { text: "Reticent and shyly encouraging", value: "amandas" },
    ],
  },

  {
    id: "q12",
    text: "Which of these would be your most ideal home environment?",
    answers: [
      { text: "Anywhere I can rule", value: "nyxxa" },
      { text: "Wherever my lover wants to live", value: "amandas" },
      { text: "Farmhouse with lots of acreage", value: "manus" },
      { text: "Mountains and creek-cut canyons", value: "fait" },
      { text: "A cozy cottage at the edge of the woods", value: "luv" },
      {
        text: "Somewhere rainy with hills, apple orchards, and sea access",
        value: "treuth",
      },
      { text: "Harmonious, balanced, and elegant", value: "justas" },
      {
        text: "A fortress with lush gardens and expansive verandas",
        value: "hoep",
      },
      {
        text: "Anywhere high or low as long as my family is there",
        value: "faeth",
      },
      {
        text: "A place of solitude with my lover",
        value: "deth",
      },
      {
        text: "A family home surrounded by woodlands, creeks, and meadows",
        value: "prometheia",
      },
    ],
  },

  {
    id: "q13",
    text: "People might label you as",
    answers: [
      { text: "The clever one", value: "prometheia" },
      { text: "The mysterious one", value: "fait" },
      { text: "The sweet one", value: "luv" },
      { text: "The innocent one", value: "faeth" },
      { text: "The strong one", value: "hoep" },
      { text: "The cold one", value: "nyxxa" },
      { text: "The loyal one", value: "manus" },
      { text: "The devoted one", value: "amandas" },
      { text: "The gloomy one", value: "deth" },
      { text: "The truthful one", value: "treuth" },
      { text: "The fair one", value: "justas" },
    ],
  },

  {
    id: "q14",
    text: "What do people most often come to you for?",
    answers: [
      { text: "Relief from suffering", value: "deth" },
      {
        text: "A shoulder to cry on and genuine emotional support",
        value: "luv",
      },
      { text: "Creative solutions", value: "prometheia" },
      { text: "Problem resolution and burden removal", value: "fait" },
      { text: "Empathetic guidance and truthful insights", value: "treuth" },
      { text: "Healing and strength", value: "hoep" },
      { text: "Fair and balanced decisions", value: "justas" },
      { text: "Spiritual support", value: "faeth" },
      { text: "Loyal friendship", value: "manus" },
      { text: "People don't come to me", value: "amandas" },
      { text: "Power deals", value: "nyxxa" },
    ],
  },

  {
    id: "q15",
    text: "Pick the vacation that sounds the best to you.",
    answers: [
      {
        text: "Taking my beloved away to an enchanted retreat",
        value: "fait",
      },
      {
        text: "Anything my love chooses will make me happy",
        value: "amandas",
      },
      {
        text: "I wouldn't waste my time",
        value: "nyxxa",
      },
      {
        text: "Somewhere rainy or by the ocean",
        value: "treuth",
      },
      {
        text: "Going horseback riding, picnicking, and spending time in my lover's arms",
        value: "prometheia",
      },
      {
        text: "I would rather just stay at home and kick back",
        value: "manus",
      },
      { text: "Trekking through the mountains or cycling", value: "hoep" },
      { text: "Anywhere cozy with friends and family", value: "luv" },
      {
        text: "A health spa",
        value: "justas",
      },
      {
        text: "Strolling in moonlit gardens anywhere while hand-in-hand with my lover",
        value: "faeth",
      },
      {
        text: "Somewhere with long nights filled with stars",
        value: "deth",
      },
    ],
  },

  {
    id: "q16",
    text: "Choose the words that best describe your most prominent character qualities.",
    answers: [
      {
        text: "Loyal, caring, and supportive",
        value: "manus",
      },
      {
        text: "Creative, spirited, and kindly",
        value: "prometheia",
      },
      {
        text: "Enigmatic, responsible, and charming",
        value: "fait",
      },
      {
        text: "Loving, sweet, and highly empathetic",
        value: "luv",
      },
      {
        text: "Sensitive, sympathetic, and mystical",
        value: "faeth",
      },
      {
        text: "Strong, robust, and resilient",
        value: "hoep",
      },
      { text: "Gloomy, maudlin, and sensitive", value: "deth" },
      { text: "Cold, power-hungry, and hysterical", value: "nyxxa" },
      {
        text: "Honest, compassionate, and helpful",
        value: "treuth",
      },
      {
        text: "Balanced, fair, and aloof",
        value: "justas",
      },
    ],
  },
];
