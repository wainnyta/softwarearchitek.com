import {
  Avatar,
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  Flex,
  Heading, HStack, IconButton, Image,
  LightMode, Link,
  SlideFade,
  Tag,
  Text, useColorModeValue, VStack, Wrap, WrapItem
} from "@chakra-ui/react";
import Head from "next/head";
import Paragraph from "../components/Paragraph";
import {useState} from "react";
import Timeline from "../components/pages/index/Timeline";
import {FaCertificate, FaExternalLinkAlt, FaGithub, FaGraduationCap, FaListAlt, FaSuitcase} from "react-icons/fa";
import {FcGraduationCap} from "react-icons/fc";

const careerItems = [
  {
    logo: "/companies/juvonno-logo.jpeg",
    companyURL: "https://juvonno.com",
    companyName: "Juvonno",
    title: "Lead Software Developer",
    when: "June 2018 - Present",
    skills: ["PHP", "MySQL", "Javascript", "JQuery", "CSS", "Less", "C#", "NodeJS", "ExpressJS", "WebSocket", "Socket Programming", "Windows Service", "POS Device Integration"]
  },
  {
    logo: "/companies/comit.jpeg",
    companyURL: "https://www.comit.org/",
    githubURL: "https://github.com/wainnyta/comit",
    companyName: "COMIT CORP",
    title: "Java Instructor",
    when: "June 2018 - Sep 2018",
    skills: ["Java", "MySQL", "HTML5", "CSS", "Javascript", "JSP", "Dropwizard"],
  },
  {
    logo: "/companies/varian.jpeg",
    companyURL: "https://www.varian.com/",
    companyName: "Varian",
    title: "Software Developer / DevOps",
    when: "Jan 2018 - June 2018",
    skills: ["Java", "Dropwizard", "Python", "Kubernetes", "AngularJS", "Windows Server", "Google Guice", "Maven", "Mockito", "JUnit"]
  },
  {
    logo: "/companies/priceline.png",
    companyURL: "https://pricelinepartnernetwork.com/",
    companyName: "Priceline Partner Network",
    title: "API Developer",
    when: "Oct 2017 - Jan 2018",
    bgColor: "white",
    skills: ["PHP", "HTML5", "CSS", "Javascript", "ReactJS", "Redis", "MySQL", "Docker"],
  },
  {
    logo: "/companies/lotlinx.jpeg",
    companyURL: "https://www.lotlinx.com/",
    companyName: "LotLinx",
    title: "Software Developer",
    when: "Sep 2015 - Sep 2017",
    skills: ["PHP", "Java", "Maven", "Netty Framework", "Jenkin", "HTML5", "CSS", "Javascript", "MySQL"]
  },
  {
    logo: "/companies/uom.jpeg",
    companyURL: "https://umanitoba.ca/",
    companyName: "University of Manitoba",
    title: "Computer Science Teaching Assistant",
    when: "Sep 2012 - Dec 2014",
    skills: ["Java", "C", "C++", "Linux", "Unix", "Socket Programming", "Object Oriented Programming", "Assembly Language"]
  }
];

const educationItems = [
  {
    logo: "/companies/circuitstream.jpeg",
    companyURL: "https://umanitoba.ca/",
    companyName: "Circuit Stream",
    title: "Certificate, XR Development with Unity",
    when: "2020",
    skills: ["Unity", "C#", "Game Programming", "Virtual Reality", "Augmented Reality", "Mixed Reality"]
  },
  {
    logo: "/companies/uom.jpeg",
    companyURL: "https://umanitoba.ca/",
    companyName: "University of Manitoba",
    title: "Bachelor's Degree, Computer Science",
    when: "2008 - 2014",
    skills: ["Java", "C", "C++", "Linux", "Unix", "Socket Programming", "Object Oriented Programming", "Assembly Language"]
  },
];



const TimelineItem = ({logo, companyURL, githubURL, companyName, when, title, skills, bgColor}) => {
  return <Flex
    bg={useColorModeValue("white", "#1A212D")}
    py={10}
    p={4}
    my={6}
    shadow='md'
    borderWidth='1px'
    borderRadius={10}
    borderColor={useColorModeValue("gray.200", "gray.700")}
  >
    <Image src={logo} objectFit={"contain"} boxSize={"65px"} borderRadius={"50%"} bgColor={bgColor || "transparent"} />
    <Flex direction={"column"} w={"100%"}  pl={4}>
      <Flex
        alignItems={{base: "start", md: "center"}}
        w={"100%"}
        justifyContent={"space-between"}
        direction={{base: "column", md: "row"}}
      >
        <HStack alignItems={"center"}>
          <Heading fontSize={"2xl"} pr={0}>
            <Link target={"_blank"} href={companyURL}>{companyName}</Link>
          </Heading>
         {/*<Link href={companyURL}>*/}
         {/*  <FaExternalLinkAlt href={companyURL} />*/}
         {/*</Link>*/}

          {githubURL &&
            <Link px={2} _hover={{borderBottom: "1px", paddingBottom: "4px"}} as={"a"} aria-label={"Project Github URL"} href={githubURL}>
              <FaGithub size={"22px"} href={githubURL} />
            </Link>
          }
        </HStack>
        <Text color={useColorModeValue("gray.600", "gray.300")} display={{base: "none", md: "block"}}>{when}</Text>
      </Flex>
      <Text pt={{base: 0, md: 1}} fontSize={"1.0rem"} fontWeight={"900"}>{title}</Text>
      <Text color={useColorModeValue("gray.600", "gray.300")} pt={1} display={{base: "block", md: "none"}}>{when}</Text>
      <Wrap pt={4}>
        {skills?.map(skill => <Tag>{skill}</Tag>)}
      </Wrap>
    </Flex>
  </Flex>
}

const TimelineList = ({listTitle, listItems, listIcon}) => {
  return <SlideFade in={true} offsetY={80}>
    <Flex alignItems={"baseline"} mb={4}>
      <Heading
        as="h1"
        fontSize={{ base: "28px", md: "32px", lg: "36px" }}
        //borderBottom={"1px"}
      >
        {listTitle}
      </Heading>
      <Text pl={4}>
        {listIcon}
      </Text>
    </Flex>

    {listItems?.map(item =>
      <TimelineItem
        logo={item.logo}
        companyName={item.companyName}
        companyURL={item.companyURL}
        githubURL={item.githubURL}
        title={item.title}
        when={item.when}
        skills={item.skills}
        bgColor={item.bgColor}
      />
    )}
  </SlideFade>
}

const TimelinePage = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Head>
        <title>Ancaster Development | About</title>
        <meta
          name="description"
          content="Ancaster Development | Full stack developer - UI / UX Designer"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://meera.dev/" />
        <meta
          property="og:title"
          content="Meer Bahadin | Full stack developer - UI / UX Designer"
        />
        <meta property="og:image" content="/meta-image.jpg" />
      </Head>
      <main>
        <Container maxW="container.lg" mt={12} px={{base: 6, xl: 2, lg: 4}}>
          <TimelineList
            listTitle={"Career"}
            listIcon={<FaSuitcase size={25} />}
            listItems={careerItems}
          />

          <Box pt={"60px"}>
            <TimelineList
              listTitle={"Education"}
              listIcon={<FaGraduationCap size={30} />}
              listItems={educationItems}
            />
          </Box>

        </Container>
      </main>
    </div>
  );
}

export default TimelinePage;