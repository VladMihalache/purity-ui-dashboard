import React from "react";
import Auth from "components/Auth/Auth";
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

import signInImage from "assets/img/signInImage.png";

function SignIn() {
  return (
    <Flex height="100vh" w="100%">
      <Auth />
      <Box overflowX="hidden" h="75%" w="50%" position="relative">
        <Box
          bgImage={signInImage}
          width="100%"
          height="100%"
          bgSize="cover"
          position="absolute"
          right="0"
          borderBottomLeftRadius="3rem"
        ></Box>
      </Box>
    </Flex>
  );
}

export default SignIn;
