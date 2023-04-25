import {
  Color,
  PrimaryColor,
  PrimarySecondaryAndTertiaryColor,
} from "$start/utils/types.ts";

export interface Props {
  backgroundColor?: Color;
  title?: string;
  titleColor?: PrimarySecondaryAndTertiaryColor;
  includesCta?: boolean;
  ctaText?: string;
  ctaTitle?: string;
  ctaLink?: string;
  ctaColor?: PrimaryColor;
  ctaTransitionBorderColor?: Color;
  ctaTargetBlank?: boolean;
}

export default function ({
  backgroundColor = "coral-60",
  title = "Do you want to achieve incredible results?",
  titleColor = "white-100",
  includesCta = true,
  ctaText = "Let's talk",
  ctaTitle = "Go to contact page.",
  ctaLink = "https://labcodes.com.br/contact",
  ctaColor = "mustard-30",
  ctaTransitionBorderColor = "coral-60",
  ctaTargetBlank = false,
}: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .cta-loadsmart:hover {
            box-shadow: 0px 12px 0 0 !important;
          }`,
        }}
      />
      <section
        class={`cta-loadsmart bg-${backgroundColor} text-${ctaTransitionBorderColor}`}
      >
        <div class="cta-splendid-spoon__content">
          <h3 class={`text-${titleColor}`}>
            <span>{title}</span>
            {includesCta && (
              <a
                href={ctaLink}
                class={`button button--mustard bg-${ctaColor} sm:ml-16 text-purple-80`}
                target={ctaTargetBlank ? "_blank" : "_self"}
                title={ctaTitle}
              >
                {ctaText}
              </a>
            )}
          </h3>
        </div>
      </section>
    </>
  );
}
