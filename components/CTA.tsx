export interface Props {
  backgroundColor?: string;
  title?: string;
  titleColor?: string;
  includesCta?: boolean;
  ctaText?: string;
  ctaTitle?: string;
  ctaLink?: string;
  ctaColor?: string;
  ctaTargetBlank?: boolean;
}

export default function ({
  backgroundColor = "#FFFFFF",
  title = "Do you want to achieve incredible results?",
  titleColor = "#007B7D",
  includesCta = false,
  ctaText = "Let's talk",
  ctaTitle = "Go to contact page.",
  ctaLink = "https://labcodes.com.br/contact",
  ctaColor = "mustard",
  ctaTargetBlank = false,
}: Props) {
  return (
    <section class="cta-splendid-spoon" style={{ backgroundColor }}>
      <div class="cta-splendid-spoon__content">
        <h3>
          <span style={{ color: titleColor }}>{title}</span>
          {includesCta && (
            <a
              href={ctaLink}
              class={`button button--${ctaColor}`}
              target={ctaTargetBlank ? "_blank" : "_self"}
              title={ctaTitle}
            >
              {ctaText}
            </a>
          )}
        </h3>
      </div>
    </section>
  );
}
