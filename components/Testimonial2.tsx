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
    <div
      class={`solution-splendid-spoon__testimonial bg-${foregroundColor}`}
      style={{ top: 0 }}
    >
      <div class="testimonial-detail" style={{ marginBottom: 0 }}>
        <div
          class={`testimonial-detail__content bg-${backgroundColor}`}
          style={{
            marginRight: 0,
            borderBottomRightRadius: 0,
            // transform: "translateY(-40px)",
            maxWidth: "100%",
          }}
        >
          <div class="testimonial-detail__text xl:max-w-[66%] 2xl:max-w-[50%]">
            <p
              class={`mb-0 text-${testimonialColor} text-base md:text-2lg font-extra-light md:leading-10 pb-4 lg:pb-8`}
            >{testimonial}</p>
            <p class={`topic-heading ${authorColor}`}>{author}</p>
            <p
              class={`smallest-paragraph text-${authorPositionColor}`}
            >
              {authorPosition}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
