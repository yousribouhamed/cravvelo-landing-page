"use client";

import React, { useEffect, useState, useCallback, useTransition } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { Languages, X } from "lucide-react";
import Image from "next/image";
import { useLocale } from "next-intl";

import MobileNav from "./mobile-nav";
import MaxWidthWrapper from "@/components/max-with-wrapper";
import { locales, type Locale } from "@/lib/i18n/config";
import { setUserLocale } from "@/services/locale";

const NAVIGATION_LINKS = [
  { name: "Home", href: "/" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Pricing", href: "/pricing" },
] as const;

const SCROLL_THRESHOLD = 64;
const INSTAGRAM_URL = "https://www.instagram.com/cravvelo/";
const SIGN_UP_URL = "https://app.cravvelo.com/sign-up";
const SIGN_IN_URL = "https://app.cravvelo.com/sign-in";

const NavBar: React.FC = () => {
  const [hasShadow, setHasShadow] = useState(false);
  const [isTopBannerClosed, setIsTopBannerClosed] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale() as Locale;
  const [isPending, startTransition] = useTransition();

  const handleScroll = useCallback(() => {
    setHasShadow(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleCloseBanner = useCallback(() => {
    setIsTopBannerClosed(true);
  }, []);

  const handleLocaleChange = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    startTransition(async () => {
      await setUserLocale(nextLocale);
      router.refresh();
    });
  };

  return (
    <div className="w-full h-[120px] z-[99] fixed top-0">
      {/* Top promotional banner */}
      {!isTopBannerClosed && (
        <div className="w-full h-[41px] bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex justify-center items-center gap-x-2 px-4 md:gap-x-20">
          <p className="text-white text-xs md:text-base font-bold">
            Follow Cravvelo on Instagram{" "}
            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-yellow-200 transition-colors"
            >
              here
            </Link>
          </p>
          <Button
            onClick={handleCloseBanner}
            size="icon"
            variant="ghost"
            className="bg-transparent hover:bg-transparent hover:scale-110 transition-all duration-75"
            aria-label="Close banner"
          >
            <X className="w-4 h-4 text-white" />
          </Button>
        </div>
      )}

      {/* Main navigation */}
      <header
        className={cn(
          "w-full transition-all duration-150 relative",
          {
            "shadow-lg border-b bg-white": hasShadow,
          }
        )}
      >
        <MaxWidthWrapper className="w-full h-[80px]">
          <div className="h-full flex items-center justify-between xl:grid xl:grid-cols-[1fr_auto_1fr] xl:gap-x-6">
            {/* Desktop Logo */}
            <div className="hidden md:flex items-center xl:justify-self-start">
              <Link href="/" className="hover:opacity-90 transition-opacity">
                <Image
                  src="/Cravvelo_Logo-01.svg"
                  alt="Cravvelo Logo"
                  width={130}
                  height={40}
                  priority
                />
              </Link>
            </div>

            {/* Mobile Logo */}
            <div className="md:hidden flex items-center">
              <Link href="/" className="hover:opacity-90 transition-opacity">
                <Image
                  src="/Cravvelo_Logo-01.svg"
                  alt="Cravvelo Logo"
                  width={260}
                  height={160}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation Links (Centered) */}
            <nav className="hidden xl:flex items-center justify-center xl:justify-self-center">
              <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:flex-nowrap sm:gap-5">
                {NAVIGATION_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "font-semibold text-lg text-black leading-[40px] rounded-full transition-all duration-150 hover:bg-gray-100",
                        {
                          "border-[#FFB700] border-2 font-bold bg-[#FFEEC5]":
                            link.href === pathname,
                        }
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop Actions (Right) */}
            <div className="hidden xl:flex items-center justify-end gap-x-4 xl:justify-self-end">
              <div className="relative">
                <label className="sr-only" htmlFor="locale-switcher">
                  Language
                </label>
                <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-blue-500">
                  <Languages className="h-5 w-5" />
                </div>
                <select
                  id="locale-switcher"
                  value={locale}
                  onChange={(e) =>
                    handleLocaleChange(e.target.value as Locale)
                  }
                  disabled={isPending}
                  className={cn(
                    "h-12 rounded-2xl border border-blue-500 bg-white pl-10 pr-4 font-bold text-blue-500 outline-none transition-colors",
                    "focus:ring-2 focus:ring-blue-500/30",
                    isPending && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {locales.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>

              <Link
                target="_blank"
                href={SIGN_UP_URL}
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants(),
                  "bg-blue-500 border border-primary text-white xl:text-xl text-md py-4 h-12 rounded-2xl font-bold transition-all duration-150 hover:scale-105"
                )}
              >
                Create Account
              </Link>
              <Link
                target="_blank"
                href={SIGN_IN_URL}
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants(),
                  "bg-white border border-blue-500 text-blue-500 xl:text-xl text-md py-4 h-12 rounded-2xl hover:text-white font-bold hover:bg-blue-500 transition-all duration-150"
                )}
              >
                Sign In
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="w-fit xl:hidden flex items-center pl-4">
              <MobileNav isTopAdOpen={!isTopBannerClosed} />
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default NavBar;
