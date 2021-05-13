import {
  Box,
  Heading,
  IconButton,
  LinkOverlay,
  LinkBox,
} from '@chakra-ui/react';
import Paragraph from './Paragraph';

const ToolCard = ({ tool }) => {
  return (
    <LinkBox as="article">
      <Box
        w="100%"
        p={4}
        borderColor="gray.700"
        borderRadius={5}
        borderWidth="1px"
        transition=".5s"
        cursor="pointer"
        d="flex"
        role="group"
        _hover={{
          borderColor: 'green.300',
        }}
      >
        <IconButton
          as="a"
          href={tool?.url}
          target="_blank"
          aria-label={tool?.name}
          mr={3}
          _groupHover={{ color: 'green.300' }}
          icon={tool?.icon}
        />
        <Box>
          <LinkOverlay href={tool?.url} isExternal>
            <Heading as="h6" size="sm">
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
