import ScrollBottom from "$start/islands/ui/ScrollBottom.tsx";

export interface Props {
  mainColor?: string;
  title?: string;
  titleColor?: string;
  preText?: string;
  preTextColor?: string;
  includesScrollToBottom?: boolean;
  image?: string;
}

export default function ({
  mainColor = "coral",
  title = "Healthy software for a healthy business model",
  titleColor = "#ffffff",
  preText = "Splendid Spoon",
  preTextColor = "#ffffff",
  includesScrollToBottom = true,
  image =
    "https://labcodes.com.br/static/core/imgs/cases/splendid/hero-img.png",
}: Props) {
  return (
    <section
      class="hero-cases"
      style={{ backgroundColor: mainColor, maxHeight: "800px" }}
    >
      <div class="hero-cases__content" style={{ maxWidth: "573px" }}>
        <p
          class="topic-heading hero-cases__title"
          style={{ color: preTextColor }}
        >
          {preText}
        </p>
        <h1 class="hero-cases__subtitle" style={{ color: titleColor }}>
          {title}
        </h1>
      </div>
      {image && <img class="hero-cases__img" src={image} />}
      {includesScrollToBottom && <ScrollBottom />}
    </section>
  );
}
