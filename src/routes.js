// import
import DashboardChakra from "views/Dashboard/Dashboard.js";
import TablesChakra from "views/Dashboard/Tables.js";
import BillingChakra from "views/Dashboard/Billing.js";
import RTLChakra from "views/RTL/RTL.js";
import ProfileChakra from "views/Dashboard/Profile.js";
import SignInChakra from "views/Pages/SignIn.js";
import SignUpChakra from "views/Pages/SignUp.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  SupportIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboardchakra",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: DashboardChakra,
    layout: "/admin",
  },
  {
    path: "/tableschakra",
    name: "Tables",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: TablesChakra,
    layout: "/admin",
  },
  {
    path: "/billingchakra",
    name: "Billing",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color="inherit" />,
    component: BillingChakra,
    layout: "/admin",
  },
  {
    path: "/rtl-support-page-chakra",
    name: "RTL Support",
    rtlName: "صودعم رتل",
    icon: <SupportIcon color="inherit" />,
    component: RTLChakra,
    layout: "/rtl",
  },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profilechakra",
        name: "Profile",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: ProfileChakra,
        layout: "/admin",
      },
      {
        path: "/signinchakra",
        name: "Sign In",
        rtlName: "لوحة القيادة",
        icon: <DocumentIcon color="inherit" />,
        component: SignInChakra,
        layout: "/auth",
      },
      {
        path: "/signUpchakra",
        name: "Sign Up",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        component: SignUpChakra,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
