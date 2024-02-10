import {filters, prices, menProduct} from "./str";
import { useRef, useState } from "react";


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
                    <p className="text-[1rem] font-semibold">SEE ALL</p>
                    <svg className="" width="50" height="50">
                        <line x1="12" y1="25" x2="40" y2="25" stroke="#000" strokeWidth="2.2" strokeLinecap="round"/>
                        <polyline points="30,18 40,25 30,32" stroke="#000" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </section>
    )
}

function Sec2() {

    // Initialize state for dropdown visibility
    const [dropdownVisibility, setDropdownVisibility] = useState([false, false, false]);
    const [binary, setBinary] = useState(null);
    const [view, setView] = useState(null);
    const switchh = useRef(null);

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
            <div className="w-[200px] flex flex-col items-start border-r border-black gap-y-[20px] pl-[30px] pb-[200px]">
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
            <div className="w-[85.4%] h-fit flex flex-row flex-wrap gap-x-[48px] gap-y-[48px] justify-start pl-[50px] pr-[50px] pt-[100px]">
                {menProduct.map((prd, index) => (
                    <>
                        {(index === 0) ? <></> : <Review mainslide={prd.Mainslide} name={prd.name} price={prd.price} on={view} setView={setView} ind={index} sideslide={prd.sideslide} backslide={prd.backslide} color={prd.color1} size={prd.size} switchh={switchh}/>}
                        {(switchh.current === index) && (index !== 0) ? <Fullview/> : <></>}
                    </>
                ))}
            </div>
        </section>
    )
}

function Review ({mainslide, name, ind, price, on, setView, sideslide, backslide, color, size, switchh}) {
    function fullview () {
        console.log(ind);
        setView({mainslide, name, price, setView, sideslide, backslide, color, size})
        switchh.current = ind;
        console.log(switchh);
        if (switchh.current % 3 !== 0) {
            switchh.current++;
            console.log(switchh);
        }

        if (switchh.current % 3 !== 0) {
            switchh.current++;
            console.log(switchh);
        }
    }

    return (
        <div className="flex flex-col justify-between h-[300px] w-[30%]" onClick={fullview}>
            <div className={`w-[100%] h-[260px] border border-black bg-cover bg-no-repeat bg-[top-center] ${mainslide}`}></div>
            <div className="w-[100%] h-[35px] flex flex-row justify-between">
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

function Fullview () {
    return (
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