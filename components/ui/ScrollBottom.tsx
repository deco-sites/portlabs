import { useEffect, useRef } from "preact/hooks";
import { useSignal } from "@preact/signals";

export default function () {
  const scrollIsActive = useSignal(true);
  const ref = useRef<HTMLInputElement>(null);

  const onClick = () => {
    const navbarOffset = 7;

    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop + navbarOffset,
        behavior: "smooth",
      });
    }
  };

  const onScroll = () => {
    const bHeight = document.documentElement.scrollTop ||
      document.body.scrollTop;
    const distanceBetweenButtonAndSection = 160;

    if (
      bHeight >= distanceBetweenButtonAndSection
    ) {
      scrollIsActive.value = false;
    } else {
      scrollIsActive.value = true;
    }
  };

  useEffect(() => {
    (window as Window).addEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      id="scroll-down"
      ref={ref}
      class={`scroll-indicator ${scrollIsActive.value && "is-active"}`}
      onClick={onClick}
    >
      <button class="button_scroll" onClick={onClick}>
        <img src="/img/arrow.svg" alt="Arrow Illustration" />
      </button>
    </div>
  );
}
