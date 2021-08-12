import React from 'react';
import {Flex, Text, Icon, useColorModeValue, Box, useColorMode, Spacer} from '@chakra-ui/react';
import {FaTrashAlt, FaPencilAlt} from 'react-icons/fa';
import Card from "components/CardChakra/Card.js";
import CardHeader from "components/CardChakra/CardHeader.js";
import CardBody from "components/CardChakra/CardBody.js";


function TranzactionRow(props) {

    const { colorMode, toggleColorMode } = useColorMode();
    const iconTeal = useColorModeValue("teal.300", "teal.300");
    const iconBoxInside = useColorModeValue("white", "white");
    const textColor = useColorModeValue("gray.700", "white");
    const {name, date, logo, price} = props;

    console.log(logo.toString(), typeof logo);

    return (
        <Flex my="1rem" justifyContent="space-between">
            <Flex alignItems="center">
                <Box mr="12px" borderRadius="50%" color={price[0] === '+' ? 'green.400' : price[0] === '-' ? 'red.400' : 'gray.400'} border="1px solid" display="flex" alignItems="center" justifyContent="center" w="35px" h="35px">
                    <Icon as={logo}/>
                </Box>
                <Flex direction="column">
                    <Text fontSize={{sm: 'md', md: 'lg', lg: 'md'}} color={textColor} fontWeight="bold">{name}</Text>
                    <Text fontSize={{sm: 'xs', md: 'sm', lg: 'xs'}} color="gray.400" fontWeight="semibold">{date}</Text>
                </Flex>
            </Flex>
                <Box color={price[0] === '+' ? 'green.400' : price[0] === '-' ? 'red.400' : {textColor}}>
                    <Text fontSize={{sm: 'md', md: 'lg', lg: 'md'}} fontWeight="bold">{price}</Text>
                </Box>
        </Flex>
    )
}

export default TranzactionRow;
