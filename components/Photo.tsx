export interface Props {
  image?: string;
}

export default function ({
  image =
    "https://labcodes.com.br/static/bundles/assets/src/imgs/cases/splendid/challenge-photo.png",
}: Props) {
  return (
    <section class="challenge-splendid-spoon">
      <span
        class="challenge-splendid-spoon__img"
        style={{ backgroundImage: `url(${image})` }}
      >
        &nbsp;
      </span>
    </section>
  );
}
