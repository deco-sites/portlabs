export interface Props {
  text?: string;
  foregroundColor?: string;
  backgroundColor?: string;
  servicesTitle?: string;
  servicesColor?: string;
  services?: string[];
  technologiesTitle?: string;
  technologiesTitleColor?: string;
  technologiesIconsColor?: string;
  technologies?: string[];
}

export default function ({
  backgroundColor = "#FFFFFF",
  foregroundColor = "#FFACA4",
  text =
    "Our challenge was to scale and optimize Splendid Spoon’s core e-commerce platform to uphold more users and allow greater flexibility in offering new products. Besides, we also implemented the demands of the marketing team to increase the conversion of new users.",
  servicesTitle = "what we did",
  servicesColor = "",
  services = [
    "Project scoping and specification",
    "Python and React development",
    "Platform management",
    "Development of marketing pages",
    "7-days-a-week support",
  ],
  technologiesTitle = "technologies",
  technologiesTitleColor = "",
  technologiesIconsColor = "",
  technologies = [
    "React",
    "Python",
    "Django",
    "React",
    "Python",
  ],
}: Props) {
  return (
    <section
      class="summary-splendid-spoon"
      style={{ backgroundColor: foregroundColor }}
    >
      <div class="summary-splendid-spoon__text">
        <div class="summary-splendid-spoon__wrapper">
          <div class="summary-splendid-spoon__challenge-text">
            <p>{text}</p>
          </div>
          <div class="summary-splendid-spoon__group">
            <div class="summary-splendid-spoon__services">
              <p class="topic-heading" style={{ color: servicesColor }}>
                {servicesTitle}
              </p>
              <ul>
                {services.map((service) => <li>{service}</li>)}
              </ul>
            </div>
            <div class="summary-splendid-spoon__technologies">
              <p
                class="topic-heading"
                style={{ color: technologiesTitleColor }}
              >
                {technologiesTitle}
              </p>
              <div class="summary-splendid-spoon__tech-icons flex-wrap">
                {technologies.map((technology) => (
                  <div class="custom-tooltip">
                    <img
                      src={`img/${technology.toLocaleLowerCase()}.svg`}
                      alt={technology}
                      style={{ color: technologiesIconsColor }}
                    />
                    <span>{technology}</span>
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
