import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// Chakra-UI imports
import {
  ChakraProvider,
  useColorModeValue,
  Portal,
  Button,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import theme from "../theme/theme";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// Custom Components
import { DashboardLogo } from "../componentsChakra/Icons/Icons";
// Layout
import MainPanel from "../componentsChakra/Layout/MainPanel";
import PanelContent from "../componentsChakra/Layout/PanelContent";
import PanelContainer from "../componentsChakra/Layout/PanelContainer";
import AdminNavbar from "componentsChakra/Navbars/AdminNavbar.js";
import Footer from "componentsChakra/Footer/Footer.js";

import Sidebar from "componentsChakra/Sidebar/Sidebar.js";

import routes from "routes.js";

var ps;
export default function Dashboard(props) {
  const { ...rest } = props;
  // states and functions
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [miniActive, setMiniActive] = React.useState(false);
  const [sidebarVariant, setSidebarVariant] = useState("transparent");
  // ref for main panel div
  const mainPanel = React.createRef();
  // effect instead of componentDidMount, componentDidUpdate and componentWillUnmount
  // React.useEffect(() => {
  //   if (navigator.platform.indexOf("Win") > -1) {
  //     ps = new PerfectScrollbar(mainPanel.current, {
  //       suppressScrollX: true,
  //       suppressScrollY: false,
  //     });
  //     document.body.style.overflow = "hidden";
  //   }
  //   window.addEventListener("resize", resizeFunction);

  //   // Specify how to clean up after this effect:
  //   return function cleanup() {
  //     if (navigator.platform.indexOf("Win") > -1) {
  //       ps.destroy();
  //     }
  //     window.removeEventListener("resize", resizeFunction);
  //   };
  // });
  // functions for changeing the states from components
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/admin/full-screen-maps";
  };
  const getActiveRoute = (routes) => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (routes[i].category) {
        let categoryActiveRoute = getActiveRoute(routes[i].views);
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.category === "account") {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  const sidebarMinimize = () => {
    setMiniActive(!miniActive);
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  // Chakra Color Mode
  const mainText = useColorModeValue("gray.700", "gray.200");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const logo = <DashboardLogo color={mainText} />;
  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <Sidebar
        routes={routes}
        logoText={"DASHBOARD"}
        logo={logo}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        miniActive={miniActive}
        display="none"
        {...rest}
        opening={isOpen}
        closing={onClose}
        sidebarVariant={sidebarVariant}
      />
      <MainPanel
        w={{
          base: "100%",
          xl: "calc(100% - 275px)",
        }}
      >
        <Portal>
          <AdminNavbar
            sidebarMinimize={sidebarMinimize.bind(this)}
            miniActive={miniActive}
            logoText={"DASHBOARD"}
            brandText={getActiveRoute(routes)}
            handleDrawerToggle={handleDrawerToggle}
            disclosureFunc={onOpen}
            onChange={(value) => setSidebarVariant(value)}
            {...rest}
          />
        </Portal>
        {getRoute() ? (
          <PanelContent>
            <PanelContainer>
              <Switch>
                {getRoutes(routes)}
                <Redirect from="/admin" to="/admin/dashboard" />
              </Switch>
            </PanelContainer>
          </PanelContent>
        ) : null}
        <Footer />
      </MainPanel>
    </ChakraProvider>
  );
}
