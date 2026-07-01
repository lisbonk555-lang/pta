import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, Check, ShieldCheck, Heart, Users, HeartHandshake } from 'lucide-react';
import { CONTACT_NUMBERS, RSVP_NUMBERS, CONTACT_EMAIL, VENUE_INFO, HASHTAG, TWITTER_HANDLE } from '../data';

export default function ContactSection() {
  const [pledgeType, setPledgeType] = useState('AMBASSADOR');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [selectedJackets, setSelectedJackets] = useState(1);

  const handleSubmitPledge = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsSubmitted(true);
  };

  const handleSubscribeNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubmitted(true);
  };

  return (
    <section 
      id="contact" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-gold-500/10 overflow-hidden"
    >
      <div className="ambient-glow top-[20%] right-[-10%] scale-[1.2]" />
      <div className="ambient-glow bottom-[-5%] left-[-10%] scale-[1.3] rotate-45" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-royal-900 border border-gold-500/20 text-gold-400 font-mono text-xs uppercase tracking-widest">
            <Phone className="w-3.5 h-3.5" />
            Diplomatic Contact Channels
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-gold-100">
            CONNECT WITH THE COIILABORATIVE <br />
            <span className="text-shine">& PLEDGE YOUR SUPPORT</span>
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-2 rounded-full" />
          <p className="font-sans text-sm sm:text-base text-royal-100/70 leading-relaxed font-light">
            Whether you represent a corporate trade partner, a sovereign traditional council, a diplomatic mission, or are a local supporter, the Peace Tower of Africa welcomes your alignment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Contact Details Column (5 columns out of 12) */}
          <div className="lg:col-span-5 space-y-6">
            
            <p className="font-mono text-[10px] sm:text-[11px] font-bold text-gold-500 uppercase tracking-widest text-left pl-1">
              Official Communications Center
            </p>

            {/* Telephone Card */}
            <div className="royal-glass p-5 rounded-lg border border-gold-500/20 text-left flex gap-4">
              <div className="p-3 rounded-full bg-gold-500/10 border border-gold-500/30 h-11 w-11 flex items-center justify-center text-gold-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-3">
                <div className="space-y-0.5">
                  <h4 className="font-serif text-sm font-extrabold text-gold-100 uppercase tracking-wider">
                    Office Mobile Hotlines
                  </h4>
                  <p className="font-mono text-[9px] text-royal-100/40 uppercase">Direct Executive Lines</p>
                </div>
                <div className="space-y-1">
                  {CONTACT_NUMBERS.map((num, i) => (
                    <a 
                      key={i} 
                      href={`tel:${num.replace(/\s+/g, '')}`} 
                      className="block font-mono text-xs sm:text-sm font-semibold text-royal-50 hover:text-gold-400 select-all"
                    >
                      {num}
                    </a>
                  ))}
                </div>

                {/* RSVP numbers */}
                <div className="pt-2.5 border-t border-gold-500/10 space-y-1">
                  <span className="font-mono text-[9.5px] font-bold text-gold-500 uppercase tracking-wider block">
                    Summit Launch RSVPs:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {RSVP_NUMBERS.map((rsvp, idx) => (
                      <span key={idx} className="font-mono text-xs text-royal-100/70 block select-all">
                        📞 {rsvp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="royal-glass p-5 rounded-lg border border-gold-500/20 text-left flex gap-4">
              <div className="p-3 rounded-full bg-gold-500/10 border border-gold-500/30 h-11 w-11 flex items-center justify-center text-gold-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="space-y-0.5">
                  <h4 className="font-serif text-sm font-extrabold text-gold-100 uppercase tracking-wider">
                    Bilateral Email Desk
                  </h4>
                  <p className="font-mono text-[9px] text-royal-100/40 uppercase">Official NGO Correspondence</p>
                </div>
                <a 
                  href={`mailto:${CONTACT_EMAIL}`} 
                  className="block font-mono text-xs sm:text-sm text-royal-50 hover:text-gold-400 break-all select-all font-semibold"
                >
                  {CONTACT_EMAIL}
                </a>

                {/* Handles */}
                <div className="mt-2.5 pt-2 border-t border-gold-500/10 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-royal-100/50">Twitter: <strong className="text-gold-500 select-all">{TWITTER_HANDLE}</strong></span>
                  <span className="text-royal-100/50">Tag: <strong className="text-gold-500 select-all">{HASHTAG}</strong></span>
                </div>
              </div>
            </div>

            {/* Map/Address Card */}
            <div className="royal-glass p-5 rounded-lg border border-gold-500/20 text-left flex gap-4">
              <div className="p-3 rounded-full bg-gold-500/10 border border-gold-500/30 h-11 w-11 flex items-center justify-center text-gold-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <div className="space-y-0.5">
                  <h4 className="font-serif text-sm font-extrabold text-gold-100 uppercase tracking-wider">
                    Administrative Secretariat
                  </h4>
                  <p className="font-mono text-[9px] text-royal-100/40 uppercase">Accra Headquarters</p>
                </div>
                <p className="font-sans text-xs sm:text-[13px] text-royal-100/70 font-light leading-relaxed">
                  {VENUE_INFO}
                </p>
              </div>
            </div>

          </div>

          {/* Contact Support Form Column (7 columns out of 12) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* COMMUNITY RESCUE, COUNSELING & DISASTER MANAGEMENT CAMPAIGN */}
            <div className="royal-glass p-6 sm:p-8 rounded-lg border border-gold-500/25 bg-gradient-to-b from-royal-900/40 to-royal-950 text-left relative overflow-hidden">
              {/* TWO IMAGES ON TOP OF THE NOTE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-gold-500/20 bg-royal-950/80 group">
                  <img 
                    src="https://i.ibb.co/nTVGgWN/Whats-App-Image-2026-06-29-at-01-54-43.jpg" 
                    alt="Community Rescue Action" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2.5 font-mono text-[9px] font-bold text-gold-300 uppercase tracking-widest bg-royal-950/80 px-2 py-0.5 rounded border border-gold-500/15">
                    Rescue Coordination
                  </span>
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-gold-500/20 bg-royal-950/80 group">
                  <img 
                    src="https://i.ibb.co/ymSfttXJ/Whats-App-Image-2026-06-30-at-20-29-37.jpg" 
                    alt="Disaster Impact & Support" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2.5 font-mono text-[9px] font-bold text-gold-300 uppercase tracking-widest bg-royal-950/80 px-2 py-0.5 rounded border border-gold-500/15">
                    Disaster Relief Response
                  </span>
                </div>
              </div>

              {/* Note Heading */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-gold-500 rounded-full" />
                  <h3 className="font-serif text-lg sm:text-xl font-extrabold text-gold-100 uppercase tracking-wide">
                    Community Rescue, Counseling & Disaster Support
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-royal-100/90 leading-relaxed font-light">
                  <p className="font-serif italic text-gold-200/90 border-l-2 border-gold-500/30 pl-3 py-1 bg-royal-950/40 rounded-r">
                    "It is not easy to experience flood and see death coming and someone rescued you. It will always scare the persons whenever he/she sees another storm coming. People are traumatized, how do we help them, unless we add counseling to help them."
                  </p>
                  
                  <p>
                    <strong className="text-gold-300 font-medium">Peace Tower of Africa</strong> will establish a rescue team within every community to save lives and give first hand support and Counseling. People struggle for many years to acquire belongings, then one day rain will take all away including money in the house and food. Disaster Management must be added in the community too to save lives and property when accidents acquire.
                  </p>

                  <div className="p-4 rounded-lg bg-royal-950/90 border border-amber-500/20 space-y-3">
                    <div className="flex items-center gap-2 text-gold-400 font-serif font-bold text-sm">
                      <HeartHandshake className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>URGENT REQUEST FOR SUPPORT</span>
                    </div>
                    <p className="text-xs text-royal-100/80 leading-relaxed">
                      Due to these, we request your support in Cash and Kind. We want to get more life Jackets to save lives, <strong className="text-gold-300 font-semibold">¢600.00 ($60.00 USD)</strong> for one. How many can you buy for us to distribute?
                    </p>

                    {/* DYNAMIC CALCULATOR */}
                    <div className="pt-2 border-t border-gold-500/10 space-y-3">
                      <span className="text-[10px] font-mono text-gold-500 uppercase tracking-wider block">Select Life Jacket Donation Tier</span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          { qty: 1, label: "1 Jacket", ghc: 600, usd: 60 },
                          { qty: 3, label: "3 Jackets", ghc: 1800, usd: 180 },
                          { qty: 5, label: "5 Jackets", ghc: 3000, usd: 300 },
                          { qty: 10, label: "10 Jackets", ghc: 6000, usd: 600 },
                        ].map((tier) => (
                          <button
                            key={tier.qty}
                            type="button"
                            onClick={() => setSelectedJackets(tier.qty)}
                            className={`p-2 rounded border font-mono text-xs flex flex-col items-center justify-center transition-all cursor-pointer ${
                              selectedJackets === tier.qty
                                ? "bg-gold-500/10 border-gold-500 text-gold-300 shadow"
                                : "bg-royal-950 border-gold-500/10 text-royal-100/60 hover:border-gold-500/20"
                            }`}
                          >
                            <span className="font-bold">{tier.label}</span>
                            <span className="text-[9px] opacity-80">¢{tier.ghc} (${tier.usd})</span>
                          </button>
                        ))}
                      </div>

                      {/* Display current calculation */}
                      <div className="bg-royal-950/60 p-3 rounded border border-gold-500/10 flex items-center justify-between">
                        <div>
                          <span className="text-[9px] font-mono text-royal-100/40 uppercase block">Total Pledged Donation</span>
                          <span className="font-serif text-xs sm:text-sm font-bold text-gold-300">
                            {selectedJackets} Life {selectedJackets === 1 ? 'Jacket' : 'Jackets'}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs sm:text-sm font-mono font-bold text-royal-50 block">¢{(selectedJackets * 600).toLocaleString()}.00</span>
                          <span className="text-[10px] font-mono text-royal-100/50 block">${(selectedJackets * 60).toLocaleString()}.00 USD</span>
                        </div>
                      </div>
                    </div>

                    {/* Momo channel details */}
                    <div className="bg-royal-900 border border-gold-500/30 p-3 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded bg-amber-500/10 border border-gold-500/20 text-gold-400 shrink-0 font-bold text-xs font-mono">
                          MTN
                        </div>
                        <div className="text-left">
                          <span className="text-[8px] font-mono text-royal-100/40 uppercase block leading-none">Official Mobile Money Channel</span>
                          <span className="font-mono text-xs sm:text-sm font-extrabold text-gold-300 select-all block mt-0.5">
                            MOMO Number: +233 24 123 0069
                          </span>
                        </div>
                      </div>
                      <a 
                        href="tel:+233241230069"
                        className="w-full sm:w-auto text-center px-4 py-1.5 rounded bg-gradient-to-r from-amber-600 to-gold-500 text-royal-950 font-serif font-black text-[10px] tracking-wider uppercase hover:from-gold-500 hover:to-gold-300 transition-all shadow shrink-0"
                      >
                        Buy one & save victims
                      </a>
                    </div>

                  </div>
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-gold-500/20 rounded-tl"></div>
              <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-gold-500/20 rounded-tr"></div>
              <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b border-l border-gold-500/20 rounded-bl"></div>
              <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-gold-500/20 rounded-br"></div>
            </div>

            {/* PLEDGE FORM */}
            <div className="royal-glass p-6 sm:p-8 rounded-lg border border-gold-500/25 bg-gradient-to-b from-royal-900/40 to-royal-950 text-left relative">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="pledge-form"
                    onSubmit={handleSubmitPledge}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                    id="pledge-support-form"
                  >
                    <div>
                      <h3 className="font-serif text-lg font-bold text-gold-100 flex items-center gap-2">
                        <Heart className="w-5 h-5 text-rose-400" />
                        Pledge of Sustainable Peace & Development
                      </h3>
                      <p className="font-sans text-xs text-royal-100/60 mt-1 font-light">
                        Declare your support for the Peace Tower of Africa. Receive newsletters, summit invitations, and updates on tribal conciliation resolutions.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Name input */}
                      <div className="flex flex-col space-y-1.5">
                        <label className="font-mono text-[9.5px] font-bold text-gold-500 uppercase tracking-widest pl-0.5">
                          Your Full Name / Organisation
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Hon. Osabarimba Delegate"
                          className="bg-royal-950 border border-gold-500/25 p-3 rounded text-sans text-xs text-royal-100 focus:outline-none focus:border-gold-400"
                        />
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col space-y-1.5">
                        <label className="font-mono text-[9.5px] font-bold text-gold-500 uppercase tracking-widest pl-0.5">
                          Bilateral Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="delegation@gmail.com"
                          className="bg-royal-950 border border-gold-500/25 p-3 rounded text-sans text-xs text-royal-100 focus:outline-none focus:border-gold-400"
                        />
                      </div>

                      {/* Select Pledge Category */}
                      <div className="flex flex-col space-y-1.5 sm:col-span-2">
                        <label className="font-mono text-[9.5px] font-bold text-gold-500 uppercase tracking-widest pl-0.5">
                          How Do You Align with PTA?
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {[
                            { code: 'AMBASSADOR', text: 'Peace Ambassador', desc: 'Promote conflict-free speech' },
                            { code: 'BUSINESS_PARTNER', text: 'Bilateral Trade Partner', desc: 'Hire/mentor local youth' },
                            { code: 'DIGNITARY', text: 'Customary / Royality Desk', desc: 'Support Hague tribunal' }
                          ].map((pItem) => (
                            <button
                              key={pItem.code}
                              type="button"
                              onClick={() => setPledgeType(pItem.code)}
                              className={`p-3 rounded border text-left flex flex-col justify-between transition-all cursor-pointer ${
                                pledgeType === pItem.code
                                  ? 'bg-gold-500/10 border-gold-500 text-gold-400 shadow'
                                  : 'bg-royal-950/60 border-gold-500/10 text-royal-100 hover:border-gold-500/20'
                              }`}
                            >
                              <span className="font-serif text-[12px] font-bold tracking-wide">{pItem.text}</span>
                              <span className="font-sans text-[10px] text-royal-100/50 mt-1 leading-none font-light">{pItem.desc}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Details of support */}
                      <div className="flex flex-col space-y-1.5 sm:col-span-2">
                        <label className="font-mono text-[9.5px] font-bold text-gold-500 uppercase tracking-widest pl-0.5">
                          Statement of Endorsement (Optional)
                        </label>
                        <textarea
                          rows={4}
                          value={details}
                          onChange={(e) => setDetails(e.target.value)}
                          placeholder="Share your personal commitment info or requests for traditional dispute reconciliation parameters..."
                          className="bg-royal-950 border border-gold-500/25 p-3 rounded text-sans text-xs text-royal-100 focus:outline-none focus:border-gold-400"
                        />
                      </div>

                    </div>

                    <div className="pt-2 flex justify-start">
                      <button
                        type="submit"
                        className="px-6 py-3.5 rounded bg-gradient-to-r from-gold-600 to-gold-400 text-royal-950 font-serif font-extrabold text-xs tracking-widest uppercase hover:from-gold-500 hover:to-gold-300 transition-all shadow-lg cursor-pointer flex items-center gap-2 active:scale-95"
                      >
                        <Send className="w-4 h-4" />
                        Submit Peace endorsement Pledge
                      </button>
                    </div>

                  </motion.form>
                ) : (
                  <motion.div
                    key="pledge-success"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center p-8 space-y-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-500/5">
                      <ShieldCheck className="w-10 h-10 animate-pulse" />
                    </div>

                    <div className="space-y-2">
                      <span className="font-mono text-[9.5px] font-bold text-emerald-400 uppercase tracking-widest">
                        Pledge Authenticated & Sealed
                      </span>
                      <h3 className="font-serif text-2xl font-black text-gold-100">
                        CONGRATULATIONS, {name.toUpperCase()}!
                      </h3>
                      <p className="font-sans text-sm text-royal-100/70 max-w-lg mx-auto leading-relaxed font-light">
                        Your statement of peaceful endorsement has been written into the Peace Tower of Africa Registry logs. You are aligned under the <strong className="text-gold-200">{pledgeType.replace('_', ' ')}</strong> framework.
                      </p>
                    </div>

                    {/* Decorative certificate seal preview inside layout */}
                    <div className="p-4 rounded-lg bg-royal-900/60 border border-gold-500/15 max-w-sm w-full mx-auto font-serif text-xs text-left space-y-2 relative overflow-hidden select-none">
                      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/[0.01] to-transparent" />
                      
                      <div className="flex items-center justify-between font-mono text-[8px] text-gold-500/60 leading-none uppercase">
                        <span>Registry File #PTA-COUNCIL-2026</span>
                        <span>Sealed Customary</span>
                      </div>
                      <h4 className="font-bold text-gold-200 text-[13px] tracking-wide text-center">
                        PEACE TOWER OF AFRICA CHARTER
                      </h4>
                      <p className="text-[10px] text-royal-100/60 text-center leading-normal italic font-light">
                        "This certification declares that {name} supports the traditional council objectives to build African conflict-free industrial trade networks."
                      </p>
                      
                      <div className="flex items-center justify-between pt-2 border-t border-gold-500/10 text-[9px] font-mono leading-none">
                        <span className="text-royal-100/40">Patron: Chief Imam OSN</span>
                        <span className="text-royal-100/40">Sign Seal: PTA Secretariate</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setName('');
                        setEmail('');
                        setDetails('');
                      }}
                      className="px-5 py-2 rounded royal-glass border border-gold-500/30 text-gold-300 font-mono text-[10px] uppercase tracking-wider hover:bg-gold-500/10 transition-all cursor-pointer"
                    >
                      ← Submit Another Statement
                    </button>

                  </motion.div>
                )}
              </AnimatePresence>

              {/* Outside frame decoration */}
              <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-gold-500/20 rounded-tl"></div>
              <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-gold-500/20 rounded-tr"></div>
              <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b border-l border-gold-500/20 rounded-bl"></div>
              <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-gold-500/20 rounded-br"></div>

            </div>

          </div>

        </div>

        {/* Newsletter Subscription Form */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative royal-glass p-6 sm:p-10 rounded-xl border border-gold-500/20 bg-gradient-to-r from-royal-900 via-royal-950 to-royal-900 shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/[0.02] to-transparent pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Left Column Text */}
              <div className="md:col-span-7 text-left space-y-2">
                <span className="font-mono text-[9px] font-bold text-gold-500 uppercase tracking-widest px-2 py-0.5 rounded bg-royal-950/80 border border-gold-500/10 inline-block">
                  Subscribers Network
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-extrabold text-gold-100 tracking-wide uppercase">
                  Subscribe to Royal Bulletins
                </h3>
                <p className="font-sans text-xs text-royal-100/70 leading-relaxed font-light">
                  Align your inbox with the Peace Tower of Africa. Receive sovereign event announcements, ECOWAS mediation progress newsletters, and diaspora living awards updates directly.
                </p>
              </div>

              {/* Right Column Form */}
              <div className="md:col-span-5 w-full">
                <AnimatePresence mode="wait">
                  {!newsletterSubmitted ? (
                    <motion.form
                      key="newsletter-inactive"
                      onSubmit={handleSubscribeNewsletter}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col sm:flex-row gap-2"
                    >
                      <input
                        type="email"
                        required
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        placeholder="yourdesk@diplomaticmail.com"
                        className="flex-1 bg-royal-950 border border-gold-500/20 p-3 rounded text-sans text-xs text-royal-100 focus:outline-none focus:border-gold-400 placeholder:text-royal-100/30"
                      />
                      <button
                        type="submit"
                        className="px-5 py-3 rounded bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-royal-950 font-serif font-black text-xs tracking-widest uppercase transition-all shadow-md shrink-0 active:scale-95 cursor-pointer"
                      >
                        Subscribe
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="newsletter-active"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.95, opacity: 0 }}
                      className="p-4 rounded border border-emerald-500/20 bg-emerald-500/[0.03] text-left flex items-start gap-3"
                    >
                      <div className="p-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-serif text-xs font-bold text-emerald-400 uppercase tracking-widest leading-none">
                          Subscription Authenticated
                        </h4>
                        <p className="font-sans text-[11px] text-royal-100/60 leading-tight">
                          Email <strong className="text-gold-300">{newsletterEmail}</strong> successfully subscribed to the Peace Tower of Africa Bulletin Registry!
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Corner details */}
            <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-gold-500/20 rounded-tl"></div>
            <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-gold-500/20 rounded-tr"></div>
            <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-gold-500/20 rounded-bl"></div>
            <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-gold-500/20 rounded-br"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
