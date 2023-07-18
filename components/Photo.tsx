import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

export interface Props {
  altText?: string;
  mobileImage?: LiveImage;
  tabletImage?: LiveImage;
  desktopImage?: LiveImage;
  ultrawideImage?: LiveImage;
}

export default function ({
  altText = "Photo image.",
  mobileImage =
    "https://labcodes.com.br/static/bundles/assets/src/imgs/cases/splendid/challenge-photo.png",
  tabletImage =
    "https://labcodes.com.br/static/bundles/assets/src/imgs/cases/splendid/challenge-photo.png",
  desktopImage =
    "https://labcodes.com.br/static/bundles/assets/src/imgs/cases/splendid/challenge-photo.png",
  ultrawideImage =
    "https://labcodes.com.br/static/bundles/assets/src/imgs/cases/splendid/challenge-photo.png",
}: Props) {
  return (
    <section class="challenge-splendid-spoon h-[326px] md:h-[460px] 2xl:h-[540px] w-100">
      <Picture>
        <Source
          media="(max-width: 768px)"
          src={mobileImage}
          fetchPriority="high"
          width={360}
          height={326}
        />
        <Source
          media="(min-width: 768px) and (max-width: 1440px)"
          src={tabletImage}
          fetchPriority="high"
          width={768}
          height={460}
        />
        <Source
          media="(min-width: 1440px) and (max-width: 1920px)"
          src={desktopImage}
          fetchPriority="high"
          width={1440}
          height={461}
        />
        <Source
          media="(min-width: 1920px)"
          src={ultrawideImage}
          fetchPriority="high"
          width={2560}
          height={536}
        />
        <img
          class="object-cover object-center w-full h-full 2xl:max-h-full"
          loading="lazy"
          alt={altText}
          src={ultrawideImage}
        />
      </Picture>
    </section>
  );
}
