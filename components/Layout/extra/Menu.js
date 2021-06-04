import {
  Menu,
  MenuButton,
  useColorModeValue,
  MenuList,
  Button,
  MenuItem,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";

const DropdownMenu = () => {
  return (
    <Menu isLazy>
      <MenuButton
        p={2}
        textAlign="left"
        rounded={"md"}
        bg="none"
        _hover={{
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
        _active={{
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
        as={Button}
        rightIcon={<FaAngleDown />}
      >
        Links
      </MenuButton>
      <MenuList>
        <MenuItem>Books</MenuItem>
        <MenuItem>Blog</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default DropdownMenu;
