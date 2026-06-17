import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Search, 
  Eye, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Globe, 
  Sparkles, 
  FileText, 
  MapPin, 
  Calendar,
  Compass,
  Award
} from 'lucide-react';

interface HistoricalEntry {
  id: number;
  country: string;
  flag: string;
  title: string;
  era: string;
  description: string;
  extendedDossier: string;
  category: 'EMPIRES' | 'LIBERATION' | 'INVENTIONS' | 'TRADE';
  categoryText: string;
  image: string;
}

// 53 Extensive Historical Records representing almost all sovereign African Nations
const AFRICAN_HISTORY_RECORDS: HistoricalEntry[] = [
  {
    id: 1,
    country: "Algeria",
    flag: "🇩🇿",
    title: "Queen Dihya's Berber Coalition Resistance",
    era: "circa 690 AD",
    description: "Queen Dihya (the Kahina) mounted a highly organized sovereign coalition that successfully unified the indigenous Berber tribes of Numidia.",
    extendedDossier: "Queen Dihya of the Aurès led a unified religious and military coalition that temporarily drove expansionist forces out of eastern Algeria. Celebrated as an early symbol of indigenous sovereignty, she administered her empire with supreme tactical intelligence and is revered today in North African history as a matriarch of resistance.",
    category: "LIBERATION",
    categoryText: "Liberation & Resistance",
    image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 2,
    country: "Angola",
    flag: "🇦🇴",
    title: "Queen Nzinga's Diplomatic Sovereign Campaigns",
    era: "1620 - 1660 AD",
    description: "Queen Nzinga of Ndongo and Matamba masterfully navigated geopolitics, military strategy, and trade alliances to preserve Angolan freedom.",
    extendedDossier: "Faced with aggressive colonial annexations, Queen Nzinga Mbande of Ndongo repositioned herself as a senior diplomat. She commanded armies, integrated escapees into her forces, and famously sat on a human chair during negotiations to establish absolute legal equality with foreign envoys.",
    category: "LIBERATION",
    categoryText: "Liberation & Resistance",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 3,
    country: "Benin",
    flag: "🇧🇯",
    title: "The Dahomey Elite Female Guard Regiment",
    era: "1720 - 1890 AD",
    description: "An elite, highly disciplined all-female infantry regiment of the Kingdom of Dahomey that defended national sovereignty.",
    extendedDossier: "Known historically as the Dahomey Amazons, these female warriors underwent rigorous physical training, handled modern weaponry, and were crucial in securing Dahomey's regional prominence. They fought in defense of the kingdom in major engagements and held immense political influence within the court.",
    category: "EMPIRES",
    categoryText: "Golden Empires & Kingdoms",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 4,
    country: "Botswana",
    flag: "🇧🇼",
    title: "The Diplomatic Sovereignty Appeal of the Three Chiefs",
    era: "1895 AD",
    description: "Three paramount kings traveled directly to London to out-negotiate commercial developers and secure sovereign Bechuana lands.",
    extendedDossier: "Kings Khama III of the Bangwato, Sebele I of the Bakwena, and Bathoen I of the Bangwaketse successfully appealed to the public to shield Bechuana lands from Cecil Rhodes' British South Africa Company. Their proactive diplomacy ultimately secured the territory, laying the foundations of modern Botswana.",
    category: "TRADE",
    categoryText: "Heritage, Trade & Alliances",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 5,
    country: "Burkina Faso",
    flag: "🇧🇫",
    title: "The Sovereign Revolution of Upright Citizens",
    era: "1983 - 1987 AD",
    description: "Thomas Sankara spearheaded a massive self-reliance movement, renaming the state to the 'Land of Upright People'.",
    extendedDossier: "Spearheading extensive agrarian reforms, mass vaccinations, and ecological restoration (planting millions of trees to halt savanna desertification), Sankara's administration achieved absolute food security in under four years, creating a modern paradigm for self-driven African developmental philosophy.",
    category: "LIBERATION",
    categoryText: "Liberation & Resistance",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 6,
    country: "Burundi",
    flag: "🇧🇮",
    title: "The Ancient Burundian Traditional Monarchical Assembly",
    era: "16th - 19th Century",
    description: "A centralized, stable African monarchy that maintained strict agricultural and administrative sovereignty for centuries.",
    extendedDossier: "Led by a system of sacred rulers (the Mwamis), Burundi possessed a highly sophisticated grid of regional administrators (Ganwas). Through centuries of geopolitical changes in the Great Lakes region, they successfully safehouse local commerce, security, and spiritual cycles.",
    category: "EMPIRES",
    categoryText: "Golden Empires & Kingdoms",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 7,
    country: "Cameroon",
    flag: "🇨🇲",
    title: "King Njoya's Shümom Script & Cartography Invention",
    era: "1896 AD",
    description: "King Ibrahim Njoya of the Bamum Kingdom invented a unique, original graphic writing system to register local histories.",
    extendedDossier: "Recognizing that oral history was prone to loss, King Njoya invented a script containing dozens of phonograms and pictographs. He established schools, built printing presses, and produced comprehensive maps of his kingdom, leaving a brilliant intellectual legacy before modern administrative interference.",
    category: "INVENTIONS",
    categoryText: "Intellectual & Architectural Inventions",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 8,
    country: "Cape Verde",
    flag: "🇨🇻",
    title: "Amílcar Cabral’s Intellectual Liberation Crusade",
    era: "1956 - 1973 AD",
    description: "Guiding the anti-colonial struggle through profound pan-African philosophy, linking Cape Verde with major global networks.",
    extendedDossier: "Amílcar Cabral integrated rigorous intellectual analysis with active community organizing. He designed highly effective agricultural empowerment plans that mobilized the rural peasantry, proving that the foundation of true national liberation lies in complete cultural reclamation.",
    category: "LIBERATION",
    categoryText: "Liberation & Resistance",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 9,
    country: "Central African Republic",
    flag: "🇨🇫",
    title: "The Pre-Historic Astronomic Megaliths of Bouar",
    era: "circa 2000 BC",
    description: "Sophisticated, ancient stone monuments demonstrating advanced astronomical calendar calculations and engineering skills.",
    extendedDossier: "Preceding European contact by millennia, the megaliths of Bouar represent extensive architectural projects built for ritual and astronomical orientation. They trace equinox patterns with absolute geometric precision, validating deep scientific roots long established in Central Africa.",
    category: "INVENTIONS",
    categoryText: "Intellectual & Architectural Inventions",
    image: "https://images.unsplash.com/photo-1504257486386-b4ac9b245ab2?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 10,
    country: "Chad",
    flag: "🇹🇩",
    title: "Mai Dunama Dibbalemi's imperial trade consolidation",
    era: "1210 - 1248 AD",
    description: "The peak era of the Kanem-Bornu Empire, dominating vast desert commerce channels via diplomatic and trade alliances.",
    extendedDossier: "Sovereign ruler Dunama Dibbalemi consolidated Kanem's economic control by establishing massive caravan outposts across the Fezzan and securing bilateral alliances in North Africa. He introduced highly advanced military cavalry units and standardized weights for trans-Saharan merchants.",
    category: "TRADE",
    categoryText: "Heritage, Trade & Alliances",
    image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 11,
    country: "Comoros",
    flag: "🇰🇲",
    title: "The Shirazi Spice Sultanates Era",
    era: "15th Century",
    description: "Wealthy coral-stone coastal cities flourishing as essential spices and silk ports across the vast Indian Ocean trade.",
    extendedDossier: "Integrating Swahili maritime cultures with Shirazi merchants, the Comorian sultanates operated highly autonomous maritime councils. They exported precious spices, custom pottery, and tropical woods while maintaining extensive peaceful diplomatic connections with nearby Madagascar.",
    category: "TRADE",
    categoryText: "Heritage, Trade & Alliances",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 12,
    country: "Democratic Republic of Congo",
    flag: "🇨🇩",
    title: "The King Alfonso I Era of the Kingdom of Kongo",
    era: "1506 - 1543 AD",
    description: "A highly complex, extensive Central African empire managed by standardized regional codes and administrative letters.",
    extendedDossier: "Under Nzinga Mbemba (King Alfonso I), the Kongo Empire operated a highly refined state treasury and written diplomatic channel. In hundreds of official letters to European courts, he demanded trade parity, restricted unauthorized mercantile activities, and protected sovereign borders.",
    category: "EMPIRES",
    categoryText: "Golden Empires & Kingdoms",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 13,
    country: "Republic of the Congo",
    flag: "🇨🇬",
    title: "Loango Kingdom's Metallurgical Guild Dominance",
    era: "17th Century",
    description: "An ancient coastal confederacy celebrated for its peerless iron and copper works and structured regional trade councils.",
    extendedDossier: "The Kingdom of Loango administered an elaborate production grid for copper, textiles, and iron tools. They functioned under a sacred judicial body (the Nganga) which leveraged customary commercial codes that regulated high-volume regional markets and guaranteed peaceful trade.",
    category: "TRADE",
    categoryText: "Heritage, Trade & Alliances",
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 14,
    country: "Djibouti",
    flag: "🇩🇯",
    title: "Ancient Land of Punt maritime Conclaves",
    era: "circa 2500 BC",
    description: "The historical gold, custom resin, and precious woods hub described by ancient empires as the 'Land of the Gods'.",
    extendedDossier: "Djibouti's coast harbored massive trading ports that regularly exported high-grade frankincense, gold, and exotic fauna to Egypt and Mesopotamia. Ancient tablets detail the elaborate caravans and peaceful agreements established between Puntite Chiefs and foreign monarchs.",
    category: "TRADE",
    categoryText: "Heritage, Trade & Alliances",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 15,
    country: "Egypt",
    flag: "🇪🇬",
    title: "Ramesses II and the Sovereign Battle of Kadesh",
    era: "1274 BC",
    description: "Signed the world’s oldest recorded international peace treaty, carved on physical silver and clay tablets.",
    extendedDossier: "Following intense wars with the Hittite Empire, Pharaoh Ramesses II chose strategic verbal reconciliation over endless mutual destruction. The resulting Egyptian-Hittite Peace Treaty established mutual defense covenants and is honored today in the UN headquarters as a masterwork of diplomacy.",
    category: "EMPIRES",
    categoryText: "Golden Empires & Kingdoms",
    image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 16,
    country: "Equatorial Guinea",
    flag: "🇬🇶",
    title: "The Customary Bubi Environmental Council State",
    era: "18th Century",
    description: "A highly resilient assembly system of traditional chiefs that managed island ecology and preserved isolation.",
    extendedDossier: "On Bioko Island, the Bubi families established strict custom partitions that prohibited clear-cutting, managed marine yields, and successfully halted unauthorized colonial landings for over a century through coordinated coastal watchtowers and dynamic internal militias.",
    category: "INVENTIONS",
    categoryText: "Intellectual & Architectural Inventions",
    image: "https://images.unsplash.com/photo-150048993953-d23a436266cf?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 17,
    country: "Eritrea",
    flag: "🇪🇷",
    title: "The Aksumite Global Gateway Port of Adulis",
    era: "100 - 700 AD",
    description: "A prominent maritime center linking African interior trade routes with Rome, Greece, Byzantium, and ancient India.",
    extendedDossier: "Adulis operated under strict Aksumite custom laws, processing premium ivory, high-value gold dust, and custom frankincense. It was a multilingual, cosmopolitan hub where ancient astronomers, geographers, and kings documented early African technological mastery.",
    category: "TRADE",
    categoryText: "Heritage, Trade & Alliances",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 18,
    country: "Eswatini",
    flag: "🇸🇿",
    title: "King Sobhuza II's Sovereign Preservations",
    era: "1921 - 1982 AD",
    description: "The world's longest-reigning modern monarch who successfully insulated Swazi culture from external colonial erasures.",
    extendedDossier: "Sobhuza II combined traditional Swazi social models (like the Luseendvo family assembly) with acute legal arguments in western courts to buy back ancestral lands. He ensured that Eswatini achieved complete independence while holding its ancient customs perfectly intact.",
    category: "EMPIRES",
    categoryText: "Golden Empires & Kingdoms",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 19,
    country: "Ethiopia",
    flag: "🇪🇹",
    title: "The Epochal Battle of Adwa Sovereign Victory",
    era: "1896 AD",
    description: "Emperor Menelik II and Empress Taytu united Ethiopia to comprehensively defeat invading foreign armies.",
    extendedDossier: "Defying colonial calculations, Empress Taytu Betul and Emperor Menelik II mobilized over 100,000 unified soldiers from all regional ethnicities. Their decisive battle at Adwa forced foreign empires to unconditionally recognize Ethiopian sovereignty, defining Ethiopia as an eternal beacon of African liberties.",
    category: "LIBERATION",
    categoryText: "Liberation & Resistance",
    image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 20,
    country: "Gabon",
    flag: "🇬🇦",
    title: "The Maritime Sovereign Mastery of the Orungu Kingdom",
    era: "18th Century",
    description: "Monarchs who utilized high-quality local shipwright engineering to dominate trading lanes around the river delta.",
    extendedDossier: "The Orungu Kingdom systematically charged tolls on all European vessels entering the Gabon River. They operated a complex fleet of canoes built from premium local timber and enforced strict customs regulations that kept outer mercantilism under full kingly control.",
    category: "TRADE",
    categoryText: "Heritage, Trade & Alliances",
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 21,
    country: "Gambia",
    flag: "🇬🇲",
    title: "The Oral Griot Academies of the Gambia River",
    era: "15th - 19th Century",
    description: "A highly sophisticated system of traditional historians who memorized centuries of genealogies, treaties, and laws.",
    extendedDossier: "In the Mandinka kingdoms along the Gambia River, the Griots (Jalis) were not merely musicians, but senior state advisors and legal archives. They preserved the complex constitutional laws of the Mali Empire, proving that non-written history can hold absolute systemic precision.",
    category: "INVENTIONS",
    categoryText: "Intellectual & Architectural Inventions",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 22,
    country: "Ghana",
    flag: "🇬🇭",
    title: "The Ashanti Empire & The Golden Stool of Unity",
    era: "1701 AD",
    description: "King Osei Tutu I and Okomfo Anokye unified independent clans into a wealthy, highly centralized empire.",
    extendedDossier: "By summoning the Golden Stool (Sika Dwa) as the sacred collective soul of the Ashanti nation, King Osei Tutu I forged a durable confederacy. Backed by brilliant military organization, civil service codes, and gold-weight currencies, Ashanti became one of the most formidable empires of West Africa.",
    category: "EMPIRES",
    categoryText: "Golden Empires & Kingdoms",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 23,
    country: "Guinea",
    flag: "🇬🇳",
    title: "Almamy Samori Touré's Wassoulou Military State",
    era: "1878 - 1898 AD",
    description: "A highly organized modern anti-colonial state featuring domestic weapons workshops and professional cavalry.",
    extendedDossier: "Samori Touré built a sprawling empire in Guinea and Mali, structuring it into standardized military and administrative divisions. He established indigenous factories to repair firearms and successfully deployed scorched-earth defensive strategies for decades against colonial armies.",
    category: "LIBERATION",
    categoryText: "Liberation & Resistance",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 24,
    country: "Guinea-Bissau",
    flag: "🇬🇼",
    title: "The Epic Siege of Kansala and Kaabu Greatness",
    era: "1867 AD",
    description: "The historic stand of the Mandinka Kaabu Empire to preserve national honor during major regional warfare.",
    extendedDossier: "When Kansala came under overwhelming siege, Emperor Dianke Wali chose self-determination over capitulation. The epic history of the courage shown by Kaabu warriors remains a foundational, highly respected oral narrative across modern Upper Guinea and Senegal.",
    category: "LIBERATION",
    categoryText: "Liberation & Resistance",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 25,
    country: "Ivory Coast",
    flag: "🇨🇮",
    title: "Queen Abla Pokou and the Baoulé Dynasty",
    era: "circa 1750 AD",
    description: "Queen Pokou sacrificed her personal comfort to lead her people east, founding a prosperous, lasting kingdom.",
    extendedDossier: "Fleeing internal Ashanti dynastic struggles, Queen Pokou guided thousands of emigrants through dense forests to the Comoe River. Oral history records her deep devotion, sacrificing her child to the river spirits to secure safe passage, subsequently founding the unified Baoulé Kingdom.",
    category: "EMPIRES",
    categoryText: "Golden Empires & Kingdoms",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 26,
    country: "Kenya",
    flag: "🇰🇪",
    title: "Field Marshal Dedan Kimathi & Mau Mau Resistance",
    era: "1952 - 1956 AD",
    description: "The Land and Freedom Army launched a highly resilient guerrilla campaign to reclaim ancestral lands.",
    extendedDossier: "Operating from the dense, cloud-shrouded Aberdare forests, Dedan Kimathi set up complex secret base grids, messaging networks, and makeshift weapon manufacturing centers. Their unyielding resistance shattered colonial military confidence and paved the way for Kenya's ultimate independence.",
    category: "LIBERATION",
    categoryText: "Liberation & Resistance",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 27,
    country: "Lesotho",
    flag: "🇱🇸",
    title: "King Moshoeshoe I's Mount Thaba Bosiu Diplomacy",
    era: "1824 - 1870 AD",
    description: "Utilized rugged mountain fortresses and brilliant visual diplomacy to merge scattered clans into the Basotho Nation.",
    extendedDossier: "During a time of massive regional realignments (the Lifaqane), Moshoeshoe I converted the flat-topped mountain of Thaba Bosiu into an impregnable defensive sanctuary. He combined physical resistance with calculated peace agreements, ensuring Lesotho preserved its unique national identity.",
    category: "EMPIRES",
    categoryText: "Golden Empires & Kingdoms",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 28,
    country: "Liberia",
    flag: "🇱🇷",
    title: "Africa’s Oldest Modern Independent Republic",
    era: "1847 AD",
    description: "Establishing a sovereign commonwealth and drafting a constitution to guarantee self-rule under President J.J. Roberts.",
    extendedDossier: "Faced with trade challenges by European merchant vessels, Liberia declared itself a free, independent state in 1847. They drafted a constitution modeled on standard democratic principles, successfully maintaining their sovereignty throughout the 19th-century colonial scrambles.",
    category: "LIBERATION",
    categoryText: "Liberation & Resistance",
    image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 29,
    country: "Libya",
    flag: "🇱🇾",
    title: "The Subterranean Aquifer Civilizations of the Garamantes",
    era: "500 BC - 500 AD",
    description: "Built magnificent underground canal grids (foggaras) to cultivate beautiful desert sands into thriving oases.",
    extendedDossier: "The Garamantes developed highly advanced desert irrigation grids, mining fossil waters stored deep beneath the Sahara. They operated powerful wheeled chariots, maintained extensive trade networks, and constructed massive stone fortresses, illustrating sophisticated subterranean hydraulic mastery.",
    category: "INVENTIONS",
    categoryText: "Intellectual & Architectural Inventions",
    image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 30,
    country: "Madagascar",
    flag: "🇲🇬",
    title: "Queen Ranavalona I's Unyielding Sovereign Autonomy",
    era: "1828 - 1861 AD",
    description: "A determined queen who fiercely insulated Malagasy culture and resisted foreign political control.",
    extendedDossier: "Queen Ranavalona I successfully maintained the sovereignty of the Merina Kingdom during a highly critical period of foreign colonial pressure. She prioritized domestic manufacturing, built standing army cadres, and strictly restricted foreign religious and merchant interventions.",
    category: "LIBERATION",
    categoryText: "Liberation & Resistance",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 31,
    country: "Malawi",
    flag: "🇲🇼",
    title: "Chief M'mbelwa I the Sovereign Ngoni Assemblies",
    era: "1850 - 1890 AD",
    description: "Traditional assemblies that preserved indigenous law and rejected colonial assimilation policies.",
    extendedDossier: "Under Inkosi ya Makosi M'mbelwa I, the northern Ngoni maintained a highly organized military and representative assembly. Through structured, strategic diplomacy, he insulated his people from immediate colonial administrative conversions and sustained traditional pastoral laws.",
    category: "EMPIRES",
    categoryText: "Golden Empires & Kingdoms",
    image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 32,
    country: "Mali",
    flag: "🇲🇱",
    title: "Mansa Musa’s Epochal Pilgrimage of Wealth",
    era: "1324 AD",
    description: "Mansa Musa traveled to Mecca with legendary train of gold, establishing Mali as the global center of intellect.",
    extendedDossier: "Distributing immense quantities of pure gold during his passage through Egypt, Mansa Musa literally reshaped Mediterranean bullion markets. He brought back world-class architects like Abu Ishaq al-Sahili who constructed the legendary Djinguereber Mosque in Timbuktu, cementing Mali's educational supremacy.",
    category: "EMPIRES",
    categoryText: "Golden Empires & Kingdoms",
    image: "https://images.unsplash.com/photo-1544208002-ab3db95bfbce?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 33,
    country: "Mauritania",
    flag: "🇲🇷",
    title: "The Caravan Scholar Libraries of Chinguetti",
    era: "11th - 17th Century",
    description: "A majestic desert trade city housing thousands of medieval manuscripts on astronomy, mathematics, and science.",
    extendedDossier: "Chinguetti was a vital resting station for trans-Saharan merchants and pilgrims. Its scholars compiled vast private libraries featuring hand-painted leather-bound volumes on Quranic law, advanced algebra, and planetary charts, proving the desert hosted vast networks of high literacy.",
    category: "INVENTIONS",
    categoryText: "Intellectual & Architectural Inventions",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 34,
    country: "Mauritius",
    flag: "🇲🇺",
    title: "The Battle of Grand Port & Maroon Freedom Colonies",
    era: "1810 AD",
    description: "A major maritime battle that reshaped regional control, alongside independent maroon settlements in the high forests.",
    extendedDossier: "While foreign fleets clashed for control of Mauritius, escaped slaves (Maroons) established independent, self-sufficient communities in the rugged Le Morne Brabant peak. Today, the island stands as a global symbol of multi-ethnic harmony and relentless pursuit of freedom.",
    category: "LIBERATION",
    categoryText: "Liberation & Resistance",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 35,
    country: "Morocco",
    flag: "🇲🇦",
    title: "Fatima al-Fihri & al-Qarawiyyin University Foundation",
    era: "859 AD",
    description: "The world’s oldest continuously operating university, founded by a visionary, wealthy young Muslim woman.",
    extendedDossier: "Using her immense family inheritance, Fatima al-Fihri established the al-Qarawiyyin Mosque and campus in Fes. It became the premier academic hub where scholars like Ibn Khaldun studied, recognized by UNESCO as the oldest institution granting continuous academic degrees on Earth.",
    category: "INVENTIONS",
    categoryText: "Intellectual & Architectural Inventions",
    image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 36,
    country: "Mozambique",
    flag: "🇲🇿",
    title: "The Ancient Maritime Trade Fortress of Manyikeni",
    era: "12th - 17th Century",
    description: "A massive, dry-stone walled administrative capital managing gold and pottery trade with Indian Ocean merchants.",
    extendedDossier: "Linked culturally to the Great Zimbabwe complex, Manyikeni was a prominent regional seat of power. Its residents possessed advanced cattle husbandry grid, processed high-value copper items, and channeled gold exports to coastal ports like Sofala, engaging directly with global global economies.",
    category: "TRADE",
    categoryText: "Heritage, Trade & Alliances",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 37,
    country: "Namibia",
    flag: "🇳🇦",
    title: "Hendrik Witbooi’s Innovative Mobile Guerrilla Warfare",
    era: "1890 - 1905 AD",
    description: "Deploying high-speed mobile infantry and expert marksmanship to protect indigenous Nama territories.",
    extendedDossier: "Hendrik Witbooi (Kaptein of the Kowese Nama) designed a highly sophisticated system of modern mobile warfare, utilizing horses, rifles, and deep desert visual concealment. His written journals contain detailed legal letters and treaties of peace, reflecting a brilliant military mind.",
    category: "LIBERATION",
    categoryText: "Liberation & Resistance",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 38,
    country: "Niger",
    flag: "🇳🇪",
    title: "The Clay Architecture of Agadez Sultanate",
    era: "15th Century",
    description: "Tuareg alliances built the magnificent Agadez Mosque, the tallest clay-brick structure in the Sahara.",
    extendedDossier: "The Sultanate of Aïr at Agadez unified mobile desert clans under a structured judicial and trade pact. They engineered a magnificent, towering mosque made entirely of clay and wood poles, establishing an architectural wonder that protected travelers across hot trade lanes.",
    category: "INVENTIONS",
    categoryText: "Intellectual & Architectural Inventions",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 39,
    country: "Nigeria",
    flag: "🇳🇬",
    title: "The Royal Bronze Plaque Guilds of the Kingdom of Benin",
    era: "13th - 16th Century",
    description: "Pioneered sophisticated lost-wax copper casting to document political history on beautiful bronze plaques.",
    extendedDossier: "Benin brass-casters created exquisite sculptures of deep artistic and historical weight, decorating the pillars of the Oba's palace. These relief plaques recorded historic campaigns, state ceremonies, and diplomatic meetings, representing some of the zenith achievements of physical art on earth.",
    category: "INVENTIONS",
    categoryText: "Intellectual & Architectural Inventions",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 40,
    country: "Rwanda",
    flag: "🇷🇼",
    title: "Mwami Cyilima II Rugwe & Traditional Royal Councils",
    era: "14th Century",
    description: "Established centralized codes of court governance, agro-pastoral laws, and cultural institutions as early anchors.",
    extendedDossier: "Mwami Cyilima II Rugwe instituted early codifications of the Ubwiru—a complex oral judicial constitution memorized by specialized royal keepers. This legal charter managed administrative appointments, controlled livestock distribution, and resolved disputes with absolute sovereign parity.",
    category: "EMPIRES",
    categoryText: "Golden Empires & Kingdoms",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 41,
    country: "Senegal",
    flag: "🇸🇳",
    title: "The Electoral Chieftaincy Council of the Jolof Empire",
    era: "1350 - 1549 AD",
    description: "A grand western confederacy of kingdoms managed by a highly structured electoral college of chiefs.",
    extendedDossier: "The Jolof Empire operated under a constitutional monarchy where the supreme ruler (the Bourba Jolof) was elected directly by a council of chiefs. This system ensured checks and balances, structured regional trade revenues, and held peace for over two centuries.",
    category: "EMPIRES",
    categoryText: "Golden Empires & Kingdoms",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 42,
    country: "Seychelles",
    flag: "🇸🇨",
    title: "The Silhouette Island Maroon Settlements",
    era: "18th Century",
    description: "Establishing cooperative communities of escapees who successfully sustained agricultural and maritime liberties.",
    extendedDossier: "In the rugged mountainous peaks of Silhouette Island, escaped slaves formed highly egalitarian, self-contained coastal redoubts. They devised original fishing and food cultivation grids, defending their communities from ship hunters and preserving traditional African survival ways.",
    category: "LIBERATION",
    categoryText: "Liberation & Resistance",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 43,
    country: "Sierra Leone",
    flag: "🇸🇱",
    title: "Bai Bureh's Masterful Forest Defense Campaign",
    era: "1898 AD",
    description: "The Temne King who deployed brilliantly executed forest barricades to force aggressive colonial entities into a stalemate.",
    extendedDossier: "Opposing the illegal Hut Tax, Bai Bureh utilized his deep knowledge of jungle warfare to mount a highly disciplined guerrilla campaign. He designed interlocking earthen barricades and concealed trail nets, holding colonial forces off for ten months with minimal loss before peace negotiations.",
    category: "LIBERATION",
    categoryText: "Liberation & Resistance",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 44,
    country: "Somalia",
    flag: "🇸🇴",
    title: "The Hydraulic Stone Fortress Engineering of the Ajuran Empire",
    era: "14th - 17th Century",
    description: "A dominant maritime sultanate that constructed deep limestone well-grids and grand coastal citadels.",
    extendedDossier: "The Ajuran Empire systematically mapped coastal winds, monopolized Indian Ocean trade, and engineered vast stone fortress systems. They operated a highly organized administrative center that held sovereign commercial contracts with empires in Asia and Europe.",
    category: "INVENTIONS",
    categoryText: "Intellectual & Architectural Inventions",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 45,
    country: "South Africa",
    flag: "🇿🇦",
    title: "The Zulu Kingdom & The Sovereign Battle of Isandlwana",
    era: "1879 AD",
    description: "The Zulu army comprehensively defeated modern invading columns using the 'Buffalo Horns' tactical grid.",
    extendedDossier: "Led by traditional tactical innovations established by Shaka, the Zulu regiments under King Cetshwayo outmaneuvered heavily armed foreign divisions at Isandlwana. It stands as one of the most stunning military victories of an indigenous African power against European imperial forces.",
    category: "LIBERATION",
    categoryText: "Liberation & Resistance",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 46,
    country: "South Sudan",
    flag: "🇸🇸",
    title: "The Reth Monarchs of the Kingdom of Shilluk",
    era: "15th - 19th Century",
    description: "A centralized Nile River kingdom that utilized royal canoe fleets to enforce trade security and peace.",
    extendedDossier: "The Shilluk consolidated their state along the White Nile under a sacred king (the Reth). They established highly specialized nautical divisions that patrolled the riverways, standardized fishing and agricultural allocations, and successfully resisted early external attempts to disrupt regional trade.",
    category: "EMPIRES",
    categoryText: "Golden Empires & Kingdoms",
    image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 47,
    country: "Sudan",
    flag: "🇸🇩",
    title: "The Nubian Pharaohs of the Kingdom of Kush",
    era: "750 - 656 BC",
    description: "The 25th Dynasty of Egypt was launched from Napata, reunifying the Nile Valley with towering black pharaohs.",
    extendedDossier: "King Piye and Taharqa of Kush conquered and restored a fractured Egypt, building hundreds of steep sand-brick pyramids at Meroe. Their Kushite civilization spearheaded ironworks and developed the Meroitic script, proving ancient Sudan was an industrial dynamo.",
    category: "EMPIRES",
    categoryText: "Golden Empires & Kingdoms",
    image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 48,
    country: "Tanzania",
    flag: "🇹🇿",
    title: "The Kilwa Kisiwani Swahili Coral Mosque",
    era: "13th Century",
    description: "A monumental city built entirely of coral stone, commanding the gold trade across the East African coast.",
    extendedDossier: "Kilwa Kisiwani operated a massive trading hub under local sultans, minting original copper currencies and constructing the spectacular Great Mosque—an elegant structure of domes and vaults engineered entirely with coral mortar, illustrating pre-colonial Swahili coastal prominence.",
    category: "INVENTIONS",
    categoryText: "Intellectual & Architectural Inventions",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 49,
    country: "Togo",
    flag: "🇹🇬",
    title: "The Massive Protective Clay Walls of Notse",
    era: "17th Century",
    description: "A legendary city fortified by massive, hand-beaten defensive clay walls protecting the Ewe people.",
    extendedDossier: "To safeguard their community assets, the Ewe under King Agokoli engineered highly durable earthen ramparts that spanned miles. This fortification provided food security and defense, becoming a legendary site of cultural endurance and subsequent peaceful migrations.",
    category: "INVENTIONS",
    categoryText: "Intellectual & Architectural Inventions",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 50,
    country: "Tunisia",
    flag: "🇹🇳",
    title: "Queen Dido and the Maritime Founding of Carthage",
    era: "814 BC",
    description: "A prominent maritime empire that dominated Mediterranean trade and challenged foreign supremacy.",
    extendedDossier: "Led by Queen Elissa (Dido), Carthage grew to become a highly sophisticated city-state. They engineered massive double-harbors (Cothons) capable of holding hundreds of vessels and developed complex constitutional systems, presenting a highly advanced economic model in North Africa.",
    category: "EMPIRES",
    categoryText: "Golden Empires & Kingdoms",
    image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 51,
    country: "Uganda",
    flag: "🇺🇬",
    title: "Buganda Kingdom’s Sovereign Chieftaincy Parliament",
    era: "18th - 19th Century",
    description: "A highly organized kingdom managed by a formal parliament (the Lukiiko) and standard tax commissions.",
    extendedDossier: "Under Kabaka Mutesa I, Buganda held an incredibly centralized state framework. The Lukiiko assembly gathered senior counts and traditional chiefs who voted on regional trade policies, maintained large canoe fleets on Lake Victoria, and guarded sovereign judicial boundaries.",
    category: "EMPIRES",
    categoryText: "Golden Empires & Kingdoms",
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 52,
    country: "Zambia",
    flag: "🇿🇲",
    title: "The East-West Trade Bridges of Mwata Kazembe",
    era: "18th Century",
    description: "A highly organized sovereign trading network that connected Atlantic and Indian Ocean kingdoms.",
    extendedDossier: "The Lunda Empire of King Mwata Kazembe maintained highly standard merchant roads and standard diplomatic emissaries. They systematically taxed trading caravans, managed high-volume salt and copper extraction, and operated custom warehouses, showing deep economic self-reliance.",
    category: "TRADE",
    categoryText: "Heritage, Trade & Alliances",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: 53,
    country: "Zimbabwe",
    flag: "🇿🇼",
    title: "Great Zimbabwe's Granite Mortarless Architecture",
    era: "11th - 15th Century",
    description: "A majestic capital city built wholly of dry granite stone blocks without any cement or adhesive.",
    extendedDossier: "Great Zimbabwe was the administrative center of a wealthy empire that processed gold, bred selective cattle lines, and imported custom pottery from China and Persia. Its towering 36-foot-high clay-free stone walls stand today as a monumental tribute to ancestral African architectural genius.",
    category: "INVENTIONS",
    categoryText: "Intellectual & Architectural Inventions",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=400&h=300"
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState<'ALL' | 'EMPIRES' | 'LIBERATION' | 'INVENTIONS' | 'TRADE'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeHistoryIndex, setActiveHistoryIndex] = useState<number | null>(null);

  // Search & filter logic combined
  const filteredRecords = AFRICAN_HISTORY_RECORDS.filter(rec => {
    const matchesFilter = filter === 'ALL' || rec.category === filter;
    const matchesSearch = 
      rec.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories: { code: 'ALL' | 'EMPIRES' | 'LIBERATION' | 'INVENTIONS' | 'TRADE'; text: string }[] = [
    { code: 'ALL', text: 'All Great Histories 🌍' },
    { code: 'EMPIRES', text: 'Golden Kingdoms 👑' },
    { code: 'LIBERATION', text: 'Liberation Struggles ✊' },
    { code: 'INVENTIONS', text: 'Architecture & Science 📖' },
    { code: 'TRADE', text: 'Trade & Alliances 🤝' },
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeHistoryIndex === null) return;
    const currentIndex = filteredRecords.findIndex(r => r.id === activeHistoryIndex);
    const nextIndex = (currentIndex + 1) % filteredRecords.length;
    setActiveHistoryIndex(filteredRecords[nextIndex].id);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeHistoryIndex === null) return;
    const currentIndex = filteredRecords.findIndex(r => r.id === activeHistoryIndex);
    const prevIndex = (currentIndex - 1 + filteredRecords.length) % filteredRecords.length;
    setActiveHistoryIndex(filteredRecords[prevIndex].id);
  };

  const activeRecord = AFRICAN_HISTORY_RECORDS.find(r => r.id === activeHistoryIndex);

  return (
    <section 
      id="gallery" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-transparent border-t-2 border-gold-500/20 overflow-hidden"
    >
      {/* VIBRANT BACKGROUND AMBIENT CHANNELS */}
      <div className="absolute top-[20%] left-[-200px] w-[500px] h-[500px] rounded-full bg-emerald-600/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-100px] w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* MAGNIFICENT HEADER CONTAINER */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-gold-500/40 text-gold-400 font-mono text-xs uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 animate-spin-slow" />
            <span>The Grand African Archives</span>
          </div>
          
          <h2 className="font-serif text-3.5xl sm:text-5xl lg:text-6xl font-black text-gold-100 tracking-tight uppercase leading-none">
            The Archive of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-400 to-emerald-400 font-bold">
              African Great History
            </span>
          </h2>
          
          <div className="h-[2px] w-48 bg-gradient-to-r from-rose-600 via-amber-500 to-emerald-600 mx-auto rounded-full mt-4" />
          
          <p className="font-sans text-sm sm:text-base text-royal-100/80 leading-relaxed max-w-2xl mx-auto font-light pt-2">
            Explore a powerful compiled registry of over forty monumental eras, dynasties, and resistance movements across the sovereign African continent. Use our instant country filter or typing lookup to read the authentic historical commentary.
          </p>
        </div>

        {/* SEARCH AND FILTER INTERFACE BLOCK */}
        <div className="max-w-4xl mx-auto space-y-6 mb-12">
          {/* Country / Keyword search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold-400/60" />
            <input 
              type="text"
              placeholder="Search historical records by country, dynasty, keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#0a0d15]/80 border-2 border-gold-500/20 rounded-xl text-sm font-sans text-royal-50 placeholder-royal-100/40 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all shadow-inner"
            />
          </div>

          {/* Quick Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.code}
                id={`history-filter-${cat.code}`}
                onClick={() => setFilter(cat.code)}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                  filter === cat.code
                    ? 'bg-gradient-to-r from-amber-600 to-gold-500 text-royal-950 border-gold-300 shadow-xl shadow-gold-500/10 font-black'
                    : 'bg-[#101524]/60 hover:bg-[#151c30] border-gold-500/10 text-royal-100/70 hover:text-royal-100'
                }`}
              >
                {cat.text}
              </button>
            ))}
          </div>
        </div>

        {/* COUNTER GRID STATUS */}
        <div className="text-center mb-6 font-mono text-[10.5px] text-royal-100/40 uppercase tracking-widest">
          Showing <span className="text-gold-400 font-bold">{filteredRecords.length}</span> Sovereign Historical Milestones of Africa
        </div>

        {/* HISTORY CARDS GRID */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredRecords.map((item) => (
              <motion.div
                key={item.id}
                layout
                id={`history-item-${item.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-xl overflow-hidden bg-gradient-to-b from-[#0f1423] to-[#070a11] border-2 border-gold-500/15 flex flex-col justify-between cursor-pointer h-[380px] shadow-2xl hover:border-gold-400 transition-all duration-300 hover:-translate-y-1.5"
                onClick={() => setActiveHistoryIndex(item.id)}
              >
                {/* Visual Cover Header */}
                <div className="relative w-full h-[52%] overflow-hidden bg-[#05070c]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out" 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Subtle black fade gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d14] via-[#090d14]/30 to-transparent pointer-events-none" />
                  
                  {/* Country Stamp Corner */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#070a11]/90 border border-gold-500/30 text-gold-300 text-[10px] font-mono uppercase font-black tracking-wider leading-none shadow-lg">
                    <span>{item.flag}</span>
                    <span>{item.country}</span>
                  </div>

                  {/* Era badge */}
                  <div className="absolute top-3 right-3 px-2 py-1 rounded bg-rose-950/90 border border-rose-500/30 text-rose-300 text-[9px] font-mono uppercase font-bold tracking-wider leading-none">
                    {item.era}
                  </div>

                  {/* View hover trigger icon */}
                  <div className="absolute inset-0 bg-royal-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-gold-500/10 border border-gold-500/40 text-gold-400 font-mono text-[10px] uppercase tracking-widest leading-none">
                      <Eye className="w-3.5 h-3.5 animate-pulse" />
                      Read Full Dossier
                    </div>
                  </div>
                </div>

                {/* Narrative core */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#090d14] to-[#06090e] border-t border-gold-500/10 text-left">
                  <div className="space-y-1.5">
                    <span className="font-mono text-[9px] font-bold text-amber-500 uppercase tracking-widest block leading-none">
                      {item.categoryText}
                    </span>
                    <h3 className="font-serif text-[15px] sm:text-base font-black text-gold-100 group-hover:text-gold-300 transition-colors line-clamp-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[11px] text-royal-100/60 leading-relaxed line-clamp-3 font-light pt-1">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-gold-500/10 shrink-0">
                    <span className="font-mono text-[9.5px] text-royal-100/40 uppercase tracking-widest">
                      REF ID: #A-{String(item.id).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-[10px] text-gold-400 font-extrabold hover:underline flex items-center gap-1">
                      Explore History •
                    </span>
                  </div>
                </div>

                {/* Certificate ornamental elements */}
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gold-500/20 rounded-bl group-hover:border-gold-500/40 transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold-500/20 rounded-br group-hover:border-gold-500/40 transition-colors"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search results */}
        {filteredRecords.length === 0 && (
          <div className="text-center py-16 royal-glass max-w-2xl mx-auto p-10 rounded-xl border border-gold-500/10 bg-[#090c13]/40 mt-6">
            <BookOpen className="w-12 h-12 text-gold-500/30 mx-auto mb-3" />
            <p className="font-sans text-sm text-royal-100/50">
              No historical archives matched your query (<strong className="text-gold-400">"{searchQuery}"</strong>).
            </p>
            <p className="font-sans text-xs text-royal-100/40 mt-1">
              Ensure proper spelling of country names like Senegal, Ethiopia, Egypt, etc.
            </p>
          </div>
        )}

        {/* STUDY LIGHTBOX MODAL EXPANSIONS */}
        <AnimatePresence>
          {activeHistoryIndex !== null && activeRecord && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-royal-950/98 backdrop-blur-md"
              onClick={() => setActiveHistoryIndex(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 220 }}
                className="relative max-w-3xl w-full p-5 sm:p-7 rounded-2xl border-2 border-gold-500/30 bg-gradient-to-b from-[#0e1322] to-[#070a11] shadow-2xl flex flex-col gap-6"
                onClick={(e) => e.stopPropagation()}
              >
                
                {/* Close Button Trigger */}
                <button
                  id="close-lightbox-btn"
                  onClick={() => setActiveHistoryIndex(null)}
                  className="absolute -top-3 -right-3 p-2.5 rounded-full bg-[#0a0d15] border border-gold-500 text-gold-400 hover:text-gold-200 shadow-xl cursor-pointer hover:scale-105 active:scale-95 transition-all"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Big Image Section */}
                <div className="relative w-full h-[220px] rounded-lg overflow-hidden border border-gold-500/15 bg-royal-950/50 select-none">
                  <img 
                    src={activeRecord.image} 
                    alt={activeRecord.title} 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Visual overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1322] via-transparent to-transparent pointer-events-none" />
                  
                  {/* Meta tag */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded bg-[#0a0d15] border border-gold-500/30 text-gold-300 text-xs font-mono uppercase font-black tracking-wider leading-none">
                    <span>{activeRecord.flag}</span>
                    <span>{activeRecord.country}</span>
                  </div>

                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded bg-rose-950 border border-rose-500/30 text-rose-300 text-[10px] font-mono uppercase font-bold tracking-wider leading-none">
                    Period: {activeRecord.era}
                  </div>
                </div>

                {/* Text Content Area */}
                <div className="text-left space-y-4">
                  <div className="space-y-1.5">
                    <span className="font-mono text-[9px] font-bold text-amber-500 border border-gold-500/20 px-2 py-0.5 rounded uppercase tracking-widest">
                      {activeRecord.categoryText}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-black text-gold-100 tracking-tight leading-tight uppercase pt-1">
                      {activeRecord.title}
                    </h3>
                  </div>

                  {/* Primary text */}
                  <div className="p-4 rounded-xl border border-gold-500/10 bg-[#080b12] text-xs sm:text-sm font-sans text-royal-100/90 leading-relaxed font-light scrollbar-thin">
                    <strong className="text-gold-400 block font-mono text-[10px] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 leading-none">
                      <FileText className="w-3.5 h-3.5" /> Historical Narrative Dossier
                    </strong>
                    {activeRecord.extendedDossier}
                  </div>

                  {/* Secondary commentary */}
                  <p className="font-sans text-[11px] text-royal-100/60 leading-relaxed italic border-l-2 border-emerald-500/40 pl-3">
                    "This documented milestone reinforces the core integrity of early African socio-administrative, educational, and defense configurations, proving deep sovereign capability before outside historical interventions."
                  </p>
                </div>

                {/* Footer directory controllers */}
                <div className="flex items-center justify-between pt-4 border-t border-gold-500/10 shrink-0 select-none">
                  <div className="text-left">
                    <span className="font-mono text-[9px] text-royal-100/40 block leading-none">CATALOG RESOURCE</span>
                    <span className="font-mono text-[10.5px] text-gold-400/80 font-bold uppercase block tracking-wider">#A-REGISTRY-{String(activeRecord.id).padStart(2, '0')}</span>
                  </div>

                  <div className="flex items-center gap-3 py-1 px-4 rounded bg-[#0a0d15] border border-gold-500/20 text-xs text-gold-400 font-mono">
                    <button onClick={handlePrev} className="hover:text-gold-200 font-bold flex items-center gap-1 cursor-pointer">
                      <ChevronLeft className="w-3.5 h-3.5" /> Prev
                    </button>
                    <span className="text-royal-100/40">|</span>
                    <span>
                      {filteredRecords.findIndex(r => r.id === activeHistoryIndex) + 1} / {filteredRecords.length}
                    </span>
                    <span className="text-royal-100/40">|</span>
                    <button onClick={handleNext} className="hover:text-gold-200 font-bold flex items-center gap-1 cursor-pointer">
                      Next <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Decorative borders for the modal frames */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold-500/50 rounded-tl pointer-events-none"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold-500/50 rounded-tr pointer-events-none"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold-500/50 rounded-bl pointer-events-none"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold-500/50 rounded-br pointer-events-none"></div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
