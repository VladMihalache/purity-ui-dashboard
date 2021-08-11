import {
    Avatar, AvatarGroup, Box, Button, Flex, Grid, Icon, Image, Link, Switch, Text, useColorMode, useColorModeValue
} from "@chakra-ui/react";
import avatar1 from "assetsChakra/avatars/avatar1.png";
import avatar2 from "assetsChakra/avatars/avatar2.png";
import avatar3 from "assetsChakra/avatars/avatar3.png";
import avatar4 from "assetsChakra/avatars/avatar4.png";
import avatar5 from "assetsChakra/avatars/avatar5.png";
import avatar6 from "assetsChakra/avatars/avatar6.png";
import ArchitectImage1 from "assetsChakra/img/ArchitectImage1.png";
import ArchitectImage2 from "assetsChakra/img/ArchitectImage2.png";
import ProfileBgImage from "assetsChakra/img/ProfileBackground.png";
// import ArchitectImage1 from "assetsChakra/img/ArchitectImage1.png";
import Card from "components/CardChakra/Card.js";
import CardBody from "components/CardChakra/CardBody.js";
import CardHeader from "components/CardChakra/CardHeader.js";
import React from "react";
import {
    FaCube, FaFacebook, FaInstagram, FaPenFancy, FaPlus, FaTwitter
} from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";



function Profile() {

  const { colorMode, toggleColorMode } = useColorMode();
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column">
      <Box
        h="350px"
        mb={{ sm: "175px", md: "75px", xl: "60px" }}
        borderRadius="15px"
        px="0px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          bgImage={ProfileBgImage}
          w="100%"
          h="300px"
          borderRadius="25px"
          bgPosition="50%"
          bgRepeat="no-repeat"
          position="relative"
          display="flex"
          justifyContent="center"
        >
          <Flex
            direction={{ sm: "column", md: "row" }}
            mx="1.5rem"
            maxH="250px"
            w={{ sm: "90%", xl: "95%" }}
            justifyContent={{ sm: "center", md: "space-between" }}
            alignItems="center"
            backdropFilter="saturate(200%) blur(30px)"
            position="absolute"
            bg="hsla(0,0%,100%,.8)"
            p="1.5rem 1rem"
            borderRadius="15px"
            transform={{
              sm: "translateY(90%)",
              md: "translateY(130%)",
              lg: "translateY(160%)",
            }}
          >
            <Flex alignItems="center" mb="10px">
              <Image
                mr="22px"
                src={avatar1}
                w="80px"
                h="80px"
                borderRadius="15px"
              />
              <Flex direction="column" maxWidth="100%">
                <Text
                  fontSize={{ sm: "lg", lg: "xl" }}
                  color={textColor}
                  fontWeight="bold"
                  maxWidth={{ sm: "150px", md: "auto" }}
                >
                  Esthera Jackson
                </Text>
                <Text
                  fontSize={{ sm: "sm", md: "md" }}
                  color="gray.500"
                  fontWeight="semibold"
                  maxWidth={{ sm: "130px", md: "1000px" }}
                >
                  esthera@simmmple.com
                </Text>
              </Flex>
            </Flex>
            <Flex
              direction={{ sm: "column", lg: "row" }}
              w={{ sm: "100%", md: "50%", lg: "auto" }}
            >
              <Flex
                alignItems="center"
                w={{ sm: "100%", lg: "135px" }}
                bg="hsla(0,0%,100%,.8)"
                borderRadius="15px"
                justifyContent="center"
                py="10px"
                boxShadow="inset 0 0 1px 1px hsl(0deg 0% 100% / 90%), 0 20px 27px 0 rgb(0 0 0 / 5%)"
                border="1px solid gray.200"
                cursor="pointer"
              >
                <Icon as={FaCube} mr="6px" />
                <Text fontSize="xs" color={textColor} fontWeight="bold">
                  OVERVIEW
                </Text>
              </Flex>
              <Flex
                alignItems="center"
                w={{ lg: "135px" }}
                borderRadius="15px"
                justifyContent="center"
                py="10px"
                mx={{ lg: "1rem" }}
                cursor="pointer"
              >
                <Icon as={IoDocumentsSharp} mr="6px" />
                <Text fontSize="xs" color={textColor} fontWeight="bold">
                  TEAMS
                </Text>
              </Flex>
              <Flex
                alignItems="center"
                w={{ lg: "135px" }}
                borderRadius="15px"
                justifyContent="center"
                py="10px"
                cursor="pointer"
              >
                <Icon as={FaPenFancy} mr="6px" />
                <Text fontSize="xs" color={textColor} fontWeight="bold">
                  PROJECTS
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Grid templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }} gap="22px">
        <Card p="1rem">
          <CardHeader p="12px 5px" mb="12px">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Platform Settings
            </Text>
          </CardHeader>
          <CardBody p="0px 5px">
            <Flex direction="column">
              <Text fontSize="sm" color="gray.500" fontWeight="600" mb="20px">
                ACCOUNT
              </Text>
              <Flex alignItems="center" mb="20px">
              <Switch colorScheme="teal" mr="10px" isChecked/>
                <Text
                  noOfLines={1}
                  fontSize="md"
                  color="gray.500"
                  fontWeight="400"
                >
                  Email me when someone follows me
                </Text>
              </Flex>
              <Flex alignItems="center" mb="20px">
              <Switch colorScheme="teal" mr="10px"/>
                <Text
                  noOfLines={1}
                  fontSize="md"
                  color="gray.500"
                  fontWeight="400"
                >
                  Email me when someone answers on my post
                </Text>
              </Flex>
              <Flex alignItems="center" mb="20px">
              <Switch colorScheme="teal" mr="10px" isChecked/>
                <Text
                  noOfLines={1}
                  fontSize="md"
                  color="gray.500"
                  fontWeight="400"
                >
                  Email me when someone mentions me
                </Text>
              </Flex>
              <Text
                fontSize="sm"
                color="gray.500"
                fontWeight="600"
                m="6px 0px 20px 0px"
              >
                APPLICATION
              </Text>
              <Flex alignItems="center" mb="20px">
              <Switch colorScheme="teal" mr="10px"/>
                <Text
                  noOfLines={1}
                  fontSize="md"
                  color="gray.500"
                  fontWeight="400"
                >
                  New launches and projects
                </Text>
              </Flex>
              <Flex alignItems="center" mb="20px">
              <Switch colorScheme="teal" mr="10px"/>
                <Text
                  noOfLines={1}
                  fontSize="md"
                  color="gray.500"
                  fontWeight="400"
                >
                  Monthly product changes
                </Text>
              </Flex>
              <Flex alignItems="center" mb="20px">
                <Switch colorScheme="teal" mr="10px" isChecked/>
                <Text
                  noOfLines={1}
                  fontSize="md"
                  color="gray.500"
                  fontWeight="400"
                >
                  Subscribe to newsletter
                </Text>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
        <Card p="1rem" my={{ sm: "24px", xl: "0px" }}>
          <CardHeader p="12px 5px" mb="12px">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Profile Information
            </Text>
          </CardHeader>
          <CardBody p="0px 5px">
            <Flex direction="column">
              <Text fontSize="md" color="gray.500" fontWeight="400" mb="30px">
                Hi, I’m Esthera Jackson, Decisions: If you can’t decide, the
                answer is no. If two equally difficult paths, choose the one
                more painful in the short term (pain avoidance is creating an
                illusion of equality).
              </Text>
              <Flex alignItems="center" mb="18px">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  mr="10px"
                >
                  Full Name:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  Esthera Jackson
                </Text>
              </Flex>
              <Flex alignItems="center" mb="18px">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  mr="10px"
                >
                  Mobile:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  (44) 123 1234 123
                </Text>
              </Flex>
              <Flex alignItems="center" mb="18px">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  mr="10px"
                >
                  Email:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  esthera@simmmple.com
                </Text>
              </Flex>
              <Flex alignItems="center" mb="18px">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  mr="10px"
                >
                  Location:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  United States
                </Text>
              </Flex>
              <Flex alignItems="center" mb="18px">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  mr="10px"
                >
                  Social Media:{" "}
                </Text>
                <Flex>
                  <Link href="#" color="teal.300" fontSize="lg" mr="10px">
                    <Icon as={FaFacebook} />
                  </Link>
                  <Link href="#" color="teal.300" fontSize="lg" mr="10px">
                    <Icon as={FaInstagram} />
                  </Link>
                  <Link href="#" color="teal.300" fontSize="lg" mr="10px">
                    <Icon as={FaTwitter} />
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
        <Card p="1rem">
          <CardHeader p="12px 5px" mb="12px">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Conversations
            </Text>
          </CardHeader>
          <CardBody p="0px 5px">
            <Flex direction="column" w="100%">
              <Flex justifyContent="space-between" mb="21px">
                <Flex alignItems="center">
                  <Image
                    src={avatar2}
                    w="50px"
                    h="50px"
                    borderRadius="15px"
                    mr="10px"
                  />
                  <Flex direction="column">
                    <Text fontSize="sm" color={textColor} fontWeight="bold">
                      Sophie B.{" "}
                    </Text>
                    <Text fontSize="xs" color="gray.500" fontWeight="400">
                      Hi! I need more information...
                    </Text>
                  </Flex>
                </Flex>
                <Text
                  fontSize="sm"
                  fontWeight="600"
                  color="teal.300"
                  alignSelf="center"
                >
                  REPLY
                </Text>
              </Flex>
              <Flex justifyContent="space-between" mb="21px">
                <Flex alignItems="center">
                  <Image
                    src={avatar3}
                    w="50px"
                    h="50px"
                    borderRadius="15px"
                    mr="10px"
                  />
                  <Flex direction="column">
                    <Text fontSize="sm" color={textColor} fontWeight="bold">
                      Sophie B.{" "}
                    </Text>
                    <Text fontSize="xs" color="gray.500" fontWeight="400">
                      Awesome work, can you change...
                    </Text>
                  </Flex>
                </Flex>
                <Text
                  fontSize="sm"
                  fontWeight="600"
                  color="teal.300"
                  alignSelf="center"
                >
                  REPLY
                </Text>
              </Flex>
              <Flex justifyContent="space-between" mb="21px">
                <Flex alignItems="center">
                  <Image
                    src={avatar4}
                    w="50px"
                    h="50px"
                    borderRadius="15px"
                    mr="10px"
                  />
                  <Flex direction="column">
                    <Text fontSize="sm" color={textColor} fontWeight="bold">
                      Sophie B.{" "}
                    </Text>
                    <Text fontSize="xs" color="gray.500" fontWeight="400">
                      Have a great afternoon...
                    </Text>
                  </Flex>
                </Flex>
                <Text
                  fontSize="sm"
                  fontWeight="600"
                  color="teal.300"
                  alignSelf="center"
                >
                  REPLY
                </Text>
              </Flex>
              <Flex justifyContent="space-between" mb="21px">
                <Flex alignItems="center">
                  <Image
                    src={avatar5}
                    w="50px"
                    h="50px"
                    borderRadius="15px"
                    mr="10px"
                  />
                  <Flex direction="column">
                    <Text fontSize="sm" color={textColor} fontWeight="bold">
                      Sophie B.{" "}
                    </Text>
                    <Text fontSize="xs" color="gray.500" fontWeight="400">
                      About files I can...
                    </Text>
                  </Flex>
                </Flex>
                <Text
                  fontSize="sm"
                  fontWeight="600"
                  color="teal.300"
                  alignSelf="center"
                >
                  REPLY
                </Text>
              </Flex>
              <Flex justifyContent="space-between" mb="21px">
                <Flex alignItems="center">
                  <Image
                    src={avatar6}
                    w="50px"
                    h="50px"
                    borderRadius="15px"
                    mr="10px"
                  />
                  <Flex direction="column">
                    <Text fontSize="sm" color={textColor} fontWeight="bold">
                      Sophie B.{" "}
                    </Text>
                    <Text fontSize="xs" color="gray.500" fontWeight="400">
                      About files I can...
                    </Text>
                  </Flex>
                </Flex>
                <Text
                  fontSize="sm"
                  fontWeight="600"
                  color="teal.300"
                  alignSelf="center"
                >
                  REPLY
                </Text>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
      </Grid>
      <Card p="1rem" my="24px">
        <CardHeader p="12px 5px" mb="12px">
          <Flex direction="column">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Projects
            </Text>
            <Text fontSize="sm" color="gray.500" fontWeight="400">
              Architects design houses
            </Text>
          </Flex>
        </CardHeader>
        <CardBody p="0px 5px">
          <Grid
            templateColumns={{ sm: "1fr", md: "1fr 1fr", xl: "repeat(4, 1fr)" }}
            templateRows={{ sm: "1fr 1fr 1fr auto", md: "1fr 1fr", xl: "1fr" }}
            gap="24px"
          >
            <Flex direction="column">
              <Box mb="20px" position="relative">
                <Image src={ArchitectImage1} />
                <Box w="100%" h="100%" position="absolute" bg="linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)`" top="0"></Box>
              </Box>
              <Flex direction="column">
                <Text fontSize="md" color="gray.500" fontWeight="600" mb="10px">
                  Project #1
                </Text>
                <Text
                  fontSize="xl"
                  color={textColor}
                  fontWeight="bold"
                  mb="10px"
                >
                  Modern
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400" mb="20px">
                  As Uber works through a huge amount of internal management
                  turmoil.
                </Text>
                <Flex justifyContent="space-between">
                  <Button
                    variant="outline"
                    colorScheme="teal"
                    minW="110px"
                    h="36px"
                    fontSize="xs"
                    px="1.5rem"
                  >
                    VIEW PROJECT
                  </Button>
                  <AvatarGroup size="xs">
                    <Avatar name="Ryan Florence" src={avatar6} />
                    <Avatar name="Segun Adebayo" src={avatar2} />
                    <Avatar name="Kent Dodds" src={avatar3} />
                    <Avatar name="Prosper Otemuyiwa" src={avatar4} />
                  </AvatarGroup>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction="column">
              <Box mb="20px">
                <Image src={ArchitectImage2} />
              </Box>
              <Flex direction="column">
                <Text fontSize="md" color="gray.500" fontWeight="600" mb="10px">
                  Project #2
                </Text>
                <Text
                  fontSize="xl"
                  color={textColor}
                  fontWeight="bold"
                  mb="10px"
                >
                  Scandinavian
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400" mb="20px">
                  Music is something that every person has his or her own
                  specific opinion about.
                </Text>
                <Flex justifyContent="space-between">
                  <Button
                    variant="outline"
                    colorScheme="teal"
                    minW="110px"
                    h="36px"
                    fontSize="xs"
                    px="1.5rem"
                  >
                    VIEW PROJECT
                  </Button>
                  <AvatarGroup size="xs">
                    <Avatar name="Ryan Florence" src={avatar6} />
                    <Avatar name="Segun Adebayo" src={avatar2} />
                    <Avatar name="Kent Dodds" src={avatar3} />
                    <Avatar name="Prosper Otemuyiwa" src={avatar4} />
                  </AvatarGroup>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction="column">
              <Box mb="20px" position="relative">
                <Image src={ArchitectImage1}/>
                <Box position="absolute" w="100%" h="inherit" bg="rgba(0,0,0,0.5)" top='0'></Box>
              </Box>
              <Flex direction="column">
                <Text fontSize="md" color="gray.500" fontWeight="600" mb="10px">
                  Project #3
                </Text>
                <Text
                  fontSize="xl"
                  color={textColor}
                  fontWeight="bold"
                  mb="10px"
                >
                  Minimalist
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400" mb="20px">
                  Different people have different taste, especially various
                  types of music.
                </Text>
                <Flex justifyContent="space-between">
                  <Button
                    variant="outline"
                    colorScheme="teal"
                    minW="110px"
                    h="36px"
                    fontSize="xs"
                    px="1.5rem"
                  >
                    VIEW PROJECT
                  </Button>
                  <AvatarGroup size="xs">
                    <Avatar name="Ryan Florence" src={avatar6} />
                    <Avatar name="Segun Adebayo" src={avatar2} />
                    <Avatar name="Kent Dodds" src={avatar3} />
                    <Avatar name="Prosper Otemuyiwa" src={avatar4} />
                  </AvatarGroup>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
              color="gray.500"
              border="1px solid lightgray"
              borderRadius="15px"
              minHeight={{ sm: "200px" }}
            >
              <Icon as={FaPlus} fontSize="lg" mb="12px" />
              <Text fontSize="lg" fontWeight="bold">
                Create a New Project
              </Text>
            </Flex>
          </Grid>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Profile;
