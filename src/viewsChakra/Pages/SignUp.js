import React from 'react';
import SignUpAuth from "componentsChakra/Auth/SignUpAuth";
import {
    Button,
    Flex,
    Heading,
    Input,
    useColorModeValue,
    Text,
    FormControl,
    FormLabel,
    Box,
    Link,
    Switch,
  } from "@chakra-ui/react";

import BgSignUp from "assetsChakra/img/BgSignUp.png";

function SignUp() {
    return (
        <Flex direction="column" alignSelf="center" justifySelf="center" overflow="hidden">
            <Box position="absolute" h="50vh" w="100vw" borderRadius="15px" left="0" bgRepeat="no-repeat" overflow="hidden" zIndex="-1" top="0" bgImage={BgSignUp} bgSize="cover" mx="10px"></Box>
            <Flex direction="column" textAlign="center" justifyContent="center" align="center" mt="6.5rem" mb="30px">
                <Text fontSize="4xl" color="white" fontWeight="bold">Welcome!</Text>
                <Text fontSize="md" color="white" fontWeight="normal" mt="10px" mb="26px" maxWidth={{xs: "30%"}}>Use these awesome forms to login or create new account in your project for free.</Text>
            </Flex>
            <SignUpAuth />
        </Flex>
    )
}

export default SignUp;
