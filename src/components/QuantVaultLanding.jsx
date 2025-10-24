import React, { useEffect, useState } from "react";

const heroHighlights = [
  {
    id: 1,
    position: "top-10 left-8 lg:top-20 lg:left-24",
    gradient: "from-[#189E76]/80 via-[#45C4B0]/60 to-transparent",
    blur: "blur-3xl",
    delay: "0s",
    parallax: 0.1,
  },
  {
    id: 2,
    position: "top-40 right-10 lg:top-32 lg:right-40",
    gradient: "from-[#7C5CFF]/70 via-[#132861]/60 to-transparent",
    blur: "blur-2xl",
    delay: "1.5s",
    parallax: 0.16,
  },
  {
    id: 3,
    position: "bottom-10 left-1/3",
    gradient: "from-[#189E76]/70 via-[#7C5CFF]/60 to-transparent",
    blur: "blur-3xl",
    delay: "3s",
    parallax: 0.08,
  },
];

const problemPoints = [
  {
    title: "Lack of insight",
    description: "Data overload makes it impossible to react quickly across markets.",
  },
  {
    title: "Assets everywhere",
    description: "Wallets, exchanges, brokerages and DeFi apps all require separate flows.",
  },
  {
    title: "Security & control missing",
    description: "Fragmented tooling leaves risk controls and governance behind.",
  },
];

const howItWorksSteps = [
  {
    number: "01",
    title: "Connect your wallet or brokerage",
    text: "Securely link exchange, wallet, or custodian accounts in seconds.",
  },
  {
    number: "02",
    title: "Choose your customised strategy",
    text: "Let AI tailor smart allocations to your risk, horizon, and conviction.",
  },
  {
    number: "03",
    title: "Invest automatically everywhere",
    text: "Deploy across crypto, DeFi, and traditional markets with one action.",
  },
  {
    number: "04",
    title: "Monitor with AI insights",
    text: "Surface live performance, risk alerts, and optimisation suggestions.",
  },
];

const featureHighlights = [
  {
    id: "ai-engine",
    title: "AI Portfolio Engine",
    copy: "Adaptive machine learning continuously rebalances for performance and protection.",
    imageLabel: "AI optimisation graph placeholder",
  },
  {
    id: "web3-access",
    title: "Unified Web3 Access",
    copy: "Trade and earn across tokens, staking, and DeFi protocols through a single pane.",
    imageLabel: "Unified asset hub placeholder",
  },
  {
    id: "analytics",
    title: "Real-Time Analytics",
    copy: "Visualise multi-chain treasury flows, risk metrics, and scenario modelling instantly.",
    imageLabel: "Analytics dashboard placeholder",
  },
  {
    id: "security",
    title: "Enterprise-Grade Security",
    copy: "Defence-in-depth architecture with encryption, audit logging, and custodial controls.",
    imageLabel: "Security shield placeholder",
  },
];

const testimonials = [
  {
    quote:
      "QuantVault collapsed our manual monitoring efforts into a single AI-driven command centre.",
    name: "Ava Chen",
    title: "Head of Digital Assets, Helios Bank",
  },
  {
    quote:
      "With unified Web3 access we ship new strategies in hours, not weeks.",
    name: "Jordan Malik",
    title: "Portfolio Manager, Nova Capital",
  },
  {
    quote:
      "Enterprise-grade security and automation finally coexist in one platform.",
    name: "Priya Rao",
    title: "CISO, Horizon Ventures",
  },
];

const partners = ["Solana", "Polygon", "Avalanche", "Circle", "Plaid", "Fireblocks"];

const footerLinks = [
  { label: "About", href: "#why" },
  { label: "Features", href: "#features" },
  { label: "Blog", href: "#preview" },
  { label: "FAQ", href: "#pricing" },
  { label: "Contact", href: "#final-cta" },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$49",
    cadence: "/mo",
    features: [
      "AI allocations for personal portfolios",
      "Connect up to 3 wallets or brokerages",
      "Core analytics dashboard",
    ],
  },
  {
    name: "Pro",
    price: "$129",
    cadence: "/mo",
    features: [
      "Advanced strategy automations",
      "Unlimited data sources",
      "Real-time alerts + mobile app",
      "Priority support",
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    features: [
      "Dedicated AI quant team",
      "Compliance reporting suite",
      "Multi-signature governance",
      "Private integrations",
    ],
  },
];

const QuantVaultLanding = () => {
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setParallaxOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const animatedNodes = document.querySelectorAll("[data-animate-on-scroll]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedNodes.forEach((node) => {
      node.classList.add("will-reveal");
      observer.observe(node);
    });

    return () => {
      animatedNodes.forEach((node) => observer.unobserve(node));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#0B1A3C] text-slate-100">
      {/* Utility styles for custom animations / glass overlays */}
      <style>{`
        @keyframes float-slow {
          0% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-12px) translateX(6px) scale(1.02); }
          100% { transform: translateY(0px) translateX(0px) scale(1); }
        }
        @keyframes subtle-pulse {
          0% { opacity: 0.45; }
          50% { opacity: 0.9; }
          100% { opacity: 0.45; }
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        .animate-subtle-pulse {
          animation: subtle-pulse 8s ease-in-out infinite;
        }
        .will-reveal {
          opacity: 0;
          transform: translateY(48px);
          transition: opacity 0.9s ease, transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* SECTION: Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1333] via-[#132861] to-[#189E76]/80" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-6 py-24 lg:flex-row lg:items-center lg:gap-24 lg:px-10">
          <div className="relative z-10 flex-1">
            <span className="inline-block rounded-full border border-teal-400/40 bg-white/5 px-4 py-1 text-sm font-medium text-teal-200/90 backdrop-blur">
              QuantVault for Modern Portfolios
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              AI-Driven Investing. Web3 Ready.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-200/80 lg:text-xl">
              QuantVault unifies smart investing, blockchain assets and AI insights — all in one intelligent platform.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-teal-500/40 transition hover:scale-105 hover:bg-teal-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-200/70">
                Get Started
              </button>
              <button className="flex items-center gap-2 rounded-full border border-slate-100/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40">
                See Demo
              </button>
            </div>
          </div>

          <div className="relative z-10 flex flex-1 justify-center lg:justify-end">
            <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur">
              {/* TODO: Replace placeholder with final dashboard mockup */}
              <img
                src="https://via.placeholder.com/960x640.png?text=QuantVault+Dashboard+Mockup"
                alt="QuantVault platform dashboard preview"
                className="h-full w-full rounded-2xl object-cover"
                loading="lazy"
              />
              {/* Floating overlay cards */}
              <div className="absolute -left-10 top-10 hidden w-40 rounded-2xl border border-white/30 bg-white/10 p-4 text-left text-xs text-white shadow-lg backdrop-blur md:block animate-float-slow">
                <p className="font-semibold text-teal-200">Real-Time Signal</p>
                <p className="mt-2 text-[11px] text-slate-100/80">AI suggests rebalancing crypto allocation +2.4%.</p>
              </div>
              <div className="absolute -right-12 bottom-14 hidden w-44 rounded-xl border border-teal-400/40 bg-teal-500/20 p-4 text-xs text-teal-100 shadow-lg backdrop-blur md:block animate-float-slow" style={{ animationDelay: "1.4s" }}>
                <p className="font-semibold">Risk Monitor</p>
                <p className="mt-2 text-[11px] text-white/90">Portfolio VAR ▼ 8% this week.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ambient floating gradients */}
        {heroHighlights.map((highlight) => (
          <div
            key={highlight.id}
            className={`pointer-events-none absolute ${highlight.position} h-56 w-56 rounded-full bg-gradient-to-br ${highlight.gradient} ${highlight.blur} opacity-60 animate-subtle-pulse`}
            style={{
              animationDelay: highlight.delay,
              transform: `translate3d(0, ${-parallaxOffset * highlight.parallax}px, 0)`,
            }}
            aria-hidden="true"
          />
        ))}
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 py-24 sm:px-8 lg:px-10">
        {/* SECTION: Why We Exist */}
        <section id="why" className="space-y-12" data-animate-on-scroll>
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.4em] text-teal-300/70">The Challenge</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Traditional investing is slow. Web3 is fragmented. AI remains unused.</h2>
            <p className="mt-4 text-lg text-slate-300/80">
              QuantVault closes the gap by orchestrating every asset class and intelligence layer into one secure, automated platform.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {problemPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-[#132861]/20 transition hover:-translate-y-1 hover:shadow-xl"
                data-animate-on-scroll
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#189E76] to-[#45C4B0]/80 text-sm font-medium text-white">
                  {/* Placeholder icon */}
                  <span className="text-xl">◆</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{point.title}</h3>
                <p className="mt-3 text-base text-slate-200/80">{point.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: How It Works */}
        <section id="how-it-works" className="space-y-12" data-animate-on-scroll>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-teal-300/70">How it works</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Deploy AI strategies in four steps</h2>
            </div>
            <p className="max-w-xl text-base text-slate-200/70">
              Seamless onboarding with guided automation delivers immediate impact — across chains, exchanges, and custodians.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {howItWorksSteps.map((step) => (
              <div
                key={step.number}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 shadow-lg transition duration-500 hover:-translate-y-2 hover:border-teal-400/50"
                data-animate-on-scroll
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#189E76]/0 via-[#189E76]/10 to-[#189E76]/0 opacity-0 transition duration-500 group-hover:opacity-100" aria-hidden="true" />
                <div className="relative">
                  <span className="text-sm font-semibold tracking-[0.4em] text-teal-200/80">{step.number}</span>
                  <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200/80">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: Features */}
        <section id="features" className="space-y-16" data-animate-on-scroll>
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.4em] text-teal-300/70">Capabilities</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Everything your next-gen treasury needs</h2>
            <p className="mt-4 text-lg text-slate-200/70">
              Blend AI-driven optimisation with full-spectrum Web3 access and institutional-grade controls.
            </p>
          </div>
          <div className="flex flex-col gap-12">
            {featureHighlights.map((feature, index) => (
              <article
                key={feature.id}
                className={`flex flex-col gap-10 overflow-hidden rounded-[32px] border border-white/10 ${index % 2 === 0 ? "bg-white/[0.04]" : "bg-white/[0.02]"} p-8 shadow-lg shadow-[#0b122f]/30 backdrop-blur md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                data-animate-on-scroll
              >
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-base text-slate-200/80">{feature.copy}</p>
                  <ul className="space-y-2 text-sm text-slate-200/60">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                      Automated signal ingestion
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                      Transparent audit trail
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                      Built for compliance-first teams
                    </li>
                  </ul>
                </div>
                <div className="flex-1">
                  {/* TODO: Swap placeholder div with feature illustration / animation */}
                  <div className="relative h-full min-h-[220px] rounded-3xl border border-white/10 bg-gradient-to-br from-[#132861]/60 via-[#7C5CFF]/40 to-[#189E76]/40 p-6 text-sm text-slate-100">
                    <span className="inline-flex rounded-full bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
                      Placeholder
                    </span>
                    <p className="mt-10 text-lg font-semibold text-white/80">{feature.imageLabel}</p>
                    <p className="mt-3 text-sm text-white/60">
                      {/* Placeholder narrative */}
                      Replace with animated renders mirroring the Nexaris aesthetic (e.g., glass dashboard, blockchain nodes, charts).
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION: Product Preview */}
        <section id="preview" className="space-y-12" data-animate-on-scroll>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-teal-300/70">Product preview</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">See how everything comes together</h2>
            </div>
            <p className="max-w-xl text-base text-slate-200/70">
              Designed for clarity with modular, cross-platform experiences that feel consistently premium.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-br from-[#0b1638] via-[#132861]/80 to-[#189E76]/40 p-6 shadow-2xl">
            <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
              <div className="relative rounded-3xl border border-white/20 bg-black/20 p-4 backdrop-blur">
                <img
                  src="https://via.placeholder.com/1400x840.png?text=QuantVault+Desktop+Dashboard"
                  alt="QuantVault desktop dashboard placeholder"
                  className="w-full rounded-2xl border border-white/10 object-cover"
                  loading="lazy"
                />
                <div className="absolute -top-6 right-8 hidden rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-xs text-white/80 shadow-lg backdrop-blur md:block animate-float-slow">
                  <p className="font-semibold">DeFi Yield +12.4%</p>
                  <p className="mt-1 text-[11px] text-white/60">Auto-compounded via AI agent.</p>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-6">
                <div className="rounded-3xl border border-white/20 bg-black/20 p-4 backdrop-blur">
                  <img
                    src="https://via.placeholder.com/540x980.png?text=QuantVault+Mobile+App"
                    alt="QuantVault mobile app placeholder"
                    className="mx-auto w-48 rounded-[32px] border border-white/10 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-teal-100/80">
                  {["Strategy Builder", "AI Copilot", "Risk Guard", "On-Chain Settlements"].map((tag) => (
                    <span key={tag} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* Floating crypto/glass nodes */}
            <div className="pointer-events-none absolute -left-8 bottom-12 hidden h-40 w-40 rounded-full bg-gradient-to-br from-[#7C5CFF]/50 to-transparent blur-3xl md:block" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-12 top-10 hidden h-44 w-44 rounded-full bg-gradient-to-br from-[#189E76]/50 to-transparent blur-3xl md:block" aria-hidden="true" />
          </div>
        </section>

        {/* SECTION: Testimonials */}
        <section id="testimonials" className="space-y-12" data-animate-on-scroll>
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.4em] text-teal-300/70">Trusted teams</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Accelerating innovators in digital finance</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-lg shadow-[#132861]/30"
                data-animate-on-scroll
              >
                <blockquote className="text-base text-slate-200/80">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4 text-sm text-slate-200/60">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p>{testimonial.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-300/80" data-animate-on-scroll>
            {partners.map((partner) => (
              <span key={partner} className="text-sm uppercase tracking-[0.6em] text-white/60">
                {partner}
              </span>
            ))}
          </div>
        </section>

        {/* SECTION: Pricing */}
        <section id="pricing" className="space-y-12" data-animate-on-scroll>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-teal-300/70">Pricing</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Scale confidently at every stage</h2>
            </div>
            <p className="max-w-lg text-base text-slate-200/70">
              Transparent plans designed for founders, pro traders, and institutional teams adopting AI-first automation.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl transition hover:-translate-y-2 hover:border-teal-300/40 ${plan.recommended ? "ring-2 ring-teal-400/80" : ""}`}
                data-animate-on-scroll
              >
                {plan.recommended && (
                  <span className="absolute -top-4 left-8 rounded-full bg-gradient-to-r from-[#189E76] to-[#45C4B0] px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-white">
                    Recommended
                  </span>
                )}
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-sm text-slate-200/60">{plan.cadence}</span>
                </div>
                <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-200/80">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 rounded-full bg-teal-500 px-4 py-3 text-sm font-medium text-white shadow-md shadow-teal-500/40 transition hover:scale-105 hover:bg-teal-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-200/70">
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: Final CTA */}
        <section id="final-cta" className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#0A1533] via-[#132861] to-[#189E76]/70 p-12 text-center shadow-2xl" data-animate-on-scroll>
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-teal-200/80">Ready to activate</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Join QuantVault today and unlock the future of smart investing.</h2>
            <p className="text-lg text-slate-200/80">Join Waitlist — no credit card required.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#132861] transition hover:-translate-y-0.5">
                Get Started
              </button>
              <button className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5">
                Talk to Product Specialist
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* SECTION: Footer */}
      <footer className="border-t border-white/5 bg-[#070F24]">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3 text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#189E76] to-[#7C5CFF] text-lg font-bold">
                QV
              </span>
              <p className="text-lg font-semibold">QuantVault</p>
            </div>
            <nav aria-label="Footer" className="flex flex-wrap gap-6 text-sm text-slate-200/70">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href} className="transition hover:text-teal-300">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-6 border-t border-white/5 pt-8 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-4 text-sm text-slate-200/60">
              <a href="https://twitter.com" className="transition hover:text-teal-300" aria-label="QuantVault on X">
                Twitter / X
              </a>
              <a href="https://linkedin.com" className="transition hover:text-teal-300" aria-label="QuantVault on LinkedIn">
                LinkedIn
              </a>
              <a href="https://github.com" className="transition hover:text-teal-300" aria-label="QuantVault on GitHub">
                GitHub
              </a>
            </div>
            <p className="text-xs text-slate-200/50">© {new Date().getFullYear()} QuantVault. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QuantVaultLanding;
