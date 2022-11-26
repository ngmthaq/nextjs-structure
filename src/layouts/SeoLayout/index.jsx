import React from "react";
import Head from "next/head";
import Script from "next/script";
import { NoSSR } from "../../components";

const SeoLayout = ({ children, title, description, url, imgUrl }) => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
        {title && (
          <>
            <title>{title}</title>
            <meta property="og:title" content={title} />
          </>
        )}
        {description && (
          <>
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
          </>
        )}
        {url && (
          <>
            <link rel="canonical" href={url} />
            <meta property="og:url" content={url} />
          </>
        )}
        {imgUrl && (
          <>
            <meta property="og:image " content={imgUrl} />
          </>
        )}
      </Head>
      <NoSSR>
        <div className="seo-layout">{children}</div>
      </NoSSR>
      <Script></Script>
    </>
  );
};

export default SeoLayout;
