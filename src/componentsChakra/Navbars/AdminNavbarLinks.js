import React from "react";
import PropTypes from "prop-types";
// Chakra Imports
import {
  Avatar,
  Flex,
  Button,
  IconButton,
  Input,
  HStack,
  useColorModeValue,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
// Chakra Icons
import { SearchIcon, BellIcon } from "@chakra-ui/icons";
// Custom Icons
import { ProfileIcon, SettingsIcon } from "componentsChakra/Icons/Icons";
import { ItemContent } from "componentsChakra/Menu/ItemContent";

export default function HeaderLinks(props) {
  const { rtlActive } = props;

  const mainTeal = useColorModeValue("teal.300", "teal.300");
  const searchIconColor = useColorModeValue("gray.700", "gray.200");
  const inputBg = useColorModeValue("white", "gray.800");
  const { variant, children, ...rest } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const navbarIcon = useColorModeValue("gray.500", "gray.200");
  const settingsRef = React.useRef();
  return (
    <Flex pr="25px" alignItems="center">
      <InputGroup
        cursor="pointer"
        bg={inputBg}
        borderRadius="15px"
        width="200px"
        mr="20px"
        _focus={{
          borderColor: { mainTeal },
        }}
        _active={{
          borderColor: { mainTeal },
        }}
      >
        <InputLeftElement
          children={
            <IconButton
              bg="inherit"
              borderRadius="inherit"
              _hover="none"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
              icon={
                <SearchIcon
                  color={searchIconColor}
                  width="15px"
                  height="15px"
                />
              }
            ></IconButton>
          }
        />
        <Input
          fontSize="xs"
          py="11px"
          placeholder="Type here..."
          borderRadius="inherit"
        />
      </InputGroup>
      <Button
        ml="0px"
        px="0px"
        mr="20px"
        bg="transparent"
        color={navbarIcon}
        fontWeight="bold"
        borderRadius="inherit"
        cursor="pointer"
        _hover="none"
        _active={{
          bg: "transparent",
          transform: "none",
          borderColor: "transparent",
        }}
        _focus={{
          boxShadow: "none",
        }}
        leftIcon={<ProfileIcon color={navbarIcon} width="22px" height="22px" />}
      >
        Sign In
      </Button>
      <SettingsIcon
        mr="20px"
        ref={settingsRef}
        onClick={onOpen}
        color={navbarIcon}
        qqa
        width="18px"
        height="18px"
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={settingsRef}
      >
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Menu>
        <MenuButton>
          <BellIcon color={navbarIcon} width="18px" height="18px" />
        </MenuButton>
        <MenuList p="16px 8px">
          <Flex flexDirection="column">
            <MenuItem borderRadius="8px">
              <Flex>
                <Avatar />
                <Flex flexDirection="column">
                  <Text>
                    <Text>New Album</Text> by Travis Scott
                  </Text>
                  <Flex>
                    <Button></Button>
                    <Text></Text>
                  </Flex>
                </Flex>
              </Flex>
            </MenuItem>
            <MenuItem borderRadius="8px">
              <ItemContent
                time="12"
                info="hey"
                boldInfo="heyhey"
                aName="Segun"
                aSrc=""
              />
            </MenuItem>
            <MenuItem borderRadius="8px">Mark as Draft</MenuItem>
            <MenuItem borderRadius="8px">Delete</MenuItem>
            <MenuItem borderRadius="8px">Attend a Workshop</MenuItem>
          </Flex>
        </MenuList>
      </Menu>
    </Flex>
  );
}

HeaderLinks.propTypes = {
  rtlActive: PropTypes.bool,
};
