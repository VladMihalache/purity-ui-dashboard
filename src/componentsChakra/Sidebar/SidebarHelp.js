import React from "react";

import {
  IconButton,
  Button,
  Link,
  useColorModeValue,
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";
import SidebarHelpImage from "assetsChakra/img/SidebarHelpImage.png";
import IconBox from "componentsChakra/Icons/IconBox";
import { DashboardLogo } from "componentsChakra/Icons/Icons";

export function SidebarHelp(props) {
  // Pass the computed styles into the `__css` prop
  const { variant, children, ...rest } = props;
  // Chakra Color Mode
  const mainTeal = useColorModeValue("teal.300", "teal.300");
  const searchIconColor = useColorModeValue("gray.700", "gray.200");
  const inputBg = useColorModeValue("white", "gray.800");
  return (
    <Flex
      borderRadius="15px"
      flexDirection="column"
      bgImage={SidebarHelpImage}
      justifyContent="flex-start"
      alignItems="start"
      boxSize="border-box"
      p="16px"
      h="170px"
      w="100%"
    >
      <IconBox width="35px" h="35px" bg="white" mb="auto">
        <QuestionIcon color="teal.300" h="18px" w="18px" />
      </IconBox>
      <Text fontSize="sm" color="white" fontWeight="bold">
        Need help?
      </Text>
      <Text fontSize="xs" color="white" mb="10px">
        Please check our docs
      </Text>
      <Link w="100%">
        <Button
          fontSize="10px"
          fontWeight="bold"
          w="100%"
          bg="white"
          _hover="none"
          _active={{
            bg: "white",
            transform: "none",
            borderColor: "transparent",
          }}
          _focus={{
            boxShadow: "none",
          }}
          color="black"
        >
          DOCUMENTATION
        </Button>
      </Link>
    </Flex>
  );
}
