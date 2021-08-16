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
  const [transmitted, setTransmitted] = useState();
  return (
    <Flex
      alignItems="center"
      borderRadius="16px"
      display="flex"
      minHeight="75px"
      justifyContent="center"
      lineHeight="25.6px"
      marginTop="24px"
      mx="auto"
      padding-Bottom="8px"
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
              onChange={
                ((value) => setTransmitted(value),
                (event) => {
                  props.onChange("red");
                })
              }
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
