import type { Metadata } from "next";
import MaxWidthWrapper from "@/components/max-with-wrapper";
import { getLocale } from "next-intl/server";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Cravvelo",
  description: "Get in touch with the Cravvelo team.",
};

export default async function ContactUsPage() {
  const locale = await getLocale();
  const isRtl = locale === "ar";

  const contactEmail = "contact@cravvelo.com";
  const supportEmail = "support@cravvelo.com";

  return (
    <main dir={isRtl ? "rtl" : "ltr"} className="w-full bg-white">
      <MaxWidthWrapper className="pt-[150px] pb-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-8">
            Have a question, need help, or want to partner with us? Reach out and
            we’ll get back to you as soon as possible.
          </p>

          <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-black">Email</h2>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>
                <span className="font-semibold text-black">General:</span>{" "}
                <Link
                  href={`mailto:${contactEmail}`}
                  className="text-blue-600 hover:underline"
                >
                  {contactEmail}
                </Link>
              </li>
              <li>
                <span className="font-semibold text-black">Support:</span>{" "}
                <Link
                  href={`mailto:${supportEmail}`}
                  className="text-blue-600 hover:underline"
                >
                  {supportEmail}
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              Note: These are placeholder emails and can be updated anytime.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-black">Office hours</h2>
            <p className="mt-3 text-gray-600 leading-7">
              Sunday–Thursday, 9:00 AM–6:00 PM (local time).
            </p>
          </section>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
