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
  const { isOpen, onOpen, onClose } = useDisclosure();
  let navbarPosition = "absolute";
  let navbarShadow = "none";
  let navbarBg = "none";
  let navbarBorder = "red";
  if (fixed === true) {
    navbarPosition = "fixed";
    navbarShadow =
      "rgba(255, 255, 255, 0.9) 0px 0px 1px 1px inset, rgba(0, 0, 0, 0.05) 0px 20px 27px 0px";
    navbarBg = "red";
    navbarBorder = "red";
  }
  const changeNavbar = () => {
    if (window.scrollY > 75) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    console.log(window.scrollY);
  };
  window.addEventListener("scroll", changeNavbar);
  return (
    <Flex
      position={navbarPosition}
      boxShadow={navbarShadow}
      bg={navbarBg}
      border={navbarBorder}
      alignItems="center"
      borderRadius="16px"
      display="flex"
      minHeight="75px"
      justifyContent="center"
      lineHeight="25.6px"
      marginTop="24px"
      mx="auto"
      padding-Bottom="8px"
      top="8px"
      paddingLeft={{
        sm: "15px",
        md: "30px",
      }}
      paddingRight={{
        sm: "15px",
        md: "30px",
      }}
      paddingTop="8px"
      top="8px"
      transitionDelay="0s, 0s"
      transitionDuration="0.25s, 0.25s"
      transitionProperty="box-shadow, background-color"
      transitionTimingFunction="ease-in, ease-in"
      w="calc(100% - 60px)"
    >
      <Flex
        w="100%"
        flexDirection={{
          sm: "column",
          md: "row",
        }}
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
