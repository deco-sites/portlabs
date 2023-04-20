import ScrollBottom from "$start/islands/ui/ScrollBottom.tsx";
import {
  Color,
  PrimaryColor,
  PrimarySecondaryAndTertiaryColor,
} from "$start/utils/types.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

export interface Props {
  backgroundColor?: Color;
  title?: string;
  titleColor?: PrimaryColor;
  preText?: string;
  preTextColor?: PrimarySecondaryAndTertiaryColor;
  includesScrollToBottom?: boolean;
  image?: LiveImage;
}

export default function ({
  backgroundColor = "coral-40",
  title = "Healthy software for a healthy business model",
  titleColor = "white-100",
  preText = "Splendid Spoon",
  preTextColor = "white-100",
  includesScrollToBottom = true,
  image =
    "https://labcodes.com.br/static/core/imgs/cases/splendid/hero-img.png",
}: Props) {
  return (
    <section
      class={`hero-cases bg-${backgroundColor} max-h-[800px] relative`}
    >
      <div
        class="hero-cases__content max-w-[573px] z-[3]"
      >
        <p
          class={`topic-heading hero-cases__title text-${preTextColor}`}
        >
          {preText}
        </p>
        <h1 class={`hero-cases__subtitle text-${titleColor}`}>
          {title}
        </h1>
      </div>

      {image && (
        <Picture
          class="hero-cases__img h-700 max-h-[800px] w-75 position-absolute right-0 bottom-0"
          preload
        >
          <Source
            media="(min-width: 1200px) and (max-width: 1919px)"
            fetchPriority="high"
            src={image}
            width={975}
            height={650}
          />
          <Source
            media="(min-width: 1920px)"
            fetchPriority="high"
            src={image}
            width={1500}
            height={1000}
          />
          <img
            class="d-none d-xl-block object-contain object-left-bottom h-full w-full"
            loading="lazy"
            src={image}
          />
        </Picture>
      )}
      {includesScrollToBottom && <ScrollBottom />}
    </section>
  );
}
