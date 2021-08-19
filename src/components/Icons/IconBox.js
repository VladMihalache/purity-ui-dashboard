// chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";

export default function IconBox(props) {
  const { children, ...rest } = props;

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      borderRadius={"12px"}
      {...rest}
    >
      {children}
    </Flex>
  );
}
