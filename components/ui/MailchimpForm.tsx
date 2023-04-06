export default function () {
  return (
    <>
      <style type="text/css">
        {`
          #mc_embed_signup {
            background: transparent;
            clear: left;
            font: 'Freight Sans Pro - Medium', Arial, sans-serif;
          }
          .mc-field-group {
            margin-bottom: 28px;
          }
          .cookie-and-privacy-policy {
            font-family: 'freight-sans-pro', sans-serif;
            font-weight: 500;
            font-style: normal;
            font-feature-settings: 'pnum' on, 'lnum' on;
            margin-bottom: 16px;
            display: block;
          }
          .cookie-and-privacy-policy.coral {
            color: #BC442F;
          }
          .cookie-and-privacy-policy.purple {
            color: #3d235c;
          }
          .cookie-and-privacy-policy a {
            color: inherit;
            text-decoration: underline;
          }
        `}
      </style>

      <div id="mc_embed_signup">
        <small class="cookie-and-privacy-policy coral">
          Subscription implies consent to our{" "}
          <a href="https://labcodes.com.br/cookies-and-privacy-policy">
            privacy policy
          </a>
        </small>

        <form
          action="https://labcodes.us19.list-manage.com/subscribe/post?u=3adb37d43c28812ea3cd05c03&amp;id=1b86003cc8"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate input-form"
          target="_blank"
          rel="noopener"
          autocomplete="off"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <div class="mc-field-group input input__background--teal">
              <input
                type="text"
                class="input__field required"
                name="FNAME"
                id="mce-FNAME"
                placeholder=" "
                required
              />
              <label class="input__label">Your first and last name</label>
              <p class="input__message" id="name-error-message">
                This field may not be blank.
              </p>
            </div>

            <div class="mc-field-group input input__background--teal">
              <input
                type="email"
                class="input__field required"
                name="EMAIL"
                id="mce-EMAIL"
                placeholder=" "
                required
              />
              <label class="input__label">Your e-mail here</label>
              <p class="input__message">This email is not valid</p>
            </div>

            <div id="mce-responses" class="clear">
              <div
                class="response"
                id="mce-error-response"
                style="display:none"
              >
              </div>
              <div
                class="response"
                id="mce-success-response"
                style="display:none"
              >
              </div>
            </div>

            <div style="position: absolute; left: -5000px;" aria-hidden="true">
              <input
                type="text"
                name="b_3adb37d43c28812ea3cd05c03_1b86003cc8"
                tabIndex={-1}
                value=""
              />
            </div>

            <div class="clear">
              <button
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="button button--purple"
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
