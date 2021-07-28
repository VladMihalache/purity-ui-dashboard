import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { buttonStyles } from "./components/button";
import { CardComponent } from "./additions/card/Card";
import { CardBodyComponent } from "./additions/card/CardBody";
import { CardFooterComponent } from "./additions/card/CardFooter";
import { CardHeaderComponent } from "./additions/card/CardHeader";
import { MainPanelComponent } from "./additions/layout/MainPanel";
// import { mode } from "@chakra-ui/theme-tools";
export default extendTheme(
  globalStyles, // Global styles
  buttonStyles, // Button styles
  CardComponent, // Card component
  CardBodyComponent, // Card Body component
  CardFooterComponent, // Card Footer component
  CardHeaderComponent, // Card Header component
  MainPanelComponent // Main Panel component
);
