import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  backgroundColor?: string;
  title?: string;
  titleColor?: string;
  text?: HTML;
  textColor?: string;
}

export default function ({
  backgroundColor = "#FFFFFF",
  title = "Outcome",
  titleColor = "#007B7D",
  text = `
    <p>Mete a Colher already had the whole design and UX ready for the product, but no back or front-end to make the product available for the large companies and their employees. So we began working together with their team to build their product within the deadlines that they already had.</p>
    <p>In order to meet their objectives, Mete a Colher already had a few deadlines they needed to meet, so we had to act accordingly. We prioritized their main features to deliver value as soon as possible. Meanwhile, we also identified inconsistencies on the design side of the product, helping their team craft a better solution.</p>
  `,
}: Props) {
  return (
    <section class="challenge-loadsmart" style={{ backgroundColor }}>
      <div class="challenge-loadsmart__content">
        <div class="challenge-loadsmart__text">
          <div class="challenge-loadsmart__title">
            <h2 style={{ color: titleColor }}>{title}</h2>
          </div>
          <div
            class="challenge-loadsmart__description"
            dangerouslySetInnerHTML={{ __html: text }}
          >
          </div>
        </div>
      </div>
    </section>
  );
}
