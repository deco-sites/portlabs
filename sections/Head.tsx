import { asset, Head } from "$fresh/runtime.ts";

export interface Props {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  imageUrl?: string;
  imageAlt?: string;
  faviconUrl?: string;
  styleUrls: string[];
  includeNoIndex?: boolean;
  facebookPixelKey?: string;
  gtmKey?: string;
}

export default function HeadComponent({
  title = "Custom software development & product design | Labcodes",
  description =
    "Labcodes is a full-stack software company that builds web applications. Our team contains experts in Python, Django, React, and Product Design who specializes in developing the product your business needs.",
  keywords =
    "agile, web development, software consulting, django development, ux design, ui design, react, react.js, redux, javascript, django, python, backend, frontend, development, team work, consulting, consultoria, django consulting, python consulting, python development, react development, API, django rest framework, django usa, python usa, python nyc, django nyc, react usa, react nyc, ux design nyc, ui design nyc, python san francisco, django san francisco, react san francisco, ui design san francisco, ux design san francisco",
  url = "https://www.pages.labcodes.com.br",
  imageUrl = "https://www.labcodes.com.br/static/core/imgs/Labcodes_logo.png",
  imageAlt = "Labcodes Software",
  faviconUrl = "https://www.labcodes.com.br/static/core/imgs/favicon.ico",
  styleUrls = [],
  includeNoIndex = true,
  facebookPixelKey = "",
  gtmKey = "",
}: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content="business.business" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content="Labcodes Software" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@labcodes" />
      <meta name="twitter:creator" content="@labcodes" />
      <meta name="twitter:title" content={`${title} | Labcodes`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta
        property="business:contact_data:street_address"
        content="Praça do Derby, 149"
      />
      <meta property="business:contact_data:locality" content="Recife" />
      <meta property="business:contact_data:postal_code" content="52010-140" />
      <meta property="business:contact_data:country_name" content="Brazil" />
      <meta property="business:contact_data:region" content="Pernambuco" />
      <meta
        property="business:contact_data:email"
        content="contact@labcodes.com.br"
      />
      <link
        rel="shortcut icon"
        href={faviconUrl}
        type="image/x-icon"
      >
      </link>

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={"/apple-touch-icon.png"}
      >
      </link>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={"/favicon-32x32.png"}
      >
      </link>
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={"/favicon-16x16.png"}
      >
      </link>
      <link rel="manifest" href={"/site.webmanifest"}></link>
      <link
        rel="mask-icon"
        href={"/safari-pinned-tab.svg"}
        data-color="#003232"
      >
      </link>
      <meta name="msapplication-TileColor" content="#003232" />

      {/* Preconnect domains */}
      <link rel="preconnect" href="https://labcodes.com.br" />
      <link rel="dns-prefetch" href="https://labcodes.com.br" />

      <link rel="preconnect" href="https://p.typekit.net" />
      <link rel="dns-prefetch" href="https://p.typekit.net" />

      {includeNoIndex && <meta name="robots" content="noindex" />}
      {styleUrls?.map((styleUrl: string) => (
        <>
          <link rel="preload" as="style" href={styleUrl}></link>
          <link rel="stylesheet" href={styleUrl}></link>
        </>
      ))}

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @import url("https://p.typekit.net/p.css?s=1&k=cvi1dxd&ht=tk&f=4750.5035.5088.5178.5404.5416.16925.16926.10954.13453.13454.13455.13458.13459.13460.13461.13462.13463&a=12277527&app=typekit&e=css");

          @font-face {
            font-display: swap;
            font-family:"ff-meta-serif-web-pro";
            src:url("https://use.typekit.net/af/2ccb86/0000000000000000773599b7/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("woff2");
            font-display:auto;font-style:italic;font-weight:600;font-stretch:normal;
          }
    
          @font-face {
            font-display: swap;
            font-family:"ff-meta-serif-web-pro";
            src:url("https://use.typekit.net/af/a4e2c3/0000000000000000773599b5/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2");
            font-display:auto;font-style:italic;font-weight:700;font-stretch:normal;
          }
    
          @font-face {
            font-display: swap;
            font-family:"ff-meta-serif-web-pro";
            src:url("https://use.typekit.net/af/920e9b/0000000000000000773599a8/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i9&v=3") format("woff2");
            font-display:auto;font-style:italic;font-weight:900;font-stretch:normal;
          }
    
          @font-face {
            font-display: swap;
            font-family:"ff-meta-serif-web-pro";
            src:url("https://use.typekit.net/af/7ed1f6/0000000000000000773599aa/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2");
            font-display:auto;font-style:normal;font-weight:700;font-stretch:normal;
          }
    
          @font-face {
            font-display: swap;
            font-family:"ff-meta-serif-web-pro";
            src:url("https://use.typekit.net/af/b726cd/0000000000000000773599d5/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3") format("woff2");
            font-display:auto;font-style:normal;font-weight:900;font-stretch:normal;
          }
    
          @font-face {
            font-display: swap;
            font-family:"ff-meta-serif-web-pro";
            src:url("https://use.typekit.net/af/c00e0b/0000000000000000773599ad/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff2");
            font-display:auto;font-style:normal;font-weight:600;font-stretch:normal;
          }
    
          @font-face {
            font-display: swap;
            font-family:"ff-meta-serif-web-pro";
            src:url("https://use.typekit.net/af/861b57/0000000000000000773599a5/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n8&v=3") format("woff2");
            font-display:auto;font-style:normal;font-weight:800;font-stretch:normal;
          }
    
          @font-face {
            font-display: swap;
            font-family:"ff-meta-serif-web-pro";
            src:url("https://use.typekit.net/af/e45bfb/0000000000000000773599c5/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i8&v=3") format("woff2");
            font-display:auto;font-style:italic;font-weight:800;font-stretch:normal;
          }
    
          @font-face {
            font-display: swap;
            font-family:"freight-sans-pro";
            src:url("https://use.typekit.net/af/442215/000000000000000000010b5a/27/l?primer=f592e0a4b9356877842506ce344308576437e4f677d7c9b78ca2162e6cad991a&fvd=n4&v=3") format("woff2");
            font-display:auto;font-style:normal;font-weight:400;font-stretch:normal;
          }
    
          @font-face {
            font-display: swap;
            font-family:"freight-sans-pro";
            src:url("https://use.typekit.net/af/3df5fe/000000000000000000010b5b/27/l?primer=f592e0a4b9356877842506ce344308576437e4f677d7c9b78ca2162e6cad991a&fvd=i4&v=3") format("woff2");
            font-display:auto;font-style:italic;font-weight:400;font-stretch:normal;
          }
    
          @font-face {
            font-display: swap;
            font-family:"freight-sans-pro";
            src:url("https://use.typekit.net/af/1709eb/000000000000000000010b60/27/l?primer=f592e0a4b9356877842506ce344308576437e4f677d7c9b78ca2162e6cad991a&fvd=n7&v=3") format("woff2");
            font-display:auto;font-style:normal;font-weight:700;font-stretch:normal;
          }
    
          @font-face {
            font-display: swap;
            font-family:"freight-sans-pro";
            src:url("https://use.typekit.net/af/65fc7d/000000000000000000010b61/27/l?primer=f592e0a4b9356877842506ce344308576437e4f677d7c9b78ca2162e6cad991a&fvd=i7&v=3") format("woff2");
            font-display:auto;font-style:italic;font-weight:700;font-stretch:normal;
          }
    
          @font-face {
            font-display: swap;
            font-family:"freight-sans-pro";
            src:url("https://use.typekit.net/af/8dd886/000000000000000000010b5c/27/l?primer=f592e0a4b9356877842506ce344308576437e4f677d7c9b78ca2162e6cad991a&fvd=n5&v=3") format("woff2");
            font-display:auto;font-style:normal;font-weight:500;font-stretch:normal;
          }
    
          @font-face {
            font-display: swap;
            font-family:"freight-sans-pro";
            src:url("https://use.typekit.net/af/441f33/000000000000000000010b5d/27/l?primer=f592e0a4b9356877842506ce344308576437e4f677d7c9b78ca2162e6cad991a&fvd=i5&v=3") format("woff2");
            font-display:auto;font-style:italic;font-weight:500;font-stretch:normal;
          }
    
          @font-face {
            font-display: swap;
            font-family:"freight-sans-pro";
            src:url("https://use.typekit.net/af/cef9f3/000000000000000000010b5e/27/l?primer=f592e0a4b9356877842506ce344308576437e4f677d7c9b78ca2162e6cad991a&fvd=n6&v=3") format("woff2");
            font-display:auto;font-style:normal;font-weight:600;font-stretch:normal;
          }
    
          @font-face {
            font-display: swap;
            font-family:"freight-sans-pro";
            src:url("https://use.typekit.net/af/2a72d2/000000000000000000010b5f/27/l?primer=f592e0a4b9356877842506ce344308576437e4f677d7c9b78ca2162e6cad991a&fvd=i6&v=3") format("woff2");
            font-display:auto;font-style:italic;font-weight:600;font-stretch:normal;
          }
    
          @font-face {
            font-display: swap;
            font-family:"freight-sans-pro";
            src:url("https://use.typekit.net/af/3e9574/000000000000000000010b62/27/l?primer=f592e0a4b9356877842506ce344308576437e4f677d7c9b78ca2162e6cad991a&fvd=n9&v=3") format("woff2");
            font-display:auto;font-style:normal;font-weight:900;font-stretch:normal;
          }
    
          @font-face {
            font-display: swap;
            font-family:"freight-sans-pro";
            src:url("https://use.typekit.net/af/dc6d36/000000000000000000010b63/27/l?primer=f592e0a4b9356877842506ce344308576437e4f677d7c9b78ca2162e6cad991a&fvd=i9&v=3") format("woff2");
            font-display:auto;font-style:italic;font-weight:900;font-stretch:normal;
          }
    
          .tk-ff-meta-serif-web-pro { font-family: "ff-meta-serif-web-pro",serif; }
          .tk-freight-sans-pro { font-family: "freight-sans-pro",sans-serif; }
      `,
        }}
      >
      </style>
      {/* TODO: Procurar o script */}
      {/* <script async id="quicklink" src="/scripts/quicklink.umd.js"></script> */}
      <script
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html:
            `window.mobile=false;(function(a){if(/(android|bb\\d+|meego).+mobile|avantgo|bada\\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))window.mobile=true})(navigator.userAgent||navigator.vendor||window.opera);`,
        }}
      >
      </script>

      {/* Facebook pixel */}

      {facebookPixelKey && (
        <>
          <script
            type="text/partytown"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'http://localhost:8000/proxy?url=https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${facebookPixelKey}');
                fbq('track', 'PageView');
              `,
            }}
          >
          </script>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
                <img
                  height="1"
                  width="1"
                  style="display:none"
                  src="https://www.facebook.com/tr?id=${facebookPixelKey}&ev=PageView&noscript=1"
                />
              `,
            }}
          >
          </noscript>
        </>
      )}

      {/* GTM */}
      {gtmKey && (
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: (`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmKey}');
              `),
          }}
        >
        </script>
      )}

      {
        /*
        TODO: Wrong but it works for now.
        Eventually we will convert this to preact.
        */
      }
      <script async src="/js/header.js" />
    </Head>
  );
}
