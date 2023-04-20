import { asset } from "$fresh/runtime.ts";

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
      <div class="hero-cases__content max-w-[573px] z-[3]">
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
          {/* `width={1} height={1}` is a tricky to avoid download the backward-compatibility image on mobile */}
          <Source
            src={image}
            media="(max-width: 1023px)"
            fetchPriority="low"
            width={54}
            height={32}
            {...{ "q": 30, "bl": 10 }}
          />
          <Source
            media="(min-width: 1024px) and (max-width: 1440px)"
            fetchPriority="high"
            src={image}
            width={1080}
            height={655}
          />
          <Source
            media="(min-width: 1440px) and (max-width: 1919px)"
            fetchPriority="high"
            src={image}
            width={1500}
            height={1000}
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
            loading="eager"
            src={image}
            width={1500}
            height={1000}
          />
        </Picture>
      )}
      {includesScrollToBottom && <ScrollBottom />}
    </section>
  );
}
