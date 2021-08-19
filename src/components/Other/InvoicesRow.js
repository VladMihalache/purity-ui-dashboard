import React from 'react';
import {Flex, Text, Icon, useColorModeValue, Box, useColorMode, Spacer, Button} from '@chakra-ui/react';

function InvoicesRow(props) {

    const { colorMode, toggleColorMode } = useColorMode();
    const iconTeal = useColorModeValue("teal.300", "teal.300");
    const iconBoxInside = useColorModeValue("white", "white");
    const textColor = useColorModeValue("gray.700", "white");
    const {date, code, price, format, logo} = props;

    return (
        <Flex my={{sm: "1rem", xl: "10px"}} alignItems="center">
            <Flex direction="column">
                <Text fontSize="md" color={textColor} fontWeight="bold">{date}</Text>
                <Text fontSize="sm" color="gray.400" fontWeight="semibold" mr="16px">{code}</Text>
            </Flex>
            <Spacer />
            <Box mr="12px">
                <Text fontSize="md" color="gray.400" fontWeight="semibold">{price}</Text>
            </Box>
            <Button p="0px" bg="transparent" variant="no-hover">
                <Flex alignItems="center" p="12px">
                    <Icon as={logo} w="20px" h="auto" mr="5px"/>
                    <Text fontSize="md" color={textColor} fontWeight="bold">{format}</Text>
                </Flex>
            </Button>
        </Flex>
    )
}

export default InvoicesRow
