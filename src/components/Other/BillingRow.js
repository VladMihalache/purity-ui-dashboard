import React from "react";
import {
  Flex,
  Text,
  Icon,
  useColorModeValue,
  Box,
  useColorMode,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

function BillingRow(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("#F8F9FA", "gray.800");
  const nameColor = useColorModeValue("gray.500", "white");
  const { name, company, email, number } = props;

  return (
    <Card p="1.5rem" bg={bgColor} my="1rem">
      <CardBody p="0px">
        <Flex justifyContent="space-between" w="100%">
          <Flex direction="column" maxWidth="70%">
            <Text color={nameColor} fontSize="md" fontWeight="bold" mb="10px">
              {name}
            </Text>
            <Text color="gray.400" fontSize="sm" fontWeight="semibold">
              Company Name:{" "}
              <Text as="span" color="gray.500">
                {company}
              </Text>
            </Text>
            <Text color="gray.400" fontSize="sm" fontWeight="semibold">
              Email Address:{" "}
              <Text as="span" color="gray.500">
                {email}
              </Text>
            </Text>
            <Text color="gray.400" fontSize="sm" fontWeight="semibold">
              VAT Number:{" "}
              <Text as="span" color="gray.500">
                {number}
              </Text>
            </Text>
          </Flex>
          <Flex
            direction={{ sm: "column", md: "row" }}
            alignItems="flex-start"
            p={{ md: "1.5rem" }}
          >
            <Button
              p="0px"
              bg="transparent"
              mb={{ sm: "10px", md: "0px" }}
              mr={{ md: "24px" }}
            >
              <Flex color="red.500" cursor="pointer" alignItems="center">
                <Icon as={FaTrashAlt} mr="4px" />
                <Text fontSize="sm" fontWeight="semibold">
                  DELETE
                </Text>
              </Flex>
            </Button>
            <Button p="0px" bg="transparent">
              <Flex color={textColor} cursor="pointer" alignItems="center">
                <Icon as={FaPencilAlt} mr="4px" />
                <Text fontSize="sm" fontWeight="semibold">
                  EDIT
                </Text>
              </Flex>
            </Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default BillingRow;
