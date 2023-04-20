import { Handlers } from "$fresh/server.ts";

// Adicione aqui os scripts que você deseja proxiar
const ALLOWLIST_URLS = [
  "https://connect.facebook.net/en_US/fbevents.js",
  "https://www.facebook.com/tr?id=196893035003333&ev=PageView&noscript=1"
];

export const handler: Handlers = {
  GET: async (req) => {
    const url = (new URL(req.url)).searchParams.get("url");

    if (!url || !ALLOWLIST_URLS.includes(url)) {
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
