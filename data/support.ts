export type SupportArea = {
  key: string;
  titleSw: string;
  titleEn: string;
  noteSw: string;
  noteEn: string;
  doctorWarningSw: string;
  doctorWarningEn: string;
};

export const supportAreas: SupportArea[] = [
  {
    key: "immune",
    titleSw: "Msaada wa Kinga Mwili",
    titleEn: "Immune Support",
    noteSw:
      "Kwa HIV/AIDS tunatoa msaada wa ustawi tu; huduma hizi hazichukui nafasi ya ARVs au usimamizi wa kliniki.",
    noteEn:
      "For HIV/AIDS, we provide supportive wellness only; this does not replace ARVs or clinical supervision.",
    doctorWarningSw: "Ukiona homa kali, uzito kushuka haraka, au maambukizi ya mara kwa mara, nenda hospitali.",
    doctorWarningEn: "If you have persistent fever, sudden weight loss, or recurrent infections, seek hospital care.",
  },
  {
    key: "kidney",
    titleSw: "Msaada wa Figo",
    titleEn: "Kidney Support",
    noteSw: "Tunasaidia ustawi wa figo kwa lishe, maji, na dozi ya ushauri wa karibu.",
    noteEn: "We support kidney wellness through hydration, nutrition, and close consultation-led dosing.",
    doctorWarningSw: "Dalili kama uvimbe mkali, maumivu ya mgongo wa chini, au mkojo kupungua zinahitaji daktari.",
    doctorWarningEn: "Symptoms such as severe swelling, lower back pain, or reduced urination require medical care.",
  },
  {
    key: "digestive",
    titleSw: "Afya ya Mmeng'enyo",
    titleEn: "Digestive Health",
    noteSw: "Tunatoa msaada wa utulivu wa tumbo; hatudai tiba ya vidonda.",
    noteEn: "We provide digestive comfort support and do not claim ulcer cure.",
    doctorWarningSw: "Kutapika damu, kinyesi cheusi, au maumivu makali ni dharura ya hospitali.",
    doctorWarningEn: "Vomiting blood, black stool, or severe pain is a hospital emergency.",
  },
  {
    key: "liver",
    titleSw: "Ustawi wa Ini",
    titleEn: "Liver Wellness",
    noteSw: "Kwa hepatitis tunatoa support ya ustawi pekee, si mbadala wa tiba rasmi.",
    noteEn: "For hepatitis, we provide supportive wellness only and not a replacement for formal treatment.",
    doctorWarningSw: "Ngozi kuwa njano, uchovu mkali, au maumivu makali ya tumbo yanahitaji daktari haraka.",
    doctorWarningEn: "Yellowing skin, severe fatigue, or sharp abdominal pain requires urgent clinician review.",
  },
  {
    key: "cycle",
    titleSw: "Msaada wa Mzunguko wa Hedhi",
    titleEn: "Menstrual Cycle Support",
    noteSw: "Tunasaidia utulivu wa mzunguko kwa wanawake kwa mpango wa binafsi.",
    noteEn: "We support menstrual cycle comfort with personalized wellness planning.",
    doctorWarningSw: "Kutokwa damu nyingi sana, maumivu yasiyoisha, au kizunguzungu kikali vinahitaji hospitali.",
    doctorWarningEn: "Very heavy bleeding, persistent severe pain, or intense dizziness requires hospital care.",
  },
  {
    key: "mens",
    titleSw: "Ustawi wa Wanaume",
    titleEn: "Men's Wellness",
    noteSw: "Tunatoa ushauri wa stamina na afya ya wanaume kwa njia ya asili.",
    noteEn: "We provide natural wellness support around stamina and men's health routines.",
    doctorWarningSw: "Dalili za maumivu makali, mabadiliko ya ghafla, au dalili sugu zinahitaji uchunguzi wa daktari.",
    doctorWarningEn: "Severe pain, sudden changes, or chronic symptoms should be medically evaluated.",
  },
  {
    key: "sugar",
    titleSw: "Msaada wa Sukari",
    titleEn: "Blood Sugar Support",
    noteSw: "Kwa kisukari, huduma zetu ni msaada wa mtindo wa maisha; si tiba wala mbadala wa dawa.",
    noteEn: "For diabetes, our services support lifestyle wellness and are not a cure or medicine replacement.",
    doctorWarningSw: "Kizunguzungu kikali, jasho baridi, au sukari kushuka/kupanda sana ni dharura ya kitabibu.",
    doctorWarningEn: "Severe dizziness, cold sweats, or extreme glucose swings require urgent medical attention.",
  },
  {
    key: "pressure",
    titleSw: "Msaada wa Presha",
    titleEn: "Blood Pressure Support",
    noteSw: "Kwa presha, tunasaidia ustawi wa lishe na mtindo wa maisha bila kuacha ushauri wa daktari.",
    noteEn: "For hypertension, we support nutrition and lifestyle wellness without stopping clinician care.",
    doctorWarningSw: "Maumivu ya kifua, kupumua kwa shida, au maumivu makali ya kichwa ni dharura.",
    doctorWarningEn: "Chest pain, breathing difficulty, or severe headache is an emergency.",
  },
];
