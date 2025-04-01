import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home/home";
import Men from "./Men/men";
import Cart from "./carts/cart";
import signIn from "./sign";
import { useLocation } from 'react-router-dom';
import Women from "./Women/women";
import SignUp from "./sign";
import Checkout from "./checkout";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [position, UpdatePosition] = useState();
  const [idxs, setIdxs] =  useState(0);

  useEffect(()=>{
    setIdxs(sessionStorage.getItem('myValue'));
  }, []);

  useEffect(()=>{
    
  }, []);

  function select(idx){
    setIsOpen(false);
    setIdxs(idx);
    sessionStorage.setItem('myValue', idx);
  }

  function back(){
    setIsOpen(false);
  }

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-[530px]:pt-[16%]">
      <div className={`${location.pathname === "/signin" || location.pathname === "/checkout" ? 'hidden' : 'flex'} max-[530px]:hidden w-[100%] aspect-[1/0.09] sm:aspect-[1/0.07] md:aspect-[1/0.05] xl:aspect-[1/0.04] border-b border-black flex-row`}>
        <Link className="flex justify-center items-center border-r border-black w-[15%] font-medium" to="/">Home</Link>
        <Link className="flex justify-center items-center border-r border-black w-[15%] font-medium" to="/men">Men</Link>
        <Link className="flex justify-center items-center border-r border-black w-[40%] font-medium" to="/">H&T</Link>
        <Link className="flex justify-center items-center border-r border-black w-[15%] font-medium" to="/women">Women</Link>
        <Link className="flex justify-center items-center w-[15%] font-medium" to="/signin">SignIn</Link>
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
            className="fixed inset-0 bg-black/5 backdrop-blur-[1px] z-40"
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
              <div className="w-[50%] aspect-[1/0.2] flex items-end justify-start pb-10 pl-[4%] cursor-pointer" onClick={back}>
                <div className="w-[17%] aspect-square">
                  <svg viewBox="0 0 24 24">
                    <path d="M11 6L5 12L11 18M18 6L12 12L18 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold">Back</h2>
              </div>
              <Link onClick={() => select(0)} className={`${idxs === 0 ? 'bg-black/30' : idxs === null ? 'bg-black/30' : 'bg-transparent'} flex justify-start items-center rounded-md [100%] py-4 pl-[7%] font-medium text-xl`} to="/">Home</Link>
              <Link onClick={() => select(1)} className={`${idxs === 1 ? 'bg-black/30' : 'bg-transparent'} flex justify-start items-center rounded-md w-[100%] py-4 pl-[7%] font-medium text-xl`} to="/men">Men</Link>
              <Link onClick={() => select(2)} className={`${idxs === 2 ? 'bg-black/30' : 'bg-transparent'} flex justify-start items-center rounded-md w-[100%] py-4 pl-[7%] font-medium text-xl`} to="/">H&T</Link>
              <Link onClick={() => select(3)} className={`${idxs === 3 ? 'bg-black/30' : 'bg-transparent'} flex justify-start items-center rounded-md w-[100%] py-4 pl-[7%] font-medium text-xl`} to="/women">Women</Link>
            </div>
            <div className="w-[100%] h-[40%] flex flex-col justify-end pl-3">
              <Link to="/signin" onClick={() => select(4)} className={`${idxs === 4 ? 'bg-black/30' : 'bg-transparent'} w-[100%] aspect-[1/0.15] flex items-center gap-x-[4%] py-[3%] px-[2%] rounded-md`}>
                <div className="w-[10%] aspect-square">
                  <svg viewBox="0 0 512 512">
                    <path d="M255.988 32C160.473 32 78.934 91.804 46.727 176h34.639c9.396-20.484 22.457-39.35 38.868-55.762C156.497 83.973 204.709 64 255.988 64c51.286 0 99.504 19.973 135.771 56.239C428.027 156.505 448 204.719 448 256c0 51.285-19.973 99.501-56.239 135.765C355.494 428.029 307.275 448 255.988 448c-51.281 0-99.493-19.971-135.755-56.234-16.412-16.412-29.473-35.28-38.871-55.766H46.725c32.206 84.201 113.746 144 209.264 144C379.703 480 480 379.715 480 256c0-123.702-100.297-224-224.012-224z"></path>
                    <path d="M206.863 323.883l22.627 22.627L320 256l-90.51-90.51-22.628 22.628L258.745 240H32v32h226.745z"></path>
                  </svg>
                </div>
                <h2 className="text-xl font-semibold">Sign In</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/signin" element={<SignUp/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </div>
  );
}

export default App;
