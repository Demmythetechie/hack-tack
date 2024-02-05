import {new_arrival, best_selling, collection} from "./str";
import { useRef } from "react";


function Home () {
    return (
        <section className="pt-[50px] w-[100%] flex flex-col items-center">
            <Sec1/>
            <Sec2/>
            <Sec3/>
            <Sec4/>
            <Sec5/>
        </section>
    )
}

function Sec1 () {
    return (
        <section className="flex flex-col justify-center items-center w-[100%] h-[850px] border-b border-black gap-y-[50px]">
            <div className="bg-[url('/public/sec1-img.jpeg')] w-[80%] h-[700px] bg-cover bg-no-repeat bg-[top-center]"></div>
           <Head heading="New Arrival"/>
        </section>
    )
}

function Sec2() {
    return (
        <section className="flex flex-col justify-center items-center w-[100%] pt-[50px] pb-[30px] border-b border-black">
            <div className="flex flex-row flex-wrap w-[80%] gap-x-[4%] gap-y-[48px] pb-[60px]">
                {new_arrival.map((arrival) =>(
                    <div className="flex flex-col w-[48%] h-[550px] gap-y-[10px]">
                        <div style={{background: `url(${arrival.img})`, backgroundPosition: "top-center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}} className="bg-cover bg-no-repeat bg-center w-[100%] h-[500px] border border-black"></div>
                        <div className="w-[100%] h-[60px] flex flex-row">
                            <div className="pl-[20px] w-[80%] flex justify-start items-center border border-black">
                                <p className="text-[17px] font-semibold">{arrival.product}</p>
                            </div>
                            <div className="w-[20%] flex items-center border border-black justify-center">
                                <p className="font-semibold">{arrival.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="flex flex-col w-[48%] h-[550px] gap-y-[40px] items-start justify-center">
                    <p className="text-[1.1rem]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu mi sed felis hendrerit laoreet. Suspendisse tristique facilisis orci, in laoreet felis vestibulum eget.
                    </p>
                    <button className="w-[150px] h-[55px] bg-black text-white text-[1.3rem]">Shop Now</button>
                    <div className="relative flex flex-row justify-end w-[100%] h-[330px] items-end">
                        <div className="relative w-[200px] h-[200px]">
                            <svg width="200" height="200" className="">
                                <circle cx="100" cy="100" r="90" fill="#000"/>
                                <line x1="100" y1="128" x2="100" y2="150" stroke="#fff" strokeWidth="3"/>
                                <polyline points="92,140 100,150 108,140" fill="none" stroke="#fff" strokeWidth="3"/>
                            </svg>
                            <p className="text-[1.3rem] font-semibold absolute z-10 text-white top-[75px] left-[32px]">Discover More</p>
                        </div>
                    </div>
                </div>
            </div>
            <Head heading="Collection"/>
        </section>
    )
}

function Sec3() {
    return (
        <section className="flex flex-col justify-center items-center w-[100%] pt-[50px] pb-[30px] border-b border-black">
            <section className="pt-[50px] w-[80%] flex flex-row flex-wrap gap-x-[4%] pb-[60px]">
                <div className="flex flex-col pl-[20px] pt-[30px] pb-[10px] justify-between w-[48%] border border-black h-[550px] bg-[url('/public/sec1-img.jpeg')] bg-no-repeat bg-cover bg-[top-center]">
                    <p className="text-[1rem] font-semibold text-white">SW-20</p>
                    <p className="text-[1rem] font-semibold text-white">OG X Summer</p>
                </div>
                <div className="flex flex-col w-[48%] h-[550px] gap-y-[40px]">
                    <Sec3Content collection="SW-20" type="OG X Summer"/>
                    <Sec3Content collection="SW-20" type="OG X Summer"/>
                </div>
            </section>
            <Head heading="Best Selling"/>
        </section>
    )
}

function Sec4() {

    let slide = useRef(null);

    function previous() {
        slide.current.scrollLeft -= 200;
        console.log(slide.current.scrollLeft);
        console.log('prev');
    }
    
    function next() {
        slide.current.scrollLeft += 200;
        console.log(slide.current.scrollLeft);
        console.log('next');
    }

    return (
        <section className="flex flex-col items-center w-[100%] pt-[50px] pb-[60px] gap-y-[30px] border-b border-black">
            <div className="flex flex-row w-[80%] gap-x-[4%] gap-y-[48px] overflow-hidden" ref={slide}>
                {best_selling.map((best) => (
                    <div className="flex flex-col w-[420px] h-[550px] gap-y-[10px]">
                        <div style={{background: `url(${best.img})`, backgroundPosition: "top-center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}} className="bg-cover bg-no-repeat bg-center w-[420px] h-[500px] border border-black"></div>
                        <div className="w-[420px] h-[60px] flex flex-row">
                            <div className="pl-[20px] w-[80%] flex justify-start items-center border border-black">
                                <p className="text-[17px] font-semibold">{best.product}</p>
                            </div>
                            <div className="w-[20%] flex items-center border border-black justify-center">
                                <p className="font-semibold">{best.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-row justify-between w-[80%] items-center">
                <div className="flex flex-row justify-between">
                    <svg className="prev" width="50" height="50" onClick={previous}>
                        <circle cx="25" cy="25"  r="22" fill="#000"/>
                        <polyline points="25,18 18,25 25,32" stroke="#fff" strokeWidth="3"/>
                        <line x1="18" y1="25" x2="32" y2="25" stroke="#fff" strokeWidth="3"/>
                    </svg>
                    <svg className="next" width="50" height="50" onClick={next}>
                        <circle cx="25" cy="25"  r="22" fill="#000"/>
                        <polyline points="25,18 32,25 25,32" stroke="#fff" strokeWidth="3"/>
                        <line x1="18" y1="25" x2="32" y2="25" stroke="#fff" strokeWidth="3"/>
                    </svg>
                </div>
                <p className="text-[1.2rem] font-bold">3/10</p>
            </div>
            <button className="w-[150px] h-[55px] bg-black text-white text-[1.3rem] b-[30px]">Shop Now</button>
            <Head heading="Hack&Tack"/>
        </section>
    )
}

function Sec5() {
    return (
        <section className="flex flex-col justify-center items-center w-[100%]">
            {collection.map((cl)=>(
                <div className="w-[100%] h-[100px] pl-[10%] pr-[10%] flex flex-row items-center border-black border border-t-0 border-r-0 border-l-0 justify-between ">
                    <p className="text-[1.5rem] font-bold">{cl.name}</p>
                    <svg className={cl.cls} width="50" height="50">
                        <line x1="20" y1="25" x2="40" y2="25" stroke="#000" strokeWidth="2.4" strokeLinecap="round"/>
                        <polyline points="30,18 40,25 30,32" stroke="#000" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            ))}
            <div className="flex flex-row justify-between w-[100%] h-[50px] pl-[10%] pr-[10%] items-center">
                <div className="flex flex-row gap-x-[20px] items-center">
                    <p className="text-[1rem]">©2024 Hack&Tack clothing. All Right Reserved</p>
                </div>
                <div className="flex flex-row gap-x-[20px] items-center">
                    <select className="w-[75px]">
                        <option>English</option>
                        <option>French</option>
                    </select>
                    <p className="text-[1rem]">Privacy Reserved</p>
                </div>
            </div>
        </section>
    )
}




function Head(props) {
    return (
        <div className="flex flex-row justify-between items-center h-[30px] w-[80%]">
            <p className=" text-[1.8rem] font-bold">{props.heading}</p>
            <div className="flex flex-row justify-between items-center h-[30px] w-[120px]">
                <p className="text-[17px] font-semibold">SEE ALL</p>
                <svg className="" width="50" height="50">
                    <line x1="2" y1="25" x2="40" y2="25" stroke="#000" strokeWidth="2.2" strokeLinecap="round"/>
                    <polyline points="25,18 40,25 25,32" stroke="#000" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    )
}

function Sec3Content(props) {
    return(
        <div className="flex flex-col pl-[20px] pt-[30px] pb-[10px] justify-between w-[100%] h-[255px] bg-[url('/public/sec1-img.jpeg')] bg-no-repeat bg-cover bg-[top-center]">
            <div className="flex flex-row w-[90%] justify-start">
                <p className="text-[1rem] font-semibold text-white">{props.collection}</p>
            </div>
            <div className="flex flex-row w-[96%] justify-between">
                <p className="text-[1rem] font-semibold text-white">{props.type}</p>
                <p className="text-[1rem] font-semibold text-white">SW-20</p>
            </div>
        </div>
    )
}

export default Home;