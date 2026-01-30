// src/i18n.ts
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import { defaultLocale, locales, type Locale } from "./i18n/config";

export default getRequestConfig(async ({ locale }) => {
  const safeLocale = locale ?? defaultLocale;
  const isLocale = (value: string): value is Locale =>
    (locales as readonly string[]).includes(value);
  if (!isLocale(safeLocale)) notFound();

  return {
    locale: safeLocale,
    messages: (await import(`./i18n/messages/${safeLocale}.json`)).default,
  };
});
