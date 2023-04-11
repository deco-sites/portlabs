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
  backgroundColor = "#E8EFF3",
  title = "About [company]",
  titleColor = "#009699",
  image =
    "https://labcodes.com.br/static/bundles/assets/src/imgs/cases/splendid/about-photo.png",
  text = `
    <p>
      Explicação do que é o projeto e quem é o cliente. E se essas poucas mulheres existem é porque, segundo alguns criativos homens, é importante ter uma visão feminina. Óbvio, quem iria pensar em campanhas de Dia das Mães ou de empoderamento feminino? Criativa só serve para pensar nisso mesmo. Ah, e para outras coisas também: como deixar a criação “mais bonita”, ouvir piadinha sobre feminismo e ser subestimada.
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
          style={{ backgroundImage: `url(${image})` }}
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
