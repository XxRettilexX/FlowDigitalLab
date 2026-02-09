import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    url?: string;
    image?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords = "web design, sviluppo web, branding, siti web aziendali, ecommerce, SEO, app mobile, identità visiva",
    url = "https://flowdigitallab.it",
    image = "/og-image.jpg" // Default OG image path
}) => {
    const siteTitle = "Flow Digital Lab";
    const fullTitle = `${title} | ${siteTitle}`;

    // Organization Schema (JSON-LD) for better Google indexing
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Flow Digital Lab",
        "url": "https://flowdigitallab.it",
        "logo": "https://flowdigitallab.it/logo.png", // Replace with actual logo URL
        "description": "Agenzia digitale specializzata in Web Design, Sviluppo App e Strategie di Branding innovative.",
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "info@flowdigitallab.it",
            "contactType": "customer service"
        },
        "sameAs": [
            "https://instagram.com/flow_digital.lab",
            "https://github.com/flowdigitallab"
        ]
    };

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEO;
