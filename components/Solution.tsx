import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  backgroundColor?: string;
  image?: string;
  title?: string;
  titleColor?: string;
  subtitle?: string;
  subtitleColor?: string;
  text?: HTML;
}

export default function ({
  backgroundColor = "#E8EFF3",
  image =
    "https://labcodes.com.br/static/bundles/assets/src/imgs/cases/splendid/photo-solution.png",
  title = "Solution",
  titleColor = "#005F61",
  subtitle = "A FASTER, SLICKER, AND MORE FLEXIBLE SOFTWARE",
  subtitleColor = "#005F61",
  text =
    "<p>Explicação do que é o projeto e quem é o cliente. E se essas poucas mulheres existem é porque, segundo alguns criativos homens, é importante ter uma visão feminina. Óbvio, quem iria pensar em campanhas de Dia das Mães ou de empoderamento feminino? Criativa só serve para pensar nisso mesmo. Ah, e para outras coisas também: como deixar a criação “mais bonita”, ouvir piadinha sobre feminismo e ser subestimada.</p>",
}) {
  return (
    <section class="solution-splendid-spoon" style={{ backgroundColor }}>
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
            <h2 style={{ color: titleColor }}>{title}</h2>
            <p class="topic-heading" style={{ color: subtitleColor }}>
              {subtitle}
            </p>

            <div dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        </div>
      </div>
    </section>
  );
}
