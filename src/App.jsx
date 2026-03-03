import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import State from "./Components/State/State";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="mx-auto max-w-300 flex justify-between gap-4 my-15">
        <div className="relative overflow-hidden w-full h-55 rounded-2xl bg-linear-to-br from-[#632EE3] to-[#9F62F2] flex flex-col items-center justify-center shadow-lg font-sans">
          <State status={"In-Progress"}></State>
        </div>
        <div className="relative overflow-hidden w-full h-55 rounded-2xl bg-linear-to-r from-[#52CD68] to-[#00827A] flex flex-col items-center justify-center shadow-lg font-sans">
          <State status={"Resolved"}></State>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
