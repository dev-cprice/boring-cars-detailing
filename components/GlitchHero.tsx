import { BoringCarsDetailing } from "components/BoringCarsDetailing";
import Image from "next/image";
import cx from "classnames";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export function GlitchHero({ className, children }: Props) {
  return (
    <div className="h-full w-full">
      <figure
        className={cx(
          "absolute top-0 left-0 right-0 bottom-0",
          "max-w-lg lg:max-w-5xl mx-auto",
          className
        )}
      >
        <Image
          alt="Boring Cars Detailing Sans Text"
          src="/assets/imgs/bcd_sans_text_xl.png"
          layout="fill"
          objectFit="scale-down"
          priority
          quality="100"
        />
      </figure>
      <div className="absolute inset-0 z-0 text-center">
        <BoringCarsDetailing className="text-12vw h-full flex justify-center" />
      </div>
      <div className="absolute z-10 h-1/2 w-full top-1/2 flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
}
