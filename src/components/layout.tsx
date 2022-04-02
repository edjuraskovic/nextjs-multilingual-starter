import React from "react";
import Head from "next/head";
import Header from './header';
import Footer from './footer';
import { AppConfig } from '../lib/AppConfig';

interface Props {
  children: React.ReactNode;
  desc?: string;
  title: string;
  imgUrl?: string;
}

export const Layout: React.FC<Props> = ({
  children,
  title,
  desc,
  imgUrl,
}) => {
  const description = desc || AppConfig.description;
  const THUMBNAIL = imgUrl || AppConfig.img_url;

  return (
    <div className="flex flex-col min-h-screen text-center">
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={THUMBNAIL} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={THUMBNAIL} />
      </Head>
      <Header />
      <main className="flex-grow text-xl py-5 flex flex-col justify-center">{children}</main>
      <Footer />
      </div>
  );
};
