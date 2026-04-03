import { Mail, ExternalLink, Globe, Shield, Users, Eye, Scale, HelpCircle, Lightbulb, BookOpen, FileText, Clock } from "lucide-react";
import mie2026Logo from "@/assets/mie2026.jpg";
import uuLogo from "@/assets/uu-logo.png";
import bihLogo from "@/assets/bih-logo.png";
import workshopArt from "@/assets/workshop-art.svg";

const topics = [
  { icon: Globe, title: "Cross-border consent under GDPR and EHDS" },
  { icon: Shield, title: "What clinicians can access in cross-border care" },
  { icon: Eye, title: "Patient control and data transparency" },
  { icon: Scale, title: "Legal vs. technical vs. clinical realities" },
  { icon: HelpCircle, title: "Gaps and ambiguities in current frameworks" },
];

const agenda = [
  { time: "0–15 min", label: "Opening & case introduction", speaker: "Soumya Shivananda" },
  { time: "15–40 min", label: "Persona-based small group scenario discussion", speaker: null },
  { time: "40–60 min", label: "Group work on solutions and improvements", speaker: null },
  { time: "60–80 min", label: "Plenary sharing and discussion", speaker: null },
  { time: "80–90 min", label: "Key insights and next steps", speaker: null },
];

const outcomes = [
  { icon: Lightbulb, text: "Understanding of EHDS consent complexities" },
  { icon: BookOpen, text: "Contribution to a shared conceptual framework" },
  
];

const organisers = [
  { name: "Soumya Shivananda", affiliation: "Berlin Institute of Health at Charité, Berlin, Germany" },
  { name: "Luciana Terceiro", affiliation: "Uppsala University, Uppsala, Sweden" },
  { name: "Maria Hägglung", affiliation: "Uppsala University, Uppsala, Sweden" },
  { name: "Anna Kharko", affiliation: "Uppsala University / University of Manchester, UK" },
  { name: "Maija Poikela", affiliation: "Berlin Institute of Health at Charité, Berlin, Germany" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#e3ebf8' }}>

        <div className="max-w-5xl mx-auto px-6 pt-16 pb-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="flex-1 max-w-2xl">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide bg-primary/10 text-primary rounded-full">
                Workshop @ MIE 2026
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-2" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                Consent Without Borders
              </h1>
              <p className="text-xl text-muted-foreground font-light mt-2 mb-4 md:text-3xl" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                Consent for Primary Health Data Use Across EU Countries – An Interactive Workshop
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-8 font-medium text-foreground/80" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '18px' }}>
                <span className="flex items-center gap-1.5 font-bold">
                  <Clock className="w-4 h-4 text-primary" /> 23/05 – 14h
                </span>
                <span className="text-border">|</span>
                <span className="font-bold">Venue/Room: TBD</span>
              </div>
            </div>
            <div className="flex-shrink-0 md:mt-12">
              <img src={mie2026Logo} alt="MIE 2026 – Medical Informatics Europe" className="w-[201px] md:w-[235px] rounded-[12px]" />
            </div>
          </div>
        </div>

        {/* Slate band matching the reference poster */}
        <div className="bg-[hsl(218,25%,80%)]" style={{ height: '3px' }} />
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">About the workshop</h2>
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          <div className="flex-1">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              The European Health Data Space (EHDS) is reshaping cross-border health data sharing across the EU, but critical gaps remain around patient consent, clinician access rights, and cross-border accountability. This workshop brings together medical informatics experts to explore these tensions through persona-based group discussions.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Let's explore and debate consent for primary use of health data in cross-border care.
            </p>
          </div>
          <div className="flex-shrink-0 md:w-[40%]">
            <img src={workshopArt} alt="" className="w-full" style={{ transform: 'scaleX(-1)' }} />
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-muted/50 py-[32px]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-10">Topics covered</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((t) => (
              <div key={t.title} className="flex items-start gap-4 p-5 py-[8px] px-[8px]">
                <div className="p-2 rounded-md bg-primary/10 text-primary flex-shrink-0">
                  <t.icon className="w-5 h-5" />
                </div>
                <p className="text-base md:text-lg font-medium text-foreground leading-snug" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Outcomes */}
      <section className="bg-muted/50 py-[32px] my-[12px]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-10">What you'll gain</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {outcomes.map((o) => (
              <div key={o.text} className="bg-background rounded-lg p-6 shadow-sm border border-border/60 flex items-start gap-4 py-[8px] px-[8px]">
                <div className="p-2 rounded-md bg-primary/10 text-primary flex-shrink-0">
                  <o.icon className="w-5 h-5" />
                </div>
                <p className="text-base md:text-lg text-foreground leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organisers */}
      <section className="max-w-5xl mx-auto px-6 py-[32px]">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-10">Organisers</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {organisers.map((o) => (
            <div key={o.name} className="bg-card rounded-lg p-5 border border-border/60 py-[8px]">
              <p className="font-semibold text-foreground text-sm">{o.name}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{o.affiliation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Logos */}
      <section className="border-t border-border py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-center gap-14">
          <img src={bihLogo} alt="Berlin Institute of Health at Charité" className="h-24 object-contain" />
          <img src={uuLogo} alt="Uppsala University" className="h-28 object-contain" />
          <img src={mie2026Logo} alt="MIE 2026" className="h-24 object-contain" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-6">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs opacity-50" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            Further details (date, room) will be announced. © 2026 Consent Without Borders Workshop.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
