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
  backgroundColor = "coral-40",
  testimonial =
    "“This was our first time working with an outside company, and we liked the experience and learned a lot from it. They have more experience than us, so we’ve learned how to work in sprints and organize a project. I don’t have anything negative to say.”",
  testimonialColor = "white-100",
  author = "NOME DA PESSOA",
  authorColor = "white-100",
  authorPosition = "Cargo da pessoa",
  authorPositionColor = "white-100",
}: Props) {
  return (
    <section
      class={`testimonial-splendid-spoon bg-${foregroundColor}`}
    >
      <div class="testimonial-detail">
        <div class={`testimonial-detail__content bg-${backgroundColor}`}>
          <div class="testimonial-detail__text">
            <p class={`text-${testimonialColor}`}>{testimonial}</p>
            <p class={`topic-heading text-${authorColor}`}>{author}</p>
            <p
              class={`smallest-paragraph text-${authorPositionColor}`}
            >
              {authorPosition}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
