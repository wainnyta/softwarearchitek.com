import {Image, Link, useColorModeValue} from "@chakra-ui/react";

const ToolLink = ({imageURL, link, width}) => {
  return (
    <Link href={link} target="_blank">
      <Image
        src={imageURL}
        w={width || "30px"}
      />
    </Link>
  )
}

const JavascriptLink = () => ToolLink({imageURL: "/skills/javascript.png", link: "https://www.javascript.com/"})
const ReactJSLink = () => ToolLink({imageURL: "/skills/react.png", link: "https://reactjs.org"});
const NextJSLink = () => ToolLink({imageURL: useColorModeValue("/skills/Nextjs-logo.svg", "/skills/Nextjs-logo_light.svg"), link: "https://nextjs.org", width: "50px"});
const ChakraUILink = () => ToolLink({imageURL: useColorModeValue("/skills/chakra-ui.svg", "/skills/chakra-ui_light.svg"), link: "https://chakra-ui.com/", width: "70px"});
const JQueryLink = () => ToolLink({imageURL: useColorModeValue("/skills/jquery.png", "/skills/jquery_light.png"), link: "https://jquery.com/", width: "70px"});
const BootstrapLink = () => ToolLink({imageURL: "/skills/bootstrap.png", link: "https://getbootstrap.com/"})
const AWSLink = () => ToolLink({imageURL: useColorModeValue("/skills/aws.png", "/skills/aws_light.png"), link: "https://aws.amazon.com/", width: "35px"})
const FigmaLink = () => ToolLink({imageURL: useColorModeValue("/skills/figma.png", "/skills/figma.png"), link: "https://www.figma.com/", width: "35px"})
const AdobeXDLink = () => ToolLink({imageURL: useColorModeValue("/skills/adobexd.png", "/skills/adobexd.png"), link: "https://www.adobe.com/ca/products/xd.html", width: "35px"})
const HerokuLink = () => ToolLink({imageURL: useColorModeValue("/skills/heroku.png", "/skills/heroku.png"), link: "https://www.heroku.com/", width: "35px"})
const NodeJSLink = () => ToolLink({imageURL: useColorModeValue("/skills/nodejs.svg", "/skills/nodejs_light.svg"), link: "https://nodejs.org/", width: "70px"})
const FlutterLink = () => ToolLink({imageURL: useColorModeValue("/skills/flutter.svg", "/skills/flutter_light.svg"), link: "https://flutter.dev/", width: "70px"})
const PHPLink = () => ToolLink({imageURL: useColorModeValue("/skills/php.png", "/skills/php.png"), link: "https://www.php.net/", width: "70px"})

class TOOL_LINK_NAMES {
  static JAVASCRIPT = "JAVASCRIPT"
  static REACTJS = "REACTJS"
  static NEXTJS = "NEXTJS"
  static CHAKRA_UI = "CHAKRA_UI"
  static JQUERY = "JQUERY"
  static BOOTSTRAP = "BOOTSTRAP"
  static AWS = "AWS"
  static FIGMA = "FIGMA"
  static ADOBE_XD = "ADOBE_XD"
  static HEROKU = "HEROKU"
  static NODEJS = "NODEJS"
  static FLUTTER = "FLUTTER"
  static PHP = "PHP"
}

const getToolLinkByName = (name) => {
  switch(name){
    case TOOL_LINK_NAMES.JAVASCRIPT:
      return <JavascriptLink />
    case TOOL_LINK_NAMES.REACTJS:
      return <ReactJSLink />
    case TOOL_LINK_NAMES.NEXTJS:
      return <NextJSLink />
    case TOOL_LINK_NAMES.CHAKRA_UI:
      return <ChakraUILink />
    case TOOL_LINK_NAMES.JQUERY:
      return <JQueryLink />
    case TOOL_LINK_NAMES.BOOTSTRAP:
      return <BootstrapLink />
    case TOOL_LINK_NAMES.AWS:
      return <AWSLink />
    case TOOL_LINK_NAMES.FIGMA:
      return <FigmaLink />
    case TOOL_LINK_NAMES.ADOBE_XD:
      return <AdobeXDLink />
    case TOOL_LINK_NAMES.HEROKU:
      return <HerokuLink />
    case TOOL_LINK_NAMES.NODEJS:
      return <NodeJSLink />
    case TOOL_LINK_NAMES.FLUTTER:
      return <FlutterLink />
    case TOOL_LINK_NAMES.PHP:
      return <PHPLink />
  }
}

export {
  ToolLink,
  JavascriptLink,
  ReactJSLink,
  NextJSLink,
  ChakraUILink,
  JQueryLink,
  AWSLink,
  BootstrapLink,
  FigmaLink,
  AdobeXDLink,
  HerokuLink,
  NodeJSLink,
  FlutterLink,
  PHPLink,
  getToolLinkByName,
  TOOL_LINK_NAMES,
}