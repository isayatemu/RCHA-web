export type ProductCategoryKey =
  | "detox"
  | "men"
  | "kidney"
  | "pressure"
  | "sugar"
  | "digestive";

export type ProductPriceOption = {
  labelSw: string;
  labelEn: string;
  amount: number;
};

export type Product = {
  slug: string;
  name: string;
  featured: boolean;
  categoryKey: ProductCategoryKey;
  categorySw: string;
  categoryEn: string;
  typeSw: string;
  typeEn: string;
  shortSw: string;
  shortEn: string;
  overviewSw: string;
  overviewEn: string;
  traditionalUsesSw: string[];
  traditionalUsesEn: string[];
  howToUseSw: string[];
  howToUseEn: string[];
  precautionsSw: string[];
  precautionsEn: string[];
  sideEffectsSw?: string[];
  sideEffectsEn?: string[];
  priceOptions?: ProductPriceOption[];
  priceOrder?: number;
  image?: string;
  imageClassName?: string;
};

export const productFilters: Array<{
  key: "all" | ProductCategoryKey;
  labelSw: string;
  labelEn: string;
}> = [
  { key: "all", labelSw: "Zote", labelEn: "All" },
  { key: "detox", labelSw: "Detox", labelEn: "Detox" },
  { key: "men", labelSw: "Wanaume", labelEn: "Men" },
  { key: "kidney", labelSw: "Figo", labelEn: "Kidney" },
  { key: "pressure", labelSw: "Presha", labelEn: "Pressure" },
  { key: "sugar", labelSw: "Sukari", labelEn: "Sugar" },
  { key: "digestive", labelSw: "Mmeng'enyo", labelEn: "Digestive" },
];

const generalHowToUseSw = [
  "Dozi hutegemea ushauri wa kitaalamu baada ya mazungumzo ya binafsi.",
  "Tumia kama utakavyoelekezwa kwenye mpango wako wa matumizi.",
];

const generalHowToUseEn = [
  "Dosage depends on a personalized consultation plan.",
  "Use only as directed in your guided routine.",
];

const generalPrecautionsSw = [
  "Sio kwa wajawazito au wanaonyonyesha bila ushauri wa kitaalamu.",
  "Wasiliana na daktari kama unatumia dawa za hospitali au una hali sugu.",
  "Usizidishe dozi iliyopendekezwa.",
];

const generalPrecautionsEn = [
  "Not for pregnant or breastfeeding clients without consultation.",
  "Consult a clinician if you use prescription medication or manage a chronic condition.",
  "Do not exceed the recommended dose.",
];

export const products: Product[] = [
  {
    slug: "detox",
    name: "Detox Go Natural",
    featured: true,
    priceOrder: 4,
    categoryKey: "detox",
    categorySw: "Detox",
    categoryEn: "Detox",
    typeSw: "Poda",
    typeEn: "Powder",
    shortSw: "Poda ya mitishamba inayosaidia kusafisha mwili na kuleta usawa wa kila siku.",
    shortEn: "A herbal powder that supports body cleansing and daily balance.",
    overviewSw:
      "Detox Go Natural ni sehemu ya mpango wa ushauri wa dozi kwa wanaotaka kusaidia kusafisha mwili, kupunguza uvimbe, na kuimarisha ustawi wa muda mrefu.",
    overviewEn:
      "Detox Go Natural is included in guided plans for clients seeking detox support, inflammation balance, and stronger long-term wellness.",
    traditionalUsesSw: [
      "Hutumika kwenye mpango wa kusafisha mwili na ustawi wa jumla chini ya ushauri wa mtaalamu.",
    ],
    traditionalUsesEn: [
      "Used within body cleansing and general wellness plans under professional guidance.",
    ],
    howToUseSw: generalHowToUseSw,
    howToUseEn: generalHowToUseEn,
    precautionsSw: generalPrecautionsSw,
    precautionsEn: generalPrecautionsEn,
    sideEffectsSw: ["Kuharisha."],
    sideEffectsEn: ["Loose stool or diarrhea."],
    priceOptions: [{ labelSw: "Bidhaa moja", labelEn: "Single product", amount: 35000 }],
    image: "products/detox/detox.png?v=20260413-2",
    imageClassName: "scale-[1.28] translate-y-1",
  },
  {
    slug: "moringe-juice",
    name: "Mulu Extract Moringe Juice",
    featured: true,
    priceOrder: 1,
    categoryKey: "detox",
    categorySw: "Detox",
    categoryEn: "Detox",
    typeSw: "Kimiminika",
    typeEn: "Liquid",
    shortSw: "Kinywaji cha moringe kinachosaidia nguvu za kila siku, detox, na ustawi wa mwili.",
    shortEn: "A moringa liquid that supports daily vitality, detox routines, and body balance.",
    overviewSw:
      "Mulu Extract Moringe Juice hutumika kwenye mpango wa ushauri binafsi kwa watu wanaotaka usaidizi wa mwili, kusaidia kusafisha mfumo wa mwili, na kuimarisha afya ya muda mrefu.",
    overviewEn:
      "Mulu Extract Moringe Juice is used in consultation-guided wellness plans to support body balance, detox routines, and stronger long-term vitality.",
    traditionalUsesSw: [
      "Hutumika kwenye usaidizi wa ustawi wa mwili, kinga, na nguvu za kila siku chini ya ushauri wa mtaalamu.",
    ],
    traditionalUsesEn: [
      "Used as part of wellness support for body wellness, immunity, and daily vitality under professional guidance.",
    ],
    howToUseSw: generalHowToUseSw,
    howToUseEn: generalHowToUseEn,
    precautionsSw: generalPrecautionsSw,
    precautionsEn: generalPrecautionsEn,
    sideEffectsSw: ["Kupata usingizi."],
    sideEffectsEn: ["Sleepiness."],
    priceOptions: [
      { labelSw: "1 Lita", labelEn: "1 Liter", amount: 65000 },
      { labelSw: "Nusu Lita", labelEn: "Half Liter", amount: 32500 },
    ],
    image: "products/moringemuluextract/mulumoringe.png?v=20260413-2",
    imageClassName: "scale-[1.2] translate-y-1",
  },
  {
    slug: "oil-juice",
    name: "Oil Juice",
    featured: true,
    priceOrder: 2,
    categoryKey: "detox",
    categorySw: "Detox",
    categoryEn: "Detox",
    typeSw: "Kimiminika",
    typeEn: "Liquid",
    shortSw: "Kimiminika kinachosaidia kupunguza uvimbe, detox, na uthabiti wa mwili.",
    shortEn: "A liquid tonic designed to support swelling relief, detox, and overall resilience.",
    overviewSw:
      "Oil Juice huwekwa kwenye ratiba ya consultation-first kwa wateja wanaohitaji usaidizi wa uvimbe, detox ya mwili, na ufuatiliaji wa afya ya muda mrefu.",
    overviewEn:
      "Oil Juice fits into consultation-first wellness guidance for clients seeking support around swelling, detoxification, and sustained body wellness.",
    traditionalUsesSw: [
      "Hutumika kwenye usaidizi wa usawa wa mwili, mmeng'enyo, na ustawi wa kila siku chini ya ushauri wa mtaalamu.",
    ],
    traditionalUsesEn: [
      "Used as part of wellness support for body balance, digestion, and daily wellness under professional guidance.",
    ],
    howToUseSw: generalHowToUseSw,
    howToUseEn: generalHowToUseEn,
    precautionsSw: generalPrecautionsSw,
    precautionsEn: generalPrecautionsEn,
    sideEffectsSw: ["Kupata usingizi."],
    sideEffectsEn: ["Sleepiness."],
    priceOptions: [
      { labelSw: "1 Lita", labelEn: "1 Liter", amount: 100000 },
      { labelSw: "Nusu Lita", labelEn: "Half Liter", amount: 50000 },
    ],
    image: "products/oil-juice/oiljuice.png?v=20260413-2",
    imageClassName: "scale-[1.2] translate-y-1",
  },
  {
    slug: "moringa-king-plus",
    name: "Moringa King Plus",
    featured: false,
    categoryKey: "men",
    categorySw: "Afya ya wanaume",
    categoryEn: "Men's Health",
    typeSw: "Kimiminika",
    typeEn: "Liquid",
    shortSw: "Husaidia nguvu za kiume, vitality, na ratiba ya afya ya wanaume.",
    shortEn: "Supports male strength, vitality, and men's wellness routines.",
    overviewSw:
      "Moringa King Plus ni kimiminika cha mpango wa ushauri binafsi kwa wanaume wanaotaka usaidizi wa nguvu, stamina, na routine ya afya ya kila siku.",
    overviewEn:
      "Moringa King Plus is a liquid tonic used in guided plans for men seeking support around strength, stamina, and everyday wellness routines.",
    traditionalUsesSw: [
      "Husaidia vitality na stamina ya kila siku.",
      "Huunga mkono ratiba ya afya ya wanaume kwa ushauri binafsi.",
      "Husaidia mwili kubaki na nguvu kwenye shughuli za kila siku.",
    ],
    traditionalUsesEn: [
      "Supports daily vitality and stamina.",
      "Helps maintain men's wellness routines through guided use.",
      "Supports strength for active daily routines.",
    ],
    howToUseSw: generalHowToUseSw,
    howToUseEn: generalHowToUseEn,
    precautionsSw: generalPrecautionsSw,
    precautionsEn: generalPrecautionsEn,
    image: "products/moringa-king-plus+/moringaking+.png?v=20260413-2",
    imageClassName: "scale-[1.34] translate-y-2",
  },
  {
    slug: "nephrox",
    name: "Nephrox",
    featured: false,
    priceOrder: 3,
    categoryKey: "kidney",
    categorySw: "Usaidizi wa figo",
    categoryEn: "Kidney Support",
    typeSw: "Kimiminika",
    typeEn: "Liquid",
    shortSw: "Husaidia ustawi wa figo na ratiba ya maji na lishe iliyoelekezwa.",
    shortEn: "Supports kidney care routines alongside guided hydration and nutrition.",
    overviewSw:
      "Nephrox hutumika katika mpango wa ushauri wa karibu kwa wateja wanaotaka usaidizi wa figo kwa lishe, maji, na ufuatiliaji wa matumizi.",
    overviewEn:
      "Nephrox is used within close consultation plans for clients seeking kidney support through hydration, nutrition, and guided follow-up.",
    traditionalUsesSw: [
      "Hutumika kwenye usaidizi wa ustawi wa figo chini ya ushauri wa mtaalamu.",
    ],
    traditionalUsesEn: [
      "Used as part of kidney wellness support under professional guidance.",
    ],
    howToUseSw: generalHowToUseSw,
    howToUseEn: generalHowToUseEn,
    precautionsSw: generalPrecautionsSw,
    precautionsEn: generalPrecautionsEn,
    sideEffectsSw: ["Kupata usingizi."],
    sideEffectsEn: ["Sleepiness."],
    priceOptions: [{ labelSw: "Bidhaa moja", labelEn: "Single product", amount: 100000 }],
    image: "products/nephrox/nephrox.png?v=20260413-2",
    imageClassName: "scale-[1.34] translate-y-2",
  },
  {
    slug: "oncolax",
    name: "Oncolax",
    featured: false,
    priceOrder: 5,
    categoryKey: "pressure",
    categorySw: "Ustawi wa mwili",
    categoryEn: "Body Wellness",
    typeSw: "Poda",
    typeEn: "Powder",
    shortSw: "Poda inayotumika kwenye usaidizi wa faraja ya mwili na ustawi wa kila siku.",
    shortEn: "A powder blend used to support daily comfort and overall body wellness.",
    overviewSw:
      "Oncolax ni herbal powder ya matumizi ya ushauri binafsi kwa wateja wanaotaka usaidizi wa faraja ya mwili na ustawi wa kila siku chini ya ushauri wa mtaalamu.",
    overviewEn:
      "Oncolax is a herbal powder used in personalized guidance for clients seeking daily comfort and general body wellness under professional guidance.",
    traditionalUsesSw: [
      "Hutumika kwenye usaidizi wa ustawi wa mwili na faraja ya kila siku chini ya ushauri wa mtaalamu.",
    ],
    traditionalUsesEn: [
      "Used as part of daily comfort and general body wellness support under professional guidance.",
    ],
    howToUseSw: generalHowToUseSw,
    howToUseEn: generalHowToUseEn,
    precautionsSw: generalPrecautionsSw,
    precautionsEn: generalPrecautionsEn,
    sideEffectsSw: ["Mwili kuchoka."],
    sideEffectsEn: ["Tiredness or body fatigue."],
    priceOptions: [{ labelSw: "Bidhaa moja", labelEn: "Single product", amount: 500000 }],
    image: "products/oncolax/oncolax.png?v=20260413-2",
    imageClassName: "scale-[1.12] translate-y-1",
  },
  {
    slug: "sugar-care",
    name: "Sugar Care",
    featured: false,
    priceOrder: 6,
    categoryKey: "sugar",
    categorySw: "Sukari",
    categoryEn: "Blood Sugar",
    typeSw: "Poda",
    typeEn: "Powder",
    shortSw: "Poda inayosaidia ustawi wa blood sugar yenye afya kwenye routine ya kila siku.",
    shortEn: "A powder blend that supports healthy blood sugar routines.",
    overviewSw:
      "Sugar Care ni herbal powder kwa wateja wanaotaka usaidizi wa blood sugar yenye afya kupitia ushauri binafsi wa lishe, matumizi, na ufuatiliaji.",
    overviewEn:
      "Sugar Care is a herbal powder for clients seeking healthy blood sugar support through personalized nutrition, dosing guidance, and follow-up.",
    traditionalUsesSw: [
      "Hutumika kwenye usaidizi wa mtindo wa maisha kwa watu wanaofuatilia sukari ya damu, pamoja na ushauri wa mtaalamu.",
    ],
    traditionalUsesEn: [
      "Used as part of lifestyle wellness support for people monitoring blood sugar, together with professional guidance.",
    ],
    howToUseSw: generalHowToUseSw,
    howToUseEn: generalHowToUseEn,
    precautionsSw: generalPrecautionsSw,
    precautionsEn: generalPrecautionsEn,
    sideEffectsSw: [
      "Mwili kuchoka, usingizi, kutapika wakati mwingine, au kuharisha. Dalili zikiendelea, acha kutumia na wasiliana na mtaalamu wa afya.",
    ],
    sideEffectsEn: [
      "Fatigue, sleepiness, occasional vomiting, or diarrhea. If symptoms continue, stop using it and consult a health professional.",
    ],
    priceOptions: [{ labelSw: "Bidhaa moja", labelEn: "Single product", amount: 250000 }],
    image: "products/diabete-kisukari/diabetes-kisukari.png?v=20260413-3",
    imageClassName: "scale-[1.12] translate-y-1",
  },
  {
    slug: "gastro-care",
    name: "Gastro Care",
    featured: false,
    categoryKey: "digestive",
    categorySw: "Mmeng'enyo",
    categoryEn: "Digestive Health",
    typeSw: "Kimiminika",
    typeEn: "Liquid",
    shortSw: "Kimiminika kinachosaidia utulivu wa tumbo, mmeng'enyo, na usaidizi wa vidonda.",
    shortEn: "A liquid formula that supports stomach comfort, digestion, and ulcer support routines.",
    overviewSw:
      "Gastro Care hutumika kwenye mpango wa ushauri binafsi kwa wateja wanaotaka usaidizi wa tumbo, utulivu wa mmeng'enyo, na ratiba inayofaa maisha yao ya kila siku.",
    overviewEn:
      "Gastro Care is used in personalized plans for clients seeking stomach comfort, digestive balance, and routines that fit real life.",
    traditionalUsesSw: [
      "Husaidia utulivu wa tumbo kwa njia ya asili.",
      "Husaidia mmeng'enyo na vidonda kwa mpango wa karibu.",
      "Huchangia urahisi wa kula na kufuata routine nzuri ya kila siku.",
    ],
    traditionalUsesEn: [
      "Supports stomach comfort naturally.",
      "Helps with digestive and ulcer support within a guided plan.",
      "Supports easier daily routines around meals and digestion.",
    ],
    howToUseSw: generalHowToUseSw,
    howToUseEn: generalHowToUseEn,
    precautionsSw: generalPrecautionsSw,
    precautionsEn: generalPrecautionsEn,
    image: "products/gastrocare/gastrocare.png?v=20260413-3",
    imageClassName: "scale-[1.16] translate-y-1",
  },
];

export const pricedProducts = products
  .filter((product) => product.priceOptions?.length)
  .sort((left, right) => (left.priceOrder ?? Number.MAX_SAFE_INTEGER) - (right.priceOrder ?? Number.MAX_SAFE_INTEGER));
