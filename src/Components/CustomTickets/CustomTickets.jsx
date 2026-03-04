import React, { use, useState } from "react";
import TicketCard from "../TicketCard/TicketCard";

const CustomTickets = ({ customerTickets, setInProgress, inProgress }) => {
  const customerTicketData = use(customerTickets);
  const [supportData, setSupportData] = useState(customerTicketData);
  const handleRemainingSupportData = (ticket) => {
    const remainingData = supportData.filter((data) => data.id != ticket.id);
    setSupportData(remainingData);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Customer Tickets</h2>
      <div className="grid md:grid-cols-2 gap-4 flex-wrap">
        {supportData.map((ticket) => (
          <TicketCard
            handleRemainingSupportData={handleRemainingSupportData}
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
