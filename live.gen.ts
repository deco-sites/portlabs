// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { DecoManifest } from "$live/types.ts";
import * as $0 from "./functions/LoadGitHubRaw.ts";
import * as $$$$0 from "./routes/_app.tsx";
import * as $$$$$0 from "./islands/ui/Navbar.tsx";
import * as $$$$$1 from "./islands/ui/Link.tsx";
import * as $$$$$2 from "./islands/ui/ScrollTop.tsx";
import * as $$$$$3 from "./islands/ui/LinkTo.tsx";
import * as $$$$$4 from "./islands/ui/ScrollBottom.tsx";
import * as $$$$$$$$0 from "./sections/Hero.tsx";
import * as $$$$$$$$1 from "./sections/Navbar.tsx";
import * as $$$$$$$$2 from "./sections/HighlightsWithIcons.tsx";
import * as $$$$$$$$3 from "./sections/HighlightsWithNumbers.tsx";
import * as $$$$$$$$4 from "./sections/Footer.tsx";
import * as $$$$$$$$5 from "./sections/Testimonial2.tsx";
import * as $$$$$$$$6 from "./sections/Head.tsx";
import * as $$$$$$$$7 from "./sections/Testimonial3.tsx";
import * as $$$$$$$$8 from "./sections/HeroWithImage.tsx";
import * as $$$$$$$$9 from "./sections/Testimonial1.tsx";
import * as $$$$$$$$10 from "./sections/Challenge.tsx";
import * as $$$$$$$$11 from "./sections/Photo.tsx";
import * as $$$$$$$$12 from "./sections/CTA.tsx";
import * as $$$$$$$$13 from "./sections/ScrollTop.tsx";
import * as $$$$$$$$14 from "./sections/MainTestimonial.tsx";
import * as $$$$$$$$15 from "./sections/Solution.tsx";
import * as $$$$$$$$16 from "./sections/Solution2.tsx";
import * as $$$$$$$$17 from "./sections/Solution3.tsx";
import * as $$$$$$$$18 from "./sections/About.tsx";
import * as $$$$$$$$19 from "./sections/Summary.tsx";
import * as $live_middleware from "$live/routes/_middleware.ts";
import * as $live_workbench from "$live/routes/live/workbench.ts";
import * as $live_invoke from "$live/routes/live/invoke/index.ts";
import * as $live_editorData from "$live/routes/live/editorData.ts";
import * as $live_inspect from "$live/routes/live/inspect.ts";
import * as $live_meta from "$live/routes/live/_meta.ts";
import * as $live_previews from "$live/routes/live/previews/[...block].tsx";
import * as $live_catchall from "$live/routes/[...catchall].tsx";
import * as i1$0 from "$live/handlers/routesSelection.ts";
import * as i1$1 from "$live/handlers/router.ts";
import * as i1$2 from "$live/handlers/devPage.ts";
import * as i1$3 from "$live/handlers/fresh.ts";
import * as i1$$0 from "$live/pages/LivePage.tsx";
import * as i1$$$0 from "$live/sections/PageInclude.tsx";
import * as i1$$$$0 from "$live/matchers/MatchDate.ts";
import * as i1$$$$1 from "$live/matchers/MatchUserAgent.ts";
import * as i1$$$$2 from "$live/matchers/MatchSite.ts";
import * as i1$$$$3 from "$live/matchers/MatchMulti.ts";
import * as i1$$$$4 from "$live/matchers/MatchRandom.ts";
import * as i1$$$$5 from "$live/matchers/MatchEnvironment.ts";
import * as i1$$$$6 from "$live/matchers/MatchAlways.ts";
import * as i1$$$$$0 from "$live/flags/audience.ts";
import * as i1$$$$$1 from "$live/flags/everyone.ts";

const manifest = {
  "functions": {
    "deco-sites/portlabs/functions/LoadGitHubRaw.ts": $0,
  },
  "routes": {
    "./routes/_app.tsx": $$$$0,
    "./routes/_middleware.ts": $live_middleware,
    "./routes/live/workbench.ts": $live_workbench,
    "./routes/live/invoke/index.ts": $live_invoke,
    "./routes/live/editorData.ts": $live_editorData,
    "./routes/live/inspect.ts": $live_inspect,
    "./routes/live/_meta.ts": $live_meta,
    "./routes/live/previews/[...block].tsx": $live_previews,
    "./routes/[...catchall].tsx": $live_catchall,
  },
  "islands": {
    "./islands/ui/Navbar.tsx": $$$$$0,
    "./islands/ui/Link.tsx": $$$$$1,
    "./islands/ui/ScrollTop.tsx": $$$$$2,
    "./islands/ui/LinkTo.tsx": $$$$$3,
    "./islands/ui/ScrollBottom.tsx": $$$$$4,
  },
  "sections": {
    "deco-sites/portlabs/sections/Hero.tsx": $$$$$$$$0,
    "deco-sites/portlabs/sections/Navbar.tsx": $$$$$$$$1,
    "deco-sites/portlabs/sections/HighlightsWithIcons.tsx": $$$$$$$$2,
    "deco-sites/portlabs/sections/HighlightsWithNumbers.tsx": $$$$$$$$3,
    "deco-sites/portlabs/sections/Footer.tsx": $$$$$$$$4,
    "deco-sites/portlabs/sections/Testimonial2.tsx": $$$$$$$$5,
    "deco-sites/portlabs/sections/Head.tsx": $$$$$$$$6,
    "deco-sites/portlabs/sections/Testimonial3.tsx": $$$$$$$$7,
    "deco-sites/portlabs/sections/HeroWithImage.tsx": $$$$$$$$8,
    "deco-sites/portlabs/sections/Testimonial1.tsx": $$$$$$$$9,
    "deco-sites/portlabs/sections/Challenge.tsx": $$$$$$$$10,
    "deco-sites/portlabs/sections/Photo.tsx": $$$$$$$$11,
    "deco-sites/portlabs/sections/CTA.tsx": $$$$$$$$12,
    "deco-sites/portlabs/sections/ScrollTop.tsx": $$$$$$$$13,
    "deco-sites/portlabs/sections/MainTestimonial.tsx": $$$$$$$$14,
    "deco-sites/portlabs/sections/Solution.tsx": $$$$$$$$15,
    "deco-sites/portlabs/sections/Solution2.tsx": $$$$$$$$16,
    "deco-sites/portlabs/sections/Solution3.tsx": $$$$$$$$17,
    "deco-sites/portlabs/sections/About.tsx": $$$$$$$$18,
    "deco-sites/portlabs/sections/Summary.tsx": $$$$$$$$19,
    "$live/sections/PageInclude.tsx": i1$$$0,
  },
  "handlers": {
    "$live/handlers/routesSelection.ts": i1$0,
    "$live/handlers/router.ts": i1$1,
    "$live/handlers/devPage.ts": i1$2,
    "$live/handlers/fresh.ts": i1$3,
  },
  "pages": {
    "$live/pages/LivePage.tsx": i1$$0,
  },
  "matchers": {
    "$live/matchers/MatchDate.ts": i1$$$$0,
    "$live/matchers/MatchUserAgent.ts": i1$$$$1,
    "$live/matchers/MatchSite.ts": i1$$$$2,
    "$live/matchers/MatchMulti.ts": i1$$$$3,
    "$live/matchers/MatchRandom.ts": i1$$$$4,
    "$live/matchers/MatchEnvironment.ts": i1$$$$5,
    "$live/matchers/MatchAlways.ts": i1$$$$6,
  },
  "flags": {
    "$live/flags/audience.ts": i1$$$$$0,
    "$live/flags/everyone.ts": i1$$$$$1,
  },
  "config": config,
  "baseUrl": import.meta.url,
};

export type Manifest = typeof manifest;

export default manifest satisfies DecoManifest;
