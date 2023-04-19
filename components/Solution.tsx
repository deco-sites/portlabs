import type { HTML } from "deco-sites/std/components/types.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

import { Color, PrimarySecondaryAndTertiaryColor } from "$start/utils/types.ts";

export interface Props {
  backgroundColor?: Color;
  mobileImage?: LiveImage;
  desktopImage?: LiveImage;
  title?: string;
  titleColor?: PrimarySecondaryAndTertiaryColor;
  subtitle?: string;
  subtitleColor?: PrimarySecondaryAndTertiaryColor;
  text?: HTML;
}

export default function ({
  backgroundColor = "coral-40",
  mobileImage =
    "https://labcodes.com.br/static/bundles/assets/src/imgs/cases/splendid/photo-solution.png",
  desktopImage =
    "https://labcodes.com.br/static/bundles/assets/src/imgs/cases/splendid/photo-solution.png",
  title = "Solution",
  titleColor = "mineral-80",
  subtitle = "A FASTER, SLICKER, AND MORE FLEXIBLE SOFTWARE",
  subtitleColor = "mineral-80",
  text =
    "<p>Explicação do que é o projeto e quem é o cliente. E se essas poucas mulheres existem é porque, segundo alguns criativos homens, é importante ter uma visão feminina. Óbvio, quem iria pensar em campanhas de Dia das Mães ou de empoderamento feminino? Criativa só serve para pensar nisso mesmo. Ah, e para outras coisas também: como deixar a criação “mais bonita”, ouvir piadinha sobre feminismo e ser subestimada.</p>",
}) {
  return (
    <section class={`solution-splendid-spoon bg-${backgroundColor}`}>
      <div class="solution-splendid-spoon__row pt-0">
        <div class="solution-splendid-spoon__image">
          <Picture class="solution-splendid-spoon__first-img h-[480px] md:h-[720px] lg:h-[960px]">
            <Source
              media="(max-width: 1920px)"
              src={mobileImage}
              width={650}
              height={650}
            />
            <Source
              media="(min-width: 1920px)"
              src={desktopImage}
              width={1200}
              height={700}
            />
            <img
              class="d-none d-xl-block object-cover h-full w-full"
              loading="lazy"
              src={mobileImage}
            />
          </Picture>
        </div>
        <div class="solution-splendid-spoon__content pt-12">
          <div class="solution-splendid-spoon__text solution-splendid-spoon__text--solution">
            <h2 class={`text-${titleColor}`}>{title}</h2>
            <p class={`topic-heading text-${subtitleColor}`}>
              {subtitle}
            </p>

            <div dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        </div>
      </div>
    </section>
  );
}
