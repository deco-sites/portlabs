import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

export interface Props {
  mobileImage?: LiveImage;
  tabletImage?: LiveImage;
  desktopImage?: LiveImage;
}

export default function ({
  mobileImage =
    "https://labcodes.com.br/static/bundles/assets/src/imgs/cases/splendid/challenge-photo.png",
  tabletImage =
    "https://labcodes.com.br/static/bundles/assets/src/imgs/cases/splendid/challenge-photo.png",
  desktopImage =
    "https://labcodes.com.br/static/bundles/assets/src/imgs/cases/splendid/challenge-photo.png",
}: Props) {
  return (
    <section class="challenge-splendid-spoon h-[460px] w-100">
      <Picture>
        <Source
          src={mobileImage}
          width={375}
          height={460}
        />
        <Source
          media="(min-width: 768px)"
          src={tabletImage}
          width={768}
          height={460}
        />
        <Source
          media="(min-width: 1200px)"
          src={desktopImage}
          width={768}
          height={460}
        />
        <img
          class="object-cover h-full w-full"
          loading="lazy"
          src={mobileImage}
        />
      </Picture>
    </section>
  );
}
