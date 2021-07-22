import React from "react";
// chakra imports
import {ChakraProvider, Box, Button, Stack, HStack, VStack, SimpleGrid, useColorModeValue, useColorMode} from "@chakra-ui/react";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
// import Button from "components/CustomButtons/Button.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";



export default function DashboardChakra() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack>
      <Button size="sm" colorScheme="blue" onClick={toggleColorMode}>
        Toggle Mode
      </Button>
    </HStack>
  )
}
