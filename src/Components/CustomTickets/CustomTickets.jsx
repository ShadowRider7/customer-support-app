import React, { use } from "react";
import TicketCard from "../TicketCard/TicketCard";

const CustomTickets = ({ customerTickets }) => {
  const customerTicketData = use(customerTickets);
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Customer Tickets</h2>
      <div className="grid md:grid-cols-2 gap-4 flex-wrap">
        {customerTicketData.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket}></TicketCard>
        ))}
      </div>
    </div>
  );
};

export default CustomTickets;
