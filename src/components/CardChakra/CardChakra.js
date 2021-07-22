import React from "react";
// chakra imports
import {ChakraProvider, Box, Button, Stack, HStack, VStack, SimpleGrid, useColorModeValue, useColorMode, toggleColorMode  } from "@chakra-ui/react";

export default function CardChakra(props) {

  const { toggleColorMode } = useColorMode();

  const cardBg = useColorModeValue("red.500", "red.200");
  return (
    <Button bg={"red.900"} size="sm" onClick={toggleColorMode}>
      Toggle Mode
    </Button>
  );
}