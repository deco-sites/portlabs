import Link from "$start/islands/ui/Link.tsx";

export interface Props {
  title: string;
  /**
   * @title Navigation main color scheme
   * @description Options: coral, teal, mustard, purple, coral-sec, teal-sec, mustard-sec, purple-sec
   */
  color: string;
  /**
   * @title Navigation secondary color scheme
   * @description Options: coral, teal, mustard, purple, coral-sec, teal-sec, mustard-sec, purple-sec
   */
  secondary_color: string;
}

const menuExpandedCustomizedClasses = "d-flex justify-content-end";

export default function Navbar(props: Props) {
  let headerColorWithRebrandClasses = `header-color__${props.color}`;
  let buttonColor = "mustard";
  let headerTitleColor = "mustard-10";
  let headerIconsColor = "yellow";

  if (props.color === "mustard") {
    headerColorWithRebrandClasses = "bg-mustard-40";
    headerTitleColor = "purple-80";
    buttonColor = "purple";
    headerIconsColor = "purple";
  }

  return (
    <>
      <header class={`header ${headerColorWithRebrandClasses}`}>
        <div class="header__logo">
          <Link
            id="header-hero-logo"
            href="/"
            class="header__hero header__logo--link"
            title="Go to home page"
          >
            <figure class="mobile-ipad-visible">
              <img
                class="header__logo--image"
                src={`/img/logo-symbol-${headerIconsColor}.svg`}
                alt="Labcodes logo symbol"
              />
              <figcaption>
                <p class={`header__logo--title text-${headerTitleColor}`}>
                  {props.title}
                </p>
              </figcaption>
            </figure>
            <figure class="large-desktop-visible">
              <img
                class="header__logo--image"
                src={`/img/logo-marca-${headerIconsColor}.svg`}
                alt="Labcodes logo mark"
              />
            </figure>
          </Link>

          <Link
            id="header-content-logo"
            href="/"
            class="header__content header__logo--link hidden"
            title="Go to home page"
          >
            <figure class="mobile-ipad-visible">
              <img
                class="header__logo--image"
                src={`/img/logo-symbol-${headerIconsColor}.svg`}
                alt="Labcodes logo symbol"
              />
              <figcaption>
                <p class={`header__logo--title ${headerTitleColor}`}>
                  {props.title}
                </p>
              </figcaption>
            </figure>
            <figure class="large-desktop-visible">
              <img
                class="header__logo--image"
                src={`/img/logo-marca-${headerIconsColor}.svg`}
                alt="Labcodes logo mark"
              />
            </figure>
          </Link>
        </div>

        <div class="header__hamburger d-flex d-xl-none justify-content-end">
          <a
            type="button"
            id="header-hamburger"
            class="header__hamburger--link"
            title="Open header menu"
          >
            <figure>
              <img
                class="header__hamburger--image header__hero"
                src={`/img/hamburger-${headerIconsColor}.svg`}
                alt="hamburger button menu"
              />
              <img
                class="header__hamburger--image header__content hidden"
                src={`/img/hamburger-${headerIconsColor}.svg`}
                alt="hamburger button menu"
              />
            </figure>
          </a>
        </div>

        <div class="header__menu">
          <ul class="primary_menu_list">
            <li>
              <Link
                class={`link-nav link-nav--header-${props.color}`}
                href="/services"
                title="Go to services page."
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                class={`link-nav link-nav--header-${props.color}`}
                href="/process"
                title="Go to how we work page."
              >
                How we work
              </Link>
            </li>
            <li>
              <Link
                class={`link-nav link-nav--header-${props.color}`}
                href="/about"
                title="Go to about us page."
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                class={`link-nav link-nav--header-${props.color}`}
                href="/careers"
                title="Go to careers page."
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                class={`link-nav link-nav--header-${props.color}`}
                href="/contact"
                title="Go to contact page."
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                class={`link-nav link-nav--header-${props.color}`}
                href="/blog"
                title="Go to our blog page."
              >
                Blog
              </Link>
            </li>
          </ul>

          <ul class="secundary_menu_list hidden">
            <li>
              <Link
                class={`link-nav link-nav--header-${props.secondary_color}`}
                href="/services"
                title="Go to services page."
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                class={`link-nav link-nav--header-${props.secondary_color}`}
                href="/process"
                title="Go to how we work page."
              >
                How we work
              </Link>
            </li>
            <li>
              <Link
                class={`link-nav link-nav--header-${props.secondary_color}`}
                href="/about"
                title="Go to about us page."
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                class={`link-nav link-nav--header-${props.secondary_color}`}
                href="/careers"
                title="Go to careers page."
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                class={`link-nav link-nav--header-${props.secondary_color}`}
                href="/contact"
                title="Go to contact page."
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                class={`link-nav link-nav--header-${props.secondary_color}`}
                href="/blog"
                title="Go to our blog page."
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div class="header__cta">
          <Link
            class={`button button--${buttonColor}`}
            href="/contact"
            title="Go to contact page."
          >
            Talk to an expert
          </Link>
        </div>
      </header>

      <nav id="menu" class="menu-expanded">
        <div class="menu-expanded__header">
          <div class="menu-expanded__logo">
            <img
              src={`/img/logo-marca-yellow.svg`}
              alt="Labcodes logo mark"
            />
          </div>
          <div class="menu-expanded__close d-flex justify-content-end">
            <a
              id="menu-expanded__close"
              type="button"
              title="Close header menu"
            >
              <img
                class="btn-close"
                src="/img/close-button.svg"
                alt="Close Icon"
              />
            </a>
          </div>
        </div>

        <div class="menu-expanded__links">
          <ul>
            <li>
              <Link
                class="link-nav link-nav--touch-menu"
                href="/"
                title="Go to home page."
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                class="link-nav link-nav--touch-menu"
                href="/services"
                title="Go to services page."
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                class="link-nav link-nav--touch-menu"
                href="/process"
                title="Go to how we work page."
              >
                How we work
              </Link>
            </li>
            <li>
              <Link
                class="link-nav link-nav--touch-menu"
                href="/about"
                title="Go to about us page."
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                class="link-nav link-nav--touch-menu"
                href="/contact"
                title="Go to contact page."
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                class="link-nav link-nav--touch-menu"
                href="/careers"
                title="Go to careers page."
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                class="link-nav link-nav--touch-menu"
                href="/blog"
                title="Go to our blog page."
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
