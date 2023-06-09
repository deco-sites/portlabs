/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="deno.ns" />
/// <reference lib="esnext" />

import { start } from "$fresh/server.ts";
import { $live } from "$live/mod.ts";
import partytownPlugin from "partytown/mod.ts";
import manifest from "./live.gen.ts";
import site from "./site.json" assert { type: "json" };
import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

await start($live(manifest, site), {
  plugins: [
    partytownPlugin(),
    twindPlugin({
      ...twindConfig,
      selfURL: new URL("./twind.config.ts", import.meta.url).href,
    }),
  ],
});
