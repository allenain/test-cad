import Head from "next/head";

interface MetaProps {
  title?: string;
  description?: string;
}

const Meta = ({
  title = "Some Company",
  description = "A simple modern demo site with contact form and video.",
}: MetaProps) => {
  return (
      <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content="/preview.png" />
          <link rel="icon" href="/favicon.ico" />
      </Head>

  );
};

export default Meta;
