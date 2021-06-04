import {
  Box,
  Stack,
  Text,
  Container,
  ButtonGroup,
  IconButton,
  Link,
} from "@chakra-ui/react";

import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
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
      <Stack>
        <Stack
          direction="row"
          spacing="4"
          align="center"
          justify="space-between"
        >
          <Logo />
          <ButtonGroup variant="ghost" color="gray.600">
            <IconButton
              as="a"
              href="https://www.facebook.com/meerbahadin.1"
              aria-label="Facebook"
              icon={<FaFacebook fontSize="20px" />}
            />
            <IconButton
              as="a"
              href="https://www.instagram.com/meeradev__/"
              aria-label="instagram"
              icon={<FaInstagram fontSize="20px" />}
            />
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/meerbahadin/"
              aria-label="Linkedin"
              icon={<FaLinkedin fontSize="20px" />}
            />
            <IconButton
              as="a"
              href="https://www.github.com/meerbahadin"
              aria-label="Github"
              icon={<FaGithub fontSize="20px" />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()} Meer Bahadin, made with{" "}
          <Link
            color="green.300"
            href="https://www.nextjs.org"
            isExternal
            fontWeight="700"
          >
            Next.js
          </Link>
        </Text>
      </Stack>
    </Container>
  </Box>
);

export default Footer;
