"use client";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteBlock = ({ id }: { id: string }) => {
     const router = useRouter();
     const handleDeleteTicket = async () => {
          try {
               await fetch(`http://localhost:3000/api/tickets/${id}`, {
                    method: "DELETE",
               });

               router.refresh();
          } catch (error) {
               console.log(error);
               throw error;
          }
     };
     return (
          <FontAwesomeIcon
               icon={faX}
               className="text-red-400 hover:cursor-pointer hover:text-red-200"
               onClick={handleDeleteTicket}
          />
     );
};

export default DeleteBlock;
