import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <meta
            name="description"
            content="Meer Bahadin | Full stack developer - UI / UX Designer"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://meera.dev/" />
          <meta
            property="og:title"
            content="Meer Bahadin | Full stack developer - UI / UX Designer"
          />
          <meta property="og:image" content="/meta-image.jpg" />

          <link rel="icon" href="/favicon.ico" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
