import React from "react";
import Auth from "componentsChakra/Auth/Auth";
import {
  Button,
  Flex,
  Box,
  Heading,
  Input,
  useColorModeValue,
  Text,
  FormControl,
  FormLabel,
  Link,
  Switch,
} from "@chakra-ui/react";

import signInImage from "assetsChakra/img/signInImage.png";

function SignIn() {
  return (
    <Flex height="100vh">
      <Auth />
      <Box overflowX="hidden">
        <Box
          height="100%"
          width="60%"
          overflowX="hidden"
          transform="skewX(-10deg)"
          position="absolute"
          top="0"
          right="-12rem"
          
        >
          <Box
            bgImage={signInImage}
            width="100%"
            height="100%"
            bgSize="cover"
            zIndex="0"
            overflowX="hidden"
            transform="skewX(10deg)"
            position="absolute"
            top="-7rem"
            right="0"
            left="0"
            marginLeft="-6rem"
            borderBottomLeftRadius="0rem"
          ></Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default SignIn;
