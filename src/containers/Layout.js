import React, { useContext, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "components/Sidebar";
import Header from "components/Header";
import Main from "containers/Main";
import ThemedSuspense from "components/ThemedSuspense";
import { SidebarContext } from "contexts/SidebarContext";

import AccessibleNavigationAnnouncer from "components/AccessibleNavigationAnnouncer";
import Hero from "pages/Home/Header";

import { Outlet } from "react-router-dom";

function Layout() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  let location = useLocation();

  useEffect(() => {
    closeSidebar();
  }, [location]);

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen && "overflow-hidden"}`}
    >
      <AccessibleNavigationAnnouncer />
      <Sidebar />

      <div className="flex w-full flex-1 flex-col">
        <Header />
        <Hero
          title="Work with the rockets"
          subtitle="Wealth creation is an evolutionarily recent positive-sum game. Status is an old zero-sum game. Those attacking wealth creation are often just seeking status."
        />
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
            <Outlet />
          </Suspense>
        </Main>
      </div>
    </div>
  );
}

export default Layout;
