// Chakra import
import DashboardChakra from "viewsChakra/Dashboard/Dashboard.js";
import TablesChakra from "viewsChakra/Dashboard/Tables.js";
import BillingChakra from "viewsChakra/Dashboard/Billing.js";
import RTLChakra from "viewsChakra/RTL/RTL.js";
import ProfileChakra from "viewsChakra/Dashboard/Profile.js";
import SignInChakra from "viewsChakra/Pages/SignIn.js";
import SignUpChakra from "viewsChakra/Pages/SignUp.js";

import Buttons from "views/Components/Buttons.js";
import Calendar from "views/Calendar/Calendar.js";
import Charts from "views/Charts/Charts.js";
import Dashboard from "views/Dashboard/Dashboard.js";
import ErrorPage from "views/Pages/ErrorPage.js";
import ExtendedForms from "views/Forms/ExtendedForms.js";
import ExtendedTables from "views/Tables/ExtendedTables.js";
import GridSystem from "views/Components/GridSystem.js";
import Icons from "views/Components/Icons.js";
import LockScreenPage from "views/Pages/LockScreenPage.js";
import LoginPage from "views/Pages/LoginPage.js";
import Notifications from "views/Components/Notifications.js";
import Panels from "views/Components/Panels.js";
import PricingPage from "views/Pages/PricingPage.js";
import RTLSupport from "views/Pages/RTLSupport.js";
import ReactTables from "views/Tables/ReactTables.js";
import RegisterPage from "views/Pages/RegisterPage.js";
import RegularForms from "views/Forms/RegularForms.js";
import RegularTables from "views/Tables/RegularTables.js";
import SweetAlert from "views/Components/SweetAlert.js";
import TimelinePage from "views/Pages/Timeline.js";
import Typography from "views/Components/Typography.js";
import UserProfile from "views/Pages/UserProfile.js";
import ValidationForms from "views/Forms/ValidationForms.js";
import Widgets from "views/Widgets/Widgets.js";
import Wizard from "views/Forms/Wizard.js";

import {
  HomeIcon,
  ChartIcon,
  CreditIcon,
  SupportIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
} from "componentsChakra/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/dashboardchakra",
    name: "Dashboard Chakra",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: DashboardChakra,
    layout: "/admin",
  },
  {
    path: "/tableschakra",
    name: "Tables Chakra",
    rtlName: "لوحة القيادة",
    icon: <ChartIcon color="inherit" />,
    component: TablesChakra,
    layout: "/admin",
  },
  {
    path: "/billingchakra",
    name: "Billing Chakra",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color="inherit" />,
    component: BillingChakra,
    layout: "/admin",
  },
  {
    path: "/rtl-support-page-chakra",
    name: "RTL Support Chakra",
    rtlName: "صودعم رتل",
    icon: <SupportIcon color="inherit" />,
    component: RTLChakra,
    layout: "/rtl",
  },
  {
    path: "/profilechakra",
    name: "Profile Chakra",
    rtlName: "لوحة القيادة",
    icon: <PersonIcon color="inherit" />,
    component: ProfileChakra,
    layout: "/admin",
  },
  {
    path: "/signinchakra",
    name: "Sign In Chakra",
    rtlName: "لوحة القيادة",
    icon: <DocumentIcon color="inherit" />,
    component: SignInChakra,
    layout: "/auth",
  },
  {
    path: "/signUpchakra",
    name: "Sign Up Chakra",
    rtlName: "لوحة القيادة",
    icon: <RocketIcon color="inherit" />,
    component: SignUpChakra,
    layout: "/auth",
  },
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   rtlName: "لوحة القيادة",
  //   icon: DashboardIcon,
  //   component: Dashboard,
  //   layout: "/admin",
  // },
  // {
  //   path: "/dashboardchakra",
  //   name: "Dashboard Chakra",
  //   rtlName: "لوحة القيادة",
  //   icon: DashboardIcon,
  //   component: DashboardChakra,
  //   layout: "/admin",
  // },
  // {
  //   path: "/tableschakra",
  //   name: "Tables Chakra",
  //   rtlName: "لوحة القيادة",
  //   icon: DashboardIcon,
  //   component: TablesChakra,
  //   layout: "/admin",
  // },
  // {
  //   path: "/billingchakra",
  //   name: "Billing Chakra",
  //   rtlName: "لوحة القيادة",
  //   icon: DashboardIcon,
  //   component: BillingChakra,
  //   layout: "/admin",
  // },
  // {
  //   path: "/rtl-support-page-chakra",
  //   name: "RTL Support Chakra",
  //   rtlName: "صودعم رتل",
  //   mini: "RS",
  //   rtlMini: "صو",
  //   component: RTLChakra,
  //   layout: "/rtl",
  // },
  // {
  //   path: "/profilechakra",
  //   name: "Profile Chakra",
  //   rtlName: "لوحة القيادة",
  //   icon: DashboardIcon,
  //   component: ProfileChakra,
  //   layout: "/admin",
  // },
  // {
  //   path: "/signinchakra",
  //   name: "Sign In Chakra",
  //   rtlName: "لوحة القيادة",
  //   icon: DashboardIcon,
  //   component: SignInChakra,
  //   layout: "/auth",
  // },
  // {
  //   path: "/signUpchakra",
  //   name: "Sign Up Chakra",
  //   rtlName: "لوحة القيادة",
  //   icon: DashboardIcon,
  //   component: SignUpChakra,
  //   layout: "/auth",
  // },
  // {
  //   path: "/register-page",
  //   name: "Register Page",
  //   rtlName: "تسجيل",
  //   mini: "R",
  //   rtlMini: "صع",
  //   component: RegisterPage,
  //   layout: "/auth",
  // },
  // {
  //   collapse: true,
  //   name: "Pages",
  //   rtlName: "صفحات",
  //   icon: Image,
  //   state: "pageCollapse",
  //   views: [
  //     {
  //       path: "/pricing-page",
  //       name: "Pricing Page",
  //       rtlName: "عالتسعير",
  //       mini: "PP",
  //       rtlMini: "ع",
  //       component: PricingPage,
  //       layout: "/auth",
  //     },
  //     {
  //       path: "/rtl-support-page",
  //       name: "RTL Support",
  //       rtlName: "صودعم رتل",
  //       mini: "RS",
  //       rtlMini: "صو",
  //       component: RTLSupport,
  //       layout: "/rtl",
  //     },
  //     {
  //       path: "/timeline-page",
  //       name: "Timeline Page",
  //       rtlName: "تيالجدول الزمني",
  //       mini: "T",
  //       rtlMini: "تي",
  //       component: TimelinePage,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/login-page",
  //       name: "Login Page",
  //       rtlName: "هعذاتسجيل الدخول",
  //       mini: "L",
  //       rtlMini: "هعذا",
  //       component: LoginPage,
  //       layout: "/auth",
  //     },
  //     {
  //       path: "/register-page",
  //       name: "Register Page",
  //       rtlName: "تسجيل",
  //       mini: "R",
  //       rtlMini: "صع",
  //       component: RegisterPage,
  //       layout: "/auth",
  //     },
  //     {
  //       path: "/lock-screen-page",
  //       name: "Lock Screen Page",
  //       rtlName: "اقفل الشاشة",
  //       mini: "LS",
  //       rtlMini: "هذاع",
  //       component: LockScreenPage,
  //       layout: "/auth",
  //     },
  //     {
  //       path: "/user-page",
  //       name: "User Profile",
  //       rtlName: "ملف تعريفي للمستخدم",
  //       mini: "UP",
  //       rtlMini: "شع",
  //       component: UserProfile,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/error-page",
  //       name: "Error Page",
  //       rtlName: "صفحة الخطأ",
  //       mini: "E",
  //       rtlMini: "البريد",
  //       component: ErrorPage,
  //       layout: "/auth",
  //     },
  //   ],
  // },
  // {
  //   collapse: true,
  //   name: "Components",
  //   rtlName: "المكونات",
  //   icon: Apps,
  //   state: "componentsCollapse",
  //   views: [
  //     {
  //       collapse: true,
  //       name: "Multi Level Collapse",
  //       rtlName: "انهيار متعدد المستويات",
  //       mini: "MC",
  //       rtlMini: "ر",
  //       state: "multiCollapse",
  //       views: [
  //         {
  //           path: "#sample-path",
  //           name: "Example",
  //           rtlName: "مثال",
  //           mini: "E",
  //           rtlMini: "ه",
  //           component: () => {},
  //           layout: "#sample-layout",
  //         },
  //       ],
  //     },
  //     {
  //       path: "/buttons",
  //       name: "Buttons",
  //       rtlName: "وصفت",
  //       mini: "B",
  //       rtlMini: "ب",
  //       component: Buttons,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/grid-system",
  //       name: "Grid System",
  //       rtlName: "نظام الشبكة",
  //       mini: "GS",
  //       rtlMini: "زو",
  //       component: GridSystem,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/panels",
  //       name: "Panels",
  //       rtlName: "لوحات",
  //       mini: "P",
  //       rtlMini: "ع",
  //       component: Panels,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/sweet-alert",
  //       name: "Sweet Alert",
  //       rtlName: "الحلو تنبيه",
  //       mini: "SA",
  //       rtlMini: "ومن",
  //       component: SweetAlert,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/notifications",
  //       name: "Notifications",
  //       rtlName: "إخطارات",
  //       mini: "N",
  //       rtlMini: "ن",
  //       component: Notifications,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/icons",
  //       name: "Icons",
  //       rtlName: "الرموز",
  //       mini: "I",
  //       rtlMini: "و",
  //       component: Icons,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/typography",
  //       name: "Typography",
  //       rtlName: "طباعة",
  //       mini: "T",
  //       rtlMini: "ر",
  //       component: Typography,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  // {
  //   collapse: true,
  //   name: "Forms",
  //   rtlName: "إستمارات",
  //   icon: "content_paste",
  //   state: "formsCollapse",
  //   views: [
  //     {
  //       path: "/regular-forms",
  //       name: "Regular Forms",
  //       rtlName: "أشكال عادية",
  //       mini: "RF",
  //       rtlMini: "صو",
  //       component: RegularForms,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/extended-forms",
  //       name: "Extended Forms",
  //       rtlName: "نماذج موسعة",
  //       mini: "EF",
  //       rtlMini: "هوو",
  //       component: ExtendedForms,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/validation-forms",
  //       name: "Validation Forms",
  //       rtlName: "نماذج التحقق من الصحة",
  //       mini: "VF",
  //       rtlMini: "تو",
  //       component: ValidationForms,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/wizard",
  //       name: "Wizard",
  //       rtlName: "ساحر",
  //       mini: "W",
  //       rtlMini: "ث",
  //       component: Wizard,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  // {
  //   collapse: true,
  //   name: "Tables",
  //   rtlName: "الجداول",
  //   icon: GridOn,
  //   state: "tablesCollapse",
  //   views: [
  //     {
  //       path: "/regular-tables",
  //       name: "Regular Tables",
  //       rtlName: "طاولات عادية",
  //       mini: "RT",
  //       rtlMini: "صر",
  //       component: RegularTables,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/extended-tables",
  //       name: "Extended Tables",
  //       rtlName: "جداول ممتدة",
  //       mini: "ET",
  //       rtlMini: "هور",
  //       component: ExtendedTables,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/react-tables",
  //       name: "React Tables",
  //       rtlName: "رد فعل الطاولة",
  //       mini: "RT",
  //       rtlMini: "در",
  //       component: ReactTables,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  // {
  //   path: "/widgets",
  //   name: "Widgets",
  //   rtlName: "الحاجيات",
  //   icon: WidgetsIcon,
  //   component: Widgets,
  //   layout: "/admin",
  // },
  // {
  //   path: "/charts",
  //   name: "Charts",
  //   rtlName: "الرسوم البيانية",
  //   icon: Timeline,
  //   component: Charts,
  //   layout: "/admin",
  // },
  // {
  //   path: "/calendar",
  //   name: "Calendar",
  //   rtlName: "التقويم",
  //   icon: DateRange,
  //   component: Calendar,
  //   layout: "/admin",
  // },
];
export default dashRoutes;
