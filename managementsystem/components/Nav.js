import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  PseudoBox,
  Link,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuButton,
  MenuDivider,
  Menu,
  Icon,
} from "@chakra-ui/react";
import { MdPerson } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const MenuItems = (props) => {
  const { children, isLast, to = "/", ...rest } = props;
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

const Nav = (props) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      <Flex align="center">
        <Text>Management System Mern</Text>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <AiOutlineClose /> : <AiOutlineMenu />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItems to="/">Home</MenuItems>
          <MenuItems to="/how">How It works </MenuItems>
          <MenuItems to="/features">Features </MenuItems>
          <MenuItems to="/pricing">Pricing </MenuItems>
          <MenuItems to="/signup">
            <Button size="sm" rounded="md" color="white" bg="#495464">
              Create Account
            </Button>
          </MenuItems>
          <MenuItems isLast>
            <Menu>
              <MenuButton as={Button} bg="#495464" size="sm">
                <Icon as={MdPerson} /> Profile
              </MenuButton>
              <MenuList color="#fff">
                <MenuGroup title="Profile" color="">
                  <MenuItem>My Account</MenuItem>
                  <MenuItem>Projects </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="Help">
                  <MenuItem>Docs</MenuItem>
                  <MenuItem>FAQ</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </MenuItems>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Nav;
