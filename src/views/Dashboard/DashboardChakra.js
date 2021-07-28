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
  Heading,
} from "@chakra-ui/react";

import Card from "components/CardChakra/Card.js";
import CardHeader from "components/CardChakra/CardHeader.js";
import CardIcon from "components/CardChakra/CardIcon.js";
import CardBody from "components/CardChakra/CardBody.js";
import CardFooter from "components/CardChakra/CardFooter.js";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";

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
import { useState } from "react";
import IconBox from "components/Icons/IconBox";
import Auth from "components/Auth/Auth";
import { Bar } from "chartist";

export default function DashboardChakra() {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const iconBoxInside = useColorModeValue("white", "white");
  const [series, setSeries] = useState([
    {
      type: "area",
      name: "Mobile apps",
      data: [190, 220, 205, 350, 370, 450, 400, 360, 210, 250, 292, 150],
    },
    {
      type: "area",
      name: "Websites",
      data: [400, 291, 121, 117, 25, 133, 121, 211, 147, 25, 201, 203],
    },
  ]);

  const [data, setData] = useState([
    {
      data: [
        {
          x: "Jan",
          y: [0, 75],
        },
        {
          x: "Feb",
          y: [0, 96],
        },
        {
          x: "Mar",
          y: [0, 200],
        },
        {
          x: "Apr",
          y: [0, 112],
        },
        {
          x: "May",
          y: [0, 53],
        },
        {
          x: "Jun",
          y: [0, 67],
        },
        {
          x: "Jul",
          y: [0, 108],
        },
        {
          x: "Aug",
          y: [0, 122],
        },
        {
          x: "Sep",
          y: [0, 74],
        },
        {
          x: "Oct",
          y: [0, 60],
        },
        {
          x: "Nov",
          y: [0, 81],
        },
        {
          x: "Dec",
          y: [0, 225],
        },
      ],
    },
  ]);
  const GenerateSeries = () => {
    const newSeries = [];
    series.map((s) => {
      const data = s.data.map(() => {
        return Math.round(Math.random() * (180 - Math.exp(Math.random())));
      });
      newSeries.push({ data, name: s.name });
    });
    setSeries(newSeries);
  };
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
        <Auth></Auth>
      </HStack>
      <SimpleGrid minChildWidth="120px" spacing="24px" width={"100%"}>
        <Flex>
          <Card height="800" width="445">
            <CardBody>
              <LineChart series={series}></LineChart>
            </CardBody>
          </Card>
        </Flex>
      </SimpleGrid>
    </VStack>
  );
}
