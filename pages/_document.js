import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src={"https://www.googletagmanager.com/gtag/js?id=G-L2TC3320ZG"}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag() { dataLayer.push(arguments); }
                            gtag('js', new Date());
                        
                            gtag('config', 'G-L2TC3320ZG');
                        `,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}