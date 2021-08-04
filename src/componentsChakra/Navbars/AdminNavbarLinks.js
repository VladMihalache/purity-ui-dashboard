import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// import { Manager, Target, Popper } from "react-popper";

// @material-ui/core components
import {
  Flex,
  Button,
  IconButton,
  HStack,
  VStack,
  SimpleGrid,
  useColorModeValue,
  useColorMode,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import {
  SettingsIcon,
  ProfileIcon,
  WalletIcon,
  RocketIcon,
} from "componentsChakra/Icons/Icons";
import { SettingsBar } from "componentsChakra/Settings/SettingsBar";

import { BellIcon } from "@chakra-ui/icons";

import { SearchBar } from "componentsChakra/Navbars/SearchBar/SearchBar";

import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Hidden from "@material-ui/core/Hidden";
import Popper from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";

// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";

import styles from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";
const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const [openNotification, setOpenNotification] = React.useState(null);
  const handleClickNotification = (event) => {
    if (openNotification && openNotification.contains(event.target)) {
      setOpenNotification(null);
    } else {
      setOpenNotification(event.currentTarget);
    }
  };
  const handleCloseNotification = () => {
    setOpenNotification(null);
  };
  const [openProfile, setOpenProfile] = React.useState(null);
  const handleClickProfile = (event) => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    setOpenProfile(null);
  };
  const classes = useStyles();
  const { rtlActive } = props;
  const searchButton =
    classes.top +
    " " +
    classes.searchButton +
    " " +
    classNames({
      [classes.searchRTL]: rtlActive,
    });
  const dropdownItem = classNames(classes.dropdownItem, classes.primaryHover, {
    [classes.dropdownItemRTL]: rtlActive,
  });
  const wrapper = classNames({
    [classes.wrapperRTL]: rtlActive,
  });
  const managerClasses = classNames({
    [classes.managerClasses]: true,
  });
  const navbarIcon = useColorModeValue("gray.500", "gray.200");
  const settingsRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HStack>
        <SearchBar />
        <IconButton
          bg="transparent"
          color="gray"
          borderRadius="inherit"
          _hover="none"
          _active={{
            bg: "transparent",
            transform: "none",
            borderColor: "transparent",
          }}
          _focus={{
            boxShadow: "none",
          }}
          leftIcon={
            <ProfileIcon color={navbarIcon} width="22px" height="22px" />
          }
        >
          Sign In
        </IconButton>
        <SettingsBar />
        <IconButton
          bg="inherit"
          color="gray"
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
          icon={<BellIcon color={navbarIcon} width="18px" height="18px" />}
        ></IconButton>
        <div className={managerClasses}>
          <Button
            color="transparent"
            justIcon
            aria-label="Notifications"
            aria-owns={openNotification ? "notification-menu-list" : null}
            aria-haspopup="true"
            onClick={handleClickNotification}
            className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
            muiClasses={{
              label: rtlActive ? classes.labelRTL : "",
            }}
          >
            {/* <Notifications
            className={
              classes.headerLinksSvg +
              " " +
              (rtlActive
                ? classes.links + " " + classes.linksRTL
                : classes.links)
            }
          /> */}
            <span className={classes.notifications}>5</span>
            <Hidden mdUp implementation="css">
              <span
                onClick={handleClickNotification}
                className={classes.linkText}
              >
                {rtlActive ? "إعلام" : "Notification"}
              </span>
            </Hidden>
          </Button>
          <Popper
            open={Boolean(openNotification)}
            anchorEl={openNotification}
            transition
            disablePortal
            placement="bottom"
            className={classNames({
              [classes.popperClose]: !openNotification,
              [classes.popperResponsive]: true,
              [classes.popperNav]: true,
            })}
          >
            {({ TransitionProps }) => (
              <Grow
                {...TransitionProps}
                id="notification-menu-list"
                style={{ transformOrigin: "0 0 0" }}
              >
                <Paper className={classes.dropdown}>
                  <ClickAwayListener onClickAway={handleCloseNotification}>
                    <MenuList role="menu">
                      <MenuItem
                        onClick={handleCloseNotification}
                        className={dropdownItem}
                      >
                        {rtlActive
                          ? "إجلاء أوزار الأسيوي حين بل, كما"
                          : "Mike John responded to your email"}
                      </MenuItem>
                      <MenuItem
                        onClick={handleCloseNotification}
                        className={dropdownItem}
                      >
                        {rtlActive
                          ? "شعار إعلان الأرضية قد ذلك"
                          : "You have 5 new tasks"}
                      </MenuItem>
                      <MenuItem
                        onClick={handleCloseNotification}
                        className={dropdownItem}
                      >
                        {rtlActive
                          ? "ثمّة الخاصّة و على. مع جيما"
                          : "You're now friend with Andrew"}
                      </MenuItem>
                      <MenuItem
                        onClick={handleCloseNotification}
                        className={dropdownItem}
                      >
                        {rtlActive ? "قد علاقة" : "Another Notification"}
                      </MenuItem>
                      <MenuItem
                        onClick={handleCloseNotification}
                        className={dropdownItem}
                      >
                        {rtlActive ? "قد فاتّبع" : "Another One"}
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>

        <div className={managerClasses}>
          <Button
            color="transparent"
            aria-label="Person"
            justIcon
            aria-owns={openProfile ? "profile-menu-list" : null}
            aria-haspopup="true"
            onClick={handleClickProfile}
            className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
            muiClasses={{
              label: rtlActive ? classes.labelRTL : "",
            }}
          >
            <Person
              className={
                classes.headerLinksSvg +
                " " +
                (rtlActive
                  ? classes.links + " " + classes.linksRTL
                  : classes.links)
              }
            />
            <Hidden mdUp implementation="css">
              <span onClick={handleClickProfile} className={classes.linkText}>
                {rtlActive ? "الملف الشخصي" : "Profile"}
              </span>
            </Hidden>
          </Button>
          <Popper
            open={Boolean(openProfile)}
            anchorEl={openProfile}
            transition
            disablePortal
            placement="bottom"
            className={classNames({
              [classes.popperClose]: !openProfile,
              [classes.popperResponsive]: true,
              [classes.popperNav]: true,
            })}
          >
            {({ TransitionProps }) => (
              <Grow
                {...TransitionProps}
                id="profile-menu-list"
                style={{ transformOrigin: "0 0 0" }}
              >
                <Paper className={classes.dropdown}>
                  <ClickAwayListener onClickAway={handleCloseProfile}>
                    <MenuList role="menu">
                      <MenuItem
                        onClick={handleCloseProfile}
                        className={dropdownItem}
                      >
                        {rtlActive ? "الملف الشخصي" : "Profile"}
                      </MenuItem>
                      <MenuItem
                        onClick={handleCloseProfile}
                        className={dropdownItem}
                      >
                        {rtlActive ? "الإعدادات" : "Settings"}
                      </MenuItem>
                      <Divider light />
                      <MenuItem
                        onClick={handleCloseProfile}
                        className={dropdownItem}
                      >
                        {rtlActive ? "الخروج" : "Log out"}
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </HStack>
    </>
  );
}

HeaderLinks.propTypes = {
  rtlActive: PropTypes.bool,
};
