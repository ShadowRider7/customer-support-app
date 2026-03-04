import React, { use, useEffect } from "react";
import TicketCard from "../TicketCard/TicketCard";

const CustomTickets = ({
  customerTickets,
  setInProgress,
  inProgress,
  setTicketData,
  ticketData,
}) => {
  const customerTicketData = use(customerTickets);
  useEffect(() => {
    setTicketData(customerTicketData);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Customer Tickets</h2>
      <div className="grid md:grid-cols-2 gap-4 flex-wrap">
        {ticketData.map((ticket) => (
          <TicketCard
            inProgress={inProgress}
            setInProgress={setInProgress}
            key={ticket.id}
            ticket={ticket}
          ></TicketCard>
        ))}
      </div>
    </div>
  );
};

export default CustomTickets;
