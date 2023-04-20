import { Color, PrimarySecondaryAndTertiaryColor } from "$start/utils/types.ts";

export interface Props {
  dividerColor?: Color;
  backgroundColor?: Color;
  testimonial?: string;
  testimonialColor?: PrimarySecondaryAndTertiaryColor;
  testimonialBackgroundColor?: Color;
  author?: string;
  authorColor?: PrimarySecondaryAndTertiaryColor;
  authorPosition?: string;
  authorPositionColor?: PrimarySecondaryAndTertiaryColor;
}

export default function ({
  dividerColor = "coral-40",
  backgroundColor = "coral-40",
  testimonialBackgroundColor = "mustard-10",
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
      class={`relative bg-${backgroundColor}`}
    >
      <div
        style={{
          height: "140px",
        }}
        class={`absolute top-0 h-[140px] w-100 bg-${dividerColor}`}
      >
      </div>
      <div
        class="testimonial-detail"
        style={{ position: "relative" }}
      >
        <div
          class={`testimonial-detail__content bg-${testimonialBackgroundColor}`}
        >
          <div class="testimonial-detail__text">
            <p class={`lg:text-lg lg:leading-2xl text-${testimonialColor}`}>
              {testimonial}
            </p>
            <p
              class={`lg:text-lg lg:leading-2xl topic-heading text-${authorColor}`}
            >
              {author}
            </p>
            <p
              class={`lg:text-lg lg:leading-2xl smallest-paragraph text-${authorPositionColor}`}
            >
              {authorPosition}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
