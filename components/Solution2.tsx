import type { HTML } from "deco-sites/std/components/types.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import { Color, PrimarySecondaryAndTertiaryColor } from "$start/utils/types.ts";

export interface Props {
  backgroundColor?: Color;
  image?: LiveImage;
  title?: string;
  titleColor?: PrimarySecondaryAndTertiaryColor;
  text?: HTML;
}

export default function ({
  backgroundColor = "coral-40",
  image =
    "https://labcodes.com.br/static/bundles/assets/src/imgs/cases/splendid/photo-solution.png",
  title = "subtitle",
  titleColor = "mineral-80",
  text =
    "<p>Explicação do que é o projeto e quem é o cliente. E se essas poucas mulheres existem é porque, segundo alguns criativos homens, é importante ter uma visão feminina. Óbvio, quem iria pensar em campanhas de Dia das Mães ou de empoderamento feminino? Criativa só serve para pensar nisso mesmo. Ah, e para outras coisas também: como deixar a criação “mais bonita”, ouvir piadinha sobre feminismo e ser subestimada.</p>",
}) {
  return (
    <section
      class={`solution-splendid-spoon bg-${backgroundColor}`}
    >
      <div
        class="solution-splendid-spoon__row pb-0"
      >
        <div class="solution-splendid-spoon__content">
          <div class="solution-splendid-spoon__text solution-splendid-spoon__text--marketing-team">
            <p class={`topic-heading text-${titleColor}`}>{title}</p>

            <div dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        </div>
        <div class="solution-splendid-spoon__image">
          <span
            class="solution-splendid-spoon__second-img"
            style={{ backgroundImage: `url(${image})` }}
          >
            &nbsp;
          </span>
        </div>
      </div>
    </section>
  );
}
