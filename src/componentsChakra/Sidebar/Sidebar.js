/*eslint-disable*/
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
// chakra imports
import {
  Button,
  Flex,
  Text,
  Link,
  Stack,
  Box,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import IconBox from "componentsChakra/Icons/IconBox";
import { DashboardLogo } from "componentsChakra/Icons/Icons";
import { Separator } from "componentsChakra/Separator/Separator";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// core components

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
  const [miniActive, setMiniActive] = React.useState(true);
  // to check for active links and opened collapses
  let location = useLocation();
  // this is for the rest of the collapses
  const [state, setState] = React.useState({});
  // React.useEffect(() => {
  //   setState(getCollapseStates(props.routes));
  // }, []);
  const mainPanel = React.useRef();
  // this creates the intial state of this component based on the collapse routes
  // that it gets through routes
  // const getCollapseStates = (routes) => {
  //   let initialState = {};
  //   routes.map((prop) => {
  //     if (prop.collapse) {
  //       initialState = {
  //         [prop.state]: getCollapseInitialState(prop.views),
  //         ...getCollapseStates(prop.views),
  //         ...initialState,
  //       };
  //     }
  //     return null;
  //   });
  //   return initialState;
  // };
  // this verifies if any of the collapses should be default opened on a rerender of this component
  // for example, on the refresh of the page,
  // while on the src/views/forms/RegularForms.jsx - route /admin/regular-forms
  // const getCollapseInitialState = (routes) => {
  //   for (let i = 0; i < routes.length; i++) {
  //     if (routes[i].collapse && getCollapseInitialState(routes[i].views)) {
  //       return true;
  //     } else if (location.pathname === routes[i].layout + routes[i].path) {
  //       return true;
  //     }
  //   }
  //   return false;
  // };
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname === routeName ? "active" : "";
  };
  // this function creates the links and collapses that appear in the sidebar (left menu)
  const createLinks = (route) => {
    const { rtlActive } = props;
    // Chakra Color Mode
    let activeBg = useColorModeValue("white", "gray.700");
    let inactiveBg = useColorModeValue("white", "gray.700");
    let activeColor = useColorModeValue("gray.700", "white");
    let inactiveColor = useColorModeValue("gray.400", "gray.400");
    let buttonShadow = "0px 7px 11px rgba(0, 0, 0, 0.04)";
    // let activeBg;
    // let inactiveBg;
    // let activeColor;
    // let inactiveColor;
    // let buttonShadow;
    // if (props.sidebarVariant == "transparent") {
    //   activeBg = useColorModeValue("white", "gray.700");
    //   inactiveBg = useColorModeValue("white", "gray.700");
    //   activeColor = useColorModeValue("gray.700", "white");
    //   inactiveColor = useColorModeValue("gray.400", "gray.400");
    //   buttonShadow = "0px 7px 11px rgba(0, 0, 0, 0.04)";
    // }
    return routes.map((prop, key) => {
      if (prop.redirect) {
        return null;
      }
      // if (prop.collapse) {
      //   var st = {};
      //   st[prop["state"]] = !state[prop.state];
      //   return (
      //     <ListItem key={key}>
      //       <NavLink
      //         to={"#"}
      //         onClick={(e) => {
      //           e.preventDefault();
      //           setState(st);
      //         }}
      //       >
      //         <Button w={"100%"} colorScheme={"blue"} mb={"30px"}>
      //           {prop.icon !== undefined ? (
      //             typeof prop.icon === "string" ? (
      //               <Icon>{prop.icon}</Icon>
      //             ) : (
      //               <prop.icon />
      //             )
      //           ) : (
      //             <span>{rtlActive ? prop.rtlMini : prop.mini}</span>
      //           )}
      //           <Text>{rtlActive ? prop.rtlName : prop.name}</Text>
      //         </Button>
      //       </NavLink>
      //       <Collapse in={state[prop.state]} unmountOnExit>
      //         <List>{createLinks(prop.views)}</List>
      //       </Collapse>
      //     </ListItem>
      //   );
      // }
      if (prop.category) {
        var st = {};
        st[prop["state"]] = !state[prop.state];
        return (
          <>
            <Text
              color={activeColor}
              fontWeight="bold"
              mb={{
                xl: "12px",
              }}
              mx="auto"
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              py="12px"
            >
              {rtlActive ? prop.rtlName : prop.name}
            </Text>
            {createLinks(prop.views)}
          </>
        );
      }
      return (
        <NavLink to={prop.layout + prop.path}>
          {activeRoute(prop.layout + prop.path) === "active" ? (
            <Button
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              boxShadow={buttonShadow}
              bg={activeBg}
              mb={{
                xl: "12px",
              }}
              mx={{
                xl: "auto",
              }}
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              py="12px"
              borderRadius="15px"
              _hover="none"
              w="100%"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: { buttonShadow },
              }}
            >
              <Flex>
                {typeof prop.icon === "string" ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                  <IconBox
                    bg="teal.300"
                    color="white"
                    h="30px"
                    w="30px"
                    me="12px"
                  >
                    {prop.icon}
                  </IconBox>
                )}
                <Text color={activeColor} my="auto" fontSize="sm">
                  {rtlActive ? prop.rtlName : prop.name}
                </Text>
              </Flex>
            </Button>
          ) : (
            <Button
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              bg="transparent"
              mb={{
                xl: "12px",
              }}
              mx={{
                xl: "auto",
              }}
              py="12px"
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              borderRadius="15px"
              _hover="none"
              w="100%"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              <Flex>
                {typeof prop.icon === "string" ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                  <IconBox
                    bg={inactiveBg}
                    color="teal.300"
                    h="30px"
                    w="30px"
                    me="12px"
                  >
                    {prop.icon}
                  </IconBox>
                )}
                <Text color={inactiveColor} my="auto" fontSize="sm">
                  {rtlActive ? prop.rtlName : prop.name}
                </Text>
              </Flex>
            </Button>
          )}
        </NavLink>
      );
    });
  };
  const { logo, logoText, routes, rtlActive } = props;

  var links = <>{createLinks(routes)}</>;
  //  BRAND
  //  Chakra Color Mode
  const mainText = useColorModeValue("gray.700", "gray.200");
  var brand = (
    <Box pt={"46px"} mb="12px">
      <Flex mb="30px" justifyContent="center" alignItems="center">
        <DashboardLogo w="83.5px" h="21.5px" />
        <Box w="1px" h="18px" mx="10px" backgroundColor={mainText}></Box>
        <Link
          href="https://chakra-ui.com/"
          target="_blank"
          color={"red"}
          // color={mainText}
          lineHeight="100%"
          mt="2px"
          fontWeight="bold"
          fontSize="11px"
        >
          {logoText}
        </Link>
      </Flex>
      <Separator></Separator>
    </Box>
  );

  // SIDEBAR
  return (
    <Box ref={mainPanel}>
      <Box display={{ sm: "none", xl: "block" }}>
        <Box
          w="275px"
          maxW="275px"
          position="absolute"
          h="100vh"
          ps="32px"
          pe="20px"
        >
          <Box>{brand}</Box>
          <Stack direction="column">
            <Box>{links}</Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

// FUNCTIONS

export function SidebarResponsive(props) {
  // to check for active links and opened collapses
  let location = useLocation();
  // this is for the rest of the collapses
  const [state, setState] = React.useState({});
  const mainPanel = React.useRef();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname === routeName ? "active" : "";
  };
  // this function creates the links and collapses that appear in the sidebar (left menu)
  const createLinks = (routes) => {
    const { rtlActive } = props;
    // Chakra Color Mode
    const activeBg = useColorModeValue("white", "gray.700");
    const inactiveBg = useColorModeValue("white", "gray.700");
    const activeColor = useColorModeValue("gray.700", "white");
    const inactiveColor = useColorModeValue("gray.400", "gray.400");
    return routes.map((prop, key) => {
      if (prop.redirect) {
        return null;
      }
      if (prop.category) {
        var st = {};
        st[prop["state"]] = !state[prop.state];
        return (
          <>
            <Text
              color={activeColor}
              fontWeight="bold"
              mb={{
                xl: "12px",
              }}
              mx="auto"
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              py="12px"
            >
              {rtlActive ? prop.rtlName : prop.name}
            </Text>
            {createLinks(prop.views)}
          </>
        );
      }
      return (
        <NavLink to={prop.layout + prop.path}>
          {activeRoute(prop.layout + prop.path) === "active" ? (
            <Button
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              bg={activeBg}
              mb={{
                xl: "12px",
              }}
              mx={{
                xl: "auto",
              }}
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              py="12px"
              borderRadius="15px"
              _hover="none"
              w="100%"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              <Flex>
                {typeof prop.icon === "string" ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                  <IconBox
                    bg="teal.300"
                    color="white"
                    h="30px"
                    w="30px"
                    me="12px"
                  >
                    {prop.icon}
                  </IconBox>
                )}
                <Text color={activeColor} my="auto" fontSize="sm">
                  {rtlActive ? prop.rtlName : prop.name}
                </Text>
              </Flex>
            </Button>
          ) : (
            <Button
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              bg="transparent"
              mb={{
                xl: "12px",
              }}
              mx={{
                xl: "auto",
              }}
              py="12px"
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              borderRadius="15px"
              _hover="none"
              w="100%"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              <Flex>
                {typeof prop.icon === "string" ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                  <IconBox
                    bg={inactiveBg}
                    color="teal.300"
                    h="30px"
                    w="30px"
                    me="12px"
                  >
                    {prop.icon}
                  </IconBox>
                )}
                <Text color={inactiveColor} my="auto" fontSize="sm">
                  {rtlActive ? prop.rtlName : prop.name}
                </Text>
              </Flex>
            </Button>
          )}
        </NavLink>
      );
    });
  };
  const { logo, logoText, routes, rtlActive } = props;

  var links = <>{createLinks(routes)}</>;
  //  BRAND
  //  Chakra Color Mode
  const mainText = useColorModeValue("gray.700", "gray.200");
  const navbarIcon = useColorModeValue("gray.500", "gray.200");
  var brand = (
    <Box pt={"46px"} mb="12px">
      <Flex mb="30px" justifyContent="center" alignItems="center">
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
      <Separator></Separator>
    </Box>
  );

  // SIDEBAR
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  // Color variables
  return (
    <Box ref={mainPanel}>
      <Box display={{ sm: "block", xl: "none" }}>
        <>
          <HamburgerIcon
            color={navbarIcon}
            w="18px"
            h="18px"
            me="16px"
            ref={btnRef}
            colorScheme="teal"
            onClick={onOpen}
          />
          <Drawer
            isOpen={isOpen}
            onClose={onClose}
            placement="left"
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent
              w="250px"
              maxW="250px"
              ms={{
                sm: "16px",
              }}
              my={{
                sm: "16px",
              }}
              borderRadius="16px"
            >
              <DrawerCloseButton />
              <DrawerBody maxW="250px" px="1rem">
                <Box maxW="100%" h="100vh">
                  <Box>{brand}</Box>
                  <Stack direction="column">
                    <Box>{links}</Box>
                  </Stack>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      </Box>
    </Box>
  );
}
// PROPS

Sidebar.propTypes = {
  bgColor: PropTypes.oneOf(["white", "black", "blue"]),
  rtlActive: PropTypes.bool,
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
