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
  backgroundColor = "#414F58",
  title = "Do you want to achieve incredible results?",
  titleColor = "#FFFFFF",
  includesCta = true,
  ctaText = "Let's talk",
  ctaTitle = "Go to contact page.",
  ctaLink = "https://labcodes.com.br/contact",
  ctaColor = "mustard",
  ctaTargetBlank = false,
}: Props) {
  return (
    <section class="cta-loadsmart" style={{ backgroundColor }}>
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
