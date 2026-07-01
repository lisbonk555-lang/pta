import { Objective, GalleryImage, Program, Patron } from './types';

export const CORE_OBJECTIVES: Objective[] = [
  {
    id: 1,
    title: "Honor Freedom Fighters",
    description: "Build a Peace Tower in Ghana in memory of the freedom fighters."
  },
  {
    id: 2,
    title: "Sovereign Atmosphere for Investors",
    description: "To build a Peaceful atmosphere for investors in Ghana."
  },
  {
    id: 3,
    title: "Youth Desistance from Factions",
    description: "Encourage youth to desist from conflicts and wars to maintain Peace."
  },
  {
    id: 4,
    title: "Academic Platform for Peace Studies",
    description: "Create platform where people will visit to study about peace."
  },
  {
    id: 5,
    title: "Africa Investment Center",
    description: "Offer Africa Investment Center office."
  },
  {
    id: 6,
    title: "Settle Conflicts",
    description: "Offer nations and regions the opportunity to settle their conflicts in the Peace Tower."
  },
  {
    id: 7,
    title: "Embrace Continental Peace",
    description: "Enhancing and influencing our continent to embrace Peace to attract investors."
  },
  {
    id: 8,
    title: "Create Youth Employment",
    description: "Creating jobs for the youths so they would stop migrating to seek greener pasture outside Africa."
  }
];

export const PROGRAMS: Program[] = [
  {
    id: "tribunal",
    title: "African Hague-Equivalent Tribunal",
    subtitle: "Traditional Dispute Resolution Center",
    description: "A prestigious verbal-arbitration court structured specifically to resolve tribal, chieftaincy, and land disputes in an intelligent, culturally respected manner. Officially ratified by the chiefs and kings of Africa in active consultation with the Ghana Bar Association.",
    objectives: [
      "Traditional tribal & land boundary arbitration",
      "ECOWAS region pilot expanding to continental scale",
      "Elder-led verbal mediation completely resolving conflicts",
      "Official legal structuring under the Ghana Bar Association support"
    ],
    keyEventCode: "TRIBUNAL_COUNCIL",
    bannerImageIndex: 12
  },
  {
    id: "legends",
    title: "African Living Legends Awards",
    subtitle: "Festival & Diaspora Homecoming",
    description: "A paramount annual summit celebrating extraordinary pioneers of African descent. Originating with historic launches (such as Sowutoum 2018 & 2019), it serves as a magnetic bridge connecting the global African Diaspora back to their home heritage.",
    objectives: [
      "Honoring historical peace promoters and social builders",
      "Bridging Diaspora relationships and cultural integration",
      "Establishing permanent economic business partnerships",
      "Annual grand festivals featuring royal customary representations"
    ],
    keyEventCode: "AFRICAN_LEGENDS",
    bannerImageIndex: 1
  },
  {
    id: "thank_you_ghana",
    title: "Thank You Ghana Awards",
    subtitle: "Honoring Champions of Peace & Prosperity",
    description: "An elite official program dedicated to recognizing and celebrating the profound leaders, peace advocates, and institutions that enable the stable, prosperous climate enjoyed by Ghanaian and African citizens.",
    objectives: [
      "State-level recognition for outstanding peaceful service",
      "Inter-faith alliance honoring both Christian & Muslim leaders",
      "Corporate awards reinforcing business security and investment stability",
      "Endorsement by the President, national diplomats, and global embassies"
    ],
    keyEventCode: "THANK_YOU_GHANA",
    bannerImageIndex: 4
  }
];

export const NOBLE_PATRONS: Patron[] = [
  {
    id: "imam",
    name: "Sheikh Dr. Osmanu Nuhu Sharubutu",
    title: "National Chief Imam of Ghana & Lifetime Patron",
    achievements: [
      "Paramount peace promoter in West Africa",
      "Official spiritual leader and core lifetime patron of Peace Tower of Africa",
      "Fostered deep interfaith harmony between Christian and Muslim communities",
      "Spearheaded international peaceful advocacy panels"
    ],
    imageIndex: 10,
    imageUrl: "https://cdn.modernghana.com/images/content/423201925559_l5hsk8v331_8ee03896c2414314b0bdc0e66f022e4f.jpeg"
  },
  {
    id: "kwesi_atta",
    name: "Osabarimba Kwesi Atta II",
    title: "Oguaa Omanhen (Paramount Ruler of Cape Coast)",
    achievements: [
      "Key founding pioneer and champion of the Peace Tower initiative",
      "Spearheaded regional tribal councils and ECOWAS traditional resolution projects",
      "Presented the Peace Tower blueprints to national state leadership",
      "Host of state-level launching ceremonies at the Banquet Hall in Accra"
    ],
    imageIndex: 13,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToysYm_q4KaWAyaoCZgkYJeSXTL9MbzYu-Jw&s"
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    index: 0,
    filename: "image_0.png",
    title: "Official Triangle Seal",
    category: "ROYAL",
    description: "The official emblem depicting the Peace Tower of Africa (PTA) handshake banner. Symbolizes mutual respect, sovereign mediation, and absolute containment of conflict through traditional compromise.",
    tagline: "Sovereign Emblem"
  },
  {
    index: 1,
    filename: "image_1.png",
    title: "African Living Legend Festival 2019 Banner",
    category: "EVENTS",
    description: "The historic public flyer featuring chief patrons Sheikh Dr. Osmanu Nuhu Sharubutu, Apostle Dr. Kwadwo Safo, and Victor B. Lawrence under the National Peace Council and Great Corner Stone Foundation coordination.",
    tagline: "Homecoming 2019"
  },
  {
    index: 2,
    filename: "image_2.png",
    title: "Chief Imam Islamic Delegation Assembly",
    category: "ROYAL",
    description: "His Eminence Sheikh Dr. Osmanu Nuhu Sharubutu surrounded by international media and delegates, representing Islamic community pillars as a vital anchor of Peace Tower state mediation.",
    tagline: "Eminence Council"
  },
  {
    index: 3,
    filename: "image_3.png",
    title: "Royal Media Broadcast Interview",
    category: "ROYAL",
    description: "A highly respected Ghanaian chieftain speaking to independent documentary crews, outlining traditional leadership's role in the ECOWAS Hague tribunal model.",
    tagline: "Royal Voice"
  },
  {
    index: 4,
    filename: "image_4.png",
    title: "Banquet Hall Sketch Launch Invitation",
    category: "EVENTS",
    description: "The 2016 original presidential invitation for the African Peace Tower Arch Sketch Launch at Banquet Hall in Accra, co-convoked by the Paramount Cape Coast Council.",
    tagline: "Historic Launch"
  },
  {
    index: 5,
    filename: "image_5.png",
    title: "Chieftain Fist of National Unity",
    category: "ROYAL",
    description: "An esteemed Paramount Chief raising his fist in traditional gold-beaded headband and glorious gold-adorned Kente attire, symbolizing absolute solidarity of traditional rulers.",
    tagline: "Sovereign Unity"
  },
  {
    index: 6,
    filename: "image_6.png",
    title: "Traditional Keynote Proclamation Desk",
    category: "ROYAL",
    description: "Estemmed traditional king in golden crown delivering the peace oath to state and tribal delegations at the 2016 summit.",
    tagline: "Peace Proclamation"
  },
  {
    index: 7,
    filename: "image_7.png",
    title: "Sovereign Queen Mother & Council Seat",
    category: "ROYAL",
    description: "Esteemed Queen Mother sitting in state in colorful custom Kente alongside traditional security, exemplifying royal matriarchal influence on dispute containment.",
    tagline: "Matriarch Bench"
  },
  {
    index: 8,
    filename: "image_8.png",
    title: "Priesthood and Customary Handclasp",
    category: "ROYAL",
    description: "Ghanaian Chief and elders gathered under traditional crown, applauding inter-faith agreements between traditional councils and state departments.",
    tagline: "Traditional Sanctum"
  },
  {
    index: 9,
    filename: "image_9.png",
    title: "Declaration Scroll Presentation Ceremony",
    category: "ROYAL",
    description: "Rulers of Cape Coast delivering official written agreements to young representatives at the Sowutoum Peace conference.",
    tagline: "Scroll Devolution"
  },
  {
    index: 10,
    filename: "image_10.png",
    title: "National Chief Imam Portrait of Wisdom",
    category: "ROYAL",
    description: "Sheikh Osamu Nuhu Sharubutu seated inside the peace sanctum, wearing white clerical turban, representing ninety years of unified peacemaking in Ghana.",
    tagline: "Imam Sanctum"
  },
  {
    index: 11,
    filename: "image_11.png",
    title: "Diplomatic Academic Keynote Address",
    category: "EVENTS",
    description: "Global Trade Network representative presenting on the strategic link between absolute communal peace and multinational business investment in West Africa.",
    tagline: "Economic Discourse"
  },
  {
    index: 12,
    filename: "image_12.png",
    title: "Grand Chieftaincy Council Chamber Assembly",
    category: "ROYAL",
    description: "Historic wide shot inside the main assembly hall with dozens of crowned kings, Christian leaders, and Muslim clerics aligned side-by-side for peace building.",
    tagline: "Conclave of Kings"
  },
  {
    index: 13,
    filename: "image_13.png",
    title: "Osabarimba Kwesi Atta II Lectern Proclamation",
    category: "ROYAL",
    description: "Paramount King Osabarimba Kwesi Atta II delivering the official closing address, reinforcing the traditional Hague tribunal project to safehouse corporate investment.",
    tagline: "Royal Proclamation"
  },
  {
    index: 14,
    filename: "image_14.png",
    title: "Paramount Living Legends Launching Desk",
    category: "EVENTS",
    description: "The primary assembly panel at Maranatha University featuring high traditional coordinators, World Peace Volunteers, and Great Corner Stone directors.",
    tagline: "Pioneer panel"
  },
  {
    index: 15,
    filename: "image_15.png",
    title: "Historic Peace Tower Joint Delegation Photo",
    category: "ROYAL",
    description: "The crowning group picture of Africa's traditional kings and international emissaries uniting to proclaim the 'Ghana Sell Peace Now' manifesto.",
    tagline: "Legacy Assembly"
  },
  {
    index: 16,
    filename: "image_16.png",
    title: "Objectives & Targeted Audience Note",
    category: "DOCUMENTS",
    description: "The official printed manifest detailing the eight major project objectives, target audience requirements of 5,000 regional delegates, and conflict management tribunal blueprints.",
    tagline: "Strategic Charter"
  },
  {
    index: 17,
    filename: "image_17.png",
    title: "Introduction and Campaign Charter Note",
    category: "DOCUMENTS",
    description: "The official project document introducing core pioneers: Osabarimba Kwesi Atta II, Nii Kojo Mensah I, Tawia Nkrumah Hemans, and outlining the grand banquet hall fundraising campaigns.",
    tagline: "Founders Charter"
  },
  {
    index: 18,
    filename: "image_18.png",
    title: "Maranatha Rural Bank Award Ceremony",
    category: "BANQUETS",
    description: "Distinguished Banker receiving the prestigious Peace-Partner Award plaque, symbolizing economic integration with local trade institutions.",
    tagline: "Chamber Partner"
  },
  {
    index: 19,
    filename: "image_19.png",
    title: "Ambassadors & Dignitaries Banquet Row",
    category: "BANQUETS",
    description: "Esteemed societal advocates and women delegates seated at the grand launching dinner inside the Banquet Hall in Accra.",
    tagline: "Banquet Seats"
  },
  {
    index: 20,
    filename: "image_20.png",
    title: "Business Summit Dinner Roundtable",
    category: "BANQUETS",
    description: "Corporate executives and trade diplomats consulting during the banquet fundraiser, building corporate job networks for internal youth.",
    tagline: "Summit Table"
  }
];

export const CONTACT_NUMBERS = [
  "+233 (0) 547 464 212",
  "+233 (0) 577 999 645"
];

export const RSVP_NUMBERS = [
  "0200 411830",
  "0573 744 909"
];

export const CONTACT_EMAIL = "peacetowerofafrica1@gmail.com";
export const TWITTER_HANDLE = "@PEACETOWER_AFRICA";
export const HASHTAG = "#CHIEFMAMA100";
export const VENUE_INFO = "Banquet Hall, Accra, Ghana / Maranatha Univ. College, Sowutoum";
export const NGO_REGISTRATION = "Peace Tower of Africa (NGO) in collaboration with Global Trade Network International";
export const PATRON_LIST = "Osabarimba Kwesi Atta II, Nii Kojo Mensah I, Bishop Dr. Abban, Tawia Nkrumah Hemans (Peace Icon), Sheikh Dr. Osmanu Nuhu Sharubutu";
