import Head from "next/head";
import {
  Box,
  Container,
  Heading,
  Divider,
  SlideFade,
  Button,
  Stack,
} from "@chakra-ui/react";
import { FaGithubAlt, FaGlobe } from "react-icons/fa";
import Paragraph from "../components/Paragraph";
import { useState, useEffect } from "react";
import BookmarkCard from "../components/BookmarkCard";
import { bookmarksData } from "../_DATA/bookmarks";
import Empty from "../components/Empty";

const Bookmarks = () => {
  const [category, setCategory] = useState([
    {
      name: "website",
      icon: <FaGlobe />,
    },
    {
      name: "repository",
      icon: <FaGithubAlt />,
    },
  ]);

  const [bookmarks, setBookmarks] = useState([]);

  const [activeCategory, setActiveCategory] = useState("website");

  useEffect(() => {
    let filteredBookmark = bookmarksData.filter(
      (item) => item.type === activeCategory
    );
    setBookmarks(filteredBookmark);
  }, [activeCategory]);
  return (
    <div>
      <Head>
        <title>Bookmarks | Meer Bahadin</title>
        <meta
          name="description"
          content="A list of my favorite articles & websites, updated weekly."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://meera.dev/" />
        <meta
          property="og:title"
          content="A list of my favorite articles & websites, updated weekly."
        />
        <meta property="og:image" content="/meta-image.jpg" />
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
                Bookmarks
              </Heading>
              <Paragraph fontSize="xl" lineHeight={1.6}>
                A list of my favorite articles & websites and tools, updated
                weekly.
              </Paragraph>
            </Box>
            <Divider my={10} />
          </SlideFade>
          <SlideFade in={true} offsetY={80} delay={0.2}>
            <Stack direction={["column", "row"]} spacing={3} align="left">
              {category.map((item) => (
                <Button
                  key={item.name}
                  textTransform="capitalize"
                  isActive={activeCategory === item.name}
                  onClick={(e) => setActiveCategory(item.name)}
                  _active={{
                    bg: "green.500",
                  }}
                  leftIcon={item.icon}
                >
                  {item.name}
                </Button>
              ))}
            </Stack>
            {bookmarks?.length === 0 ? (
              <Empty />
            ) : (
              <Box
                w="100%"
                mt={10}
                mx="auto"
                sx={{ columnCount: [1, 2, 3], columnGap: "20px" }}
              >
                {bookmarks?.map((item) => (
                  <BookmarkCard bookmark={item} key={item.title} />
                ))}
              </Box>
            )}
          </SlideFade>
        </Container>
      </main>
    </div>
  );
};

export default Bookmarks;
