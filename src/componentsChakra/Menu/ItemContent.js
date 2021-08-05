import React from "react";
import PropTypes from "prop-types";
// chakra imports
import {
  Avatar,
  Flex,
  Link,
  Text,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";

import { SettingsIcon, ClockIcon } from "componentsChakra/Icons/Icons";

export function ItemContent(props) {
  // const linkTeal = useColorModeValue("teal.400", "red.200");
  const navbarIcon = useColorModeValue("gray.500", "gray.200");
  const notificationColor = useColorModeValue("gray.700", "white");
  const { rtlActive } = props;
  const spacing = " ";
  return (
    <>
      <Avatar
        name={props.aName}
        src={props.aSrc}
        borderRadius="12px"
        mr="16px"
      />
      <Flex flexDirection="column">
        <Text display="flex" fontSize="14px" mb="5px" color={notificationColor}>
          <Text fontWeight="bold" fontSize="14px">
            {props.boldInfo}
            {spacing}
          </Text>
          {props.info}
        </Text>
        <Flex alignItems="center">
          <ClockIcon color={navbarIcon} w="13px" h="13px" mr="3px" />
          <Text fontSize="xs" lineHeight="100%" color={navbarIcon}>
            {props.time}
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

// Footer.propTypes = {
//   fluid: PropTypes.bool,
//   white: PropTypes.bool,
//   rtlActive: PropTypes.bool,
// };
