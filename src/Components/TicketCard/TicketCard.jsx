import React from "react";
import calender from "../../assets/calender.svg";
const TicketCard = ({
  ticket,
  setInProgress,
  inProgress,
  handleRemainingSupportData,
}) => {
  const handleInProgress = () => {
    const newInProgress = [...inProgress, ticket];
    setInProgress(newInProgress);
    handleRemainingSupportData(ticket);
  };

  return (
    <div onClick={handleInProgress} className="card bg-base-100 shadow-2xl">
      <div className="p-4">
        <div className="flex justify-between">
          <h2 className="font-semibold ">{ticket.title}</h2>
          <div
            className={`btn btn-sm rounded-2xl ${ticket.status == "Open" ? "bg-green-200 text-green-700" : "bg-yellow-200 text-yellow-700"} `}
          >
            <div
              className={`w-4 h-4 rounded-full ${ticket.status == "Open" ? "bg-green-700" : "bg-[#FEBB0C]"}`}
            ></div>
            <p>{ticket.status}</p>
          </div>
        </div>
        <div>
          <p className="text-gray-500">{ticket.description}</p>
        </div>

        <div className=" text-gray-500 text-sm flex items-center gap-2 justify-between mt-3">
          <div className="flex gap-2">
            <div>#{ticket.id}</div>
            <div className="text-red-600">{ticket.priority}</div>
          </div>
          <div className="flex gap-2">
            <div>{ticket.customer}</div>

            <div className="flex gap-1 items-center">
              <img className="h-4" src={calender} alt="" />
              <p>{ticket.createdAt}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
