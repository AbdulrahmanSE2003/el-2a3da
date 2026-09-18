"use client"

import Link from "next/link"
import { ArrowLeft, Sparkles } from "lucide-react"
import GridPattern from "@/components/atmosphere/GridPattern"
import BackgroundAtmosphere from "@/components/atmosphere/BackgroundAtmosphere"

const menuItems = [
  {
    number: "01",
    title: "مواضيع وحوار",
    description: "سؤال يفتح الكلام... والباقي على القعدة.",
    href: "/topics",
    stamp: "TOPICS",
  },
  {
    number: "02",
    title: "أسئلة وتحديات",
    description: "شوية جرأة، شوية ضحك... وشوف الدور على مين.",
    href: "/challenges",
    stamp: "CHALLENGES",
  },
  {
    number: "03",
    title: "ألعاب",
    description: "هنا القعدة هتبدأ بجد.",
    href: "/games",
    stamp: "GAMES",
  },
]

export default function HomePage() {
  return (
    <main
      dir="rtl"
      className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-paper px-5 py-8 text-ink md:px-8"
    >
      <GridPattern />
      <BackgroundAtmosphere />

      <div className="relative z-10 flex w-full max-w-md flex-1 flex-col justify-between">
        {/* Header & Brand */}
        <header className="my-6 text-center">
          <div className="mx-auto mb-3 flex w-fit items-center gap-1.5 border border-copper/30 bg-copper/5 px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-[0.2em] text-copper">
            <Sparkles className="size-3" />
            <span>EL-QA3DA</span>
          </div>

          <h1 className="text-5xl font-black tracking-tight text-ink md:text-6xl">
            القعدة
          </h1>

          <p className="mt-2 text-sm font-semibold text-ink-soft/80">
            كل قعدة وليها حكاية
          </p>

          <div className="mx-auto mt-6 h-px w-12 bg-ink/15" />
        </header>

        {/* Intro */}
        <section className="mb-6 text-center">
          <h2 className="text-xl font-black text-ink">القعدة بتبدأ من هنا.</h2>
          <p className="mt-1 text-xs font-medium text-ink-soft">
            اختار اللي يناسب قعدتكم وسيب الباقي علينا.
          </p>
        </section>

        {/* Menu Navigation */}
        <nav className="flex flex-col gap-4">
          {menuItems.map((item) => (
            <Link
              key={item.number}
              href={item.href}
              className="group relative overflow-hidden rounded-sm border-2 border-ink bg-paper-warm p-5 shadow-[4px_4px_0px_0px_var(--color-ink)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_var(--color-ink)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            >
              {/* Internal Card Micro Texture */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "radial-gradient(var(--color-ink) 1px, transparent 1px)",
                  backgroundSize: "8px 8px",
                }}
              />

              {/* Top row */}
              <div className="relative z-10 mb-4 flex items-center justify-between">
                <span className="font-mono text-xs font-bold tracking-widest text-copper">
                  [{item.number}]
                </span>

                <span className="border border-copper/30 bg-copper/10 px-2 py-0.5 font-mono text-[9px] font-extrabold tracking-widest text-copper transition-colors group-hover:border-copper group-hover:bg-copper group-hover:text-paper">
                  {item.stamp}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-black text-ink transition-colors group-hover:text-copper">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-relaxed font-medium text-ink-soft">
                    {item.description}
                  </p>
                </div>

                <div className="flex size-9 shrink-0 items-center justify-center border-2 border-ink bg-paper transition-all duration-200 group-hover:border-copper group-hover:bg-copper group-hover:text-paper">
                  <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <p className="font-mono text-[10px] font-bold tracking-[0.2em] text-ink-soft/40">
            EL-QA3DA &copy; {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </main>
  )
}
