import { Color, PrimarySecondaryAndTertiaryColor } from "../utils/types.ts";
import zip from "$start/utils/zip.ts";

export interface Props {
  backgroundColor?: Color;
  highlights?: string[];
  highlightsColor?: PrimarySecondaryAndTertiaryColor;
  highlightsSubtitles?: string[];
  highlightsSubtitlesColor?: PrimarySecondaryAndTertiaryColor;
}

export default function ({
  backgroundColor = "coral-70",
  highlights = [
    "50%",
    "+42",
    "30%",
    "10%",
    "2x",
    "+3",
  ],
  highlightsColor = "white-100",
  highlightsSubtitles = [
    "metrica que melhoramos",
    "metrica que melhoramos",
    "metrica que melhoramos",
    "metrica que melhoramos",
    "metrica que melhoramos",
    "metrica que melhoramos",
  ],
  highlightsSubtitlesColor = "white-100",
}: Props) {
  const zippedHighlights = [...zip(highlights, highlightsSubtitles)];

  return (
    <div
      class={`d-flex py-15 md:py-10 lg:py-12 px-7 place-content-center bg-${backgroundColor}`}
    >
      <div class="w-12/12 md:w-4/6 xl:w-8/12 2xl:w-6/12 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-x-4 gap-y-3 md:gap-y-6 md:gap-x-5 lg:gap-5">
        {zippedHighlights.map(([title, subtitle]) => (
          <div class="text-center lg:py-3 px-3 md:px-4">
            <h4 class={`pb-1 text-${highlightsColor}`}>{title}</h4>
            <p
              class={`font-sans leading-[0.875rem] md:leading-4 font-medium md:text-base mb-0 text-sm text-${highlightsSubtitlesColor}`}
            >
              {subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
