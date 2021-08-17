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
    Switch
} from "@chakra-ui/react";

import BgSignUp from "assetsChakra/img/BgSignUp.png";



function SignUp() {
    return (
        <Flex direction="column" alignSelf="center" justifySelf="center" overflow="hidden">
            <Box position="absolute" minHeight={{base: "70vh", md: "50vh"}} w={{md: "calc(100vw - 50px)"}} borderRadius={{md: "15px"}} left="0" right="0" bgRepeat="no-repeat" overflow="hidden" zIndex="-1" top="0" bgImage={BgSignUp} bgSize="cover" mx={{md: "auto"}} mt={{md: "14px"}}></Box>
            <Flex direction="column" textAlign="center" justifyContent="center" align="center"  mt="6.5rem" mb="30px">
                <Text fontSize="4xl" color="white" fontWeight="bold">Welcome!</Text>
                <Text fontSize="md" color="white" fontWeight="normal" mt="10px" mb="26px" width={{base: "90%", sm: "60%", lg: "40%", xl: "30%"}}>Use these awesome forms to login or create new account in your project for free.</Text>
            </Flex>
            <SignUpAuth />
        </Flex>
    )
}

export default SignUp;
