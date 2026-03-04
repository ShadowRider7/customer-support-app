import { useState } from "react";
import "./App.css";
import CustomTickets from "./Components/CustomTickets/CustomTickets";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import State from "./Components/State/State";
import TaskStatus from "./Components/TaskStatus/TaskStatus";
import { toast, ToastContainer } from "react-toastify";

const fetchTicket = async () => {
  const res = await fetch("support.json");
  return res.json();
};
const customerTickets = fetchTicket();

function App() {
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  const completeTaskData = (taskCard) => {
    toast("Successfully Resolved Problem");
    const resolvedArray = [...resolved, taskCard];
    setResolved(resolvedArray);
    const newInProgress = inProgress.filter(
      (progress) => progress.id != taskCard.id,
    );
    setInProgress(newInProgress);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="mx-auto max-w-300 md:flex justify-between  gap-4 my-15 ">
        <div className="mb-2 relative overflow-hidden w-full h-55 rounded-2xl bg-linear-to-br from-[#632EE3] to-[#9F62F2] flex flex-col items-center justify-center shadow-lg font-sans">
          <State inProgress={inProgress} status={"In-Progress"}></State>
        </div>
        <div className="mb-2 relative overflow-hidden w-full h-55 rounded-2xl bg-linear-to-r from-[#52CD68] to-[#00827A] flex flex-col items-center justify-center shadow-lg font-sans">
          <State resolved={resolved} status={""}></State>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row mx-auto max-w-300 gap-4 mb-10 ">
        <div className="w-full md:w-3/4 ">
          <CustomTickets
            inProgress={inProgress}
            setInProgress={setInProgress}
            customerTickets={customerTickets}
          ></CustomTickets>
        </div>
        <div className="w-full md:w-1/4">
          <TaskStatus
            resolved={resolved}
            completeTaskData={completeTaskData}
            inProgress={inProgress}
          ></TaskStatus>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
