import TicketForm from "@/app/(components)/ticketForm";
import { ITicketDocument } from "@/app/(models)/ticket";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

const getTicketById = async (id: string) => {
     try {
          const response = await fetch(
               `http://localhost:3000/api/tickets/${id}`,
               {
                    cache: "no-store",
               }
          );

          return response.json();
     } catch (error) {
          throw new Error("Failed to get ticket");
     }
};

const TicketPage = async ({ params }: { params: Params }) => {
     const EditeMode = params.id === "new" ? false : true;
     let updateTicketData: ITicketDocument | { _id: string };
     if (EditeMode) {
          const { ticket } = await getTicketById(params.id);
          updateTicketData = ticket;
     } else {
          updateTicketData = { _id: "new" };
     }
     return (
          <>
               <TicketForm ticket={updateTicketData} />
          </>
     );
};

export default TicketPage;
