import React from "react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Home from "@/pages/Home";
import { Separator } from "./ui/separator";

const Navbar = () => {
  // const { setTheme } = useTheme();
  return (
    <>
      <header className="flex justify-between py-5 px-10">
        <div className="pl-10 ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuNHny-gSal7NsB56DdlhYENO0_F0JGPtcmtO95g1NEHhZsCkWaggZlKIMEqfUBWfEDUs&usqp=CAU"
            width={30}
            height={30}
            alt="Sample"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
          />
        </div>
        <div>
          <ul className="flex">
            <li className="px-3">
              <Link to="/">News</Link>
            </li>
            <li className="pr-3">
              <Link to="/about">About</Link>
            </li>
            <li className="pr-3">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        {/* <div> */}
        {/*   <DropdownMenu> */}
        {/*     <DropdownMenuTrigger asChild> */}
        {/*       <Button variant="outline" size="icon"> */}
        {/*         <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" /> */}
        {/*         <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" /> */}
        {/*         <span className="sr-only">Toggle theme</span> */}
        {/*       </Button> */}
        {/*     </DropdownMenuTrigger> */}
        {/*     <DropdownMenuContent align="end"> */}
        {/*       <DropdownMenuItem onClick={() => setTheme("light")}> */}
        {/*         Light */}
        {/*       </DropdownMenuItem> */}
        {/*       <DropdownMenuItem onClick={() => setTheme("dark")}> */}
        {/*         Dark */}
        {/*       </DropdownMenuItem> */}
        {/*       <DropdownMenuItem onClick={() => setTheme("system")}> */}
        {/*         System */}
        {/*       </DropdownMenuItem> */}
        {/*     </DropdownMenuContent> */}
        {/*   </DropdownMenu> */}
        {/* </div> */}
      </header>
      <Separator />
    </>
  );
};

export default Navbar;
