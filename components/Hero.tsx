import ScrollBottom from "$start/islands/ScrollBottom.tsx";
import {
  Color,
  PrimaryColor,
  PrimarySecondaryAndTertiaryColor,
} from "$start/utils/types.ts";

export interface Props {
  backgroundColor?: Color;
  title?: string;
  titleColor?: PrimarySecondaryAndTertiaryColor;
  description?: string;
  descriptionColor?: PrimarySecondaryAndTertiaryColor;
  includesScrollToBottom?: boolean;
  includesCta?: boolean;
  ctaText?: string;
  ctaLink?: string;
  ctaColor?: PrimaryColor;
  ctaTargetBlank?: boolean;
}

const Hero = (props: Props) => {
  const {
    backgroundColor = "coral-40",
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
    <section class={`hero section bg-${backgroundColor}`}>
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
