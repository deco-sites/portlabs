interface Highlight {
  icon?: string;
  subtitle?: string;
}

export interface Props {
  backgroundColor?: string;
  titleColor?: string;
  subtitleColor?: string;
  highlights?: Highlight[];
}

export default function ({
  backgroundColor = "#FFACA4",
  titleColor = "#000000bf",
  subtitleColor = "#000000bf",
  highlights = [],
}: Props) {
  if (highlights.length === 0) {
    highlights.push(
      { icon: "react", subtitle: "increase of clients base" },
      { icon: "react", subtitle: "dispatch time dropped" },
      { icon: "react", subtitle: "conversion increase" },
      { icon: "react", subtitle: "decrease of production cost" },
      { icon: "react", subtitle: "rise in average orders" },
      { icon: "react", subtitle: "new products added" },
    );
  }

  const totalItems = highlights.length;
  const middle = totalItems / 2;

  return (
    <section class="summary-loadsmart">
      <div class="summary-loadsmart__numbers">
        <div class="summary-loadsmart__numbers-group">
          <div class="summary-loadsmart__numbers-item">
            <div class="custom-tooltip">
              <img
                class="summary-loadsmart__numbers-icon"
                src="img/react.svg"
                alt="Arrow Trending Checkmark"
              />
            </div>
            <p class="summary-loadsmart__numbers-text">
              Increase the feature delivery load.
            </p>
          </div>
          <div class="summary-loadsmart__numbers-item">
            <div class="custom-tooltip">
              <img
                class="summary-loadsmart__numbers-icon"
                src="img/react.svg"
                alt="Arrow Expand"
              />
            </div>
            <p class="summary-loadsmart__numbers-text">
              Expand the tool, that's now part of a larger product
            </p>
          </div>
          <div class="summary-loadsmart__numbers-item">
            <div class="custom-tooltip">
              <img
                class="summary-loadsmart__numbers-icon"
                src="img/react.svg"
                alt="Sidebar Search"
              />
            </div>
            <p class="summary-loadsmart__numbers-text">
              Support squads, leveraging results from the discovery process
            </p>
          </div>

          {/* NOTE: Hack to force the following two items to break into a new line --> */}
          <div class="d-none d-md-block d-xl-none" style="flex: 0 0 100%"></div>

          <div class="summary-loadsmart__numbers-item">
            <div class="custom-tooltip">
              <img
                class="summary-loadsmart__numbers-icon"
                src="img/react.svg"
                alt="flow"
              />
            </div>
            <p class="summary-loadsmart__numbers-text">
              Encourage an end-to-end development process.
            </p>
          </div>
          <div class="summary-loadsmart__numbers-item">
            <div class="custom-tooltip">
              <img
                class="summary-loadsmart__numbers-icon"
                src="img/react.svg"
                alt="People Community"
              />
            </div>
            <p class="summary-loadsmart__numbers-text">
              Increase in both clients and users on the platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
