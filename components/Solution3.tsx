import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  backgroundColor?: string;
  title?: string;
  titleColor?: string;
  column1Text?: HTML;
  column2Text?: HTML;
}

export default function ({
  backgroundColor = "#E8EFF3",
  title = "Solution",
  titleColor = "#005F61",
  column1Text =
    "<p>At the end, we were able to meet all the deadline set for the Tina launch. Today, Tina has already been used by thousands of women, who reported all kinds of violence and were helped by a network of volunteers and social workers specialized in this cases.</p>",
  column2Text =
    "<p>Huge companies, such as Carrefour, Natura, Bayer and others, are using Tina on a daily basis, helping create not only a safer work environment, but also a better world for women everywhere.</p>",
}) {
  return (
    <section class="solution-splendid-spoon" style={{ backgroundColor }}>
      <div class="solution-splendid-spoon__row">
        <div class="solution-splendid-spoon__content">
          <div class="solution-splendid-spoon__text solution-splendid-spoon__text--subscription">
            <p class="topic-heading" style={{ color: titleColor }}>{title}</p>
            <div class="solution-splendid-spoon__text-row">
              <div
                class="solution-splendid-spoon__text-col"
                dangerouslySetInnerHTML={{ __html: column1Text }}
              />
              <div
                class="solution-splendid-spoon__text-col"
                dangerouslySetInnerHTML={{ __html: column2Text }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
