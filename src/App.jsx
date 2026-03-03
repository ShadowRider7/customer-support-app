import "./App.css";
import CustomTickets from "./Components/CustomTickets/CustomTickets";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import State from "./Components/State/State";
import TaskStatus from "./Components/TaskStatus/TaskStatus";

const fetchTicket = async () => {
  const res = await fetch("support.json");
  return res.json();
};
const customerTickets = fetchTicket();

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="mx-auto max-w-300 md:flex justify-between  gap-4 my-15 ">
        <div className="mb-2 relative overflow-hidden w-full h-55 rounded-2xl bg-linear-to-br from-[#632EE3] to-[#9F62F2] flex flex-col items-center justify-center shadow-lg font-sans">
          <State status={"In-Progress"}></State>
        </div>
        <div className="mb-2 relative overflow-hidden w-full h-55 rounded-2xl bg-linear-to-r from-[#52CD68] to-[#00827A] flex flex-col items-center justify-center shadow-lg font-sans">
          <State status={"Resolved"}></State>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row mx-auto max-w-300 gap-4">
        <div className="w-full md:w-3/4 ">
          <CustomTickets customerTickets={customerTickets}></CustomTickets>
        </div>
        <div className="w-full md:w-1/4">
          <TaskStatus></TaskStatus>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
