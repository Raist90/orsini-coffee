import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="it">
            <Head>
                {/* fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
                <meta name="description" content="Caffè Orsini è il caffè sapientemente realizzato da zio Vincenzo." />
                <meta name="theme-color" content="#1b1212" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}