import { Color, PrimarySecondaryAndTertiaryColor } from "$start/utils/types.ts";
import { AvailableFluentIcon } from "$start/components/ui/FluentIcon.tsx";
import FluentIcon from "$start/components/ui/FluentIcon.tsx";

// TODO: Finish this component if we'll do use it.

export interface Props {
  backgroundColor?: Color;
  highlightsTextsColor?: PrimarySecondaryAndTertiaryColor;
  highlightsTexts?: string[];
  highlightsIcons?: AvailableFluentIcon[];
  highlightsIconsColor?: PrimarySecondaryAndTertiaryColor;
}

export default function ({
  backgroundColor = "coral-70",
  highlightsTextsColor = "mineral-80",
  highlightsTexts = [
    "Deliver a new product Mete a Colher could sell to their clients.",
    "Implement a faster screening process for social workers to help victims of harassment.",
    "Guarantee a safe space for women to report harassment while having their privacy respected.",
  ],
  highlightsIcons = ["receipt_sparkles", "clock", "inprivate_account"],
  highlightsIconsColor = "mineral-80",
}: Props) {
  const highlightsCount = highlightsTexts.length;

  return (
    <section
      class={`d-flex py-15 md:py-10 lg:py-12 px-7 place-content-center bg-${backgroundColor}`}
    >
      <div
        class={`w-12/12 md:w-4/6 xl:w-6/12 2xl:w-4/12 grid grid-cols-12 md:grid-cols-${highlightsCount} gap-x-4 gap-y-3 md:gap-y-6 md:gap-x-5 lg:gap-5 xl:gap-8 2xl:gap-16`}
      >
        {[...Array(highlightsCount).keys()].map((index) => (
          <div
            class={`text-center lg:py-3 px-3 md:px-4 col-span-6 md:col-span-1 ${
              (index === (highlightsCount - 1) && highlightsCount % 2 !== 0)
                ? "col-start-4 md:col-start-auto col-end-10 md:col-end-auto"
                : ""
            }`}
          >
            <div class="pb-2 flex items-center justify-center">
              <FluentIcon
                id={highlightsIcons[index]}
                size={40}
                variant="filled"
                class={`text-${highlightsIconsColor}`}
              />
            </div>
            <p
              class={`text-center text-sm leading-sm md:text-base md:leading-base mb-0 text-${highlightsTextsColor}`}
            >
              {highlightsTexts[index]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
