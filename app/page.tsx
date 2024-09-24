import TicketCard from "./(components)/ticket-card";
const getTickets = async () => {
     try {
          const response = await fetch("http://localhost:3000/api/tickets", {
               cache: "no-store",
          });
          const data = await response.json();
          return data;
     } catch (error) {
          console.log("Failed to get tickets");
     }
};
const getUniqueCategories = (categories: string[]): string[] => {
     let uniqueCategories: string[] = [];
     for (const item of categories) {
          if (!uniqueCategories.find((value) => value === item)) {
               uniqueCategories.push(item);
          }
     }
     return uniqueCategories;
};
export default async function Home() {
     const { tickets } = await getTickets();

     const uniqueCategories = getUniqueCategories(
          tickets.map((ticket: any) => ticket.category)
     );
     return (
          <main className="p-5 ">
               <div>
                    {tickets &&
                         uniqueCategories?.map((uniqueCategory, index) => (
                              <div key={index} className="mb-4">
                                   <p>{uniqueCategory}</p>
                                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                        {tickets
                                             .filter(
                                                  (ticket: any) =>
                                                       ticket.category ===
                                                       uniqueCategory
                                             )
                                             .map((filteredTicket: any) => (
                                                  <TicketCard
                                                       key={filteredTicket._id}
                                                       ticket={filteredTicket}
                                                  />
                                             ))}
                                   </div>
                              </div>
                         ))}
               </div>
          </main>
     );
}
