/** @format */
import React from "react";

export function Head({
    data
}) {
    const seo = data.wpPage?.seo ?? data.wpArtykul?.seo ?? data.wpKolekcje?.seo ?? data.wpWystawa?.seo
    const canonical = "https://auto-welt.info" + seo.opengraphUrl;

    return (
        <>
            <meta charSet="utf-8" />
            <meta name="robots" />
            <meta property="og:site_name" content={seo.opengraphSiteName} />

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Organization",
                            "@id": "https://auto-welt.info/#organization",
                            name: "Auto-welt.info",
                            url: "https://auto-welt.info/",
                            sameAs: [
                                "https://www.facebook.com/AutoWeltInfo/",
                                "https://www.instagram.com/autoweltinfo/",
                            ],
                            logo: {
                                "@type": "ImageObject",
                                "@id": "https://auto-welt.info/#logo",
                                inLanguage: "pl-PL",
                                url: "https://data.auto-welt.info/wp-content/uploads/2022/11/logo-footer-desktop.png",
                                width: 262,
                                height: 120,
                                caption: "Auto-welt.info",
                            },
                            image: { "@id": "https://auto-welt.info/#logo" },
                        },
                        {
                            "@type": "WebSite",
                            "@id": "https://auto-welt.info/#website",
                            url: "https://auto-welt.info/",
                            name: "Auto-welt.info",
                            description:
                                "Auto-welt.info wystawy modeli samochodów",
                            publisher: {
                                "@id": "https://auto-welt.info/#organization",
                            },
                            potentialAction: [
                                {
                                    "@type": "SearchAction",
                                    target: "https:/auto-welt.info/?s={search_term_string}",
                                    "query-input":
                                        "required name=search_term_string",
                                },
                            ],
                            inLanguage: "pl-PL",
                        },
                        {
                            "@type": "WebPage",
                            "@id": "https://auto-welt.info/#webpage",
                            url: "https://auto-welt.info/",
                            name: "Wystawy modeli samochodów - Auto-welt.info",
                            isPartOf: {
                                "@id": "https://auto-welt.info/#website",
                            },
                            about: {
                                "@id": "https://auto-welt.info/#organization",
                            },
                            datePublished: "2015-11-18T08:37:53+00:00",
                            dateModified: "2022-07-20T09:58:31+00:00",
                            inLanguage: "pl-PL",
                            potentialAction: [
                                {
                                    "@type": "ReadAction",
                                    target: ["https://auto-welt.info/"],
                                },
                            ],
                        },
                    ],
                })}
            </script>

            {canonical ? (
                <>
                    <link rel="canonical" href={canonical} />
                    <meta property="og:url" content={canonical} />
                </>
            ) : null}

            {seo?.title ? (
                <>
                    <title>{seo.title} – Auto-Welt</title>
                    <meta property="twitter:title" content={seo.title} />
                    <meta property="og:title" content={seo.title} />
                </>
            ) : null}

            {seo?.metaDesc ? (
                <>
                    <meta name="description" content={seo.metaDesc} />
                    <meta
                        property="twitter:description"
                        content={seo.metaDesc}
                    />
                    <meta property="og:description" content={seo.metaDesc} />
                </>
            ) : null}

            {seo.opengraphImage?.localFile?.publicURL ? (
                <>
                    <meta
                        property="og:image"
                        content={
                            "https://auto-welt.info" +
                            seo.opengraphImage.localFile.publicURL
                        }
                    />
                    <meta
                        property="twitter:image"
                        content={
                            "https://auto-welt.info" +
                            seo.opengraphImage.localFile.publicURL
                        }
                    />
                </>
            ) : null}
        </>
    );
}
