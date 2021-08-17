/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// chakra imports
import { Flex, Link, Text, List, ListItem } from "@chakra-ui/react";

export default function Footer(props) {
  // const linkTeal = useColorModeValue("teal.400", "red.200");
  const { rtlActive } = props;
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px="30px"
      pb="20px"
    >
      <Text
        color="gray.400"
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        &copy; {1900 + new Date().getYear()},{" "}
        <Text as="span">
          {rtlActive ? " مصنوع من ❤️ بواسطة" : "Made with ❤️ by "}
        </Text>
        <Link
          // color={linkTeal}
          color="teal.400"
          href="https://www.creative-tim.com"
          target="_blank"
        >
          {rtlActive ? " توقيت الإبداعية" : "Creative Tim "}
        </Link>
        &
        <Link
          // color={linkTeal}
          color="teal.400"
          href="https://www.simmmple.com/"
          target="_blank"
        >
          {rtlActive ? "سيممبل " : " Simmmple"}
        </Link>
        {rtlActive ? "للحصول على ويب أفضل" : " for a better web"}
      </Text>
      <List display="flex">
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link color="gray.400" href="https://www.creative-tim.com">
            {rtlActive ? "توقيت الإبداعية" : "Creative Tim"}
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link color="gray.400" href="https://www.simmmple.com/">
            {rtlActive ? "سيممبل" : "Simmmple"}
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link color="gray.400" href="#blog">
            {rtlActive ? "مدونة" : "Blog"}
          </Link>
        </ListItem>
        <ListItem>
          <Link color="gray.400" href="#license">
            {rtlActive ? "رخصة" : "License"}
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}

Footer.propTypes = {
  fluid: PropTypes.bool,
  white: PropTypes.bool,
  rtlActive: PropTypes.bool,
};
