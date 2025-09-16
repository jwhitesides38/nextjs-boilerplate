"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, LineChart, Microscope, Cpu, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Landing() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-slate-200">
        <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-2xl bg-slate-900" />
            <span className="font-semibold">395 Intelligence</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:opacity-80">Services</a>
            <a href="#process" className="hover:opacity-80">Process</a>
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              From Unmet Need to Product Strategy
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              We identify unmet clinical needs, build defensible business cases, and create product requirements—while helping organizations harness AI to consolidate knowledge into actionable strategies.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow">
                Request a discovery call <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium">
                Explore services
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1"><ShieldCheck className="h-4 w-4"/> HIPAA-aware workflows</span>
              <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-4 w-4"/> MDR, IVDR, FDA-savvy</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                <Card icon={<Microscope />} title="Unmet Needs" items={["Clinical workflow observation","Stakeholder interviews","Gap analysis","Ethnographic research"]} />
                <Card icon={<LineChart />} title="Business Cases" items={["Market sizing & segmentation","Adoption models","Health economics","Competitive landscaping"]} />
                <Card icon={<Cpu />} title="AI Knowledge Systems" items={["Consolidate SharePoint & archives","Copilot + agent workflows","Claims library management","Launch plan reuse"]} />
                <Card icon={<ShieldCheck />} title="Compliance" items={["PHI minimization","Governed AI use","Regulatory alignment","Secure knowledge hubs"]} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logos / Social proof placeholder */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <p className="text-center text-sm text-slate-500">Trusted by teams building monitoring, perioperative, and critical care solutions.</p>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">What we do</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Service
            title="Identify Unmet Clinical Needs"
            blurb="We uncover pain points at the bedside through direct observation, interviews, and workflow mapping."
            bullets={["ICU, OR, ED, and PACU ethnography","Voice of clinician and patient","Clinical workflow analysis","Gap identification"]}
          />
          <Service
            title="Build Business Cases"
            blurb="Our research produces credible, defendable business cases that drive portfolio and investment decisions."
            bullets={["Market sizing (TAM/SAM/SOM)","Health economics & reimbursement pathways","Competitive and adoption modeling","Executive-ready valuation decks"]}
          />
          <Service
            title="Define Product Requirements"
            blurb="We translate needs into MRDs and PRDs, complete with claims libraries and KOL validation."
            bullets={["Draft MRD/PRD inputs","Claims and value prop crafting","KOL feedback loops","Launch story alignment"]}
          />
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">How we work</h2>
        <ol className="mt-8 grid md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Discover", text: "Identify clinical unmet needs through observation and interviews." },
            { step: "02", title: "Quantify", text: "Validate needs with data, market sizing, and economics." },
            { step: "03", title: "Define", text: "Translate insights into requirements, claims, and business cases." },
            { step: "04", title: "Enable", text: "Build AI-enabled knowledge systems that consolidate insights into usable launch playbooks." },
          ].map((s) => (
            <li key={s.step} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
              <div className="text-xs text-slate-500">{s.step}</div>
              <div className="mt-1 font-semibold">{s.title}</div>
              <div className="mt-2 text-sm text-slate-600">{s.text}</div>
            </li>
          ))}
        </ol>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Why us</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-semibold">Medtech-native</h3>
            <p className="mt-2 text-sm text-slate-600">We’ve built upstream strategies for monitoring, perioperative, and critical care. We connect bedside reality with boardroom strategy.</p>
            <ul className="mt-4 text-sm text-slate-700 space-y-2 list-disc pl-5">
              <li>Deep experience in ICU/OR workflows</li>
              <li>Evidence, economics, and regulatory awareness</li>
              <li>Portfolio and launch strategy expertise</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-semibold">Practical AI Integration</h3>
            <p className="mt-2 text-sm text-slate-600">We help organizations use their existing tools—like SharePoint and Copilot—augmented by agents to consolidate prior research and enable repeatable success.</p>
            <ul className="mt-4 text-sm text-slate-700 space-y-2 list-disc pl-5">
              <li>Centralized knowledge hubs from existing assets</li>
              <li>Governed agent workflows to surface insights</li>
              <li>Claims libraries and launch plans linked to past work</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold">Let’s talk</h2>
          <p className="mt-2 text-slate-600 text-sm">Tell us about your product, timelines, and goals. We’ll share a short proposal or a working session agenda.</p>
          {submitted ? (
            <div className="mt-6 rounded-xl bg-green-50 border border-green-200 p-4 text-sm">Thanks! We’ll be in touch shortly.</div>
          ) : (
            <form
              className="mt-6 grid md:grid-cols-2 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <input required placeholder="Name" className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm" />
              <input required placeholder="Work email" type="email" className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm" />
              <input placeholder="Company" className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm md:col-span-2" />
              <textarea placeholder="Briefly describe your needs" className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm md:col-span-2 min-h-[120px]"/>
              <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow md:col-span-2">
                Send inquiry <ArrowRight className="h-4 w-4" />
              </button>
              <div className="text-xs text-slate-500 md:col-span-2 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4"/> We’ll never train models on your data. NDAs on request.
              </div>
            </form>
          )}
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-700">
            <a href="mailto:hello@395intelligence.com" className="inline-flex items-center gap-2"><Mail className="h-4 w-4"/> hello@395intelligence.com</a>
            <a href="tel:+1-949-000-0000" className="inline-flex items-center gap-2"><Phone className="h-4 w-4"/> +1 (949) 000-0000</a>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-xs text-slate-500">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} 395 Intelligence. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a className="hover:underline" href="#">Privacy</a>
            <a className="hover:underline" href="#">Terms</a>
            <a className="hover:underline" href="#">Responsible AI</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Service({ title, blurb, bullets }: { title: string; blurb: string; bullets: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{blurb}</p>
      <ul className="mt-4 text-sm text-slate-700 space-y-2 list-disc pl-5">
        {bullets.map((b) => (<li key={b}>{b}</li>))}
      </ul>
    </div>
  );
}

function Card({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-xl border border-slate-200 flex items-center justify-center">{icon}</div>
        <div className="font-semibold text-sm">{title}</div>
      </div>
      <ul className="mt-3 text-xs text-slate-600 space-y-1 list-disc pl-5">
        {items.map((i) => (<li key={i}>{i}</li>))}
      </ul>
    </div>
  );
}
