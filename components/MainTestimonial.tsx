import { Color, PrimarySecondaryAndTertiaryColor } from "$start/utils/types.ts";

export interface Props {
  foregroundColor?: Color;
  backgroundColor?: Color;
  testimonial?: string;
  testimonialColor?: PrimarySecondaryAndTertiaryColor;
  author?: string;
  authorColor?: PrimarySecondaryAndTertiaryColor;
  authorPosition?: string;
  authorPositionColor?: PrimarySecondaryAndTertiaryColor;
}

export default function ({
  foregroundColor = "white-100",
  backgroundColor = "mustard-10",
  testimonial =
    "“When companies signup for Tina, they have no doubt that we are a company that knows what we’re doing, that we are experts in dealing with domestic violence against women. Furthermore, that we are able to deliver solutions through technology.”",
  testimonialColor = "mineral-80",
  author = "NOME DA PESSOA",
  authorColor = "mineral-80",
  authorPosition = "Cargo da pessoa",
  authorPositionColor = "mineral-80",
}: Props) {
  return (
    <section
      class={`outcomes-splendid-spoon bg-${foregroundColor}`}
      style={{ paddingTop: 0 }}
    >
      <div class={`outcomes-testimonial bg-${backgroundColor}`}>
        <div class="outcomes-testimonial__content">
          <p class={`text-${testimonialColor}`}>
            {testimonial}
          </p>
          <p class={`topic-heading text-${authorColor}`}>{author}</p>
          <p class={`smallest-paragraph text-${authorPositionColor}`}>
            {authorPosition}
          </p>
        </div>
      </div>
    </section>
  );
}
