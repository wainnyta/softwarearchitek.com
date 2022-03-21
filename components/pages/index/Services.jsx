import {
  Box, Button,
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  SlideFade,
  Text,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";
import Paragraph from "../../Paragraph";
import {MdCheckCircle, MdWeb} from "react-icons/md";
import {FaArrowRight, FaMobileAlt} from "react-icons/fa";
import {HiOutlineCode} from "react-icons/hi";
import {projectTypeList, ProjectTypes} from "../../ContactFormik";

const serviceList = [
  {
    //image: "/services/web2.svg",
    icon: <MdWeb size={50} color={"#45A8DAFF"} />,
    initialProject: ProjectTypes.WEB_DEVELOPMENT,
    title: "Web Development",
    description:
      <Paragraph>
        I'll create web solutions from scratch, or scale up your existing applications.
        Our web app will always be fully responsive on desktop, tablet and mobile devices.
      </Paragraph>
    ,
    list: [
      "Landing Page",
      "E-Commerce",
      "Booking & Scheduling Web App"
    ]
  },
  {
    icon: <FaMobileAlt size={50} color={"#45A8DAFF"} />,
    initialProject: ProjectTypes.MOBILE_DEVELOPMENT,
    title: "Mobile Development",
    description: <Paragraph>
      I'll build mobile applications for both iOS and Android using modern technologies.
      I have experiences working with Flutter, React Native, and Swift.
    </Paragraph>
    ,
    list: [
      "Android App",
      "iOS App",
      "Hybrid App",
    ]
  },
  {
    icon: <HiOutlineCode size={50} color={"#45A8DAFF"} />,
    initialProject: ProjectTypes.CUSTOM_DEVELOPMENT,
    title: "Custom Development",
    description: <Paragraph>
      Whether it is architecture design, API integration, or to "digitialize" your business,
      I'll work with you to find solutions that are tailored to your business requirements.
    </Paragraph>,
    list: [
      "API Development",
      "CRM Development",
      "Data Services",
      "UI/UX Design"
    ]
  },
];


const Service2 = ({index, icon, title, description, image, list, onOpen, initialProject, initialValues, setInitialValues}) => {
  return <Flex
    direction={"column"}
    // bg={{
    //   //base: useColorModeValue("white", "gray.900"),
    //   md: useColorModeValue("white", "transparent")
    // }}
    bg={useColorModeValue("white", "#1a222d")}
    py={10}
    p={8}
    shadow='md'
    borderWidth={"1px"}
    borderRadius={10}
    borderColor={useColorModeValue("gray.200", "gray.700")}
    justify={"space-between"}
    align={"start"}
    flex={1}
    my={2}
    _hover={{
      bgColor: useColorModeValue("rgba(231,246,255,0.2)", "#1f2936")
    }}
  >
    {/*{*/}
    {/*  image &&*/}
    {/*  <Image src={image} boxSize={{base: "250px", md: "100px"}} />*/}
    {/*}*/}
    {icon}

    <Heading
      pt={"20px"}
      pb={{base: 0, lg: "30px"}}
    >{title}</Heading>
    <Box py={3}>
      {description}
    </Box>
    <Text
      color={useColorModeValue("linkedin.500", "linkedin.200")}
      pt={{base: 6, lg: 9}}
      pb={3}
    >
      <b>Sample Projects</b>
    </Text>
    <List spacing={1}>
      {list?.map((item, index) => {
        return <ListItem key={index}>
          <ListIcon as={MdCheckCircle} color={useColorModeValue("linkedin.500", "linkedin.200")} />
          {item}
        </ListItem>
      })}
    </List>

    <Button
      colorScheme="linkedin"
      onClick={() => openModal({initialProject, initialValues, setInitialValues, onOpen})}
      rightIcon={<FaArrowRight />}
      mt={6}
    >
      Select
    </Button>
  </Flex>;
}

const openModal = ({initialProject, setInitialValues, initialValues, onOpen}) => {
  setInitialValues({
    ...initialValues,
    topic: initialProject
  })
  onOpen()
}

const Services = ({isOpen, onOpen, onClose, setInitialValues, initialValues}) => {

  return <SlideFade in={true} offsetY={80} delay={0.2}>
    <Heading
      as={"h1"}
      fontSize={{ base: "24px", md: "30px", lg: "36px" }}
      mb={3}
    >
      Work With Me
    </Heading>
    <Paragraph fontSize="xl" lineHeight={1.6} mb={50}>
      I specialize in helping you turn the idea in mind into an MVP that can be launched in a competitive period
      of time. Whether you are at the ideation stage, or maybe you're only looking for help with some specific development,
      or perhaps you're seeking for a technical partner, I'd love to hear more about your vision!&nbsp;

      <Text
        as={"span"}
        color={useColorModeValue("gray.900", "white")}>
        <Link fontWeight={"bold"} onClick={
          () => openModal({
              initialProject: ProjectTypes.MVP_DEVELOPMENT,
              setInitialValues,
              initialValues,
              onOpen
            }
          )}
        >
          Let's connect and have a chat 😊
        </Link>
      </Text>
    </Paragraph>
    <Flex
      direction={{base: "column", lg: "row"}}
      gridGap={2}
    >
      {serviceList?.map((serviceItem, index) => {
        return <Service2
          key={index}
          icon={serviceItem.icon}
          title={serviceItem.title}
          description={serviceItem.description}
          image={serviceItem.image}
          index={index}
          list={serviceItem.list}
          onOpen={onOpen}
          setInitialValues={setInitialValues}
          initialValues={initialValues}
          initialProject={serviceItem.initialProject}
        />
      })}
    </Flex>
  </SlideFade>
}

export default Services