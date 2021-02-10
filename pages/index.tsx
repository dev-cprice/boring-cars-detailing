import * as React from "react";
import { CTALaunch } from "components/CTALaunch";
import { GlitchHero } from "components/GlitchHero";
import { GetStaticProps } from "next";
import Image from "next/image";
import { Testimonials } from "components/Testimonials";
import { pageMeta, PageMeta } from "utils/pageMeta";
import { getPageLayout } from "components/Layout";
import type { BasePageProps } from "types/BasePageProps";
import { Page } from "types/PageLayout";

interface Props extends BasePageProps {
  meta: PageMeta;
}

export const getStaticProps: GetStaticProps = async () => {
  const props: Props = {
    meta: pageMeta(),
  };

  return {
    props,
  };
};

const Home: Page = () => {
  const launchRef = React.useRef<HTMLHeadingElement>(null);

  return (
    <>
      <section className="relative z-0 h-screen w-full">
        <Image
          alt="Photo by Jason Leung on Unsplash"
          className="absolute z-0"
          layout="fill"
          objectFit="cover"
          priority
          src="/assets/imgs/hero_5760x3840.jpg"
        />
        <div className="absolute z-0 top-0 right-0 left-0 bottom-0 bg-gray-950 opacity-70" />
        <GlitchHero>
          <div className="relative z-30 max-w-md mx-auto sm:flex sm:justify-center -mt-28">
            <button
              type="button"
              onClick={() =>
                launchRef.current?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-md shadow-primary-md w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-pink-600 hover:bg-pink-700 md:py-4 md:text-lg md:px-10"
            >
              Get Started
            </button>
          </div>
        </GlitchHero>
      </section>
      <h2
        id="launch"
        ref={launchRef}
        className="relative z-40 text-center px-4 py-8 text-xl font-semibold tracking-wider text-cyan-300 uppercase"
      >
        We're launching February 15th, 2021! 🚀
      </h2>
      <CTALaunch />
      <Testimonials />
    </>
  );
};

Home.pageLayout = getPageLayout;

export default Home;
