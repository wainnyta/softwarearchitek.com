import {
  Box,
  Heading,
  IconButton,
  LinkOverlay,
  LinkBox,
  useColorModeValue,
} from "@chakra-ui/react";
import Paragraph from "./Paragraph";

const ToolCard = ({ tool }) => {
  return (
    <LinkBox as="article">
      <Box
        w="100%"
        p={4}
        borderColor={useColorModeValue("gray.300", "gray.700")}
        borderRadius={5}
        borderWidth="1px"
        transition=".5s"
        cursor="pointer"
        d="flex"
        role="group"
        _hover={{
          borderColor: "cyan.500",
        }}
      >
        {tool.stackImage}
        <Box>
          <LinkOverlay href={tool?.url} rel="noopener" isExternal>
            <Heading as="h2" size="sm">
              {tool?.name}
            </Heading>
            <Paragraph mt={1} fontSize="sm">
              {tool?.description}
            </Paragraph>
          </LinkOverlay>
        </Box>
      </Box>
    </LinkBox>
  );
};

export default ToolCard;
