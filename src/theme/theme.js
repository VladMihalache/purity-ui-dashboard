import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { breakpoints } from "./foundations/breakpoints";
import { buttonStyles } from "./components/button";
import { drawerStyles } from "./components/drawer";
import { CardComponent } from "./additions/card/Card";
import { CardBodyComponent } from "./additions/card/CardBody";
import { CardFooterComponent } from "./additions/card/CardFooter";
import { CardHeaderComponent } from "./additions/card/CardHeader";
import { MainPanelComponent } from "./additions/layout/MainPanel";
import { PanelContentComponent } from "./additions/layout/PanelContent";
import { PanelContainerComponent } from "./additions/layout/PanelContainer";
// import { mode } from "@chakra-ui/theme-tools";
export default extendTheme(
  { breakpoints }, // Breakpoints
  globalStyles, // Global styles
  buttonStyles, // Button styles
  drawerStyles, // Sidebar variant for Chakra's drawer
  CardComponent, // Card component
  CardBodyComponent, // Card Body component
  CardFooterComponent, // Card Footer component
  CardHeaderComponent, // Card Header component
  MainPanelComponent, // Main Panel component
  PanelContentComponent, // Panel Content component
  PanelContainerComponent // Panel Container component
);
