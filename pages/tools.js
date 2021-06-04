import Head from "next/head";
import {
  Box,
  Container,
  Heading,
  Divider,
  SlideFade,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { FaWindows, FaAndroid, FaChrome, FaGlobe } from "react-icons/fa";
import Paragraph from "../components/Paragraph";

const Tools = () => {
  return (
    <div>
      <Head>
        <title>Tools | Meer Bahadin</title>
        <meta
          name="description"
          content="A list of my favorite tools that I use on a regular basis"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxW="container.lg" mt={10}>
          <SlideFade in={true} offsetY={80}>
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: "24px", md: "30px", lg: "36px" }}
                mb={4}
              >
                Tools
              </Heading>
              <Paragraph fontSize="xl" lineHeight={1.6}>
                A list of my favorite tools & games that i enjoy using and
                playing.
              </Paragraph>
            </Box>
            <Divider my={10} />
          </SlideFade>
          <SlideFade in={true} offsetY={80} delay={0.2}>
            <ButtonGroup>
              <Button leftIcon={<FaWindows />}>Windows</Button>
              <Button leftIcon={<FaAndroid />}>Android</Button>
              <Button leftIcon={<FaChrome />}>Chrome</Button>
              <Button leftIcon={<FaGlobe />}>Web</Button>
            </ButtonGroup>
          </SlideFade>
        </Container>
      </main>
    </div>
  );
};

export default Tools;
