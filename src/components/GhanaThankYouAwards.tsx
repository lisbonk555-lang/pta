import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  History, 
  Calendar, 
  Building, 
  Users, 
  Flame, 
  Globe, 
  Layers, 
  Car, 
  Droplet, 
  MapPin, 
  ChevronRight, 
  Heart, 
  Search, 
  Download, 
  Printer, 
  ArrowUpRight, 
  Check, 
  BookOpen, 
  Sparkles, 
  Phone, 
  Mail, 
  User, 
  UserCheck, 
  Compass, 
  FileText, 
  LayoutGrid, 
  Share2, 
  Image as ImageIcon
} from 'lucide-react';

// Reusing image paths definitions exactly corresponding to the attached booklet images
import { SLIDER_IMAGE_PATHS } from './SlidingGallery';
import { GALLERY_IMAGES } from '../data';

// Custom AutoFallbackImage for this section to keep it resilient
function SectionImage({ index, alt, className }: { index: number; alt: string; className: string }) {
  const [pathIndex, setPathIndex] = useState(0);

  const sourceOptions = [
    SLIDER_IMAGE_PATHS[index],
    `/assets/input_file_${index}.png`,
    `/assets/input_file_${index}.jpg`,
    `https://picsum.photos/seed/gtya${index}/800/600`
  ];

  return (
    <img
      src={sourceOptions[pathIndex]}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      onError={() => {
        if (pathIndex < sourceOptions.length - 1) {
          setPathIndex(prev => prev + 1);
        }
      }}
    />
  );
}

// 29 Nominees of GTYA 9th Edition 2026 compiled accurately from pages 7, 11, 12, 13, 14
const GTYA_NOMINEES = [
  {
    name: "PROF. NAANA JANE OPOKU-AGYEMANG",
    role: "Vice Presidential Candidate, Academic Elder",
    category: "state" as const,
    bio: "Pioneering academic and former Minister for Education, recognized for supreme service to national literacy and female educational empowerment.",
    badge: "Appreciation Awards"
  },
  {
    name: "H.E. LORDINA MAHAMA",
    role: "Former First Lady of the Republic of Ghana",
    category: "state" as const,
    bio: "Distinguished humanitarian championing health, orphan support, and women empowerment initiatives via the Lordina Foundation.",
    badge: "Appreciation Awards"
  },
  {
    name: "H.E. KHADIJA IDDRISU",
    role: "Chief Director, Ministry of Foreign Affairs",
    category: "state" as const,
    bio: "Eminent diplomat maintaining sovereign boundary integrity and bridging international bilateral relationships.",
    badge: "Appreciation Awards"
  },
  {
    name: "HRH LADY JULIA OSEI TUTU",
    role: "Patron, Otumfuo Osei Tutu Charity Foundation",
    category: "royal" as const,
    bio: "Sovereign noble mother leading immense educational expansion and clean water accessibility across rural communities.",
    badge: "Appreciation Awards"
  },
  {
    name: "JSC SOPHIA A. B. AKUFFO",
    role: "Former Chief Justice of the Republic of Ghana",
    category: "state" as const,
    bio: "Renowned legal pillar dedicated to unyielding constitutional rule and integrity in West African jurisprudence.",
    badge: "Appreciation Awards"
  },
  {
    name: "PATRICIA POKU-DIABY",
    role: "Eminent Businesswoman, CEO Plot Enterprise Gh",
    category: "commerce" as const,
    bio: "Pioneering agricultural exporter transforming domestic cocoa bean processing into a multi-million dollar global supply operation.",
    badge: "Appreciation Awards"
  },
  {
    name: "TOGBE AFEDE XIV",
    role: "Paramount Chief of Asogli State, Industrial Icon",
    category: "royal" as const,
    bio: "Sovereign traditional monarch and major investment strategist bridging commerce, heavy logistics, and regional youth employment.",
    badge: "Appreciation Awards"
  },
  {
    name: "H.E. JOHN AGYEKUM KUFOUR",
    role: "Former President of the Republic of Ghana",
    category: "state" as const,
    bio: "Eminent elder statesman celebrated for monumental continental mediation, national economic stability, and diplomatic wisdom.",
    badge: "Appreciation Awards"
  },
  {
    name: "SIR SAM JONAH",
    role: "Eminent Industrialist, President of Jonah Capital",
    category: "commerce" as const,
    bio: "Global mining pioneer and foremost developmental advocate guiding financial frameworks across Sub-Saharan Africa.",
    badge: "Appreciation Awards"
  },
  {
    name: "DR. KWABENA DUFFUOR",
    role: "CEO UniBank & Chairman of HODA Group",
    category: "commerce" as const,
    bio: "Foremost economist and financial executive who spearheaded sovereign banking reformations and public sector transparency campaigns.",
    badge: "Appreciation Awards"
  },
  {
    name: "HON. JOHNSON ASIEDU NKETIA",
    role: "National Chairman, National Democratic Congress",
    category: "state" as const,
    bio: "Vanguard political strategist reinforcing democratic party policies and sovereign grassroots mobilization models.",
    badge: "Appreciation Awards"
  },
  {
    name: "HON. KENNEDY AGYAPONG",
    role: "Eminent Entrepreneur & Prolific Politician",
    category: "commerce" as const,
    bio: "Bold commercial advocate establishing major manufacturing plants to combat urban youth brain-drain and import reliance.",
    badge: "Appreciation Awards"
  },
  {
    name: "DR. DANIEL MCKORLEY",
    role: "McDan Group CEO, Logistical Visionary",
    category: "commerce" as const,
    bio: "Aviation and heavy logistics mogul sponsoring massive infrastructure, security initiatives, and youth sports development across Ghana.",
    badge: "Appreciation Awards"
  },
  {
    name: "BESSA SIMONS",
    role: "President of MUSIGA, Osibisa Legend",
    category: "community" as const,
    bio: "Legendary highlife composer leveraging musical traditions to promote West African peace campaigns and support vintage artists.",
    badge: "Appreciation Awards"
  },
  {
    name: "OKOGYEAMAN APAGYA OFORI APAPAMU IV",
    role: "Traditional Sovereign & Traditional Chief",
    category: "royal" as const,
    bio: "Eminent royal ruler actively championing customary conflict containment and protecting sacred river systems.",
    badge: "Appreciation Awards"
  },
  {
    name: "NII AFOTEY BOTWE II",
    role: "Chief of Nungua, Founder New Life Orphanage",
    category: "royal" as const,
    bio: "Compassionate custodian committing vast traditional lands to shelter, school, and empower hundreds of disenfranchised children.",
    badge: "Appreciation Awards"
  },
  {
    name: "ABUBAKARI DAWUD",
    role: "President, Ghana National Supporters Union",
    category: "community" as const,
    bio: "Dynamic community organizer channeling soccer enthusiasm into cross-tribal national unity and peaceful civic parade campaigns.",
    badge: "Appreciation Awards"
  },
  {
    name: "PROF. S. ATO DUNCAN",
    role: "CEO & Founder of COA Mixture (Research Scientist)",
    category: "commerce" as const,
    bio: "Renowned medical research visionary developing legendary organic healthcare remedies to enhance African self-reliance.",
    badge: "Appreciation Awards"
  },
  {
    name: "IBRAHIM A. MAHAMA",
    role: "Founder, Engineers & Planners / Business Mogul",
    category: "commerce" as const,
    bio: "Consummate industrial pioneer leading supreme logistical and engineering operations that generate thousands of secure local jobs.",
    badge: "Appreciation Awards"
  },
  {
    name: "DR. JOHNSON ASIAMAH",
    role: "Former Governor, Bank of Ghana",
    category: "commerce" as const,
    bio: "Senior macroeconomic counselor recognized for orchestrating monetary guidelines to safehouse domestic investment.",
    badge: "Appreciation Awards"
  },
  {
    name: "HON. SAMUEL OKUDZETO ABLAKWA",
    role: "MP for North Tongu, Foreign Affairs Diplomat",
    category: "state" as const,
    bio: "Eminent public servant celebrated for direct grassroots crisis relief and diplomatic advocacy for regional West African integration.",
    badge: "Appreciation Awards"
  },
  {
    name: "KEVIN OKYERE",
    role: "CEO Springfield Group, Energy Mogul",
    category: "commerce" as const,
    bio: "Foremost energy entrepreneur pioneering sovereign exploration processes to secure African resources for African development.",
    badge: "Appreciation Awards"
  },
  {
    name: "DR. JOSEPH SIAW AGYEPONG",
    role: "CEO Zoomlion & Chairman JGC Group",
    category: "commerce" as const,
    bio: "Pioneering industrial sanitarian creating highly modular recycling and public cleanliness programs all over West Africa.",
    badge: "Appreciation Awards"
  },
  {
    name: "IGP C. TETTEH YOHUNO",
    role: "Ghana Police Service Operations Director",
    category: "community" as const,
    bio: "Uncompromising law enforcement commander deploying highly targeted community policing grids to neutralize urban violence.",
    badge: "Appreciation Awards"
  },
  {
    name: "HON. MUBARAK MOHAMMED MUNTAKA",
    role: "Interior Ministry Liaison & MP",
    category: "state" as const,
    bio: "Elite parliamentarian focusing on municipal safety systems and conflict reconciliation across complex urban communities.",
    badge: "Appreciation Awards"
  },
  {
    name: "ACI PHILIP P. ANDOH",
    role: "Assistant Commissioner of Immigration, GIS",
    category: "community" as const,
    bio: "Technical security specialist safeguarding border boundaries and organizing streamlined international entry protocols.",
    badge: "Appreciation Awards"
  },
  {
    name: "DR. JOSEPH K. OBENG",
    role: "CEO New Lucky Electricals & President GUTA",
    category: "commerce" as const,
    bio: "Vigorous commercial general advocating for fair trade codes and supporting thousands of local market traders and retailers.",
    badge: "Appreciation Awards"
  },
  {
    name: "H.E. NANA KWAME BEDIAKO",
    role: "Presidential Candidate 2024, New Force Founder",
    category: "state" as const,
    bio: "Dynamic real estate developer and youth industrialist advocating for massive economic job clusters and pan-African unity.",
    badge: "Appreciation Awards"
  },
  {
    name: "HRM DR. EMMANUEL NII ANKRAH",
    role: "Ga Traditional Family Head, GPRTU Vice Chair",
    category: "royal" as const,
    bio: "Paramount traditional authority guiding municipal transportation policies, vocational security, and commercial driving equity.",
    badge: "Appreciation Awards"
  }
];

export default function GhanaThankYouAwards() {
  const [activeTab, setActiveTab] = useState<'overview' | 'nominees' | 'chronicle' | 'press' | 'pillars' | 'downloads'>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'state' | 'royal' | 'commerce' | 'community'>('all');
  
  // Custom Poster Generator State
  const [generatorName, setGeneratorName] = useState('YOUR FULL NAME');
  const [generatorTitle, setGeneratorTitle] = useState('PEACE CHAMPION & ENTREPRENEUR');
  const [generatorCategory, setGeneratorCategory] = useState('Appreciation Awards');
  const [generatorImage, setGeneratorImage] = useState<string | null>(null);
  
  const posterRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Filter Nominees
  const filteredNominees = GTYA_NOMINEES.filter(nominee => {
    const matchesSearch = nominee.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          nominee.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          nominee.bio.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || nominee.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Handle Offline HTML Booker Download
  const handleDownloadBooklet = () => {
    const nomineesHTML = GTYA_NOMINEES.map((n, i) => `
      <div style="background-color: #111726; border-left: 5px solid #d4a317; padding: 15px; margin-bottom: 12px; border-radius: 4px;">
        <span style="font-family: monospace; color: #f59e0b; font-size: 11px; font-weight: bold; text-transform: uppercase;">#${i+1} Nominee - Category: ${n.badge}</span>
        <h3 style="color: #f3f4f6; margin: 4px 0; font-family: serif; font-size: 16px;">${n.name}</h3>
        <p style="color: #fbbf24; font-size: 12px; margin: 2px 0 6px 0;"><strong>${n.role}</strong></p>
        <p style="color: #9ca3af; font-size: 12px; line-height: 1.4; margin: 0;">${n.bio}</p>
      </div>
    `).join('');

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Ghana Thank You Awards 2026 - Official Executive Brochure</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background-color: #0b0f19; color: #e5e7eb; padding: 40px; }
          .container { max-width: 800px; margin: 0 auto; background-color: #0e1320; padding: 30px; border-radius: 12px; border: 2px solid #d4a317; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
          .header { text-align: center; border-bottom: 2px solid #d4a317; padding-bottom: 20px; margin-bottom: 25px; }
          .flag-bar { height: 6px; background: linear-gradient(to right, #dc2626, #f59e0b, #059669); margin-bottom: 15px; border-radius: 3px; }
          h1 { color: #f3f4f6; font-family: "Georgia", serif; letter-spacing: 1px; margin: 5px 0; font-size: 28px; }
          h2 { color: #d4a317; font-family: "Georgia", serif; margin-top: 30px; border-bottom: 1px solid rgba(212, 163, 23, 0.2); padding-bottom: 5px; }
          p { font-size: 14px; line-height: 1.6; color: #d1d5db; }
          .meta-info { display: flex; justify-content: space-between; font-size: 12px; color: #9ca3af; margin-bottom: 15px; font-family: monospace; }
          .footer { text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid rgba(212, 163, 23, 0.2); margin-top: 40px; padding-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="flag-bar"></div>
          <div class="header">
            <span style="font-family: monospace; font-size: 11px; text-transform: uppercase; color: #f59e0b; font-weight: bold; letter-spacing: 2px;">THE PEACE TOWER OF AFRICA</span>
            <h1>GHANA THANK YOU AWARDS 2026</h1>
            <p style="color: #9ca3af; font-style: italic; margin-top: 5px;">"Honoring Patriotic Service & Local Development Initiatives"</p>
          </div>
          
          <div class="meta-info">
            <span>OFFICE: St. Johns, Accra</span>
            <span>DATE OF COMPILATION: 11th January</span>
            <span>AUDIENCE TARGET: 200 Delegates</span>
          </div>

          <h2>INTRODUCTION & MISSION</h2>
          <p>World Thank You Day is celebrated annually on <strong>11th January</strong> worldwide. Co-organized by <strong>Hemans Events and Media Consult</strong> and the <strong>Global Trade Network International (GTNI)</strong> alongside the <strong>Peace Tower of Africa Foundation</strong>, the Ghana Thank You Awards identifies and celebrates the profound contributions of individuals and organizations towards sustaining peace and triggering national socio-economic growth.</p>
          
          <h2>THE 2026 ACTIVITIES TIMELINE</h2>
          <p><strong>Official GTYA 2026 Launching Seminar:</strong> 11th June 2026 | 2:00 PM – 4:00 PM | A.M.A. Hall Headquarters, Accra (Executive Council Convocation)</p>
          <p><strong>Main Event Gala Dinner:</strong> 23rd June 2026 | Evening | Paris, France Chapter Showcase (Celebrating Mainland & Diasporan Cohesion)</p>

          <h2>GTYA ADVOCACY PILLARS</h2>
          <ul>
            <li><strong>Breaking Ignorance for Peace:</strong> Traditional, peer-to-peer dialogues among monarchies resolving ancestral disputes verbally.</li>
            <li><strong>Diaspora Homecoming 2027:</strong> Triggering repatriation networks on Ghana's 70th independence gate.</li>
            <li><strong>Ladies in Commercial Driving:</strong> Equipping licensed female operators to handle commercial logistics and gain vocational safety.</li>
            <li><strong>Anti-Land Degradation:</strong> Halting devastating galamsey operations destroying sacred freshwaters.</li>
          </ul>

          <h2>NOMINATION ROSTER (9TH EDITION)</h2>
          <p>The executive board presents twenty-nine (29) eminent personalities nominated for appreciation:</p>
          ${nomineesHTML}

          <div class="footer">
            <p><strong>To Participate / Partner / Sponsor:</strong> 0244 105 913 / 024 123 0069 / 0547 464 212</p>
            <p>Email: tawiapeaceicon@gmail.com • Office Location: St Johns - Accra, Ghana</p>
            <p style="font-size: 10px; opacity: 0.6; margin-top: 10px;">© 2026 Peace Tower of Africa Foundation. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ghana_Thank_You_Awards_2026_Brochure.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Plain Text Manifesto Download
  const handleDownloadManifesto = () => {
    const textContent = `
===================================================
GHANA THANK YOU AWARDS (GTYA) 2026 MANIFESTO 
===================================================
ORGANIZERS: 
- Hemans Events and Media Consult
- Global Trade Network International (GTNI)
- Supported by the Ga Traditional Council

CONTACT PHONE LINERS:
- Tel: 0573 744 909 / 0244 105 913
- Participation Hotline: 0244 105 913 / 024 123 0069 / 0547 464 212
- Email: tawiapeaceicon@gmail.com
- Office Location: St Johns - Accra, Ghana

MISSION CHRONICLE:
World Thank You Day is celebrated globally on January 11th. Since 2012, 
the Ghana Thank You Awards has recognized quiet heroes, corporate giants, 
religious leaders, and traditional monarchs who preserve Ghana's peaceful atmosphere 
and enable stable global investments to flow.

PREVIOUS EDITIONS HIGHLIGHTS:
- 1st Edition (2012): "Good Service and Appreciation" hosted with ESFUTUSEM METRO TV.
- 2nd & 3rd Editions (2013-2015): "Ghana Peace Icons" at Cape Coast University. Honoring Chief Yaw Kumey, Sheikh Osmanu Nuhu Sharubutu, and Dr. Kwame Kyei Baffour.
- 4th Edition (2019): "Sovereign Development Nominees" live from Western Region Takoradi.

THE FOUR GTYA MANDATES:
1. Breaking Ignorance for Peace (Active conflict containment via direct royal dialog)
2. Diaspora Investment Homecoming (Attracting partners towards Ghana's 70th Anniversary 2027)
3. Ladies in Commercial Driving (Empowering female transit operators to handle high-capacity logistics)
4. Anti-Land Degradation & Freshwater Conservation (Halting Galamsey mining)

TARGETED AUDIENCE LIMIT:
Two Hundred (200) delegates comprising traditional kings, diplomats, 
embassy liaisons, businessmen, and global investors.

===================================================
Sovereign Coordinators:
- OHENMAA AFIA ASANTEWAA I
- TAWIA NKRUMAH HEMANS (Prez, Peace Tower of Africa)
===================================================
    `;

    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'GTYA_Sovereign_Manifesto.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Handle Local image upload for custom nominee poster card
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const objectUrl = URL.createObjectURL(file);
      setGeneratorImage(objectUrl);
    }
  };

  return (
    <section 
      id="ghana-thank-you-awards" 
      className="relative py-24 bg-gradient-to-b from-[#0b0e14] via-[#0f1422] to-[#0a0d14] border-t-2 border-gold-500/30 overflow-hidden"
    >
      {/* SHIMMERING BACKGROUND GRAPHICS */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-rose-600 via-amber-500 to-emerald-600 z-10" />
      <div className="absolute top-24 left-10 w-96 h-96 rounded-full bg-rose-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-emerald-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* MAGNIFICENT EXECUTIVE HEADER */}
        <div className="text-center space-y-4 max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-gold-500/40 text-gold-400 font-mono text-[10px] sm:text-xs uppercase tracking-widest">
            <Award className="w-4 h-4 animate-pulse text-rose-500" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-400 to-emerald-400 font-extrabold font-mono">
              Sovereign National Honours
            </span>
          </div>
          <h2 className="font-serif text-3.5xl sm:text-5xl lg:text-6xl font-black text-gold-100 tracking-tight uppercase leading-none">
            Ghana Thank You Awards
          </h2>
          <p className="font-serif italic text-gold-300 font-semibold tracking-wide text-xs sm:text-sm md:text-base">
            Originally observed on World Thank You Day (11th January) • Organizers: Hemans Events & Media Consult
          </p>
          <div className="h-[2px] w-36 bg-gradient-to-r from-rose-600 via-amber-500 to-emerald-600 mx-auto rounded-full mt-4" />
          
          <p className="font-sans text-sm sm:text-base text-royal-100/80 leading-relaxed max-w-3xl mx-auto font-light pt-2">
            In collaborative coordination with the <span className="text-gold-400 font-bold">Global Trade Network International (GTNI)</span> and traditional councils. We identify quiet civic builders, appreciate their lifetime efforts, and challenge core laureates to spearhead crucial ecological and peaceful interventions.
          </p>
        </div>

        {/* 6 COLUMN INTERACTIVE DESKTOP TABS */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-gold-500/15 pb-4 max-w-4xl mx-auto">
          {[
            { id: 'overview', label: 'Awards Brief', icon: BookOpen },
            { id: 'nominees', label: '2026 Nominees', icon: UserCheck },
            { id: 'chronicle', label: 'History Track', icon: History },
            { id: 'press', label: 'Press Photostream', icon: ImageIcon },
            { id: 'pillars', label: 'Pillars & Focus', icon: Layers },
            { id: 'downloads', label: 'Dossier Downloads', icon: Download }
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 pointer-events-auto cursor-pointer border ${
                  isSelected 
                    ? 'bg-gradient-to-r from-amber-600 to-gold-500 text-royal-950 border-gold-300 shadow-xl shadow-gold-500/10 font-black' 
                    : 'bg-[#101524]/40 border-gold-500/10 text-royal-200 hover:text-gold-300 hover:bg-[#151c30]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-royal-950' : 'text-gold-400/80'}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* PANEL RENDERINGS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="w-full text-left"
          >
            
            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left side: Interactive representation of the original Page 1 flyer */}
                <div className="lg:col-span-5">
                  <div className="relative p-[3px] rounded-2xl bg-gradient-to-tr from-rose-600 via-amber-400 to-emerald-600 shadow-2xl">
                    <div className="bg-[#0e121d] p-6 sm:p-8 rounded-[13px] border border-gold-500/20 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/10 rounded-full blur-xl pointer-events-none" />
                      
                      {/* Logo and Seal drawing */}
                      <div className="flex flex-col items-center text-center space-y-3 mb-6">
                        <span className="font-mono text-[9px] font-extrabold text-gold-400 uppercase tracking-widest">THE PEACE TOWER OF AFRICA</span>
                        <div className="w-20 h-20 rounded-full bg-gradient-to-b from-amber-500 to-gold-600 p-[3px] shadow-lg flex items-center justify-center">
                          <div className="w-full h-full rounded-full bg-[#0a0d14] flex flex-col items-center justify-center p-1 border border-gold-300">
                            <span className="font-serif text-[10px] font-black text-gold-400 scale-95 leading-none">GHANA</span>
                            <span className="font-sans text-[7px] text-royal-200 uppercase tracking-wider font-extrabold leading-none my-0.5">THANK YOU</span>
                            <span className="font-serif text-[8px] font-bold text-gold-400 border-t border-gold-500/50 pt-0.5 px-1 leading-none">AWARDS</span>
                          </div>
                        </div>
                        <h3 className="font-serif text-lg sm:text-xl font-bold font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-amber-100 uppercase tracking-wider">
                          The GTY Awards 2026
                        </h3>
                        <div className="text-[10.5px] font-sans text-royal-200/80 leading-normal max-w-sm">
                          "We observe the day by identifying individual and organization efforts, and appreciate their contributions by awarding them accordingly."
                        </div>
                      </div>

                      {/* Contact Details from Flyer */}
                      <div className="space-y-4 border-t border-gold-500/15 pt-5 text-xs font-sans">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded bg-amber-500/10 text-gold-400 border border-gold-500/25">
                            <Phone className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="text-[9px] font-mono text-royal-100/50 uppercase block">Inquiries Line</span>
                            <p className="text-gold-200 font-mono font-bold">0573 744 909 / 0244 105 913</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded bg-amber-500/10 text-gold-400 border border-gold-500/25">
                            <MapPin className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="text-[9px] font-mono text-royal-100/50 uppercase block">Office Location</span>
                            <p className="text-royal-100">St Johns — Accra, Ghana</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded bg-amber-500/10 text-gold-400 border border-gold-500/25">
                            <Mail className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="text-[9px] font-mono text-royal-100/50 uppercase block">Official Email</span>
                            <p className="text-royal-100 font-mono">tawiapeaceicon@gmail.com</p>
                          </div>
                        </div>

                        <div className="p-4 rounded-lg bg-royal-950/60 border border-rose-500/20 text-[11px] text-royal-100/90 leading-relaxed font-light mt-4">
                          <strong className="text-rose-400 block font-mono text-[9px] uppercase tracking-wider mb-1 font-bold">Participation Hotline</strong>
                          Call to register or support: <strong className="text-gold-400 font-mono">0244 105 913</strong>, <strong className="text-gold-400 font-mono">024 123 0069</strong> or <strong className="text-gold-400 font-mono">0547 464 212</strong>.
                        </div>
                      </div>

                      {/* Flag Bottom accent */}
                      <div className="absolute bottom-0 inset-x-0 h-1.5 bg-gradient-to-r from-rose-600 via-amber-500 to-emerald-600" />
                    </div>
                  </div>
                </div>

                {/* Right side background statement */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="royal-glass p-6 sm:p-8 rounded-xl border border-gold-500/20 bg-royal-950/40 space-y-4">
                    <span className="font-mono text-[9px] text-amber-500 font-bold uppercase tracking-widest block">Executive Background</span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gold-100">
                      Celebrating Continental & Diasporan Successes
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-royal-100/80 leading-relaxed">
                      Ghana has risen to become one of the most exciting cultural and commercial destinations globally. Over coming decades, indicators suggest that the African continent will heavily outperform major developed markets. We want to encourage international partners and descendants in the Diaspora to investigate investment channels and use their transferrable vocational skills to support municipal growth.
                    </p>
                    <p className="font-sans text-xs sm:text-sm text-royal-100/80 leading-relaxed">
                      Established alongside the first major Peace Tower event in 2012, this platform promotes peace among countries, bridging Kings, Queens, and religious leaders. It is designed to enhance national integration, trade security, and communal wellbeing.
                    </p>
                    
                    {/* Key metrics box */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gold-500/10">
                      <div className="p-4 rounded-lg bg-royal-900/60 border border-gold-500/10">
                        <span className="font-mono text-[9px] text-amber-500 uppercase block font-bold leading-none mb-1">Target Delegate Limit</span>
                        <h4 className="font-serif text-lg font-black text-gold-100">200 Attendees</h4>
                        <p className="font-sans text-[11px] text-royal-100/60 mt-1">Intimate administrative setting with diplomats, monarchs, and businessmen.</p>
                      </div>

                      <div className="p-4 rounded-lg bg-royal-900/60 border border-gold-500/10">
                        <span className="font-mono text-[9px] text-amber-500 uppercase block font-bold leading-none mb-1">Key Endorsements</span>
                        <h4 className="font-serif text-lg font-black text-gold-100 font-sans">Traditional System</h4>
                        <p className="font-sans text-[11px] text-royal-100/60 mt-1">Endorsed directly by the Queen Mothers Foundation of Ghana and regional Kings.</p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights banner */}
                  <div className="royal-glass p-6 rounded-xl border border-gold-500/20 bg-gradient-to-r from-emerald-950/10 to-[#101423] flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shrink-0">
                      <Sparkles className="w-5 h-5 animate-spin-slow" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm sm:text-base font-bold text-gold-100 leading-tight">
                        Womens Enterprise Highlight: Ladies in Driving
                      </h4>
                      <p className="font-sans text-xs text-royal-100/70 mt-1 leading-snug">
                        Combating gender exclusion by sponsoring and professionalizing commercial transportation careers for women, fostering absolute financial autonomy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* NOMINEES REGISTRY */}
            {activeTab === 'nominees' && (
              <div className="space-y-8">
                
                {/* Search & Filter Header */}
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-royal-950/40 p-5 rounded-xl border border-gold-500/15">
                  <div className="relative w-full md:max-w-md">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-royal-100/40" />
                    <input 
                      type="text"
                      placeholder="Search nominee by name, title, or bio..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-royal-900 border border-gold-500/20 rounded-lg text-xs font-sans text-royal-50 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                    />
                  </div>

                  <div className="flex flex-wrap gap-2 w-full md:w-auto">
                    {[
                      { id: 'all', label: 'All Nominees' },
                      { id: 'state', label: 'State Pillars' },
                      { id: 'royal', label: 'Monarchs & Rulers' },
                      { id: 'commerce', label: 'Business Titans' },
                      { id: 'community', label: 'Community Leaders' }
                    ].map((btn) => (
                      <button
                        key={btn.id}
                        onClick={() => setCategoryFilter(btn.id as any)}
                        className={`px-3 py-1.5 rounded-md font-sans text-xs font-bold transition-all cursor-pointer ${
                          categoryFilter === btn.id 
                            ? 'bg-gold-500 text-royal-950 font-extrabold shadow-md' 
                            : 'bg-royal-900 border border-gold-500/10 text-royal-200 hover:text-gold-300'
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Nominee poster cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredNominees.map((nominee, idx) => (
                    <div 
                      key={nominee.name}
                      className="group relative select-none overflow-hidden rounded-xl border-2 border-gold-500/20 bg-[#090b11] shadow-2xl transition-all duration-300 hover:border-gold-400 hover:-translate-y-1 flex flex-col h-[320px] justify-between"
                    >
                      {/* Flag top-bottom ribbons exactly mimicking the poster grid in Pages 7, 11, 12, 13, 14 */}
                      <div className="h-4 bg-gradient-to-r from-rose-600 via-amber-400 to-emerald-600 w-full flex items-center justify-center">
                        <span className="font-sans text-[8px] text-royal-950 font-black tracking-widest leading-none">★ ★ ★ GHANA ★ ★ ★</span>
                      </div>

                      {/* Poster Core Content Block */}
                      <div className="p-5 flex-1 flex flex-col text-left justify-between space-y-4 relative">
                        {/* Golden backdrop circular seal watermark */}
                        <div className="absolute right-3 top-3 w-16 h-16 bg-gold-500/[0.03] rounded-full border border-gold-500/5 animate-spin-slow pointer-events-none" />
                        
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-mono text-[9px] font-bold text-amber-500 uppercase tracking-widest border border-gold-500/20 px-2 py-0.5 rounded">
                              NOMINEE
                            </span>
                            <span className="font-mono text-[8.5px] text-royal-100/50 uppercase font-bold tracking-widest">
                              9th Edition 2026
                            </span>
                          </div>

                          <h3 className="font-serif text-base sm:text-lg font-black text-gold-100 tracking-tight leading-tight uppercase group-hover:text-gold-300 transition-colors">
                            {nominee.name}
                          </h3>
                          <p className="font-mono text-[10px] text-emerald-400 font-bold tracking-wide mt-1 italic">
                            {nominee.role}
                          </p>
                        </div>

                        <p className="font-sans text-xs text-royal-100/70 leading-relaxed font-light line-clamp-4">
                          {nominee.bio}
                        </p>

                        <div className="flex items-center gap-1 font-mono text-[9px] text-royal-100/40 mt-1">
                          <span>Category:</span>
                          <span className="text-gold-400 font-bold uppercase">{nominee.badge}</span>
                        </div>
                      </div>

                      <div className="h-4 bg-gradient-to-r from-rose-600 via-amber-400 to-emerald-600 w-full flex items-center justify-center">
                        <span className="font-sans text-[8px] text-royal-950 font-black tracking-widest leading-none">★ ★ ★ 2026 ★ ★ ★</span>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredNominees.length === 0 && (
                  <div className="text-center py-12 royal-glass p-8 rounded-xl border border-gold-500/10">
                    <p className="font-sans text-sm text-royal-100/50">No nominees matched your search parameters. Try adjusting filters.</p>
                  </div>
                )}

                {/* INTERACTIVE NOMINEE POSTER GENERATOR */}
                <div className="border border-gold-500/25 rounded-2xl bg-[#0b0e15] p-6 sm:p-8 mt-12 shadow-2xl">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Controls (7 Columns) */}
                    <div className="lg:col-span-7 space-y-6 text-left">
                      <div>
                        <span className="font-mono text-[9px] text-amber-500 font-bold uppercase tracking-widest block mb-1">
                          Interactive Campaign Hub
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl font-black text-gold-100 uppercase">
                          Create Your Own GTYA Poster Frame!
                        </h3>
                        <p className="font-sans text-xs sm:text-sm text-royal-100/70 leading-relaxed mt-1 font-light">
                          Support the cause! Type any name (your own, or a business/community leader you admire), select a sovereign title, upload a graphic face portrait, and print or generate your customizable nomination card in traditional Ghanaian colors!
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="font-mono text-[10px] text-royal-100/60 uppercase font-bold">Nominee Name</label>
                          <input 
                            type="text" 
                            value={generatorName}
                            onChange={(e) => setGeneratorName(e.target.value.toUpperCase())}
                            className="w-full px-3 py-2 bg-royal-900 border border-gold-500/25 rounded text-xs text-royal-100 font-sans focus:outline-none focus:border-gold-500"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="font-mono text-[10px] text-royal-100/60 uppercase font-bold">Sovereign Title</label>
                          <input 
                            type="text" 
                            value={generatorTitle}
                            onChange={(e) => setGeneratorTitle(e.target.value.toUpperCase())}
                            className="w-full px-3 py-2 bg-royal-900 border border-gold-500/25 rounded text-xs text-royal-100 font-sans focus:outline-none focus:border-gold-500"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="font-mono text-[10px] text-royal-100/60 uppercase font-bold">Category Badge</label>
                          <select 
                            value={generatorCategory}
                            onChange={(e) => setGeneratorCategory(e.target.value)}
                            className="w-full px-3 py-2 bg-royal-900 border border-gold-500/25 rounded text-xs text-royal-100 font-sans focus:outline-none focus:border-gold-500"
                          >
                            <option value="Appreciation Awards">Appreciation Awards</option>
                            <option value="Good Service & Appreciation">Good Service & Appreciation</option>
                            <option value="Sovereign Peace Icon">Sovereign Peace Icon</option>
                            <option value="Ladies in Driving Elite">Ladies in Driving Elite</option>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label className="font-mono text-[10px] text-royal-100/60 uppercase font-bold">Upload Portrait Face</label>
                          <button 
                            onClick={() => fileInputRef.current?.click()}
                            className="w-full px-3 py-2 bg-royal-900 border border-gold-500/25 rounded text-xs text-gold-400 font-bold cursor-pointer hover:bg-royal-900/60 transition-colors block text-left truncate flex items-center gap-1.5"
                          >
                            <ImageIcon className="w-4 h-4" />
                            {generatorImage ? "Change Image" : "Choose File..."}
                          </button>
                          <input 
                            type="file" 
                            ref={fileInputRef}
                            onChange={handleImageChange}
                            accept="image/*"
                            className="hidden"
                          />
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 pt-4 border-t border-gold-500/10">
                        <button 
                          onClick={() => window.print()}
                          className="px-5 py-2.5 rounded bg-gradient-to-r from-amber-600 to-gold-500 text-royal-950 font-serif font-extrabold text-xs uppercase tracking-widest cursor-pointer hover:from-gold-500 hover:to-gold-300 transition-all flex items-center gap-2 shadow-lg"
                        >
                          <Printer className="w-3.5 h-3.5" /> Print Campaign Card
                        </button>
                        {generatorImage && (
                          <button 
                            onClick={() => {
                              setGeneratorImage(null);
                              setGeneratorName('YOUR FULL NAME');
                              setGeneratorTitle('PEACE CHAMPION & ENTREPRENEUR');
                            }}
                            className="px-4 py-2 text-xs font-mono font-bold text-rose-400 border border-rose-500/20 rounded hover:bg-rose-950/20 transition-all cursor-pointer"
                          >
                            Reset Customizer
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Poster Preview (5 Columns) */}
                    <div className="lg:col-span-5 flex justify-center">
                      <div 
                        ref={posterRef}
                        className="w-full max-w-[290px] h-[340px] rounded-xl border-4 border-gold-500 bg-[#090b11] shadow-2xl flex flex-col justify-between overflow-hidden relative"
                      >
                        {/* Top Ribbon */}
                        <div className="h-5 bg-gradient-to-r from-rose-600 via-amber-400 to-emerald-600 w-full flex items-center justify-center relative z-10">
                          <span className="font-sans text-[8.5px] text-royal-950 font-black tracking-widest leading-none">★ ★ ★ GHANA ★ ★ ★</span>
                        </div>

                        {/* Middle portrait space */}
                        <div className="flex-1 flex flex-col items-center justify-center p-4 text-center relative z-10 mix-blend-normal">
                          {/* Inner glowing circle */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#090b11] via-transparent to-transparent pointer-events-none" />
                          
                          {generatorImage ? (
                            <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-amber-500 to-emerald-500 overflow-hidden mb-3 shadow-lg">
                              <img src={generatorImage} alt="User Nominee" className="w-full h-full object-cover rounded-full" />
                            </div>
                          ) : (
                            <div className="w-24 h-24 rounded-full bg-royal-950 border-2 border-gold-500/30 flex items-center justify-center mb-3 text-gold-400 text-4xl font-serif font-black shadow-lg">
                              ★
                            </div>
                          )}

                          <span className="font-mono text-[8px] text-amber-500 border border-gold-500/20 px-2 py-0.5 rounded uppercase tracking-widest block mb-1 font-bold">
                            {generatorCategory.toUpperCase()}
                          </span>

                          <h4 className="font-serif text-sm font-black text-gold-100 tracking-tight leading-tight uppercase max-w-[220px]">
                            {generatorName}
                          </h4>
                          <p className="font-sans text-[10px] text-emerald-400 font-extrabold italic truncate max-w-[200px] mt-1 uppercase tracking-wide">
                            {generatorTitle}
                          </p>
                          <span className="font-mono text-[8.5px] text-royal-100/40 uppercase tracking-widest mt-2 block font-extrabold">9TH EDITION 2026</span>
                        </div>

                        {/* Bottom Ribbon */}
                        <div className="h-5 bg-gradient-to-r from-rose-600 via-amber-400 to-emerald-600 w-full flex items-center justify-center relative z-10">
                          <span className="font-sans text-[8.5px] text-royal-950 font-black tracking-widest leading-none">★ ★ ★ NOMINEE ★ ★ ★</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            )}

            {/* HISTORICAL CHRONICLE */}
            {activeTab === 'chronicle' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Side: Summary text */}
                <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
                  <div className="royal-glass p-6 rounded-xl border border-gold-500/20 bg-royal-950/40">
                    <span className="font-mono text-[9px] text-amber-500 uppercase tracking-widest block font-bold mb-2">Historical Journey</span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-gold-200 leading-tight">
                      A Legacy of Sovereign Recognition
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-royal-100/70 leading-relaxed mt-3">
                      Unlike standard visual trophies, the Ghana Thank You Awards is built on the philosophy of <strong>rehabilitative appreciation</strong>. We expose and profile the silent biographies of change-makers, then charge them to utilize their municipal influence for specific state-building targets.
                    </p>
                    <p className="font-sans text-xs sm:text-sm text-royal-100/70 leading-relaxed mt-2 font-light">
                      From traditional council rulers to sovereign legal authorities, laureates stand together as anchors of West African stability and growth.
                    </p>
                  </div>
                </div>

                {/* Right Side: Timeline Track */}
                <div className="lg:col-span-8 space-y-8">
                  {[
                    {
                      year: "2012",
                      title: "1st Edition: Good Service & Appreciation",
                      desc: "Inaugurated on World Thank You Day (January 11th). Championed core appreciation campaigns for silent heroes and local operations across media networks.",
                      organizers: "ESFUTUSEM METRO TV & Hemans Events",
                      venue: "Metro TV Studios, Accra",
                      keyOutcome: "Laid down the historical mandate that awardees must sponsor a local peace project during election seasons."
                    },
                    {
                      year: "2013 - 2015",
                      title: "2nd & 3rd Editions: Ghana Peace Icons",
                      desc: "Honoured paramount continent-wide stability figures in traditional leadership, interfaith dialogue, and finance.",
                      organizers: "GTNI and Traditional Royals Council",
                      venue: "Cape Coast University Science Auditorium",
                      laureates: ["CHIEF YAW KUMEY (CEO, Y Kumey Group GH)", "SHEIKH DR. OSMAN NUHU SHARUBUTU (National Chief Imam)", "DR. KWAME KYEI BAFFOUR (Eminent Philanthropist & Industrialist)"],
                      keyOutcome: "A seminal milestone uniting sovereign Islamic authorities and Catholic bishop councils inside Cape Coast auditorium."
                    },
                    {
                      year: "2019",
                      title: "4th Edition: Sovereign Development Nominees",
                      desc: "Highlighted profile elements of quiet business visionaries and regional youth organizers to inspire local student clusters.",
                      organizers: "GTNI, World Peace Volunteers, & Great Corner Stone Foundation",
                      venue: "Takoradi, Western Region Chapter Showcase",
                      keyOutcome: "Active coordination with Ga Traditional Council to secure developmental fields for returned Diaspora cohorts."
                    },
                    {
                      year: "2026",
                      title: "5th Edition: Ghana Thank You Awards 2026",
                      desc: "Fostering absolute coordination between West African state operators and Diasporan pioneers. Fully integrated with the Peace Tower Hague verbal-arbitration court platform.",
                      organizers: "Hemans Events & Media Consult alongside GTNI",
                      venue: "AMA Hall Headquarters (Accra) & Paris Gala (France)",
                      keyOutcome: "Constructing and unveiling the modular architecture blueprints of the Africa Peace Tower."
                    }
                  ].map((item, index) => (
                    <div 
                      key={item.year}
                      className="relative p-[2px] rounded-xl bg-gradient-to-r from-gold-500/20 via-royal-900/10 to-emerald-500/10 hover:from-gold-500/40 transition-all duration-300"
                    >
                      <div className="bg-[#0f1321] p-6 sm:p-8 rounded-[11px] space-y-4">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                          <div>
                            <span className="font-mono text-amber-500 text-[10px] font-bold block uppercase tracking-widest mb-1">
                              Chronicle Edition #{index + 1}
                            </span>
                            <h4 className="font-serif text-lg sm:text-xl font-bold text-gold-100 uppercase">
                              {item.title}
                            </h4>
                          </div>
                          <span className="font-mono text-xs sm:text-sm font-black px-4 py-1.5 rounded-lg bg-royal-950 border border-gold-500/30 text-gold-400 block self-start sm:self-center">
                            {item.year}
                          </span>
                        </div>

                        <p className="font-sans text-xs sm:text-sm text-royal-100/80 leading-relaxed font-light">
                          {item.desc}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-royal-100/60 pt-4 border-t border-gold-500/10">
                          <div>
                            <strong className="text-gold-400 block font-mono text-[9px] uppercase tracking-wider mb-0.5">Sponsoring Partners</strong>
                            {item.organizers}
                          </div>
                          <div>
                            <strong className="text-gold-400 block font-mono text-[9px] uppercase tracking-wider mb-0.5">Hall Venue</strong>
                            {item.venue}
                          </div>
                        </div>

                        {item.laureates && (
                          <div className="mt-4 p-4 rounded-lg bg-royal-950/80 border border-gold-500/10">
                            <strong className="text-gold-400 block font-mono text-[9.5px] uppercase tracking-widest mb-2 font-bold">
                              Distinguished Laureate Spotlights
                            </strong>
                            <div className="space-y-2">
                              {item.laureates.map((l) => (
                                <div key={l} className="text-xs font-serif font-semibold text-royal-100 flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                  <span>{l}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <p className="font-mono text-[10px] text-royal-100/50 pt-2">
                          <strong>Tasked Outcome:</strong> {item.keyOutcome}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            )}

            {/* ARCHIVAL PRESSROOM */}
            {activeTab === 'press' && (
              <div className="space-y-8">
                
                <div className="max-w-3xl mx-auto text-center space-y-2">
                  <span className="font-mono text-[9px] text-amber-500 font-extrabold tracking-widest uppercase block mb-1">Authentic Book File Media</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-black text-gold-100 uppercase">
                    Chronicle Photo Archives & Documents
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-royal-100/70 max-w-xl mx-auto leading-relaxed">
                    This media suite displays the precise pictures included inside the original campaign brochure. Read transcribed notes and observe historical conferences with West Africa's chief elders.
                  </p>
                </div>

                {/* Grid of the 12 key images from the PDF */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { index: 1, title: "African Living Legend Festival 2019 Banner", desc: "Page 3 Flyer featuring Sheikh Osmanu Nuhu Sharubutu, Apostle Dr. Kwadwo Safo, other patrons." },
                    { index: 2, title: "Chief Imam Islamic Delegation Assembly", desc: "Page 6 top header. Sheikh Osamu Nuhu Sharubutu surrounded by international reporters." },
                    { index: 4, title: "Sowutoum Peace Summit Launch Flyer", desc: "Page 8 left image. The Maranatha University College launch panel poster." },
                    { index: 5, title: "Chieftain Speak Oath at Ceremony", desc: "Page 5 header photo. Traditional King conveying verbal peace rules with fellow royal rulers." },
                    { index: 7, title: "Sovereign Queen Mother & Traditional Council Seat", desc: "Page 4 top right. Queen Mothers Foundation seated on custom plush court chairs." },
                    { index: 8, title: "Priesthood and Customary Handclasp Reunion", desc: "Page 8 bottom left group photo with traditional rulers and student ambassadors." },
                    { index: 9, title: "Declaration Scroll Presentation Ceremony", desc: "Page 8 bottom right. Traditional representatives delivering official covenant documents." },
                    { index: 10, title: "National Chief Imam Portrait of Wisdom", desc: "Page 3 top right photo. Seated in state within the peace tower sanctum." },
                    { index: 12, title: "Grand Chieftaincy Council Chamber Assembly", desc: "Page 8 top right. Over fifty regional monarchs of Cape Coast aligning for peace." },
                    { index: 14, title: "Paramount Living Legends Launch Panel", desc: "Page 4 top left photo. Representative leaders presenting plaques to business coordinators." },
                    { index: 16, title: "Campaign Strategy Document Notes", desc: "Page 4 and 6 charter pages. Outline containing target audience values and tactical goals." },
                    { index: 18, title: "Maranatha Rural Bank Honours Ceremony", desc: "Page 9 top images. Local bank executives receiving state-building development awards." }
                  ].map((img) => (
                    <div 
                      key={img.index}
                      className="group overflow-hidden rounded-xl border border-gold-500/15 bg-[#0d111d] flex flex-col justify-between h-[340px] shadow-xl hover:border-gold-300 transition-all duration-300"
                    >
                      <div className="relative h-48 w-full overflow-hidden bg-royal-950">
                        <SectionImage index={img.index} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-royal-950/90 text-gold-400 font-mono text-[9px] border border-gold-500/20">
                          ID: #PTA-{String(img.index).padStart(2, '0')}
                        </span>
                      </div>

                      <div className="p-4 flex-1 flex flex-col justify-between text-left">
                        <div>
                          <h4 className="font-serif text-sm font-extrabold text-gold-100 line-clamp-1 group-hover:text-gold-300 transition-colors">
                            {img.title}
                          </h4>
                          <p className="font-sans text-xs text-royal-100/60 leading-relaxed font-light mt-1.5">
                            {img.desc}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-gold-500/10 flex items-center justify-between text-[10px] font-mono mt-2">
                          <span className="text-emerald-400 font-bold uppercase">Archival File</span>
                          <span className="text-royal-100/40">Verified Brochure</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            )}

            {/* ADVOCACY PILLARS */}
            {activeTab === 'pillars' && (
              <div className="space-y-12">
                
                <div className="max-w-2xl mx-auto text-center space-y-2">
                  <span className="font-mono text-[9px] text-amber-500 font-bold uppercase tracking-widest block mb-1">Sovereign Directives</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-black text-gold-100 uppercase">
                    The Four Core Campaigns
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-royal-100/70 leading-relaxed">
                    To maintain eligibility for campaign status, all partner monarchs and business directories coordinate programs aligned strictly facing these four standard development boundaries:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {[
                    {
                      icon: Flame,
                      title: "Breaking Ignorance for Peace",
                      subtitle: "Custom Dialogue & Conflict Conciliation",
                      color: "border-rose-500/20 bg-rose-950/10 text-rose-400",
                      desc: "By promoting active, peer-to-peer discussions among regional monarchs and religious leaders, we eliminate standard communication blocks and resolve ancestral tribal boundaries verbally."
                    },
                    {
                      icon: Globe,
                      title: "Diaspora Repatriation 2027",
                      subtitle: "Ghana 70th Anniversary Gates",
                      color: "border-amber-500/20 bg-amber-950/10 text-amber-400",
                      desc: "Constructing business networks to attract returned Diasporan cohorts. We extend genuine ownership of the Africa Peace Tower directly to African citizens and investors."
                    },
                    {
                      icon: Car,
                      title: "Ladies in Commercial Driving",
                      subtitle: "Gender Equity & Financial Autonomy",
                      color: "border-emerald-500/20 bg-emerald-950/10 text-emerald-400",
                      desc: "Professionalizing high-capacity logistics careers for local ladies, providing stable vocations, modern safety protocols, and stopping youth brain drain migration overseas."
                    },
                    {
                      icon: Droplet,
                      title: "Anti-Land Degradation",
                      subtitle: "Conservation of Sacred Rivers & Forests",
                      color: "border-blue-500/20 bg-blue-950/10 text-blue-400",
                      desc: "Tracking, identifying, and containment of devastating galamsey operations to prevent the destruction of essential municipal and traditional freshwater sources."
                    }
                  ].map((p, i) => {
                    const IconComp = p.icon;
                    return (
                      <div 
                        key={i}
                        className={`p-6 rounded-xl border flex gap-5 text-left transition-all duration-300 hover:border-gold-500/30 hover:-translate-y-1 ${p.color}`}
                      >
                        <div className="p-3.5 rounded-lg bg-royal-950 border border-gold-500/25 shrink-0 h-14 w-14 flex items-center justify-center shadow-lg">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <div className="space-y-1.5">
                          <span className="font-mono text-[9px] font-black uppercase opacity-70 tracking-widest">{p.subtitle}</span>
                          <h4 className="font-serif text-base font-extrabold text-gold-100">{p.title}</h4>
                          <p className="font-sans text-xs text-royal-100/80 leading-relaxed font-light">{p.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Queen Mothers Endorsement Highlight */}
                <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-xl border border-gold-500/20 bg-[#0f1322] flex flex-col md:flex-row gap-6 items-center text-left">
                  <div className="p-4 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shrink-0">
                    <Building className="w-8 h-8 animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-serif text-lg font-bold text-gold-200">
                      The Queen Mothers Foundation of Ghana Sponsorship
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-royal-100/75 leading-relaxed font-light">
                      The campaign works in active tandem with the Queen Mothers Alliance of Ghana. Utilizing ancient traditional structures of maternal authority ensures grassroots acceptance of regional peace commitments, guiding school children and community youth.
                    </p>
                  </div>
                </div>

              </div>
            )}

            {/* DOWNLOADS TAB */}
            {activeTab === 'downloads' && (
              <div className="max-w-4xl mx-auto space-y-8 text-left">
                
                <div className="p-6 sm:p-8 rounded-xl border border-gold-500/25 bg-gradient-to-br from-royal-950 to-amber-950/20 space-y-4">
                  <span className="font-mono text-[9px] text-amber-500 border border-gold-500/20 px-2 py-0.5 rounded uppercase tracking-widest inline-block font-extrabold">Executive Resources</span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-gold-200">
                    Sovereign GTYA Brochure & Booklet Downloads
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-royal-100/85 leading-relaxed font-light">
                    Download and extract the verified campaign information compiled from the attached file. These resources contain the full schedule of the AMA June launch, the complete nominee registry of twenty-nine elites, background, and the historical timeline of the first five editions.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Option 1: Live stand-alone HTML booklet download */}
                  <div className="p-6 rounded-xl border border-gold-500/15 bg-royal-950/40 space-y-4 flex flex-col justify-between">
                    <div>
                      <div className="p-2 w-10 h-10 rounded bg-amber-500/10 text-gold-400 border border-gold-500/25 flex items-center justify-center mb-3">
                        <FileText className="w-5 h-5" />
                      </div>
                      <h4 className="font-serif text-base font-bold text-gold-100">GTYA Executive Booklet (HTML Format)</h4>
                      <p className="font-sans text-xs text-royal-100/70 mt-1 leading-relaxed">
                        Compiles a beautifully formatted, single-file diagnostic booklet showing nominees, past editions, contact channels, and the AMA executive seminar. Perfect for offline reading.
                      </p>
                    </div>
                    <button 
                      onClick={handleDownloadBooklet}
                      className="w-full mt-4 py-2.5 rounded bg-gradient-to-r from-amber-600 to-gold-500 text-royal-950 font-serif font-extrabold text-xs uppercase tracking-widest cursor-pointer hover:from-gold-500 hover:to-gold-300 transition-all flex items-center justify-center gap-2 shadow-md"
                    >
                      <Download className="w-3.5 h-3.5" /> Download Full Booklet
                    </button>
                  </div>

                  {/* Option 2: Manifesto text document */}
                  <div className="p-6 rounded-xl border border-gold-500/15 bg-royal-950/40 space-y-4 flex flex-col justify-between">
                    <div>
                      <div className="p-2 w-10 h-10 rounded bg-amber-500/10 text-gold-400 border border-gold-500/25 flex items-center justify-center mb-3">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <h4 className="font-serif text-base font-bold text-gold-100">GTYA Text Manifesto & Contact Lines</h4>
                      <p className="font-sans text-xs text-royal-100/70 mt-1 leading-relaxed">
                        Extracted plain-text charter comprising details of organizers, previous editions, and exact telephone lines (0573 744 909 / 0244 105 913) for quick reference.
                      </p>
                    </div>
                    <button 
                      onClick={handleDownloadManifesto}
                      className="w-full mt-4 py-2.5 rounded bg-gradient-to-r from-emerald-600 to-emerald-500 text-royal-950 font-serif font-extrabold text-xs uppercase tracking-widest cursor-pointer hover:from-emerald-500 hover:to-emerald-400 transition-all flex items-center justify-center gap-2 shadow-md text-royal-50 font-sans"
                    >
                      <Download className="w-3.5 h-3.5" /> Download Plain Text Manifesto
                    </button>
                  </div>

                </div>

                {/* Print Notice */}
                <div className="p-4 rounded-lg bg-royal-950/60 border border-gold-500/15 text-[11px] text-royal-100/60 leading-relaxed font-light flex items-center gap-3">
                  <Printer className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>
                    Alternatively, press <strong className="text-gold-400">Ctrl + P (or Cmd + P)</strong> on your web browser at any time to instantly print the entire redesigned section as a clean, professionally custom-formatted GTYA 2026 executive dossier.
                  </span>
                </div>

              </div>
            )}

          </motion.div>
        </AnimatePresence>

      </div>

      {/* Flag Gradient ribbon on the bottom of the section */}
      <div className="absolute bottom-0 inset-x-0 h-[3px] bg-gradient-to-r from-rose-600 via-amber-500 to-emerald-600" />
    </section>
  );
}
