import {
    Box,
    Stack,
    Text,
    Container,
    ButtonGroup,
    IconButton
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
                href="#"
                aria-label="Facebook"
                icon={<FaFacebook fontSize="20px" />}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Instagram"
                icon={<FaInstagram fontSize="20px" />}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Linkedin"
                icon={<FaLinkedin fontSize="20px" />}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Github"
                icon={<FaGithub fontSize="20px" />}
              />
            </ButtonGroup>
          </Stack>
          <Text fontSize="sm">
            &copy; {new Date().getFullYear()} Meer Bahadin
          </Text>
        </Stack>
      </Container>
    </Box>
  );
  
  export default Footer;
  