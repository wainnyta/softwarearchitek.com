import {Flex, Heading, Image, Link, SlideFade, Text, useColorModeValue, VStack, Wrap} from "@chakra-ui/react";
import Paragraph from "../../Paragraph";
import {FaSwatchbook} from "react-icons/fa";

const steps = [
  {
    image: "/research.svg",
    title: "Research & Planning",
    description: "We work together to understand the issue you’re trying" +
      " to solve and brainstorm the best possible digital product solution. " +
      "This phase includes lots of research & strategic planning. But it is " +
      "an important phase that can actually save us a lot of overhead time later on" +
      " in the development phase. This will give us a clear map and a blueprint that" +
      " we all can refer to later."
  },
  {
    icon: <FaSwatchbook />,
    title: "Research & Planning",
    description: "We work with you to understand the problem you’re trying to solve and the digital product solution to that problem. This involves lots and lots of research and iterative user testing."
  },
  {
    icon: <FaSwatchbook />,
    title: "Research & Planning",
    description: "We work with you to understand the problem you’re trying to solve and the digital product solution to that problem. This involves lots and lots of research and iterative user testing."
  },
];

const StepItem = ({index, icon, title, description, image}) => {
  return <Flex
    direction={"column"}
    bg={{base: useColorModeValue("white", "gray.800"), md: useColorModeValue("#f9fcfe", "gray.800")}}
    py={10}
    p={8}
    //shadow='md'
    borderWidth={"1px"}
    borderLeftWidth='1px'
    borderLeftRadius={index === 0 ? "10px" : "0"}
    borderRightRadius={index === 2 ? "10px" : "0"}
    borderRightWidth={index === 2 ? "1px" : "0"}
    borderColor={useColorModeValue("gray.200", "gray.700")}
    justify={"center"}
    align={"center"}
    flex={1}
    gridGap={"20px"}
  >
    {
      image &&
      <Image src={image} boxSize={"150px"} />
    }
    <Heading align={"center"}>{title}</Heading>
    <Paragraph align={"center"}>{description}</Paragraph>
  </Flex>;
}

const Process = ({isOpen, onOpen, onClose}) => {
  return (
    <SlideFade in={true} offsetY={80} delay={0.2}>
      <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
      >
        Work With Me
      </Heading>
      <Paragraph fontSize="xl" lineHeight={1.6} mb={50}>
        I specialize in helping you turning the idea in mind into an MVP that can be launched in a competitive period
        of time. Whether you are at the ideation stage, or maybe you're only looking for help with some specific development,
        or perhaps you're seeking for a technical partner, I'd love to hear more about your vision!

        <Text
          as={"span"}
          color={useColorModeValue("gray.900", "white")}>
          <Link fontWeight={"bold"} onClick={onOpen}>
            &nbsp;Let's connect and have a chat 😊
          </Link>
        </Text>
      </Paragraph>
      <Flex
        direction={{base: "column", lg: "row"}}
        //gridGap={"12px"}
      >
        {steps.map((step, index) =>{
          return <StepItem
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
            image={step.image}
            index={index}
          />
        })}
      </Flex>
    </SlideFade>
  );
}

export default Process;