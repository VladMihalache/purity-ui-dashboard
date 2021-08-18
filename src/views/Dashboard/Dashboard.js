import React, { useState } from "react";
// chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Progress,
  SimpleGrid,
  Spacer,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import BarChart from "components/Chart/BarChart";
import LineChart from "components/Chart/LineChart";
import IconBox from "components/Icons/IconBox";
import DashboardTableRow from "components/Table/DashboardTableRow";
import TimelineRow from "components/Table/TimelineRow";
// custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
// react icons
import { BsArrowRight } from "react-icons/bs";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { dashboardTableData, timelineData } from "variables/general";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";

export default function DashboardChakra() {
  const value = "$100.000";
  // Chakra Color Mode
  const { colorMode, toggleColorMode } = useColorMode();
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
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
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px">
        <Card h="83px" py=".3rem" px="1.3rem">
          <Flex
            flexDirection="row"
            align="center"
            justify="center"
            height="100%"
          >
            <Flex flexDirection="column">
              <Text fontSize="sm" color="gray.400" fontWeight="bold" pb=".1rem">
                Today's Money
              </Text>
              <Flex flexDirection="row" align="flex-end" mt={0}>
                <Text fontSize="lg" color={textColor} fontWeight="bold">
                  $53,000
                </Text>
                <Text
                  fontSize="md"
                  color="green.400"
                  fontWeight="bold"
                  ps=".2rem"
                >
                  +55%
                </Text>
              </Flex>
            </Flex>
            <Spacer />
            <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal}>
              <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />
            </IconBox>
          </Flex>
        </Card>
        <Card h="83px" py=".3rem" px="1.3rem">
          <Flex
            flexDirection="row"
            align="center"
            justify="center"
            height="100%"
          >
            <Flex flexDirection="column">
              <Text fontSize="sm" color="gray.400" fontWeight="bold" pb=".1rem">
                Today's Users
              </Text>
              <Flex flexDirection="row" align="flex-end" mt={0}>
                <Text fontSize="lg" color={textColor} fontWeight="bold">
                  $2,300
                </Text>
                <Text
                  fontSize="md"
                  color="green.400"
                  fontWeight="bold"
                  ps=".2rem"
                >
                  +5%
                </Text>
              </Flex>
            </Flex>
            <Spacer />
            <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal}>
              <GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />
            </IconBox>
          </Flex>
        </Card>
        <Card h="83px" py=".3rem" px="1.3rem">
          <Flex
            flexDirection="row"
            align="center"
            justify="center"
            height="100%"
          >
            <Flex flexDirection="column">
              <Text fontSize="sm" color="gray.400" fontWeight="bold" pb=".1rem">
                New Clients
              </Text>
              <Flex flexDirection="row" align="flex-end">
                <Text fontSize="lg" color={textColor} fontWeight="bold">
                  $3,052
                </Text>
                <Text
                  fontSize="md"
                  color="red.400"
                  fontWeight="bold"
                  ps=".2rem"
                >
                  -14%
                </Text>
              </Flex>
            </Flex>
            <Spacer />
            <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal}>
              <DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />
            </IconBox>
          </Flex>
        </Card>
        <Card h="83px" py=".3rem" px="1.3rem">
          <Flex
            flexDirection="row"
            align="center"
            justify="center"
            height="100%"
          >
            <Flex flexDirection="column">
              <Text fontSize="sm" color="gray.400" fontWeight="bold" pb=".1rem">
                Total Sales
              </Text>
              <Flex flexDirection="row" align="flex-end" mt={0}>
                <Text fontSize="lg" color={textColor} fontWeight="bold">
                  $173,000
                </Text>
                <Text
                  fontSize="md"
                  color="green.400"
                  fontWeight="bold"
                  ps=".2rem"
                >
                  +8%
                </Text>
              </Flex>
            </Flex>
            <Spacer />
            <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal}>
              <CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />
            </IconBox>
          </Flex>
        </Card>
      </SimpleGrid>
      <Grid
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my="26px"
        gap="24px"
      >
        <Card minHeight="290.5px" p="1.2rem">
          <Flex flexDirection={{ sm: "column", lg: "row" }} h="100%">
            <Flex
              flexDirection="column"
              h="100%"
              lineHeight="1.6"
              width={{ lg: "45%" }}
            >
              <Text fontSize="sm" color="gray.400" fontWeight="bold">
                Built by developers
              </Text>
              <Text
                fontSize="lg"
                color={textColor}
                fontWeight="bold"
                pb=".5rem"
              >
                Chakra UI Soft Dashboard
              </Text>
              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                From colors, cards, typography to complex elements, you will
                find the full documentation.
              </Text>
              <Spacer />
              <Flex align="center">
                <Button p="0px" bg="transparent" my={{ sm: "1.5rem" }}>
                  <Text
                    fontSize="sm"
                    color={textColor}
                    fontWeight="bold"
                    cursor="pointer"
                    my={{ sm: "1.5rem" }}
                  >
                    Read more
                  </Text>
                  <Icon
                    as={BsArrowRight}
                    w="20px"
                    h="20px"
                    fontSize="xl"
                    transition="all .5s ease"
                    mx=".5rem"
                    cursor="pointer"
                    _hover={{ transform: "translateX(20%)" }}
                    transform="translateY(10%)"
                  />
                </Button>
              </Flex>
            </Flex>
            <Spacer />
            <Flex
              bg="teal.300"
              align="center"
              justify="center"
              borderRadius="15px"
              width={{ lg: "40%" }}
              minHeight={{ sm: "250px" }}
            >
              <Image
                src={logoChakra}
                alt="chakra image"
                minWidth={{ md: "300px", lg: "auto" }}
              />
            </Flex>
          </Flex>
        </Card>
        <Card maxHeight="290.5px" p="1rem">
          <CardBody
            p="0px"
            backgroundImage={peopleImage}
            bgPosition="center"
            bgRepeat="no-repeat"
            w="100%"
            h="100%"
            bgSize="cover"
            position="relative"
            borderRadius="15px"
          >
            <Box
              bg="linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)"
              w="100%"
              position="absolute"
              h="inherit"
              borderRadius="inherit"
            ></Box>
            <Flex
              flexDirection="column"
              color="white"
              p="1.5rem 1.2rem"
              zIndex="3"
              lineHeight="1.6"
            >
              <Text fontSize="xl" fontWeight="bold" pb=".3rem">
                Work with the rockets
              </Text>
              <Text fontSize="sm" fontWeight="normal" w={{ lg: "67%" }}>
                Wealth creation is a revolutionary recent positive-sum game. It
                is all about who takes the opportunity first.
              </Text>
              <Spacer />
              <Flex align="center">
                <Button p="0px" bg="transparent" mt="12px">
                  <Text fontSize="sm" fontWeight="bold">
                    Read more
                  </Text>
                  <Icon
                    as={BsArrowRight}
                    w="20px"
                    h="20px"
                    fontSize="xl"
                    transition="all .5s ease"
                    mx=".5rem"
                    cursor="pointer"
                    _hover={{ transform: "translateX(20%)" }}
                    transform="translateY(10%)"
                  />
                </Button>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap="24px"
        mb={{ lg: "26px" }}
      >
        <Card p="1rem">
          <CardBody p="0px">
            <Flex direction="column" w="100%">
              <BarChart />
              <Flex
                direction="column"
                mt="24px"
                mb="36px"
                alignSelf="flex-start"
              >
                <Text
                  fontSize="lg"
                  color={textColor}
                  fontWeight="bold"
                  mb="6px"
                >
                  Active Users
                </Text>
                <Text fontSize="md" fontWeight="medium" color="gray.400">
                  <Text as="span" color="green.400" fontWeight="bold">
                    (+23%)
                  </Text>{" "}
                  than last week
                </Text>
              </Flex>
              <SimpleGrid gap={{ sm: "12px" }} columns={4}>
                <Flex direction="column">
                  <Flex alignItems="center">
                    <IconBox
                      as="box"
                      h={"30px"}
                      w={"30px"}
                      bg={iconTeal}
                      me="6px"
                    >
                      <WalletIcon h={"15px"} w={"15px"} color={iconBoxInside} />
                    </IconBox>
                    <Text fontSize="sm" color="gray.400" fontWeight="semibold">
                      Users
                    </Text>
                  </Flex>
                  <Text
                    fontSize="lg"
                    color={textColor}
                    fontWeight="bold"
                    mb="6px"
                    my="6px"
                  >
                    32,984
                  </Text>
                  <Progress
                    colorScheme="teal"
                    borderRadius="12px"
                    h="5px"
                    value={20}
                  />
                </Flex>
                <Flex direction="column">
                  <Flex alignItems="center">
                    <IconBox
                      as="box"
                      h={"30px"}
                      w={"30px"}
                      bg={iconTeal}
                      me="6px"
                    >
                      <RocketIcon h={"15px"} w={"15px"} color={iconBoxInside} />
                    </IconBox>
                    <Text fontSize="sm" color="gray.400" fontWeight="semibold">
                      Clicks
                    </Text>
                  </Flex>
                  <Text
                    fontSize="lg"
                    color={textColor}
                    fontWeight="bold"
                    mb="6px"
                    my="6px"
                  >
                    2.42m
                  </Text>
                  <Progress
                    colorScheme="teal"
                    borderRadius="12px"
                    h="5px"
                    value={90}
                  />
                </Flex>
                <Flex direction="column">
                  <Flex alignItems="center">
                    <IconBox
                      as="box"
                      h={"30px"}
                      w={"30px"}
                      bg={iconTeal}
                      me="6px"
                    >
                      <CartIcon h={"15px"} w={"15px"} color={iconBoxInside} />
                    </IconBox>
                    <Text fontSize="sm" color="gray.400" fontWeight="semibold">
                      Sales
                    </Text>
                  </Flex>
                  <Text
                    fontSize="lg"
                    color={textColor}
                    fontWeight="bold"
                    mb="6px"
                    my="6px"
                  >
                    2,400$
                  </Text>
                  <Progress
                    colorScheme="teal"
                    borderRadius="12px"
                    h="5px"
                    value={30}
                  />
                </Flex>
                <Flex direction="column">
                  <Flex alignItems="center">
                    <IconBox
                      as="box"
                      h={"30px"}
                      w={"30px"}
                      bg={iconTeal}
                      me="6px"
                    >
                      <StatsIcon h={"15px"} w={"15px"} color={iconBoxInside} />
                    </IconBox>
                    <Text fontSize="sm" color="gray.400" fontWeight="semibold">
                      Items
                    </Text>
                  </Flex>
                  <Text
                    fontSize="lg"
                    color={textColor}
                    fontWeight="bold"
                    mb="6px"
                    my="6px"
                  >
                    320
                  </Text>
                  <Progress
                    colorScheme="teal"
                    borderRadius="12px"
                    h="5px"
                    value={50}
                  />
                </Flex>
              </SimpleGrid>
            </Flex>
          </CardBody>
        </Card>
        <Card p="28px 10px 16px 0px" mb={{ sm: "26px", lg: "0px" }}>
          <CardHeader p="0px" mb="20px" ps="22px">
            <Flex direction="column" alignSelf="flex-start">
              <Text fontSize="lg" color={textColor} fontWeight="bold" mb="6px">
                Sales Overview
              </Text>
              <Text fontSize="md" fontWeight="medium" color="gray.400">
                <Text as="span" color="green.400" fontWeight="bold">
                  (+5%) more
                </Text>{" "}
                in 2021
              </Text>
            </Flex>
          </CardHeader>
          <Box w="100%" h={{ sm: "300px" }} ps="8px">
            <LineChart />
          </Box>
        </Card>
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
        templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
        gap="24px"
      >
        <Card p="1rem" overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="12px 0px 28px 0px">
            <Flex direction="column">
              <Text
                fontSize="lg"
                color={textColor}
                fontWeight="bold"
                pb=".5rem"
              >
                Projects
              </Text>
              <Flex align="center">
                <Icon
                  as={IoCheckmarkDoneCircleSharp}
                  color="teal.300"
                  w={4}
                  h={4}
                  pe="3px"
                />
                <Text fontSize="sm" color="gray.400" fontWeight="normal">
                  <Text fontWeight="bold" as="span">
                    30 done
                  </Text>{" "}
                  this month.
                </Text>
              </Flex>
            </Flex>
          </CardHeader>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" ps="0px">
                <Th ps="0px" color="gray.400">
                  Companies
                </Th>
                <Th color="gray.400">Members</Th>
                <Th color="gray.400">Budget</Th>
                <Th color="gray.400">Completion</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dashboardTableData.map((row) => {
                return (
                  <DashboardTableRow
                    name={row.name}
                    logo={row.logo}
                    members={row.members}
                    budget={row.budget}
                    progression={row.progression}
                  />
                );
              })}
            </Tbody>
          </Table>
        </Card>
        <Card p="1rem" maxHeight="100%">
          <CardHeader pt="0px" p="28px 0px 35px 21px">
            <Flex direction="column">
              <Text
                fontSize="lg"
                color={textColor}
                fontWeight="bold"
                pb=".5rem"
              >
                Orders overview
              </Text>
              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                <Text fontWeight="bold" as="span" color="teal.300">
                  +30%
                </Text>{" "}
                this month.
              </Text>
            </Flex>
          </CardHeader>
          <CardBody ps="26px" pe="0px" mb="31px" position="relative">
            <Flex direction="column">
              {timelineData.map((row, index, arr) => {
                return (
                  <TimelineRow
                    logo={row.logo}
                    title={row.title}
                    date={row.date}
                    color={row.color}
                    index={index}
                    arrLength={arr.length}
                  />
                );
              })}
            </Flex>
          </CardBody>
        </Card>
      </Grid>

      <Button
        size="sm"
        colorScheme="blue"
        variant="with-shadow"
        onClick={toggleColorMode}
      >
        Toggle Mode
      </Button>
    </Flex>
  );
}
