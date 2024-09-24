import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Navbar = () => {
     return (
          <header>
               <nav className="flex flex-row justify-between items-center bg-nav p-5">
                    <div className="flex items-center space-x-4">
                         <Link href={"/"}>
                              <FontAwesomeIcon icon={faHome} className="icon" />
                         </Link>
                         <Link href={"/ticket-page/new"}>
                              <FontAwesomeIcon
                                   icon={faTicket}
                                   className="icon"
                              />
                         </Link>
                    </div>
                    <div>
                         <p className="text-default-text">presly@gmail.com</p>
                    </div>
               </nav>
          </header>
     );
};

export default Navbar;
