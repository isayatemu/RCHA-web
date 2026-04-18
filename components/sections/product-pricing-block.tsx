import type { Product } from "@/data/products";
import { formatTsh } from "@/lib/site";

type ProductPricingBlockProps = {
  product: Product;
  locale: "sw" | "en";
  variant?: "card" | "detail";
};

export const ProductPricingBlock = ({
  product,
  locale,
  variant = "card",
}: ProductPricingBlockProps) => {
  if (!product.priceOptions?.length) return null;

  const isDetail = variant === "detail";
  const badgeLabel =
    product.priceOptions.length > 1
      ? `${product.priceOptions.length} ${locale === "sw" ? "chaguo" : "options"}`
      : locale === "sw"
        ? "Bei rasmi"
        : "Official price";

  return (
    <div
      className={`rounded-[1.6rem] border border-emerald-900/10 ${
        isDetail
          ? "bg-[linear-gradient(135deg,#fff8eb_0%,#ffffff_58%,#ecf6ee_100%)] p-5 sm:p-6"
          : "bg-gradient-to-br from-[#fff8ec] via-white to-[#eef7ef] p-4"
      } shadow-[0_16px_32px_rgba(17,72,53,0.06)]`}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-maroon-900">
            {locale === "sw" ? "Bei ya bidhaa" : "Product price"}
          </p>
          <p className={`mt-1 ${isDetail ? "text-sm" : "text-xs"} text-emerald-900/76`}>
            {locale === "sw" ? "Kwa bidhaa moja moja, si dozi." : "Per individual product, not a dose plan."}
          </p>
        </div>
        <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-emerald-900 shadow-sm">
          {badgeLabel}
        </span>
      </div>

      <div className={`mt-4 grid gap-3 ${isDetail && product.priceOptions.length > 1 ? "sm:grid-cols-2" : ""}`}>
        {product.priceOptions.map((option) => (
          <div
            key={`${product.slug}-${option.labelEn}`}
            className="rounded-[1.2rem] border border-white/70 bg-white/92 px-4 py-3 shadow-[0_10px_24px_rgba(17,72,53,0.06)]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-900/68">
              {locale === "sw" ? option.labelSw : option.labelEn}
            </p>
            <p className={`mt-2 font-semibold text-emerald-950 ${isDetail ? "text-2xl" : "text-lg"}`}>
              {formatTsh(option.amount)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
