// @material-ui/core components
import {
  Box,
  Button,
  Flex,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import {
  HomeIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  DashboardLogo,
} from "components/Icons/Icons";
import { SidebarResponsive } from "components/Sidebar/Sidebar";
import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import routes from "routes.js";
export default function AuthNavbar(props) {
  const [open, setOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const { logo, logoText, rtlActive, sidebarVariant, ...rest } = props;
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  };
  const { color, brandText } = props;
  var linksAuth = (
    <Flex display={{ sm: "none", lg: "flex" }}>
      <NavLink to="/admin/dashboard">
        <Button
          fontSize="sm"
          ms="0px"
          me="0px"
          px="0px"
          me={{ sm: "2px", md: "16px" }}
          color={navbarIcon}
          variant="transparent-with-icon"
          leftIcon={<HomeIcon color={navbarIcon} w="12px" h="12px" me="0px" />}
        >
          <Text>Dashboard</Text>
        </Button>
      </NavLink>
      <NavLink to="/admin/profile">
        <Button
          fontSize="sm"
          ms="0px"
          me="0px"
          px="0px"
          me={{ sm: "2px", md: "16px" }}
          color={navbarIcon}
          variant="transparent-with-icon"
          leftIcon={
            <PersonIcon color={navbarIcon} w="12px" h="12px" me="0px" />
          }
        >
          <Text>Profile</Text>
        </Button>
      </NavLink>
      <NavLink to="/auth/signup">
        <Button
          fontSize="sm"
          ms="0px"
          me="0px"
          px="0px"
          me={{ sm: "2px", md: "16px" }}
          color={navbarIcon}
          variant="transparent-with-icon"
          leftIcon={
            <RocketIcon color={navbarIcon} w="12px" h="12px" me="0px" />
          }
        >
          <Text>Sign Up</Text>
        </Button>
      </NavLink>
      <NavLink to="/auth/signin">
        <Button
          fontSize="sm"
          ms="0px"
          px="0px"
          me={{ sm: "2px", md: "16px" }}
          color={navbarIcon}
          variant="transparent-with-icon"
          leftIcon={
            <DocumentIcon color={navbarIcon} w="12px" h="12px" me="0px" />
          }
        >
          <Text>Sign In</Text>
        </Button>
      </NavLink>
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
  const bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.800"
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
      py="22px"
      mx="auto"
      width="1044px"
      maxW="90%"
      alignItems="center"
    >
      <Flex w="100%" justifyContent="space-between">
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
        <SidebarResponsive
          logoText={props.logoText}
          secondary={props.secondary}
          routes={routes}
          // logo={logo}
          {...rest}
        />
        {linksAuth}
        <Button
          bg={bgButton}
          color="white"
          fontSize="xs"
          variant="no-hover"
          borderRadius="35px"
          px="30px"
          display={{
            sm: "none",
            lg: "flex",
          }}
        >
          FREE DOWNLOAD
        </Button>
      </Flex>
    </Flex>
  );
}

AuthNavbar.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  brandText: PropTypes.string,
};
