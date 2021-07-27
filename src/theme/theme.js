import { extendTheme } from "@chakra-ui/react"
import styles from "./styles";
import { mode } from "@chakra-ui/theme-tools";
console.log(styles)
const overrides = {
  styles: {
    global: (props) => ({
      body: {
        bg: mode("gray.50", "gray.800")(props),
      },
    }),
  },
}
export default extendTheme(overrides);