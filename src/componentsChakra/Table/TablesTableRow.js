import React from 'react';
import {Tr, Td, Image, Flex, Text, Progress, Button, Icon, useColorModeValue} from "@chakra-ui/react";

function TablesTableRow(props) {

    const {logo, name, email, subdomain, domain, status, date} = props;
    const textColor = useColorModeValue("gray.700", "white");

    return (
        <Tr>
            <Td minWidth={{sm: "250px"}} pl="0px">
                <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                    <Image src={logo} w="40px" borderRadius="15px" mr="18px"/>
                    <Flex direction="column">
                        <Text fontSize="md" color={textColor} fontWeight="bold" minWidth="100%">{name}</Text>
                        <Text fontSize="sm" color="gray.400" fontWeight="normal">{email}</Text>
                    </Flex>
                </Flex>
            </Td>

            <Td>
                <Flex direction="column">
                    <Text fontSize="md" color={textColor} fontWeight="bold">{domain}</Text>
                    <Text fontSize="sm" color="gray.400" fontWeight="normal">{subdomain}</Text>
                </Flex>
            </Td>
            <Td>
                <Button colorScheme={status === "Online" ? "green" : "gray"} cursor="default">{status}</Button>
            </Td>
            <Td>
                <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">{date}</Text>
            </Td>
            <Td>
            <Text fontSize="md" color="gray.400" fontWeight="bold" cursor="pointer">Edit</Text>
            </Td>
        </Tr>
    )
}

export default TablesTableRow
