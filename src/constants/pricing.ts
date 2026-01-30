export type PlanFeature = {
  textKey: string;
  negative?: boolean;
  count?: number;
};

export type PricingPlan = {
  plan: string;
  planKey: string;
  plan_code: string;
  imageUrl: string;
  price: string;
  taglineKey: string;
  features: PlanFeature[];
};

export const PLANS: PricingPlan[] = [
  {
    plan: "starter",
    planKey: "plans.starter.title",
    plan_code: "starter",
    imageUrl: "/file.svg",
    price: "5900",
    taglineKey: "plans.starter.tagline",
    features: [
      { textKey: "plans.starter.features.courses", count: 1 },
      { textKey: "plans.starter.features.students", count: 50 },
      { textKey: "plans.starter.features.storage", count: 5 },
      { textKey: "plans.starter.features.support" },
      { textKey: "plans.starter.features.customDomain", negative: true },
    ],
  },
  {
    plan: "pro",
    planKey: "plans.pro.title",
    plan_code: "pro",
    imageUrl: "/globe.svg",
    price: "12900",
    taglineKey: "plans.pro.tagline",
    features: [
      { textKey: "plans.pro.features.courses", count: 5 },
      { textKey: "plans.pro.features.students", count: 250 },
      { textKey: "plans.pro.features.storage", count: 25 },
      { textKey: "plans.pro.features.analytics" },
      { textKey: "plans.pro.features.customDomain" },
    ],
  },
  {
    plan: "business",
    planKey: "plans.business.title",
    plan_code: "business",
    imageUrl: "/window.svg",
    price: "24900",
    taglineKey: "plans.business.tagline",
    features: [
      { textKey: "plans.business.features.courses", count: 999 },
      { textKey: "plans.business.features.students", count: 9999 },
      { textKey: "plans.business.features.storage", count: 100 },
      { textKey: "plans.business.features.sso" },
      { textKey: "plans.business.features.dedicatedSupport" },
    ],
  },
];

