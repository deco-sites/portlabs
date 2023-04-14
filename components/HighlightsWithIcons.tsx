export interface Props {
  backgroundColor?: string;
  titleColor?: string;
  subtitleColor?: string;
  highlightsTexts?: string[];
  highlightsIcons?: string[];
}

export default function ({
  backgroundColor = "#FFACA4",
  titleColor = "#000000bf",
  highlightsTexts = [
    "Deliver a new product Mete a Colher could sell to their clients.",
    "Implement a faster screening process for social workers to help victims of harassment.",
    "Guarantee a safe space for women to report harassment while having their privacy respected.",
  ],
  highlightsIcons = ["django", "react", "javascript"],
}: Props) {
  const highlightsCount = highlightsTexts.length;

  return (
    <section class="summary-loadsmart" style={{ backgroundColor }}>
      <div class="summary-loadsmart__numbers">
        <div class="summary-loadsmart__numbers-group">
          {[...Array(highlightsCount).keys()].map((index) => (
            <div
              class="summary-loadsmart__numbers-item items-center	"
              style={{
                paddingTop: "1rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.75rem",
                paddingLeft: "0.5rem",
              }}
            >
              <div class="custom-tooltip">
                <img
                  class="summary-loadsmart__numbers-icon"
                  src={`/img/${highlightsIcons[index]}.svg`}
                  alt="Arrow Trending Checkmark"
                  style={{
                    "--size": "40px",
                  }}
                />
              </div>
              <p
                class="summary-loadsmart__numbers-text"
                style={{ color: titleColor }}
              >
                {highlightsTexts[index]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
