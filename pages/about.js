import Head from "next/head";
import {
  Box,
  Container,
  Heading,
  SlideFade,
  Divider,
  Button,
  Collapse,
  LightMode,
  Tag,
} from "@chakra-ui/react";
import Paragraph from "../components/Paragraph";
import { useState } from "react";

const About = () => {
  const [show, setShow] = useState(false);

  const [coolStuff, setCoolStuff] = useState([
    "React",
    "Javascript",
    "Science",
    "Illustration",
    "AI",
    "Space",
    "Android",
    "Movies",
    "Comics",
    "Figma",
    "Tea",
  ]);
  const [notCoolStuff, setNotCoolStuff] = useState([
    "Angular",
    "Jquery",
    "Coffee",
    "Politics",
    "Narrow-minded",
    "Working Overtime",
  ]);

  const handleToggle = () => setShow(!show);

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
        <Container maxW="container.lg" mt={10}>
          <SlideFade in={true} offsetY={80}>
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: "28px", md: "32px", lg: "36px" }}
                mb={4}
              >
                About Me
              </Heading>
              <Collapse in={show} startingHeight={100}>
                <Paragraph fontSize="xl" lineHeight={1.6}>
                  I started using a computer when I was 7 years old, I was
                  obsessed with gaming! But while I was only doing games, I
                  developed interests in software, I began to ask myself about
                  those programs on my desktop, I have never checked them I was
                  always going for the game icons. The day I started to use
                  photoshop everything changed, I loved it and I developed an
                  interest in graphic design, I thought that I will be doing
                  that for the rest of my life, but thought changed when I got
                  to college, I started programming, it wasn't fun at first, I
                  already knew HTML & CSS and some JS but that wasn't helping me
                  understanding C# & C++, I didn't like building apps for
                  windows using WinForm so I started work on my web skills and I
                  picked Node.js & React and never looked back.
                </Paragraph>
              </Collapse>
              <LightMode>
                <Button
                  size="sm"
                  onClick={handleToggle}
                  mt="1rem"
                  colorScheme="green"
                  bg="green.500"
                >
                  Show {show ? "Less" : "More"}
                </Button>
              </LightMode>
            </Box>
            <Divider my={10} />
          </SlideFade>
          <SlideFade in={true} offsetY={80} delay={0.2}>
            <Heading
              as="h1"
              fontSize={{ base: "24px", md: "30px", lg: "36px" }}
              mb={3}
            >
              Cool Stuff
            </Heading>
            <Paragraph fontSize="xl" lineHeight={1.6}>
              {coolStuff.map((item) => (
                <Tag
                  size="lg"
                  colorScheme="green"
                  key={item}
                  marginY={2}
                  marginRight={2}
                >
                  {item}
                </Tag>
              ))}
            </Paragraph>
            <Heading
              as="h1"
              fontSize={{ base: "24px", md: "30px", lg: "36px" }}
              mt={10}
              mb={3}
            >
              Meh..
            </Heading>
            <Paragraph fontSize="xl" lineHeight={1.6}>
              {notCoolStuff.map((item) => (
                <Tag
                  size="lg"
                  colorScheme="red"
                  key={item}
                  marginY={2}
                  marginRight={2}
                >
                  {item}
                </Tag>
              ))}
            </Paragraph>
          </SlideFade>
        </Container>
      </main>
    </div>
  );
};

export default About;
