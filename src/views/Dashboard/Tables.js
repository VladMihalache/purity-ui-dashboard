import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesProjectRow from "components/Table/TablesProjectRow";
import TablesTableRow from "components/Table/TablesTableRow";
import React from "react";
import { tablesProjectData, tablesTableData } from "variables/general";

function Tables() {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card p="1rem" px="22px" overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="12px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Authors Table
          </Text>
        </CardHeader>
        <Table variant="simple" color={textColor}>
          <Thead>
            <Tr my=".8rem" pl="0px" color="gray.400">
              <Th pl="0px" color="gray.400">
                Author
              </Th>
              <Th color="gray.400">Function</Th>
              <Th color="gray.400">Status</Th>
              <Th color="gray.400">Employed</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {tablesTableData.map((row) => {
              return (
                <TablesTableRow
                  name={row.name}
                  logo={row.logo}
                  email={row.email}
                  subdomain={row.subdomain}
                  domain={row.domain}
                  status={row.status}
                  date={row.date}
                />
              );
            })}
          </Tbody>
        </Table>
      </Card>
      <Card
        p="1rem"
        px="22px"
        my="22px"
        overflowX={{ sm: "scroll", xl: "hidden" }}
      >
        <CardHeader p="12px 0px 28px 0px">
          <Flex direction="column">
            <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
              Projects Table
            </Text>
          </Flex>
        </CardHeader>
        <Table variant="simple" color={textColor}>
          <Thead>
            <Tr my=".8rem" pl="0px">
              <Th pl="0px" color="gray.400">
                Companies
              </Th>
              <Th color="gray.400">Budget</Th>
              <Th color="gray.400">Status</Th>
              <Th color="gray.400">Completion</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {tablesProjectData.map((row) => {
              return (
                <TablesProjectRow
                  name={row.name}
                  logo={row.logo}
                  status={row.status}
                  budget={row.budget}
                  progression={row.progression}
                />
              );
            })}
          </Tbody>
        </Table>
      </Card>
    </Flex>
  );
}

export default Tables;