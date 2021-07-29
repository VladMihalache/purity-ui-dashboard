import React from "react";
// chakra imports
import {
  Flex,
  Button,
  HStack,
  VStack,
  SimpleGrid,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";

import Card from "components/CardChakra/Card.js";
import CardHeader from "components/CardChakra/CardHeader.js";
import CardBody from "components/CardChakra/CardBody.js";

import { WalletIcon } from "components/Icons/Icons.js";
import IconBox from "components/Icons/IconBox.js";
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
        <Button size="sm" colorScheme="blue" onClick={toggleColorMode}>
          Toggle Mode
        </Button>
      </HStack>
      <SimpleGrid minChildWidth="120px" spacing="24px" width={"100%"}>
        <Flex height="80px">
          <Card display="flex">
            <CardBody
              justifyContent="space-between"
              alignItems="center"
              h="100%"
            >
              <WalletIcon h={"32px"} w={"32px"} color={iconTeal} />
              <WalletIcon h={"32px"} w={"32px"} color={iconTeal} />
            </CardBody>
          </Card>
        </Flex>
        <Flex height="80px">
          <Card display="flex" justifyContent="center" alignItems="center">
            <WalletIcon h={"32px"} w={"32px"} color={iconTeal} />
          </Card>
        </Flex>
        <Flex height="80px">
          <Card display="flex" justifyContent="center" alignItems="center">
            <WalletIcon h={"32px"} w={"32px"} color={iconTeal} />
          </Card>
        </Flex>
        <Flex height="80px">
          <Card display="flex" justifyContent="center" alignItems="center">
            <WalletIcon h={"32px"} w={"32px"} color={iconTeal} />
          </Card>
        </Flex>
      </SimpleGrid>
    </VStack>
  );
}
