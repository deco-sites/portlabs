import type { HTML } from "deco-sites/std/components/types.ts";
import { Color, PrimarySecondaryAndTertiaryColor } from "$start/utils/types.ts";

export interface Props {
  backgroundColor?: Color;
  image?: string;
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
          <span
            class="solution-splendid-spoon__first-img"
            style={{ backgroundImage: `url(${image})` }}
          >
            &nbsp;
          </span>
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
