import "../styles/main.css";
import {ChakraProvider, useDisclosure} from "@chakra-ui/react";
import theme from "theme";
import Layout from "components/Layout";
import "@fontsource/nunito/";
import 'react-image-lightbox/style.css';
import {useEffect, useState} from "react";
import ModalContact from "../components/pages/ModalContact";
import {DefaultSeo} from "next-seo";
import AppSEO from "../components/AppSEO";
import Script from 'next/script';
import TagManager from "react-gtm-module/dist/TagManager";


const tagManagerArgs = {
  gtmId: process.env.NEXT_PUBLIC_GTM_TAG,
};


function MyApp({ Component, pageProps }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [initialValues, setInitialValues] = useState({
    name: '',
    email: '',
    topic: 'Web Development',
    budget: 'Under $500',
    message: '',
  });

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
        `}
      </Script>

      <ChakraProvider theme={theme}>
        <Layout>
          <DefaultSeo {...AppSEO} />
          <Component
            {...pageProps}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            initialValues={initialValues}
            setInitialValues={setInitialValues}
          />
          <ModalContact
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            setInitialValues={setInitialValues}
            initialValues={initialValues}
          />
        </Layout>
      </ChakraProvider>
    </>

  );
}

export default MyApp;
