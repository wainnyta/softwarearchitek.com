import {
    Box,
    Flex,
    HStack,
    IconButton,
    useColorMode,
    Button,
    useDisclosure,
    useColorModeValue,
    Stack,
    Container,
    Link as ChakraLink
  } from "@chakra-ui/react";
  import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
  import NextLink from "next/link";
  import Logo from "../Logo";
  
  const Links = [
    {
      name: "Home",
      route: "/"
    },
    {
      name: "About Me",
      route: "/about"
    },
    {
      name: "Bookmarks",
      route: "/bookmarks"
    },
    {
      name: "Blog",
      route: "/blog"
    }
  ];
  
  const Link = ({ children, href, ...props }) => (
    <NextLink href={href} passhref>
      <ChakraLink
        p={2}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.700")
        }}
        {...props}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
  
  export default function Simple() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
  
    return (
      <>
        <Box py={5} borderTop="2px" borderTopColor="green.500">
          <Container maxW="container.lg">
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
              <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: !isOpen ? "none" : "inherit" }}
                onClick={isOpen ? onClose : onOpen}
              />
              <HStack spacing={8} alignItems={"center"}>
                <Box>
                  <Logo />
                </Box>
                <HStack
                  as={"nav"}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                >
                  {Links.map(link => (
                    <Link href={link.route} key={link.name}>
                      {link.name}
                    </Link>
                  ))}
                </HStack>
              </HStack>
              <Flex alignItems={"center"}>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Flex>
            </Flex>
            {isOpen ? (
              <Box pb={4}>
                <Stack as={"nav"} spacing={4}>
                  {Links.map(link => (
                    <Link href={link.route} key={link.name}>
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              </Box>
            ) : null}
          </Container>
        </Box>
      </>
    );
  }
  