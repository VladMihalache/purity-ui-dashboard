// Chakra Icons
import { BellIcon, SearchIcon } from "@chakra-ui/icons";
// Chakra Imports
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Switch,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import avatar1 from "assets/img/faces/avatars/avatar1.png";
import avatar2 from "assets/img/faces/avatars/avatar2.png";
import avatar3 from "assets/img/faces/avatars/avatar3.png";
// Custom Icons
import { ProfileIcon, SettingsIcon } from "components/Icons/Icons";
import { ItemContent } from "components/Menu/ItemContent";
import { Separator } from "components/Separator/Separator";
import { SidebarResponsive } from "components/Sidebar/Sidebar";
import PropTypes from "prop-types";
import React, { useState } from "react";
import routes from "routes.js";

export default function HeaderLinks(props) {
  const {
    rtlActive,
    disclosureFunc,
    variant,
    children,
    fixed,
    ...rest
  } = props;
  const [fixedLinks, setFixedLinks] = useState(props.fixedNavbar);
  const [switched, setSwitched] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  // Chakra Color Mode
  const mainTeal = useColorModeValue("teal.300", "teal.300");
  const inputBg = useColorModeValue("white", "gray.800");
  const navbarIcon = useColorModeValue("gray.500", "gray.200");
  let mainTextGray = useColorModeValue("gray.700", "gray.200");

  const settingsRef = React.useRef();
  return (
    <Flex
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
    >
      <InputGroup
        cursor="pointer"
        bg={inputBg}
        borderRadius="15px"
        w={{
          sm: "128px",
          md: "200px",
        }}
        me={{ sm: "auto", md: "20px" }}
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
              icon={<SearchIcon color={mainTextGray} w="15px" h="15px" />}
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
        ms="0px"
        px="0px"
        me={{ sm: "2px", md: "16px" }}
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
        leftIcon={<ProfileIcon color={navbarIcon} w="22px" h="22px" me="0px" />}
      >
        <Text display={{ sm: "none", md: "flex" }}>Sign In</Text>
      </Button>
      <SidebarResponsive
        routes={routes}
        logoText={props.logoText}
        // logo={logo}
        {...rest}
      />
      <SettingsIcon
        cursor="pointer"
        me="16px"
        ref={settingsRef}
        onClick={onOpen}
        color={navbarIcon}
        qqa
        w="18px"
        h="18px"
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={settingsRef}
      >
        <DrawerContent>
          <DrawerHeader pt="24px" px="24px">
            <DrawerCloseButton />
            <Text fontSize="xl" fontWeight="bold" mt="16px">
              Chakra UI Configurator
            </Text>
            <Text fontSize="md" mb="16px">
              See your dashboard options.
            </Text>
            <Separator />
          </DrawerHeader>
          <DrawerBody w="340px" ps="24px" pe="40px">
            <Flex flexDirection="column">
              <Box>
                <Text fontSize="md" fontWeight="600">
                  Sidenav Type
                </Text>
                <Text fontSize="sm" mb="16px">
                  Choose between 2 different sidenav types.
                </Text>
                <Flex>
                  <Button
                    w="50%"
                    p="8px 32px"
                    me="8px"
                    colorScheme="teal"
                    borderColor="teal.300"
                    color="teal.300"
                    variant="outline"
                    fontSize="xs"
                    onClick={(event) => {
                      props.onChange("transparent");
                    }}
                  >
                    Transparent
                  </Button>
                  <Button
                    type="submit"
                    bg="teal.300"
                    w="50%"
                    p="8px 32px"
                    mb={5}
                    _hover="teal.300"
                    color="white"
                    fontSize="xs"
                    onClick={(event) => {
                      props.onChange("opaque");
                    }}
                  >
                    Opaque
                  </Button>
                </Flex>
              </Box>
              <Box>
                <Text fontSize="md" fontWeight="600" mb="4px">
                  Navbar Fixed
                </Text>
                <Switch
                  colorScheme="teal"
                  isChecked={switched}
                  onChange={(event) => {
                    if (fixedLinks === true) {
                      props.onSwitch(false);
                      setFixedLinks(false);
                      setSwitched(false);
                    } else {
                      props.onSwitch(true);
                      setFixedLinks(true);
                      setSwitched(true);
                    }
                  }}
                />
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Menu>
        <MenuButton>
          <BellIcon color={navbarIcon} w="18px" h="18px" />
        </MenuButton>
        <MenuList p="16px 8px">
          <Flex flexDirection="column">
            <MenuItem borderRadius="8px" mb="10px">
              <ItemContent
                time="13 minutes ago"
                info="from Alicia"
                boldInfo="New Message"
                aName="Alicia"
                aSrc={avatar1}
              />
            </MenuItem>
            <MenuItem borderRadius="8px" mb="10px">
              <ItemContent
                time="2 days ago"
                info="by Josh Henry"
                boldInfo="New Album"
                aName="Josh Henry"
                aSrc={avatar2}
              />
            </MenuItem>
            <MenuItem borderRadius="8px">
              <ItemContent
                time="3 days ago"
                info="Payment succesfully completed!"
                boldInfo=""
                aName="Kara"
                aSrc={avatar3}
              />
            </MenuItem>
          </Flex>
        </MenuList>
      </Menu>
    </Flex>
  );
}

HeaderLinks.propTypes = {
  rtlActive: PropTypes.bool,
};
