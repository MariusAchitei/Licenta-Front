import { Navbar } from "flowbite-react";
import { DarkThemeToggle, Avatar } from "flowbite-react";
import { MdLogin } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";
import { useContext } from "react";
import logo from "assets/images/logo.png"
import { applicationName } from "utils/vars";

export function NavbarComponent() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <img
          src={logo}
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          {applicationName}
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <DarkThemeToggle />
        <button
          onClick={() => navigate("/login")}
          className="flex items-center rounded bg-transparent  px-4 py-2 font-bold text-black dark:text-white"
        >
          <MdLogin />
        </button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link onClick={() => navigate("/projects")}>
          Projects
        </Navbar.Link>
        <Navbar.Link onClick={() => navigate("/environment")}>
          Environment
        </Navbar.Link>
        {user.role === "ADMIN" && (
          <Navbar.Link onClick={() => navigate("/users")}>
            User Management
          </Navbar.Link>
        )}
        <Navbar.Link onClick={() => navigate("/FAQ")}>FAQ</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
