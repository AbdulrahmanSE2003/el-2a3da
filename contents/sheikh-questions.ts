// src/content/0questions.ts

export interface SheikhQuestion {
  id: string
  text: string
  category: string
}

export const sheikhQuestions: SheikhQuestion[] = [
  {
    id: "01",
    text: "إيه أكتر حاجة الناس في القعدة دي فاهمينها غلط عنك؟",
    category: "شخصية",
  },
  {
    id: "02",
    text: "مين في القعدة دي أقرب واحد يعرفك على حقيقتك؟ وليه؟",
    category: "القعدة",
  },
  {
    id: "03",
    text: "إيه موقف عملته ومش هتعترف بيه بسهولة؟",
    category: "جريئة",
  },
]
