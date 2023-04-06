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

const headerHamburgerCustomizedClassses =
  "d-flex d-xl-none justify-content-end";
const menuExpandedCustomizedClasses = "d-flex justify-content-end";

export default function Navbar(props: Props) {
  return (
    <>
      <header class={`header header-color__${props.color}`}>
        <div class="header__logo">
          <a
            id="header-hero-logo"
            href="/"
            class="header__hero header__logo--link"
            title="Go to home page"
          >
            <figure class="mobile-ipad-visible">
              <img
                class="header__logo--image"
                src="img/logo-symbol-yellow.svg"
                alt="Labcodes logo symbol"
              />
              <figcaption>
                <p class="header__logo--title yellow">{props.title}</p>
              </figcaption>
            </figure>
            <figure class="large-desktop-visible">
              <img
                class="header__logo--image"
                src="img/logo-marca-yellow.svg"
                alt="Labcodes logo mark"
              />
            </figure>
          </a>

          <a
            id="header-content-logo"
            href="/"
            class="header__content header__logo--link hidden"
            title="Go to home page"
          >
            <figure class="mobile-ipad-visible">
              <img
                class="header__logo--image"
                src="img/logo-symbol-yellow.svg"
                alt="Labcodes logo symbol"
              />
              <figcaption>
                <p class="header__logo--title yellow">{props.title}</p>
              </figcaption>
            </figure>
            <figure class="large-desktop-visible">
              <img
                class="header__logo--image"
                src="img/logo-marca-yellow.svg"
                alt="Labcodes logo mark"
              />
            </figure>
          </a>
        </div>

        <div class={`header__hamburger ${headerHamburgerCustomizedClassses}`}>
          <a
            id="header-hamburger"
            type="button"
            class="header__hamburger--link"
            title="Open header menu"
          >
            <figure>
              <img
                class="header__hamburger--image header__hero"
                src="img/hamburger-yellow.svg"
                alt="hamburger button menu"
              />
              <img
                class="header__hamburger--image header__content hidden"
                src="img/hamburger-yellow.svg"
                alt="hamburger button menu"
              />
            </figure>
          </a>
        </div>

        <div class="header__menu">
          <ul class="primary_menu_list">
            <li>
              <a
                class={`link-nav link-nav--header-${props.color}`}
                href="https://labcodes.com.br/services"
                title="Go to services page."
              >
                Services
              </a>
            </li>
            <li>
              <a
                class={`link-nav link-nav--header-${props.color}`}
                href="https://labcodes.com.br/process"
                title="Go to how we work page."
              >
                How we work
              </a>
            </li>
            <li>
              <a
                class={`link-nav link-nav--header-${props.color}`}
                href="https://labcodes.com.br/about"
                title="Go to about us page."
              >
                About us
              </a>
            </li>
            <li>
              <a
                class={`link-nav link-nav--header-${props.color}`}
                href="https://labcodes.com.br/careers"
                title="Go to careers page."
              >
                Careers
              </a>
            </li>
            <li>
              <a
                class={`link-nav link-nav--header-${props.color}`}
                href="https://labcodes.com.br/contact"
                title="Go to contact page."
              >
                Contact
              </a>
            </li>
            <li>
              <a
                class={`link-nav link-nav--header-${props.color}`}
                href="https://labcodes.com.br/blog"
                title="Go to our blog page."
              >
                Blog
              </a>
            </li>
          </ul>

          <ul class="secundary_menu_list hidden">
            <li>
              <a
                class={`link-nav link-nav--header-${props.secondary_color}`}
                href="https://labcodes.com.br/services"
                title="Go to services page."
              >
                Services
              </a>
            </li>
            <li>
              <a
                class={`link-nav link-nav--header-${props.secondary_color}`}
                href="https://labcodes.com.br/process"
                title="Go to how we work page."
              >
                How we work
              </a>
            </li>
            <li>
              <a
                class={`link-nav link-nav--header-${props.secondary_color}`}
                href="https://labcodes.com.br/about"
                title="Go to about us page."
              >
                About us
              </a>
            </li>
            <li>
              <a
                class={`link-nav link-nav--header-${props.secondary_color}`}
                href="https://labcodes.com.br/careers"
                title="Go to careers page."
              >
                Careers
              </a>
            </li>
            <li>
              <a
                class={`link-nav link-nav--header-${props.secondary_color}`}
                href="https://labcodes.com.br/contact"
                title="Go to contact page."
              >
                Contact
              </a>
            </li>
            <li>
              <a
                class={`link-nav link-nav--header-${props.secondary_color}`}
                href="https://labcodes.com.br/blog"
                title="Go to our blog page."
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div class="header__cta">
          <a
            class="button button--mustard"
            href="https://labcodes.com.br/contact"
            title="Go to contact page."
          >
            get an estimate
          </a>
        </div>
      </header>

      <nav id="menu" class="menu-expanded">
        <div class="menu-expanded__header">
          <div class="menu-expanded__logo">
            <img src="img/logo-marca-yellow.svg" alt="Labcodes logo mark" />
          </div>
          <div class={`menu-expanded__close ${menuExpandedCustomizedClasses}`}>
            <a
              id="menu-expanded__close"
              type="button"
              title="Close header menu"
            >
              <img
                class="btn-close"
                src="img/close-button.svg"
                alt="Close Icon"
              />
            </a>
          </div>
        </div>

        <div class="menu-expanded__links">
          <ul>
            <li>
              <a
                class="link-nav link-nav--touch-menu"
                href="https://labcodes.com.br"
                title="Go to home page."
              >
                Home
              </a>
            </li>
            <li>
              <a
                class="link-nav link-nav--touch-menu"
                href="https://labcodes.com.br/services"
                title="Go to services page."
              >
                Services
              </a>
            </li>
            <li>
              <a
                class="link-nav link-nav--touch-menu"
                href="https://labcodes.com.br/process"
                title="Go to how we work page."
              >
                How we work
              </a>
            </li>
            <li>
              <a
                class="link-nav link-nav--touch-menu"
                href="https://labcodes.com.br/about"
                title="Go to about us page."
              >
                About us
              </a>
            </li>
            <li>
              <a
                class="link-nav link-nav--touch-menu"
                href="https://labcodes.com.br/contact"
                title="Go to contact page."
              >
                Contact
              </a>
            </li>
            <li>
              <a
                class="link-nav link-nav--touch-menu"
                href="https://labcodes.com.br/careers"
                title="Go to careers page."
              >
                Careers
              </a>
            </li>
            <li>
              <a
                class="link-nav link-nav--touch-menu"
                href="https://labcodes.com.br/blog"
                title="Go to our blog page."
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
