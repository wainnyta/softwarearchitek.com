import {
  Box,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  Button,
  useDisclosure,
  Stack,
  Container, useColorModeValue, Text,
} from "@chakra-ui/react";
import Link from "./extra/Link";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import DropdownMenu from "./extra/Menu";
import Logo from "../Logo";
import { useRouter } from "next/router";

const Links = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Projects",
    route: "/projects",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Get In Touch",
    route: "/contact",
  },
];

const extraLinks = [
  {
    name: "Books",
    route: "/books",
  },
  {
    name: "Blog",
    route: "/blog",
  },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  let router = useRouter();
  let { asPath } = router;

  const defaultBgColor = (link) => {
    return router.pathname === link.route ? useColorModeValue("gray.200", "gray.600") : 'transparent'
  }

  const navigationItem = ({onClose}) => (
    <>
      {Links.map((link) => (
        <Link
          _hover={{
            bg: router.pathname === link.route ? defaultBgColor(link) : useColorModeValue("gray.100", "gray.500"),
            color: router.pathname === link.route ? useColorModeValue("black", "white") : useColorModeValue("linkedin.800", "linkedin.200")
          }}
          href={link.route}
          key={link.name}
          p={2}
          rounded={"md"}
          currentPath={asPath}
          bg={defaultBgColor(link)}
          onClick={onClose}
        >
          <Text fontSize={"18px"}>{link.name}</Text>
        </Link>
      ))}
      {/*<DropdownMenu currentPath={asPath} extraLinks={extraLinks} />*/}
    </>
  );

  return (
    <>
      <Box
        py={2}
        // borderTop="2px"
        // borderTopColor="blackAlpha.700"
        bgColor={useColorModeValue("white", "gray.700")}
        shadow='md'
        borderBottom='1px'
        // borderRadius={10}
        borderColor={useColorModeValue("gray.200", "black")}
        position={"-webkit-sticky"}
        position={"sticky"}
        width={"100%"}
        top={0}
        zIndex={9}
      >
        <Container maxW="container.lg" px={{base: 6, md: 2}}>
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
                {navigationItem({onClose})}
              </HStack>
            </HStack>
            <Flex alignItems={"center"}>
              <Button aria-label="Switch Theme" onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Flex>
          </Flex>
          {isOpen ? (
            <Box pb={4} mt={3}>
              <Stack as={"nav"} spacing={4}>
                {navigationItem({onClose})}
              </Stack>
            </Box>
          ) : null}
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
