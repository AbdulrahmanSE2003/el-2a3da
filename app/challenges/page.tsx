"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw, ArrowRight } from "lucide-react"
import Link from "next/link"

import GridPattern from "@/components/atmosphere/GridPattern"
import BackgroundAtmosphere from "@/components/atmosphere/BackgroundAtmosphere"
import Qa3daCard from "@/components/ui/Qa3daCard"
import Header from "@/components/layout/Header"

const challengesData = [
  {
    id: "01",
    title: "حساب المشروبات",
    text: "الخسران يدفع المشروب الأغلى في القعدة أو يتحمل مشوار المشروبات الجاية.",
  },
  {
    id: "02",
    category: "مكالمة الضحك",
    text: "اتصل بحد عشوائي من أصحابك برة القعدة وقوله 'أنا وافق على العرض' واقفل في وشه.",
  },
  {
    id: "03",
    category: "خدمة القعدة",
    text: "الخسران هو اللي هيقوم يصب الشاي/يظبط القعدة طوال الـ 30 دقيقة الجاية.",
  },
  {
    id: "04",
    category: "صورة الاستوري",
    text: "نزل صورة سيلفي من اختيار باقي الشلة في الاستوري لمدة ساعة بدون مسح.",
  },
]

export default function ChallengesPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleShuffle = () => {
    if (challengesData.length <= 1) return
    let nextIndex = Math.floor(Math.random() * challengesData.length)
    while (nextIndex === currentIndex) {
      nextIndex = Math.floor(Math.random() * challengesData.length)
    }
    setCurrentIndex(nextIndex)
  }

  const currentChallenge = challengesData[currentIndex]

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-paper p-6 py-4 text-ink md:p-10">
      {/* Background Elements */}
      <GridPattern />
      <BackgroundAtmosphere />

      {/* Navigation & Header */}
      <Header stamp="CHALLENGES" />

      {/* Main Experience Section */}
      <section className="relative z-10 my-auto flex w-full max-w-md flex-col items-center">
        <div className="mb-6 text-center">
          <h2 className="mb-1 text-2xl font-bold text-ink-glow">
            أسئلة وتحديات
          </h2>
          <p className="text-sm font-medium text-ink-soft/80">
            "جاهز تعمل حاجة محدش متوقعها؟"
          </p>
        </div>

        {/* Dynamic Card Component */}
        <Qa3daCard
          id={currentChallenge.id}
          text={currentChallenge.text}
          category={currentChallenge.category}
          badgeLabel="CHALLENGE"
        />

        {/* Action Button */}
        <Button onClick={handleShuffle} className="group mt-8 w-full" size="lg">
          <span>تحدي تاني</span>
          <RefreshCw className="transition-transform duration-500 ease-out group-active:rotate-180" />
        </Button>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mt-6 w-full max-w-md border-t border-ink/10 pt-4 text-center opacity-80">
        <p className="text-xs font-bold text-ink">الدور على مين؟ 👀</p>
      </footer>
    </main>
  )
}
