import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export default function Auth() {
  const titleColor = useColorModeValue("teal.500", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      style={{ userSelect: "none" }}
      w="1044px"
      mx="auto"
    >
      <Flex
        direction="column"
        w="445px"
        maxW="100%"
        background="transparent"
        p={12}
        rounded={6}
      >
        <Heading color={titleColor} fontSize="32px">
          Welcome Back
        </Heading>
        <Text mb={6} ms={1} color={textColor} fontWeight="bold" fontSize="14px">
          Enter your email and password to sign in
        </Text>
        <FormControl>
          <FormLabel fontWeight="normal">Email</FormLabel>
          <Input
            type="email"
            placeholder="Your email address"
            mb={4}
            size="lg"
          />
          <FormLabel fontWeight="normal">Password</FormLabel>
          <Input type="password" placeholder="Your password" mb={6} size="lg" />
          <FormControl display="flex" alignItems="center">
            <Switch id="remember-login" colorScheme="teal" />
            <FormLabel
              htmlFor="remember-login"
              mb="0"
              ms="1"
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
            mt={5}
            mb={5}
          >
            Sign In
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
            Don't have an account?
            <Link color={titleColor} as="span" ms="5px">
              Sign Up
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
