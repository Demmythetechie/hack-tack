import {filters, prices, menProduct} from "./str";
import { useEffect, useRef, useState } from "react";


function Men(){
    return(
        <section>
            <Sec1/>
            <Sec2/>
        </section>
    )
}

function Sec1() {
    return(
        <section className="w-[100%] flex flex-col justify-center items-center px-[30px] py-[30px] border-b border-black">
            <div className="w-[90%]">
                <p className="text-[2rem] font-semibold">119 items</p>
            </div>
            <div className="w-[90%] flex flex-row justify-between items-end">
                <p className=" text-[2.3rem] font-bold">For Men</p>
                <div className="flex flex-row justify-between items-center h-[30px] w-[120px]">
                    <p className="max-[530px]:hidden text-[1rem] font-semibold">SEE ALL</p>
                    <svg className="max-[530px]:hidden" width="50" height="50">
                        <line x1="12" y1="25" x2="40" y2="25" stroke="#000" strokeWidth="2.2" strokeLinecap="round"/>
                        <polyline points="30,18 40,25 30,32" stroke="#000" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </section>
    )
}

function Sec2() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
        return dropdownVisibility[index] ? "hidden" : "flex justify-start";
    }
    
    function showhide(){
        if (binary === 1) {
            setBinary(0);
        } else {
            setBinary(1);
        }   
    }

    return (
        <section className="w-[100%] flex flex-row">
            <div className="max-[885px]:hidden w-[200px] flex flex-col items-start border-r border-black gap-y-[20px] pl-[30px] pb-[200px]">
                <p className="text-[1.6rem] font-semibold mb-[20px] mt-[20px]">Filter By</p>
                {filters.map((filter, index)=>(
                    <div className="flex flex-col items-start justify-center w-[150px] gap-y-[10px]">
                        <div className="flex flex-row items-center gap-x-[8px]" onClick={() => toggleDropdown(index)}>
                            <p className="font-semibold text-[1rem]">{filter.type}</p>
                            <svg width="14" height="14" className="mt-[3px]">
                                <polyline points="2,4 7,10 12,4" stroke="#000" strokeWidth="2" fill="none"/>
                            </svg>
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
                <div className="flex flex-col items-start justify-center w-[150px] gap-y-[10px]">
                    <div className="flex flex-row items-center gap-x-[8px]" onClick={showhide}>
                        <p className="font-semibold text-[1rem]">Price</p>
                        <svg width="14" height="14" className="mt-[3px]">
                            <polyline points="2,4 7,10 12,4" stroke="#000" strokeWidth="2" fill="none"/>
                        </svg>
                    </div>
                    <div className={(binary === 1) ? "hidden": "flex justify-start"}>
                        <form className="flex flex-col">
                            {prices.map((price)=>(
                                <div className="flex flex-row">
                                    <input className="text-[1rem] font-normal" type="button" name={price} value={price}/>
                                </div>
                            ))}
                        </form>
                    </div>
                    <form className="flex flex-row flex-wrap gap-x-[7px] gap-y-[10px]">
                        <input className="text-[15px] w-[45px] text-center border border-black rounded-[4px]" type="text" name="min" value="$Min"/>
                        <p>-</p>
                        <input className="text-[15px] w-[45px] text-center border border-black rounded-[5px]" type="text" name="max" value="$Max"/>
                        <input className="text-black text-[15px] w-[110px] bg-white border border-black rounded-[4px] h-[30px]" type="submit" value="Go"/>
                    </form>
                </div>
            </div>
            <div className="max-[885px]:w-[100%] w-[85.4%] h-fit flex flex-row items flex-wrap gap-x-[48px] gap-y-[48px] justify-center pl-[50px] pr-[50px] pt-[100px] pb-[100px] max-[530px]:pt-[40px] max-[530px]:pb-[40px] max-[460px]:pr-[30px] max-[460px]:pl-[30px] border border-black">
                {menProduct.map((prd, index) => (
                    <>
                        {(index === 0) ? <></> : <Review mainslide={prd.Mainslide} name={prd.name} price={prd.price} on={view} setView={setView} ind={index} sideslide={prd.sideslide} backslide={prd.backslide} color={prd.color1} size={prd.size} switchh={switchh}/>}
                        {(switchh.current === index) && (index !== 0) ? <Fullview view={view}/> : <></>}
                    </>
                ))}
            </div>
        </section>
    )
}

function Review ({mainslide, name, ind, price, on, setView, sideslide, backslide, color, size, switchh}) {
    function fullview () {
        setView({mainslide, name, price, sideslide, backslide, color, size})
        switchh.current = ind;
        if (switchh.current % 3 !== 0 && window.innerWidth >= 1256) {
            switchh.current++;
        }

        if (switchh.current % 3 !== 0 && window.innerWidth >= 1256) {
            switchh.current++;
        }

        if (switchh.current % 2 !== 0 && window.innerWidth <= 1256) {
            switchh.current++;
        }
    }

    return (
        <div className="max-[1256px]:w-[44%] max-[885px]:w-[44%] max-[460px]:w-[100%] max-[530px]:w-[90%] flex flex-col items-center justify-between w-[30%] aspect-[1/1.1]" onClick={fullview}>
            <div className={`w-[100%] aspect-[1/1] border border-black bg-cover bg-no-repeat bg-[top-center] ${mainslide}`}></div>
            <div className="w-[100%] aspect-[1/0.01]"></div>
            <div className="w-[100%] aspect-[1/0.1] flex flex-row justify-between">
                <div className="flex items-center w-[85%] h-[35px] border border-black pl-[20px]">
                    <p className="text-[0.8rem] font-semibold">{name}</p>
                </div>
                <div className="flex items-center justify-center w-[15%] h-[35px] border-t border-b border-r border-black">
                    <p className="text-[0.8rem] font-semibold">{price}</p>
                </div>
            </div>
        </div>
    )
}

function Fullview (props) {
    console.log("re-render");
    return (
        <section className="h-fit w-[94%] flex flex-row items-center gap-x-[7%] pl-[20px]">
            <div className="max-[1092px]:w-[50%] relative w-[35%] aspect-[1/0.97] justify-center flex flex-col gap-y-[8%]">
                <svg viewBox="0 0 310 300" className="aspect-[1/1] absolute">
                    <polyline points="1,30 1,1 35,1" fill="none" stroke="#000" strokeWidth="2"/>
                    <polyline points="309,265 309,299 275,299" fill="none" stroke="#000" strokeWidth="2"/>
                </svg>
                <div className="w-[90%] flex flex-row gap-x-[55px] items-center pl-[20px] ">
                    <p className="font-semibold max-[885px]:text-[2vw] text-[1.3vw]">{props.view.name}</p>
                    <p className="font-semibold max-[885px]:text-[2vw] text-[1.3vw]">{props.view.price}</p>
                </div>
                <div className="flex flex-col w-[95%] aspect-[1/0.1] pl-[20px]">
                    <p className="text-[1.3vw] max-[885px]:text-[2vw] font-semibold">Color</p>
                    <svg viewBox="0 0 270 10">
                        <line x1="0" y1="3" x2="270" y2="3" stroke="#000" fill="#000" strokeWidth="1.4"/>
                    </svg>
                    <div className="flex flex-row gap-x-[10px] gap-y-[10px] w-[95%]">
                        {props.view.color.map((color)=> (
                            <button className={` w-[15%] aspect-[1/0.4] border-2 border-black ${color}`}></button>
                        ))}
                    </div>
                </div>
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
            </div>
            <div className={`max-[1092px]:w-[48%] w-[34%] aspect-[1/1] ${props.view.mainslide} bg-cover bg-no-repeat bg-[top-center] border border-black`}></div>
            <section className="max-[1092px]:hidden w-[10.4%] aspect-[1/3.27] flex flex-col justify-between">
                <div className={`w-[100%] aspect-[1/1] ${props.view.mainslide} bg-cover bg-no-repeat bg-[top-center] border border-black`}></div>
                <div className={`w-[100%] aspect-[1/1] ${props.view.sideslide} bg-cover bg-no-repeat bg-[top-center] border border-black`}></div>
                <div className={`w-[100%] aspect-[1/1] ${props.view.backslide} bg-cover bg-no-repeat bg-[top-center] border border-black`}></div>
            </section>
        </section>
    )
}

function Fullview1256 (props) {
    return (
        <section className="h-fit w-[94%] flex flex-row items-center gap-x-[7%] pl-[20px]">
            <div className="relative w-[50%] aspect-[1/0.97] justify-center flex flex-col gap-y-[8%]">
                <svg viewBox="0 0 310 300" className="aspect-[1/1] absolute">
                    <polyline points="1,30 1,1 35,1" fill="none" stroke="#000" strokeWidth="2"/>
                    <polyline points="309,265 309,299 275,299" fill="none" stroke="#000" strokeWidth="2"/>
                </svg>
                <div className="w-[90%] flex flex-row gap-x-[55px] items-center pl-[20px] ">
                    <p className="font-semibold text-[1.3vw]">{props.view.name}</p>
                    <p className="font-semibold text-[1.3vw]">{props.view.price}</p>
                </div>
                <div className="flex flex-col w-[95%] aspect-[1/0.1] pl-[20px]">
                    <p className="text-[1.3vw] font-semibold">Color</p>
                    <svg viewBox="0 0 270 10">
                        <line x1="0" y1="3" x2="270" y2="3" stroke="#000" fill="#000" strokeWidth="1.4"/>
                    </svg>
                    <div className="flex flex-row gap-x-[10px] gap-y-[10px] w-[95%]">
                        {props.view.color.map((color)=> (
                            <button className={` w-[15%] aspect-[1/0.4] border-2 border-black ${color}`}></button>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col w-[95%] aspect-[1/0.1] pl-[20px]">
                    <p className="text-[1.3vw] font-semibold">Size</p>
                    <svg viewBox="0 0 270 10">
                        <line x1="0" y1="3" x2="270" y2="3" stroke="#000" fill="#000" strokeWidth="1.4"/>
                    </svg>
                    <div className="flex flex-row gap-x-[10px] gap-y-[10px] w-[95%]">
                        {props.view.size.map((size)=> (
                            <button className="flex justify-center items-center w-[10%] aspect-[1/1] border border-black text-[1.3vw]">{size}</button>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row w-[95%] aspect-[1/0.1] justify-between items-center pl-[20px]">
                    <div className="flex flex-row items-center justify-between w-[27%] h-[100%] border border-black pl-[5px] pr-[5px]">
                        <button className="text-[1vw]">-</button>
                        <p className="text-[1vw]">2</p>
                        <button className="text-[1vw]">+</button>
                    </div>
                    <button className="w-[63%] h-[100%] text-white bg-black border border-black text-[1vw]">Add to Cart</button>
                </div>
            </div>
            <div className={`w-[48.6%] aspect-[1/1] ${props.view.mainslide} bg-cover bg-no-repeat bg-[top-center] border border-black`}></div>
        </section>
    )
}

export default Men;

/*
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