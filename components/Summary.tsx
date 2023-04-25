import {
  Color,
  Icon,
  PrimarySecondaryAndTertiaryColor,
} from "../utils/types.ts";
import { GenericIcon } from "$start/components/ui/Icons.tsx";

export interface Props {
  text?: string;
  foregroundColor?: Color;
  backgroundColor?: Color;
  servicesTitle?: string;
  servicesTitleColor?: PrimarySecondaryAndTertiaryColor;
  services?: string[];
  servicesColor?: PrimarySecondaryAndTertiaryColor;
  technologiesTitle?: string;
  technologiesTitleColor?: Color;
  technologiesIconsColor?: Color;
  icons?: Array<{
    icon: Icon;
    alt?: string;
  }>;
}

export default function ({
  backgroundColor = "white-100",
  foregroundColor = "coral-70",
  text =
    "Our challenge was to scale and optimize Splendid Spoon’s core e-commerce platform to uphold more users and allow greater flexibility in offering new products. Besides, we also implemented the demands of the marketing team to increase the conversion of new users.",
  servicesTitle = "what we did",
  servicesTitleColor = "mineral-80",
  servicesColor = "coral-60",
  services = [
    "Project scoping and specification",
    "Python and React development",
    "Platform management",
    "Development of marketing pages",
    "7-days-a-week support",
  ],
  technologiesTitle = "technologies",
  technologiesTitleColor = "coral-60",
  technologiesIconsColor = "coral-40",
  icons = [
    {
      icon: "ReactIcon",
      alt: "React",
    },
    {
      icon: "PythonIcon",
      alt: "Python",
    },
    {
      icon: "DjangoIcon",
      alt: "Django",
    },
    {
      icon: "JavascriptIcon",
      alt: "Javascript",
    },
  ],
}: Props) {
  return (
    <section
      class={`summary-splendid-spoon bg-${foregroundColor}`}
    >
      <div class={`summary-splendid-spoon__text ${backgroundColor}`}>
        <div class="summary-splendid-spoon__wrapper">
          <div
            class={`summary-splendid-spoon__challenge-text md:pr-10 2xl:pr-16 text-${servicesTitleColor}`}
          >
            <p>{text}</p>
          </div>
          <div class="summary-splendid-spoon__group">
            <div class="summary-splendid-spoon__services md:pr-10 2xl:pr-16">
              <p class={`topic-heading text-${servicesTitleColor}`}>
                {servicesTitle}
              </p>
              <ul class={`list-disc text-${servicesColor}`}>
                {services.map((service) => <li>{service}</li>)}
              </ul>
            </div>
            <div class="summary-splendid-spoon__technologies">
              <p class={`topic-heading text-${technologiesTitleColor}`}>
                {technologiesTitle}
              </p>
              <div class="summary-splendid-spoon__tech-icons flex-wrap">
                {icons.map(({ icon, alt }) => (
                  <div class="custom-tooltip">
                    {GenericIcon(icon, technologiesIconsColor)}
                    <span>{alt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
