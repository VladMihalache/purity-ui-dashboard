import React from "react";
// chakra imports
import {Box, useColorModeValue, useColorMode, toggleColorMode  } from "@chakra-ui/react";

export default function Card(props) {
  const cardBg = useColorModeValue("white", "gray.700");
  const {
    children,
    ...rest
  } = props;
  return (
    <Box width={"100%"} boxShadow={"0px 3.5px 5.5px rgba(0, 0, 0, 0.02)"} borderRadius={"15px"} bg={cardBg}>
      {children}
    </Box>
  );
}