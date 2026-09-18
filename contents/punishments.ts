// src/content/punishments.ts

export interface Punishment {
  id: string
  text: string
  category: string
}

export const punishments: Punishment[] = [
  {
    id: "01",
    text: "اتكلم بصوت شخصية كرتونية لمدة دقيقة.",
    category: "ضحك",
  },
  {
    id: "02",
    text: "خلي القعدة تختارلك كلمة، وممنوع تقولها لمدة 10 دقايق.",
    category: "تحدي",
  },
]
