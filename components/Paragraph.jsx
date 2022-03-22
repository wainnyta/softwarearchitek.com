import { Text, useColorModeValue } from "@chakra-ui/react";

const Paragraph = ({ children, ...props }) => {
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Text color={textColor} fontSize={{base: 'lg', md: 'xl'}} {...props}>
      {children}
    </Text>
  );
};

export default Paragraph;
