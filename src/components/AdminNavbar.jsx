import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconUser } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
export default function AdminNav() {
  const [currentPath, setCurrentPath] = useState(""); // Initialize state for currentPath
  const [cookies, removeCookie] = useCookies([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPath(window.location.pathname); // Set currentPath on component mount

    axios.get("");
  }, []);

  const Logout = () => {
    removeCookie("token");
    navigate("/");
  };

  return (
    <div className="flex flex-col w-full ">
      <header className="flex items-center h-14 px-4 border-b shrink-0 md:px-6">
        <nav className="hidden gap text-lg font-medium md:flex md:gap-5 md:text-sm">
          <Link
            className={
              currentPath === "/admin/dashboard"
                ? "font-bold text-gray-900"
                : "text-gray-500"
            }
            to="/admin/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className={
              currentPath === "/admin/announcements"
                ? "font-bold text-gray-900"
                : "text-gray-500"
            }
            to="/admin/announcements"
          >
            Announcements
          </Link>
          <Link
            className={
              currentPath === "/admin/admins"
                ? "font-bold tet-gray-900"
                : "text-gray-500"
            }
            to="/admin/admins"
          >
            Admins
          </Link>
        </nav>
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback />
        </Avatar>
        {/* <Button */}
        {/*   onClick={Logout} */}
        {/*   className="rounded-full ml-auto" */}
        {/*   size="icon" */}
        {/*   variant="outline" */}
        {/* > */}
        {/* <IconUser className="h-4 w-4" /> */}
        {/*   Logout */}
        {/* <span className="sr-only">Toggle user menu</span> */}
        {/* </Button> */}
      </header>
    </div>
  );
}
