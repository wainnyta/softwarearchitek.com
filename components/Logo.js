import { useColorMode } from "@chakra-ui/react";

const Logo = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <svg
      version="1.1"
      fill={`${colorMode === "light" ? "black" : "#68d491"}`}
      x="0px"
      y="0px"
      width="30"
      viewBox="0 0 149.1 81.3"
      style={{ overflow: "visible" }}
    >
      <defs></defs>
      <g>
        <polygon points="94.9,0 78.6,24.4 116.6,81.3 149.1,81.3 	" />
        <polygon points="38,24.4 33.9,30.5 0,81.3 67.8,81.3 75.9,81.3 108.5,81.3 54.2,0 	" />
      </g>
    </svg>
  );
};

export default Logo;
