import MaxWidthWrapper from "@/components/max-with-wrapper";
import TextTyper from "@/components/text-typer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { FC } from "react";

const Hero: FC = ({}) => {
  return (
    <div className="relative isolate overflow-hidden bg-white pt-[120px]">
      {/* Background accent (matches site palette) */}
      <div
        className="pointer-events-none absolute left-[calc(50%-40rem)] top-0 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#FFC901] to-[#FC6B00] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>

      <MaxWidthWrapper className="py-12 lg:py-20">
        <section
          id="hero"
          className="w-full flex flex-col items-center justify-center text-center"
        >
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <Link
              href="#features"
              className="relative rounded-full px-4 py-2 text-sm leading-6 text-black ring-1 ring-[#FFB800]/50 hover:ring-[#FFB800] transition-all bg-white/70 backdrop-blur"
            >
              Building an education platform?{" "}
              <span className="font-semibold text-[#FC6B00]">
                See features <span aria-hidden="true">&rarr;</span>
              </span>
            </Link>
          </div>

          <div className="w-full max-w-4xl 2xl:max-w-6xl mx-auto">
            <h1 className="text-balance qatar-bold font-bold tracking-tight text-black text-5xl sm:text-6xl lg:text-7xl">
              Create, Sell, Manage <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FC6B00] to-[#FFC901]">
                <TextTyper />
              </span>
            </h1>

            <h2 className="mt-4 text-balance qatar-bold font-semibold tracking-tight text-black text-2xl sm:text-3xl lg:text-4xl">
              From One Place, With Great Ease
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/70 max-w-2xl mx-auto text-balance">
              From no-code building to marketing and selling without experience,
              Cravvelo provides you with all the tools you need to create your
              educational platform and grow your business online.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                target="_blank"
                href={"https://beta.cravvelo.com/sign-up"}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-blue-500 hover:bg-blue-500 text-lg px-8 py-7 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-bold"
                >
                  Start Your Free Trial
                </Button>
              </Link>

              <div className="flex items-center gap-x-2 text-sm font-semibold leading-6 text-black">
                <svg
                  viewBox="0 0 2 2"
                  className="h-1.5 w-1.5 fill-green-500"
                  aria-hidden="true"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <span>14-day free trial</span>
                <span className="text-gray-300 mx-1">|</span>
                <span className="text-black/60 font-normal">
                  No credit card required
                </span>
              </div>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;