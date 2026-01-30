import type { Metadata } from "next";
import MaxWidthWrapper from "@/components/max-with-wrapper";
import { getLocale } from "next-intl/server";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Cravvelo",
  description: "Terms that govern use of Cravvelo.",
};

export default async function TermsOfServicePage() {
  const locale = await getLocale();
  const isRtl = locale === "ar";

  const supportEmail = "support@cravvelo.com";

  return (
    <main dir={isRtl ? "rtl" : "ltr"} className="w-full bg-white">
      <MaxWidthWrapper className="pt-[150px] pb-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-8">
            These Terms of Service (“Terms”) govern your access to and use of
            Cravvelo’s website and services.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Effective date: January 30, 2026
          </p>

          <section className="mt-10 space-y-6 text-gray-700 leading-7">
            <div>
              <h2 className="text-xl font-semibold text-black">
                Using the service
              </h2>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>You must follow applicable laws and these Terms.</li>
                <li>
                  You are responsible for maintaining the security of your
                  account.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black">
                Acceptable use
              </h2>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>Do not misuse the service or attempt to access it unlawfully.</li>
                <li>
                  Do not upload content that is illegal, harmful, or infringes
                  on others’ rights.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black">
                Intellectual property
              </h2>
              <p className="mt-3">
                The service, branding, and related assets are owned by Cravvelo
                or its licensors. You retain ownership of content you create and
                upload, subject to any licenses you grant through your use.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black">
                Disclaimers and limitation of liability
              </h2>
              <p className="mt-3">
                The service is provided “as is” and “as available”. To the
                fullest extent permitted by law, Cravvelo disclaims all
                warranties and will not be liable for indirect or consequential
                damages.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black">Contact</h2>
              <p className="mt-3">
                If you have questions about these Terms, contact{" "}
                <Link
                  href={`mailto:${supportEmail}`}
                  className="text-blue-600 hover:underline"
                >
                  {supportEmail}
                </Link>
                .
              </p>
              <p className="mt-3 text-sm text-gray-500">
                Note: This is a placeholder email and can be updated anytime.
              </p>
            </div>
          </section>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
