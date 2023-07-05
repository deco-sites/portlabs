import ScrollTop from "$start/islands/ui/ScrollTop.tsx";
import Link from "../../islands/Link.tsx";

export interface Props {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  includesScrollTop?: boolean;
}

export default function Footer(props: Props) {
  const year = new Date().getFullYear();

  const {
    title = "Let's build something cool together!",
    ctaText = "Talk about your project",
    ctaLink = "https://labcodes.com.br/contact",
    includesScrollTop = false,
  } = props;

  return (
    <footer id="footer" class="footer section section--bg">
      {includesScrollTop && <ScrollTop />}

      <div class="footer-content">
        <div class="footer-header">
          <div class="footer-header__content">
            <p class="footer-header__title">{title}</p>
          </div>
          <div class="footer-header__content mt-6">
            <div class="footer-header__form">
              <Link
                id="footer-cta-button"
                href={ctaLink}
                class="button button--coral">
                {ctaText}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-signature">
        <div class="footer-links">
          <div class="footer-newsletter-wrapper">
            <div class="footer-newsletter">
              <ul class="social-midia-icons">
                <li>
                  <a
                    href="https://twitter.com/labcodes/"
                    class="social-midia-icon twitter"
                    target="_blank"
                    rel="noopener"
                    title="Go to Labcodes Twitter profile">
                    &nbsp;
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/labcodes/"
                    class="social-midia-icon instagram"
                    target="_blank"
                    rel="noopener"
                    title="Go to Labcodes Instagram profile">
                    &nbsp;
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/labcodes/"
                    class="social-midia-icon linkedin"
                    target="_blank"
                    rel="noopener"
                    title="Go to Labcodes LinkedIn profile">
                    &nbsp;
                  </a>
                </li>
              </ul>
            </div>
          </div>{" "}
        </div>
        <div class="footer-signature__item">
          <div class="footer-signature__icons">
            <img src="/img/cc.svg" alt="cc" />
            <img src="/img/group.svg" alt="by" />
            <img src="/img/logo-footer-icon.svg" alt="Labcodes logo mark" />
          </div>
          <div class="footer-signature__content">
            <p>
              The content of our blog is licenced under Creative Commons
              Attribution 4.0 International.
            </p>
            <div class="footer-signature__local-wrapper">
              <div class="footer-signature__local-item">
                <p>
                  Designed and coded with <span class="love">❤</span> in Recife.
                </p>
              </div>
              <div class="footer-signature__local-item d-flex flex-row flex-nowrap">
                <p class="mr-1">Directly from the</p>
                <a
                  href="http://manguez.al/"
                  target="_blank"
                  rel="noopener"
                  title="Go to Manguezal page">
                  <img src="/img/logo-manguezal.svg" alt="Manguezal logo" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-signature__item">
          <div class="footer-signature__contact">
            <div class="footer-signature__address">
              <p>contact(at)labcodes.com.br</p>
              <p>
                Praça do Derby, 149, Sala 1109, Derby, Recife – PE – Brazil, CEP
                52010140
              </p>
            </div>
            <p>© {year} LABCODES SOFTWARE STUDIO.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
