import {Box, Image, useColorMode, useColorModeValue} from "@chakra-ui/react";
import { useRouter } from "next/router";

const Logo = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  return (
    <Box className="logo" onClick={() => router.push("/")} alignSelf={"start"}>
      <img width={"59px"} height={"59px"}  src={useColorModeValue("/logo_black.svg", "/logo_white.svg")} />
    </Box>
  );
};

export default Logo;
