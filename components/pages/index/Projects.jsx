import {
  Badge,
  Box,
  Flex,
  Grid,
  Heading,
  HStack, Icon,
  IconButton,
  Image,
  Link,
  SlideFade,
  Spacer,
  Stack,
  Text, useColorModeValue
} from "@chakra-ui/react";
import Paragraph from "../../Paragraph";
import ToolCard from "../../ToolCard";
import {FaEnvelope, FaExternalLinkAlt, FaExternalLinkSquareAlt, FaLinkedin, FaMailchimp} from "react-icons/fa";
import {SiNextdotjs} from "react-icons/si";
import {ChakraUILink, JavascriptLink, NextJSLink, ReactJSLink, TOOL_LINK_NAMES} from "../../ToolLink";
import MyProject from "./MyProject";

const myProjectsData = [
  {
    imageURL: "/projects/sh.png",
    title: "Real Estate Portfolio Web App",
    projectURL: "https://symphoniahomes.com",
    desc: "A website that showcases portfolios and projects for our team of Real Estate Investors. " +
      "Fully responsive on desktop, tablet and mobile devices. " +
      "Users can search the gallery based on room type. " +
      "Each picture is accompanied by a Before / After view. " +
      "On mobile / tablet devices, users can swipe left / right on to view Before / After photos, " +
      "and swipe up or down to navigate to the next photo of the same category (similarly to that of Instagram).",
    status: "live",
    imagePercent: "40%",
    imageFit: "cover",
    tools: [TOOL_LINK_NAMES.JAVASCRIPT, TOOL_LINK_NAMES.REACTJS, TOOL_LINK_NAMES.NEXTJS, TOOL_LINK_NAMES.CHAKRA_UI],
  },
  {
    imageURL: "/projects/ia-chromeextension2.png",
    title: "Property Assessment & Evaluation Chrome Extension",
    projectURL: "",
    desc: "This Chrome extension allows Investors to quickly look up info about a Property (ex: property's assessed value, lot size, number of rooms, permits pulled, etc.)." +
      " Investors can then perform various calculations such as mortgage amount, max offer, cash flow if they buy and hold, or estimated profit if they choose to renovate and resell." +
      " Investors can also bookmark and share calculations with their friends." +
      " My plan is to also develop a web app & a mobile application that can sync the values with the Chrome Extension." +
      " My ambition for it is that it will include every utility a Real Estate Investor will need.",
    status: "in development",
    imagePercent: "40%",
    imageFit: "contain",
    tools: [TOOL_LINK_NAMES.JAVASCRIPT, TOOL_LINK_NAMES.JQUERY, TOOL_LINK_NAMES.BOOTSTRAP, TOOL_LINK_NAMES.AWS],
  },
  {
    imageURL: "/projects/qrbattlelogo3.png",
    title: "QR Battle - A Fun & Strategic Moving Game",
    projectURL: "",
    desc: "This is a mobile application / game that I'm really looking forward to its completion!" +
      " It is a game where you need to move around, " +
      "scan objects or targets and compete with other friends to win. I love both board game and esport, and love to move, travel and explore :), " +
      "and that was why I decided to work on this passion / creative \"digital sport game\" project. I use Socket.IO to exchange info between back (NodeJS) & front end, " +
      "and Flutter to develop the mobile application.",
    status: "in development",
    imagePercent: "40%",
    tools: [TOOL_LINK_NAMES.JAVASCRIPT, TOOL_LINK_NAMES.NODEJS, TOOL_LINK_NAMES.FLUTTER, TOOL_LINK_NAMES.HEROKU],
  },
  {
    imageURL: "/projects/metasym.png",
    title: "UI/UX Design For A Meta Physical Site",
    projectURL: "",
    desc: "I worked with the Client and created a new face for their website. They also wanted to launch a mobile application. The theme here is simple and mystical - in order to reflect the ancient and scientific perspective of this metaphysical study.",
    status: "completed",
    imagePercent: "40%",
    imageFit: "contain",
    tools: [TOOL_LINK_NAMES.FIGMA, TOOL_LINK_NAMES.ADOBE_XD],
  },
]


function Feature({title, desc, link, status, ...rest}) {
  return (
    <Box {...rest}>
      <Flex justifyContent="space-between">
        <Heading fontSize='xl'>
          <Link href={link}>{title}</Link>
          {/*<IconButton ml={2} aria-label={link} icon={<FaExternalLinkAlt/>} />*/}
        </Heading>
        {((status && status === "live") &&
          <Badge h={6} pt={1} px={2} colorScheme={"green"}>{status}</Badge>)}
      </Flex>
      <Link color={"black"} href={link}>{link}</Link>
      <Paragraph fontSize='1rem' lineHeight={1.6} mt={4}>{desc}</Paragraph>
    </Box>
  )
}

const Projects = ({isOpen, onOpen, onClose}) => {
  return <SlideFade in={true} offsetY={80} delay={0.2}>
    <Heading
      as="h1"
      fontSize={{base: "24px", md: "30px", lg: "36px"}}
      mb={3}
    >
      Projects
    </Heading>
    <Paragraph fontSize="xl" lineHeight={1.6} mb={50}>
      Throughout my <b>7+</b> years of experience, I've worked on a few projects
      for other agencies and clients. Here are some that I've worked on recently.
      Some are my own startup projects.
      <Text
        as={"span"}
        color={useColorModeValue("gray.900", "white")}>
        &nbsp;Interested in working together? I am always up for
        <Link
          fontWeight={"bold"}
          onClick={onOpen}
          color={useColorModeValue("blue.500", "blue.200")}
        >
          &nbsp;a free chat & consultation!
        </Link>
      </Text>
    </Paragraph>
    {
      myProjectsData.map((item, index) => {
          return <MyProject
            key={index}
            imageURL={item.imageURL}
            title={item.title}
            projectURL={item.projectURL}
            desc={item.desc}
            status={item.status}
            tools={item.tools}
            imagePercent={item.imagePercent}
            imageFit={item.imageFit}
          />
        }
      )
    }
  </SlideFade>
}


export default Projects;