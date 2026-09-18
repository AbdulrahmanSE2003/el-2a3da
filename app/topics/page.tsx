"use client"

import { useState } from "react"
import { RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import BackgroundAtmosphere from "@/components/atmosphere/BackgroundAtmosphere"
import GridPattern from "@/components/atmosphere/GridPattern"
import Qa3daCard from "@/components/ui/Qa3daCard"
import Header from "@/components/layout/Header"

// Mock data to test the component
const TOPICS = [
  { id: "07", text: "لو تقدر تعيش يوم واحد من حياتك تاني، تختار أنهي يوم؟" },
  { id: "12", text: "لو قدرت تمسح ذكرى واحدة من دماغك تمامًا — إيه هي وليه؟" },
  {
    id: "24",
    text: "إيه أكتر أكلة كل الناس بتحبها وأنت شايفها واخدة أكبر من حجمها؟",
  },
  {
    id: "03",
    text: "مين أكتر شخص من أيام المدرسة أو الجامعة نفسك تقابله دلوقتي وتسأله سؤال واحد؟",
  },
]

export default function TopicsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Function to get a random topic without repeating the current one
  const handleShuffle = () => {
    let nextIndex = Math.floor(Math.random() * TOPICS.length)
    while (nextIndex === currentIndex && TOPICS.length > 1) {
      nextIndex = Math.floor(Math.random() * TOPICS.length)
    }
    setCurrentIndex(nextIndex)
  }

  const currentTopic = TOPICS[currentIndex]

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-paper p-6 py-4 text-ink md:p-10">
      {/* Background paper texture pattern */}
      <GridPattern />
      <BackgroundAtmosphere />

      {/* Navigation & Header */}
      <Header stamp="TOPICS" />

      <section className="relative z-10 my-auto flex w-full max-w-md flex-col items-center">
        {/* Section Context */}
        <div className="mb-6 text-center">
          <h2 className="mb-1 text-2xl font-bold text-ink-glow">
            {" "}
            مواضيع وحوارات
          </h2>
          <p className="text-sm font-medium text-ink-soft/80">
            {" "}
            "افتح موضوع... وخلي القعدة تبدأ"
          </p>
        </div>

        <Qa3daCard text={currentTopic.text} id={currentTopic.id} />

        {/* Action Button */}
        <Button onClick={handleShuffle} className="group mt-8 w-full" size="lg">
          <span className="text-lg">موضوع تاني</span>
          <RefreshCw className="h-5 w-5 transition-transform duration-1000 ease-out group-active:rotate-360" />
        </Button>
      </section>
      {/* Footer Note */}
      <footer className="relative z-10 mt-6 w-full max-w-md border-t border-ink/10 pt-4 text-center opacity-80">
        <p className="text-xs font-bold text-ink">خد وقتك... مفيش إجابة غلط</p>
      </footer>
    </main>
  )
}
