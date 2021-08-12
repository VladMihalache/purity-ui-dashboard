import React from "react";

import {
  ChakraProvider,
  Button,
  Flex,
  Text,
  Link,
  Image,
  Avatar,
  Stack,
  HStack,
  VStack,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
  Portal,
} from "@chakra-ui/react";

export default function RegisterPage() {
  const [checked, setChecked] = React.useState([]);
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <div>
      <Box
        display="flex"
        height="75vh"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Hey!</Text>
      </Box>
      <Box
        display="flex"
        height="75vh"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Hey!</Text>
      </Box>
      <Box
        display="flex"
        height="75vh"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Hey!</Text>
      </Box>
      <Box
        display="flex"
        height="75vh"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Hey!</Text>
      </Box>
    </div>
  );
}
