import { useEffect } from 'react';
import {
  ArrowUpRight,
  Cpu,
  ShieldAlert,
  Zap,
  Terminal,
  ChevronRight,
  Lock
} from 'lucide-react';

const SEO = () => {
  useEffect(() => {
    document.title = 'Amplified Intelligence — Post-AI Research Lab';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Amplified Intelligence is a Post-AI design and research lab building diagnostic tools for signal processing and edge intelligence. Creators of SlopWash.');
  }, []);
  return null;
};

const Nav = () => (
  <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
    <nav className="max-w-7xl mx-auto flex items-center justify-between" aria-label="Main Navigation">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm" aria-hidden="true">
          <div className="w-4 h-4 bg-black rotate-45"></div>
        </div>
        <span className="text-lg font-black tracking-tighter uppercase text-white">Amplified Intelligence</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500">
        <a href="#lab" className="hover:text-white transition-colors">The Lab</a>
        <a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a>
        <a
          href="https://slopwash.me"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all flex items-center gap-2"
          aria-label="Visit SlopWash"
        >
          SlopWash <ArrowUpRight size={12} />
        </a>
      </div>
    </nav>
  </header>
);

const SlopWashCard = () => (
  <article className="group relative bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden hover:border-[#00E5FF]/30 transition-all duration-500">
    <div className="absolute top-0 right-0 p-6">
      <div className="w-10 h-10 bg-[#00E5FF]/10 rounded-full flex items-center justify-center text-[#00E5FF] border border-[#00E5FF]/20 group-hover:scale-110 transition-transform">
        <Zap size={20} />
      </div>
    </div>
    <div className="p-10 space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00E5FF]/10 text-[#00E5FF] text-[9px] font-black tracking-widest uppercase border border-[#00E5FF]/20 rounded-full">
        Flagship Product
      </div>
      <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter">SlopWash</h3>
      <p className="text-neutral-500 font-mono text-sm leading-relaxed max-w-md">
        The world's first diagnostic pressure-washer for corporate jargon and AI-generated fluff. Ripping away the subtext to find the truth behind the noise.
      </p>
      <div className="pt-6">
        <a
          href="https://slopwash.me"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 text-[10px] font-black tracking-[0.3em] uppercase text-[#00E5FF] hover:gap-6 transition-all"
          aria-label="Try SlopWash Now"
        >
          Enter the Wash <ChevronRight size={14} />
        </a>
      </div>
    </div>
    <div className="h-40 bg-[linear-gradient(to_bottom,transparent,#00E5FF05)] border-t border-white/5 relative overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 opacity-10 font-mono text-[8px] p-4 text-[#00E5FF] overflow-hidden leading-none select-none pointer-events-none">
        {Array(20).fill('ANALYZING_STREAM_TRUTH_DETECTED_JARGON_FILTER_ACTIVE_').join(' ')}
      </div>
    </div>
  </article>
);

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="p-8 border border-white/5 bg-[#080808] rounded-xl space-y-4 hover:bg-[#0C0C0C] transition-colors">
    <div className="text-white opacity-50"><Icon size={24} strokeWidth={1.5} aria-hidden="true" /></div>
    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">{title}</h3>
    <p className="text-xs text-neutral-500 font-mono leading-relaxed">{desc}</p>
  </div>
);

export default function AgencyLanding() {
  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 font-sans selection:bg-white selection:text-black">
      <SEO />
      <Nav />

      <main>
        {/* Hero */}
        <section className="relative pt-48 pb-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8 space-y-8">
                <div className="inline-block font-mono text-[10px] tracking-[0.4em] uppercase text-neutral-500 border-b border-neutral-800 pb-2">
                  Engineering Human Potential
                </div>
                <h1 className="text-7xl md:text-[120px] font-black leading-[0.85] tracking-tighter uppercase italic">
                  Amplified <br />
                  <span className="text-neutral-600">Intelligence</span>
                </h1>
                <p className="text-xl md:text-2xl text-neutral-400 font-mono max-w-2xl leading-relaxed">
                  A design and research lab building diagnostic tools of the post-AI era. We specialize in signal processing and anti-noise architecture.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-end" aria-hidden="true">
                <div className="w-full aspect-square bg-gradient-to-br from-neutral-800 to-black border border-white/10 relative overflow-hidden rounded-3xl rotate-3 shadow-2xl">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-2 border-white/20 rounded-full animate-ping"></div>
                    <div className="absolute w-20 h-20 bg-white blur-[60px] opacity-20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lab */}
        <section id="lab" className="py-32 px-6 bg-[#030303] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <p className="text-[10px] font-black tracking-[0.5em] uppercase text-neutral-500 mb-4">Laboratory Output // 001</p>
              <div className="h-px w-full bg-neutral-900" aria-hidden="true"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <SlopWashCard />
              <div className="space-y-12">
                <h2 className="text-5xl font-black uppercase tracking-tight leading-none italic text-white/90">
                  Tools that fight back <br /> against the noise.
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Feature
                    icon={ShieldAlert}
                    title="Anti-Noise"
                    desc="We specialize in signal processing—filtering out the fluff of the LLM era."
                  />
                  <Feature
                    icon={Cpu}
                    title="Edge Intelligence"
                    desc="Focusing on local-first models. Private. Fast. Secure by design."
                  />
                  <Feature
                    icon={Terminal}
                    title="Raw Interface"
                    desc="Interfaces that respect your time. No chat bubbles. Just results."
                  />
                  <Feature
                    icon={Lock}
                    title="Privacy Lab"
                    desc="Building software that runs on your hardware, not our servers."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section id="philosophy" className="py-40 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight">
              Intelligence is not just processing. <br />
              <span className="italic text-neutral-500">It is discernment.</span>
            </h2>
            <p className="text-neutral-500 font-mono leading-relaxed text-lg">
              In an era where language is cheap and data is infinite, the most valuable technology is the one that says "no." Amplified Intelligence builds software for people who value truth over volume.
            </p>
          </div>
        </section>
      </main>

      <footer className="py-32 border-t border-white/5 bg-[#000]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white flex items-center justify-center rounded-sm" aria-hidden="true">
                  <div className="w-3 h-3 bg-black rotate-45"></div>
                </div>
                <span className="text-sm font-black tracking-tighter uppercase text-white">Amplified Intelligence</span>
              </div>
              <p className="text-xs text-neutral-600 font-mono uppercase tracking-[0.2em]">Based in the Post-Truth Era.</p>
            </div>

            <div className="flex gap-16 text-[10px] font-black tracking-[0.3em] uppercase">
              <div className="space-y-6">
                <p className="text-neutral-700">Output</p>
                <ul className="space-y-4 text-neutral-500">
                  <li>
                    <a
                      href="https://slopwash.me"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#00E5FF] transition-colors"
                    >
                      SlopWash
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <p className="text-neutral-700">Foundation</p>
                <ul className="space-y-4 text-neutral-500">
                  <li><a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-40 flex justify-between items-center text-[8px] font-mono uppercase tracking-[0.5em] text-neutral-800">
            <span>© {new Date().getFullYear()} Amplified Intelligence Lab</span>
            <span aria-hidden="true">01000001 01001001</span>
          </div>
        </div>
      </footer>

      <style>{`
        :root {
          --font-sans: 'Space Grotesk', sans-serif;
          --font-mono: 'Space Mono', monospace;
        }

        body {
          font-family: var(--font-sans);
          -webkit-font-smoothing: antialiased;
          background-color: #050505;
        }

        .font-mono {
          font-family: var(--font-mono);
        }

        a:focus-visible {
          outline: 2px solid #00E5FF;
          outline-offset: 4px;
        }
      `}</style>
    </div>
  );
}
