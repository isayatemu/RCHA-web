export type HivPackageAudienceKey = "arv" | "nonArv";
export type HivPackageTierKey = "quarter" | "half" | "full";
export type HivPackageTone = "green" | "yellow" | "red";

export type HivPackage = {
  key: HivPackageTierKey;
  labelSw: string;
  labelEn: string;
  tone: HivPackageTone;
  priceSw: string;
  priceEn: string;
  productsSw?: string[];
  productsEn?: string[];
};

export const hivSupportPackages: Record<HivPackageAudienceKey, HivPackage[]> = {
  arv: [
    {
      key: "quarter",
      labelSw: "Robo Dozi",
      labelEn: "Quarter Dose",
      tone: "green",
      priceSw: "TZS 210,000 - 230,000",
      priceEn: "TZS 210,000 - 230,000",
      productsSw: [
        "Moringe Juice (Red) - 2 x 1000ml (au 4 x 500ml)",
        "Oil Juice - 1 x 1000ml (au 2 x 500ml)",
        "Detox - 1",
      ],
      productsEn: [
        "Moringe Juice (Red) - 2 x 1000ml (or 4 x 500ml)",
        "Oil Juice - 1 x 1000ml (or 2 x 500ml)",
        "Detox - 1",
      ],
    },
    {
      key: "half",
      labelSw: "Nusu Dozi",
      labelEn: "Half Dose",
      tone: "yellow",
      priceSw: "TZS 470,000 - 480,000",
      priceEn: "TZS 470,000 - 480,000",
      productsSw: [
        "Moringe Juice (Red) - 4 x 1000ml (au 8 x 500ml)",
        "Oil Juice - 2 x 1000ml (au 4 x 500ml)",
        "Detox - 1",
      ],
      productsEn: [
        "Moringe Juice (Red) - 4 x 1000ml (or 8 x 500ml)",
        "Oil Juice - 2 x 1000ml (or 4 x 500ml)",
        "Detox - 1",
      ],
    },
    {
      key: "full",
      labelSw: "Dozi Nzima",
      labelEn: "Full Dose",
      tone: "red",
      priceSw: "TZS 940,000",
      priceEn: "TZS 940,000",
      productsSw: [
        "Moringe Juice (Red) - 8 x 1000ml (au 16 x 500ml)",
        "Oil Juice - 4 x 1000ml (au 8 x 500ml)",
        "Detox - 3",
      ],
      productsEn: [
        "Moringe Juice (Red) - 8 x 1000ml (or 16 x 500ml)",
        "Oil Juice - 4 x 1000ml (or 8 x 500ml)",
        "Detox - 3",
      ],
    },
  ],
  nonArv: [
    {
      key: "quarter",
      labelSw: "Robo Dozi",
      labelEn: "Quarter Dose",
      tone: "green",
      priceSw: "TZS 187,500",
      priceEn: "TZS 187,500",
      productsSw: [
        "Moringe Juice (Red) - 2 x 1000ml (au 4 x 500ml)",
        "Oil Juice - 1 x 1000ml (au 2 x 500ml)",
        "Detox - Hamna",
      ],
      productsEn: [
        "Moringe Juice (Red) - 2 x 1000ml (or 4 x 500ml)",
        "Oil Juice - 1 x 1000ml (or 2 x 500ml)",
        "Detox - Not included",
      ],
    },
    {
      key: "half",
      labelSw: "Nusu Dozi",
      labelEn: "Half Dose",
      tone: "yellow",
      priceSw: "TZS 375,000",
      priceEn: "TZS 375,000",
      productsSw: [
        "Moringe Juice (Red) - 4 x 1000ml (au 8 x 500ml)",
        "Oil Juice - 2 x 1000ml (au 4 x 500ml)",
        "Detox - Hamna",
      ],
      productsEn: [
        "Moringe Juice (Red) - 4 x 1000ml (or 8 x 500ml)",
        "Oil Juice - 2 x 1000ml (or 4 x 500ml)",
        "Detox - Not included",
      ],
    },
    {
      key: "full",
      labelSw: "Dozi Nzima",
      labelEn: "Full Dose",
      tone: "red",
      priceSw: "TZS 750,000",
      priceEn: "TZS 750,000",
      productsSw: [
        "Moringe Juice (Red) - 8 x 1000ml (au 16 x 500ml)",
        "Oil Juice - 4 x 1000ml (au 8 x 500ml)",
        "Detox - Hamna",
      ],
      productsEn: [
        "Moringe Juice (Red) - 8 x 1000ml (or 16 x 500ml)",
        "Oil Juice - 4 x 1000ml (or 8 x 500ml)",
        "Detox - Not included",
      ],
    },
  ],
};
