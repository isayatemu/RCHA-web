export type Testimonial = {
  name: string;
  location: string;
  region: "Africa" | "East Africa" | "Europe" | "USA" | "Global";
  flag: string;
  textSw: string;
  textEn: string;
  product: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Neema",
    location: "Arusha, Tanzania",
    region: "Africa",
    flag: "🇹🇿",
    textSw: "Nilikuwa nasumbuliwa na tumbo kwa muda mrefu, Detox imenisaidia sana.",
    textEn: "I had long-term stomach issues, Detox helped me a lot.",
    product: "Detox",
  },
  {
    name: "Brian",
    location: "Nairobi, Kenya",
    region: "East Africa",
    flag: "🇰🇪",
    textSw: "Oil Juice imenisaidia kurejesha nguvu zangu.",
    textEn: "Oil Juice helped me regain my strength.",
    product: "Oil Juice",
  },
  {
    name: "Sarah",
    location: "London, UK",
    region: "Europe",
    flag: "🇬🇧",
    textSw: "Nilipata usaidizi hata nikiwa mbali, huduma yao ni ya kipekee.",
    textEn: "I received support even from abroad, their service is amazing.",
    product: "Consultation",
  },
  {
    name: "James",
    location: "Texas, USA",
    region: "USA",
    flag: "🇺🇸",
    textSw: "Huduma yao ni ya kitaalamu sana na matokeo ni mazuri.",
    textEn: "Their service is very professional and results are great.",
    product: "Moringe Juice",
  },
  {
    name: "Amina",
    location: "Dubai, UAE",
    region: "Global",
    flag: "🇦🇪",
    textSw: "Nimeamini tiba zao, zinasaidia kweli.",
    textEn: "I trust their remedies, they truly work.",
    product: "Detox",
  },
];
