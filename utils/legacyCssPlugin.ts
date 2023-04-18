import { Plugin } from "$fresh/server.ts";

const STYLE_ELEMENT_ID = "__FRSH_LEGACY_CSS";
const LEGACY_CSS_PATH = "./static/css/legacy.min.css";

export default function legacyCss(options?: { selfURL: string }): Plugin {
  const main = `data:application/javascript,import hydrate from "${
    new URL("./utils/legacyCss.ts", import.meta.url).href
  }";
  import options from "${options?.selfURL}";
  export default function(state) { hydrate(options, state); }`;
  return {
    name: "twind",
    entrypoints: { "main": main },
    render(ctx) {
      const res = ctx.render();
      const cssText = Deno.readTextFileSync(LEGACY_CSS_PATH);
      const scripts = [];
      if (res.requiresHydration) {
        scripts.push({ entrypoint: "main", state: [] });
      }
      return {
        scripts,
        styles: [{ cssText, id: STYLE_ELEMENT_ID }],
      };
    },
  };
}
