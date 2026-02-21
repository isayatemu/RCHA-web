export type Product = {
  slug: string;
  name: string;
  format: string;
  shortSw: string;
  shortEn: string;
  overviewSw: string;
  overviewEn: string;
  traditionalUsesSw: string[];
  traditionalUsesEn: string[];
  howToUseSw: string;
  howToUseEn: string;
  precautionsSw: string;
  precautionsEn: string;
  image: string;
};

export const products: Product[] = [
  {
    slug: "king-herbal-blend",
    name: "King Herbal Blend",
    format: "Liquid tonic",
    shortSw: "Mchanganyiko wa asili wa kusaidia uimara wa mwili.",
    shortEn: "Natural blend for general body strength support.",
    overviewSw:
      "Imeandaliwa kwa mimea asilia inayotumika jadi kusaidia mwili kujijenga upya na kuongeza stamina.",
    overviewEn:
      "Prepared from traditional botanicals often used to support recovery routines and stamina.",
    traditionalUsesSw: [
      "Kusaidia mwili unapohisi kuchoka mara kwa mara",
      "Msaada wa kinga mwili kwa mtindo wa maisha wenye msongo",
      "Msaada wa wellness kwa wanaosafiri mara kwa mara",
    ],
    traditionalUsesEn: [
      "Traditionally used when energy feels consistently low",
      "Supports immune wellness during high-stress periods",
      "Used in wellness routines for frequent travelers",
    ],
    howToUseSw: "Dozi huamuliwa baada ya ushauri binafsi kulingana na hali yako.",
    howToUseEn: "Dose is personalized after consultation based on your condition.",
    precautionsSw:
      "Kwa wajawazito, wanaonyonyesha, au wanaotumia dawa za hospitali, wasiliana na daktari kabla ya kutumia.",
    precautionsEn:
      "If pregnant, breastfeeding, or on prescribed medication, consult a clinician before use.",
    image: "herballist__africa_eac_1705231027_3280038048493096347_4222292582.jpg",
  },
  {
    slug: "digest-comfort-herbs",
    name: "Digest Comfort Herbs",
    format: "Powder mix",
    shortSw: "Msaada wa tumbo na mmeng'enyo wenye utulivu.",
    shortEn: "Supportive comfort blend for digestive wellness.",
    overviewSw:
      "Mchanganyiko wa mitishamba inayotumika jadi kusaidia utulivu wa tumbo na mmeng'enyo mzuri.",
    overviewEn:
      "A traditional herb mix often used to support digestive comfort and routine gut wellness.",
    traditionalUsesSw: [
      "Msaada wa hisia za kujaa gesi",
      "Utulivu wa tumbo baada ya mlo mzito",
      "Msaada kwa ratiba ya chakula isiyo thabiti",
    ],
    traditionalUsesEn: [
      "Traditionally used for bloating discomfort",
      "Supports digestive calm after heavy meals",
      "Used in routines with irregular meal schedules",
    ],
    howToUseSw: "Fuata mpango wa dozi utakaopewa baada ya tathmini.",
    howToUseEn: "Follow the personalized dose plan provided after assessment.",
    precautionsSw:
      "Kwa dalili kali au zinazoendelea, pata uchunguzi wa hospitali kwanza.",
    precautionsEn:
      "For persistent or severe symptoms, seek medical diagnosis first.",
    image: "herballist__africa_eac_1705241945_3280129636018928022_4222292582.jpg",
  },
  {
    slug: "liver-kidney-wellness",
    name: "Liver & Kidney Wellness",
    format: "Capsules",
    shortSw: "Msaada wa wellness kwa ini na figo kwa uangalifu wa karibu.",
    shortEn: "Supportive wellness formula for liver and kidney routines.",
    overviewSw:
      "Bidhaa hii hutumika kama sehemu ya mpango wa wellness kwa mteja anayehitaji usimamizi wa karibu.",
    overviewEn:
      "This formula is used in supervised wellness programs for clients who need close monitoring.",
    traditionalUsesSw: [
      "Msaada wa afya asilia ya ini",
      "Msaada wa wellness ya figo",
      "Huambatana na ushauri wa maji na lishe",
    ],
    traditionalUsesEn: [
      "Traditionally included in liver wellness routines",
      "Supportive in kidney wellness programs",
      "Paired with hydration and nutrition guidance",
    ],
    howToUseSw: "Dozi hutolewa baada ya kusikiliza historia yako ya afya.",
    howToUseEn: "Dose is assigned after reviewing your health background.",
    precautionsSw:
      "Haiwezi kuchukua nafasi ya dialysis, ARVs, au matibabu ya daktari.",
    precautionsEn:
      "Does not replace dialysis, ARVs, or clinician-led treatment.",
    image: "herballist__africa_eac_1705395730_3281419680684876621_4222292582.jpg",
  },
  {
    slug: "womens-cycle-support",
    name: "Women's Cycle Support",
    format: "Tea sachets",
    shortSw: "Msaada wa mzunguko wa hedhi na ustawi wa wanawake.",
    shortEn: "Support blend for menstrual cycle comfort and women's wellness.",
    overviewSw:
      "Mchanganyiko laini wa mimea kwa wanawake wanaotaka mpango wa wellness wa mzunguko.",
    overviewEn:
      "A gentle herbal blend for women seeking menstrual cycle wellness support.",
    traditionalUsesSw: [
      "Msaada wa discomfort ya kipindi",
      "Msaada wa utulivu wa mwili",
      "Msaada wa ratiba ya mzunguko",
    ],
    traditionalUsesEn: [
      "Traditionally used for cycle discomfort support",
      "Promotes calm in monthly wellness routines",
      "Supports overall cycle regularity programs",
    ],
    howToUseSw: "Mpango wa matumizi hutolewa kulingana na hatua ya mzunguko.",
    howToUseEn: "Usage plan is personalized by cycle stage.",
    precautionsSw:
      "Epuka kutumia bila ushauri ikiwa una ujauzito au dalili zisizoeleweka.",
    precautionsEn:
      "Avoid unsupervised use during pregnancy or unclear symptoms.",
    image: "herballist__africa_eac_1705428587_3281695308281558164_4222292582.jpg",
  },
  {
    slug: "mens-vitality-support",
    name: "Men's Vitality Support",
    format: "Herbal syrup",
    shortSw: "Msaada wa afya ya wanaume na nguvu za kila siku.",
    shortEn: "Supportive syrup for men's daily vitality.",
    overviewSw:
      "Mpango wa wellness wa wanaume kwa kuzingatia uchovu, stamina, na ushauri wa maisha.",
    overviewEn:
      "A men's wellness support plan focused on stamina, fatigue management, and lifestyle coaching.",
    traditionalUsesSw: [
      "Msaada wa stamina",
      "Msaada wa wellness ya wanaume",
      "Msaada wa kujiamini kwa ratiba ndefu za kazi",
    ],
    traditionalUsesEn: [
      "Used traditionally to support stamina",
      "Supports men's wellness routines",
      "Helps maintain confidence during long work schedules",
    ],
    howToUseSw: "Dozi binafsi huamuliwa baada ya ushauri wa kina.",
    howToUseEn: "Personalized dosing is provided after detailed consultation.",
    precautionsSw:
      "Kwa wenye presha, kisukari, au dawa nyingine, shauriana na daktari kwanza.",
    precautionsEn:
      "If you have hypertension, diabetes, or medication use, consult a clinician first.",
    image: "herballist__africa_eac_1705762403_3284495553356083132_4222292582.jpg",
  },
  {
    slug: "sugar-pressure-wellness",
    name: "Sugar & Pressure Wellness",
    format: "Daily tincture",
    shortSw: "Msaada wa wellness kwa sukari na presha kwa ufuatiliaji wa karibu.",
    shortEn: "Supportive wellness routine for blood sugar and blood pressure monitoring.",
    overviewSw:
      "Bidhaa hii ni sehemu ya mpango wa wellness unaoambatana na ufuatiliaji wa vipimo vya hospitali.",
    overviewEn:
      "This product is part of a wellness plan that must run alongside clinic monitoring.",
    traditionalUsesSw: [
      "Msaada wa mtindo wa maisha kwa wenye changamoto za sukari",
      "Msaada wa utulivu wa mfumo wa mwili",
      "Huenda sambamba na lishe na mazoezi",
    ],
    traditionalUsesEn: [
      "Supports lifestyle routines for blood sugar challenges",
      "Supports systemic wellness balance",
      "Designed to complement diet and exercise",
    ],
    howToUseSw: "Tumia chini ya mwongozo wa dozi uliobinafsishwa.",
    howToUseEn: "Use only under your personalized dose guidance.",
    precautionsSw:
      "Haibadilishi dawa za presha/kisukari. Endelea na ushauri wa daktari wako.",
    precautionsEn:
      "Does not replace blood pressure/diabetes medication. Continue clinician guidance.",
    image: "herballist__africa_eac_1709373118_3314784425429020730_4222292582.jpg",
  },
];
