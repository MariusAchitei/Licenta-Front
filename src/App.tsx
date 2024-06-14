import { NavbarComponent } from "./components/common/Navbar";
import { BrowserRouter, useRoutes, useNavigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { Projects } from "./pages/common/Projects";
import { Environment } from "./pages/common/Environment";
import { FAQ } from "./pages/common/FAQ";
import { UserProvider, UserContext } from "./utils/UserContext";
import { UserManagement } from "./pages/common/UserManagement";
import { FooterComponent } from "./components/common/Footer";
import Home from "pages/Home";
import AppointmentForm from "pages/appointment/CreateAppointment";

import GlobalStyles from "utils/global";
import "react-grid-layout/css/styles.css";
import "./fonts/icomoon/style.css";
import "swiper/css";
import "swiper/css/effect-fade";
import { SnackbarProvider } from "notistack";

import { ThemeProvider, StyleSheetManager } from "styled-components";

import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import Sidebar from "layout/Sidebar";
import { SidebarContextAPI } from "contexts/sidebarContext";
import { InterfaceContextAPI } from "contexts/interfaceContext";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/appointments/create", element: <AppointmentForm /> },
    { path: "/home", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/environment",
      element: <Environment />,
    },
    {
      path: "/faq",
      element: <FAQ />,
    },
    {
      path: "/users",
      element: <UserManagement />,
    },
    {
      path: "/*",
      element: <Login />,
    },
  ]);

  return routes;
};

function App() {
  const isDarkMode = false;
  const theme = createTheme({
    direction: "ltr",
  });
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={{ theme: isDarkMode ? "dark" : "light" }}>
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            autoHideDuration={3000}
          >
            <BrowserRouter>
              <UserProvider>
                <GlobalStyles />
                {/* <Sidebar /> */}
                <NavbarComponent />
                <section className="relative min-h-screen  bg-transparent lg:pb-[90px] lg:pt-[120px]">
                  <AppRoutes />
                  <div className="absolute bottom-0 right-0 -z-50 h-full w-full bg-gray-50 dark:bg-gray-900">
                    <svg
                      width="1440"
                      height=""
                      viewBox="0 0 1440 886"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.5"
                        d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                        fill="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="1308.65"
                          y1="1142.58"
                          x2="602.827"
                          y2="-418.681"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#3056D3" stop-opacity="0.36" />
                          <stop
                            offset="1"
                            stop-color="#F5F2FD"
                            stop-opacity="0"
                          />
                          <stop
                            offset="1"
                            stop-color="#F5F2FD"
                            stop-opacity="0.096144"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </section>
                <FooterComponent />
              </UserProvider>
            </BrowserRouter>
          </SnackbarProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  );
}
export default App;
