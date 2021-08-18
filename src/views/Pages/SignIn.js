// chakra imports
import { Box, Flex } from "@chakra-ui/react";
// images
import signInImage from "assets/img/signInImage.png";
// chakra imports
import Auth from "components/Auth/Auth";
import React from "react";

function SignIn() {
  return (
    <Flex height="100vh" w="100%" mx="auto" justifyContent="space-between">
      <Auth />
      <Box
        overflowX="hidden"
        h="75%"
        w="50%"
        position="relative"
        // transform="skewX(-10deg)"
      >
        <Box
          bgImage={signInImage}
          width="100%"
          height="100%"
          bgSize="cover"
          position="absolute"
          right="0px"
          borderBottomLeftRadius="3rem"
          // transform="skewX(10deg)"
        ></Box>
      </Box>
    </Flex>
  );
}

export default SignIn;
