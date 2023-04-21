import { Handlers } from "$fresh/server.ts";

// Adicione aqui os scripts que você deseja proxiar
const ALLOWLIST_URLS = [
  "https://connect.facebook.net/en_US/fbevents.js",
  "https://www.facebook.com/tr?id=196893035003333&ev=PageView&noscript=1",
  "https://connect.facebook.net/signals/config/196893035003333?v=2.9.102&r=stable",
  "https://www.google-analytics.com/analytics.js",
  "https://www.googletagmanager.com/gtm.js?id=GTM-PG7VBQ3",
  "https://snap.licdn.com/li.lms-analytics/insight.min.js",
  "https://px.ads.linkedin.com/collect/?pid=1609042&fmt=gif",
];

export const handler: Handlers = {
  GET: async (req) => {
    const url = (new URL(req.url)).searchParams.get("url");

    if (!url || !ALLOWLIST_URLS.includes(url)) {
      console.log("url: ", url);
      return new Response(null, { status: 404 });
    }

    const proxyRequest = new Request(
      url,
      {
        headers: req.headers,
        method: req.method,
        body: req.body,
        redirect: "follow",
      },
    );

    const response = await fetch(proxyRequest);
    const headers = new Headers(response.headers);
    headers.set("access-control-allow-origin", "*");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
