import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        <meta name="description" content="Portfolio website Mehdi Alouane, full stack developer, backend developer" />
        <link rel="canonical" href="https://mehdi-alouane.github.io" />
        <meta property="og:title" content="Mehdi Alouane | Full Stack Developer" />
        <meta property="og:description" content="Portfolio website of Mehdi Alouane, showcasing skills in full stack and backend development." />
        <meta property="og:image" content="/images/dev_image.jpeg" />
        <meta property="og:url" content="https://mehdi-alouane.github.io" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mehdi Alouane | Full Stack Developer" />
        <meta name="twitter:description" content="Portfolio website of Mehdi Alouane, full stack developer." />
        <meta name="twitter:image" content="/images/dev_image.jpeg" />

        <script defer src="https://cloud.umami.is/script.js" data-website-id="d8ffb960-0066-4efc-ab07-95b4a1cfc5a9"></script>
      </Head>
      <body>
        <Main />
        <NextScript />

        <Script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Mehdi Alouane",
                "jobTitle": "Full Stack Developer",
                "url": "https://mehdi-alouane.github.io",
                "sameAs": [
                  "https://linkedin.com/in/mehdi-alouane",
                  "https://github.com/mehdi-alouane"
                ]
              }),
            }}
          />
      </body>
    </Html>
  );
}
