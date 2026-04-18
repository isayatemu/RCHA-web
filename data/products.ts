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
      "Husaidia routines za kusafisha mwili kwa njia ya asili.",
      "Husaidia kupunguza uvimbe na inflammation.",
      "Huchangia usawa wa kinga na uthabiti wa mwili.",
    ],
    traditionalUsesEn: [
      "Supports natural body cleansing routines.",
      "Helps reduce swelling and inflammation.",
      "Supports immune balance and body resilience.",
    ],
    howToUseSw: generalHowToUseSw,
    howToUseEn: generalHowToUseEn,
    precautionsSw: generalPrecautionsSw,
    precautionsEn: generalPrecautionsEn,
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
      "Mulu Extract Moringe Juice hutumika kwenye mpango wa ushauri binafsi kwa watu wanaotaka support ya mwili, kusaidia kusafisha mfumo wa mwili, na kuimarisha afya ya muda mrefu.",
    overviewEn:
      "Mulu Extract Moringe Juice is used in consultation-guided wellness plans to support body balance, detox routines, and stronger long-term vitality.",
    traditionalUsesSw: [
      "Husaidia kuongeza nguvu na uthabiti wa mwili.",
      "Husaidia detox ya mwili kwa ratiba ya ushauri.",
      "Huunga mkono kinga ya mwili na ustawi wa kila siku.",
    ],
    traditionalUsesEn: [
      "Supports energy and body resilience.",
      "Supports detox routines within guided plans.",
      "Helps maintain immunity and daily wellness.",
    ],
    howToUseSw: generalHowToUseSw,
    howToUseEn: generalHowToUseEn,
    precautionsSw: generalPrecautionsSw,
    precautionsEn: generalPrecautionsEn,
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
    shortSw: "Kimiminika kinachosaidia support ya uvimbe, detox, na uthabiti wa mwili.",
    shortEn: "A liquid tonic designed to support swelling relief, detox, and overall resilience.",
    overviewSw:
      "Oil Juice huwekwa kwenye ratiba ya consultation-first kwa wateja wanaohitaji support ya uvimbe, detox ya mwili, na ufuatiliaji wa afya ya muda mrefu.",
    overviewEn:
      "Oil Juice fits into consultation-first wellness guidance for clients seeking support around swelling, detoxification, and sustained body wellness.",
    traditionalUsesSw: [
      "Husaidia support ya uvimbe kwa njia ya asili.",
      "Husaidia mwili kwenye detox ya taratibu.",
      "Huchangia uthabiti wa mwili kwenye matumizi ya kila siku.",
    ],
    traditionalUsesEn: [
      "Supports swelling relief naturally.",
      "Helps the body through gradual detox routines.",
      "Supports day-to-day body resilience.",
    ],
    howToUseSw: generalHowToUseSw,
    howToUseEn: generalHowToUseEn,
    precautionsSw: generalPrecautionsSw,
    precautionsEn: generalPrecautionsEn,
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
      "Moringa King Plus ni kimiminika cha mpango wa ushauri binafsi kwa wanaume wanaotaka support ya nguvu, stamina, na routine ya afya ya kila siku.",
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
    categorySw: "Msaada wa figo",
    categoryEn: "Kidney Support",
    typeSw: "Kimiminika",
    typeEn: "Liquid",
    shortSw: "Husaidia support ya figo na ratiba ya maji na lishe iliyoelekezwa.",
    shortEn: "Supports kidney care routines alongside guided hydration and nutrition.",
    overviewSw:
      "Nephrox hutumika katika mpango wa ushauri wa karibu kwa wateja wanaotaka support ya figo kwa lishe, maji, na ufuatiliaji wa matumizi.",
    overviewEn:
      "Nephrox is used within close consultation plans for clients seeking kidney support through hydration, nutrition, and guided follow-up.",
    traditionalUsesSw: [
      "Husaidia support ya figo kwa mpango wa karibu.",
      "Huchangia routine ya maji na lishe yenye uwiano.",
      "Husaidia mteja kufuata mpango wa matumizi unaoeleweka.",
    ],
    traditionalUsesEn: [
      "Supports kidney care within a guided plan.",
      "Helps reinforce balanced hydration and nutrition routines.",
      "Supports clear, manageable day-to-day use.",
    ],
    howToUseSw: generalHowToUseSw,
    howToUseEn: generalHowToUseEn,
    precautionsSw: generalPrecautionsSw,
    precautionsEn: generalPrecautionsEn,
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
    categorySw: "Presha",
    categoryEn: "Blood Pressure",
    typeSw: "Poda",
    typeEn: "Powder",
    shortSw: "Poda inayosaidia support ya presha yenye afya pamoja na lishe na mtindo wa maisha.",
    shortEn: "A powder blend that supports healthy blood pressure alongside diet and lifestyle care.",
    overviewSw:
      "Oncolax ni herbal powder ya matumizi ya ushauri binafsi kwa wateja wanaotaka support ya presha yenye afya bila kuacha ufuatiliaji wa daktari.",
    overviewEn:
      "Oncolax is a herbal powder used in personalized guidance for clients seeking healthy blood pressure support without stopping clinician care.",
    traditionalUsesSw: [
      "Husaidia support ya presha yenye afya kwa njia ya asili.",
      "Huenda sambamba na lishe na mtindo wa maisha uliopangiliwa.",
      "Hutumika kwa ufuatiliaji wa karibu na ushauri binafsi.",
    ],
    traditionalUsesEn: [
      "Supports healthy blood pressure naturally.",
      "Works alongside planned nutrition and lifestyle routines.",
      "Designed for close follow-up and personalized guidance.",
    ],
    howToUseSw: generalHowToUseSw,
    howToUseEn: generalHowToUseEn,
    precautionsSw: generalPrecautionsSw,
    precautionsEn: generalPrecautionsEn,
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
    shortSw: "Poda inayosaidia support ya blood sugar yenye afya kwenye routine ya kila siku.",
    shortEn: "A powder blend that supports healthy blood sugar routines.",
    overviewSw:
      "Sugar Care ni herbal powder kwa wateja wanaotaka support ya blood sugar yenye afya kupitia ushauri binafsi wa lishe, matumizi, na ufuatiliaji.",
    overviewEn:
      "Sugar Care is a herbal powder for clients seeking healthy blood sugar support through personalized nutrition, dosing guidance, and follow-up.",
    traditionalUsesSw: [
      "Husaidia support ya blood sugar yenye afya.",
      "Huchangia routine ya lishe na matumizi yenye uwiano.",
      "Hutumiwa kwa ushauri wa karibu na kufuatiliwa hatua kwa hatua.",
    ],
    traditionalUsesEn: [
      "Supports healthy blood sugar routines.",
      "Helps reinforce balanced nutrition and daily use.",
      "Used with close consultation and gradual follow-up.",
    ],
    howToUseSw: generalHowToUseSw,
    howToUseEn: generalHowToUseEn,
    precautionsSw: generalPrecautionsSw,
    precautionsEn: generalPrecautionsEn,
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
    shortSw: "Kimiminika kinachosaidia utulivu wa tumbo, mmeng'enyo, na support ya vidonda.",
    shortEn: "A liquid formula that supports stomach comfort, digestion, and ulcer support routines.",
    overviewSw:
      "Gastro Care hutumika kwenye mpango wa ushauri binafsi kwa wateja wanaotaka support ya tumbo, utulivu wa mmeng'enyo, na ratiba inayofaa maisha yao ya kila siku.",
    overviewEn:
      "Gastro Care is used in personalized plans for clients seeking stomach comfort, digestive balance, and routines that fit real life.",
    traditionalUsesSw: [
      "Husaidia utulivu wa tumbo kwa njia ya asili.",
      "Husaidia support ya mmeng'enyo na vidonda kwa mpango wa karibu.",
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
