import AuthProvider from "lib/contexts/AuthContext";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html className="scroll-smooth">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta
            property="og:description"
            content="I'm a freelance developer and designer with a passion for creating great user experiences. "
          />
          <meta
            property="og:image"
            content="https://images.prismic.io/subhan/a827ab94-a9ee-40d9-b7d1-c2e424a13d93_og-cover.jpg?auto=compress,format"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </Head>
        <body className="font-display">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
