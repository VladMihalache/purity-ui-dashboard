import React from "react";
// import { Manager, Target, Popper } from "react-popper";

// @material-ui/core components
import {
  IconButton,
  useColorModeValue,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export function SearchBar(props) {
  const mainTeal = useColorModeValue("teal.300", "teal.300");
  const searchIconColor = useColorModeValue("gray.700", "gray.200");
  const inputBg = useColorModeValue("white", "gray.800");
  const { variant, children, ...rest } = props;
  // Pass the computed styles into the `__css` prop
  return (
    <InputGroup
      bg={inputBg}
      borderRadius="15px"
      width="200px"
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
              <SearchIcon color={searchIconColor} width="15px" height="15px" />
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
  );
}
