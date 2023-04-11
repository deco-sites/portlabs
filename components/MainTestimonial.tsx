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
  foregroundColor = "#FFFFFF",
  backgroundColor = "#FDF8ED",
  testimonial =
    "“When companies signup for Tina, they have no doubt that we are a company that knows what we’re doing, that we are experts in dealing with domestic violence against women. Furthermore, that we are able to deliver solutions through technology.”",
  testimonialColor = "#000000bf",
  author = "NOME DA PESSOA",
  authorColor = "#576975",
  authorPosition = "Cargo da pessoa",
  authorPositionColor = "#576975",
}: Props) {
  return (
    <section
      class="outcomes-splendid-spoon"
      style={{ backgroundColor: foregroundColor, paddingTop: 0 }}
    >
      <div class="outcomes-testimonial" style={{ backgroundColor }}>
        <div class="outcomes-testimonial__content">
          <p style={{ color: testimonialColor }}>
            {testimonial}
          </p>
          <p class="topic-heading" style={{ color: authorColor }}>{author}</p>
          <p class="smallest-paragraph" style={{ color: authorPositionColor }}>
            {authorPosition}
          </p>
        </div>
      </div>
    </section>
  );
}
