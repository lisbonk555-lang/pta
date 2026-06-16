import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gavel, Landmark, Handshake, ShieldAlert, Sparkles, Scale, BookOpen, Coins, HelpCircle } from 'lucide-react';

export default function TribunalPortal() {
  const [activeTab, setActiveTab] = useState<'DISPUTE' | 'BUSINESS'>('DISPUTE');
  
  // Dispute States
  const [disputeType, setDisputeType] = useState('LAND');
  const [region, setRegion] = useState('CAPE_COAST');
  const [parties, setParties] = useState('Oguaa Traditional Boundary Council');
  const [brief, setBrief] = useState('');
  const [resultDispute, setResultDispute] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // Business States
  const [sector, setSector] = useState('YOUTH_MFG');
  const [investmentTarget, setInvestmentTarget] = useState('ECOWAS_MARKET');
  const [companyName, setCompanyName] = useState('');
  const [resultBusiness, setResultBusiness] = useState<any>(null);

  const handleSimulateDispute = () => {
    setLoading(true);
    setResultDispute(null);
    setTimeout(() => {
      let proverb = "";
      let resolvingElders = "";
      let legalPrecedent = "";
      let resolutionDecree = "";

      if (disputeType === 'LAND') {
        proverb = '"The land belongeth to the ancestors; we are merely caretakers of their peace."';
        resolvingElders = "Osabarimba Kwesi Atta II, Cape Coast Paramount Chief with the support of Nii Kojo Mensah I.";
        legalPrecedent = "Ghana customary boundary declaration act in active consultation with the Ghana Bar Association.";
        resolutionDecree = "Both traditional parties shall assemble verbally inside the Peace Tower. High surveyors guided by community elders will plant traditional boundary fig trees (Anyaa). No monetary claims shall be issued, as absolute peace safeguards our local trade routes.";
      } else if (disputeType === 'CHIEFTANCY') {
        proverb = '"When two kings make peace, they restore the stool of their ancestors."';
        resolvingElders = "Council of Paramount Rulers in alliance with Sheikh Dr. Osmanu Nuhu Sharubutu, National Chief Imam.";
        legalPrecedent = "ECOWAS Charter of Chieftaincy and Traditional Royal Succession Rites Chapter 3.";
        resolutionDecree = "A verbal reconciliation council shall be seated at the Banquet Hall, Accra. Both lineage factions are consecrated under inter-faith blessing. Succession is determined strictly by absolute elder council confirmation without court litigation.";
      } else {
        proverb = '"Bilateral trade yields a bridge of prosperity that wars can never construct."';
        resolvingElders = "Global Trade Network Int. directors and local community market advocates.";
        legalPrecedent = "West African Economic Conciliation framework.";
        resolutionDecree = "The dispute shall be cataloged inside our Hague-Equivalent Tribunal. Local industry disputes are routed into collaborative workspace networks, allocating 15% youth employment quotas blockaded from outer political influences.";
      }
      
      setResultDispute({
        proverb,
        resolvingElders,
        legalPrecedent,
        resolutionDecree
      });
      setLoading(false);
    }, 1000);
  };

  const handleSimulateBusiness = () => {
    setLoading(true);
    setResultBusiness(null);
    setTimeout(() => {
      let strategyTitle = "";
      let mitigation = "";
      let jobCreationModel = "";
      let investmentThesis = "";

      if (sector === 'YOUTH_MFG') {
        strategyTitle = "ECOWAS Local Manufacturing Initiative";
        mitigation = "Bypassing high migration risks by offering structured industrial training and tech assembly micro-grants directly in Ghana.";
        jobCreationModel = "Creating up to 250 local tech-manufacturing apprenticeships in Cape Coast and Sowutoum region, securing youth future.";
        investmentThesis = "Using Peace Tower's certified 'Conflict-Free' regional seal of stability, assuring international impact investors that their capital is protected from traditional disputes.";
      } else if (sector === 'ECO_TOURISM') {
        strategyTitle = "Sovereign Royal Heritages Trail";
        mitigation = "Unlocking traditional tourist reserves by integrating Cape Coast Castle histories with local chieftaincy festivals.";
        jobCreationModel = "Training 120 youth curators, performers and local historians to prevent young cohorts from brain-drain migration.";
        investmentThesis = "Culturally protected land allocation backed by Osabarimba Kwesi Atta II's royal council, removing standard acquisition litigations.";
      } else {
        strategyTitle = "Pan-African Peace Trade Network";
        mitigation = "Creating smallholder trade channels from Northern Ghana straight to the Accra ports with absolute safety.";
        jobCreationModel = "Establishing bilateral logistics platforms managing shipping grids using local village captains.";
        investmentThesis = "Zero-dispute corridors secured under interfaith cleric peace alliances, giving 100% supply line consistency.";
      }

      setResultBusiness({
        strategyTitle,
        mitigation,
        jobCreationModel,
        investmentThesis
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <section 
      id="tribunal-portal" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-gold-500/10 overflow-hidden"
    >
      <div className="ambient-glow top-[10%] right-[-10%] scale-[1.3]" />
      <div className="ambient-glow bottom-[-10%] left-[-20%] scale-[1.4]" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-royal-900 border border-gold-500/20 text-gold-400 font-mono text-xs uppercase tracking-widest">
            <Scale className="w-3.5 h-3.5" />
            VIRTUAL INTELLECTUAL CHAMBER
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-gold-100">
            SOVEREIGN MEDIATION <br />
            <span className="text-shine">& ECONOMIC STRATEGY GATEWAY</span>
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-2 rounded-full" />
          <p className="font-sans text-sm sm:text-base text-royal-100/70 leading-relaxed font-light">
            An interactive simulator showing how the Peace Tower of Africa framework prevents localized tribal friction and coordinates stable economic pathways to keep our youth prosperously employed inside Ghana.
          </p>
        </div>

        {/* Outer Tab Container */}
        <div className="max-w-4xl mx-auto">
          
          {/* Main Tab Controls */}
          <div className="grid grid-cols-2 gap-4 mb-8 bg-royal-900/40 p-1.5 rounded-lg border border-gold-500/15 max-w-lg mx-auto">
            <button
              onClick={() => { setActiveTab('DISPUTE'); setResultDispute(null); }}
              className={`py-2.5 rounded text-xs sm:text-sm font-serif font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'DISPUTE'
                  ? 'bg-gradient-to-b from-royal-800 to-royal-900 border border-gold-500/30 text-gold-400'
                  : 'text-royal-100/60 hover:text-royal-100'
              }`}
            >
              <Gavel className="w-4 h-4 text-gold-500" />
              Tribunal Simulator
            </button>
            <button
              onClick={() => { setActiveTab('BUSINESS'); setResultBusiness(null); }}
              className={`py-2.5 rounded text-xs sm:text-sm font-serif font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'BUSINESS'
                  ? 'bg-gradient-to-b from-royal-800 to-royal-900 border border-gold-500/30 text-gold-400'
                  : 'text-royal-100/60 hover:text-royal-100'
              }`}
            >
              <Handshake className="w-4 h-4 text-gold-500" />
              Trade Advisor
            </button>
          </div>

          {/* Tab Content Panels */}
          <div className="royal-glass p-6 sm:p-10 rounded-lg border border-gold-500/20 bg-gradient-to-b from-royal-900/30 to-royal-950 shadow-xl">
            
            {activeTab === 'DISPUTE' ? (
              <div className="space-y-6">
                
                <div className="border-b border-gold-500/10 pb-4">
                  <h3 className="font-serif text-lg font-bold text-gold-100 flex items-center gap-2">
                    <Landmark className="w-5 h-5 text-gold-400" />
                    Hague-Equivalent Dispute Resolution Planner
                  </h3>
                  <p className="font-sans text-xs text-royal-100/60 mt-1 font-light">
                    Select tribal dispute parameters to understand how our verbal litigation tribunal processes compromise without state litigation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Select Dispute Type */}
                  <div className="flex flex-col space-y-2">
                    <label className="font-mono text-[10px] font-bold text-gold-500/80 uppercase tracking-widest leading-none">
                      Dispute Category
                    </label>
                    <select
                      value={disputeType}
                      onChange={(e) => setDisputeType(e.target.value)}
                      className="w-full bg-royal-950 border border-gold-500/25 p-3 rounded select-none font-sans text-xs text-royal-100 focus:outline-none focus:border-gold-400"
                    >
                      <option value="LAND">Traditional Land Boundary Overlap</option>
                      <option value="CHIEFTANCY">Chieftancy Royal Succession Rights</option>
                      <option value="BILATERAL_TRADE">Market Trade / Fishing Harbor Dispute</option>
                    </select>
                  </div>

                  {/* Select Region */}
                  <div className="flex flex-col space-y-2">
                    <label className="font-mono text-[10px] font-bold text-gold-500/80 uppercase tracking-widest leading-none">
                      Territorry / Region (ECOWAS Pilot)
                    </label>
                    <select
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      className="w-full bg-royal-950 border border-gold-500/25 p-3 rounded font-sans text-xs text-royal-100 focus:outline-none focus:border-gold-400"
                    >
                      <option value="CAPE_COAST">Cape Coast Paramountcy (Oguaa Omanhen)</option>
                      <option value="SOWUTOUM">Sowutoum / Maranatha Area Council</option>
                      <option value="ACCRA">Accra Metropolitan Council</option>
                      <option value="KUMASI">Kumasi Traditional Council</option>
                    </select>
                  </div>

                  {/* Input Parties */}
                  <div className="flex flex-col space-y-2 sm:col-span-2">
                    <label className="font-mono text-[10px] font-bold text-gold-500/80 uppercase tracking-widest leading-none">
                      Disputing Sovereign Parties
                    </label>
                    <input
                      type="text"
                      value={parties}
                      onChange={(e) => setParties(e.target.value)}
                      placeholder="e.g. Traditional Clan lineages or Local Market Traders Association"
                      className="w-full bg-royal-950 border border-gold-500/25 p-3 rounded font-sans text-xs text-royal-100 focus:outline-none focus:border-gold-400"
                    />
                  </div>

                </div>

                {/* Submit Row */}
                <div className="pt-4 flex justify-center">
                  <button
                    onClick={handleSimulateDispute}
                    disabled={loading}
                    className="px-6 py-3 rounded bg-gradient-to-r from-gold-600 to-gold-450 text-royal-950 font-serif font-extrabold text-xs tracking-widest uppercase hover:from-gold-500 hover:to-gold-300 transition-all select-none cursor-pointer flex items-center gap-2 shadow-lg shadow-gold-500/5 active:scale-95 disabled:opacity-50"
                  >
                    <Gavel className="w-4 h-4" />
                    {loading ? "Aligning Elders..." : "Initiate Verbal Settlement Process"}
                  </button>
                </div>

                {/* Animated Dispute Outputs */}
                <AnimatePresence>
                  {resultDispute && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="mt-6 border border-emerald-500/30 p-5 rounded-lg bg-royal-900/50 space-y-4"
                    >
                      <div className="flex items-center gap-2 border-b border-emerald-500/20 pb-2">
                        <Scale className="w-4 h-4 text-emerald-400 animate-pulse" />
                        <span className="font-mono text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                          Simulated Tribunal Resolution Framework (Custom Customary Precedent)
                        </span>
                      </div>

                      {/* Traditional Proverb */}
                      <div>
                        <h4 className="font-mono text-[9px] font-bold text-gold-500 uppercase tracking-wider mb-1">
                          Traditional Council Wisdom Proverb
                        </h4>
                        <p className="font-serif text-sm italic text-gold-100 font-medium">
                          {resultDispute.proverb}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                        {/* Elder Court */}
                        <div>
                          <h4 className="font-mono text-[9px] font-bold text-gold-500 uppercase tracking-wider mb-1">
                            Presiding Convening Elders
                          </h4>
                          <p className="font-sans text-xs text-royal-100 font-medium font-semibold leading-tight">
                            {resultDispute.resolvingElders}
                          </p>
                        </div>

                        {/* Legal Precedent */}
                        <div>
                          <h4 className="font-mono text-[9px] font-bold text-gold-500 uppercase tracking-wider mb-1">
                            Supported Legal Charter
                          </h4>
                          <p className="font-mono text-[9.5px] text-royal-100/80 font-semibold leading-tight">
                            {resultDispute.legalPrecedent}
                          </p>
                        </div>
                      </div>

                      {/* Decrees */}
                      <div className="pt-2 border-t border-emerald-500/10">
                        <h4 className="font-mono text-[9px] font-bold text-emerald-400 uppercase tracking-wider mb-1">
                          Simulated Resolution Decree (Verbal Council Settlement)
                        </h4>
                        <p className="font-sans text-xs text-royal-50/90 leading-relaxed font-light">
                          {resultDispute.resolutionDecree}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ) : (
              <div className="space-y-6">
                
                <div className="border-b border-gold-500/10 pb-4">
                  <h3 className="font-serif text-lg font-bold text-gold-100 flex items-center gap-2">
                    <Handshake className="w-5 h-5 text-gold-400" />
                    African Youth Trade Opportunity Advisor
                  </h3>
                  <p className="font-sans text-xs text-royal-100/60 mt-1 font-light">
                    Map stable peace to investment resources. Design trade sectors inside Ghana's ECOWAS corridors to prevent youth migration.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Select Sector */}
                  <div className="flex flex-col space-y-2">
                    <label className="font-mono text-[10px] font-bold text-gold-500/80 uppercase tracking-widest leading-none">
                      Economic Focus Sector
                    </label>
                    <select
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                      className="w-full bg-royal-950 border border-gold-500/25 p-3 rounded font-sans text-xs text-royal-100 focus:outline-none focus:border-gold-400"
                    >
                      <option value="YOUTH_MFG">Youth Industrial Manufacturing & Tech Assemblies</option>
                      <option value="ECO_TOURISM">Traditional Heritage Tourism & Arts</option>
                      <option value="GLOBAL_AGRI">Bilateral Agriculture & Port Logistics</option>
                    </select>
                  </div>

                  {/* Select Target Market */}
                  <div className="flex flex-col space-y-2">
                    <label className="font-mono text-[10px] font-bold text-gold-500/80 uppercase tracking-widest leading-none">
                      Continental Target Market Corridor
                    </label>
                    <select
                      value={investmentTarget}
                      onChange={(e) => setInvestmentTarget(e.target.value)}
                      className="w-full bg-royal-950 border border-gold-500/25 p-3 rounded font-sans text-xs text-royal-100 focus:outline-none focus:border-gold-400"
                    >
                      <option value="ECOWAS_MARKET">ECOWAS Sovereign Corridor (Ghana/Nigeria/Cote d'Ivoire)</option>
                      <option value="EU_BILATERAL">European Bilateral Trade Agreement (Ghana-Diaspora)</option>
                      <option value="US_DIASPORA">Diaspora Business Homecoming Integration</option>
                    </select>
                  </div>

                  {/* Input Enterprise Name */}
                  <div className="flex flex-col space-y-2 sm:col-span-2">
                    <label className="font-mono text-[10px] font-bold text-gold-500/80 uppercase tracking-widest leading-none">
                      Local Enterprise or Initiative Name
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Cape Coast Youth Assemblers or Maranatha Cooperative"
                      className="w-full bg-royal-950 border border-gold-500/25 p-3 rounded font-sans text-xs text-royal-100 focus:outline-none focus:border-gold-400"
                    />
                  </div>

                </div>

                {/* Submit Row */}
                <div className="pt-4 flex justify-center">
                  <button
                    onClick={handleSimulateBusiness}
                    className="px-6 py-3 rounded bg-gradient-to-r from-gold-600 to-gold-450 text-royal-950 font-serif font-extrabold text-xs tracking-widest uppercase hover:from-gold-500 hover:to-gold-400 transition-all cursor-pointer flex items-center gap-2 shadow-lg shadow-gold-500/5 active:scale-95"
                  >
                    <Coins className="w-4 h-4" />
                    Assess Trade Strategic Pathway
                  </button>
                </div>

                {/* Animated Business Outputs */}
                <AnimatePresence>
                  {resultBusiness && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="mt-6 border border-gold-500/30 p-5 rounded-lg bg-royal-900/50 space-y-4"
                    >
                      <div className="flex items-center gap-2 border-b border-gold-500/20 pb-2">
                        <Sparkles className="w-4 h-4 text-gold-400 animate-pulse" />
                        <span className="font-mono text-[10px] font-bold text-gold-400 uppercase tracking-widest">
                          Simulated Strategic Expansion Thesis
                        </span>
                      </div>

                      {/* Strategy Title */}
                      <div>
                        <h4 className="font-mono text-[9px] font-bold text-gold-500 uppercase tracking-wider mb-1">
                          Strategic Initiative Scheme
                        </h4>
                        <p className="font-serif text-sm font-extrabold text-gold-100">
                          {companyName || "Peace Tower Collaborative Corp"} — {resultBusiness.strategyTitle}
                        </p>
                      </div>

                      {/* Job Creation Model */}
                      <div>
                        <h4 className="font-mono text-[9px] font-bold text-gold-500 uppercase tracking-wider mb-0.5">
                          Local Sector Job Creation & Curving Migration
                        </h4>
                        <p className="font-sans text-xs text-royal-50 font-light">
                          {resultBusiness.jobCreationModel}
                        </p>
                      </div>

                      {/* Mitigation */}
                      <div>
                        <h4 className="font-mono text-[9px] font-bold text-gold-500 uppercase tracking-wider mb-0.5">
                          Border Customary Risk Mitigation
                        </h4>
                        <p className="font-sans text-xs text-royal-100/80 font-light italic leading-relaxed">
                          {resultBusiness.mitigation}
                        </p>
                      </div>

                      {/* Investment thesis */}
                      <div className="pt-2 border-t border-gold-500/10">
                        <h4 className="font-mono text-[9px] font-bold text-gold-400 uppercase tracking-wider mb-0.5">
                          Certified 'Conflict-Free' Investment Thesis
                        </h4>
                        <p className="font-sans text-xs text-royal-50 leading-relaxed font-light">
                          {resultBusiness.investmentThesis}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            )}

            {/* Certificate border decor inside frame */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-gold-500/20 rounded-tl"></div>
            <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-gold-500/20 rounded-tr"></div>
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b border-l border-gold-500/20 rounded-bl"></div>
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-gold-500/20 rounded-br"></div>

          </div>
        </div>

      </div>
    </section>
  );
}
