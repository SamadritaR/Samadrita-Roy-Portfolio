"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────── REAL CONTENT ─────────────────────────── */

const selectedWork = [
  {
    title: "Toxic Ingredients Indicator",
    tag: "ML · NLP · Entrepreneurial · Consumer Product",
    company: "Founder · Personal Project → Early-Stage Venture",
    summary:
      "Streamlit app that scans any cosmetic ingredient list and returns a toxicity verdict. Harmful compounds flagged with source-backed explanations (FDA, EWG, EU CosIng) and a risk score. Hybrid ML pipeline: TF-IDF baseline upgraded to DistilBERT for complex compounds, trained across High Concern, Moderate, and Safe categories with recall prioritized for safety-critical predictions. Full product loop owned: PRD, MoSCoW, usability testing with 10 peers. Now building the go-to-market.",
    metrics: ["F1 = 0.88", "5 min → <30 sec", "Roadmap in progress"],
    stack: "Python · DistilBERT · scikit-learn · spaCy · Streamlit · FDA/EWG Data · PRD",
    link: "https://github.com/SamadritaR/Toxic-Ingredients-Indicator-for-Beauty-Products",
  },
  {
    title: "Theaters vs. Streaming: What Predicts Success?",
    tag: "Business Analysis · SQL · Data Storytelling",
    company: "Academic Research Project",
    summary:
      "Modeled what actually drives theatrical revenue versus streaming reception across thousands of TMDb titles. SQL for extraction and wrangling, Elastic Net and Gradient Boosting for modeling, SHAP and Partial Dependence Plots to translate the output into a business story. The deliverable wasn't a model; it was a decision framework for content strategy.",
    metrics: ["SHAP interpretability", "Elastic Net + GBM", "SQL-built dataset"],
    stack: "SQL · Python · Elastic Net · Gradient Boosting · SHAP · Tableau · Data Storytelling",
    link: "https://github.com/SamadritaR/Theaters-vs-Streaming-What-predicts-success",
  },
  {
    title: "Cross-Product Prioritization Framework",
    tag: "Product Strategy · PM Tooling · Oracle ERP",
    company: "KNEX Technology · Product Analyst Intern",
    summary:
      "Built KNEX's first universal prioritization system from scratch: ESVF scoring, MoSCoW bucketing, and RACI ownership in one framework, now adopted across 7+ product lines. Layered an Oracle-inspired 3-tier roadmap structure (POR / POI / POD) on top, giving leadership and engineering a shared language for planning.",
    metrics: ["25% faster release planning", "20% better delivery predictability", "7+ product lines"],
    stack: "Excel · Oracle ERP · Jira · Confluence · Stakeholder Alignment",
    link: "https://github.com/SamadritaR/KNEX-Experience-Overview",
  },
  {
    title: "Graduate Program Analytics Overhaul",
    tag: "Business Analysis · SQL · Tableau · Process Design",
    company: "California State University, East Bay",
    summary:
      "Inherited a reporting operation running on manual exports and institutional memory. Rebuilt it end to end: SQL pipelines for data structuring, Tableau dashboards for real-time visibility, a data dictionary so it would outlast any single person. On-time delivery went from 65% to 91%. The skill isn't the tech; it's knowing which broken process to fix first.",
    metrics: ["65% → 91% on-time", "40% less reporting effort", "30% fewer repeat inquiries"],
    stack: "SQL · Python · Tableau · Excel · Data Modeling · Stakeholder Communication",
    link: "https://github.com/SamadritaR/Experience-Overview-Graduate-Student-Assistant--",
  },
  {
    title: "SourceBot: RAG Knowledge Chatbot",
    tag: "RAG · LLM · Product A/B Testing",
    company: "Personal Project",
    summary:
      "Source-cited RAG chatbot (LangChain + Pinecone + OpenAI) that answers questions from indexed documents with traceable citations. Defined the use case, designed the retrieval pipeline, ran A/B tests on retrieval strategies and prompt formats. Satisfaction up 18%. Built to show that PM instincts and ML execution can live in the same person.",
    metrics: ["18% satisfaction uplift", "A/B tested prompts", "Source-cited answers"],
    stack: "LangChain · Pinecone · OpenAI API · Python · A/B Testing · RAG Architecture",
    link: "https://github.com/SamadritaR",
  },
  {
    title: "Real-Time Anomaly Detection: VM Migrations",
    tag: "ML · Observability · Infrastructure",
    company: "Capgemini · Mercedes-Benz Global Ordering Platform",
    summary:
      "During high-risk VM domain migrations, failures had no early signal. Teams learned something broke after the downtime hit. Built an unsupervised detection system (PyTorch + DBSCAN + KMeans) to extract log features in real time, cluster normal patterns, and surface outliers before they caused outages. Docker-deployed, thresholds tuned dynamically to cut false positives.",
    metrics: ["40% faster outage detection", "60% less downtime", "Docker-deployed"],
    stack: "PyTorch · DBSCAN · KMeans · Python · Docker · ELK · Prometheus",
    link: "https://github.com/SamadritaR/Experience-Overview-Capgemini",
  },
];

const experience = [
  {
    role: "Product Analyst Intern",
    company: "KNEX Technology",
    period: "Jun 2025 – Aug 2025",
    location: "Irvine, CA",
    bullets: [
      "Designed KNEX's first cross-product prioritization and reporting framework, now adopted across 7+ product lines, reducing release planning time by 25%.",
      "Defined an Oracle ERP-inspired roadmap structure (POR / POI / POD), aligning product, engineering, and leadership and improving delivery predictability by 20%.",
      "Translated stakeholder needs into data requirements, functional specs, and acceptance criteria for a Lease Abstraction Agent and internal RAG chatbot; validated with SQL and Python prototypes, reducing scoping conflicts by 30%.",
      "Conducted AI feasibility analysis across 15 potential use cases; delivered exec presentation recommending 3 viable initiatives; 2 greenlit and authored into BRD.",
      "Built cross-product KPI datasets; partnered with leadership on A/B testing and metric-based evaluations to inform roadmap sequencing.",
    ],
    link: "https://github.com/SamadritaR/KNEX-Experience-Overview",
  },
  {
    role: "Senior Analyst · DevOps & Infrastructure",
    company: "Capgemini Technology Services",
    period: "Sep 2021 – Jun 2024",
    location: "Mumbai, India",
    bullets: [
      "Designed and deployed automated VM recovery system for Mercedes-Benz Global Ordering Platform using Python and Ansible Playbooks across 75 VMs, reducing downtime by 60%.",
      "Led requirements gathering and authored PRD + acceptance criteria for an anomaly-detection MVP, improving outage detection speed by 40% during high-risk VM domain migrations.",
      "Built and analyzed operational dashboards using Prometheus, Grafana, and ELK to track SLIs/SLOs, reducing MTTD by 40%, MTTR by 35%, and improved SLA adherence by 40%.",
      "Designed Terraform-based infrastructure-as-code workflows on AWS to standardize provisioning, reducing configuration drift at scale.",
      "Processed terabytes of infrastructure logs using Hadoop and SQL pipelines; built Power BI dashboards with decision-ready KPIs for reliability reviews.",
      "Streamlined CI/CD, API integrations, and release workflows across GitLab, Jira, and Confluence, reducing deployment lead time by 30% and sprint overruns by 70%.",
    ],
    link: "https://github.com/SamadritaR/Experience-Overview-Capgemini",
  },
];

const impact = [
  { label: "Downtime Reduction", value: "60%", desc: "Automated VM recovery across 75 machines, Mercedes-Benz Global Ordering Platform" },
  { label: "Planning Efficiency", value: "25%", desc: "First-ever cross-product prioritization framework, adopted across 7+ KNEX product lines" },
  { label: "Sprint Overruns Reduced", value: "70%", desc: "CI/CD and release workflow overhaul across GitLab, Jira and Confluence by implementing API Integration" },
];

const marks = [
  {
    icon: "◈",
    label: "Learning by doing, in rooms that didn't wait",
    context: "Capgemini · Mercedes-Benz · Senior Team Environment",
    body: "Joining Capgemini as one of the youngest on a team of senior engineers meant there was no gradual onboarding. The work was live, the stakes were real, and the backlog had items that had been sitting untouched for a while because they were genuinely complicated. That environment turned out to be the best possible place to learn. Asking questions was never a weakness there; it was how things got done. Over time, the complicated tickets stopped being intimidating and started being the interesting ones.",
  },
  {
    icon: "◈",
    label: "Building the first version of something, from scratch",
    context: "KNEX Technology · Cross-Functional Collaboration",
    body: "There was no existing framework at KNEX when the prioritization work began. Building it meant understanding how engineers thought about effort, how leadership thought about value, and where those two things weren't yet aligned. Conversations with both sides shaped every iteration. The technical feasibility analysis across 15 AI use cases followed the same pattern: listen carefully, ask the right questions, and build something the room can actually use.",
  },
  {
    icon: "◈",
    label: "Choosing the harder path, on purpose",
    context: "MS Business Analytics · Capstone Project · CSUEB",
    body: "Most capstone projects are built in groups. Taking it on alone was a deliberate choice, not because collaboration isn't valuable, but because end-to-end ownership teaches things that shared work doesn't. Every decision, every design choice, every dead end was something to navigate independently. The Theaters vs. Streaming research came out of that same instinct: pick the question that doesn't have an obvious answer and follow it all the way through.",
  },
];

const presence = marks;

const principles = [
  { n: "01", t: "Frame the problem first", d: "Define the user, the constraint, and what 'done' looks like before touching a tool or a ticket." },
  { n: "02", t: "Prototype before you specify", d: "SQL queries and quick Python scripts surface edge cases that no amount of stakeholder interviews will catch." },
  { n: "03", t: "Make trade-offs visible", d: "Every decision has a cost. The job is to surface it early, not let it surface in production." },
  { n: "04", t: "Align, then ship", d: "The best spec means nothing if engineering and leadership aren't in the same room. Build consensus, then build fast." },
  { n: "05", t: "Let the data challenge you", d: "A good analysis should make you uncomfortable at least once. If the numbers only confirm what you already thought, you didn't look hard enough." },
  { n: "06", t: "Make the insight unavoidable", d: "The output of analysis isn't a table or a chart; it's a decision. Every dashboard, every SQL query, every model exists to make the right call obvious to the person who has to make it." },
];

/* ─────────────────────────── HOOKS ─────────────────────────── */

function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); obs.disconnect(); } }, { threshold });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return { ref, on };
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, on } = useScrollReveal();
  return (
    <div ref={ref} style={{
      opacity: on ? 1 : 0,
      transform: on ? "translateY(0px)" : "translateY(32px)",
      filter: on ? "blur(0px)" : "blur(2px)",
      transition: `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms, filter 0.7s ease ${delay}ms`
    }}>
      {children}
    </div>
  );
}

function FadeIn({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOn(true), delay); return () => clearTimeout(t); }, [delay]);
  return (
    <div style={{
      opacity: on ? 1 : 0,
      transform: on ? "translateY(0px)" : "translateY(22px)",
      transition: `opacity 1s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 1s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      ...style
    }}>
      {children}
    </div>
  );
}

function SlideIn({ children, delay = 0, from = "right", style = {} }: { children: React.ReactNode; delay?: number; from?: "right" | "left"; style?: React.CSSProperties }) {
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOn(true), delay); return () => clearTimeout(t); }, [delay]);
  const offset = from === "right" ? "70px" : "-70px";
  return (
    <div style={{
      opacity: on ? 1 : 0,
      transform: on ? "translateX(0px) translateY(0px)" : `translateX(${offset}) translateY(12px)`,
      filter: on ? "blur(0px)" : "blur(2px)",
      transition: `opacity 1.3s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 1.3s cubic-bezier(0.22,1,0.36,1) ${delay}ms, filter 1s ease ${delay}ms`,
      ...style
    }}>
      {children}
    </div>
  );
}

function SweepWord({ text, delay }: { text: string; delay: number }) {
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOn(true), delay); return () => clearTimeout(t); }, [delay]);
  return (
    <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}>
      <span style={{
        display: "inline-block",
        transform: on ? "translateY(0)" : "translateY(115%)",
        opacity: on ? 1 : 0,
        filter: on ? "blur(0px)" : "blur(6px)",
        transition: `transform 1.1s cubic-bezier(0.22,1,0.36,1), opacity 0.5s ease, filter 0.9s cubic-bezier(0.22,1,0.36,1)`
      }}>
        {text}
      </span>
    </span>
  );
}

/* ─────────────────────────── NAV ─────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 50); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);
  const links = [["Work", "#work"], ["Experience", "#experience"], ["Impact", "#impact"], ["Instinct", "#presence"], ["Contact", "#contact"]];
  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: 64, display: "flex", alignItems: "center", borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,0.08)" : "transparent"}`, background: scrolled ? "rgba(8,6,18,0.9)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", transition: "all 0.45s ease" }}>
      <div style={{ maxWidth: 1160, width: "100%", margin: "0 auto", padding: "0 2.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <nav style={{ display: "flex", gap: "3rem", alignItems: "center" }}>
          {links.map(([label, href]) => (
            <a key={href} href={href} style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(200,180,255,0.78)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#d8b4fe")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(200,180,255,0.78)")}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

/* ─────────────────────────── UI ATOMS ─────────────────────────── */
function Pill({ children }: { children: React.ReactNode }) {
  return <span style={{ display: "inline-block", border: "1px solid rgba(168,139,250,0.3)", background: "rgba(139,92,246,0.12)", borderRadius: 999, padding: "6px 16px", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "rgba(216,180,254,0.85)" }}>{children}</span>;
}

function Tag({ children }: { children: React.ReactNode }) {
  return <span style={{ display: "inline-block", border: "1px solid rgba(168,139,250,0.2)", background: "rgba(139,92,246,0.08)", borderRadius: 6, padding: "3px 10px", fontSize: 10, letterSpacing: "0.12em", color: "rgba(196,168,255,0.85)" }}>{children}</span>;
}

function Card({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <div style={{ borderRadius: 18, border: "1px solid rgba(255,255,255,0.09)", background: "linear-gradient(145deg,rgba(255,255,255,0.055) 0%,rgba(255,255,255,0.02) 100%)", backdropFilter: "blur(14px)", padding: "2rem", ...style }}>{children}</div>;
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ textAlign: "center" as const, padding: "0 1rem" }}>
      <p style={{ fontFamily: "'Georgia',serif", fontSize: "2rem", fontWeight: 300, color: "#fff", lineHeight: 1 }}>{value}</p>
      <p style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(196,168,255,0.7)", marginTop: "0.4rem" }}>{label}</p>
    </div>
  );
}

const Divider = () => <div style={{ height: 1, background: "linear-gradient(to right,transparent,rgba(168,139,250,0.2),transparent)", margin: "5.5rem 0" }} />;

function Btn({ href, primary, children, external }: { href: string; primary?: boolean; children: React.ReactNode; external?: boolean }) {
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}
      style={{ display: "inline-block", borderRadius: 999, padding: "12px 28px", fontSize: 11, fontWeight: primary ? 700 : 400, letterSpacing: "0.18em", textTransform: "uppercase" as const, textDecoration: "none", transition: "all 0.22s ease", cursor: "pointer", background: primary ? "#fff" : "transparent", color: primary ? "#08060f" : "rgba(216,180,254,0.78)", border: primary ? "none" : "1px solid rgba(168,139,250,0.3)" }}
      onMouseEnter={e => { if (primary) e.currentTarget.style.opacity = "0.88"; else { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(168,139,250,0.65)"; } }}
      onMouseLeave={e => { if (primary) e.currentTarget.style.opacity = "1"; else { e.currentTarget.style.color = "rgba(216,180,254,0.78)"; e.currentTarget.style.borderColor = "rgba(168,139,250,0.3)"; } }}>
      {children}
    </a>
  );
}

function SHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal>
      <p style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(168,139,250,0.65)", marginBottom: "0.85rem" }}>{eyebrow}</p>
      <h2 style={{ fontFamily: "'Georgia',serif", fontSize: "clamp(2rem,4.5vw,3.4rem)", fontWeight: 300, color: "#fff", letterSpacing: "-0.02em", marginBottom: "3rem", lineHeight: 1.1 }}>{title}</h2>
    </Reveal>
  );
}

/* ═══════════════════════════════ PAGE ═══════════════════════════════ */
export default function Home() {
  return (
    <>
      <style>{`
        html{scroll-behavior:smooth}
        *{box-sizing:border-box;margin:0;padding:0}
        body{background:#08060f;overflow-x:hidden}
        ::selection{background:rgba(139,92,246,0.35);color:#fff}
        a{text-decoration:none}
        @media(max-width:820px){
          .hero-grid{flex-direction:column!important}
          .hero-photo{width:100%!important;height:300px!important;margin-top:2.5rem}
        }
        @keyframes borderShimmer {
          0%   { box-shadow: 0 40px 100px rgba(0,0,0,0.55), 0 0 60px rgba(109,40,217,0.18), 0 0 0 1px rgba(168,139,250,0.08); }
          50%  { box-shadow: 0 40px 100px rgba(0,0,0,0.55), 0 0 90px rgba(139,92,246,0.28), 0 0 0 1px rgba(168,139,250,0.18); }
          100% { box-shadow: 0 40px 100px rgba(0,0,0,0.55), 0 0 60px rgba(109,40,217,0.18), 0 0 0 1px rgba(168,139,250,0.08); }
        }
        .hero-photo { animation: borderShimmer 5s ease-in-out infinite; }
      `}</style>

      <div style={{ minHeight: "100vh", background: "#08060f", color: "#fff", position: "relative" }}>

        {/* ── BACKGROUND ── */}
        <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "-15%", left: "50%", transform: "translateX(-50%)", width: "110%", height: "80%", background: "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(124,58,237,0.28) 0%, rgba(91,33,182,0.12) 45%, transparent 70%)" }} />
          <div style={{ position: "absolute", top: "10%", left: "-8%", width: "40%", height: "60%", background: "radial-gradient(ellipse at center, rgba(139,92,246,0.12) 0%, transparent 65%)", filter: "blur(60px)" }} />
          <div style={{ position: "absolute", top: "5%", right: "-8%", width: "38%", height: "55%", background: "radial-gradient(ellipse at center, rgba(109,40,217,0.09) 0%, transparent 65%)", filter: "blur(80px)" }} />
          <div style={{ position: "absolute", top: "55%", left: "50%", transform: "translate(-50%,-50%)", width: "65%", height: "45%", background: "radial-gradient(ellipse at center, rgba(109,40,217,0.07) 0%, transparent 70%)", filter: "blur(100px)" }} />
          <div style={{ position: "absolute", inset: 0, opacity: 0.022, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
        </div>

        <Nav />

        <main style={{ maxWidth: 1160, margin: "0 auto", padding: "0 2.5rem", position: "relative", zIndex: 1 }}>

          {/* ══ HERO ══ */}
          <section style={{ paddingTop: 140, paddingBottom: 100 }}>
            <div className="hero-grid" style={{ display: "flex", alignItems: "center", gap: "3.5rem" }}>

              <div style={{ flex: 1, minWidth: 0 }}>
                <FadeIn delay={80}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem" }}>
                    {["Product","AI Systems","Analytics","DevOps"].map(p => <Pill key={p}>{p}</Pill>)}
                  </div>
                </FadeIn>

                <div style={{ marginBottom: "2rem" }}>
                  <FadeIn delay={250}>
                    <p style={{ fontFamily: "'Georgia',serif", fontSize: "clamp(1rem,2vw,1.3rem)", fontWeight: 300, color: "rgba(255,255,255,0.72)", marginBottom: "0.5rem" }}>
                      Hi, my name is
                    </p>
                  </FadeIn>
                  <h1 style={{ fontFamily: "'Georgia',serif", fontWeight: 300, lineHeight: 1.0, letterSpacing: "-0.025em" }}>
                    <div style={{ fontSize: "clamp(3rem, 6.5vw, 5.2rem)", color: "#fff", marginBottom: "0.08em" }}>
                      <SweepWord text="Samadrita" delay={400} />
                    </div>
                    <div style={{ fontSize: "clamp(3rem, 6.5vw, 5.2rem)", color: "#fff", display: "flex", gap: "0.22em", flexWrap: "wrap" }}>
                      <SweepWord text="Roy" delay={560} />
                      <SweepWord text="Chowdhury" delay={680} />
                    </div>
                  </h1>
                </div>

                <FadeIn delay={750}>
                  <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(216,196,255,0.9)", marginBottom: "1.4rem" }}>
                    Product Manager &nbsp;·&nbsp; AI Systems &nbsp;·&nbsp; Business Analytics
                  </p>
                </FadeIn>

                <FadeIn delay={750}>
                  <p style={{ fontSize: "1.05rem", lineHeight: 1.82, color: "rgba(255,255,255,0.78)", maxWidth: 500, marginBottom: "2.5rem" }}>
                    MS Business Analytics. Former DevOps Engineer and Senior analyst, now moving into product, with a technical range to understand the system and an analytical instinct to question it. Comfortable in the details, clear in the boardroom.
                  </p>
                </FadeIn>

                <FadeIn delay={750}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                    <Btn href="#work" primary>View Work</Btn>
                    <Btn href="#contact">Get in Touch</Btn>
                    <Btn href="/Samadrita_Roy_Resume.pdf" external>Resume</Btn>
                  </div>
                </FadeIn>
              </div>

              {/* Photo */}
              <SlideIn delay={180} from="right" style={{ flexShrink: 0 }}>
                <div className="hero-photo" style={{ width: 340, height: 430, borderRadius: 22, overflow: "hidden", position: "relative", border: "1px solid rgba(168,139,250,0.2)", boxShadow: "0 50px 120px rgba(0,0,0,0.6), 0 0 80px rgba(109,40,217,0.2), 0 0 140px rgba(109,40,217,0.08)" }}>
                  <div style={{ position: "absolute", inset: 0, zIndex: 2, borderRadius: 22, background: "linear-gradient(145deg, rgba(124,58,237,0.16) 0%, transparent 45%)", pointerEvents: "none" }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", zIndex: 3, background: "linear-gradient(to top, rgba(8,6,15,0.75) 0%, transparent 100%)", pointerEvents: "none" }} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/Samadrita_Roy_Photo.jpg" alt="Samadrita Roy Chowdhury" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block", position: "relative", zIndex: 1, transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1)" }}
                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                  />
                </div>
              </SlideIn>

            </div>
          </section>

          <Divider />

          {/* ══ SELECTED WORK ══ */}
          <section id="work" style={{ paddingBottom: "5rem" }}>
            <SHead eyebrow="Work" title="Selected Systems" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "1.4rem" }}>
              {selectedWork.map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <Card style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                    <div style={{ marginBottom: "0.7rem" }}>
                      <Tag>{item.tag}</Tag>
                    </div>
                    <p style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(168,139,250,0.55)", marginBottom: "0.6rem" }}>{item.company}</p>
                    <h3 style={{ fontFamily: "'Georgia',serif", fontSize: "1.2rem", fontWeight: 400, color: "#fff", marginBottom: "1rem", lineHeight: 1.3 }}>{item.title}</h3>
                    <p style={{ fontSize: "0.9rem", lineHeight: 1.78, color: "rgba(255,255,255,0.75)", marginBottom: "1.25rem", flex: 1 }}>{item.summary}</p>
                    {/* Metrics chips */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.25rem" }}>
                      {item.metrics.map(m => (
                        <span key={m} style={{ fontSize: 10, letterSpacing: "0.1em", color: "rgba(196,168,255,0.9)", background: "rgba(139,92,246,0.15)", border: "1px solid rgba(168,139,250,0.25)", borderRadius: 6, padding: "3px 10px" }}>{m}</span>
                      ))}
                    </div>
                    <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "1rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                      <p style={{ fontSize: "0.78rem", color: "rgba(196,168,255,0.6)", lineHeight: 1.6, fontStyle: "italic", maxWidth: "75%" }}>{item.stack}</p>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(196,168,255,0.7)", textDecoration: "none", whiteSpace: "nowrap", transition: "color 0.2s" }}
                        onMouseEnter={e => e.currentTarget.style.color = "#d8b4fe"}
                        onMouseLeave={e => e.currentTarget.style.color = "rgba(196,168,255,0.7)"}>
                        Learn more →
                      </a>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </section>

          <Divider />

          {/* ══ EXPERIENCE ══ */}
          <section id="experience" style={{ paddingBottom: "5rem" }}>
            <SHead eyebrow="Experience" title="Where I've Built" />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
              {experience.map((exp, i) => (
                <Reveal key={exp.company} delay={i * 80}>
                  <Card>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.25rem" }}>
                      <div>
                        <h3 style={{ fontFamily: "'Georgia',serif", fontSize: "1.2rem", fontWeight: 400, color: "#fff", marginBottom: "0.3rem" }}>{exp.role}</h3>
                        <p style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(196,168,255,0.8)" }}>{exp.company}</p>
                      </div>
                      <div style={{ textAlign: "right" as const }}>
                        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", letterSpacing: "0.05em" }}>{exp.period}</p>
                        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>{exp.location}</p>
                      </div>
                    </div>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                      {exp.bullets.map((b, j) => (
                        <li key={j} style={{ display: "flex", gap: "0.85rem", fontSize: "0.9rem", lineHeight: 1.72, color: "rgba(255,255,255,0.72)" }}>
                          <span style={{ color: "rgba(168,139,250,0.6)", flexShrink: 0, marginTop: "0.05em" }}>◈</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div style={{ marginTop: "1.25rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(196,168,255,0.65)", transition: "color 0.2s" }}
                        onMouseEnter={e => e.currentTarget.style.color = "#d8b4fe"}
                        onMouseLeave={e => e.currentTarget.style.color = "rgba(196,168,255,0.65)"}>
                        Full breakdown on GitHub →
                      </a>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </section>

          <Divider />

          {/* ══ IMPACT ══ */}
          <section id="impact" style={{ paddingBottom: "5rem" }}>
            <SHead eyebrow="Proof" title="Impact by the Numbers" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: "1.2rem" }}>
              {impact.map((c, i) => c && (
                <Reveal key={c.label} delay={i * 60}>
                  <Card>
                    <p style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(196,168,255,0.75)", marginBottom: "1rem" }}>{c.label}</p>
                    <p style={{ fontFamily: "'Georgia',serif", fontSize: "2rem", fontWeight: 300, color: "#fff", marginBottom: "0.6rem", lineHeight: 1 }}>{c.value}</p>
                    <p style={{ fontSize: "0.82rem", lineHeight: 1.65, color: "rgba(255,255,255,0.58)" }}>{c.desc}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </section>

          <Divider />

          {/* ══ PRESENCE ══ */}
          <section id="presence" style={{ paddingBottom: "5rem" }}>
            <SHead eyebrow="Beyond the Numbers" title="Impact by Instinct" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "1.4rem" }}>
              {presence.map((p, i) => (
                <Reveal key={p.label} delay={i * 100}>
                  <div style={{ borderRadius: 18, border: "1px solid rgba(168,139,250,0.14)", background: "linear-gradient(145deg, rgba(139,92,246,0.08) 0%, rgba(255,255,255,0.02) 100%)", backdropFilter: "blur(14px)", padding: "2.25rem 2rem", height: "100%" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.4rem" }}>
                      <span style={{ fontSize: "1rem", color: "rgba(168,139,250,0.75)", lineHeight: 1, marginTop: "0.15em", flexShrink: 0 }}>◈</span>
                      <div>
                        <h3 style={{ fontFamily: "'Georgia',serif", fontSize: "1.1rem", fontWeight: 400, color: "#fff", lineHeight: 1.25, marginBottom: "0.3rem" }}>{p.label}</h3>
                        <p style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(196,168,255,0.6)" }}>{p.context}</p>
                      </div>
                    </div>
                    <p style={{ fontSize: "0.9rem", lineHeight: 1.82, color: "rgba(255,255,255,0.68)" }}>{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <Divider />

          {/* ══ HOW I THINK ══ */}
          <section id="thinking" style={{ paddingBottom: "5rem" }}>
            <SHead eyebrow="Operating Principles" title="How I Think" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1.2rem" }}>
              {principles.map((c, i) => (
                <Reveal key={c.n} delay={i * 80}>
                  <Card>
                    <p style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(196,168,255,0.5)", marginBottom: "0.8rem" }}>{c.n}</p>
                    <p style={{ fontSize: "1rem", fontWeight: 600, color: "#fff", marginBottom: "0.5rem" }}>{c.t}</p>
                    <p style={{ fontSize: "0.875rem", lineHeight: 1.72, color: "rgba(255,255,255,0.72)" }}>{c.d}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </section>

          <Divider />

          {/* ══ CONTACT ══ */}
          <section id="contact" style={{ paddingBottom: 130 }}>
            <Reveal>
              <div style={{ borderRadius: 26, border: "1px solid rgba(168,139,250,0.2)", background: "linear-gradient(135deg, rgba(124,58,237,0.16) 0%, rgba(91,33,182,0.08) 50%, rgba(255,255,255,0.03) 100%)", backdropFilter: "blur(18px)", padding: "4.5rem 4rem" }}>
                <p style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(168,139,250,0.6)", marginBottom: "1.2rem" }}>Get in touch</p>
                <h2 style={{ fontFamily: "'Georgia',serif", fontSize: "clamp(2.2rem,5vw,3.8rem)", fontWeight: 300, color: "#fff", letterSpacing: "-0.02em", marginBottom: "1rem", lineHeight: 1.08 }}>
                  Say hello
                </h2>
                <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.72)", maxWidth: 460, marginBottom: "2.8rem" }}>
                  Always happy to connect. Whether it's about a role, a project, or just a good conversation about product and data. My inbox is open.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                  <Btn href="mailto:samadrita180@gmail.com" primary>Email Me</Btn>
                  <Btn href="https://www.linkedin.com/in/samadrita-roy-chowdhury/" external>LinkedIn</Btn>
                  <Btn href="https://github.com/SamadritaR" external>GitHub</Btn>
                </div>
              </div>
            </Reveal>
          </section>

          {/* Footer */}
          <div style={{ borderTop: "1px solid rgba(168,139,250,0.1)", padding: "2.2rem 0", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
            <p style={{ fontSize: 11, letterSpacing: "0.14em", color: "rgba(196,168,255,0.45)" }}>© 2025 Samadrita Roy Chowdhury</p>
            <p style={{ fontSize: 11, letterSpacing: "0.14em", color: "rgba(196,168,255,0.45)" }}>Product · AI · Analytics · DevOps</p>
          </div>

        </main>
      </div>
    </>
  );
}