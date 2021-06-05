import {
  Menu,
  MenuButton,
  useColorModeValue,
  MenuList,
  Button,
  MenuItem,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import Link from "./Link";

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
        fontWeight={400}
        as={Button}
        rightIcon={<FaAngleDown />}
      >
        Links
      </MenuButton>
      <MenuList>
        <Link href="/books">
          <MenuItem>Books</MenuItem>
        </Link>
        <Link href="/blog">
          <MenuItem>Blog</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export default DropdownMenu;
