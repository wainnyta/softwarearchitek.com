import Head from "next/head";
import { useState } from "react";

import {
  Box,
  Container,
  Heading,
  SlideFade,
  Link,
  Divider,
  Grid,
  LightMode,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

import {
  FaEnvelope,
  FaWhatsapp,
  FaNodeJs,
  FaReact,
  FaJs,
  FaDatabase,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";

import Paragraph from "../components/Paragraph";
import ToolCard from "../components/ToolCard";

export default function Home() {
  const [tools, setTools] = useState([
    {
      name: "Node.js",
      description: "Chrome's V8 JavaScript engine for server-side javascript.",
      icon: <FaNodeJs fontSize="20px" />,
      url: "https://www.nodejs.org",
    },
    {
      name: "Javascript",
      description: "These days you can't build an amazing product without JS.",
      icon: <FaJs fontSize="20px" />,
      url: "https://www.javascript.info",
    },
    {
      name: "React.js",
      description: "A JavaScript library for building user interfaces.",
      icon: <FaReact fontSize="20px" />,
      url: "https://www.reactjs.org",
    },
    {
      name: "SQL & MongoDb",
      description: "Both database are great, and they have their use cases.",
      icon: <FaDatabase fontSize="20px" />,
      url: "https://www.mongodb.com/",
    },
    {
      name: "GIT & Github",
      description:
        "A version control system that gives you a lot of flexibility.",
      icon: <FaGitAlt fontSize="20px" />,
      url: "https://medium.com/swlh/things-about-git-and-github-you-need-to-know-as-developer-907baa0bed79",
    },
    {
      name: "Figma",
      description:
        "Figma is powerfull & easy to use software for UI/UX design.",
      icon: <FaFigma fontSize="20px" />,
      url: "https://www.figma.com/",
    },
  ]);

  return (
    <div>
      <Head>
        //TODO: move SEO meta tags to seperate component.
        <title>Meer Bahadin</title>
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
      </Head>
      <main>
        <Container maxW="container.lg" mt={["5", "10"]}>
          <SlideFade in={true} offsetY={80}>
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: "28px", md: "40px", lg: "48px" }}
                mb={3}
              >
                Hey , I’m Meer Bahadin
              </Heading>
              <Paragraph fontSize="2xl" lineHeight={1.6}>
                Full stack developer - UI / UX Designer, focused on Javascript,{" "}
                <Link
                  color="green.300"
                  href="https://www.nodejs.org"
                  isExternal
                  fontWeight="500"
                >
                  Nodejs,
                </Link>{" "}
                <Link
                  color="green.300"
                  href="https://www.reactjs.org"
                  fontWeight="500"
                  isExternal
                >
                  React
                </Link>
                . I work as a full stack developer. You’ve found my personal
                website on the internet.
              </Paragraph>
              <Box mt={10}>
                <LightMode>
                  <ButtonGroup>
                    <Button
                      colorScheme="green"
                      bg="green.500"
                      href="mailto:info@meera.dev"
                      borderRadius={5}
                      p={3}
                      as="a"
                      leftIcon={<FaEnvelope />}
                    >
                      info@meera.dev
                    </Button>
                    <Button
                      colorScheme="green"
                      bg="green.500"
                      href=" https://wa.me/+9647501315441"
                      borderRadius={5}
                      p={3}
                      as="a"
                      leftIcon={<FaWhatsapp />}
                    >
                      WhatsApp
                    </Button>
                  </ButtonGroup>
                </LightMode>
              </Box>
              <Divider my={10} />
            </Box>
          </SlideFade>
          <SlideFade in={true} offsetY={80} delay={0.2}>
            <Heading
              as="h1"
              fontSize={{ base: "24px", md: "30px", lg: "36px" }}
              mb={3}
            >
              Primary Stack & Technologies
            </Heading>
            <Paragraph fontSize="xl" lineHeight={1.6}>
              As a full-stack web developer there are alot of tools you use in
              your daily bases, these are primary tools that i use & like.
            </Paragraph>
            <Grid
              mt={10}
              templateColumns={[
                "1fr",
                "1fr",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
              ]}
              gap={5}
            >
              {tools.map((tool) => (
                <ToolCard tool={tool} key={tool?.name} />
              ))}
            </Grid>
          </SlideFade>
        </Container>
      </main>
    </div>
  );
}
