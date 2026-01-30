import MaxWidthWrapper from "@/components/max-with-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

const SIGN_UP_URL = "https://beta.cravvelo.com/sign-up";

type PlanId = "starter" | "growth" | "scale";

const PLAN_META: Record<
  PlanId,
  { iconSrc: string; iconAlt: string; isPopular?: boolean }
> = {
  starter: {
    iconSrc: "/pricing-icons/beginner.png",
    iconAlt: "Starter plan",
  },
  growth: {
    iconSrc: "/pricing-icons/pro.png",
    iconAlt: "Growth plan",
    isPopular: true,
  },
  scale: {
    iconSrc: "/pricing-icons/infi.png",
    iconAlt: "Scale plan",
  },
};

const FAQ_IDS = [
  "trial",
  "cancel",
  "upgrade",
  "storageBandwidth",
  "customDomain",
  "payments",
  "refunds",
  "support",
] as const;

const PLAN_FEATURE_IDS: Record<PlanId, string[]> = {
  starter: [
    "workspace",
    "members",
    "storage",
    "bandwidth",
    "admins",
    "modules",
    "support",
    "payments",
  ],
  growth: [
    "workspace",
    "members",
    "storage",
    "bandwidth",
    "admins",
    "modules",
    "customDomain",
    "support",
  ],
  scale: [
    "workspace",
    "members",
    "storage",
    "bandwidth",
    "admins",
    "everythingUnlocked",
    "support",
    "earlyAccess",
  ],
};

export default async function PricingPage() {
  const locale = await getLocale();
  const isRtl = locale === "ar";
  const t = await getTranslations("pricingPage");

  const plans: Array<{ id: PlanId; price: number }> = [
    { id: "starter", price: 19 },
    { id: "growth", price: 59 },
    { id: "scale", price: 149 },
  ];

  return (
    <main
      dir={isRtl ? "rtl" : "ltr"}
      className="w-full min-h-screen overflow-x-hidden pt-[150px] pb-24 bg-white"
    >
      <MaxWidthWrapper>
        <header className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-black">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            {t("description")}
          </p>
          <p className="mt-3 text-base md:text-lg font-semibold text-[#FC6B00]">
            {t("subtitle")}
          </p>
        </header>

        <section className="mt-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map(({ id, price }) => (
              <PlanCard key={id} planId={id} price={price} t={t} />
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="max-w-6xl mx-auto rounded-3xl bg-white border border-gray-200 p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              {t("faq.title")}
            </h2>
            <p className="mt-3 text-gray-600">{t("faq.subtitle")}</p>
            </div>

            <div className="mt-10 max-w-3xl mx-auto space-y-4">
              {FAQ_IDS.map((id) => (
                <details
                  key={id}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <summary className="cursor-pointer list-none font-semibold text-lg text-black flex items-center justify-between gap-4">
                    <span>{t(`faq.items.${id}.q`)}</span>
                    <span className="select-none text-gray-400 text-2xl leading-none transition-transform duration-150 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-600 leading-7">
                    {t(`faq.items.${id}.a`)}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="max-w-4xl mx-auto rounded-3xl border border-[#FC6B00]/20 bg-[#F8FAE5] p-8 md:p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-black">
              {t("bottomCta.title")}
            </h3>
            <p className="mt-3 text-gray-700">{t("bottomCta.subtitle")}</p>
            <Link
              href={SIGN_UP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-6 rounded-2xl bg-blue-500 text-white font-bold hover:bg-blue-600"
              )}
            >
              {t("bottomCta.button")}
            </Link>
          </div>
        </section>
      </MaxWidthWrapper>
    </main>
  );
}

function PlanCard({
  planId,
  price,
  t,
}: {
  planId: PlanId;
  price: number;
  t: Awaited<ReturnType<typeof getTranslations>>;
}) {
  const meta = PLAN_META[planId];
  const isPopular = Boolean(meta.isPopular);
  const featureIds = PLAN_FEATURE_IDS[planId];
  const noteKey = `plans.${planId}.note` as const;

  return (
    <div
      className={cn(
        "relative rounded-3xl border bg-white shadow-xl p-8 flex flex-col",
        isPopular
          ? "border-[#FC6B00] ring-2 ring-[#FC6B00]/20"
          : "border-gray-200"
      )}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center justify-center rounded-full bg-[#FC6B00] px-4 py-2 text-sm font-bold text-white shadow">
            {t("mostPopular")}
          </span>
        </div>
      )}

      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center">
          <Image
            src={meta.iconSrc}
            alt={meta.iconAlt}
            width={44}
            height={44}
          />
        </div>
        <div>
          <h3 className="text-2xl font-extrabold text-black">
            {t(`plans.${planId}.name`)}
          </h3>
          <p className="mt-1 text-gray-600">{t(`plans.${planId}.tagline`)}</p>
        </div>
      </div>

      <div className="mt-6 flex items-end gap-2">
        <span className="text-5xl font-extrabold tracking-tight text-black">
          {t("currencySymbol")}
          {price}
        </span>
        <span className="pb-2 text-gray-500 font-semibold">
          {t("perMonth")}
        </span>
      </div>

      <Link
        href={SIGN_UP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({ size: "lg" }),
          isPopular
            ? "mt-6 rounded-2xl bg-[#FC6B00] text-white font-bold hover:bg-[#e95f00]"
            : "mt-6 rounded-2xl bg-blue-500 text-white font-bold hover:bg-blue-600"
        )}
      >
        {t("cta")}
      </Link>

      {t.has(noteKey) ? (
        <p className="mt-4 text-sm font-semibold text-[#FC6B00]">
          {t(noteKey)}
        </p>
      ) : (
        <div className="mt-4" />
      )}

      <ul className="mt-4 space-y-3 text-gray-700">
        {featureIds.map((featureId) => (
          <li key={featureId} className="flex items-start gap-3">
            <span className="mt-0.5 shrink-0">
              <PricingCheckIcon />
            </span>
            <span>{t(`plans.${planId}.features.${featureId}`)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingCheckIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g clipPath="url(#clip0_pricing_check)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.99881 1.85716C9.66685 1.04111 10.9149 1.0411 11.583 1.85716L12.4111 2.86866L13.634 2.40674C14.6207 2.03408 15.7014 2.65805 15.872 3.69883L16.0835 4.98889L17.3735 5.20033C18.4143 5.37091 19.0383 6.45166 18.6656 7.4383L18.2036 8.66123L19.2152 9.48937C20.0312 10.1575 20.0312 11.4054 19.2152 12.0735L18.2036 12.9017L18.6656 14.1246C19.0383 15.1113 18.4143 16.192 17.3735 16.3626L16.0835 16.574L15.872 17.8641C15.7014 18.9049 14.6207 19.5288 13.634 19.1562L12.4111 18.6943L11.583 19.7058C10.9149 20.5218 9.66685 20.5218 8.99881 19.7058L8.17063 18.6943L6.94769 19.1562C5.96105 19.5288 4.88031 18.9049 4.70973 17.8641L4.49828 16.574L3.20823 16.3626C2.16744 16.192 1.54348 15.1113 1.91614 14.1246L2.37806 12.9017L1.36656 12.0735C0.550505 11.4054 0.550502 10.1575 1.36656 9.48937L2.37806 8.66123L1.91614 7.4383C1.54347 6.45166 2.16745 5.37091 3.20823 5.20033L4.49828 4.98889L4.70973 3.69883C4.88031 2.65805 5.96106 2.03408 6.94769 2.40674L8.17063 2.86866L8.99881 1.85716ZM9.62919 14.2942L15.4739 8.44954L14.2931 7.26874L9.0388 12.523L6.2894 9.77359L5.10859 10.9544L8.4484 14.2942C8.60498 14.4508 8.81737 14.5387 9.0388 14.5387C9.26023 14.5387 9.47264 14.4508 9.62919 14.2942Z"
          fill="#FC6B00"
        />
      </g>
      <defs>
        <clipPath id="clip0_pricing_check">
          <rect
            width="20.0388"
            height="20.0388"
            fill="white"
            transform="translate(0.271851 0.762695)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
