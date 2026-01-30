import "@/styles/globals.css";

import { NextIntlClientProvider } from "next-intl";
import localFont from "next/font/local";

const montserratArabic = localFont({
  src: "../font/new_font/Montserrat-Arabic-Regular-400.otf",
  variable: "--font-montserrat-arabic",
  display: "swap",
});

import { getLocale } from "next-intl/server";
import NavBar from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={montserratArabic.variable}>
        <NextIntlClientProvider>
          <NavBar />
          {children}
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
