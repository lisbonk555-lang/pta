import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, Sparkles, Scale, AlertCircle, HelpCircle, ShieldCheck, Heart, Landmark } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const SAMPLE_QUESTIONS = [
  {
    topic: "Family Dispute",
    question: "How can I verbally resolve a dispute over traditional family land inheritance without going to court?",
    label: "Family Land"
  },
  {
    topic: "Chieftaincy & Town",
    question: "What traditional resolution models can help settle chieftaincy succession tensions in a town?",
    label: "Town & Chieftaincy"
  },
  {
    topic: "National Unity",
    question: "How do we prevent national political polarisation using restorative customary dialogues?",
    label: "National Polarisation"
  },
  {
    topic: "Continental Commerce",
    question: "How can the Peace Tower framework secure border commerce safety across West African nations?",
    label: "Continental Commerce"
  }
];

export default function PeaceResolutionChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Greetings to you! I am the **24/7 African Peace & Conflict Resolution Assistant (Council of Elders AI)**. Guided by traditional African dispute-resolution wisdom and restorative justice, I am here to assist your family, town, nation, or continent. Tell me, what dispute or peace initiative can we counsel on today?"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    setErrorStatus(null);
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: textToSend
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Create request payload with the immediate history
      const apiMessages = [...messages, userMsg].map(m => ({
        role: m.role,
        content: m.content
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ messages: apiMessages })
      });

      if (!res.ok) {
        throw new Error("Failed to receive wisdom from the server. Check your dev console or API credentials.");
      }

      const data = await res.json();
      
      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.text || "I was unable to retrieve a response. Let us try again in a spirit of peaceful compromise."
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (err: any) {
      console.error(err);
      setErrorStatus(err.message || "Could not connect to the peace registry.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content: "Greetings to you! I am the **24/7 African Peace & Conflict Resolution Assistant (Council of Elders AI)**. Guided by traditional African dispute-resolution wisdom and restorative justice, I am here to assist your family, town, nation, or continent. Tell me, what dispute or peace initiative can we counsel on today?"
      }
    ]);
    setErrorStatus(null);
  };

  return (
    <section id="peace-chat-platform" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-gold-500/10 overflow-hidden">
      {/* Visual Ambient Glows */}
      <div className="absolute top-[25%] left-[-10%] w-[400px] h-[400px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-emerald-600/10 blur-[145px] pointer-events-none mix-blend-screen" />

      <div className="max-w-5xl mx-auto z-10 relative">
        
        {/* Component Header Markup */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-royal-900 border border-gold-500/20 text-gold-400 font-mono text-xs uppercase tracking-widest">
            <Landmark className="w-3.5 h-3.5 animate-pulse text-gold-500" />
            24/7 AFRICAN RESOLUTION ASSISTANT
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            AFRICAN CONFLICTS <br />
            <span className="text-shine">RESOLUTION CHAT PLATFORM</span>
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-2 rounded-full" />
          <p className="font-sans text-sm sm:text-base text-royal-100/70 leading-relaxed font-light">
            Receive restorative pathfinding, traditional mediation counsel, and dispute handling guidelines tailored to African custom, community safety, and national prosperity.
          </p>
        </div>

        {/* Main Interface Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 bg-royal-950/70 p-4 sm:p-6 rounded-2xl border border-gold-500/20 shadow-2xl backdrop-blur-md">
          
          {/* Sidebar / Quick Instructions */}
          <div className="lg:col-span-1 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="p-3 bg-royal-900/60 rounded-xl border border-gold-500/10">
                <h4 className="font-serif text-xs font-bold text-gold-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-gold-500" />
                  Elders Council Code
                </h4>
                <p className="text-[11px] text-royal-100/60 mt-2 font-light leading-relaxed">
                  We seek reconciliation over retribution, mutual restoration over winner-takes-all litigation.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-wider text-gold-500/60 uppercase block px-1">
                  Preset Consultation Topics
                </span>
                <div className="grid grid-cols-1 gap-2">
                  {SAMPLE_QUESTIONS.map((sq, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(sq.question)}
                      disabled={isLoading}
                      className="text-left py-2 px-3 rounded bg-royal-900/40 hover:bg-royal-900/90 border border-gold-500/5 hover:border-gold-500/20 transition-all text-xs text-royal-100 hover:text-gold-300 pointer-events-auto cursor-pointer disabled:opacity-50"
                    >
                      <span className="font-serif text-gold-400 font-bold block text-[10px] uppercase mb-0.5">
                        {sq.topic}
                      </span>
                      <span className="line-clamp-2 leading-snug">{sq.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gold-500/10">
              <button
                onClick={handleClear}
                className="w-full text-center py-2 px-3 bg-red-950/30 hover:bg-red-950/50 border border-red-500/20 hover:border-red-500/40 text-red-300 font-mono text-[11px] rounded transition-all tracking-wider uppercase cursor-pointer"
              >
                Clear Conversation
              </button>
            </div>
          </div>

          {/* Main Chat Messenger Terminal */}
          <div className="lg:col-span-3 flex flex-col h-[500px] bg-royal-900/30 rounded-xl border border-gold-500/10 overflow-hidden relative">
            
            {/* Top Bar Indicator */}
            <div className="px-4 py-3 bg-royal-950/80 border-b border-gold-500/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-serif text-[13px] font-bold text-gold-300 tracking-wider">
                  PEACE TOWER COUNCIL ACTIVE CHAMBER
                </span>
              </div>
              <span className="font-mono text-[10px] text-royal-100/40 uppercase hidden sm:inline">
                24/7 Response Channel
              </span>
            </div>

            {/* Scrollable Message Box */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 font-sans select-text scrollbar-thin scrollbar-thumb-gold-500/25 scrollbar-track-transparent">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-4 py-3 text-sm leading-relaxed shadow-lg ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-br from-amber-700 to-amber-900 border border-gold-500/20 text-white'
                        : 'bg-royal-950/90 border border-gold-500/10 text-royal-100'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1.5">
                      {msg.role === 'user' ? (
                        <span className="font-serif text-[10px] bg-amber-950/40 text-gold-300 px-1.5 py-0.5 rounded font-bold uppercase tracking-widest">
                          Seeker of Peace
                        </span>
                      ) : (
                        <span className="font-serif text-[10px] bg-emerald-950/40 text-emerald-300 px-1.5 py-0.5 rounded font-bold uppercase tracking-widest flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3 text-emerald-400" />
                          Elders AI Assistant
                        </span>
                      )}
                    </div>
                    
                    {/* Render basic text with bolding support for nice markdown formatting */}
                    <div className="whitespace-pre-wrap font-sans text-[13px] sm:text-sm font-light">
                      {msg.content.split('**').map((chunk, index) => {
                        if (index % 2 === 1) {
                          return <strong key={index} className="text-gold-300 font-bold">{chunk}</strong>;
                        }
                        return chunk;
                      })}
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-royal-950/90 border border-gold-500/10 text-royal-100/70 max-w-[85%] rounded-xl px-4 py-3 text-sm shadow-lg flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-gold-400 animate-spin" />
                    <span className="font-serif text-xs italic tracking-wider animate-pulse text-gold-300">
                      Sifting through the ancient registers of wisdom...
                    </span>
                  </div>
                </div>
              )}

              {errorStatus && (
                <div className="p-3 bg-red-950/40 border border-red-500/20 rounded-lg flex items-start gap-2 text-xs text-red-200">
                  <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-serif font-black block text-red-400 mb-0.5 uppercase tracking-wider">
                      Communication Intercepted
                    </span>
                    {errorStatus}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Form Toolbar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputValue);
              }}
              className="p-3 bg-royal-950 border-t border-gold-500/10 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isLoading}
                placeholder="Ask any question on family, town, national security, or continental trade peace..."
                className="flex-1 bg-royal-900 border border-gold-500/15 focus:border-gold-500/60 text-white rounded-lg px-3.5 py-2.5 text-xs sm:text-sm outline-none transition-all placeholder:text-royal-100/30"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="p-2.5 bg-gradient-to-r from-amber-600 to-gold-600 hover:from-amber-500 hover:to-gold-500 text-royal-950 rounded-lg transition-all shadow-md active:scale-95 disabled:opacity-30 disabled:pointer-events-none cursor-pointer flex items-center justify-center min-h-[44px] min-w-[44px]"
              >
                <Send className="w-4 h-4 text-royal-950" />
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
