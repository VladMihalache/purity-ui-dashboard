import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { buttonStyles } from "./components/button";
import { CardComponent } from "./additions/Card";
import { CardBodyComponent } from "./additions/CardBody";
import { CardFooterComponent } from "./additions/CardFooter";
import { CardHeaderComponent } from "./additions/CardHeader";
// import { mode } from "@chakra-ui/theme-tools";
export default extendTheme(
  globalStyles, // Global styles
  buttonStyles, // Button styles
  CardComponent, // Card component
  CardBodyComponent, // Card Body component
  CardFooterComponent, // Card Footer component
  CardHeaderComponent // Card Header component
);
