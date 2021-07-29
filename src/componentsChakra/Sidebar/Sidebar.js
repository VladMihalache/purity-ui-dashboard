/*eslint-disable*/
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
// chakra imports
import {Button, Flex, Text, Link, Image, Avatar, Stack, HStack, VStack, Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, useColorModeValue,} from "@chakra-ui/react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import cx from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";
import Collapse from "@material-ui/core/Collapse";
import Icon from "@material-ui/core/Icon";

// core components
import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.js";

import sidebarStyle from "assets/jss/material-dashboard-pro-react/components/sidebarStyle.js";

import avatar from "assets/img/faces/avatar.jpg";

const useStyles = makeStyles(sidebarStyle);

var ps;

// We've created this component so we can have a ref to the wrapper of the links that appears in our sidebar.
// This was necessary so that we could initialize PerfectScrollbar on the links.
// There might be something with the Hidden component from material-ui, and we didn't have access to
// the links, and couldn't initialize the plugin.
function SidebarWrapper({ className, headerLinks, links }) {
  const sidebarWrapper = React.useRef();
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebarWrapper.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  return (
    <div className={className}>
      {headerLinks}
      {links}
    </div>
  );
}







// FUNCTIONS

function Sidebar(props) {
  const classes = useStyles();
  const [miniActive, setMiniActive] = React.useState(true);
  // to check for active links and opened collapses
  let location = useLocation();
  // this is for the rest of the collapses
  const [state, setState] = React.useState({});
  React.useEffect(() => {
    setState(getCollapseStates(props.routes));
  }, []);
  const mainPanel = React.useRef();
  // this creates the intial state of this component based on the collapse routes
  // that it gets through routes
  const getCollapseStates = (routes) => {
    let initialState = {};
    routes.map((prop) => {
      if (prop.collapse) {
        initialState = {
          [prop.state]: getCollapseInitialState(prop.views),
          ...getCollapseStates(prop.views),
          ...initialState,
        };
      }
      return null;
    });
    return initialState;
  };
  // this verifies if any of the collapses should be default opened on a rerender of this component
  // for example, on the refresh of the page,
  // while on the src/views/forms/RegularForms.jsx - route /admin/regular-forms
  const getCollapseInitialState = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse && getCollapseInitialState(routes[i].views)) {
        return true;
      } else if (location.pathname === routes[i].layout + routes[i].path) {
        return true;
      }
    }
    return false;
  };
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname === routeName ? "active" : "";
  };
  // this function creates the links and collapses that appear in the sidebar (left menu)
  const createLinks = (routes) => {
    const { rtlActive } = props;
    return routes.map((prop, key) => {
      if (prop.redirect) {
        return null;
      }
      // if (prop.collapse) {
      //   var st = {};
      //   st[prop["state"]] = !state[prop.state];
      //   return (
      //     <ListItem
      //       key={key}
      //     >
      //       <NavLink
      //         to={"#"}
      //         onClick={(e) => {
      //           e.preventDefault();
      //           setState(st);
      //         }}
      //       >
      //       <Button w={"100%"} colorScheme={"blue"} mb={"30px"}>
      //         {prop.icon !== undefined ? (
      //           typeof prop.icon === "string" ? (
      //             <Icon>{prop.icon}</Icon>
      //           ) : (
      //             <prop.icon />
      //           )
      //         ) : (
      //           <span>
      //             {rtlActive ? prop.rtlMini : prop.mini}
      //           </span>
      //         )}
      //         <Text>{rtlActive ? prop.rtlName : prop.name}</Text>
      //       </Button>
      //       </NavLink>
      //       <Collapse in={state[prop.state]} unmountOnExit>
      //         <List>
      //           {createLinks(prop.views)}
      //         </List>
      //       </Collapse>
      //     </ListItem>
      //   );
      // }
      return (
          <NavLink to={prop.layout + prop.path} >
          <Button  w={"100%"} colorScheme={"red"} mb={"30px"} px={"16px"} py={"12px"}>
            <Flex>
              {prop.icon !== undefined ? (
                typeof prop.icon === "string" ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                  <prop.icon />
                )
              ) : (
                <span>
                  {rtlActive ? prop.rtlMini : prop.mini}
                </span>
              )}
              <Text> {rtlActive ? prop.rtlName : prop.name} </Text>
            </Flex>
          </Button>
          </NavLink>
      );
    });
  };
  const { logo, image, logoText, routes, bgColor, rtlActive } = props;









  var links = <List className={classes.list}>{createLinks(routes)}</List>;












//  BRAND
const logoColor= useColorModeValue("red.500", "red.200");
  var brand = (
    <HStack pt={"46px"}>
      <Link w={"84px"} h={"22px"} href="https://chakra-ui.com/" target="_blank" >
        <Image w={"81px"} h={"21.5px"} src={logo} alt="logo" />
      </Link>
      <Box w={"1px"} h={"12px"} backgroundColor={""}></Box>
      <Link href="https://chakra-ui.com/" target="_blank" color={"gray.700"}>
        {logoText}
      </Link>
    </HStack>
  );






// SIDEBAR

  const drawerPaper =
    classes.drawerPaper +
    " " +
    cx({
      [classes.drawerPaperMini]: props.miniActive && miniActive,
      [classes.drawerPaperRTL]: rtlActive,
    });
  const sidebarWrapper =
    classes.sidebarWrapper +
    " " +
    cx({
      [classes.drawerPaperMini]: props.miniActive && miniActive,
      [classes.sidebarWrapperWithPerfectScrollbar]:
        navigator.platform.indexOf("Win") > -1,
    });
  return (
    <div ref={mainPanel}>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={rtlActive ? "left" : "right"}
          open={props.open}
          classes={{
            paper: drawerPaper + " " + classes[bgColor + "Background"],
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {brand}
          <SidebarWrapper
            className={sidebarWrapper}
            headerLinks={<AdminNavbarLinks rtlActive={rtlActive} />}
            links={links}
          />
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          onMouseOver={() => setMiniActive(false)}
          onMouseOut={() => setMiniActive(true)}
          anchor={rtlActive ? "right" : "left"}
          variant="permanent"
          open
          classes={{
            paper: drawerPaper + " " + classes[bgColor + "Background"],
          }}
        >
          {brand}
          <SidebarWrapper
            className={sidebarWrapper}
            links={links}
          />
        </Drawer>
      </Hidden>
    </div>
  );
}









// PROPS

Sidebar.propTypes = {
  bgColor: PropTypes.oneOf(["white", "black", "blue"]),
  rtlActive: PropTypes.bool,
  color: PropTypes.oneOf([
    "white",
    "red",
    "orange",
    "green",
    "blue",
    "purple",
    "rose",
  ]),
  logo: PropTypes.string,
  logoText: PropTypes.string,
  image: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  miniActive: PropTypes.bool,
  open: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
};

SidebarWrapper.propTypes = {
  className: PropTypes.string,
  headerLinks: PropTypes.object,
  links: PropTypes.object,
};

export default Sidebar;
