import {
  Box,
  Stack,
  Text,
  Container,
  ButtonGroup,
  IconButton,
  Link,
  Divider,
} from "@chakra-ui/react";

import {FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaEnvelope} from "react-icons/fa";
import Logo from "../Logo";

const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{ base: "4", md: "8" }}
  >
    <Container maxW="container.lg">
      <Stack
        direction="row"
        spacing="4"
        align="center"
        justify="space-between"
        pb={5}
      >
        <Logo />
        <ButtonGroup variant="ghost">
          {/*<IconButton*/}
          {/*  as="a"*/}
          {/*  href="https://www.facebook.com/meerbahadin.1"*/}
          {/*  aria-label="Facebook"*/}
          {/*  icon={<FaFacebook fontSize="20px" />}*/}
          {/*/>*/}
          <IconButton
            as={"a"}
            aria-label="Email"
            icon={<FaEnvelope fontSize="20px" />}
            href="mailto:wainnyta@gmail.com"
          />
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/wainny-ta-a5715359/"
            aria-label="Linkedin"
            icon={<FaLinkedin fontSize="20px" />}
          />
          <IconButton
            as="a"
            href="https://www.github.com/wainnyta"
            aria-label="Github"
            icon={<FaGithub fontSize="20px" />}
          />
        </ButtonGroup>
      </Stack>
      <Divider pt={2} />
      <Stack direction="row" align="center" justify="space-between" pt={5}>
        <Text fontSize="md">
          &copy; {new Date().getFullYear()} Software Architek {" "}
        </Text>
        <IconButton
          as={Link}
          rounded="md"
          aria-label="Github Repo"
          rel="noopener"
          href="https://github.com/wainnyta"
          isExternal
          icon={<FaGithub fontSize="18px" />}
        />
      </Stack>
    </Container>
  </Box>
);

export default Footer;
