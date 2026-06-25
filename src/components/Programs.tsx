import { useState } from 'react';
import { motion } from 'motion/react';
import { RoyalImage } from './RoyalImage';
import { Award, Calendar, ShieldCheck, MapPin, Sparkles, ChevronRight, Gavel, HeartHandshake } from 'lucide-react';

const TIMELINE_CAMPAIGNS = [
  {
    year: "2012 Inaugural",
    title: "Ghana Thank You Awards (First Edition, Cape Coast)",
    content: "Peace Tower of Africa has designed an event dubbed the Ghana Thank You Awards to honour individuals and organizations that have made positive impacts on Ghanaians living in Ghana and abroad, they are tasked to support a worthy cause. With the first event which doubles up as the first edition of the Ghana Thank You Awards 2012, the organization tasked its awardees to support the advocacy of Female into Commercial Driving and trained few ladies as commercial drivers at Cape Coast since the award took place there.",
    tag: "Driving Empowerment",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    imageIndex: 1
  },
  {
    year: "2012 Elections",
    title: "Youth Electoral Peace & Regional Volunteers Deployment",
    content: "Stop violence which has been perpetrated by the youth during elections and help contribute effectively for the development of their respective communities and Ghana as a whole. PTA deployed about 46 volunteers in seven (7) out of the ten (10) regions in Ghana in the 2012 General Elections.",
    tag: "National Peace Patrol",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    imageIndex: 2
  },
  {
    year: "2013 Appeal",
    title: "Supreme Court Election Petition Conciliation",
    content: "The PTA and World Peace Volunteers 2013 invited the former president J. Mahama and few senior citizens to accept the 2012 general election petition result which was challenged at the Supreme Court through GTYA awards, preserving democratic concord.",
    tag: "Judicial Harmony",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    imageIndex: 3
  },
  {
    year: "2014 Conclave",
    title: "Western Regional House of Chiefs Assembly",
    content: "The PTA in 2014 assembled the full house of Paramount Chiefs in the Western Regional House of Chiefs including the regional Minister of State and the deputy. The kings were addressed by Tawia N. Hemans (President PTA) to promote peace in the region to attract investors.",
    tag: "Paramount Coalition",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    imageIndex: 6
  },
  {
    year: "2015 Safety",
    title: "Road Accident Campaign & FGM Eradication Advocacy",
    content: "The PTA campaigned against rampant road accidents on our roads in 2015 and launched Females into Commercial Driving, training few ladies in Takoradi. Concurrently, Nana Adwoa Amos educated on the eradication of FGM and Violence in elections in Ghana.",
    tag: "Social Rights & Safety",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    imageIndex: 5
  },
  {
    year: "2016 Tour",
    title: "Four-Region Grassroots Peace Campaigns Tour",
    content: "The dedicated teams organized robust Peace Campaigns tours through Western, Eastern, Ashanti and Greater Accra regions for the 2016 General Elections. They visited schools, Churches, Mosques, and Media Houses to spread non-violence.",
    tag: "Grassroots Tour",
    badgeColor: "bg-gold-500/10 text-gold-400 border-gold-500/20",
    imageIndex: 14
  },
  {
    year: "2018 - 2019",
    title: "Ghana Showcasing Africa Peace Tower & Refugee Support",
    content: "An initiative by Tawia Nkrumah Hemans (Peace Icon) in collaboration with Global Trade Network Int. (GTNI), and some Refugees in Ghana to create awareness among Ghanaian society through series of events such as presentation of Awards, Sports, Peace seminars, Fundraising and Church / Muslim regional Prayers and Peace walks to mark the 2018 and 2019 Ghana showcasing Africa Peace Tower.",
    tag: "Multilateral Unity",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    imageIndex: 12
  },
  {
    year: "2020 Mandate",
    title: "Theme Proclamation: “AFRICA PEACE TOWER NOW”",
    content: "The theme for 2020 event was “AFRICA PEACE TOWER NOW”, setting an absolute standard for future development and reinforcing the vision of an African mediation center.",
    tag: "Theme Mandate",
    badgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    imageIndex: 16
  },
  {
    year: "2026 Conclave",
    title: "Maiden Tribute & Living Legends Conclave",
    content: "The 2026 maiden event is to build a peaceful atmosphere and honour living Legends in Ghana. We will offer African communities a unique opportunity to contribute towards the Peace Tower during its activities and promote friendship among the nations.",
    tag: "Living Legends Tribute",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    imageIndex: 0
  },
  {
    year: "2027 Launch",
    title: "70th Independence Fundraiser & US International Tour",
    content: "There was a big event celebrated in Ghana 70th year independence in 2027 and the Peace Tower of Africa will use that opportunity to launch the fundraising towards building a Conflict Resolution and Business Centre; as a forward to host a 'grand event' in the US to launch the fundraising which comes with a sketch of the Peace Tower building to show participants to raise funds and promote business opportunities in Ghana, that is what our organization desires.",
    tag: "Diaspora Homecoming & Sketch",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    imageIndex: 4
  }
];

export default function Programs() {
  const [selectedCampaign, setSelectedCampaign] = useState(TIMELINE_CAMPAIGNS[0]);

  return (
    <section 
      id="programs" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-gold-500/10 overflow-hidden select-none"
    >
      {/* Visual background atmospheric elements */}
      <div className="absolute top-[20%] left-[-15%] w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[10%] right-[-15%] w-[600px] h-[600px] rounded-full bg-rose-500/5 blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-royal-900 border border-gold-500/20 text-gold-400 font-mono text-xs uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            Peacemaking Chronicles
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-gold-100">
            OUR HISTORIC CAMPAIGNS <br />
            <span className="text-shine">& SOVEREIGN MILESTONES</span>
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-2 rounded-full" />
          <p className="font-sans text-sm sm:text-base text-royal-100/70 leading-relaxed font-light">
            Explore the authentic, documented history of the Peace Tower of Africa. Through election monitoring, regional chieftancy conferences, youth training initiatives, and fundraising, our platform promotes everlasting peace.
          </p>
        </div>

        {/* Chronological Grid split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Scannable Timeline Rail (Columns / List) */}
          <div className="lg:col-span-5 flex flex-col gap-3 max-h-[640px] overflow-y-auto pr-2 custom-scrollbar">
            <p className="font-mono text-[10.5px] uppercase tracking-widest text-gold-500/60 font-bold mb-1 pl-3">
              Select Historic Campaign Year
            </p>
            {TIMELINE_CAMPAIGNS.map((camp) => {
              const isSelected = camp.year === selectedCampaign.year;
              return (
                <button
                  key={camp.year}
                  onClick={() => setSelectedCampaign(camp)}
                  className={`w-full p-4 rounded-lg flex items-center justify-between text-left transition-all border outline-none cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-royal-800 to-royal-900 border-gold-500/50 shadow-lg shadow-gold-500/10 text-gold-400 font-bold'
                      : 'royal-glass hover:bg-royal-900/40 border-gold-500/10 text-royal-100/70 hover:text-royal-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded font-mono text-xs font-black border tracking-wide transition-colors ${
                      isSelected ? 'bg-gold-500/10 border-gold-500/40 text-gold-300' : 'bg-royal-950 border-gold-500/10 text-royal-100/50'
                    }`}>
                      {camp.year.split(' ')[0]}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-serif text-[13.5px] tracking-wide font-bold line-clamp-1">{camp.title}</span>
                      <span className="font-mono text-[9px] text-royal-100/50 tracking-wider mt-0.5">{camp.tag}</span>
                    </div>
                  </div>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform shrink-0 ${
                    isSelected ? 'translate-x-[3px] text-gold-400' : 'text-royal-100/30'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Panel: Beautifully Styled Interactive Event Card */}
          <div className="lg:col-span-7 flex">
            <motion.div
              key={selectedCampaign.year}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full p-6 sm:p-8 rounded-lg royal-glass border border-gold-500/25 relative overflow-hidden bg-gradient-to-b from-royal-900/60 to-royal-950 flex flex-col justify-between"
            >
              {/* Corner certificate-style tabs */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gold-500/30 rounded-tl"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gold-500/30 rounded-tr"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gold-500/30 rounded-bl"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gold-500/30 rounded-br"></div>

              {/* Upper Section */}
              <div className="space-y-6">
                
                {/* Header line with year & tag badge */}
                <div className="flex flex-wrap gap-2 justify-between items-center pb-4 border-b border-gold-500/10">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gold-400" />
                    <span className="font-mono text-base font-black text-gold-300 tracking-wider">
                      {selectedCampaign.year}
                    </span>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider font-bold border uppercase ${selectedCampaign.badgeColor}`}>
                    {selectedCampaign.tag}
                  </span>
                </div>

                {/* Event Main Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-gold-100 tracking-wide leading-snug">
                  {selectedCampaign.title}
                </h3>

                {/* Event Body Content */}
                <p className="font-sans text-sm sm:text-[15px] text-royal-100/90 leading-relaxed font-light whitespace-pre-line">
                  {selectedCampaign.content}
                </p>

              </div>

              {/* Lower Section: Image Preview of the associated historical index */}
              <div className="mt-8 pt-4 border-t border-gold-500/10 flex flex-col sm:flex-row gap-4 items-center">
                <div className="w-full sm:w-44 h-28 overflow-hidden rounded border border-gold-500/20 bg-royal-950 p-1 flex-shrink-0">
                  <RoyalImage 
                    index={selectedCampaign.imageIndex} 
                    alt={selectedCampaign.title} 
                    className="w-full h-full object-cover rounded" 
                    category="Milestones"
                  />
                </div>
                <div className="flex flex-col text-left space-y-1">
                  <span className="font-mono text-[9px] text-gold-500/70 uppercase tracking-widest font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-gold-500 animate-pulse" />
                    Archival Photo Reference #{selectedCampaign.imageIndex}
                  </span>
                  <span className="font-serif text-sm font-bold text-royal-50 leading-tight">
                    Peace Tower Living Memory Archive
                  </span>
                  <span className="font-sans text-xs text-royal-100/50 leading-normal">
                    Preserving actual historical milestones and peace campaigns across West Africa.
                  </span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

        {/* Global Summary Note Box (Background Section Note from User) */}
        <div className="mt-12 p-6 sm:p-8 rounded-lg royal-glass border border-gold-500/20 bg-gradient-to-r from-royal-950 via-royal-900/40 to-royal-950 max-w-5xl mx-auto text-left relative">
          <div className="absolute top-0 left-6 w-16 h-[2px] bg-gradient-to-r from-gold-500 to-transparent" />
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="p-3.5 rounded-full bg-gold-500/10 border border-gold-500/30 shrink-0">
              <HeartHandshake className="w-8 h-8 text-gold-400" />
            </div>
            <div className="space-y-2">
              <span className="font-mono text-[9.5px] font-bold text-gold-500 uppercase tracking-widest block">
                Primary Founding Mission Statement
              </span>
              <p className="font-sans text-sm sm:text-base text-royal-100/90 leading-relaxed font-light">
                War mostly caused in Africa is a major challenge facing the continent today. It is in view of this that Peace Tower of Africa has created a platform to promote peace among countries and serve as a vehicle or conduit leading to the enhancement of socio-economic development, national integration and economic business in Ghana, Africa and around the globe.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
