import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";

interface Props {
  id?: string;
  class: string;
  title?: string;
  href: string;
  target?: string;
  rel?: string;
  children: ComponentChildren;
}

const PAGES_SUBDOMAIN = "pages.";

export default function (props: Props) {
  const linkTo = useSignal("");

  // NOTE: Support for different domains: labcodes.us and labcodes.com.br
  // and removing the subdomain from the hostname to redirect to the correct place.
  useEffect(() => {
    let hostname = window.location.origin.replace(PAGES_SUBDOMAIN, "");
    console.log("o hostname=", hostname);
    // We are in localhost?
    if (
      ["localhost", "127.0.0.1", "::1", ""].includes(window.location.hostname)
    ) {
      hostname = "https://labcodes.com.br";
    }

    linkTo.value = hostname + props.href;
  }, []);

  return (
    <a
      {...{
        id: props.id,
        rel: props.rel,
        target: props.target,
        title: props.title,
      }}
      class={props.class}
      href={linkTo}
    >
      {props.children}
    </a>
  );
}
