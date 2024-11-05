import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./Home/home";
import Men from "./Men/men";
import Cart from "./carts/cart";
import Women from "./Women/women";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [idxs, setIdxs] =  useState(0);

  function select(idx){
    setIsOpen(false);
    setIdxs(idx);
  }

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-[530px]:pt-[16%]">
      <div className="max-[530px]:hidden w-[100%] aspect-[1/0.09] sm:aspect-[1/0.07] md:aspect-[1/0.05] xl:aspect-[1/0.04] border-b border-black flex flex-row">
        <Link className="flex justify-center items-center border-r border-black w-[15%] font-medium" to="/">Home</Link>
        <Link className="flex justify-center items-center border-r border-black w-[15%] font-medium" to="/">Men</Link>
        <Link className="flex justify-center items-center border-r border-black w-[40%] font-medium" to="/">H&T</Link>
        <Link className="flex justify-center items-center border-r border-black w-[15%] font-medium" to="/">Women</Link>
        <Link className="flex justify-center items-center w-[15%] font-medium" to="/">SignIn</Link>
      </div>
      <div className="max-[530px]:flex bg-white hidden">
        {/* Navigation Button */}
        <div className="w-[100%] bg-white fixed top-0 z-50 flex justify-between py-2 border-b border-black px-[2.5%]">
          <div className="w-[26%] flex justify-between items-center flex-row p-2 rounded-md cursor-pointer">
            <p className="font-semibold text-[5vw]">H&T</p>
          </div>
          <div className="w-[50px] aspect-square p-2 rounded-md cursor-pointer" onClick={togglePanel}>
            <svg viewBox="0 0 100 100">
              <polyline points="0,25 200,25" stroke="#000" strokeWidth="7px" />
              <polyline points="0,50 200,50" stroke="#000" strokeWidth="7px" />
              <polyline points="0,75 200,75" stroke="#000" strokeWidth="7px" />
            </svg>
          </div>
        </div>

        {/* Overlay when panel is open */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={togglePanel}
          ></div>
        )}

        {/* Sliding Navigation Panel */}
        <div
          className={`fixed top-0 left-0 h-full w-[80%] bg-white shadow-lg z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out`}
        >
          <div className="py-8 px-2 flex flex-col h-[100%] gap-y-5 justify-between">
            <div className="w-[100%]">
              <div className="w-[50%] aspect-[1/0.2] flex items-end justify-start pb-3">
                <div className="w-[17%] aspect-square">
                  <svg viewBox="0 0 24 24">
                    <path d="M11 6L5 12L11 18M18 6L12 12L18 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold">Back</h2>
              </div>
              <Link onClick={() => select(0)} className={`${idxs === 0 ? 'bg-black/30' : 'bg-transparent'} flex justify-start items-center rounded-sm w-[100%] py-4 pl-[7%] font-medium`} to="/">Home</Link>
              <Link onClick={() => select(1)} className={`${idxs === 1 ? 'bg-black/30' : 'bg-transparent'} flex justify-start items-center rounded-sm w-[100%] py-4 pl-[7%] font-medium`} to="/men">Men</Link>
              <Link onClick={() => select(2)} className={`${idxs === 2 ? 'bg-black/30' : 'bg-transparent'} flex justify-start items-center rounded-sm w-[100%] py-4 pl-[7%] font-medium`} to="/">H&T</Link>
              <Link onClick={() => select(3)} className={`${idxs === 3 ? 'bg-black/30' : 'bg-transparent'} flex justify-start items-center rounded-sm w-[100%] py-4 pl-[7%] font-medium`} to="/women">Women</Link>
              <Link onClick={() => select(4)} className={`${idxs === 4 ? 'bg-black/30' : 'bg-transparent'} flex justify-start items-center rounded-sm w-[100%] py-4 pl-[7%] font-medium`} to="/">SignIn</Link>
            </div>
            <div className="w-[100%] h-[40%] border border-black"></div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/women" element={<Women/>}/>
      </Routes>
    </div>
  );
}

export default App;
