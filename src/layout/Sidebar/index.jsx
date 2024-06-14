// styling
import { colors } from "utils/styles";

// styled components
import { Header } from "./style";

// components
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Logo from "ui/Logo";
import MenuButton from "ui/MenuButton";
import Content from "./Content";
import Emergency from "./Emergency";

// hooks
import { useSidebarContext } from "contexts/sidebarContext";
import { useWindowSize } from "react-use";
import { useInterfaceContext } from "contexts/interfaceContext";
import { useTheme } from "styled-components";

const Sidebar = () => {
  const { theme } = useTheme();
  const { isSidebarOpen, toggleSidebar } = useSidebarContext();
  const { direction } = useInterfaceContext();
  const { width } = useWindowSize();
  const isMobile = true,
    isDesktop = false;

  return (
    <SwipeableDrawer
      open={true}
      onClose={toggleSidebar}
      onOpen={toggleSidebar}
      PaperProps={{
        style: {
          width: isMobile ? "100%" : "var(--drawer-width)",
          height: "calc(100% + 1px)",
          flexDirection: "column",
          padding: isMobile ? "20px" : "40px",
          borderRightColor: theme === "dark" ? colors.dark : colors.light_gray,
          right: direction === "rtl" ? 0 : "auto",
          left: direction === "rtl" ? "auto" : 0,
        },
        className: "sidebar",
      }}
      BackdropProps={{
        style: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        },
      }}
      transitionDuration={{
        enter: 400,
        exit: 250,
      }}
      sx={{
        zIndex: 20000,
      }}
      variant={isDesktop ? "persistent" : "temporary"}
    >
      <Header>
        <Logo />
        <MenuButton />
      </Header>
      {!isMobile && <Emergency />}
      <Content />
    </SwipeableDrawer>
  );
};

export default Sidebar;
