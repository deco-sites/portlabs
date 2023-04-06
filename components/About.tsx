import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  backgroundColor?: string;
  image?: string;
  title?: string;
  titleColor?: string;
  text?: HTML;
  textColor?: string;
  includesLink?: boolean;
  linkText?: string;
  linkColor?:
    | "teal"
    | "purple"
    | "header-coral"
    | "header-teal"
    | "header-mustard"
    | "header-purple"
    | "header-coral-sec"
    | "header-teal-sec"
    | "header-mustard-sec"
    | "header-purple-sec";
  linkHref?: string;
  linkOpensInANewTab?: boolean;
}

export default function ({
  backgroundColor = "#FFFFFF",
  title = "About Splendid Spoon",
  titleColor = "#009699",
  image =
    "https://labcodes.com.br/static/bundles/assets/src/imgs/cases/splendid/about-photo.png",
  text = `
    <p>
      Splendid Spoon is a plant-based wellness brand, delivering
      ready-to-eat, nutrient-dense meals. Founded in 2013 to help the 91%
      of Americans who don’t eat their recommended daily servings of
      veggies, this New York-based company makes meals healthier during
      busy days.
    </p>
    <p>
      With an already established business model and client base, they
      were looking to grow their product from end-to-end (from
      subscription’s payment to the meal’s preparation and delivery), in a
      healthy way, of course.
    </p>
  `,
  includesLink = true,
  linkText = "Visit [company name] Website",
  linkColor = "teal",
  linkHref = "#",
  linkOpensInANewTab = false,
}: Props) {
  return (
    <section class="about-splendid-spoon" style={{ backgroundColor }}>
      <div class="about-splendid-spoon__img-wrapper">
        <span
          class="about-splendid-spoon__img"
          style={{ backgroundImage: image }}
        >
          &nbsp;
        </span>
      </div>
      <div class="about-splendid-spoon__content">
        <div class="about-splendid-spoon__text">
          <h2 style={{ color: titleColor }}>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: text }} />

          {/* TODO: Refactor the links */}
          {includesLink && (
            <a
              class={`link-nav link-nav--${linkColor}`}
              style={{ marginTop: "2rem" }}
              href={linkHref}
              target={linkOpensInANewTab ? "_blank" : "_self"}
            >
              {linkText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
