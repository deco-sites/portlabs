import { Plugin } from "$fresh/server.ts";

const STYLE_ELEMENT_ID = "__FRSH_LEGACY_CSS";
const LEGACY_CSS_PATH = "./static/css/legacy.min.css";

export default function legacyCss(): Plugin {
  return {
    name: "legacyCss",
    render(ctx) {
      ctx.render();
      const cssText = Deno.readTextFileSync(LEGACY_CSS_PATH);
      return {
        styles: [{ cssText, id: STYLE_ELEMENT_ID }],
      };
    },
  };
}
