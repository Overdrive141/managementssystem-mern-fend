import React from "react";
import {
  MenuButton,
  MenuDivider,
  Box,
  Flex,
  Link,
  Menu,
  Text,
  Button,
  MenuList,
  MenuGroup,
  MenuItem,
  Icon,
} from "@chakra-ui/react";
import { MdPerson } from "react-icons/md";

const NavLink = ({ children, ...props }) => (
  <Button px={2} color="#495464" {...props}>
    {children}
  </Button>
);

function Nav(props) {
  return (
    <Flex
      bg="#f4f4f2"
      w="100%"
      h={100}
      px={5}
      py={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <Text pl={3} color="#495464" style={{ fontWeight: "800" }}>
          Management System Mern
        </Text>
      </Flex>
      <Box>
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
        <NavLink>Login/Register</NavLink>
        <NavLink>
          <Menu>
            <MenuButton as={Button} colorScheme="#495464">
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
        </NavLink>
      </Box>
    </Flex>
  );
}

export default Nav;
