import React from "react";
// chakra imports
import {
  ChakraProvider,
  Box,
  Flex,
  Button,
  Stack,
  HStack,
  VStack,
  SimpleGrid,
  useColorModeValue,
  useColorMode,
  Text,
} from "@chakra-ui/react";


import {
  BuildIcon,
  CreditIcon,
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  HelpIcon,
  HomeIcon,
  PayPalIcon,
  PersonIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import IconBox from "components/Icons/IconBox.js";
import CardChakra from "components/CardChakra/Card.js";
export default function DashboardChakra() {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <VStack>
      <HStack>
        <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal}>
          <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />
        </IconBox>
        <Button size="sm" colorScheme="blue" variant="with-shadow" onClick={toggleColorMode}>
          Toggle Mode
        </Button>
      </HStack> 
      <SimpleGrid minChildWidth="120px" spacing="40px" width={"100%"}>
        <Flex height="80px">
          <CardChakra>
            <WalletIcon h={"32px"} w={"32px"} color={iconTeal} />
          </CardChakra>
        </Flex>
        <Flex height="80px">
          <CardChakra>
            <WalletIcon h={"32px"} w={"32px"} color={iconTeal} />
          </CardChakra>
        </Flex>
        <Flex height="80px">
          <CardChakra>
            <WalletIcon h={"32px"} w={"32px"} color={iconTeal} />
          </CardChakra>
        </Flex>
        <Flex height="80px">
          <CardChakra>
            <WalletIcon h={"32px"} w={"32px"} color={iconTeal} />
          </CardChakra>
        </Flex>
      </SimpleGrid>
    </VStack>
  );
}
