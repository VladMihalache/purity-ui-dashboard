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
  Heading,
  Text,
} from "@chakra-ui/react";

import Card from "componentsChakra/Card/Card.js";
import CardHeader from "componentsChakra/Card/CardHeader.js";
import CardBody from "componentsChakra/Card/CardBody.js";
import CardFooter from "componentsChakra/Card/CardFooter.js";
// import BarChart from "componentsChakra/Charts/BarChart";
// import LineChart from "componentsChakra/Charts/LineChart";
// import { useState } from "react";
import IconBox from "componentsChakra/Icons/IconBox";
// import Auth from "componentsChakra/Auth/Auth";
// import { Bar } from "chartist";

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
} from "componentsChakra/Icons/Icons";

export default function DashboardChakra() {
  const value = "$100.000";
  // Chakra Color Mode
  const { colorMode, toggleColorMode } = useColorMode();
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const iconBoxInside = useColorModeValue("white", "white");
  // const [series, setSeries] = useState([
  //   {
  //     type: "area",
  //     name: "Mobile apps",
  //     data: [190, 220, 205, 350, 370, 450, 400, 360, 210, 250, 292, 150],
  //   },
  //   {
  //     type: "area",
  //     name: "Websites",
  //     data: [400, 291, 121, 117, 25, 133, 121, 211, 147, 25, 201, 203],
  //   },
  // ]);

  // const [data, setData] = useState([
  //   {
  //     data: [
  //       {
  //         x: "Jan",
  //         y: [0, 75],
  //       },
  //       {
  //         x: "Feb",
  //         y: [0, 96],
  //       },
  //       {
  //         x: "Mar",
  //         y: [0, 200],
  //       },
  //       {
  //         x: "Apr",
  //         y: [0, 112],
  //       },
  //       {
  //         x: "May",
  //         y: [0, 53],
  //       },
  //       {
  //         x: "Jun",
  //         y: [0, 67],
  //       },
  //       {
  //         x: "Jul",
  //         y: [0, 108],
  //       },
  //       {
  //         x: "Aug",
  //         y: [0, 122],
  //       },
  //       {
  //         x: "Sep",
  //         y: [0, 74],
  //       },
  //       {
  //         x: "Oct",
  //         y: [0, 60],
  //       },
  //       {
  //         x: "Nov",
  //         y: [0, 81],
  //       },
  //       {
  //         x: "Dec",
  //         y: [0, 225],
  //       },
  //     ],
  //   },
  // ]);
  // const GenerateSeries = () => {
  //   const newSeries = [];
  //   series.map((s) => {
  //     const data = s.data.map(() => {
  //       return Math.round(Math.random() * (180 - Math.exp(Math.random())));
  //     });
  //     newSeries.push({ data, name: s.name });
  //   });
  //   setSeries(newSeries);
  // };
  return (
    <VStack>
      <SimpleGrid
        width="100%"
        columns={{
          sm: "1",
          xl: "4",
        }}
        spacing="20px"
      >
        <Flex>
          <Card>
            <CardBody py="18px">
              <HStack width="100%" justifyContent="space-between" mb="20px">
                <VStack alignItems="flex-start">
                  <Text fontWeight="bold" colorScheme="gray" color="gray.400">
                    Today's money
                  </Text>
                  <HStack>
                    <Text fontSize="lg" fontWeight="bold">
                      $53,000
                    </Text>
                    <Text color="green.400" fontSize="sm" fontWeight="bold">
                      +55%
                    </Text>
                  </HStack>
                </VStack>
                <IconBox bg={iconTeal} w="45px" h="45px">
                  <WalletIcon
                    width="24px"
                    height="24px"
                    color={iconBoxInside}
                  />
                </IconBox>
              </HStack>
            </CardBody>
          </Card>
        </Flex>
        <Flex>
          <Card>
            <CardBody py="18px">
              <HStack width="100%" justifyContent="space-between">
                <VStack alignItems="flex-start">
                  <Text fontWeight="bold" colorScheme="gray" color="gray.400">
                    Today's money
                  </Text>
                  <HStack>
                    <Text fontSize="lg" fontWeight="bold">
                      $53,000
                    </Text>
                    <Text color="green.400" fontSize="sm" fontWeight="bold">
                      +55%
                    </Text>
                  </HStack>
                </VStack>
                <IconBox bg={iconTeal} w="45px" h="45px">
                  <WalletIcon
                    width="24px"
                    height="24px"
                    color={iconBoxInside}
                  />
                </IconBox>
              </HStack>
            </CardBody>
          </Card>
        </Flex>
        <Flex>
          <Card>
            <CardBody py="18px">
              <HStack width="100%" justifyContent="space-between">
                <VStack alignItems="flex-start">
                  <Text fontWeight="bold" colorScheme="gray" color="gray.400">
                    Today's money
                  </Text>
                  <HStack>
                    <Text fontSize="lg" fontWeight="bold">
                      $53,000
                    </Text>
                    <Text color="green.400" fontSize="sm" fontWeight="bold">
                      +55%
                    </Text>
                  </HStack>
                </VStack>
                <IconBox bg={iconTeal} w="45px" h="45px">
                  <WalletIcon
                    width="24px"
                    height="24px"
                    color={iconBoxInside}
                  />
                </IconBox>
              </HStack>
            </CardBody>
          </Card>
        </Flex>
        <Flex>
          <Card>
            <CardBody py="18px">
              <HStack width="100%" justifyContent="space-between">
                <VStack alignItems="flex-start">
                  <Text fontWeight="bold" colorScheme="gray" color="gray.400">
                    Today's money
                  </Text>
                  <HStack>
                    <Text fontSize="lg" fontWeight="bold">
                      {value}
                    </Text>
                    <Text color="green.400" fontSize="sm" fontWeight="bold">
                      +55%
                    </Text>
                  </HStack>
                </VStack>
                <IconBox bg={iconTeal} w="45px" h="45px">
                  <WalletIcon
                    width="24px"
                    height="24px"
                    color={iconBoxInside}
                  />
                </IconBox>
              </HStack>
            </CardBody>
          </Card>
        </Flex>
      </SimpleGrid>
      <Button colorScheme="teal" onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <Text variant="h1"></Text>
      {/* <LineChart series={series}></LineChart> */}
      {/* <SimpleGrid minChildWidth="120px" spacing="24px" width="100%">
        <Flex>
          <Card height="800px" width="100%">
            <CardBody width="100%"></CardBody>
          </Card>
        </Flex>
      </SimpleGrid> */}
    </VStack>
  );
}
