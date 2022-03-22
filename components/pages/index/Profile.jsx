import {
  Box,
  Heading,
  SlideFade,
  Link,
  LightMode,
  Button,
  ButtonGroup, Flex, Image, IconButton, useColorMode, useColorModeValue, Text, VStack,
} from "@chakra-ui/react";

import {
  FaEnvelope,
  FaExternalLinkAlt,
  FaExternalLinkSquareAlt, FaGithub, FaJava,
  FaLinkedin,
  FaLinkedinIn,
  FaWhatsapp
} from "react-icons/fa";
import Paragraph from "../../Paragraph";
import ModalContact from "../ModalContact";

const Profile = ({isOpen, onOpen, onClose}) => {
  return (
    <SlideFade in={true} offsetY={80}>
      <Flex direction={{base: 'column', md: 'row'}}>
        <Flex
          alignSelf={"center"}
          justify={"center"}
          my={{base: 6, md: 0}}
          width="100%"
          height="100%"
          minW={"250px"}
        >
          <img
            alt={"Wainny Avatar"}
            src={"/wainnyavacircle.png"}
            style={{
              alignSelf: "center",
              width: "250px",
              height: "250px",
            }}

          />
        </Flex>

        <Box pl={{base: 0, md: 6}}>
          <Heading
            as="h1"
            fontSize={{ base: "28px", md: "40px", lg: "48px" }}
            mb={3}
            mt={{base: 2, md: 0}}
          >
            Hi there 👋 I’m Wainny
          </Heading>
          <Paragraph fontSize="2xl" lineHeight={1.6}>
            I am an experienced Full-Stack Software Craftsman, always eager to learn and improvise.
            I love the process of brainstorming ideas and bringing to life digital products.
            I am passionate with what I'm doing and I'm always thriving towards the best of my abilities.
            <Text pt={2} color={useColorModeValue("gray.900", "white")}>Currently I'm open and looking for new and exciting projects!</Text>
            {/*To me, building a Digital Solution is very much alike to that of building a Physical House.*/}
            {/*It is a piece of art crafted scientifically!*/}
          </Paragraph>
          <Box mt={6}>
            <>
              <VStack w={"100%"} display={{base: "flex", md: "none"}}>
                <Button
                  _hover={{
                    fontSize: "1.2rem",
                    paddingLeft: 6,
                    paddingRight: 6,
                  }}
                  //href="mailto:wainnyta@gmail.com"
                  borderRadius={5}
                  p={5}
                  as="a"
                  leftIcon={<FaEnvelope />}
                  onClick={onOpen}
                  cursor={"pointer"}
                  isFullWidth={true}
                >
                  Get In Touch
                </Button>
                <Button
                  variant={"outline"}
                  isFullWidth={true}
                  colorScheme={"gray"}
                  as="a"
                  href="https://www.linkedin.com/in/wainny-ta-a5715359/"
                  aria-label="Linkedin"
                  leftIcon={<FaLinkedin fontSize="20px" />}
                  _target={"blank"}
                >LinkedIn</Button>
                <Button
                  variant={"outline"}
                  isFullWidth={true}
                  colorScheme={"gray"}
                  as="a"
                  href="https://github.com/wainnyta"
                  aria-label="Github"
                  isFullWidth={true}
                  leftIcon={<FaGithub fontSize="20px" />}
                >Github</Button>
              </VStack>

              <ButtonGroup w={"100%"} display={{base: "none", md: "flex"}}>
                <Button
                  _hover={{
                    fontSize: "1.2rem",
                    paddingLeft: 6,
                    paddingRight: 6,
                  }}
                  //href="mailto:wainnyta@gmail.com"
                  borderRadius={5}
                  p={5}
                  as="a"
                  leftIcon={<FaEnvelope />}
                  onClick={onOpen}
                  cursor={"pointer"}
                >
                  Get In Touch
                </Button>
                <IconButton
                  variant={"ghost"}
                  colorScheme={"gray"}
                  as="a"
                  href="https://www.linkedin.com/in/wainny-ta-a5715359/"
                  aria-label="Linkedin"
                  icon={<FaLinkedin fontSize="20px" />}
                  display={{base: "none", md: "flex"}}
                />
                <IconButton
                  variant={"ghost"}
                  colorScheme={"gray"}
                  as="a"
                  href="https://github.com/wainnyta"
                  aria-label="Github"
                  icon={<FaGithub fontSize="20px" />}
                  display={{base: "none", md: "flex"}}
                />
              </ButtonGroup>
            </>
          </Box>
        </Box>
      </Flex>
    </SlideFade>
  );
};

export default Profile;
