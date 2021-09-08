import Head from "next/head";
import { Box, Container, Heading, SlideFade, Divider } from "@chakra-ui/react";
import Message from "components/Message";

const Blog = () => {
  return (
    <div>
      <Head>
        <title>Blog | Meer Bahadin</title>
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
                Blog
              </Heading>
            </Box>
            <Divider my={10} />
            <Message />
          </SlideFade>
        </Container>
      </main>
    </div>
  );
};

export default Blog;
