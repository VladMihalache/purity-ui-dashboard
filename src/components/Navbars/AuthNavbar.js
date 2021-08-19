// @material-ui/core components
import {
  Button,
  Flex,
  Box,
  useColorMode,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/icons/Menu";
import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import { DashboardLogo } from "components/Icons/Icons";

export default function AuthNavbar(props) {
  const [open, setOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const { logo, logoText, routes, rtlActive, sidebarVariant } = props;
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  };
  const { color, brandText } = props;
  var list = (
    <Flex>
      <NavLink to={"/admin/dashboard"}>
        <Button></Button>
      </NavLink>
      <NavLink to={"/auth/profile"}></NavLink>
      <NavLink to={"/auth/signIn"}></NavLink>
      <NavLink to={"/auth/signUp"}></NavLink>
    </Flex>
  );
  const navbarIcon = useColorModeValue("gray.700", "gray.200");
  const { colorMode, toggleColorMode } = useColorMode();
  const mainText = useColorModeValue("gray.700", "gray.200");
  const navbarBg = useColorModeValue(
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
  const navbarBorder = useColorModeValue(
    "1.5px solid #FFFFFF",
    "1.5px solid rgba(255, 255, 255, 0.31)"
  );
  const navbarShadow = useColorModeValue(
    "0px 7px 23px rgba(0, 0, 0, 0.05)",
    "none"
  );
  const navbarFilter = useColorModeValue(
    "none",
    "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))"
  );
  return (
    <Flex
      position="fixed"
      top="16px"
      left="50%"
      transform="translate(-50%, 0px)"
      background={navbarBg}
      border={navbarBorder}
      boxShadow={navbarShadow}
      filter={navbarFilter}
      backdropFilter="blur(21px)"
      borderRadius="70px"
      px="16px"
      py="8px"
      mx="auto"
      width="1044px"
      maxW="100%"
      alignItems="center"
    >
      <Flex>
        <Flex justifyContent="center" alignItems="center">
          <DashboardLogo w="83.5px" h="21.5px" />
          <Box w="1px" h="18px" mx="10px" backgroundColor={mainText}></Box>
          <Link
            href="https://chakra-ui.com/"
            target="_blank"
            color={mainText}
            lineHeight="100%"
            mt="2px"
            fontWeight="bold"
            fontSize="11px"
          >
            {logoText}
          </Link>
        </Flex>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Flex>
    </Flex>
  );
}

AuthNavbar.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  brandText: PropTypes.string,
};
