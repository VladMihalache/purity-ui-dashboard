import React from 'react';
import Auth from 'componentsChakra/Auth/Auth';
import {
    Button,
    Flex,
    Heading,
    Input,
    useColorModeValue,
    Text,
    FormControl,
    FormLabel,
    Link,
    Switch,
  } from "@chakra-ui/react";

function SignIn() {
    return (
        <Flex direction="direction">
            <Auth>

            </Auth>
        </Flex>
    )
}

export default SignIn;
