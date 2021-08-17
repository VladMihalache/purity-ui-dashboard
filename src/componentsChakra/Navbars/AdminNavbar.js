import React, { useState, useEffect } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import cx from "classnames";
// Chakra Imports
import {
  Button,
  Link,
  useColorModeValue,
  Box,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  useDisclosure,
  Input,
} from "@chakra-ui/react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";

// material-ui icons
import Menu from "@material-ui/icons/Menu";
import MoreVert from "@material-ui/icons/MoreVert";
import ViewList from "@material-ui/icons/ViewList";

// core components
import AdminNavbarLinks from "./AdminNavbarLinks";
// import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-pro-react/components/adminNavbarStyle.js";

const useStyles = makeStyles(styles);

export default function AdminNavbar(props) {
  // const [y, setY] = useState(0);

  // const handleNavigation = (e) => {
  //   const window = e.currentTarget;
  //   if (y > window.scrollY) {
  //     console.log("scrolling up");
  //   } else if (y < window.scrollY) {
  //     console.log("scrolling down");
  //   }
  //   setY(window.scrollY);
  // };

  // useEffect(() => {
  //   setY(window.scrollY);

  //   window.addEventListener("scroll", (e) => handleNavigation(e));
  // }, []);
  const [sidebarVariant, setSidebarVariant] = useState();
  const [fixed, setFixed] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const classes = useStyles();
  const { rtlActive, brandText } = props;
  const sidebarMinimize =
    classes.sidebarMinimize +
    " " +
    cx({
      [classes.sidebarMinimizeRTL]: rtlActive,
    });
  const mainText = useColorModeValue("gray.700", "gray.200");
  let navbarPosition = "absolute";
  let navbarFilter = "none";
  let navbarShadow = "none";
  let navbarBg = "none";
  let navbarBorder = "transparent";
  // let navbarWidth= "calc(100vw - 60px - 275px)";
  if (fixed === true)
    if (scrolled === true) {
      navbarPosition = "fixed";
      navbarShadow = useColorModeValue(
        "0px 7px 23px rgba(0, 0, 0, 0.05)",
        "none"
      );
      navbarBg = useColorModeValue(
        "linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)",
        "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
      );
      navbarBorder = useColorModeValue("#FFFFFF", "rgba(255, 255, 255, 0.31)");
      navbarFilter = useColorModeValue(
        "none",
        "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))"
      );
      // navbarWidth= "calc(100vw - 60px";
    }
  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);
  return (
    <Flex
      // position="fixed"
      position={navbarPosition}
      boxShadow={navbarShadow}
      bg={navbarBg}
      borderWidth="1.5px"
      borderStyle="solid"
      borderColor={navbarBorder}
      filter={navbarFilter}
      transitionDelay="0s, 0s, 0s, 0s"
      transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
      transition-property="box-shadow, background-color, filter, border"
      transitionTimingFunction="linear, linear, linear, linear"
      alignItems={{ xl: "center" }}
      borderRadius="16px"
      display="flex"
      minH="75px"
      justifyContent={{ xl: "center" }}
      lineHeight="25.6px"
      mx="auto"
      pb="8px"
      right={{ sm: "15px", xl: "30px" }}
      paddingLeft={{
        sm: "15px",
        md: "30px",
      }}
      paddingRight={{
        sm: "15px",
        md: "30px",
      }}
      paddingTop="8px"
      top="18px"
      w={{ sm: "calc(100vw - 30px)", xl: "calc(100vw - 75px - 275px)" }}
    >
      <Flex
        w="100%"
        flexDirection={{
          sm: "column",
          md: "row",
        }}
        alignItems={{ xl: "center" }}
      >
        <Box mb={{ sm: "8px", md: "0px" }}>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" color="gray.400">
                Pages
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#" color={mainText}>
                {brandText}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          {/* Here we create navbar brand, based on route name */}
          <Link
            href="#"
            bg="inherit"
            borderRadius="inherit"
            fontWeight="bold"
            _hover={{ color: { mainText } }}
            _active={{
              bg: "inherit",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}
          >
            {brandText}
          </Link>
        </Box>
        <Hidden>
          <Box ms="auto" w={{ sm: "100%", md: "unset" }}>
            {/* <Input
              onChange={(event) => {
                props.onChange("red");
              }}
            /> */}
            <AdminNavbarLinks
              rtlActive={rtlActive}
              logoText={props.logoText}
              disclosureFunc={props.disclosureFunc}
              fixed={fixed}
              onChange={
                ((value) => setSidebarVariant(value),
                (value) => {
                  props.onChange(value);
                })
              }
              onSwitch={(value) => {
                setFixed(value);
                console.log(value);
              }}
            />
          </Box>
        </Hidden>
      </Flex>
    </Flex>
  );
}

AdminNavbar.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  brandText: PropTypes.string,
  miniActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  sidebarMinimize: PropTypes.func,
};
