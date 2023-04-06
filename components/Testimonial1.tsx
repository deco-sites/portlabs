export interface Props {
  foregroundColor?: string;
  backgroundColor?: string;
  testimonial?: string;
  testimonialColor?: string;
  author?: string;
  authorColor?: string;
  authorPosition?: string;
  authorPositionColor?: string;
}

export default function ({
  foregroundColor = "#E8EFF3",
  backgroundColor = "#8095A3",
  testimonial =
    "“This was our first time working with an outside company, and we liked the experience and learned a lot from it. They have more experience than us, so we’ve learned how to work in sprints and organize a project. I don’t have anything negative to say.”",
  testimonialColor = "#FFFFFF",
  author = "NOME DA PESSOA",
  authorColor = "#FFFFFF",
  authorPosition = "Cargo da pessoa",
  authorPositionColor = "#FFFFFF",
}: Props) {
  return (
    <section
      class="testimonial-splendid-spoon"
      style={{ backgroundColor: foregroundColor }}
    >
      <div class="testimonial-detail">
        <div class="testimonial-detail__content" style={{ backgroundColor }}>
          <div class="testimonial-detail__text">
            <p style={{ color: testimonialColor }}>{testimonial}</p>
            <p style={{ color: authorColor }} class="topic-heading">{author}</p>
            <p
              style={{ color: authorPositionColor }}
              class="smallest-paragraph"
            >
              {authorPosition}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
