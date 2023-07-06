import { useEffect, useRef } from "preact/hooks";
import { useSignal } from "@preact/signals";

export interface Props {
  isActive?: boolean;
}

export default function (props: Props) {
  const { isActive } = props;

  const scrollIsActive = useSignal(isActive);
  const ref = useRef<HTMLInputElement>(null);

  const onClick = () => {
    if (ref.current) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const onScroll = () => {
    const bHeight =
      document.documentElement.scrollTop || document.body.scrollTop;
    const distanceBetweenButtonAndSection = 160;

    if (bHeight >= distanceBetweenButtonAndSection) {
      scrollIsActive.value = true;
    } else {
      scrollIsActive.value = false;
    }
    center;
  };

  useEffect(() => {
    (window as Window).addEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      id="scroll-up"
      ref={ref}
      class={`scroll-indicator ${scrollIsActive.value && "is-active"}`}
      onClick={onClick}>
      <button class="button_scroll" onClick={onClick}>
        <img src="/img/arrow.svg" alt="Arrow Illustration" />
      </button>
    </div>
  );
}
