import type { Metadata } from "next";
import MaxWidthWrapper from "@/components/max-with-wrapper";
import { getLocale } from "next-intl/server";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | Cravvelo",
  description: "Join the Cravvelo team.",
};

export default async function CareersPage() {
  const locale = await getLocale();
  const isRtl = locale === "ar";

  const careersEmail = "careers@cravvelo.com";

  return (
    <main dir={isRtl ? "rtl" : "ltr"} className="w-full bg-white">
      <MaxWidthWrapper className="pt-[150px] pb-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            Careers
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-8">
            We’re building tools that help creators launch and grow. If you’re
            passionate about product, design, and education, we’d love to hear
            from you.
          </p>

          <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-black">Open roles</h2>
            <p className="mt-3 text-gray-600 leading-7">
              We don’t have any roles listed publicly right now. You can still
              send us your CV and we’ll keep it on file.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-black">Apply</h2>
            <p className="mt-3 text-gray-600 leading-7">
              Email your CV/portfolio and a short note about what you want to
              work on.
            </p>
            <p className="mt-4 text-gray-700">
              <span className="font-semibold text-black">Email:</span>{" "}
              <Link
                href={`mailto:${careersEmail}`}
                className="text-blue-600 hover:underline"
              >
                {careersEmail}
              </Link>
            </p>
            <p className="mt-3 text-sm text-gray-500">
              Note: This is a placeholder email and can be updated anytime.
            </p>
          </section>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
