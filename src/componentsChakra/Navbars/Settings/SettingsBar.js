import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { SettingsIcon } from "componentsChakra/Icons/Icons";

export function SettingsBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navbarIcon = useColorModeValue("gray.500", "gray.200");
  const settingsRef = React.useRef();
  return (
    <>
      <SettingsIcon
        ref={settingsRef}
        onClick={onOpen}
        color={navbarIcon}
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
    </>
  );
}
