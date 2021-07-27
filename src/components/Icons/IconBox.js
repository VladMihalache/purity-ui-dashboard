import React from "react";
// chakra imports
import {
  Box,
  Flex,
} from "@chakra-ui/react";

export default function IconBox(props) {
    const {
      children,
      ...rest
    } = props;

  return (
    <Flex alignItems={"center"} justifyContent={"center"} borderRadius={"12px"} {...rest}>
        {children}
    </Flex>
  );
}
  