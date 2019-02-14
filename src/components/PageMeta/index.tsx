import * as React from 'react';
import { Head } from 'react-static';

const TWITTER_USERNAME = '@Postmates';

interface Props {
  title: string;
  description: string;
  url: string;
  siteRoot: string;
}

const PageMeta: React.FC<Props> = ({
  title, description, url, siteRoot,
}) => {
  const image = `${siteRoot}/dev-logo.png`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content={TWITTER_USERNAME} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={TWITTER_USERNAME} />
    </Head>
  );
};

export default PageMeta;
