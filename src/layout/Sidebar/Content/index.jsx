// styled components
import { LinksList, List, MainItem } from "../style";
import { colors } from "utils/styles";

// components
import { NavLink } from "react-router-dom";
import { Accordion } from "flowbite-react";

// hooks
import { useSidebarContext } from "contexts/sidebarContext";

// menu links
import { menu } from "constants/menu";

const Content = () => {
  const { toggleSidebar } = useSidebarContext();
  const activeStyle = { color: colors.blue };

  return (
    <Accordion>
      {menu.map((item, index) => {
        if (item.cat) {
          return (
            <Accordion.Panel key={item.cat}>
              <Accordion.Title>
                <i className={`icon icon-${item.icon}`}></i> {item.cat}
              </Accordion.Title>
              <Accordion.Content>
                <LinksList>
                  {item.links.map((link) => (
                    <li key={link.link}>
                      <NavLink
                        to={link.link}
                        onClick={() => toggleSidebar()}
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </LinksList>
              </Accordion.Content>
            </Accordion.Panel>
          );
        } else if (item.link) {
          return (
            <MainItem
              as={NavLink}
              to={item.link}
              onClick={() => toggleSidebar()}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              key={item.link}
              className={index === menu.length - 1 ? "pin-down" : ""}
            >
              <i className={`icon icon-${item.icon}`}></i> {item.name}
            </MainItem>
          );
        } else return null;
      })}
    </Accordion>
  );
};

export default Content;
