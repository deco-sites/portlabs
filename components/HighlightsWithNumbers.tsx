interface Highlight {
  title?: string;
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
      { title: "50%", subtitle: "increase of clients base" },
      { title: "42’", subtitle: "dispatch time dropped" },
      { title: "+30%", subtitle: "conversion increase" },
      { title: "10%", subtitle: "decrease of production cost" },
      { title: "+2x", subtitle: "rise in average orders" },
      { title: "3", subtitle: "new products added" },
    );
  }

  const totalItems = highlights.length;
  const middle = totalItems / 2;

  return (
    <div class="summary-splendid-spoon__numbers" style={{ backgroundColor }}>
      <div class="summary-splendid-spoon__numbers-group">
        {highlights.slice(0, middle).map(({ title, subtitle }) => (
          <div class="summary-splendid-spoon__numbers-item">
            <h4 style={{ color: titleColor }}>{title}</h4>
            <span style={{ color: subtitleColor }}>
              {subtitle}
            </span>
          </div>
        ))}
      </div>
      <div class="summary-splendid-spoon__numbers-group">
        {highlights.slice(middle, totalItems).map(({ title, subtitle }) => (
          <div class="summary-splendid-spoon__numbers-item">
            <h4 style={{ color: titleColor }}>{title}</h4>
            <span style={{ color: subtitleColor }}>
              {subtitle}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
