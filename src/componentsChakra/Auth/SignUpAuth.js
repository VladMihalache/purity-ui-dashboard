import React from "react";
import {
  Button,
  Flex,
  Heading,
  Link,
  Icon,
  Box,
  HStack,
  Input,
  useColorModeValue,
  Text,
  FormControl,
  FormLabel,
  Switch,
} from "@chakra-ui/react";

import {FaGoogle, FaFacebook, FaApple} from 'react-icons/fa'

export default function SignUpAuth() {
  const titleColor = useColorModeValue("teal.500", "teal.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      mb="60px"
    >
      <Flex
        direction="column"
        width="445px"
        background="transparent"
        borderRadius="15px"
        p="2.5rem 3rem"
        bg={bgColor}
        boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
      >
        <Text fontSize="xl" color={textColor} fontWeight="bold" textAlign="center" mb="22px">Register With</Text>
        <HStack spacing="15px" justify="center" mb="22px">
            <Flex justify="center" align="center" w="75px" h="75px" borderRadius="15px" border="1px solid lightgray" cursor="pointer" transition="all .25s ease" _hover={{filter: "brightness(120%)", bg: bgIcons}}>
                <Link href="#">
                    <Icon as={FaFacebook} w="30px" h="30px" _hover={{color: "black", filter: "brightness(120%)"}}/>
                </Link>
            </Flex> 
            <Flex justify="center" align="center" w="75px" h="75px" borderRadius="15px" border="1px solid lightgray" cursor="pointer" transition="all .25s ease" _hover={{filter: "brightness(120%)", bg: bgIcons}}>
                <Link href="#">
                    <Icon as={FaApple} w="30px" h="30px" _hover={{color: "black", filter: "brightness(120%)"}}/>
                </Link>
            </Flex> 
            <Flex justify="center" align="center" w="75px" h="75px" borderRadius="15px" border="1px solid lightgray" cursor="pointer" transition="all .25s ease" _hover={{filter: "brightness(120%)", bg: bgIcons}}>
                <Link href="#">
                    <Icon as={FaGoogle} w="30px" h="30px" _hover={{color: "black", filter: "brightness(120%)"}}/>
                </Link>
            </Flex> 
        </HStack>
        <Text fontSize="lg" color="gray.400" fontWeight="bold" textAlign="center" mb="22px">or</Text>
        <FormControl>
            <FormLabel fontWeight="normal">Name</FormLabel>
            <Input
                type="text"
                placeholder="Your full name"
                mb={4}
                size="lg"
            />
          <FormLabel fontWeight="normal">Email</FormLabel>
          <Input
            type="email"
            placeholder="Your email address"
            mb={4}
            size="lg"
          />
          <FormLabel fontWeight="normal">Password</FormLabel>
          <Input type="password" placeholder="Your password" mb="24px" size="lg" />
          <FormControl display="flex" alignItems="center" mb="36px">
            <Switch id="remember-login" colorScheme="teal" mr="10px" />
            <FormLabel
              htmlFor="remember-login"
              mb="0"
              fontWeight="normal"
            >
              Remember me
            </FormLabel>
          </FormControl>
          <Button
            type="submit"
            colorScheme="teal"
            w="100%"
            h="45"
            mb={5}
          >
            Sign Up
          </Button>
        </FormControl>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          maxWidth="100%"
          mt={0}
        >
          <Text color={textColor} fontWeight="medium">
            Already have an account?
            <Link color={titleColor} as="span" ms="5px">
              Sign In
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
