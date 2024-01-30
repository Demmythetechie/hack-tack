import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home/home";

function App() {
  return (
    <div className="w-[100%]">
      <div className="h-[45px] w-[100%] border-b-[2px]  border-black grid grid-cols-[160px_190px_220px_226px_190px_190px_173px] grid-rows-[45px]">
        <Link className="pl-[30px] flex items-center border-l-[2px] border-l-black col-[1_/_span_1] row-[1_/span_1] justify-center" to="/">Home</Link>
        <Link className="flex items-center border-l-[2px] border-l-black col-[2_/_span_1] row-[1_/span_1] justify-center"to="/">Men</Link>
        <Link className="flex items-center border-l-[2px] border-l-black col-[3_/_span_1] row-[1_/span_1] justify-center"to="/">Hack N'Tack</Link>
        <img className="flex items-center border-l-[2px] border-l-black col-[4_/_span_1] row-[1_/span_1] justify-center" src="" alt="H&T"/>
        <Link className="flex items-center border-l-[2px] border-l-black col-[5_/_span_1] row-[1_/span_1] justify-center"to="/">Women</Link>
        <Link className="flex items-center border-l-[2px] border-l-black col-[6_/_span_1] row-[1_/span_1] justify-center"to="/">Search</Link>
        <Link className="pr-[50px] flex items-center border-l-[2px] border-l-black col-[7_/_span_1] row-[1_/span_1] justify-center"to="/">Cart</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
