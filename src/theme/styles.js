import {
    extendTheme,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  styles: {
    global: (props) => ({
      body: {
        bg: mode("gray.50", "gray.800")(props),
      },
    }),
  },
};

export default styles;