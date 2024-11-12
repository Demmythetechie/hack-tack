import {filters, menProduct} from "./str";
import { useEffect, useRef, useState, useReducer, createContext, useContext } from "react";

const MyContext = createContext(null);


function Men(){
    return(
        <section>
            <Sec2/>
        </section>
    )
}

function Sec2() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [mobileView, setMobileView] = useState(null);


    // Responsiveness from Tablet mode to Desktop and vice-versa
    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() =>{
        if (windowWidth >= 1256 && switchh.current % 3 !== 0) {
            switchh.current++;
            if (switchh.current % 3 !== 0) {
                switchh.current++;
                setRender(0);
            }

        } else if (windowWidth <= 1256 && switchh.current % 2 !== 0) {
            switchh.current--;
            setRender(1);
        }
    }, [windowWidth]);
    //End



    // Initialize state for dropdown visibility
    const [dropdownVisibility, setDropdownVisibility] = useState([false, false, false]);
    const [binary, setBinary] = useState(null);
    const [view, setView] = useState(null);
    const switchh = useRef(null);
    const [dummyrender, setRender] = useState(null);

     // Toggle dropdown visibility
    function toggleDropdown(index) {
        setDropdownVisibility(prevState =>
        prevState.map((item, idx) => (index === idx ? !item : item))
        );
    }

    // Determine the class name based on visibility
    function getDropdownClass(index) {
        return dropdownVisibility[index] ? "hidden" : "flex justify-start w-[100%]";
    }
    
    function showhide(){
        if (binary === 1) {
            setBinary(0);
        } else {
            setBinary(1);
        }   
    }

    {/* code for Mobile filter and sort*/}
    const [isOpen, setIsOpen] = useState(false);
    const panelRef = useRef(null);
  
    const togglePanel = () => setIsOpen(!isOpen);
    function cancel () {
        setIsOpen(false);
    }
  
    // Close the panel when clicking outside of it
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
  
    useEffect(() => {
      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const [price, setPrice] = useState(0); // Default price value

    const reducer = (state, action) => {
        if (action.type === 'check') {
            let prevState = [...state];
            if (prevState.includes(action.data)) {
                prevState = prevState.filter(item => item !== action.data);
                console.log(prevState);
            } else {
                prevState.push(action.data);
            }
            state = [...prevState];
        } else {
            state = [];
        }
        setPrice(0);
        return state;
    };

    const [checkboxes, dispatch] = useReducer(reducer, []);
    function handleClick(id) {
        dispatch({type: 'check', data: id});
    };

    const [cloth, setCloth] = useState();
    function clothType(id) {
        setCloth(id);
        dispatch({type: 'reset'});
        setPrice(0);
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    function reset() {
        setCloth();
        dispatch({type: 'reset'});
        setPrice(0);
    }

    const [mainCurrent, setMainCurrent] = useState(0);

    function main(index) {
        setMainCurrent(index);
    }

    return (
        <>
            <section className={`${mobileView === null ? 'flex' : 'hidden'} w-[100%] flex-col justify-center items-center px-[30px] py-[30px] border-b border-black`}>
                <div className="w-[90%]">
                    <p className="text-[2rem] font-semibold">119 items</p>
                </div>
                <div className="w-[90%] flex flex-row justify-between items-end">
                    <p className="max-[530px]:text-[5vw] text-[3vw] font-bold">For Men</p>
                    <div className="flex flex-row justify-between items-center h-[30px] w-[120px]">
                        <p className="max-[530px]:hidden text-[1rem] font-semibold">SEE ALL</p>
                        <svg className="max-[530px]:hidden" width="50" height="50">
                            <line x1="12" y1="25" x2="40" y2="25" stroke="#000" strokeWidth="2.2" strokeLinecap="round" />
                            <polyline points="30,18 40,25 30,32" stroke="#000" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </section>
            <section className={`${mobileView !== null ? 'hidden' : 'flex'} w-[100%] max-[885px]:flex-col flex-row`}>
                {/* Mobile Filter and sort*/}
                <div className="w-[100%] max-[885px]:block hidden">
                    <button
                        className="fixed bottom-10 right-10 bg-black/70 text-white px-8 py-2 rounded-full shadow-lg text-lg"
                        onClick={togglePanel}
                    >
                        Filter
                    </button>

                    {/* Filter Panel */}
                    <div
                        ref={panelRef}
                        className={`fixed flex flex-col gap-y-6 bottom-0 left-0 w-full bg-white shadow-2xl p-5 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-y-0' : 'translate-y-full'
                            }`}
                    >
                        <div className="flex justify-between items-center w-full">
                            <div onClick={cancel} className="w-7 aspect-[1/1] cursor-pointer">
                                <svg viewBox="0 0 32 32">
                                    <path d="m17.414 16 6.293-6.293a1 1 0 0 0-1.414-1.414L16 14.586 9.707 8.293a1 1 0 0 0-1.414 1.414L14.586 16l-6.293 6.293a1 1 0 1 0 1.414 1.414L16 17.414l6.293 6.293a1 1 0 0 0 1.414-1.414z" fill="#000000" opacity="1" data-original="#000000"></path>
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold">Filter</h2>
                            <button onClick={reset} className="text-lg font-medium">Reset</button>
                        </div>

                        {filters.map((filter, index) => (
                            <div key={index} className="flex flex-col items-start justify-between gap-y-2 w-full md:w-1/2">
                                <div
                                    className="w-full flex flex-row items-center justify-between gap-x-2 pb-2 cursor-pointer"
                                    onClick={() => toggleDropdown(index)}
                                >
                                    <p className="font-normal text-2xl">{filter.type}</p>
                                    <div className="flex w-[50%] items-center justify-end gap-x-2">
                                        <p className="text-lg font-normal">view all</p>
                                        <div className="w-5 aspect-[1/1]">
                                            <svg viewBox="0 0 24 24">
                                                <path d="M9 19a1 1 0 0 1-.71-1.71l5.3-5.29-5.3-5.29a1 1 0 0 1 1.42-1.42l6 6a1 1 0 0 1 0 1.41l-6 6A1 1 0 0 1 9 19z" fill="#000000" strokeWidth="1px" stroke="#000" opacity="1" data-original="#000000"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className={getDropdownClass(index)}>
                                    <form className="flex flex-row flex-wrap w-full gap-x-2 gap-y-2">
                                        {filter.options.map((option) => (
                                            (index === 0) ?
                                                <div className={`${cloth === option.id ?  'bg-black/50' : ''} flex flex-row gap-x-[8%] px-5 py-[0.2rem] rounded-full border border-black relative cursor-pointer`}>
                                                    <input onClick={()=> clothType(option.id)} className="absolute top-0 left-0 w-full h-full opacity-0" type="radio" id={option.id} name={option.id} value={option.id}/>
                                                    <label className="text-lg font-medium" for={option.id}>{option.name}</label>
                                                </div>
                                            :
                                                <div className={`${checkboxes.includes(option.id) ? 'bg-black/50' : ''} flex flex-row gap-x-[8%] px-5 py-[0.2rem] rounded-full border border-black relative cursor-pointer`}>
                                                    <input onClick={()=> handleClick(option.id)} className="absolute top-0 left-0 w-full h-full opacity-0" type="checkbox" id={option.id} name={option.id} value={option.id}/>
                                                    <label className="text-lg font-medium" for={option.id}>{option.name}</label>
                                                </div>
                                        ))}
                                    </form>
                                </div>
                            </div>
                        ))}
                        <div className="flex flex-col items-start justify-center w-full md:w-4/5">
                            <div className="w-full flex flex-row items-center justify-between gap-x-2 pb-2 cursor-pointer" onClick={showhide}>
                                <p className="font-normal text-2xl">Price</p>
                                <p className="text-lg font-normal">${price}</p>
                            </div>
                            <form className="flex flex-col w-full gap-y-6 pt-6 pb-2">
                                <div className="w-full flex items-center">
                                    <input
                                        type="range"
                                        min="0"
                                        max="2000"
                                        value={price}
                                        onChange={handlePriceChange}
                                        className="custom-slider w-full h-1 rounded-lg appearance-none cursor-pointer accent-black"
                                        style={{background: `linear-gradient(to right, #000000 0%, #000000 ${(price / 2000) * 100}%, #e5e7eb ${(price / 2000) * 100}%, #e5e7eb 100%)`}}
                                    />
                                </div>
                                <input className="flex justify-center items-center w-[100%] aspect-[1/0.12] font-normal text-lg text-white bg-black" type="submit" id="result" name="result" value="Show (188) results"/>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="max-[885px]:hidden w-[20%] flex flex-col items-start border-r border-black pl-[2%] pt-[2%] gap-y-[1%]">
                    <p className="text-[2vw] font-semibold">Filter By</p>
                    {filters.map((filter, index)=>(
                        <div className="flex flex-col items-start justify-between w-[50%]">
                            <div className="w-[100%] flex flex-row items-center gap-x-[6%] pb-[5%]" onClick={() => toggleDropdown(index)}>
                                <p className="font-semibold text-[1.2vw]">{filter.type}</p>
                                <div className="w-[9%] aspect-square pt-[2%]">
                                    <svg viewBox="0 0 14 14">
                                        <polyline points="2,4 7,10 12,4" stroke="#000" strokeWidth="2" fill="none"/>
                                    </svg>
                                </div>
                            </div>
                            <div className={getDropdownClass(index)}>
                                <form className="flex flex-col">
                                    {filter.options.map((option)=>(
                                        <div className="flex flex-row">
                                            <input className="" type="checkbox" id={option.id} name={option.id} value={option.id}/>
                                            <label className="ml-[5px] text-[1rem] font-normal" for={option.id}>{option.name}</label>
                                        </div>
                                    ))}
                                </form>
                            </div>
                        </div>
                    ))}
                    <div className="flex flex-col items-start justify-center w-[80%]">
                        <div className="w-[100%] flex flex-row items-center gap-x-[6%] pb-[5%]" onClick={showhide}>
                            <p className="font-semibold text-[1.2vw]">Price</p>
                        </div>
                        <form className="flex flex-col w-[100%] aspect-[1/0.35] justify-between">
                            <div className="flex w-[100%] justify-between items-center">
                                <input className="text-[0.8vw] w-[40%] aspect-[1/0.4] text-center border border-black font-medium" type="text" name="min" value="MIN"/>
                                <p className="text-[1vw]">-</p>
                                <input className="text-[0.8vw] w-[40%] aspect-[1/0.4] text-center border border-black font-medium" type="text" name="max" value="MAX"/>
                            </div>
                            <input className="text-black text-[0.8vw] w-[100%] bg-white border border-black h-[40%] font-medium" type="submit" value="Go"/>
                        </form>
                    </div>
                </div>
                <div className="max-[885px]:w-[100%] w-[80%] h-fit flex flex-row flex-wrap gap-x-[2.75%] gap-y-[4vh] max-[601px]:gap-y-[2.5vh] justify-start px-[2%] border-black max-[601px]:border-[0px] max-[601px]:border-t py-[5%] max-[530px]:py-[10%] max-[601px]:justify-center">
                    {menProduct.map((prd, index) => (
                        <>
                            <MyContext.Provider value={{ setMobileView }}>
                                <Review mainslide={prd.Mainslide} name={prd.name} price={prd.price} on={view} setView={setView} ind={index} sideslide={prd.sideslide} backslide={prd.backslide} color={prd.color1} size={prd.size} switchh={switchh}/>
                            </MyContext.Provider>
                            {(switchh.current === index) ? <Fullview view={view}/> : <></>}
                        </>
                    ))}
                </div>
            </section>
            <section className={`${mobileView === null ? 'hidden' : 'flex'} w-[100%] flex-col items-center border border-black gap-y-4 py-6`}>
                <div className="w-[95%] flex flex-row justify-between">
                    <div className={`w-[74%] aspect-[1/1.2] border border-black bg-cover bg-no-repeat bg-[top-center] ${menProduct[mobileView === null ? 0 : mobileView].Mainslide}`}></div>
                    <section className="w-[23%] aspect-[1/0.2] flex flex-col justify-between gap-x-2">
                        <div onClick={()=> main(0)} className={`${mainCurrent === 0 ? 'border-4 border-orange-700' : 'border border-black'} w-[100%] h-[30%] ${menProduct[mobileView === null ? 0 : mobileView].Mainslide} bg-cover bg-no-repeat bg-[top-center] cursor-pointer rounded-lg`}></div>
                        <div onClick={()=> main(1)} className={`${mainCurrent === 1 ? 'border-4 border-orange-700' : 'border border-black'} w-[100%] h-[30%] ${menProduct[mobileView === null ? 0 : mobileView].sideslide} bg-cover bg-no-repeat bg-[top-center] cursor-pointer rounded-lg`}></div>
                        <div onClick={()=> main(2)} className={`${mainCurrent === 2 ? 'border-4 border-orange-700' : 'border border-black'} w-[100%] h-[30%] ${menProduct[mobileView === null ? 0 : mobileView].backslide} bg-cover bg-no-repeat bg-[top-center] cursor-pointer rounded-lg`}></div>
                    </section>
                </div>
                <div></div>
            </section>
        </>
    )
}

function Review ({mainslide, name, ind, price, on, setView, sideslide, backslide, color, size, switchh}) {
    const {setMobileView} = useContext(MyContext);
    function fullview () {
        setView({mainslide, name, price, sideslide, backslide, color, size})
        if (window.innerWidth >= 1256) {
            switchh.current = ind;
            if (switchh.current % 3 === 0) {
                switchh.current = switchh.current + 2;
            }

            if (switchh.current % 3 === 1) {
                switchh.current++;
            }
            if (menProduct.length - 1 % 3 !== 2 && switchh.current > menProduct.length - 1) {
                switchh.current = ind;
                if ((menProduct.length - 1) % 3 === 0) {
                    switchh.current = ind;
                } else if ((menProduct.length - 1) % 3 === 1) {
                    if (ind % 3 === 0) {
                        switchh.current++;
                    } else if (ind % 3 === 1) {
                        switchh.current = ind; 
                    }
                }
            }
        } else if (window.innerWidth < 1256 && window.innerWidth > 601) {
            switchh.current = ind;
            if (switchh.current % 2 === 0) {
                switchh.current = switchh.current + 1;
            }
            if ((menProduct.length - 1) % 2 === 0 && switchh.current > menProduct.length - 1) {
                switchh.current = ind;
            }
        } else {
            setMobileView(ind);
        }
    }

    return (
        <div className="max-[1256px]:w-[48%] max-[885px]:w-[48%] max-[460px]:w-[95%] max-[601px]:w-[90%] flex flex-col items-center justify-between w-[31.5%] aspect-[1/1.1]" onClick={fullview}>
            <div className={`w-[100%] h-[87%] border border-black bg-cover bg-no-repeat bg-[top-center] ${mainslide}`}></div>
            <div className="w-[100%] h-[11%] flex flex-row justify-between">
                <div className="flex items-center w-[85%] h-[100%] border border-black pl-[20px]">
                    <p className="text-[0.8rem] font-semibold">{name}</p>
                </div>
                <div className="flex items-center justify-center w-[15%] h-[100%] border-t border-b border-r border-black">
                    <p className="text-[0.8rem] font-semibold">{price}</p>
                </div>
            </div>
        </div>
    )
}

function Fullview (props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    function prev() {

    }

    function next() {

    }

    return (
        <section className="max-[530px]:hidden h-fit w-[100%] aspect-[1/0.32] max-[1256px]:aspect-[1/0.4] flex flex-row items-center justify-between">
            <div className="max-[1092px]:w-[50%] relative w-[45%] h-[100%] justify-center flex flex-col gap-y-[8%]">
                <div className="w-[20%] aspect-[1/1] absolute top-0 left-0">
                    <svg viewBox="0 0 50 50" className="">
                        <polyline points="1,25 1,1 25,1" fill="none" stroke="#000" strokeWidth="2"/>
                    </svg>
                </div>
                <div className="w-[20%] aspect-[1/1] absolute bottom-0 right-0">
                    <svg viewBox="0 0 50 50" className=" rotate-180">
                        <polyline points="1,25 1,1 25,1" fill="none" stroke="#000" strokeWidth="2"/>
                    </svg>
                </div>
                
                <div className="w-[100%] flex flex-row gap-x-[20%] items-center px-[8%]">
                    <p className="font-semibold max-[885px]:text-[2vw] text-[1.3vw]">{props.view.name}</p>
                    <p className="font-semibold max-[885px]:text-[2vw] text-[1.3vw]">{props.view.price}</p>
                </div>
                <form className="flex flex-col w-[100%] h-[40%] z-20 px-[8%]">
                    <label for="color" className="text-[1.3vw] max-[885px]:text-[2vw] font-semibold">Color</label>
                    <div className="w-[100%]">
                        <svg viewBox="0 0 270 10">
                            <line x1="0" y1="3" x2="270" y2="3" stroke="#000" fill="#000" strokeWidth="1.4"/>
                        </svg>
                    </div>
                    <div className="flex flex-row gap-x-[10px] gap-y-[10px] w-[95%] h-[20%]">
                        {props.view.color.map((color)=> (
                            <input className={`w-[15%] h-[100%] border border-black ${color}`} type="button" id="color" name="color"></input>
                        ))}
                    </div>
                    <label for="size" className="text-[1.3vw] max-[885px]:text-[2vw] font-semibold">Size</label>
                    <div className="w-[100%]">
                        <svg viewBox="0 0 270 10">
                            <line x1="0" y1="3" x2="270" y2="3" stroke="#000" fill="#000" strokeWidth="1.4"/>
                        </svg>
                    </div>
                    <div className="flex flex-row gap-x-[10px] gap-y-[10px] w-[95%] h-[22%]">
                        {props.view.size.map((sizes)=> (
                            <button className={`w-[15%] h-[100%] border border-black flex justify-center items-center`}>{sizes}</button>
                        ))}
                    </div>
                    
                </form>
                <div className="flex flex-row w-[100%] h-[12%] justify-between items-center px-[8%]">
                    <div className="flex flex-row items-center justify-between w-[27%] h-[100%] border border-black pl-[5px] pr-[5px]">
                        <button className="text-[1.4vw] font-semibold max-[885px]:text-[2vw]">-</button>
                        <p className="text-[1.4vw] max-[885px]:text-[2vw]">2</p>
                        <button className="text-[1.4vw] font-semibold max-[885px]:text-[2vw]">+</button>
                    </div>
                    <button className="w-[63%] h-[100%] text-white bg-black border border-black text-[1vw] max-[885px]:text-[1.8vw]">Add To Cart</button>
                </div>
            </div>
            <div className={`max-[1256px]:w-[48%] w-[35%] h-[100%] ${props.view.mainslide} bg-cover bg-no-repeat bg-[top-center] border border-black`}>
                <div className="w-[100%] hidden justify-end gap-x-[2%] pt-[1%] max-[1256px]:flex">
                    <div className="w-[10%] aspect-[1/1]" onClick={prev}>
                        <svg viewBox="0 0 40 40" className="flex justify-center items-center rotate-[270deg] opacity-70 hover:opacity-100 group">
                            <g>
                                <circle className="group-hover:animate-[rnd_1s_ease-in-out_1] group-hover:delay-0 group-hover:fill-mode-forwards" cx="20" cy="20" r="16" fill="#000" strokeWidth="2" strokeDasharray="24 4" strokeDashoffset="0"/>
                                <polyline points="12,22 20,12 28,22" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round"/>
                            </g>
                        </svg>
                    </div>
                    <div className="w-[10%] aspect-[1/1]" onClick={next}>
                        <svg viewBox="0 0 40 40" className="flex justify-center items-center rotate-[90deg] opacity-70 hover:opacity-100 group">
                            <g>
                                <circle className="group-hover:animate-[rnd_1s_ease-in-out_1] group-hover:delay-0 group-hover:fill-mode-forwards" cx="20" cy="20" r="16" fill="#000" strokeWidth="2" strokeDasharray="24 4" strokeDashoffset="0"/>
                                <polyline points="12,22 20,12 28,22" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round"/>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <section className="max-[1256px]:hidden w-[10%] h-[100%] flex flex-col justify-between">
                <div className={`w-[100%] h-[30%] ${props.view.mainslide} bg-cover bg-no-repeat bg-[top-center] border border-black`}></div>
                <div className={`w-[100%] h-[30%] ${props.view.sideslide} bg-cover bg-no-repeat bg-[top-center] border border-black`}></div>
                <div className={`w-[100%] h-[30%] ${props.view.backslide} bg-cover bg-no-repeat bg-[top-center] border border-black`}></div>
            </section>
        </section>
    )
}

export default Men;

/*

<div className="flex flex-row w-[95%] aspect-[1/0.1] justify-between items-center pl-[20px]">
                    <div className="flex flex-row items-center justify-between w-[27%] h-[100%] border border-black pl-[5px] pr-[5px]">
                        <button className="text-[1vw] max-[885px]:text-[2vw]">-</button>
                        <p className="text-[1vw] max-[885px]:text-[2vw]">2</p>
                        <button className="text-[1vw] max-[885px]:text-[2vw]">+</button>
                    </div>
                    <button className="w-[63%] h-[100%] text-white bg-black border border-black text-[1vw] max-[885px]:text-[1.8vw]">Add to Cart</button>
                </div>

                </form>
                <div className="flex flex-col w-[95%] aspect-[1/0.1] pl-[20px]">
                    <p className="text-[1.3vw] max-[885px]:text-[2vw] font-semibold">Size</p>
                    <svg viewBox="0 0 270 10">
                        <line x1="0" y1="3" x2="270" y2="3" stroke="#000" fill="#000" strokeWidth="1.4"/>
                    </svg>
                    <div className="flex flex-row gap-x-[10px] gap-y-[10px] w-[95%]">
                        {props.view.size.map((size)=> (
                            <button className="flex justify-center items-center w-[10%] aspect-[1/1] border border-black max-[885px]:text-[1.8vw] text-[1.3vw]">{size}</button>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row w-[95%] aspect-[1/0.1] justify-between items-center pl-[20px]">
                    <div className="flex flex-row items-center justify-between w-[27%] h-[100%] border border-black pl-[5px] pr-[5px]">
                        <button className="text-[1vw] max-[885px]:text-[2vw]">-</button>
                        <p className="text-[1vw] max-[885px]:text-[2vw]">2</p>
                        <button className="text-[1vw] max-[885px]:text-[2vw]">+</button>
                    </div>
                    <button className="w-[63%] h-[100%] text-white bg-black border border-black text-[1vw] max-[885px]:text-[1.8vw]">Add to Cart</button>
                </div>

<section className="h-fit w-[94%] flex flex-row items-center gap-x-[35px] pl-[20px]">
    <div className="h-[300px] w-[310px] justify-center flex flex-col gap-y-[30px]">
        <svg width="310" height="300" className="absolute">
            <polyline points="1,30 1,1 35,1" fill="none" stroke="#000" strokeWidth="2"/>
            <polyline points="309,265 309,299 275,299" fill="none" stroke="#000" strokeWidth="2"/>
        </svg>
        <div className="w-[230px] flex flex-row gap-x-[55px] items-center pl-[20px]">
            <p className="font-semibold text-[16px]">Wool X Buffer Jacket</p>
            <p className="font-semibold text-[16px]">$100.00</p>
        </div>
        <div className="flex flex-col w-[270px] pl-[20px]">
            <p className="text-[15px] font-semibold">Color</p>
            <svg width="270" height="10">
                <line x1="0" y1="3" x2="270" y2="3" stroke="#000" fill="#000" strokeWidth="1.4"/>
            </svg>
            <div className="flex flex-row gap-x-[10px] gap-y-[10px] w-[270px]">
                <button className="w-[35px] h-[15px] border-2 border-black"></button>
            </div>
        </div>
        <div className="flex flex-col w-[270px] pl-[20px]">
            <p className="text-[15px] font-semibold">Size</p>
            <svg width="270" height="10">
                <line x1="0" y1="3" x2="270" y2="3" stroke="#000" fill="#000" strokeWidth="1.4"/>
            </svg>
            <div className="flex flex-row gap-x-[10px] gap-y-[10px] w-[270px]">
                <button className="w-[35px] h-[15px] border-2 border-black"></button>
            </div>
        </div>
        <div className="flex flex-row w-[270px] justify-between items-center pl-[20px]">
            <div className="flex flex-row items-center justify-between w-[70px] h-[30px] border border-black pl-[5px] pr-[5px]">
                <button className="text-[20px] pb-[3px]">-</button>
                <p className="text-[15px]">2</p>
                <button className="text-[20px] pb-[3px]">+</button>
            </div>
            <button className="w-[170px] h-[30px] text-white bg-black text-[13px]">Add to Cart</button>
        </div>
    </div>
    <div className="w-[300px] h-[300px] bg-[url('/public/sec2-img.jpeg')] bg-cover bg-no-repeat bg-[top-center] border border-black"></div>
    <section className="h-[300px] flex flex-col justify-between">
        <div className="w-[90px] h-[90px] bg-[url('/public/sec2-img.jpeg')] bg-cover bg-no-repeat bg-[top-center] border border-black"></div>
        <div className="w-[90px] h-[90px] bg-[url('/public/sec2-img.jpeg')] bg-cover bg-no-repeat bg-[top-center] border border-black"></div>
        <div className="w-[90px] h-[90px] bg-[url('/public/sec2-img.jpeg')] bg-cover bg-no-repeat bg-[top-center] border border-black"></div>
    </section>
</section>
*/