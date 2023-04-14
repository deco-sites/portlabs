import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";

interface Props {
  title: string;
}

const PAGES_SUBDOMAIN = "pages.";

export default function (props: Props) {
  const linkTo = useSignal("");

  useEffect(() => {
    linkTo.value = document.location.origin.replace(PAGES_SUBDOMAIN, "");
  }, []);

  return (
    <div class="header__logo">
      <a
        id="header-hero-logo"
        href={linkTo.value}
        class="header__hero header__logo--link"
        title="Go to home page"
      >
        <figure class="mobile-ipad-visible">
          <img
            class="header__logo--image"
            src="/img/logo-symbol-yellow.svg"
            alt="Labcodes logo symbol"
          />
          <figcaption>
            <p class="header__logo--title yellow">{props.title}</p>
          </figcaption>
        </figure>
        <figure class="large-desktop-visible">
          <img
            class="header__logo--image"
            src="/img/logo-marca-yellow.svg"
            alt="Labcodes logo mark"
          />
        </figure>
      </a>

      <a
        id="header-content-logo"
        href={linkTo.value}
        class="header__content header__logo--link hidden"
        title="Go to home page"
      >
        <figure class="mobile-ipad-visible">
          <img
            class="header__logo--image"
            src="/img/logo-symbol-yellow.svg"
            alt="Labcodes logo symbol"
          />
          <figcaption>
            <p class="header__logo--title yellow">{props.title}</p>
          </figcaption>
        </figure>
        <figure class="large-desktop-visible">
          <img
            class="header__logo--image"
            src="/img/logo-marca-yellow.svg"
            alt="Labcodes logo mark"
          />
        </figure>
      </a>
    </div>
  );
}
