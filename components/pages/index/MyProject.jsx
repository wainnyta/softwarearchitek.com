import {Badge, Box, Flex, Heading, HStack, Image, Link, Stack, useColorModeValue, Wrap} from "@chakra-ui/react";
import Paragraph from "../../Paragraph";
import {getToolLinkByName, JavascriptLink, NextJSLink, ReactJSLink} from "../../ToolLink";
import {useState} from "react";
import Lightbox from "react-image-lightbox";

function Feature({ title, desc, link, status, ...rest }) {
  return (
    <Box {...rest}>
      <Flex justifyContent="space-between">
        <Heading fontSize='xl'>
          {link && <Link href={link}>{title}</Link>}
          {!link && title}
          {/*<IconButton ml={2} aria-label={link} icon={<FaExternalLinkAlt/>} />*/}
        </Heading>
        {((status && status === "live") &&
          <Badge h={6} pt={1} px={2} ml={{base: 2, md: 6}} colorScheme={"green"} >{status}</Badge>)}
        {((status && status === "in development") &&
          <Badge h={6} pt={1} px={2} ml={{base: 2, md: 6}} colorScheme={"orange"} >{status}</Badge>)}
        {((status && status === "completed") &&
          <Badge h={6} pt={1} px={2} ml={{base: 2, md: 6}} colorScheme={"blue"} >{status}</Badge>)}
      </Flex>
      <Link color={useColorModeValue("linkedin.600", "linkedin.300")} href={link}>{link}</Link>
      <Paragraph fontSize={{base: '1.1rem', md: '1.1rem'}} lineHeight={1.6} mt={4}>{desc}</Paragraph>
    </Box>
  )
}

const MyProject = ({imageURL, imagePercent, imageFit, title, projectURL, desc, status, tools}) => {

  const[currentImage, setCurrentImage] = useState("");
  const[isLightboxOpen, setIsLightBoxOpen] = useState(false);

  return <>
    <Flex
      bg={{base: useColorModeValue("white", "gray.800"), md: useColorModeValue("#f9fcfe", "gray.800")}}
      direction={{base: "column", md: "row"}}
      py={10}
      p={8}
      my={10}
      shadow='md'
      borderWidth='1px'
      borderRadius={10}
      borderColor={useColorModeValue("gray.200", "gray.700")}
      position={"relative"}
      _hover={{
        bg: useColorModeValue("white", "gray.700"),
        borderColor: useColorModeValue("linkedin.100")
      }}
    >
      <Flex
        justify={"center"}
        align={"center"}
        overflow={"hidden"}
        flex={4}
        opacity={{base: "100%", md: "70%"}}
        className="project-images-wrapper"
        _hover={{
          opacity: "100%",
          shadow: 'xl',
          border: 'md',
          borderColor: "black"
        }}
      >
        <img
          className="project-images"
          src={imageURL}
          onClick={() => {
            setCurrentImage(imageURL);
            setIsLightBoxOpen(true);
          }}
          // border={"1px"} borderColor={"gray.200"} borderRadius={10}
        />
      </Flex>

      <style jsx>{`
        .project-images:hover {
          cursor: pointer;
          opacity: 100% !important;
        }
        .project-images {
          flex-shrink: 0;
          object-fit: cover;
          height: 100%;
          width: 100%;
          border-radius: 6px;
        }
      `}</style>

      <Stack spacing={8} pl={{base: 0, md: 6}} pt={{base: 8, md: 0}} justifyContent={"space-between"} flex={6}>
        <Feature
          status={status}
          title={title}
          link={projectURL}
          desc={desc}
        />

        <Wrap spacing={"12px"} align={"center"}>
          {tools?.map((item, number) => (
            <div key={number}>
              {getToolLinkByName(item)}
            </div>
          ))}
        </Wrap>


      </Stack>

      {/*<Badge colorScheme={"green"} position="absolute" right={10} top={6}>live</Badge>*/}
    </Flex>
    {
      isLightboxOpen &&
      <Lightbox
        mainSrc={currentImage}
        onCloseRequest={() => setIsLightBoxOpen(false)} />
    }
  </>
}

export default MyProject;