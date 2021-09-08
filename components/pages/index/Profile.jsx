import {
  Box,
  Heading,
  SlideFade,
  Link,
  LightMode,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Paragraph from "../../Paragraph";

const Profile = () => {
  return (
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
            color="green.500"
            href="https://www.nodejs.org"
            isExternal
            fontWeight="500"
          >
            Nodejs,
          </Link>{" "}
          <Link
            color="green.500"
            href="https://www.reactjs.org"
            fontWeight="500"
            isExternal
          >
            React
          </Link>
          . I work as a full stack developer. You’ve found my personal website
          on the internet.
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
      </Box>
    </SlideFade>
  );
};

export default Profile;
