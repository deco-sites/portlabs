import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

export interface Props {
  image?: LiveImage;
}

export default function ({
  image =
    "https://labcodes.com.br/static/bundles/assets/src/imgs/cases/splendid/challenge-photo.png",
}: Props) {
  return (
    <section class="challenge-splendid-spoon h-[460px] xl:h-[620px] w-100">
      <Picture>
        <Source
          media="(max-width: 768px)"
          src={image}
          fetchPriority="high"
          width={750}
          height={620}
        />
        <Source
          media="(min-width: 768px) and (max-width: 1440px)"
          src={image}
          fetchPriority="high"
          width={1500}
          height={620}
        />
        <Source
          media="(min-width: 1440px)"
          src={image}
          fetchPriority="high"
          width={1920}
          height={620}
        />
        <img
          class="object-cover h-full w-full"
          loading="lazy"
          src={image}
        />
      </Picture>
    </section>
  );
}
