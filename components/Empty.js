import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { FaFolderOpen } from "react-icons/fa";

const Empty = () => {
  return (
    <Box
      mt={10}
      d="flex"
      alignItems="center"
      borderColor={useColorModeValue("gray.100", "gray.700")}
      borderWidth="1px"
      p={4}
      borderRadius="lg"
    >
      <FaFolderOpen style={{ color: "#718096" }} />
      <Text color="gray.500" fontSize="lg" ml={2}>
        Ohh! such an empty place, still working on it
      </Text>
    </Box>
  );
};

export default Empty;
