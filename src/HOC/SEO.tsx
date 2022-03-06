import { Helmet } from "react-helmet";

type SeoProps = {
  children: React.ReactNode;
  seo: {
    title: string;
    description: string;
    keywords?: string;
    author?: string;
  };
};

export default function SEO({ children, seo }: SeoProps) {
  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta
          name="keywords"
          content={
            seo.keywords ||
            "ecommerce, dhl ecommerce, dhl ecommerce tracking, ecommerce website, what is ecommerce, ecommerce platforms, best ecommerce platform, ecommerce business, walmart ecommerce, wix ecommerce"
          }
        />
        <meta name="author" content={seo?.author || "E market"} />
      </Helmet>
      {children}
    </>
  );
}
