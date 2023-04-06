import ScrollBottom from "$start/islands/ui/ScrollBottom.tsx";

export interface Props {
  mainColor?: string;
  title?: string;
  description?: string;
  includesScrollToBottom?: boolean;
  includesCta?: boolean;
  ctaText?: string;
  ctaLink?: string;
  ctaColor?: string;
  ctaTargetBlank?: boolean;
}

const Hero = (props: Props) => {
  const {
    mainColor = "coral",
    title = "We create custom digital experiences",
    description =
      "With a human-centered and holistic approach, we design and code web products that fit your needs",
    includesScrollToBottom = false,
    includesCta = false,
    ctaText = "find out more",
    ctaLink = "https://labcodes.com.br/services",
    ctaColor = "button--mustard",
    ctaTargetBlank = false,
  } = props;
  return (
    <section class={`hero section ${mainColor}`}>
      <div class="hero__content">
        <h1>{title}</h1>
        {description && <h5 class="hero__text">{description}</h5>}
        {includesCta && (
          <a
            href={ctaLink}
            class={`hero__button button ${ctaColor}`}
            target={ctaTargetBlank ? "_blank" : "_self"}
          >
            {ctaText}
          </a>
        )}
      </div>

      {includesScrollToBottom && <ScrollBottom />}
    </section>
  );
};

export default Hero;
