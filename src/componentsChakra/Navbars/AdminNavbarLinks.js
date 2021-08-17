import React, { useState } from "react";
// Chakra Icons
import { BellIcon, SearchIcon } from "@chakra-ui/icons";
import { NavLink, useLocation } from "react-router-dom";
import routes from "routes.js";
// Chakra Imports
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
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
  useColorModeValue,
  useDisclosure,
  Text,
  Switch,
} from "@chakra-ui/react";
import { SidebarResponsive } from "componentsChakra/Sidebar/Sidebar";
import avatar1 from "assetsChakra/img/faces/avatars/avatar1.png";
import avatar2 from "assetsChakra/img/faces/avatars/avatar2.png";
import avatar3 from "assetsChakra/img/faces/avatars/avatar3.png";
// Custom Icons
import { ProfileIcon, SettingsIcon } from "componentsChakra/Icons/Icons";
import { ItemContent } from "componentsChakra/Menu/ItemContent";
import PropTypes from "prop-types";
import { MicNone } from "@material-ui/icons";

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
          <DrawerCloseButton />
          <Text fontSize="xl">Chakra Dashboard Configurator</Text>

          <DrawerBody w="340px">
            <Button
              onClick={(event) => {
                props.onChange("transparent");
              }}
            >
              Transparent
            </Button>
            <Button
              onClick={(event) => {
                props.onChange("opaque");
              }}
            >
              Opaque
            </Button>
            <Switch
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
