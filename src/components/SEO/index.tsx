import Head from "next/head";

type SEOProps = {
  title?: string;
  description?: string;
};

const SEO = ({
  title = "Entertainment",
  description = "Entertainment web app built with Next.js",
}: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
};

export default SEO;
