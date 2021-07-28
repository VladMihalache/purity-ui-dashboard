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

import Card from "components/CardChakra/Card.js";
import CardHeader from "components/CardChakra/CardHeader.js";
import CardIcon from "components/CardChakra/CardIcon.js";
import CardBody from "components/CardChakra/CardBody.js";
import CardFooter from "components/CardChakra/CardFooter.js";

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
  AtlassianLogo,
  AdobexdLogo,
  JiraLogo,
  SlackLogo,
  SpotifyLogo,
  InvisionLogo,
} from "components/Icons/Icons.js";
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
        <Button
          size="sm"
          colorScheme="blue"
          variant="with-shadow"
          onClick={toggleColorMode}
        >
          Toggle Mode
        </Button>
      </HStack>
      <SimpleGrid minChildWidth="120px" spacing="24px" width={"100%"}>
        <Flex height="80px">
          <Card>
            <AtlassianLogo h={"32px"} w={"32px"} />
          </Card>
        </Flex>
        <Flex height="80px">
          <Card>
            <SpotifyLogo h={"32px"} w={"32px"} />
          </Card>
        </Flex>
        <Flex height="80px">
          <Card>
            <InvisionLogo h={"32px"} w={"32px"} />
          </Card>
        </Flex>
        <Flex height="80px">
          <Card>
            <JiraLogo h={"32px"} w={"32px"} />
          </Card>
        </Flex>
      </SimpleGrid>
    </VStack>
  );
}
