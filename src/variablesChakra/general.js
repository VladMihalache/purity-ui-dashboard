import { useColorModeValue, useColorMode } from "@chakra-ui/react";
const { colorMode, toggleColorMode } = useColorMode();

export const dashboardColors = {
  mainTeal: useColorModeValue("teal.300", "teal.300"),
  navbarIcon: useColorModeValue("gray.700", "gray.200"),
};
