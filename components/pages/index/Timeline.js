import { Heading, SlideFade, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaCheckSquare } from "react-icons/fa";

const Timeline = () => {
  return (
    <SlideFade in={true} offsetY={80} delay={0.2}>
      <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
      >
        Timeline
      </Heading>
      <Heading mt={10} mb={5} as="h2" size="md">
        2021
      </Heading>
      <List spacing={18} fontSize="18">
        <ListItem>
          <ListIcon as={FaCheckSquare} color="green.500" />
          Working as a full-stack developer at Click Iraq - 1 Year
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheckSquare} color="green.500" />
          Working as part-time UI / UX Designer
        </ListItem>
      </List>
      <Heading mt={10} mb={5} as="h2" size="md">
        2020
      </Heading>
      <List spacing={18} fontSize="18">
        <ListItem>
          <ListIcon as={FaCheckSquare} color="green.500" />6 Month internship at
          Qaiwan Group as a IT specialist
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheckSquare} color="green.500" />
          Graduated from college
        </ListItem>
      </List>
    </SlideFade>
  );
};

export default Timeline;
