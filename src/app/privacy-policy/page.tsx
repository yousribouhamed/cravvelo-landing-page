import type { Metadata } from "next";
import MaxWidthWrapper from "@/components/max-with-wrapper";
import { getLocale } from "next-intl/server";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Cravvelo",
  description: "Learn how Cravvelo collects and uses information.",
};

export default async function PrivacyPolicyPage() {
  const locale = await getLocale();
  const isRtl = locale === "ar";

  const privacyEmail = "privacy@cravvelo.com";

  return (
    <main dir={isRtl ? "rtl" : "ltr"} className="w-full bg-white">
      <MaxWidthWrapper className="pt-[150px] pb-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-8">
            This Privacy Policy explains how we collect, use, and protect your
            information when you use our website and services.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Effective date: January 30, 2026
          </p>

          <section className="mt-10 space-y-6 text-gray-700 leading-7">
            <div>
              <h2 className="text-xl font-semibold text-black">
                Information we collect
              </h2>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>
                  Information you provide (e.g. when contacting us or signing
                  up).
                </li>
                <li>
                  Usage data (e.g. pages visited, basic analytics and device
                  information).
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black">
                How we use information
              </h2>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>To provide and improve our services.</li>
                <li>To respond to requests and support inquiries.</li>
                <li>To maintain security and prevent abuse.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black">
                Cookies and analytics
              </h2>
              <p className="mt-3">
                We may use cookies and similar technologies to understand usage
                and improve your experience. You can control cookies through
                your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black">Contact</h2>
              <p className="mt-3">
                For privacy questions or requests, contact us at{" "}
                <Link
                  href={`mailto:${privacyEmail}`}
                  className="text-blue-600 hover:underline"
                >
                  {privacyEmail}
                </Link>
                .
              </p>
              <p className="mt-3 text-sm text-gray-500">
                Note: This is a placeholder email and can be updated anytime.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black">
                Updates to this policy
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page.
              </p>
            </div>
          </section>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
