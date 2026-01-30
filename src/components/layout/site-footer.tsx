/* eslint-disable @next/next/no-img-element */
"use client";

import MaxWidthWrapper from "@/components/max-with-wrapper";
import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import type { FC } from "react";

const SIGN_UP_URL = "https://beta.cravvelo.com/sign-up";
const INSTAGRAM_URL = "https://www.instagram.com/cravvelo/";

const SiteFooter: FC = () => {
  const locale = useLocale();
  const isRtl = locale === "ar";
  const t = useTranslations("landing.footer");

  const year = new Date().getFullYear();

  return (
    <footer
      dir={isRtl ? "rtl" : "ltr"}
      className="w-full border-t border-white/20 bg-[#FC6B00] text-white mt-24"
    >
      <MaxWidthWrapper className="py-14">
        <div
          className={`grid grid-cols-1 gap-10 md:grid-cols-3 ${
            isRtl ? "text-right" : "text-left"
          }`}
        >
          <div className="flex flex-col gap-4">
            <Link href="/" className="w-fit hover:opacity-90 transition-opacity">
              <Image
                src="/white-cravvelo-logo.svg"
                alt="Cravvelo"
                width={160}
                height={50}
                priority
              />
            </Link>
            <p className="text-sm leading-6 text-white/80 max-w-sm">
              {t("tagline")}
            </p>
          </div>

          <div
            className={`grid grid-cols-2 gap-10 ${
              isRtl ? "justify-items-end" : "justify-items-start"
            }`}
          >
            <div className="space-y-3">
              <p className="text-sm font-semibold">{t("links.product")}</p>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <Link href="/features" className="hover:text-white">
                    {t("links.features")}
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white">
                    {t("links.pricing")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold">{t("links.company")}</p>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <Link href="/terms-of-service" className="hover:text-white">
                    {t("links.terms")}
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-white">
                    {t("links.privacy")}
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white">
                    {t("links.careers")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    {t("links.instagram")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`flex flex-col gap-4 ${
              isRtl ? "items-start md:items-end" : "items-start"
            }`}
          >
            <p className="text-sm font-semibold">{t("cta.title")}</p>
            <p className="text-sm text-white/80 max-w-sm">
              {t("cta.description")}
            </p>
            <Link
              href={SIGN_UP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#F8FAE5] px-5 py-3 text-sm font-semibold text-[#FC6B00] hover:bg-white transition-colors"
            >
              {t("cta.button")}
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/20 pt-6 text-xs text-white/80 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} Cravvelo. {t("copyright")}
          </p>
          <p className="text-white/80">{t("madeForCreators")}</p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default SiteFooter;
