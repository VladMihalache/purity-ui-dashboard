// Chakra-UI imports
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "components/Footer/Footer.js";
import MainPanel from "components/Layout/MainPanel";
import PanelContainer from "components/Layout/PanelContainer";
import PanelContent from "components/Layout/PanelContent";
// @material-ui/core components
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "routes.js";

var ps;

export default function RTL(props) {
  const { ...rest } = props;
  // states and functions
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [miniActive, setMiniActive] = React.useState(false);
  // const [logo, setLogo] = React.useState(
  //   require("assets/img/logo-white.svg").default
  // );
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
  const getActiveRoute = (routes) => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
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
      if (prop.layout === "/rtl") {
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
  return (
    <ChakraProvider>
      <Sidebar
        routes={routes}
        logoText={"توقيت الإبداعية"}
        // logo={logo}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        miniActive={miniActive}
        rtlActive
        {...rest}
      />
      <MainPanel
        variant="rtl"
        w={{
          lg: "calc(100% - 260px)",
        }}
      >
        <AdminNavbar
          rtlActive
          sidebarMinimize={sidebarMinimize.bind(this)}
          miniActive={miniActive}
          handleDrawerToggle={handleDrawerToggle}
          brandText={getActiveRoute(routes)}
          {...rest}
        />
        <PanelContent>
          <PanelContainer>
            <Switch>
              {getRoutes(routes)}
              <Redirect from="/rtl" to="/rtl/rtl-support-page" />
            </Switch>
          </PanelContainer>
        </PanelContent>
        <Footer rtlActive />
      </MainPanel>
    </ChakraProvider>
  );
}
