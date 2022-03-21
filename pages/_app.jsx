import "../styles/main.css";
import {ChakraProvider, useDisclosure} from "@chakra-ui/react";
import theme from "theme";
import Layout from "components/Layout";
import "@fontsource/nunito/";
import 'react-image-lightbox/style.css';
import {useState} from "react";
import ModalContact from "../components/pages/ModalContact";
import {DefaultSeo} from "next-seo";
import AppSEO from "../components/AppSEO";

function MyApp({ Component, pageProps }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [initialValues, setInitialValues] = useState({
    name: '',
    email: '',
    topic: 'Web Development',
    budget: 'Under $500',
    message: '',
  });

  return (
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
  );
}

export default MyApp;
