import type { HTML } from "deco-sites/std/components/types.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

import {
  Color,
  PrimaryColor,
  PrimarySecondaryAndTertiaryColor,
} from "$start/utils/types.ts";

export interface Props {
  backgroundColor?: Color;
  image?: LiveImage;
  title?: string;
  titleColor?: PrimarySecondaryAndTertiaryColor;
  text?: HTML;
  textColor?: string;
  includesLink?: boolean;
  linkText?: string;
  linkColor?: PrimaryColor;
  linkHref?: string;
  linkOpensInANewTab?: boolean;
}

export default function ({
  backgroundColor = "mustard-10",
  title = "About [company]",
  titleColor = "teal-40",
  image =
    "https://labcodes.com.br/static/bundles/assets/src/imgs/cases/splendid/about-photo.png",
  text = `
    <p>
      Explicação do que é o projeto e quem é o cliente. E se essas poucas mulheres existem é porque, segundo alguns criativos homens, é importante ter uma visão feminina. Óbvio, quem iria pensar em campanhas de Dia das Mães ou de empoderamento feminino? Criativa só serve para pensar nisso mesmo. Ah, e para outras coisas também: como deixar a criação “mais bonita”, ouvir piadinha sobre feminismo e ser subestimada.
    </p>
  `,
  includesLink = true,
  linkText = "Visit [company name] Website",
  linkColor = "teal-40",
  linkHref = "#",
  linkOpensInANewTab = false,
}: Props) {
  return (
    <section
      class={`about-splendid-spoon lg:justify-between	lg:flex-row-reverse bg-${backgroundColor}`}
    >
      <div class="h-[280px] sm:h-[450px] md:h-[520px] pl-7 xl:pl-32">
        <Picture>
          <Source
            media="(max-width: 768px)"
            src={image}
            width={1000}
            height={700}
          />
          <Source
            media="(max-width: 1440px)"
            src={image}
            width={1440}
            height={700}
          />
          <Source
            media="(min-width: 1440px)"
            src={image}
            width={1000}
            height={500}
          />
          <img
            class="object-cover h-full w-full rounded-bl-[80px]"
            loading="lazy"
            src={image}
          />
        </Picture>
      </div>
      {
        /*<div class="about-splendid-spoon__img-wrapper md:h-[600px]">
        <span
          class="about-splendid-spoon__img bg-bottom md:bg-bottom"
          style={{ backgroundImage: `url(${image})` }}
        >
          &nbsp;
        </span>
        </div>
       */
      }
      <div class="about-splendid-spoon__content">
        <div class="about-splendid-spoon__text">
          <h2 class={`text-${titleColor}`}>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: text }} />

          {/* TODO: Refactor the links */}
          {includesLink && (
            <a
              class={`link-nav !text-mineral-80 after:!bg-${linkColor} hover:!text-mustard-10`}
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
