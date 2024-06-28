import React, { useContext } from "react";
import routes from "routes/sidebar";
import { NavLink, Route } from "react-router-dom";
import * as Icons from "icons";
import SidebarSubmenu from "./SidebarSubmenu";
import { Button } from "@windmill/react-ui";
import Logo from "components/Logo";
import PulsatingRedButton from "components/PulsatingRedButton";
import { UserContext } from "contexts/UserContext";

function Icon({ icon, ...props }) {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}

const isTheCurrentRoute = (routePath) => {
  return window.location.pathname === routePath;
};

function SidebarContent() {
  const { user, roles } = useContext(UserContext);
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <a
        className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
        href="#"
      >
        <div className="flex h-14 w-full justify-center align-middle">
          <Logo />
        </div>
      </a>
      <ul className="mt-6">
        {routes
          .filter(
            (route) =>
              route.public || route.roles.some((role) => roles.includes(role)),
          )
          .map((route) =>
            route.routes ? (
              <SidebarSubmenu route={route} key={route.name} />
            ) : (
              <li className="relative px-6 py-3" key={route.name}>
                <NavLink
                  exact
                  to={route.path}
                  className="inline-flex w-full items-center text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  activeClassName="text-gray-800 dark:text-gray-100"
                >
                  {isTheCurrentRoute(route.path) && (
                    <div>
                      <span
                        className="absolute inset-y-0 left-0 w-1 rounded-br-lg rounded-tr-lg bg-purple-600"
                        aria-hidden="true"
                      ></span>
                    </div>
                  )}
                  <Icon
                    className="h-5 w-5"
                    aria-hidden="true"
                    icon={route.icon}
                  />
                  <span className="ml-4">{route.name}</span>
                </NavLink>
              </li>
            ),
          )}
      </ul>
      <div className="my-6 px-6">
        <NavLink to={"app/create-appointment"}>
          <PulsatingRedButton onClick={() => {}}>
            Create Appointment
          </PulsatingRedButton>
        </NavLink>
      </div>
    </div>
  );
}

export default SidebarContent;
