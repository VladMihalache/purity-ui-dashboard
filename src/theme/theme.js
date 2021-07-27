import { extendTheme } from "@chakra-ui/react"
import { globalStyles } from "./styles";
import { buttonStyles } from "./components/button";
// import { mode } from "@chakra-ui/theme-tools";
export default extendTheme(
  globalStyles, // Global styles
  buttonStyles, // Button styles
);