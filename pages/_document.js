import AuthProvider from 'lib/contexts/AuthContext'
import Document, {
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }

    render() {
        return (
            <Html className="scroll-smooth">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet" />
                    <meta property="og:description" content="I'm a freelance developer and designer with a passion for creating great user experiences. I've been coding since I was 9, and in the last 10 years I've learnt a variety of technologies that enable me to craft high-quality, responsive digital experiences for my clients. Most recently, I've been helping small businesses and creators make the most of their customers and audiences, by providing them with great user experiences." />
                    <meta property="og:image" content="/og-cover.jpg" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                </Head>
                <body className="font-display">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument

