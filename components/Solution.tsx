import type { HTML } from "deco-sites/std/components/types.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

import { Color, PrimarySecondaryAndTertiaryColor } from "$start/utils/types.ts";

export interface Props {
  backgroundColor?: Color;
  image?: LiveImage;
  desktopImage?: LiveImage;
  title?: string;
  titleColor?: PrimarySecondaryAndTertiaryColor;
  subtitle?: string;
  subtitleColor?: PrimarySecondaryAndTertiaryColor;
  text?: HTML;
}

export default function ({
  backgroundColor = "coral-40",
  image =
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
      <div class="solution-splendid-spoon__row items-stretch pt-0">
        <div class="solution-splendid-spoon__image xl:max-w-[40%]">
          <Picture class="solution-splendid-spoon__first-img 2lg:hidden pt-12 object-scale-down">
            <Source
              media="(max-width: 767px)"
              src={image}
              fetchPriority="low"
              width={768}
              height={361}
            />
            <Source
              media="(min-width: 768px) and (max-width: 1200px)"
              src={image}
              fetchPriority="low"
              width={1600}
              height={752}
            />
            <img
              class="object-cover object-left-bottom 2xl:object-center-top h-full w-full rounded-br-[80px] md:rounded-br-[160px]"
              loading="lazy"
              src={image}
            />
          </Picture>
          <Picture class="solution-splendid-spoon__first-img hidden 2lg:block mb-0 self-auto">
            <Source
              media="(min-width: 1200px) and (max-width:1920px)"
              src={desktopImage}
              fetchPriority="low"
              width={559}
              height={500}
            />
            <img
              class="w-auto self-center bg-none md:rounded-br-[160px]"
              loading="lazy"
              src={desktopImage}
            />
          </Picture>
          <Picture class="solution-splendid-spoon__first-img hidden 2lg:object-cover mb-0">
            <Source
              media="(min-width: 1921px)"
              src={desktopImage}
              fetchPriority="low"
              width={1000}
              height={900}
            />
            <img
              class="w-auto h-auto object-fit bg-none rounded-br-[160px]"
              loading="lazy"
              src={desktopImage}
            />
          </Picture>
        </div>
        <div class="solution-splendid-spoon__content pt-16 pb-14 ">
          <div class="solution-splendid-spoon__text solution-splendid-spoon__text--solution">
            <h2 class={`text-${titleColor}`}>{title}</h2>
            <p class={`topic-heading text-${subtitleColor}`}>{subtitle}</p>

            <div dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        </div>
      </div>
    </section>
  );
}
