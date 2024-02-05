import {filters, prices} from "./str";
import { useRef } from "react";


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

    const content = useRef(null);
    function dropdown() {
        console.log(content.current.display);
        content.current.style.display = "none";
        console.log(content.current.display);
        console.log("done");
    }

    return (
        <section className="w-[100%] flex flex-row">
            <div className="w-[200px] flex flex-col justify-center items-start border-r border-black gap-y-[20px] pl-[30px] pb-[200px]">
                <p className="text-[1.6rem] font-semibold mb-[20px] mt-[20px]">Filter By</p>
                {filters.map((filter)=>(
                    <div className="flex flex-col items-start justify-center w-[150px] gap-y-[10px]">
                        <div className="flex flex-row items-center gap-x-[8px]" onClick={dropdown}>
                            <p className="font-semibold text-[1rem]">{filter.type}</p>
                            <svg width="14" height="14" className="mt-[3px]">
                                <polyline points="2,4 7,10 12,4" stroke="#000" strokeWidth="2" fill="none"/>
                            </svg>
                        </div>
                        <div className="flex justify-start" ref={content}>
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
                    <div className="flex flex-row items-center gap-x-[8px]">
                        <p className="font-semibold text-[1rem]">Price</p>
                        <svg width="14" height="14" className="mt-[3px]">
                            <polyline points="2,4 7,10 12,4" stroke="#000" strokeWidth="2" fill="none"/>
                        </svg>
                    </div>
                    <div className="flex justify-start">
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
            <div className="w-[85.4%] flex flex-col border border-black">

            </div>
        </section>
    )
}

export default Men;