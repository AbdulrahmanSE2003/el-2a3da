export interface Challenge {
  id: string
  text: string
  category: string
}

export const challenges: Challenge[] = [
  {
    id: "01",
    text: "اختار شخص من القعدة وخليه يقلد واحد موجود لمدة 30 ثانية.",
    category: "ضحك",
  },
  {
    id: "02",
    text: "قلّد واحد من الموجودين لمدة 30 ثانية، والباقي يخمن مين بتقلده.",
    category: "تقليد",
  },
  {
    id: "03",
    text: "اختار شخصين، وكل واحد يحاول يقنع التاني بحاجة هو أصلًا مش مقتنع بيها.",
    category: "جدال",
  },
]
